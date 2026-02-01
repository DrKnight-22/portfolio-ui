export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="public/pic2.JPG" alt="Val Wenie B. Macua" />
        </div>
        <div className="about-text">
          <h2>Web Developer</h2>
          <p>
            Hello! I'm Val Wenie B. MAcua, a passionate web developer with expertise in modern web technologies.
            I specialize in creating responsive, user-friendly applications using React, Vite, and various
            backend technologies.
          </p>
          <p>
            With over 3 years of experience in web development, I've worked on numerous projects ranging from
            small business websites to large-scale enterprise applications. I believe in writing clean,
            maintainable code and following best practices.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or sharing knowledge through tech blogs and tutorials.
          </p>
          <button className="btn" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get In Touch →
          </button>
        </div>
      </div>
    </section>
  );
}