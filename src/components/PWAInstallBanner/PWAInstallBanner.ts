import './PWAInstallBanner.css';
import { getAssetUrl } from '../../utils/helpers';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

export function renderPWAInstallBanner(): string {
  return `
    <div class="pwa-banner" id="pwa-install-banner" role="dialog" aria-labelledby="pwa-title" aria-describedby="pwa-desc">
      <div class="pwa-banner__header">
        <img src="${getAssetUrl('icons/icon-192x192.png')}" alt="Habite Engenharia App" class="pwa-banner__icon" width="44" height="44" />
        <div class="pwa-banner__info">
          <div class="pwa-banner__title" id="pwa-title">Instalar Habite Engenharia</div>
          <div class="pwa-banner__desc" id="pwa-desc">Acesso rápido aos serviços e contatos no seu aparelho</div>
        </div>
      </div>
      <div class="pwa-banner__actions">
        <button type="button" class="pwa-banner__btn-dismiss" id="pwa-dismiss-btn">Agora não</button>
        <button type="button" class="pwa-banner__btn-install" id="pwa-install-btn">Instalar App</button>
      </div>
    </div>

    <div class="pwa-modal" id="pwa-instructions-modal" role="dialog" aria-modal="true" aria-labelledby="pwa-modal-title" style="display: none;">
      <div class="pwa-modal__backdrop" id="pwa-modal-backdrop"></div>
      <div class="pwa-modal__card">
        <div class="pwa-modal__header">
          <div class="pwa-modal__brand">
            <img src="${getAssetUrl('icons/icon-192x192.png')}" alt="Habite Engenharia" class="pwa-modal__icon" width="44" height="44" />
            <div>
              <h3 id="pwa-modal-title" class="pwa-modal__title">Instalar Habite Engenharia</h3>
              <p class="pwa-modal__subtitle">Adicione à tela inicial do seu dispositivo</p>
            </div>
          </div>
          <button type="button" class="pwa-modal__close" id="pwa-modal-close-btn" aria-label="Fechar">&times;</button>
        </div>

        <div class="pwa-modal__body">
          <div class="pwa-modal__step">
            <div class="pwa-modal__badge">iPhone / iOS (Safari)</div>
            <ol class="pwa-modal__list">
              <li>Toque no botão de <strong>Compartilhar</strong> (ícone com seta para cima na barra inferior).</li>
              <li>Role a lista e selecione <strong>"Adicionar à Tela de Início"</strong>.</li>
              <li>Toque em <strong>"Adicionar"</strong> no canto superior direito.</li>
            </ol>
          </div>

          <div class="pwa-modal__step">
            <div class="pwa-modal__badge">Android / Chrome</div>
            <ol class="pwa-modal__list">
              <li>Toque no menu de <strong>três pontos (⋮)</strong> no canto superior direito.</li>
              <li>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
            </ol>
          </div>
        </div>

        <div class="pwa-modal__footer">
          <button type="button" class="pwa-modal__btn-confirm" id="pwa-modal-gotit-btn">Entendi</button>
        </div>
      </div>
    </div>
  `;
}

export function initPWAInstall(): void {
  const banner = document.getElementById('pwa-install-banner');
  const installBtn = document.getElementById('pwa-install-btn');
  const dismissBtn = document.getElementById('pwa-dismiss-btn');
  const headerInstallBtn = document.getElementById('header-install-app-btn');
  const footerInstallBtn = document.getElementById('footer-install-app-btn');
  const modal = document.getElementById('pwa-instructions-modal');
  const modalCloseBtn = document.getElementById('pwa-modal-close-btn');
  const modalGotitBtn = document.getElementById('pwa-modal-gotit-btn');
  const modalBackdrop = document.getElementById('pwa-modal-backdrop');

  const closeModal = () => {
    if (modal) modal.style.display = 'none';
  };

  const openModal = () => {
    if (modal) modal.style.display = 'flex';
  };

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

  // Se já estiver rodando como aplicativo instalado, esconde os botões de instalação
  if (isStandalone) {
    if (headerInstallBtn) headerInstallBtn.style.display = 'none';
    if (footerInstallBtn) footerInstallBtn.style.display = 'none';
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
    
    // Mostra o banner apenas se não tiver sido dispensado previamente
    const isDismissed = localStorage.getItem('habite_pwa_dismissed');
    if (!isDismissed && banner) {
      banner.style.display = 'block';
    }
  });

  const triggerInstall = async () => {
    if (deferredPrompt) {
      if (banner) banner.style.display = 'none';
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        localStorage.setItem('habite_pwa_dismissed', 'installed');
        if (headerInstallBtn) headerInstallBtn.style.display = 'none';
        if (footerInstallBtn) footerInstallBtn.style.display = 'none';
      }
      deferredPrompt = null;
    } else {
      openModal();
    }
  };

  if (installBtn) {
    installBtn.addEventListener('click', triggerInstall);
  }

  if (headerInstallBtn) {
    headerInstallBtn.addEventListener('click', triggerInstall);
  }

  if (footerInstallBtn) {
    footerInstallBtn.addEventListener('click', triggerInstall);
  }

  if (dismissBtn && banner) {
    dismissBtn.addEventListener('click', () => {
      banner.style.display = 'none';
      localStorage.setItem('habite_pwa_dismissed', 'true');
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalGotitBtn) modalGotitBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('appinstalled', () => {
    if (banner) banner.style.display = 'none';
    if (headerInstallBtn) headerInstallBtn.style.display = 'none';
    if (footerInstallBtn) footerInstallBtn.style.display = 'none';
    closeModal();
    localStorage.setItem('habite_pwa_dismissed', 'installed');
  });
}
