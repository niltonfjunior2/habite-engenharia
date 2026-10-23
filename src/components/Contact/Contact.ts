import './Contact.css';
import { COMPANY_DATA } from '../../data/company';
import { buildWhatsAppUrl, buildMailtoUrl } from '../../utils/helpers';

export function renderContact(): string {
  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_DATA.contact.whatsappRaw,
    'Olá! Gostaria de solicitar um orçamento para o meu imóvel.'
  );

  const mailtoUrl = buildMailtoUrl(
    COMPANY_DATA.contact.email,
    'Solicitação de Orçamento - Habite Engenharia',
    'Olá, Engenheiro Gabriel!\n\nGostaria de mais informações sobre regularização de imóvel / projeto de combate a incêndio.'
  );

  return `
    <section class="contact-section" id="contato">
      <div class="container">
        <div class="contact-card">
          <div class="contact-header">
            <span class="section-tag">Fale Conosco</span>
            <h2 class="section-title">Inicie a Regularização do Seu Imóvel</h2>
            <p class="section-subtitle">
              Nossa equipe técnica está pronta para avaliar seu caso e propor a melhor solução de engenharia.
            </p>
          </div>

          <div class="contact-channels-grid">
            <div class="channel-box">
              <div class="channel-box__icon channel-box__icon--whatsapp">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 class="channel-box__title">WhatsApp Comercial</h3>
              <p class="channel-box__value">${COMPANY_DATA.contact.whatsappDisplay}</p>
              <a
                href="${whatsappUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="channel-box__btn channel-box__btn--whatsapp"
                aria-label="Iniciar conversa no WhatsApp"
              >
                Conversar no WhatsApp
              </a>
            </div>

            <div class="channel-box">
              <div class="channel-box__icon channel-box__icon--email">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 class="channel-box__title">E-mail Institucional</h3>
              <p class="channel-box__value">${COMPANY_DATA.contact.email}</p>
              <a
                href="${mailtoUrl}"
                class="channel-box__btn channel-box__btn--email"
                aria-label="Enviar e-mail para a Habite Engenharia"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
