import { COMPANY_DATA } from './company';

export interface LegalDocument {
  id: 'terms' | 'privacy';
  title: string;
  badge: string;
  updatedAt: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
}

export const LEGAL_DATA: Record<'terms' | 'privacy', LegalDocument> = {
  terms: {
    id: 'terms',
    title: 'Termos de Uso',
    badge: 'Condições Contratuais & Uso do Site',
    updatedAt: 'Outubro de 2026',
    sections: [
      {
        title: '1. Apresentação e Objeto',
        paragraphs: [
          `Estes Termos de Uso regulam o acesso e a utilização dos serviços apresentados pela ${COMPANY_DATA.name}, empresa especializada em soluções de Engenharia Civil com foco prioritário em Regularização de Imóveis (Habite-se, desdobro, alvarás, averbações de área) e Prevenção e Combate a Incêndio e Pânico (Projetos Técnicos, memoriais e tramitação de AVCB junto ao CBMMG).`,
          'Ao navegar nesta plataforma ou utilizar nossos canais digitais de contato, você concorda expressamente com os termos e diretrizes aqui expostos.'
        ]
      },
      {
        title: '2. Caráter Técnico e Consultas Iniciais',
        paragraphs: [
          'As informações disponibilizadas neste site possuem finalidade exclusivamente institucional, informativa e de orientação preliminar.',
          'Qualquer proposta técnica ou orçamento definitivo para regularização predial ou aprovação de projeto contra incêndio está condicionada à vistoria técnica in loco, análise pormenorizada de documentação cartorária (matrículas, certidões) e emissão de Anotação de Responsabilidade Técnica (ART) junto ao CREA-MG.'
        ]
      },
      {
        title: '3. Responsabilidade Técnica e Emissão de ART',
        paragraphs: [
          'Todos os projetos executivos, memoriais de cálculo, planos de emergência, laudos periciais e vistorias são desenvolvidos sob estrita observância das Normas Técnicas da ABNT, Instruções Técnicas do Corpo de Bombeiros Militar de Minas Gerais (CBMMG) e Leis de Uso e Ocupação do Solo municipais.',
          'Cada serviço contratado é formalmente respaldado por engenheiro civil habilitado, com a correspondente ART recolhida, garantindo validade jurídica e segurança institucional.'
        ]
      },
      {
        title: '4. Conduta do Usuário e Veracidade das Informações',
        paragraphs: [
          'O usuário compromete-se a fornecer informações fidedignas e dados técnicos verdadeiros ao submeter solicitações via WhatsApp ou e-mail institucional.',
          'A Habite Engenharia reserva-se o direito de recusar atendimento caso identifique indícios de fraude, documentação adulterada ou solicitações contrárias à legislação vigente e ao Código de Ética Profissional do Sistema CONFEA/CREA.'
        ]
      },
      {
        title: '5. Propriedade Intelectual',
        paragraphs: [
          `Todo o conteúdo visual, marcas, logotipos, memoriais descritivos, imagens e arquitetura do software são de propriedade exclusiva da ${COMPANY_DATA.name} ou devidamente licenciados.`,
          'É expressamente vedada a reprodução total ou parcial, engenharia reversa ou utilização comercial de qualquer ativo sem prévia autorização formal por escrito.'
        ]
      },
      {
        title: '6. Limitação de Responsabilidade perante Órgãos Públicos',
        paragraphs: [
          'A Habite Engenharia compromete-se com a excelência técnica e cumprimento dos prazos sob sua alçada direta. Contudo, prazos de deferimento, vistorias externas ou emissão de certidões sujeitam-se ao cronograma operacional e administrativo de órgãos públicos (Prefeituras Municipais, Corpo de Bombeiros, Cartórios de Registro de Imóveis).',
          'A empresa não se responsabiliza por intervenções, reformas clandestinas ou alterações estruturais realizadas pelo proprietário ou terceiros sem a anuência e acompanhamento de seu responsável técnico.'
        ]
      },
      {
        title: '7. Legislação e Foro',
        paragraphs: [
          `Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Muriaé / Zona da Mata - MG para dirimir quaisquer dúvidas ou litígios decorrentes deste instrumento, com renúncia expressa a qualquer outro.`
        ]
      }
    ]
  },
  privacy: {
    id: 'privacy',
    title: 'Política de Privacidade',
    badge: 'Conformidade LGPD (Lei nº 13.709/2018)',
    updatedAt: 'Outubro de 2026',
    sections: [
      {
        title: '1. Compromisso com a Privacidade',
        paragraphs: [
          `A ${COMPANY_DATA.name} reconhece a importância da privacidade e do sigilo dos dados de seus clientes, parceiros e visitantes. Esta política descreve de forma clara e transparente como tratamos e protegemos seus dados pessoais em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).`
        ]
      },
      {
        title: '2. Dados Pessoais que Coletamos',
        paragraphs: [
          'Coletamos exclusivamente os dados necessários para atender às solicitações do titular e viabilizar a prestação de serviços de engenharia:',
          '• Dados de Identificação e Contato: Nome completo, telefone celular / WhatsApp e endereço de e-mail.',
          '• Dados do Imóvel / Obra: Endereço da edificação, área aproximada, destinação de uso e informações de matrícula (fornecidos voluntariamente para elaboração de propostas).',
          '• Dados de Navegação: Informações técnicas estritamente necessárias para a performance do Progressive Web App (PWA) e cache offline, armazenadas localmente no seu dispositivo.'
        ]
      },
      {
        title: '3. Finalidades do Tratamento de Dados',
        paragraphs: [
          'Os dados coletados são utilizados para os seguintes propósitos legítimos:',
          '• Retorno ágil de solicitações de orçamento e esclarecimento de dúvidas técnicas.',
          '• Elaboração de propostas comerciais personalizadas para regularização de imóveis ou projetos de AVCB.',
          '• Cumprimento de obrigações legais e regulatórias (emissão de ART junto ao CREA-MG, protocolo em órgãos públicos municipais e estaduais).',
          '• Comunicação direta com o cliente sobre o andamento de vistorias e aprovações.'
        ]
      },
      {
        title: '4. Compartilhamento Restrito de Dados',
        paragraphs: [
          'A Habite Engenharia NÃO comercializa, aluga ou compartilha seus dados pessoais com terceiros para fins publicitários.',
          'O compartilhamento ocorre unicamente quando estritamente indispensável para o cumprimento de obrigações legais perante órgãos fiscalizadores (tais como CREA-MG, Corpo de Bombeiros Militar e Secretarias de Obras e Urbanismo Municipais).'
        ]
      },
      {
        title: '5. Segurança da Informação e Armazenamento',
        paragraphs: [
          'Adotamos salvaguardas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, perdas, adulterações ou divulgação indevida.',
          'Os dados técnicos de projetos e memoriais são mantidos pelo período prescricional exigido pela legislação civil e pelas normas do Sistema CONFEA/CREA.'
        ]
      },
      {
        title: '6. Direitos do Titular (Art. 18 da LGPD)',
        paragraphs: [
          'O titular de dados pessoais possui os seguintes direitos garantidos por lei:',
          '• Confirmação da existência de tratamento e acesso aos dados.',
          '• Correção de dados incompletos, inexatos ou desatualizados.',
          '• Eliminação dos dados pessoais tratados mediante consentimento, ressalvadas as hipóteses de guarda obrigatória por lei ou regulamento.',
          '• Revogação do consentimento a qualquer momento de forma simples e gratuita.'
        ]
      },
      {
        title: '7. Canal de Atendimento do Encarregado (DPO)',
        paragraphs: [
          `Para exercer seus direitos como titular de dados ou esclarecer dúvidas sobre nossas práticas de privacidade, entre em contato diretamente com o responsável pelo tratamento de dados através do e-mail: ${COMPANY_DATA.contact.email} ou pelo canal de atendimento: ${COMPANY_DATA.contact.phoneDisplay}.`
        ]
      }
    ]
  }
};
