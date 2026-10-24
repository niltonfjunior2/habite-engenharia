import './Footer.css';
import { COMPANY_DATA } from '../../data/company';
import { getAssetUrl } from '../../utils/helpers';

export function renderFooter(): string {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col__brand">
            <img
              src="${getAssetUrl('assets/logo-para-site.webp')}"
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
              <li>
                <button type="button" class="footer-install-btn" id="footer-install-app-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Instalar Aplicativo</span>
                </button>
              </li>
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
          <p class="footer-bottom__copy">© ${currentYear} ${COMPANY_DATA.name}. Todos os direitos reservados.</p>
          <div class="footer-bottom__legal">
            <button type="button" class="footer-legal-btn" id="footer-terms-btn" aria-haspopup="dialog">Termos de Uso</button>
            <span class="footer-legal-separator" aria-hidden="true">•</span>
            <button type="button" class="footer-legal-btn" id="footer-privacy-btn" aria-haspopup="dialog">Política de Privacidade</button>
          </div>
          <p class="footer-bottom__tagline">Regularização de Imóveis • Projetos de Incêndio & AVCB</p>
        </div>
      </div>
    </footer>
  `;
}
