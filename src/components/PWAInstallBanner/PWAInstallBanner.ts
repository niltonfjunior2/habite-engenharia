import './PWAInstallBanner.css';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

export function renderPWAInstallBanner(): string {
  return `
    <div class="pwa-banner" id="pwa-install-banner" role="dialog" aria-labelledby="pwa-title" aria-describedby="pwa-desc">
      <div class="pwa-banner__header">
        <img src="/icons/icon-192x192.png" alt="Habite Engenharia App" class="pwa-banner__icon" width="44" height="44" />
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
  `;
}

export function initPWAInstall(): void {
  const banner = document.getElementById('pwa-install-banner');
  const installBtn = document.getElementById('pwa-install-btn');
  const dismissBtn = document.getElementById('pwa-dismiss-btn');

  if (!banner || !installBtn || !dismissBtn) return;

  const isDismissed = localStorage.getItem('habite_pwa_dismissed');
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

  if (isDismissed || isStandalone) return;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
    banner.style.display = 'block';
  });

  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    banner.style.display = 'none';
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      localStorage.setItem('habite_pwa_dismissed', 'installed');
    }
    deferredPrompt = null;
  });

  dismissBtn.addEventListener('click', () => {
    banner.style.display = 'none';
    localStorage.setItem('habite_pwa_dismissed', 'true');
  });

  window.addEventListener('appinstalled', () => {
    banner.style.display = 'none';
    localStorage.setItem('habite_pwa_dismissed', 'installed');
  });
}
