import './LegalModal.css';
import { LEGAL_DATA, LegalDocument } from '../../data/legal';

export function renderLegalModal(): string {
  return `
    <div class="legal-modal" id="legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-modal-title" style="display: none;">
      <div class="legal-modal__backdrop" id="legal-modal-backdrop"></div>
      <div class="legal-modal__container" role="document">
        <div class="legal-modal__header">
          <div class="legal-modal__title-group">
            <span class="legal-modal__badge" id="legal-modal-badge"></span>
            <h2 class="legal-modal__title" id="legal-modal-title"></h2>
            <p class="legal-modal__date" id="legal-modal-date"></p>
          </div>
          <button type="button" class="legal-modal__close-btn" id="legal-modal-close-btn" aria-label="Fechar janela">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="legal-modal__body" id="legal-modal-body" tabindex="0">
          <!-- Conteúdo gerado dinamicamente -->
        </div>

        <div class="legal-modal__footer">
          <div class="legal-modal__tabs">
            <button type="button" class="legal-modal__tab-btn" id="legal-tab-terms">Termos de Uso</button>
            <button type="button" class="legal-modal__tab-btn" id="legal-tab-privacy">Política de Privacidade</button>
          </div>
          <button type="button" class="legal-modal__confirm-btn" id="legal-modal-confirm-btn">Entendido e Fechar</button>
        </div>
      </div>
    </div>
  `;
}

function renderLegalDocumentContent(doc: LegalDocument): string {
  return doc.sections
    .map(
      (section) => `
        <div class="legal-section">
          <h3 class="legal-section__title">${section.title}</h3>
          ${section.paragraphs
            .map((p) => `<p class="legal-section__paragraph">${p}</p>`)
            .join('')}
        </div>
      `
    )
    .join('');
}

export function openLegalModal(type: 'terms' | 'privacy'): void {
  const modal = document.getElementById('legal-modal');
  const badgeEl = document.getElementById('legal-modal-badge');
  const titleEl = document.getElementById('legal-modal-title');
  const dateEl = document.getElementById('legal-modal-date');
  const bodyEl = document.getElementById('legal-modal-body');
  const tabTerms = document.getElementById('legal-tab-terms');
  const tabPrivacy = document.getElementById('legal-tab-privacy');

  const doc = LEGAL_DATA[type];
  if (!doc) return;

  if (badgeEl) badgeEl.textContent = doc.badge;
  if (titleEl) titleEl.textContent = doc.title;
  if (dateEl) dateEl.textContent = `Última atualização: ${doc.updatedAt}`;
  if (bodyEl) {
    bodyEl.innerHTML = renderLegalDocumentContent(doc);
    bodyEl.scrollTop = 0;
  }

  if (tabTerms && tabPrivacy) {
    if (type === 'terms') {
      tabTerms.classList.add('active');
      tabPrivacy.classList.remove('active');
    } else {
      tabPrivacy.classList.add('active');
      tabTerms.classList.remove('active');
    }
  }

  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

export function closeLegalModal(): void {
  const modal = document.getElementById('legal-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

export function initLegalModal(): void {
  const modal = document.getElementById('legal-modal');
  const closeBtn = document.getElementById('legal-modal-close-btn');
  const confirmBtn = document.getElementById('legal-modal-confirm-btn');
  const backdrop = document.getElementById('legal-modal-backdrop');
  const tabTerms = document.getElementById('legal-tab-terms');
  const tabPrivacy = document.getElementById('legal-tab-privacy');

  const termsBtn = document.getElementById('footer-terms-btn');
  const privacyBtn = document.getElementById('footer-privacy-btn');

  if (termsBtn) {
    termsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('terms');
    });
  }

  if (privacyBtn) {
    privacyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('privacy');
    });
  }

  if (tabTerms) {
    tabTerms.addEventListener('click', () => openLegalModal('terms'));
  }

  if (tabPrivacy) {
    tabPrivacy.addEventListener('click', () => openLegalModal('privacy'));
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLegalModal);
  if (confirmBtn) confirmBtn.addEventListener('click', closeLegalModal);
  if (backdrop) backdrop.addEventListener('click', closeLegalModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display !== 'none') {
      closeLegalModal();
    }
  });
}
