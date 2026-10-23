# IMPLEMENTATION PLAN — HABITE ENGENHARIA

> **Versão:** 1.0.0  
> **Derivação:** PROJECT_DNA.md e PRODUCT_BACKLOG.md  
> **Foco:** Rápido Time-to-Market, Risco Zero e Entregas Incrementais

---

## 1. Roadmap Estratégico em 2 Grandes Fases

```
[ FASE 1: LANDING PAGE CANÔNICA + PWA ] ────► [CONCLUÍDO]
  ├── Sprint 1: Fundação & Estrutura Base           [CONCLUÍDO]
  ├── Sprint 2: Conteúdo & Conversão WhatsApp       [CONCLUÍDO]
  └── Sprint 3: PWA, Service Worker & Otimização    [CONCLUÍDO]
                             │
                             ▼ (Geração Imediata de Negócios)
[ FASE 2: PLATAFORMA DE SERVIÇOS & SUPABASE ] ────► [PRÓXIMA FASE]
  ├── Sprint 4: Setup Supabase & Captura de Leads
  ├── Sprint 5: Portfólio Dinâmico & CMS Leve
  └── Sprint 6: Portal do Cliente (Laudos & Documentos)
```

---

## 2. Detalhamento das Sprints da Fase 1

### SPRINT 1: Fundação, Tooling & Design System `[STATUS: CONCLUÍDO]`
* **Objetivo:** Estabelecer a base técnica limpa, tooling de build e variáveis de estilo sem débitos técnicos.
* **Tarefas Técnicas:**
  1. Inicialização do projeto com Vite + TypeScript ou Boilerplate Web semântico limpo. (Entregue)
  2. Criação do arquivo de tokens de estilo com as cores da Habite. (Entregue)
  3. Estruturação do modelo de dados estático em `src/data/company.ts` e `src/data/services.ts`. (Entregue)
  4. Configuração de build, scripts de lint/typecheck e arquivo de configuração para a Vercel (`vercel.json`). (Entregue)
* **Critério de Saída (DoD):** Projeto compilando sem warnings e visualização dos tokens no navegador. (Validado)

---

### SPRINT 2: Interface Canônica, Seções de Conteúdo & Conversão `[STATUS: CONCLUÍDO]`
* **Objetivo:** Construir a interface visual completa e operacional com foco em conversão e fidelidade ao conteúdo da Habite.
* **Tarefas Técnicas:**
  1. Implementação do Header responsivo com logo da Habite e navegação suave. (Entregue)
  2. Implementação da Seção Hero com headline de alto impacto e CTA principal. (Entregue)
  3. Implementação dos Cards de Serviços detalhados (Regularização & AVCB). (Entregue)
  4. Implementação da Seção "Para Quem é a Habite" (Personas). (Entregue)
  5. Implementação da Seção Institucional "Quem Somos" e autoridade técnica. (Entregue)
  6. Implementação dos canais de conversão: Botão flutuante de WhatsApp e E-mail. (Entregue)
* **Critério de Saída (DoD):** Página 100% navegável, responsiva em smartphones e desktop, com todos os links operacionais. (Validado)

---

### SPRINT 3: PWA Engine, Performance & Publicação Vercel `[STATUS: CONCLUÍDO]`
* **Objetivo:** Transformar a landing page em um Progressive Web App instalável e lançar em produção.
* **Tarefas Técnicas:**
  1. Criação do `manifest.webmanifest` com metadados, cores de tema e atalhos de aplicativo. (Entregue)
  2. Geração e inclusão dos ícones do app (192px, 512px, maskable, apple-touch-icon). (Entregue)
  3. Implementação do Service Worker com estratégia de cache offline e Stale-While-Revalidate. (Entregue)
  4. Componente de incentivo à instalação (PWAInstallBanner). (Entregue)
  5. Auditoria de Performance, Acessibilidade e SEO no Lighthouse. (Validado)
* **Critério de Saída (DoD):** Projeto instalável, cache offline funcional e suite com 17 testes automatizados aprovados. (Validado)

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
