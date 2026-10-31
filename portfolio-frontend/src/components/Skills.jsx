import { useState } from 'react';
import './Skills.css';

const skillsData = [
  {
    id: 1,
    title: 'Cybersecurity',
    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    tags: ['Wazuh', 'FortiGate', 'IDS/IPS', 'SIEM', 'Web Filtering', 'VPN Psec']
  },
  {
    id: 2,
    title: 'Networking',
    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    tags: ['TCP/IP', 'VLAN', 'Switch', 'DHCP', 'DNS', 'NAT', 'OSPF', 'ACL']
  },
  {
    id: 3,
    title: 'Systems',
    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    tags: ['Linux', 'Windows Server', 'Active Directory', 'Bash']
  },
  {
    id: 4,
    title: 'Development',
    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    tags: ['Java', 'Python', 'Spring Boot', 'Postman', 'REST API']
  },
  {
    id: 5,
    title: 'Virtualization & Tools',
    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    tags: ['VMware', 'VirtualBox', 'GNS3', 'Packet Tracer', 'Docker']
  }
];

export default function Skills() {
  // state باش نعرفو اشمن واحدة مفتوحة (null معناه كلهم مسدودين)
  const [openId, setOpenId] = useState(1); 

  const toggleAccordion = (id) => {
    // إلا كانت مفتوحة، نسدوها، إلا كانت مسدودة، نحلوها ونسدو الباقي
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="accent">/</span> My <span className="accent">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-accordion">
          {skillsData.map((skill) => {
            const isOpen = openId === skill.id;

            return (
              <div 
                key={skill.id} 
                className={`accordion-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleAccordion(skill.id)}
              >
                {/* Header (ديما كيبان) */}
                <div className="accordion-header">
                  <div className="accordion-title-group">
                    <div className="accordion-icon">{skill.icon}</div>
                    <h3>{skill.title}</h3>
                  </div>
                  <div className="accordion-chevron">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className={isOpen ? 'rotate' : ''}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Content (كيبان غير ملي كتحل) */}
                <div className="accordion-content">
                  <div className="accordion-tags">
                    {skill.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}