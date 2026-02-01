import { Home, User, Code, Briefcase, Camera, Phone } from "lucide-react";

export default function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="logo">My Portfolio</div>
      <ul>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => handleNavClick(item.id)}
            >
              <Icon size={18} />
              {item.label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}