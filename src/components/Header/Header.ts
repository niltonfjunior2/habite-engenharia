import './Header.css';
import { COMPANY_DATA } from '../../data/company';
import { buildWhatsAppUrl, getAssetUrl } from '../../utils/helpers';

export function renderHeader(): string {
  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_DATA.contact.whatsappRaw,
    COMPANY_DATA.contact.whatsappDefaultMessage
  );

  return `
    <header class="site-header" id="topo">
      <div class="container">
        <a href="#topo" class="site-header__brand" aria-label="Habite Engenharia - Página Inicial">
          <img
            src="${getAssetUrl('assets/logo-para-site.webp')}"
            alt="Habite Engenharia"
            class="site-header__logo"
            width="200"
            height="48"
            loading="eager"
          />
        </a>

        <nav class="site-header__nav" aria-label="Navegação Principal">
          <a href="#servicos" class="site-header__link">Serviços</a>
          <a href="#publico" class="site-header__link">Para Quem É</a>
          <a href="#sobre" class="site-header__link">Quem Somos</a>
          <a href="#contato" class="site-header__link">Contato</a>
        </nav>

        <div class="site-header__actions">
          <button
            type="button"
            id="header-install-app-btn"
            class="site-header__install-btn"
            aria-label="Instalar Aplicativo Habite Engenharia"
            title="Instalar App no Dispositivo"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span class="site-header__install-text-full">Instalar App</span>
            <span class="site-header__install-text-short">Instalar</span>
          </button>

          <a
            href="${whatsappUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="site-header__cta-btn"
            aria-label="Falar com Engenheiro no WhatsApp"
          >
            <span class="site-header__cta-text-full">Falar com Engenheiro</span>
            <span class="site-header__cta-text-short">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  `;
}
