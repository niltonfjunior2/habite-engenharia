import { describe, it, expect } from 'vitest';
import { renderHero } from '../src/components/Hero/Hero';
import { renderServices } from '../src/components/Services/Services';
import { renderTargetAudience } from '../src/components/TargetAudience/TargetAudience';
import { renderAbout } from '../src/components/About/About';
import { renderContact } from '../src/components/Contact/Contact';
import { renderFooter } from '../src/components/Footer/Footer';
import { renderWhatsAppButton } from '../src/components/WhatsAppButton/WhatsAppButton';
import { COMPANY_DATA } from '../src/data/company';

describe('Sprint 2 — Interface & Conversão Tests', () => {
  it('Hero deve renderizar título, subtítulo e botão de ação principal', () => {
    const html = renderHero();
    expect(html).toContain('Soluções inteligentes');
    expect(html).toContain('Quero Regularizar Meu Imóvel');
    expect(html).toContain(COMPANY_DATA.contact.whatsappRaw);
  });

  it('Services deve renderizar os dois serviços centrais com imagens locais e CTAs', () => {
    const html = renderServices();
    expect(html).toContain('Regularização de Imóveis');
    expect(html).toContain('Projetos de Prevenção e Combate a Incêndio (AVCB)');
    expect(html).toContain('/assets/servicos-regularizacao2.webp');
    expect(html).toContain('/assets/servico-combate-e-prevencao-de-incendio.webp');
    expect(html).toContain('Quero Regularizar Meu Imóvel');
    expect(html).toContain('Solicitar Projeto de Incêndio / AVCB');
  });

  it('TargetAudience deve renderizar as 4 personas de clientes mapeadas', () => {
    const html = renderTargetAudience();
    expect(html).toContain('Proprietários Residenciais e Comerciais');
    expect(html).toContain('Empresas de Construção Civil');
    expect(html).toContain('Condomínios & Síndicos');
    expect(html).toContain('Escolas, Hospitais e Igrejas');
    expect(html).toContain('/assets/divisa-branco-seta.webp');
  });

  it('About deve renderizar imagem institucional e narrativa da empresa', () => {
    const html = renderAbout();
    expect(html).toContain('/assets/logo-habite-site-quem-somos.webp');
    expect(html).toContain('Engenharia que Descomplica e Protege');
    expect(html).toContain('100%');
  });

  it('Contact deve disponibilizar canal de WhatsApp e link direto de e-mail', () => {
    const html = renderContact();
    expect(html).toContain(COMPANY_DATA.contact.whatsappDisplay);
    expect(html).toContain(COMPANY_DATA.contact.email);
    expect(html).toContain(`mailto:${COMPANY_DATA.contact.email}`);
  });

  it('Footer deve renderizar copyright atual e links para ancoragem', () => {
    const html = renderFooter();
    const currentYear = new Date().getFullYear().toString();
    expect(html).toContain(currentYear);
    expect(html).toContain('Habite Engenharia');
    expect(html).toContain('href="#inicio"');
  });

  it('WhatsAppButton deve renderizar botão flutuante posicionado com pulso', () => {
    const html = renderWhatsAppButton();
    expect(html).toContain('class="whatsapp-float-btn"');
    expect(html).toContain('class="whatsapp-pulse"');
    expect(html).toContain(COMPANY_DATA.contact.whatsappRaw);
  });
});
