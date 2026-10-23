import './Header.css';
import { COMPANY_DATA } from '../../data/company';
import { buildWhatsAppUrl } from '../../utils/helpers';

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
            src="/assets/logo-para-site.webp"
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

        <a
          href="${whatsappUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="site-header__cta-btn"
          aria-label="Falar com Engenheiro no WhatsApp"
        >
          Falar com Engenheiro
        </a>
      </div>
    </header>
  `;
}
