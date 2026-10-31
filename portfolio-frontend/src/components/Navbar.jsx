import { useEffect, useState } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState('dark'); // بدينا بـ Dark باش يبان الستايل
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 100) setHidden(true);
      else setHidden(false);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${hidden ? 'navbar--hidden' : ''}`}>
      <div className="navbar__container">
        
        {/* Logo Hna */}
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <div className="logo-box">
            <span className="logo-b">B</span>
            <span className="logo-t">T</span>
          </div>
          <div className="logo-text-box">
            <span className="logo-name">Brahim <span>Taouala</span></span>
            <span className="logo-title">Network & Security Specialist</span>
          </div>
        </a>

        {/* Links */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#home" className="active" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#cv" onClick={closeMenu}>CV</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Actions */}
        <div className="navbar__actions">
          
          {/* Theme Toggle (Sun/Moon) */}
          <button className="nav-btn nav-btn--theme" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            )}
          </button>

          {/* Hire Me Button */}
          <a href="#contact" className="navbar__hire" onClick={closeMenu}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '6px'}}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            Hire Me
          </a>

          {/* Burger */}
          <button
            className={`navbar__burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}