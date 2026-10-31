import { useEffect, useState } from 'react';
import './Hero.css';

const nameText = "Brahim Taouala";

export default function Hero() {
  const [displayText, setDisplayText] = useState('');

  // Animation logic: كتكتب الحروف واحد بواحد
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= nameText.length) {
        setDisplayText(nameText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // السرعة ديال الكتابة (100ms)

    return () => clearInterval(interval);
  }, []);

  // تأكد أن الجزء الأول ديال الاسم بلون عادي، والجزء الثاني (Taouala) بلون أحمر
  const renderName = () => {
    const firstName = "Brahim ";
    const lastName = "Taouala";
    
    const firstPart = displayText.slice(0, firstName.length);
    const secondPart = displayText.slice(firstName.length);

    return (
      <>
        {firstPart}
        <span className="accent">{secondPart}</span>
        {/* المؤشر اللي كيبرق */}
        {displayText.length < nameText.length && <span className="hero-cursor">|</span>}
      </>
    );
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        
        {/* Left Side: Text */}
        <div className="hero__content">
          <p className="hero__greeting">
            <span className="line"></span> Hello, I'm
          </p>
          
          {/* هنا فين كاينة الأنيماسيون */}
          <h1 className="hero__title">
            {renderName()}
          </h1>

          <h2 className="hero__subtitle">Network & Security Specialist</h2>
          <p className="hero__desc">
            Passionate about cybersecurity, network infrastructure and system administration. 
            I build secure, reliable and scalable solutions to protect and connect the digital world.
          </p>
          
          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              View Projects
            </a>
            <a href="#cv" className="btn btn--outline">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="hero__socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="https://github.com/Brahimtaouala" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.39-5.25 5.67.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
            <a href="mailto:brahimtaouala@gmail.com">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>

        {/* Right Side: Terminal */}
        <div className="hero__visual">
          <div className="terminal">
            <div className="terminal__header">
              <div className="terminal__dots">
                <span></span><span></span><span></span>
              </div>
              <span className="terminal__title">brahim@portfolio:~</span>
            </div>
            <div className="terminal__body">
              <p><span className="prompt">brahim@portfolio:~$</span> whoami</p>
              <p className="output">brahim</p>
              <p><span className="prompt">brahim@portfolio:~$</span> cat motivation.txt</p>
              <p className="output">&gt; Build secure networks.</p>
              <p className="output">&gt; Stop cyber threats.</p>
              <p className="output">&gt; Keep learning.</p>
              <p className="output">&gt; Make an impact.</p>
              <p><span className="prompt">brahim@portfolio:~$</span> <span className="cursor">_</span></p>
            </div>
          </div>

          <div className="hero__floating-text">
            <h3>Securing Networks.</h3>
            <h3>Building Resilient Systems.</h3>
          </div>
        </div>

      </div>
    </section>
  );
}