import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-subscription">
        <h2 className="footer-subscription-heading">Suscríbete a nuestro boletín</h2>
        <p className="footer-subscription-text">
          Recibe las últimas recetas y novedades de cocina directamente en tu bandeja de entrada.
        </p>
        <form className="footer-email-form">
          <input type="email" className="footer-input" placeholder="Tu correo electrónico" />
          <button className="btn">Suscribirse</button>
        </form>
      </div>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre nosotros</h2>
            <a href="/about">Acerca de</a>
            <a href="/team">Equipo</a>
            <a href="/contact">Contacto</a>
          </div>
          <div className="footer-link-items">
            <h2>Servicios</h2>
            <a href="/services">Nuestros servicios</a>
            <a href="/pricing">Precios</a>
            <a href="/testimonials">Testimonios</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Redes Sociales</h2>
            <a href="https://www.facebook.com" 
               target="_blank" 
               rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.twitter.com" 
               target="_blank" 
               rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://www.instagram.com" 
               target="_blank" 
               rel="noopener noreferrer">
              Instagram
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Políticas</h2>
            <a href="/privacy">Política de privacidad</a>
            <a href="/terms">Términos y condiciones</a>
            <a href="/cookies">Política de cookies</a>
          </div>
        </div>
      </div>
      <div className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" className="social-logo">
              Chefteando
            </a>
          </div>
          <small className="website-rights">© 2023 Chefteando. Todos los derechos reservados.</small>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
