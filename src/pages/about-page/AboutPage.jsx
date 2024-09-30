
import React from 'react';
import NavBarComponent from '../../components/NavBarComponent';

const AboutPage = () => {
  return (
      <div className="about-page" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/cross-2.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '50vh'
      }}>
        <NavBarComponent/>


        <div className="about-content" style={{
          padding: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
          margin: '2rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>About Us</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Welcome to our About page. We are a dedicated team committed to providing excellent services and products to our customers. Our mission is to make a positive impact in the world through innovation and customer satisfaction.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
            Founded in [Year], our company has grown from a small startup to a leading provider in our industry. We value integrity, creativity, and continuous improvement in everything we do.
          </p>
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Team</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Our team consists of passionate professionals from diverse backgrounds, all working together to achieve our common goals. We believe in fostering a collaborative and inclusive work environment that brings out the best in each individual.
          </p>
        </div>

      </div>
  );
};

export default AboutPage;
