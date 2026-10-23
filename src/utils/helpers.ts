/**
 * Funções auxiliares utilitárias
 */

/**
 * Gera URL segura e padronizada para deep link do WhatsApp
 */
export function buildWhatsAppUrl(phoneRaw: string, message: string): string {
  const cleanPhone = phoneRaw.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Gera link de email formatado
 */
export function buildMailtoUrl(email: string, subject: string, body?: string): string {
  const encodedSubject = encodeURIComponent(subject.trim());
  const encodedBody = body ? `&body=${encodeURIComponent(body.trim())}` : '';
  return `mailto:${email}?subject=${encodedSubject}${encodedBody}`;
}

/**
 * Retorna a URL canônica do asset a partir da raiz
 */
export function getAssetUrl(assetPath: string): string {
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `/${cleanPath}`;
}

