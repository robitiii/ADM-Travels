import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    'Custom Tour Planning',
    'Group Bookings',
    'Airport Transfers',
    'Hotel & Lodge Reservations',
    'Guided Local Tours',
    'Private Chauffeur Services',
    'Adventure & Water Sports Packages',
    'Safari Day Trips from Cape Town',
    'Tea & Chocolate Tasting Arrangements',
    'City and Cultural Tours'
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-heading">Our Services</h2>
        <p className="services-subheading">
          Comprehensive travel solutions tailored to your needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item fade-in">
              <div className="service-checkmark">✓</div>
              <p className="service-text">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
