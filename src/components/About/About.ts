import './About.css';
import { COMPANY_DATA } from '../../data/company';
import { getAssetUrl } from '../../utils/helpers';

export function renderAbout(): string {
  return `
    <section class="about-section" id="sobre">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-media">
            <img
              src="${getAssetUrl('assets/logo-habite-site-quem-somos.webp')}"
              alt="Habite Engenharia - Quem Somos"
              class="about-image"
              width="480"
              height="320"
              loading="lazy"
            />
          </div>

          <div class="about-content">
            <span class="section-tag">A Habite</span>
            <h2 class="section-title">Engenharia que Descomplica e Protege</h2>
            <p class="about-text">
              ${COMPANY_DATA.description}
            </p>
            <p class="about-text">
              Seja você proprietário, investidor ou profissional do setor imobiliário, conte conosco para descomplicar o processo de regularização e tornar seu imóvel 100% legal. Junte-se a nós nessa jornada e descubra como a Habite Engenharia pode fazer a diferença para você e seu patrimônio!
            </p>

            <div class="about-highlights">
              <div class="about-highlight-box">
                <strong>100%</strong>
                <span>Foco em Conformidade e Normas Técnicas</span>
              </div>
              <div class="about-highlight-box">
                <strong>Ágil</strong>
                <span>Processos Sem Burocracia Desnecessária</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
