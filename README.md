# Habite Engenharia — Landing Page Canônica & PWA

<p align="center">
  <img src="public/assets/logo-para-site.webp" alt="Habite Engenharia" width="320" />
</p>

<p align="center">
  <strong>Soluções inteligentes para imóveis irregulares e projetos de prevenção e combate a incêndio (AVCB).</strong><br />
  Transforme seu imóvel em um patrimônio seguro, valorizado e 100% legal.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Produção_Ready-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/PWA-Instalável-orange?style=for-the-badge&logo=pwa" alt="PWA" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Deploy-Vercel_(Custo_Zero)-black?style=for-the-badge&logo=vercel" alt="Vercel" />
</p>

---

## 📌 Sobre o Projeto

A **Habite Engenharia** é uma empresa especializada em engenharia diagnóstica, assessoria jurídica/técnica para regularização patrimonial e elaboração de projetos de segurança contra incêndio e pânico (AVCB/CLCB).

Este repositório contém a **Landing Page Canônica Moderna** da empresa, desenvolvida para substituir a presença digital legada, eliminando atritos de conversão, falhas de usabilidade e dependências de hospedagens pesadas. O projeto foi construído sob a filosofia **Mobile-First**, com recursos de **PWA (Progressive Web App)** para instalação instantânea em smartphones e desktops, operando com **custo de infraestrutura rigorosamente zero** (GitHub + Vercel).

---

## 🎯 Proposta de Valor & Serviços Centrais

1. **Regularização de Imóveis:**
   * Obtenção de Habite-se e Certidão de Baixa de Construção.
   * Averbação de edificações, reformas e acréscimos em cartório.
   * Defesa e regularização contra notificações e multas municipais.
   * Desdobro, desmembramento e unificação de lotes e glebas.

2. **Prevenção e Combate a Incêndio (AVCB / CLCB):**
   * Elaboração e aprovação de Projetos de Segurança Contra Incêndio e Pânico (PSIP).
   * Obtenção e renovação de AVCB junto ao Corpo de Bombeiros Militar.
   * Dimensionamento de hidrantes, extintores, sinalização e saídas de emergência.
   * Laudos de conformidade técnica para indústrias, comércios, escolas e condomínios.

---

## 🚀 Principais Recursos & Diferenciais Técnicos

* 📱 **Mobile-First & Ergonomia:** Layout concebido primeiramente para telas estreitas (360px a 430px), com todos os botões de ação e conversão posicionados na zona de alcance natural do polegar (*thumb zone*).
* ⚡ **Progressive Web App (PWA):**
  * Instalável em Android, iOS e Windows/macOS através do W3C Manifest.
  * Botão de instalação nativo no topo da barra de navegação e banner inteligente com controle de dispensa no `localStorage`.
  * **Service Worker com Cache Offline:** Estratégia *Stale-While-Revalidate* que permite a consulta aos telefones e serviços da empresa mesmo em locais de obra sem conectividade.
* 💬 **Conversão Direta sem Fricção:**
  * Botão flutuante de WhatsApp com animação de pulso e mensagens parametrizadas em UTF-8.
  * Links diretos para WhatsApp oficial (`(32) 98513-2276`) e E-mail corporativo (`gabriel.monteiro@professor.faminas.edu.br`).
* 🔒 **Zero Dependência Externa (Sem Hotlink):** Todos os logotipos, fotografias e ilustrações em WebP residem fisicamente no repositório (`public/assets/`), prevenindo quebras no momento da virada de DNS.
* 🛡️ **Segurança Robusta:** Configuração estrita de cabeçalhos HTTP no [vercel.json](file:///c:/Users/Nilton/Workspaces/AG_Workspace/habite-engenharia/vercel.json) (`CSP`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`).
* 📦 **Bundle Ultraleve:** Menos de 10 kB compactados (gzip), alcançando nota máxima no Google Lighthouse.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Justificativa |
|---|---|---|
| **Linguagem** | TypeScript 5.7 (Strict Mode) | Tipagem estrita e contratos de dados desacoplados |
| **Bundler / Tooling** | Vite 6.0 | Compilação instantânea (180ms) e HMR ultrarrápido |
| **Estilização** | Vanilla CSS Modular + Custom Properties | Design System corporativo sem overhead de frameworks |
| **PWA & Cache** | Service Worker Vanilla + Web App Manifest | Controle granular de ciclo de vida e precache estático |
| **Testes Automatizados** | Vitest 2.1 | 18 testes automatizados para layout, links e PWA |
| **Linter & Code Style** | ESLint 9 + Prettier | Código limpo, padronizado e auditado continuamente |
| **Hospedagem / CDN** | Vercel Global Edge Network | Custo R$ 0,00, HTTP/3 e certificado SSL/TLS automático |

---

## 📂 Estrutura de Diretórios

```
habite-engenharia/
├── .ai/                            # Prompts de governança arquitetural (Socrático, Sprints, Review)
├── public/                         # Assets públicos estáticos
│   ├── assets/                     # Imagens e logotipos WebP da marca (sem hotlink externo)
│   ├── icons/                      # Ícones PWA multi-resolução (192px, 512px, apple-touch-icon, svg)
│   ├── manifest.webmanifest        # Manifesto oficial do PWA
│   └── sw.js                       # Service worker com cache offline e Stale-While-Revalidate
├── scripts/                        # Scripts utilitários de geração de assets
│   └── generate-icons.ps1
├── src/
│   ├── components/                 # Módulos de interface desacoplados
│   │   ├── About/                  # Seção institucional Quem Somos
│   │   ├── Contact/                # Seção de canais de contato e conversão
│   │   ├── Footer/                 # Rodapé com links de navegação e copyright
│   │   ├── Header/                 # Topbar com logo, menu e botões de ação
│   │   ├── Hero/                   # Seção de abertura de alto impacto
│   │   ├── PWAInstallBanner/       # Diálogo e botão de instalação do PWA
│   │   ├── Services/               # Cards detalhados de Regularização e AVCB
│   │   ├── TargetAudience/         # Segmentação por persona (síndicos, construtoras, etc.)
│   │   └── WhatsAppButton/         # Botão flutuante ergonômico com efeito pulso
│   ├── data/                       # Contratos de dados desacoplados (Fase 2 Supabase Ready)
│   │   ├── company.ts              # Informações da empresa e contatos oficiais
│   │   └── services.ts             # Catálogo de serviços e personas
│   ├── styles/                     # Sistema de estilos Vanilla CSS
│   │   ├── tokens.css              # Tokens visuais (cores Habite, tipografia, elevação)
│   │   └── global.css              # Reset mobile-first e container base
│   ├── types/                      # Interfaces TypeScript
│   │   └── index.ts
│   ├── utils/                      # Utilitários de sanitização de links
│   │   └── helpers.ts
│   └── main.ts                     # Ponto de entrada e orquestração dos componentes
├── tests/                          # Suíte de testes automatizados com Vitest
│   ├── sanity.test.ts
│   ├── header.test.ts
│   ├── sprint2.test.ts
│   └── sprint3.test.ts
├── AI_EXECUTION_GUIDE.md           # Regras invioláveis para desenvolvimento
├── ENGINEERING_JOURNAL.md          # Diário de engenharia e lições aprendidas
├── IMPLEMENTATION_PLAN.md          # Roadmap detalhado de fases e sprints
├── PRODUCT_BACKLOG.md              # Backlog estruturado de Epics e User Stories
├── PROJECT_DNA.md                  # Documento mestre de arquitetura estratégica
├── vercel.json                     # Configuração de headers de segurança e cache
└── package.json                    # Dependências e scripts de automação
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
* [Node.js](https://nodejs.org/) versão 18 ou superior.
* Gerenciador de pacotes `npm`.

### 1. Clonar o repositório
```bash
git clone https://github.com/niltonfjunior2/habite-engenharia.git
cd habite-engenharia
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:3000` no seu navegador.

### 4. Executar os testes automatizados
```bash
npm run test
```

### 5. Validar tipagem e linter
```bash
npm run typecheck
npm run lint
```

### 6. Gerar o build de produção
```bash
npm run build
npm run preview
```

---

## 🌐 Deploy na Vercel (Custo Zero)

O projeto está 100% preparado para deploy contínuo na Vercel:

1. Importe o repositório no painel da [Vercel](https://vercel.com).
2. O framework preset será detectado automaticamente como **Vite**.
3. O comando de build será `npm run build` e o diretório de saída será `dist/`.
4. Os cabeçalhos de segurança, cache de assets e Service Worker serão aplicados automaticamente via `vercel.json`.
5. No painel de domínios da Vercel, aponte as entradas DNS de `habitengenharia.com.br`.

---

## 🗺️ Roadmap de Evolução (Fase 2)

Com a **Fase 1** (Landing Page Canônica + PWA) concluída, o projeto possui arquitetura preparada para plugar o **Supabase** sem alteração na camada visual:

* [ ] **Epic 5:** Banco de dados PostgreSQL no Supabase para captura e CRM de leads.
* [ ] **Epic 6:** Painel administrativo leve para gerenciamento dinâmico de obras concluídas e artigos.
* [ ] **Epic 7:** Portal restrito do cliente com autenticação segura para download de Laudos Técnicos, Vistorias e ARTs.

---

## 📞 Contatos Oficiais

* **Empresa:** Habite Engenharia
* **WhatsApp:** [(32) 98513-2276](https://wa.me/5532985132276)
* **E-mail:** [gabriel.monteiro@professor.faminas.edu.br](mailto:gabriel.monteiro@professor.faminas.edu.br)
* **Atuação:** Minas Gerais e Região

---

## 📄 Licença

Este projeto é de propriedade exclusiva da **Habite Engenharia**. Todos os direitos reservados.
