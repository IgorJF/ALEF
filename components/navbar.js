class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 14, 23, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
          transition: all 0.3s ease;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #D4AF37;
          text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        
        .nav-links a:hover {
          color: #D4AF37;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #D4AF37;
          transition: width 0.3s;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .cta-button {
          background: #D4AF37;
          color: #0A0E17;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .cta-button:hover {
          background: #C9A227;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
        }
      </style>
      
      <div class="container">
        <a href="#" class="logo">CineMaster</a>
        
        <div class="nav-links">
          <a href="#aprender">O Que Você Vai Aprender</a>
          <a href="#mentor">Mentor</a>
          <a href="#oferta">Oferta Especial</a>
          <a href="#" class="cta-button">Garantir Vaga</a>
        </div>
        
        <button class="mobile-menu-button">
          <i data-feather="menu"></i>
        </button>
      </div>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);