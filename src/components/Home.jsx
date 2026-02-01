export default function Home() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      url: "src/assets/pic1.JPG",
      link: "/projects/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App", 
      url: "src/assets/pic2.JPG",
      link: "/projects/task-manager"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      url: "src/assets/pic4.jpg",
      link: "/projects/weather-app"
    }
  ];

  return (
    <section id="home" className="hero">
      <div className="left">
        <h1>
          VAL WENIE <br />
          MACUA
        </h1>
        <p>A Web Dwvloper & React Developer</p>
        <button className="btn" onClick={scrollToProjects}>
          View My Work →
        </button>
        <div className="hero-links">
          <a 
            href="https://github.com/DrKnight-22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-link"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="images">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`card ${index === 0 ? 'one' : index === 1 ? 'two' : 'three'}`}
          >
            <a 
              href={project.link} 
              className="project-link"
              aria-label={`View ${project.title}`}
            >
              <img src={project.url} alt={project.title} />
              <div className="project-label">{project.title}</div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}