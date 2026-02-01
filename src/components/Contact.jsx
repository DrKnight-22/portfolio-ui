import { Mail, Phone, MapPin, Github } from "lucide-react";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ 
    message: '', 
    type: '' 
  });

  // Replace these with your EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_723a3un';
  const EMAILJS_TEMPLATE_ID = 'template_a1papue';
  const EMAILJS_PUBLIC_KEY = 'Iy7MaQgJHFo3_x1NR';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous status messages when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ message: '', type: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ 
        message: 'Please fill in all fields', 
        type: 'error' 
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({ 
        message: 'Please enter a valid email address', 
        type: 'error' 
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ message: '', type: '' });

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Your Name', // Replace with your name
          reply_to: formData.email,
        }
      );

      console.log('Email sent successfully:', result.text);
      
      // Success
      setSubmitStatus({ 
        message: 'Message sent successfully! I\'ll get back to you soon.', 
        type: 'success' 
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Failed to send message:', error);
      
      // Error handling
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      setSubmitStatus({ 
        message: errorMessage, 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      if (submitStatus.type === 'success') {
        setTimeout(() => {
          setSubmitStatus({ message: '', type: '' });
        }, 5000);
      }
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3 style={{ color: '#f8fafc', marginBottom: '1.5rem' }}>Get in Touch</h3>
          
          <div className="contact-item">
            <Mail size={20} />
            <span>valweniemacua.2022.00142@example.com</span>
          </div>
          
          <div className="contact-item">
            <Phone size={20} />
            <span>+63 994 641 9503</span>
          </div>
          
          <div className="contact-item">
            <MapPin size={20} />
            <span>Iligan City, Philippines</span>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#f8fafc' }}>Follow Me</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://github.com/DrKnight-22" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#94a3b8', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                aria-label="GitHub Profile"
                onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <p>Feel free to reach out for collaborations or just to say hi!</p>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitStatus.message && (
            <div 
              className={`status-message ${submitStatus.type}`}
              style={{
                padding: '0.75rem 1rem',
                marginBottom: '1.5rem',
                borderRadius: '0.5rem',
                backgroundColor: submitStatus.type === 'success' 
                  ? 'rgba(34, 197, 94, 0.1)' 
                  : 'rgba(239, 68, 68, 0.1)',
                color: submitStatus.type === 'success' 
                  ? '#4ade80' 
                  : '#f87171',
                border: `1px solid ${submitStatus.type === 'success' 
                  ? 'rgba(34, 197, 94, 0.2)' 
                  : 'rgba(239, 68, 68, 0.2)'}`,
                fontSize: '0.875rem'
              }}
            >
              {submitStatus.message}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'text'
              }}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'text'
              }}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="5"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'text'
              }}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn" 
            style={{ 
              width: '100%',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'wait' : 'pointer'
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span 
                  style={{
                    display: 'inline-block',
                    width: '1rem',
                    height: '1rem',
                    border: '2px solid transparent',
                    borderTopColor: 'white',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    marginRight: '0.5rem'
                  }}
                />
                Sending...
              </>
            ) : 'Send Message'}
          </button>
          
          <style jsx="true">{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </form>
      </div>
    </section>
  );
}