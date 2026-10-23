import { describe, it, expect } from 'vitest';
import { renderHeader } from '../src/components/Header/Header';
import { COMPANY_DATA } from '../src/data/company';

describe('Header Component Tests', () => {
  it('deve renderizar o header com o logo da Habite e texto alternativo semântico', () => {
    const html = renderHeader();
    expect(html).toContain('class="site-header"');
    expect(html).toContain('src="/assets/logo-para-site.webp"');
    expect(html).toContain('alt="Habite Engenharia"');
  });

  it('deve conter os links de ancoragem para as seções principais', () => {
    const html = renderHeader();
    expect(html).toContain('href="#servicos"');
    expect(html).toContain('href="#publico"');
    expect(html).toContain('href="#sobre"');
    expect(html).toContain('href="#contato"');
  });

  it('deve direcionar o botão de ação para o WhatsApp oficial com número e mensagem', () => {
    const html = renderHeader();
    expect(html).toContain(COMPANY_DATA.contact.whatsappRaw);
    expect(html).toContain('Falar com Engenheiro');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it('deve conter o botão Instalar App na barra de navegação', () => {
    const html = renderHeader();
    expect(html).toContain('id="header-install-app-btn"');
    expect(html).toContain('Instalar App');
  });
});
