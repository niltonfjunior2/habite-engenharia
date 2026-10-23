(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const t={name:"Habite Engenharia",subheadline:"Transforme seu imóvel em um bem seguro e valorizado. Regularização fácil e sem complicações.",description:"A Habite Engenharia é uma empresa especializada em descomplicar sua vida trazendo soluções inteligentes e eficientes para regularizar seu patrimônio de forma segura e tranquila. Entendemos que cada imóvel tem uma história única e estamos aqui para garantir que cada capítulo dessa história seja escrita com legalidade e excelência.",contact:{phoneDisplay:"(32) 98513-2276",whatsappDisplay:"(32) 98513-2276",whatsappRaw:"5532985132276",email:"gabriel.monteiro@professor.faminas.edu.br",whatsappDefaultMessage:"Olá! Gostaria de falar com um engenheiro da Habite Engenharia."},serviceAreas:["Minas Gerais e Região"]};function d(e,a){const s=e.replace(/\D/g,""),o=encodeURIComponent(a.trim());return`https://wa.me/${s}?text=${o}`}function h(e,a,s){const o=encodeURIComponent(a.trim()),i=`&body=${encodeURIComponent(s.trim())}`;return`mailto:${e}?subject=${o}${i}`}function l(e){const a=e.startsWith("/")?e.slice(1):e,s="./";return`${s.endsWith("/")?s:`${s}/`}${a}`}function u(){const e=d(t.contact.whatsappRaw,t.contact.whatsappDefaultMessage);return`
    <header class="site-header" id="topo">
      <div class="container">
        <a href="#topo" class="site-header__brand" aria-label="Habite Engenharia - Página Inicial">
          <img
            src="${l("assets/logo-para-site.webp")}"
            alt="Habite Engenharia"
            class="site-header__logo"
            width="200"
            height="48"
            loading="eager"
          />
        </a>

        <nav class="site-header__nav" aria-label="Navegação Principal">
          <a href="#servicos" class="site-header__link">Serviços</a>
          <a href="#publico" class="site-header__link">Para Quem É</a>
          <a href="#sobre" class="site-header__link">Quem Somos</a>
          <a href="#contato" class="site-header__link">Contato</a>
        </nav>

        <div class="site-header__actions">
          <button
            type="button"
            id="header-install-app-btn"
            class="site-header__install-btn"
            aria-label="Instalar Aplicativo Habite Engenharia"
            title="Instalar App no Dispositivo"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Instalar App</span>
          </button>

          <a
            href="${e}"
            target="_blank"
            rel="noopener noreferrer"
            class="site-header__cta-btn"
            aria-label="Falar com Engenheiro no WhatsApp"
          >
            Falar com Engenheiro
          </a>
        </div>
      </div>
    </header>
  `}function v(){const e=d(t.contact.whatsappRaw,"Olá! Preciso de uma assessoria especializada com a Habite Engenharia.");return`
    <section class="hero-section" id="inicio">
      <div class="container">
        <div class="hero-badge">
          <span>Engenharia Especializada & Legalidade</span>
        </div>

        <h1 class="hero-title">
          Soluções inteligentes para regularizar seu imóvel e <span>proteger seu patrimônio</span>
        </h1>

        <p class="hero-subtitle">
          ${t.subheadline}
        </p>

        <div class="hero-actions">
          <a
            href="${e}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary-hero"
            aria-label="Falar agora com um Engenheiro Especialista no WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Quero Regularizar Meu Imóvel
          </a>

          <a href="#servicos" class="btn-secondary-hero">
            Conhecer Nossos Serviços
          </a>
        </div>

        <div class="hero-badges-strip">
          <div class="hero-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Sem burocracia ou multas</span>
          </div>
          <div class="hero-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Projetos aprovados no Bombeiros (AVCB)</span>
          </div>
          <div class="hero-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Atendimento Rápido e Direto</span>
          </div>
        </div>
      </div>
    </section>
  `}const m=[{id:"regularizacao-imoveis",title:"Regularização de Imóveis",shortDescription:"Soluções completas para transformar seu imóvel irregular em um patrimônio 100% legal e valorizado.",fullDescription:"Assessoria técnica e jurídica em engenharia para obtenção de Habite-se, alvarás, desdobros, retificação de áreas e averbações, evitando multas e embargos.",iconName:"document-check",imagePath:"/assets/servicos-regularizacao2.webp",features:["Obtenção de Habite-se e Certidão de Baixa","Averbação de construção e reformas em cartório","Defesa contra multas e notificações municipais","Desdobro, desmembramento e unificação de lotes"],ctaLabel:"Quero Regularizar Meu Imóvel",whatsappMessageCustom:"Olá! Gostaria de uma consultoria para regularização do meu imóvel com a Habite Engenharia."},{id:"combate-incendio-avcb",title:"Projetos de Prevenção e Combate a Incêndio (AVCB)",shortDescription:"Adequação rigorosa às normas do Corpo de Bombeiros para garantir segurança e liberação do seu alvará.",fullDescription:"Elaboração de Projetos de Segurança Contra Incêndio e Pânico (PSIP), instalação e dimensionamento de equipamentos, memoriais técnicos e acompanhamento de vistorias para obtenção e renovação do AVCB/CLCB.",iconName:"fire-shield",imagePath:"/assets/servico-combate-e-prevencao-de-incendio.webp",features:["Elaboração e aprovação de Projetos de Incêndio (PSIP)","Obtenção e renovação de AVCB e CLCB junto aos Bombeiros","Dimensionamento de hidrantes, extintores e saídas de emergência","Inspeções técnicas prediais e laudos de conformidade"],ctaLabel:"Solicitar Projeto de Incêndio / AVCB",whatsappMessageCustom:"Olá! Preciso de assessoria para Projeto de Combate a Incêndio / AVCB com a Habite Engenharia."}],g=[{id:"proprietarios",title:"Proprietários Residenciais e Comerciais",description:"Quem possui imóvel residencial, comercial ou industrial e precisa regularizá-lo, evitando multas e insegurança jurídica.",iconName:"home"},{id:"construtoras",title:"Empresas de Construção Civil",description:"Construtoras que precisam de projetos aprovados e obtenção de AVCB com agilidade para liberar o uso de seus empreendimentos.",iconName:"building"},{id:"condominios",title:"Condomínios & Síndicos",description:"Gestores que necessitam de conformidade técnica rigorosa, laudos periciais e renovação de licenças de segurança contra incêndio.",iconName:"shield"},{id:"espacos-publicos",title:"Escolas, Hospitais e Igrejas",description:"Locais com circulação pública que precisam estar plenamente licenciados e seguros para receber o público.",iconName:"users"}];function b(){return`
    <section class="services-section" id="servicos">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossos Serviços</span>
          <h2 class="section-title">Especialistas em Regularização e Segurança</h2>
          <p class="section-subtitle">
            Cuidamos de toda a burocracia técnica e jurídica para que você tenha total tranquilidade com o seu imóvel.
          </p>
        </div>

        <div class="services-grid">
          ${m.map(a=>{const s=d(t.contact.whatsappRaw,a.whatsappMessageCustom),o=a.features.map(i=>`
        <li class="service-card__feature-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${i}</span>
        </li>
      `).join("");return`
      <article class="service-card" id="${a.id}">
        <div class="service-card__media">
          <img
            src="${l(a.imagePath)}"
            alt="${a.title}"
            class="service-card__image"
            width="600"
            height="338"
            loading="lazy"
          />
        </div>
        <div class="service-card__content">
          <h3 class="service-card__title">${a.title}</h3>
          <p class="service-card__description">${a.fullDescription}</p>
          <ul class="service-card__features">
            ${o}
          </ul>
          <a
            href="${s}"
            target="_blank"
            rel="noopener noreferrer"
            class="service-card__cta"
            aria-label="${a.ctaLabel} via WhatsApp"
          >
            <span>${a.ctaLabel}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </article>
    `}).join("")}
        </div>
      </div>
    </section>
  `}function f(){const e={home:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',building:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>',shield:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',users:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'},a=g.map(s=>`
    <div class="audience-card">
      <div class="audience-card__icon-box">
        ${e[s.iconName]||e.shield}
      </div>
      <h3 class="audience-card__title">${s.title}</h3>
      <p class="audience-card__description">${s.description}</p>
    </div>
  `).join("");return`
    <section class="audience-section" id="publico">
      <div class="container">
        <div class="audience-divider">
          <img
            src="${l("assets/divisa-branco-seta.webp")}"
            alt="Divisória decorativa"
            width="600"
            height="48"
            loading="lazy"
          />
        </div>

        <div class="section-header">
          <span class="section-tag">Público-Alvo</span>
          <h2 class="section-title">Para quem é a Habite Engenharia?</h2>
          <p class="section-subtitle">
            Desenvolvemos soluções personalizadas para cada perfil de patrimônio, garantindo segurança jurídica e técnica.
          </p>
        </div>

        <div class="audience-grid">
          ${a}
        </div>
      </div>
    </section>
  `}function w(){return`
    <section class="about-section" id="sobre">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-media">
            <img
              src="${l("assets/logo-habite-site-quem-somos.webp")}"
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
              ${t.description}
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
  `}function _(){const e=d(t.contact.whatsappRaw,"Olá! Gostaria de solicitar um orçamento para o meu imóvel."),a=h(t.contact.email,"Solicitação de Orçamento - Habite Engenharia",`Olá, Engenheiro Gabriel!

Gostaria de mais informações sobre regularização de imóvel / projeto de combate a incêndio.`);return`
    <section class="contact-section" id="contato">
      <div class="container">
        <div class="contact-card">
          <div class="contact-header">
            <span class="section-tag">Fale Conosco</span>
            <h2 class="section-title">Inicie a Regularização do Seu Imóvel</h2>
            <p class="section-subtitle">
              Nossa equipe técnica está pronta para avaliar seu caso e propor a melhor solução de engenharia.
            </p>
          </div>

          <div class="contact-channels-grid">
            <div class="channel-box">
              <div class="channel-box__icon channel-box__icon--whatsapp">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 class="channel-box__title">WhatsApp Comercial</h3>
              <p class="channel-box__value">${t.contact.whatsappDisplay}</p>
              <a
                href="${e}"
                target="_blank"
                rel="noopener noreferrer"
                class="channel-box__btn channel-box__btn--whatsapp"
                aria-label="Iniciar conversa no WhatsApp"
              >
                Conversar no WhatsApp
              </a>
            </div>

            <div class="channel-box">
              <div class="channel-box__icon channel-box__icon--email">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 class="channel-box__title">E-mail Institucional</h3>
              <p class="channel-box__value">${t.contact.email}</p>
              <a
                href="${a}"
                class="channel-box__btn channel-box__btn--email"
                aria-label="Enviar e-mail para a Habite Engenharia"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function y(){const e=new Date().getFullYear();return`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col__brand">
            <img
              src="${l("assets/logo-para-site.webp")}"
              alt="Habite Engenharia"
              class="footer-logo"
              width="180"
              height="42"
              loading="lazy"
            />
            <p class="footer-text">
              Soluções inteligentes em engenharia civil para regularização patrimonial, projetos técnicos e segurança contra incêndio (AVCB).
            </p>
          </div>

          <div>
            <h4 class="footer-title">Navegação</h4>
            <ul class="footer-links">
              <li><a href="#inicio" class="footer-link">Início</a></li>
              <li><a href="#servicos" class="footer-link">Serviços</a></li>
              <li><a href="#publico" class="footer-link">Para Quem É</a></li>
              <li><a href="#sobre" class="footer-link">Quem Somos</a></li>
              <li><a href="#contato" class="footer-link">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-title">Contato Oficial</h4>
            <ul class="footer-links">
              <li><span class="footer-link">${t.contact.phoneDisplay}</span></li>
              <li><span class="footer-link" style="word-break: break-all;">${t.contact.email}</span></li>
              <li><span class="footer-link">${t.serviceAreas[0]}</span></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© ${e} ${t.name}. Todos os direitos reservados.</p>
          <p>Regularização de Imóveis • Projetos de Incêndio & AVCB</p>
        </div>
      </div>
    </footer>
  `}function k(){return`
    <a
      href="${d(t.contact.whatsappRaw,t.contact.whatsappDefaultMessage)}"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float-btn"
      aria-label="Iniciar conversa com a Habite Engenharia no WhatsApp"
      title="Conversar no WhatsApp"
    >
      <div class="whatsapp-pulse"></div>
      <svg viewBox="0 0 448 512" fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
      </svg>
    </a>
  `}let c=null;function C(){return`
    <div class="pwa-banner" id="pwa-install-banner" role="dialog" aria-labelledby="pwa-title" aria-describedby="pwa-desc">
      <div class="pwa-banner__header">
        <img src="${l("icons/icon-192x192.png")}" alt="Habite Engenharia App" class="pwa-banner__icon" width="44" height="44" />
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
  `}function A(){const e=document.getElementById("pwa-install-banner"),a=document.getElementById("pwa-install-btn"),s=document.getElementById("pwa-dismiss-btn"),o=document.getElementById("header-install-app-btn");window.matchMedia("(display-mode: standalone)").matches&&o&&(o.style.display="none"),window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),c=r,!localStorage.getItem("habite_pwa_dismissed")&&e&&(e.style.display="block")});const n=async()=>{c?(e&&(e.style.display="none"),await c.prompt(),(await c.userChoice).outcome==="accepted"&&(localStorage.setItem("habite_pwa_dismissed","installed"),o&&(o.style.display="none")),c=null):alert(`Para instalar a Habite Engenharia no seu dispositivo:

1. No Chrome/Edge: Clique no ícone de instalação na barra de endereço (ou menu 3 pontos > "Instalar Aplicativo").
2. No Safari (iPhone): Toque no botão Compartilhar e selecione "Adicionar à Tela de Início".`)};a&&a.addEventListener("click",n),o&&o.addEventListener("click",n),s&&e&&s.addEventListener("click",()=>{e.style.display="none",localStorage.setItem("habite_pwa_dismissed","true")}),window.addEventListener("appinstalled",()=>{e&&(e.style.display="none"),o&&(o.style.display="none"),localStorage.setItem("habite_pwa_dismissed","installed")})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(l("sw.js")).catch(e=>{console.error("Falha ao registrar Service Worker:",e)})});const p=document.getElementById("app");p&&(p.innerHTML=`
    ${u()}

    <main id="conteudo-principal">
      ${v()}
      ${b()}
      ${f()}
      ${w()}
      ${_()}
    </main>

    ${y()}
    ${k()}
    ${C()}
  `,A());
//# sourceMappingURL=index-7nSjLrMj.js.map
