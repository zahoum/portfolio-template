import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // هنا فين كتحط الـ API ديال Formspree ولا EmailJS
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('Message sent successfully! ✅');
      setForm({ name: '', email: '', message: '' });
      
      // كيمسح الرسالة من بعد 3 ثواني
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        
        <div className="section-header center">
          <h2 className="section-title">
            <span className="accent">/</span> Get In <span className="accent">Touch</span>
          </h2>
          <p className="section-subtitle">Have a project in mind? Let's build something secure together.</p>
        </div>

        <div className="contact-wrapper">
          
          {/* الجنب اليسار: معلومات التواصل */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4>Email Me</h4>
                <a href="mailto:brahimtaouala@gmail.com">brahimtaouala@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>Marrakech, Morocco</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+212 6 12 34 56 78</p>
              </div>
            </div>
          </div>

          {/* الجنب اليمن: الفورم */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  value={form.name} 
                  onChange={(e) => setForm({...form, name: e.target.value})} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  value={form.email} 
                  onChange={(e) => setForm({...form, email: e.target.value})} 
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Your Message</label>
              <textarea 
                rows="5" 
                placeholder="How can I help you?..." 
                value={form.message} 
                onChange={(e) => setForm({...form, message: e.target.value})} 
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn--primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft: '8px'}}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </>
              )}
            </button>
            
            {status && <p className="status-msg">{status}</p>}
          </form>

        </div>
      </div>
    </section>
  );
}