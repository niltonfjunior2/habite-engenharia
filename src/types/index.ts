/**
 * Contratos de Dados & Tipagem — Habite Engenharia
 */

export interface CompanyContact {
  phoneDisplay: string;
  phoneRaw: string;
  whatsappDisplay: string;
  whatsappRaw: string;
  email: string;
  whatsappDefaultMessage: string;
}

export interface CompanyProfile {
  name: string;
  tradeName: string;
  headline: string;
  subheadline: string;
  description: string;
  contact: CompanyContact;
  serviceAreas: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imagePath: string;
  features: string[];
  ctaLabel: string;
  whatsappMessageCustom: string;
}

export interface TargetAudienceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LeadSubmission {
  name: string;
  phone: string;
  email?: string;
  serviceInterest: string;
  message?: string;
  createdAt: string;
}
