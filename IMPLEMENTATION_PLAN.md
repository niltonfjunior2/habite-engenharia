# IMPLEMENTATION PLAN — HABITE ENGENHARIA

> **Versão:** 1.0.0  
> **Derivação:** PROJECT_DNA.md e PRODUCT_BACKLOG.md  
> **Foco:** Rápido Time-to-Market, Risco Zero e Entregas Incrementais

---

## 1. Roadmap Estratégico em 2 Grandes Fases

```
[ FASE 1: LANDING PAGE CANÔNICA + PWA ] ────► DEPLOY VERCEL (Custo R$ 0)
  ├── Sprint 1: Fundação & Estrutura Base
  ├── Sprint 2: Conteúdo, Design Canônico & Conversão WhatsApp
  └── Sprint 3: PWA, Service Worker & Otimização Final
                             │
                             ▼ (Geração Imediata de Negócios)
[ FASE 2: PLATAFORMA DE SERVIÇOS & SUPABASE ]
  ├── Sprint 4: Setup Supabase & Captura de Leads
  ├── Sprint 5: Portfólio Dinâmico & CMS Leve
  └── Sprint 6: Portal do Cliente (Laudos & Documentos)
```

---

## 2. Detalhamento das Sprints da Fase 1

### SPRINT 1: Fundação, Tooling & Design System
* **Objetivo:** Estabelecer a base técnica limpa, tooling de build e variáveis de estilo sem débitos técnicos.
* **Tarefas Técnicas:**
  1. Inicialização do projeto com Vite + TypeScript ou Boilerplate Web semântico limpo.
  2. Criação do arquivo de tokens de estilo (`tokens.css` ou `variables.css`) com as cores da Habite (Laranja institucional, Dark Slate, Branco e escalas de cinza).
  3. Estruturação do modelo de dados estático em `src/data/company.ts` e `src/data/services.ts`.
  4. Configuração de build, scripts de lint/typecheck e arquivo de configuração para a Vercel (`vercel.json`).
* **Critério de Saída (DoD):** Projeto compilando sem warnings e visualização dos tokens no navegador.

---

### SPRINT 2: Interface Canônica, Seções de Conteúdo & Conversão
* **Objetivo:** Construir a interface visual completa e operacional com foco em conversão e fidelidade ao conteúdo da Habite.
* **Tarefas Técnicas:**
  1. Implementação do Header responsivo com logo da Habite e navegação suave (*smooth scroll*).
  2. Implementação da Seção Hero com headline de alto impacto e CTA principal.
  3. Implementação dos Cards de Serviços detalhados:
     * Regularização de Imóveis (Habite-se, alvarás, multas).
     * Prevenção e Combate a Incêndio / AVCB (Projetos e aprovações).
  4. Implementação da Seção "Para Quem é a Habite" (Personas: Síndicos, Construtoras, Proprietários).
  5. Implementação da Seção Institucional "Quem Somos" e autoridade técnica.
  6. Implementação dos canais de conversão:
     * Botão flutuante de WhatsApp ergonomicamente posicionado para polegar mobile (`(32) 98513-2276`).
     * Seção de contato com botão direto de e-mail (`gabriel.monteiro@professor.faminas.edu.br`).
* **Critério de Saída (DoD):** Página 100% navegável, responsiva em smartphones e desktop, com todos os links de WhatsApp e e-mail funcionando com mensagens pré-formatadas.

---

### SPRINT 3: PWA Engine, Performance & Publicação Vercel
* **Objetivo:** Transformar a landing page em um Progressive Web App instalável e lançar em produção.
* **Tarefas Técnicas:**
  1. Criação do `manifest.webmanifest` com metadados, cores de tema e atalhos de aplicativo.
  2. Geração e inclusão dos ícones do app (192px, 512px, maskable, apple-touch-icon).
  3. Implementação do Service Worker com estratégia de cache offline para os assets fundamentais.
  4. Componente discreto de incentivo à instalação ("Instalar Aplicativo Habite Engenharia").
  5. Auditoria de Performance, Acessibilidade e SEO no Lighthouse (Meta: 95+ em todas as métricas).
  6. Deploy no repositório GitHub e integração contínua com a Vercel.
* **Critério de Saída (DoD):** URL pública ativa na Vercel, site instalável no celular e score de desempenho verde no Core Web Vitals.

---

## 3. Matriz de Dependências Técnicas

| Item | Depende de | Risco Associado | Mitigação |
|---|---|---|---|
| Sprint 2 (Interface) | Sprint 1 (Design System & Dados) | Inconsistência visual | Uso estrito dos tokens CSS definidos na Sprint 1 |
| Conversão WhatsApp | Dados validados da empresa | Número incorreto no ar | Teste funcional direto via link `wa.me` em dispositivo real |
| PWA (Sprint 3) | Assets estáticos finalizados | Cache de versões desatualizadas | Service worker com controle de versão de cache (`CACHE_VERSION = 'v1'`) |
| Deploy Vercel | Repositório no GitHub | Erro de build no edge | Script de validação local de build (`npm run build`) |

---

## 4. Ordem Cronológica Recomendada de Execução

1. **Passo 1:** Executar o script do prompt `2 - Estruturar.md` (criação de diretórios, configurações, scripts de build).
2. **Passo 2:** Iniciar a **Sprint 1** via prompt `3 - Iniciar Sprint.md` e validar no navegador.
3. **Passo 3:** Iniciar a **Sprint 2** para montagem visual e integração de todos os fluxos de conversão.
4. **Passo 4:** Iniciar a **Sprint 3** para inclusão do Service Worker, PWA e checklist final de publicação.
5. **Passo 5:** Revisão de Sprint via `4 - Sprint Review.md`.
