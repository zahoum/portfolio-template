import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* حقوق النشر */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Brahim Taouala. All rights reserved.
        </p>

        {/* الشعار */}
        <div className="footer-quote">
          <span className="quote-dot"></span>
          Securing the digital world.
        </div>

        {/* زر الرجوع */}
        <a href="#home" className="back-to-top">
          Back to top
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
        </a>

      </div>
    </footer>
  );
}