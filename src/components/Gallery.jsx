export default function Gallery() {
  const images = [
    {
      url: 'src/assets/pic1.JPG',
      title: 'Project UI Design',
      description: 'Modern dashboard interface'
    },
    {
      url: 'src/assets/pic2.JPG',
      title: 'Mobile App Screens',
      description: 'Cross-platform application'
    },
    {
      url: 'src/assets/pic3.jpg',
      title: 'Brand Identity',
      description: 'Logo and brand materials'
    },
    {
      url: 'src/assets/pic4.jpg',
      title: 'Web Application',
      description: 'Full-stack project'
    },
  ];

  return (
    <section id="gallery" className="section">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.url} alt={image.title} />
            <div className="gallery-overlay">
              <h4>{image.title}</h4>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}