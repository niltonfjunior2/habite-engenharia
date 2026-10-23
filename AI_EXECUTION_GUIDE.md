# AI EXECUTION GUIDE — HABITE ENGENHARIA

> **Público-Alvo:** Agentes de Inteligência Artificial e Desenvolvedores de Software  
> **Objetivo:** Estabelecer restrições invioláveis, padrões de código e procedimentos de entrega contínua para o projeto Habite Engenharia.

---

## 1. Regras Arquiteturais Invioláveis

Toda IA ou desenvolvedor atuando neste projeto **DEVE OBEDECER RIGOROSAMENTE** às seguintes regras:

1. **PROIBIDO INVENTAR TECNOLOGIAS OU DEPENDÊNCIAS PESADAS:** Não adicione frameworks desnecessários ou bibliotecas externas pesadas para funcionalidades triviais. O foco é manter o bundle leve e zero custo.
2. **FIDELIDADE DA MARCA & CONTEÚDO:** Não altere as cores corporativas da Habite Engenharia, o número de telefone de contato (`(32) 98513-2276`) ou o e-mail oficial sem autorização explícita do usuário.
3. **MOBILE-FIRST & ERGONOMIA:** Toda tela e componente DEVE ser desenhado primeiramente para telas estreitas (360px a 430px) e somente depois escalado para desktop. Todos os botões clicáveis devem ter no mínimo 44x44px para facilitar o toque.
4. **DESACOPLAMENTO DE DADOS:** Os dados de textos, serviços e contatos NUNCA devem estar "hardcoded" misturados no meio do HTML/JSX. Eles devem ser importados do módulo de dados (`src/data/`), garantindo que a migração futura para o Supabase ocorra apenas na camada de serviço.
5. **CUSTO ZERO & PADRÃO VERCEL:** A aplicação deve ser construída como uma aplicação web estática ou serverless compatível com o free tier perpétuo da Vercel.
6. **LOCALIZAÇÃO DE ASSETS (SEM HOTLINK):** Todo e qualquer asset (imagens, logos, webp, ícones) deve residir fisicamente no repositório (`public/assets/`). É estritamente proibido fazer hotlink de imagens apontando para o servidor WordPress legado, pois a virada de DNS invalidará essas URLs.

---

## 2. Processo de Implementação de Novas Funcionalidades

Para cada nova tarefa ou Sprint:

```
[ Início ]
   │
   ▼
1. Leitura Obrigatória: Ler PROJECT_DNA.md, PRODUCT_BACKLOG.md e IMPLEMENTATION_PLAN.md.
   │
   ▼
2. Planejamento Explícito: Antes de gerar código, liste os arquivos que serão criados ou editados e a justificativa técnica.
   │
   ▼
3. Implementação Modular: Criar componentes focados, isolados e com responsabilidade única.
   │
   ▼
4. Teste Visual & Funcional: Validar no navegador em resoluções mobile e desktop.
   │
   ▼
5. Validação de Build: Executar `npm run build` ou o verificador de tipos para garantir zero erros.
```

---

## 3. Processo de Testes e Validação

1. **Responsividade:** Testar obrigatoriamente nas larguras: 375px (iPhone SE/médio), 412px (Android padrão), 768px (Tablet) e 1280px (Desktop).
2. **Canais de Contato:**
   * Clicar no botão do WhatsApp e verificar se abre a URL com o número correto e mensagem codificada em UTF-8.
   * Clicar no botão de e-mail e checar o protocolo `mailto:`.
3. **PWA:**
   * Auditar a aba *Application* do DevTools para validar se o `manifest.webmanifest` está registrado sem erros.
   * Validar se o Service Worker ativa e faz cache dos assets estáticos.
   * Testar a alternância para modo *Offline* no DevTools e verificar se o site continua renderizando sem tela em branco.
4. **Performance:** Verificar no Lighthouse se o score geral se mantém acima de 90.

---

## 4. Processo de Revisão de Código

Antes de dar uma tarefa por encerrada, audite:
* [ ] Há algum link quebrado ou apontando para `#` (como existia no site legado)?
* [ ] Há imagens sem atributos `alt`, `width` ou `height` explícitos?
* [ ] Há classes CSS soltas sem uso ou estilos inline desnecessários?
* [ ] Os textos mantêm a ortografia e a seriedade técnica da engenharia civil?

---

## 5. Processo de Documentação

* Se uma decisão arquitetural for alterada ou um novo serviço for incluído, o arquivo `PROJECT_DNA.md` deve ser atualizado.
* Quando uma funcionalidade for concluída, o item correspondente no `PRODUCT_BACKLOG.md` deve ser marcado como concluído.
* Qualquer nova variável de ambiente (como `VITE_SUPABASE_URL` na Fase 2) deve ser imediatamente documentada em `.env.example`.

---

## 6. Checklist de Conclusão de Tarefa (Definition of Done)

Uma tarefa só pode ser considerada concluída se atender a todos os itens abaixo:

- [ ] Código escrito, limpo e sem logs de debug no console.
- [ ] Build local passando sem warnings impeditivos (`npm run build`).
- [ ] Testado no viewport mobile com foco em ergonomia.
- [ ] Links externos (WhatsApp e e-mail) testados e operacionais.
- [ ] Sem quebra de compatibilidade com PWA e modo offline.
- [ ] Documentação sincronizada com o código entregue.
