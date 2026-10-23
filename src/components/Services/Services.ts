import './Services.css';
import { SERVICES_DATA } from '../../data/services';
import { COMPANY_DATA } from '../../data/company';
import { buildWhatsAppUrl, getAssetUrl } from '../../utils/helpers';

export function renderServices(): string {
  const cardsHtml = SERVICES_DATA.map((service) => {
    const whatsappUrl = buildWhatsAppUrl(
      COMPANY_DATA.contact.whatsappRaw,
      service.whatsappMessageCustom
    );

    const featuresHtml = service.features
      .map(
        (feat) => `
        <li class="service-card__feature-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${feat}</span>
        </li>
      `
      )
      .join('');

    return `
      <article class="service-card" id="${service.id}">
        <div class="service-card__media">
          <img
            src="${getAssetUrl(service.imagePath)}"
            alt="${service.title}"
            class="service-card__image"
            width="600"
            height="338"
            loading="lazy"
          />
        </div>
        <div class="service-card__content">
          <h3 class="service-card__title">${service.title}</h3>
          <p class="service-card__description">${service.fullDescription}</p>
          <ul class="service-card__features">
            ${featuresHtml}
          </ul>
          <a
            href="${whatsappUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="service-card__cta"
            aria-label="${service.ctaLabel} via WhatsApp"
          >
            <span>${service.ctaLabel}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section class="services-section" id="servicos">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossos Serviços</span>
          <h2 class="section-title">Especialistas em Regularização e Segurança</h2>
          <p class="section-subtitle">
            Cuidamos de toda a burocracia técnica e jurídica para que você tenha total tranquilidade com o seu imóvel.
          </p>
        </div>

        <div class="services-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}
