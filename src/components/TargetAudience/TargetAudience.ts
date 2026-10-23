import './TargetAudience.css';
import { TARGET_AUDIENCE_DATA } from '../../data/services';
import { getAssetUrl } from '../../utils/helpers';

export function renderTargetAudience(): string {
  const iconsMap: Record<string, string> = {
    home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    building: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>`,
    shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    users: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  };

  const cardsHtml = TARGET_AUDIENCE_DATA.map(
    (item) => `
    <div class="audience-card">
      <div class="audience-card__icon-box">
        ${iconsMap[item.iconName] || iconsMap.shield}
      </div>
      <h3 class="audience-card__title">${item.title}</h3>
      <p class="audience-card__description">${item.description}</p>
    </div>
  `
  ).join('');

  return `
    <section class="audience-section" id="publico">
      <div class="container">
        <div class="audience-divider">
          <img
            src="${getAssetUrl('assets/divisa-branco-seta.webp')}"
            alt="Divisória decorativa"
            width="600"
            height="48"
            loading="lazy"
          />
        </div>

        <div class="section-header">
          <span class="section-tag">Público-Alvo</span>
          <h2 class="section-title">Para quem é a Habite Engenharia?</h2>
          <p class="section-subtitle">
            Desenvolvemos soluções personalizadas para cada perfil de patrimônio, garantindo segurança jurídica e técnica.
          </p>
        </div>

        <div class="audience-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}
