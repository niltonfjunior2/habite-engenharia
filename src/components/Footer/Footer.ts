import './Footer.css';
import { COMPANY_DATA } from '../../data/company';

export function renderFooter(): string {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col__brand">
            <img
              src="/assets/logo-para-site.webp"
              alt="Habite Engenharia"
              class="footer-logo"
              width="180"
              height="42"
              loading="lazy"
            />
            <p class="footer-text">
              Soluções inteligentes em engenharia civil para regularização patrimonial, projetos técnicos e segurança contra incêndio (AVCB).
            </p>
          </div>

          <div>
            <h4 class="footer-title">Navegação</h4>
            <ul class="footer-links">
              <li><a href="#inicio" class="footer-link">Início</a></li>
              <li><a href="#servicos" class="footer-link">Serviços</a></li>
              <li><a href="#publico" class="footer-link">Para Quem É</a></li>
              <li><a href="#sobre" class="footer-link">Quem Somos</a></li>
              <li><a href="#contato" class="footer-link">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-title">Contato Oficial</h4>
            <ul class="footer-links">
              <li><span class="footer-link">${COMPANY_DATA.contact.phoneDisplay}</span></li>
              <li><span class="footer-link" style="word-break: break-all;">${COMPANY_DATA.contact.email}</span></li>
              <li><span class="footer-link">${COMPANY_DATA.serviceAreas[0]}</span></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© ${currentYear} ${COMPANY_DATA.name}. Todos os direitos reservados.</p>
          <p>Regularização de Imóveis • Projetos de Incêndio & AVCB</p>
        </div>
      </div>
    </footer>
  `;
}
