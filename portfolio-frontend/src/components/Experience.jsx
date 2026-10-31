import './Experience.css';

const timelineData = [
  {
    year: '2026',
    title: 'DUT Réseaux Informatiques et Sécurité',
    place: 'EST Guelmim – Université Ibn Zohr',
    tag: 'Diploma Obtained',
    tagClass: 'success'
  },
  {
    year: '2026',
    title: 'PFE - ONP (Office National des Pêches)',
    place: 'Direction SI & Digital – Casablanca',
    tag: 'Internship',
    tagClass: 'intern'
  },
  {
    year: '2025',
    title: 'Stage - ADAPTIVE IT',
    place: 'Casablanca',
    tag: 'Internship',
    tagClass: 'intern'
  },
  {
    year: '2026',
    title: 'EST KLAA - Admission',
    place: 'EST Kelaat Sraghna – Université Ibn Zohr',
    tag: 'Admission',
    tagClass: 'success'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="accent">/</span> Experience & <span className="accent">Education</span>
          </h2>
          <p className="section-subtitle">My academic journey and professional experience</p>
        </div>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.place}</p>
              </div>
              <div className={`timeline-tag ${item.tagClass}`}>
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}