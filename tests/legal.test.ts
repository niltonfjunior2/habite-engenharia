import { describe, it, expect } from 'vitest';
import { LEGAL_DATA } from '../src/data/legal';
import { renderFooter } from '../src/components/Footer/Footer';
import { renderLegalModal } from '../src/components/LegalModal/LegalModal';

describe('Legal Documents & Floating Modal Tests', () => {
  it('deve conter os textos oficiais dos Termos de Uso contextualizados com a Habite Engenharia', () => {
    const terms = LEGAL_DATA.terms;
    expect(terms.title).toBe('Termos de Uso');
    expect(terms.sections.length).toBeGreaterThanOrEqual(5);

    const fullContent = terms.sections.map((s) => s.title + ' ' + s.paragraphs.join(' ')).join(' ');
    expect(fullContent).toContain('Regularização de Imóveis');
    expect(fullContent).toContain('AVCB');
    expect(fullContent).toContain('CREA-MG');
    expect(fullContent).toContain('ART');
    expect(fullContent).toContain('Habite-se');
  });

  it('deve conter a Política de Privacidade em total conformidade com a LGPD', () => {
    const privacy = LEGAL_DATA.privacy;
    expect(privacy.title).toBe('Política de Privacidade');
    expect(privacy.badge).toContain('LGPD');
    expect(privacy.sections.length).toBeGreaterThanOrEqual(5);

    const fullContent = privacy.sections.map((s) => s.title + ' ' + s.paragraphs.join(' ')).join(' ');
    expect(fullContent).toContain('LGPD');
    expect(fullContent).toContain('13.709/2018');
    expect(fullContent).toContain('Dados Pessoais');
    expect(fullContent).toContain('Direitos do Titular');
    expect(fullContent).toContain('gabriel.monteiro@professor.faminas.edu.br');
  });

  it('o rodapé deve conter os botões de Termos de Uso e Política de Privacidade na linha final', () => {
    const footerHtml = renderFooter();
    expect(footerHtml).toContain('id="footer-terms-btn"');
    expect(footerHtml).toContain('id="footer-privacy-btn"');
    expect(footerHtml).toContain('Termos de Uso');
    expect(footerHtml).toContain('Política de Privacidade');
    expect(footerHtml).toContain('footer-bottom__legal');
  });

  it('o LegalModal deve renderizar como quadro flutuante acessível e dialog semântico', () => {
    const modalHtml = renderLegalModal();
    expect(modalHtml).toContain('id="legal-modal"');
    expect(modalHtml).toContain('role="dialog"');
    expect(modalHtml).toContain('aria-modal="true"');
    expect(modalHtml).toContain('id="legal-modal-backdrop"');
    expect(modalHtml).toContain('id="legal-modal-close-btn"');
    expect(modalHtml).toContain('id="legal-modal-body"');
    expect(modalHtml).toContain('id="legal-tab-terms"');
    expect(modalHtml).toContain('id="legal-tab-privacy"');
  });
});
