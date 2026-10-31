import { useEffect, useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Brahimtaouala/repos?sort=updated&per_page=6')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <div>
            <h2 className="section-title">
              <span className="accent">/</span> Featured <span className="accent">Projects</span>
            </h2>
            <p className="section-subtitle">Real-world projects showcasing my technical skills</p>
          </div>
          <a href="https://github.com/Brahimtaouala" target="_blank" rel="noreferrer" className="view-all">
            View all projects →
          </a>
        </div>

        {loading ? (
          <p style={{color: 'var(--text-muted)'}}>Loading projects...</p>
        ) : (
          <div className="projects-grid">
            {repos.map((repo) => (
              <a href={repo.html_url} target="_blank" rel="noreferrer" className="project-card" key={repo.id}>
                
                <div className="project-card__header">
                  <div className="project-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div className="project-arrow">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </div>
                </div>

                <h3 className="project-title">{repo.name}</h3>
                
                <p className="project-desc">
                  {repo.description ? repo.description.slice(0, 80) + '...' : 'No description provided for this repository.'}
                </p>

                <div className="project-footer">
                  {repo.language && (
                    <span className="project-lang">
                      <span className="lang-dot"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="project-stars">
                    ⭐ {repo.stargazers_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}