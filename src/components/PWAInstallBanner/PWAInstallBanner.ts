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
  const headerInstallBtn = document.getElementById('header-install-app-btn');

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

  // Se já estiver rodando como aplicativo instalado, esconde o botão do header
  if (isStandalone && headerInstallBtn) {
    headerInstallBtn.style.display = 'none';
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
      }
      deferredPrompt = null;
    } else {
      // Caso o navegador não suporte ou já esteja pronto para atalho
      alert(
        'Para instalar a Habite Engenharia no seu dispositivo:\n\n' +
        '1. No Chrome/Edge: Clique no ícone de instalação na barra de endereço (ou menu 3 pontos > "Instalar Aplicativo").\n' +
        '2. No Safari (iPhone): Toque no botão Compartilhar e selecione "Adicionar à Tela de Início".'
      );
    }
  };

  if (installBtn) {
    installBtn.addEventListener('click', triggerInstall);
  }

  if (headerInstallBtn) {
    headerInstallBtn.addEventListener('click', triggerInstall);
  }

  if (dismissBtn && banner) {
    dismissBtn.addEventListener('click', () => {
      banner.style.display = 'none';
      localStorage.setItem('habite_pwa_dismissed', 'true');
    });
  }

  window.addEventListener('appinstalled', () => {
    if (banner) banner.style.display = 'none';
    if (headerInstallBtn) headerInstallBtn.style.display = 'none';
    localStorage.setItem('habite_pwa_dismissed', 'installed');
  });
}
