export default function Skills() {
  const skills = {
    'Frontend': ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Supabase','Firebase', 'GraphQL', 'REST API'],
    'Tools & Others': ['Git', 'Docker','Figma', 'Jest','Agile/Scrum']
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-list">
              {items.map((skill) => (
                <div key={skill} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}