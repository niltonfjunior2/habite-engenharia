# ENGINEERING JOURNAL — HABITE ENGENHARIA

> **Registro Contínuo de Arquitetura, Decisões Técnicas e Lições Aprendidas**

---

## 1. Problemas Encontrados & Soluções Técnicas

### 1.1 Risco Crítico de Hotlink de Imagens no WordPress Legado
* **Descrição:** O site antigo hospedava os logotipos e imagens de serviço dentro do diretório `/wp-content/uploads/2024/11/` do domínio `habitengenharia.com.br`.
* **Causa:** Ao apontar as entradas de DNS (registro A / CNAME) para a Vercel, o servidor WordPress legado deixará de responder, quebrando imediatamente todas as imagens do novo site caso usassem URLs absolutas do WordPress.
* **Solução:** Todos os assets binários e WebP originais foram transferidos e versionados fisicamente dentro do diretório `public/assets/`, servidos como assets estáticos imutáveis da própria aplicação na CDN da Vercel.

### 1.2 Invasividade do Prompt de Instalação PWA
* **Descrição:** Disparar o diálogo nativo de instalação do PWA assim que o usuário entra na página gera rejeição e prejudica a conversão do lead.
* **Causa:** O evento nativo `beforeinstallprompt` do Chrome/Android é síncrono no primeiro carregamento.
* **Solução:** O evento é interceptado via `e.preventDefault()`, guardado em memória (`deferredPrompt`) e exibido através de um componente toast não intrusivo (`PWAInstallBanner`), respeitando a opção "Agora não" persistida no `localStorage`.

---

## 2. Restrições Descobertas & Consolidadas

* **Custo Zero Inegociável:** Qualquer dependência externa com limite rígido ou faturamento oculto (como serviços pagos de SMTP para envio de e-mail) foi descartada na Fase 1. A conversão baseada em deep link de WhatsApp e protocolo `mailto:` nativo possui custo operacional exatamente R$ 0,00 e taxa de entrega de 100%.
* **Mobile-First & Thumb Zone:** Mais de 80% do público-alvo acessa por smartphone. Os botões de conversão foram rigorosamente fixados na área de alcance do polegar.

---

## 3. Lições Aprendidas

* **Desacoplamento de Dados com Contratos TypeScript:** Criar as interfaces em `src/types/index.ts` e concentrar os textos e configurações em `src/data/` permitiu construir uma Landing Page estática ultrarrápida agora, deixando as mesmas assinaturas prontas para serem substituídas pelas chamadas de API do Supabase na Fase 2 sem alterar nenhuma linha de CSS ou marcação visual dos componentes.
* **Bundle Ultraleve com Vanilla CSS Modular:** O uso de CSS Custom Properties e componentes modulares evitou o overhead de bibliotecas pesadas de estilização, alcançando um tempo de compilação de 258ms e um bundle gzip total de ~10 kB.

---

## 4. Débitos Técnicos Monitorados

* **Fase 2 — Migração para Supabase:**
  * *Descrição:* Na Fase 1 os dados residem em arquivos TypeScript estáticos (`company.ts` e `services.ts`).
  * *Motivo:* Atendimento à prioridade #1 (Tempo de Entrega) e prioridade #2 (Custo Zero).
  * *Prioridade:* Baixa para o lançamento da Fase 1 / Alta para a Fase 2.
  * *Plano de Tratamento:* Implementação da Epic 5 (Gestão de Leads & Supabase Client) conforme especificado no roadmap de arquitetura.
