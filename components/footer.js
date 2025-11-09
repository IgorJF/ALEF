class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #0A0E17;
          color: white;
          padding: 3rem 0;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #D4AF37;
          margin-bottom: 1rem;
          display: inline-block;
        }
        
        .footer-about p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }
        
        .footer-heading {
          color: #D4AF37;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-links a:hover {
          color: #D4AF37;
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .footer-social a {
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.3s;
        }
        
        .footer-social a:hover {
          color: #D4AF37;
        }
        
        .footer-button {
          background: #D4AF37;
          color: #0A0E17;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          display: inline-block;
          margin-top: 1rem;
          transition: all 0.3s;
        }
        
        .footer-button:hover {
          background: #C9A227;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }
      </style>
      
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-about">
            <div class="footer-logo">CineMaster</div>
            <p>O curso completo para você dominar as técnicas profissionais de filmmaking e edição cinematográfica.</p>
            <a href="#" class="footer-button">Garantir minha vaga</a>
          </div>
          
          <div>
            <h3 class="footer-heading">Links Rápidos</h3>
            <ul class="footer-links">
              <li><a href="#aprender">O Que Você Vai Aprender</a></li>
              <li><a href="#mentor">Conheça o Mentor</a></li>
              <li><a href="#oferta">Oferta Especial</a></li>
              <li><a href="#">Depoimentos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="footer-heading">Legal</h3>
            <ul class="footer-links">
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Garantia</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="footer-heading">Contato</h3>
            <ul class="footer-links">
              <li><a href="mailto:contato@cinemaster.com">contato@cinemaster.com</a></li>
              <li><a href="tel:+5511999999999">(11) 99999-9999</a></li>
            </ul>
            
            <div class="footer-social">
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          &copy; ${new Date().getFullYear()} CineMaster Academy. Todos os direitos reservados.
        </div>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);