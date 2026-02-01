export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'VN GMRC/ESP System',
      description: 'Values Education Monitoring Platform',
      image: 'public/website1.png',
      technologies: ['React', 'Node.js', 'Supabse DB'],
      link: 'https://teacher-gamedashboard.vercel.app/'
    },
    
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}