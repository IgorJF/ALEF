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
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
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
        }
        .nav-links a:hover {
          color: #D4AF37;
        }
        .cta-button {
          background-color: #D4AF37;
          color: black;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s;
        }
        .cta-button:hover {
          background-color: #FEE140;
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          .nav-links {
            display: none;
          }
        }
      </style>
      <nav>
        <a href="#" class="logo">Do CLT ao Videomaker</a>
        <div class="nav-links">
          <a href="#video">Sobre</a>
          <a href="#aprender">Aprender</a>
          <a href="#autor">Autor</a>
          <a href="#offer">Oferta</a>
          <a href="" class="cta-button">Garanta sua vaga</a>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);