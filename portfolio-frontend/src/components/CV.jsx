import './CV.css';

export default function CV() {
  return (
    <section id="cv" className="cv-section section-padding">
      <div className="container cv-container">
        
        {/* الجنب اليسار: النص و الأزرار */}
        <div className="cv-content">
          <h2 className="section-title">
            <span className="accent">/</span> Let's Build Something <span className="accent">Secure</span>
          </h2>
          <p className="cv-desc">
            I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to connect, feel free to reach out. You can also download my CV for a detailed overview of my skills.
          </p>
          
          <div className="cv-buttons">
            <a href="#contact" className="btn btn--primary">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Contact Me
            </a>
             
            <a href="/cv.pdf" download className="btn btn--outline">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>
        </div>


        <div className="cv-image-wrapper">
          <div className="cv-image-ring"></div>
          <img 
            src="profile.png"
            alt="Brahim Taouala" 
            className="cv-profile-img" 
          />
        </div>

      </div>
    </section>
  );
}