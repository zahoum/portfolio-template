import './About.css';

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="accent">/</span> About <span className="accent">Me</span>
          </h2>
          <p className="section-subtitle">More about my background and goals</p>
        </div>

        <div className="about__content">
          {/* Left: Image */}
          <div className="about__image-box">
            {/* حط هنا سمية التصويرة ديالك مثلا: profile.jpg */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Brahim Taouala" 
              className="about__img"
            />
          </div>

          {/* Right: Text & Timeline */}
          <div className="about__text-box">
            <p className="about__bio">
              I'm Brahim Taouala, a graduate in Computer Networks and Security from 
              EST Guelmim (DUT R1.5) with a passion for cybersecurity, networking and system administration.
            </p>

            <div className="about__education">
              <div className="edu-item">
                <span className="edu-year">2026</span>
                <div className="edu-details">
                  <h4>DUT Réseaux Informatiques et Sécurité (2026)</h4>
                  <p>EST Guelmim – Université Ibn Zohr</p>
                  <p className="edu-loc">📍 Marrakech (Morocco)</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn--outline" style={{marginTop: '20px'}}>
              Learn more about me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}