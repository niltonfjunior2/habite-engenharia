# PRODUCT BACKLOG — HABITE ENGENHARIA

> **Versão:** 1.0.0  
> **Derivação:** PROJECT_DNA.md  
> **Critério de Organização:** Valor de Negócio / Fases de Entrega

---

## VISÃO GERAL DAS EPICS

* **EPIC 1: Fundação & Identidade Canônica (Fase 1)** — `[CONCLUÍDO]` Estruturação do core, design system da marca e layout responsivo mobile-first.
* **EPIC 2: Catálogo de Serviços & Proposta de Valor (Fase 1)** — `[CONCLUÍDO]` Apresentação dos serviços de Regularização de Imóveis e Projetos de Incêndio/AVCB com segmentação de público.
* **EPIC 3: Canais de Conversão & Ergonomia Mobile (Fase 1)** — `[CONCLUÍDO]` Implementação de botões flutuantes de WhatsApp, links de e-mail e CTAs estratégicos.
* **EPIC 4: PWA & Experiência Offline (Fase 1)** — `[CONCLUÍDO]` Configuração de manifest, service worker, banners de instalação e suporte a múltiplos dispositivos.
* **EPIC 5: Gestão de Leads & Integração Supabase (Fase 2)** — `[BACKLOG]` Backend, banco de dados para contatos e formulário inteligente.
* **EPIC 6: Portfólio Dinâmico & CMS (Fase 2)** — `[BACKLOG]` Cadastro de obras, notícias e publicações pelo time interno.
* **EPIC 7: Portal do Cliente & Laudos (Fase 2)** — `[BACKLOG]` Área restrita para download de laudos, ARTs e acompanhamento de vistorias.

---

## DETALHAMENTO DE ITENS DO BACKLOG (EPICS FASE 1)

### EPIC 1: Fundação & Identidade Canônica

#### US-1.1: Configuração do Design System e Tokens Visuais
* **Prioridade:** Essencial (Alta)
* **Valor de Negócio:** Garante fidelidade imediata à identidade visual estabelecida no site legado (laranja corporativo, grafite, branco, cinza).
* **Descrição:** Como visitante, quero ver uma identidade visual coesa e profissional com as cores e logo oficiais da Habite Engenharia.
* **Critérios de Aceite:**
  * Cores primárias, secundárias e neutras configuradas como CSS Custom Properties.
  * Tipografia técnica moderna (Inter / Poppins / Outfit) importada sem bloqueio de renderização.
  * Logomarca vetorizada/WebP responsiva inserida no header e footer.
* **Dependências:** Nenhuma.

#### US-1.2: Header e Navegação Mobile-First
* **Prioridade:** Essencial (Alta)
* **Valor de Negócio:** Permite navegação rápida e acesso direto às seções principais sem poluição visual.
* **Descrição:** Como usuário mobile, quero um menu ágil e enxuto que não ocupe espaço desnecessário da tela.
* **Critérios de Aceite:**
  * Menu sticky/fixo de topo com recolhimento suave ao rolar a página.
  * Links de ancoragem para: Início, Quem Somos, Público-Alvo, Serviços e Contato.
  * Botão de destaque "Falar com Engenheiro" no header.
* **Dependências:** US-1.1.

---

### EPIC 2: Catálogo de Serviços & Proposta de Valor

#### US-2.1: Seção Hero de Alto Impacto
* **Prioridade:** Essencial (Alta)
* **Valor de Negócio:** Comunicação imediata da proposta de valor em menos de 5 segundos de leitura.
* **Descrição:** Como proprietário ou síndico, quero entender de imediato o que a Habite resolve para saber se estou no lugar certo.
* **Critérios de Aceite:**
  * Título claro: "Soluções inteligentes para regularizar seu imóvel e proteger seu patrimônio".
  * Subtítulo explicativo destacando conformidade legal, alvarás, AVCB e tranquilidade.
  * CTA principal direcionando para o WhatsApp com mensagem pré-configurada.
* **Dependências:** US-1.1.

#### US-2.2: Apresentação Detalhada dos 2 Serviços Centrais
* **Prioridade:** Essencial (Alta)
* **Valor de Negócio:** Conversão de interesse em demanda qualificada para os carros-chefe da empresa.
* **Descrição:** Como cliente potencial, quero conhecer os detalhes dos serviços de "Regularização de Imóveis" e "Projetos de Incêndio (AVCB)".
* **Critérios de Aceite:**
  * Card 1: **Regularização de Imóveis** (Habite-se, desdobros, alvarás, averbações, combate a multas).
  * Card 2: **Prevenção e Combate a Incêndio & AVCB** (Projetos técnicos, memoriais, vistorias do Corpo de Bombeiros, renovações).
  * Cada card deve possuir botão próprio de solicitação de orçamento dedicado ao serviço.
* **Dependências:** US-2.1.

#### US-2.3: Seção "Para Quem é a Habite" (Segmentação por Persona)
* **Prioridade:** Alta
* **Valor de Negócio:** Identificação psicológica imediata com as dores de cada perfil de cliente.
* **Descrição:** Como síndico ou construtor, quero ver que a empresa possui soluções específicas para a minha realidade.
* **Critérios de Aceite:**
  * Segmentos claros: 1) Proprietários Residenciais/Comerciais; 2) Construtoras & Incorporadoras; 3) Condomínios & Síndicos; 4) Escolas, Igrejas e Espaços Públicos.
  * Ícones representativos e textos objetivos extraídos e refinados do site original.
* **Dependências:** US-1.1.

#### US-2.4: Seção Institucional "Quem Somos" & Autoridade Técnica
* **Prioridade:** Média
* **Valor de Negócio:** Reforça a credibilidade técnica e confiança da empresa.
* **Descrição:** Como cliente, quero conhecer a missão, seriedade e experiência da Habite Engenharia.
* **Critérios de Aceite:**
  * Conteúdo institucional da Habite Engenharia com destaque para transparência, segurança jurídica e conformidade técnica.
* **Dependências:** US-1.1.

---

### EPIC 3: Canais de Conversão & Ergonomia Mobile

#### US-3.1: Botão Flutuante e Fixo de WhatsApp
* **Prioridade:** Crítica (Máxima)
* **Valor de Negócio:** Canal primário de geração de faturamento e vendas imediatas.
* **Descrição:** Como usuário em smartphone, quero poder iniciar uma conversa no WhatsApp a qualquer momento da rolagem.
* **Critérios de Aceite:**
  * Botão flutuante na zona de alcance do polegar (*bottom-right*).
  * Link direto formatado: `https://wa.me/5532985132276?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20com%20a%20Habite%20Engenharia`.
  * Efeito de pulso discreto para chamar atenção sem prejudicar a leitura.
* **Dependências:** Nenhuma.

#### US-3.2: Seção de Contato e Disparo de E-mail
* **Prioridade:** Alta
* **Valor de Negócio:** Atendimento ao canal secundário para empresas e formalização de propostas.
* **Descrição:** Como gestor ou construtor, quero enviar um e-mail com plantas ou dados do meu imóvel.
* **Critérios de Aceite:**
  * Exibição clara do e-mail: `gabriel.monteiro@professor.faminas.edu.br`.
  * Botão com ação `mailto:` pré-configurada com assunto e corpo padrão.
  * Informações de horário de atendimento e canal direto.
* **Dependências:** US-1.1.

---

### EPIC 4: PWA & Experiência Offline

#### US-4.1: Web App Manifest & Ícones para Dispositivos
* **Prioridade:** Alta
* **Valor de Negócio:** Permite que clientes e parceiros instalem a Habite Engenharia como aplicativo de acesso direto na tela inicial.
* **Descrição:** Como cliente recorrente ou engenheiro em obra, quero adicionar o ícone da Habite no meu smartphone.
* **Critérios de Aceite:**
  * Arquivo `manifest.webmanifest` válido com `name`, `short_name`, `theme_color`, `background_color` e `display: standalone`.
  * Conjunto de ícones PWA (192x192, 512x512 e maskable).
  * Compatibilidade com iOS (`apple-touch-icon`).
* **Dependências:** US-1.1.

#### US-4.2: Service Worker & Cache Offline Básico
* **Prioridade:** Média-Alta
* **Valor de Negócio:** Carregamento instantâneo no retorno ao site e garantia de leitura dos serviços mesmo em áreas de obra sem sinal de internet.
* **Descrição:** Como usuário sem internet, quero conseguir abrir a página e ver os telefones e serviços da empresa.
* **Critérios de Aceite:**
  * Service worker registrado com estratégia de cache dos assets estáticos fundamentais (HTML, CSS, imagens e ícones).
  * Funcionamento sem falhas de tela branca quando desconectado da rede.
* **Dependências:** US-4.1.

---

## BACKLOG DE FASES FUTURAS (FASE 2 — SUPABASE READY)

* **US-5.1:** Criação do banco de dados no Supabase com tabela `leads` e RLS configurado.
* **US-5.2:** Formulário de captação de leads na Landing Page com envio assíncrono para o Supabase.
* **US-6.1:** Módulo administrativo para cadastro de fotos e descrições do portfólio de obras.
* **US-6.2:** Galeria dinâmica de projetos concluídos alimentada pela API do Supabase.
* **US-7.1:** Autenticação de clientes (Magic Link / Senha) via Supabase Auth.
* **US-7.2:** Área restrita para download seguro de Laudos Periciais, ARTs e certidões emitidas.
