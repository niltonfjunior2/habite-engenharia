import { ServiceItem, TargetAudienceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'regularizacao-imoveis',
    title: 'Regularização de Imóveis',
    shortDescription: 'Soluções completas para transformar seu imóvel irregular em um patrimônio 100% legal e valorizado.',
    fullDescription:
      'Assessoria técnica e jurídica em engenharia para obtenção de Habite-se, alvarás, desdobros, retificação de áreas e averbações, evitando multas e embargos.',
    iconName: 'document-check',
    imagePath: '/assets/servicos-regularizacao2.webp',
    features: [
      'Obtenção de Habite-se e Certidão de Baixa',
      'Averbação de construção e reformas em cartório',
      'Defesa contra multas e notificações municipais',
      'Desdobro, desmembramento e unificação de lotes',
    ],
    ctaLabel: 'Quero Regularizar Meu Imóvel',
    whatsappMessageCustom:
      'Olá! Gostaria de uma consultoria para regularização do meu imóvel com a Habite Engenharia.',
  },
  {
    id: 'combate-incendio-avcb',
    title: 'Projetos de Prevenção e Combate a Incêndio (AVCB)',
    shortDescription: 'Adequação rigorosa às normas do Corpo de Bombeiros para garantir segurança e liberação do seu alvará.',
    fullDescription:
      'Elaboração de Projetos de Segurança Contra Incêndio e Pânico (PSIP), instalação e dimensionamento de equipamentos, memoriais técnicos e acompanhamento de vistorias para obtenção e renovação do AVCB/CLCB.',
    iconName: 'fire-shield',
    imagePath: '/assets/servico-combate-e-prevencao-de-incendio.webp',
    features: [
      'Elaboração e aprovação de Projetos de Incêndio (PSIP)',
      'Obtenção e renovação de AVCB e CLCB junto aos Bombeiros',
      'Dimensionamento de hidrantes, extintores e saídas de emergência',
      'Inspeções técnicas prediais e laudos de conformidade',
    ],
    ctaLabel: 'Solicitar Projeto de Incêndio / AVCB',
    whatsappMessageCustom:
      'Olá! Preciso de assessoria para Projeto de Combate a Incêndio / AVCB com a Habite Engenharia.',
  },
];

export const TARGET_AUDIENCE_DATA: TargetAudienceItem[] = [
  {
    id: 'proprietarios',
    title: 'Proprietários Residenciais e Comerciais',
    description: 'Quem possui imóvel residencial, comercial ou industrial e precisa regularizá-lo, evitando multas e insegurança jurídica.',
    iconName: 'home',
  },
  {
    id: 'construtoras',
    title: 'Empresas de Construção Civil',
    description: 'Construtoras que precisam de projetos aprovados e obtenção de AVCB com agilidade para liberar o uso de seus empreendimentos.',
    iconName: 'building',
  },
  {
    id: 'condominios',
    title: 'Condomínios & Síndicos',
    description: 'Gestores que necessitam de conformidade técnica rigorosa, laudos periciais e renovação de licenças de segurança contra incêndio.',
    iconName: 'shield',
  },
  {
    id: 'espacos-publicos',
    title: 'Escolas, Hospitais e Igrejas',
    description: 'Locais com circulação pública que precisam estar plenamente licenciados e seguros para receber o público.',
    iconName: 'users',
  },
];
