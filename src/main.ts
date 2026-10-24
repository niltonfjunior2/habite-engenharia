import './styles/global.css';
import { renderHeader } from './components/Header/Header';
import { renderHero } from './components/Hero/Hero';
import { renderServices } from './components/Services/Services';
import { renderTargetAudience } from './components/TargetAudience/TargetAudience';
import { renderAbout } from './components/About/About';
import { renderContact } from './components/Contact/Contact';
import { renderFooter } from './components/Footer/Footer';
import { renderWhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import { renderPWAInstallBanner, initPWAInstall } from './components/PWAInstallBanner/PWAInstallBanner';
import { renderLegalModal, initLegalModal } from './components/LegalModal/LegalModal';
import { getAssetUrl } from './utils/helpers';

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(getAssetUrl('sw.js')).catch((err) => {
      console.error('Falha ao registrar Service Worker:', err);
    });
  });
}

const appElement = document.getElementById('app');

if (appElement) {
  appElement.innerHTML = `
    ${renderHeader()}

    <main id="conteudo-principal">
      ${renderHero()}
      ${renderServices()}
      ${renderTargetAudience()}
      ${renderAbout()}
      ${renderContact()}
    </main>

    ${renderFooter()}
    ${renderWhatsAppButton()}
    ${renderPWAInstallBanner()}
    ${renderLegalModal()}
  `;

  initPWAInstall();
  initLegalModal();
}

