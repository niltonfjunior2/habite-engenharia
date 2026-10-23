# PROJECT DNA — HABITE ENGENHARIA

> **Versão:** 1.0.0  
> **Data:** 23/10/2026  
> **Status:** Aprovado  
> **Classificação:** Estratégico / Arquitetura Canônica

---

## 1. Visão do Projeto
Substituição definitiva da presença digital defasada da **Habite Engenharia** (`habitengenharia.com.br`) por uma **Landing Page Canônica de Alta Conversão**, moderna, *mobile-first* e com capacidades de **PWA (Progressive Web App)** para instalação ágil nos dispositivos dos clientes e parceiros. O sistema foi concebido para resolver o gargalo de conversão imediato a custo zero de infraestrutura, com arquitetura desacoplada e modular projetada para absorver a **Fase 2** (gestão de leads, portfólio dinâmico, CMS e área restrita para laudos e vistorias via Supabase).

---

## 2. Objetivos de Negócio & Critérios de Sucesso

### 2.1 Objetivos Primordiais
* **Conversão Imediata:** Eliminar pontos cegos de contato (botões vazios do legado) e direcionar leads diretamente para atendimento via WhatsApp (`+55 32 98513-2276`) e e-mail institucional (`gabriel.monteiro@professor.faminas.edu.br`).
* **Autoridade e Confiança:** Transmitir solidez técnica para os três perfis de clientes: Pessoas Físicas (regularização residencial/reformas), Empresas/Construtoras (licenciamento e AVCB) e Condomínios/Síndicos (inspeções prediais e conformidade legal).
* **Fidelização e Retenção:** Habilitar instalação PWA instantânea (ícone em tela de início, cache offline do catálogo de serviços e acesso rápido).

### 2.2 Indicadores Chave de Sucesso (KPIs)
* **Tempo de Carregamento Inicial:** LCP (Largest Contentful Paint) < 1.2s no mobile 4G.
* **Taxa de Conversão de Cliques em CTA:** Aumento superior a 300% em relação ao site legado.
* **Custo de Operação e Hospedagem:** R$ 0,00/mês (100% elegível ao Free Tier da Vercel e GitHub).
* **Taxa de Instalação PWA:** Disponibilidade 100% auditada no Lighthouse PWA.

---

## 3. Drivers Arquiteturais (Priorização Ratificada)

1. **Tempo de Entrega (Rank 1):** Time-to-market ultra-rápido. Solução focada na entrega imediata da Fase 1 (Landing Page estática canônica + PWA) sem sobre-engenharia de backend prematura.
2. **Custo (Rank 2):** Custo de infraestrutura estritamente zero. Uso de Git/GitHub + Vercel Hobby Tier + Supabase Free Tier (Fase 2).
3. **Segurança (Rank 3):** Prevenção a injeções, cabeçalhos de segurança estritos (CSP, HSTS, X-Frame-Options), higienização de inputs e preparação da camada de acesso com RLS (Row Level Security) para o futuro Supabase.
4. **Manutenibilidade / Escalabilidade (Rank 4):** Código modularizado, separação estrita entre camada de apresentação, modelos de dados e serviços de integração para garantir acoplamento zero quando o backend for conectado.
5. **Performance (Rank 5):** Otimização de assets (WebP/SVG), minificação, CSS crítico *inlined* e Service Worker para cache inteligente de rotas e imagens.

---

## 4. Restrições Invioláveis

* **Identidade Visual:** Preservação rigorosa da identidade da Habite Engenharia (paleta de cores corporativa, tipografia técnica limpa, logomarcas originais vetorizadas/otimizadas em WebP).
* **Integridade do Conteúdo:** Manutenção de todo o conteúdo conceitual e técnico validado da empresa (Regularização de Imóveis e Projetos de Prevenção e Combate a Incêndio/AVCB).
* **Custo Zero:** Nenhuma tecnologia ou serviço com cobrança recorrente obrigatória pode ser introduzido nas fases 1 ou 2.
* **Controle de Versão e Deploy:** Repositório oficial no GitHub e pipeline CI/CD automatizado via Vercel.

---

## 5. Decisões por Dimensão Arquitetural

| Dimensão | Decisão Arquitetural | Justificativa |
|---|---|---|
| **D1: Escopo e Propósito** | Separação em Fase 1 (Canônica + PWA) e Fase 2 (Supabase Backend) | Atende ao driver #1 (Tempo de Entrega) sem comprometer o roadmap futuro. |
| **D2: Domínio de Negócio** | Foco estrito em 2 núcleos de serviço: Regularização & AVCB | Reflete a competência central atual do negócio e maximiza o foco do lead. |
| **D3: Restrições** | Jamstack Serverless / Static Generation | Garante custo zero perpétuo na Vercel e tempo de resposta instantâneo. |
| **D4: Atores e Segurança** | Fase 1: Anônimo / Visitante. Fase 2: RBAC via Supabase Auth + RLS | Isolamento prévio de contratos de dados para não expor segredos de API no cliente. |
| **D5: Experiência de Uso** | *Mobile First*, ergonomia com polegar (thumb zone para CTAs de WhatsApp) | Mais de 80% do tráfego para serviços rápidos de engenharia provém de smartphones. |
| **D6: Dados** | Fase 1: Dados estáticos tipados (JSON/TS). Fase 2: PostgreSQL (Supabase) | Zero overhead de banco agora, portabilidade total via migrações SQL no futuro. |
| **D7: Processamento** | Renderização estática pré-compilada (SSG) no Edge da Vercel | Latência mínima em qualquer região do Brasil sem consumo de computação contínua. |
| **D8: Resiliência** | Service Worker com estratégia *Stale-While-Revalidate* e Fallback Offline | Permite navegação na página e leitura dos serviços mesmo sem conexão de rede. |
| **D9: Ecossistema Externo** | Deep link WhatsApp API (`wa.me`) e Mailto Protocol | Conversão direta sem intermediários ou dependência de servidores de SMTP na Fase 1. |
| **D10: Cultura Técnica** | Stack padronizada web moderna (Vite/React/TypeScript ou Vanilla HTML5/CSS3/JS modular) | Fácil manutenção, vasta documentação e suporte nativo na Vercel. |
| **D11: Observabilidade** | Vercel Analytics / Speed Insights (free tier) + Web Vitals | Monitoramento de tempo real sem scripts pesados de terceiros. |

---

## 6. Arquitetura Lógica

A arquitetura lógica adota o padrão **Clean Architecture / Modular Presentation**:

```
[ Camada de Apresentação ]
  ├── UI Components (Header, Hero, Services, TargetAudience, About, Contact, Footer)
  ├── PWA Modules (InstallPrompt, ServiceWorkerRegistration, OfflineBadge)
  └── Floating Actions (WhatsAppStickyButton, BackToTop)
            │
            ▼
[ Camada de Serviços & Adaptadores ]
  ├── AnalyticsAdapter (Vercel Speed Insights / Google Analytics Tag opcional)
  ├── ContactChannelDispatcher (WhatsApp Link Generator, Email Link Generator)
  └── [Fase 2 Ready] SupabaseClientAdapter (Auth, LeadService, DocumentService)
            │
            ▼
[ Camada de Domínio / Dados Estáticos ]
  ├── CompanyProfile (Nome, CNPJ, Contatos, Horários)
  ├── ServiceCatalog (Regularização, AVCB/Combate a Incêndio)
  └── TargetPersonas (Pessoa Física, Construtora, Condomínio, Entidades Especiais)
```

---

## 7. Arquitetura Física & Infraestrutura

* **Hospedagem & CDN:** Vercel Global Edge Network (Anycast DNS, compressão Brotli/Gzip, HTTP/3, TLS 1.3 automático).
* **Repositório:** GitHub (Branches: `main` para produção, `develop` ou feature branches para homologação).
* **Client App:** Progressive Web App instalado localmente em dispositivos Android, iOS e Desktop através do manifest W3C (`manifest.webmanifest`).
* **Futuro Backend (Fase 2):** Supabase (PostgreSQL 15+, Auth GoTrue, Storage S3-compatible, PostgREST API).

---

## 8. Stack Tecnológica Aprovada

* **Core Runtime / Build Tool:** Vite + TypeScript / HTML5 Semântico Moderno (Garante compilação ultrarrápida, bundle minúsculo e tipagem estrita para expansão).
* **Estilização:** CSS Moderno com Custom Properties (Design Tokens baseados nas cores da Habite: Laranja institucional, Grafite escuro, Branco e Cinza neutro).
* **PWA Engine:** Workbox / Vanilla Service Worker customizado com cache inteligente de assets estáticos e página offline canônica.
* **Ícones & Assets:** SVGs inline otimizados e imagens em formato `.webp` com dimensões responsivas (`srcset`).

---

## 9. Estratégia de Segurança

1. **Content Security Policy (CSP):** Bloqueio de scripts não autorizados e injeções inline suspeitas.
2. **Sanitização de Comunicação:** Geração parametrizada e sanitizada de links de WhatsApp via `encodeURIComponent` para evitar truncamento ou caracteres maliciosos.
3. **Isolamento de Credenciais:** Preparação de variáveis de ambiente (`.env.example`) sem commits de segredos no repositório.
4. **Política de RLS (Fase 2):** Regra padrão no PostgreSQL do Supabase: todas as tabelas bloqueadas por padrão (*deny all*), liberando inserção de leads anônimos apenas via trigger/função controlada.

---

## 10. Estratégia de Dados (Evolução)

* **Fase 1 (Atual):** Modelagem desacoplada em arquivos de dados estáticos (`data/services.ts`, `data/company.ts`), garantindo que o frontend consuma interfaces TypeScript que espelharão as futuras tabelas SQL.
* **Fase 2 (Supabase):**
  * Tabela `leads`: Registro de solicitações com nome, telefone, e-mail, tipo de cliente, serviço de interesse e status.
  * Tabela `portfolio`: Obras, laudos realizados, fotos antes/depois e descrições técnicas.
  * Tabela `documents`: Laudos técnicos e ARTs vinculados a clientes autenticados.

---

## 11. Riscos & Mitigações

| Risco Mapeado | Severidade | Mitigação Arquitetural |
|---|---|---|
| Quebra de imagens na virada de DNS (Hotlink WordPress) | Crítica | Todos os assets de imagem (logos, fotos de serviços) devem ser baixados e servidos localmente via pasta `public/assets/` do projeto. Jamais depender das URLs do WordPress legado. |
| Quebra de links em navegadores sem suporte PWA | Baixa | Degradação graciosa: o site opera como Landing Page web padrão perfeita caso o PWA não seja instalado. |
| Alteração de número de telefone / contato | Média | Centralização de todos os canais de contato em um único arquivo de configuração (`company.ts`). |
| Sobrecarga de requisições ou spam em formulários | Média | Na Fase 1 o contato é direto via WhatsApp/E-mail nativo do cliente, eliminando vetores de bot spam. |
| Reescrita de código ao conectar o Supabase | Alta | Aplicação do padrão *Repository / Adapter*: a UI se conecta a interfaces, não a implementações fixas. |

---

## 12. Trade-offs Assumidos

* **Estático vs. Dinâmico na Fase 1:** Sacrifica-se a edição dinâmica em tempo real (CMS) na largada em prol de **Tempo de Entrega imediato** e **Custo Zero absoluto**.
* **Contato Direto vs. Formulário Interno:** Priorizou-se o clique direto no WhatsApp em relação a um formulário com salvamento em banco, reduzindo o atrito do cliente e eliminando a dependência imediata de um backend.
