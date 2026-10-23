import './Hero.css';
import { COMPANY_DATA } from '../../data/company';
import { buildWhatsAppUrl } from '../../utils/helpers';

export function renderHero(): string {
  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_DATA.contact.whatsappRaw,
    'Olá! Preciso de uma assessoria especializada com a Habite Engenharia.'
  );

  return `
    <section class="hero-section" id="inicio">
      <div class="container">
        <div class="hero-badge">
          <span>Engenharia Especializada & Legalidade</span>
        </div>

        <h1 class="hero-title">
          Soluções inteligentes para regularizar seu imóvel e <span>proteger seu patrimônio</span>
        </h1>

        <p class="hero-subtitle">
          ${COMPANY_DATA.subheadline}
        </p>

        <div class="hero-actions">
          <a
            href="${whatsappUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary-hero"
            aria-label="Falar agora com um Engenheiro Especialista no WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Quero Regularizar Meu Imóvel
          </a>

          <a href="#servicos" class="btn-secondary-hero">
            Conhecer Nossos Serviços
          </a>
        </div>

        <div class="hero-badges-strip">
          <div class="hero-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Sem burocracia ou multas</span>
          </div>
          <div class="hero-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Projetos aprovados no Bombeiros (AVCB)</span>
          </div>
          <div class="hero-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Atendimento Rápido e Direto</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
