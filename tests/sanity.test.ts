import { describe, it, expect } from 'vitest';
import { buildWhatsAppUrl, buildMailtoUrl, getAssetUrl } from '../src/utils/helpers';
import { COMPANY_DATA } from '../src/data/company';

describe('Sanity & Configuration Tests', () => {
  it('deve formatar corretamente a URL de deep link do WhatsApp com caracteres limpos e codificados', () => {
    const url = buildWhatsAppUrl(COMPANY_DATA.contact.whatsappRaw, 'Olá! Teste de mensagem.');
    expect(url).toContain('https://wa.me/5532985132276');
    expect(url).toContain('text=Ol%C3%A1!%20Teste%20de%20mensagem.');
  });

  it('deve gerar URL de mailto válida', () => {
    const mailto = buildMailtoUrl(COMPANY_DATA.contact.email, 'Orçamento Habite');
    expect(mailto).toBe('mailto:gabriel.monteiro@professor.faminas.edu.br?subject=Or%C3%A7amento%20Habite');
  });

  it('deve resolver caminhos de assets corretamente', () => {
    const assetUrl = getAssetUrl('assets/logo-para-site.webp');
    expect(assetUrl).toContain('assets/logo-para-site.webp');
  });

  it('deve conter os contatos oficiais sem dados mockados', () => {
    expect(COMPANY_DATA.contact.whatsappRaw).toBe('5532985132276');
    expect(COMPANY_DATA.contact.email).toBe('gabriel.monteiro@professor.faminas.edu.br');
  });
});
