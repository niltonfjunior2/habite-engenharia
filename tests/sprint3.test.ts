import { describe, it, expect } from 'vitest';
import { renderPWAInstallBanner } from '../src/components/PWAInstallBanner/PWAInstallBanner';
import fs from 'fs';
import path from 'path';

describe('Sprint 3 — PWA Engine & Performance Tests', () => {
  it('PWAInstallBanner deve renderizar os botões e texto com acessibilidade', () => {
    const html = renderPWAInstallBanner();
    expect(html).toContain('id="pwa-install-banner"');
    expect(html).toContain('id="pwa-install-btn"');
    expect(html).toContain('id="pwa-dismiss-btn"');
    expect(html).toContain('Instalar Habite Engenharia');
  });

  it('manifest.webmanifest deve conter campos obrigatórios para PWA instalável', () => {
    const manifestPath = path.resolve(__dirname, '../public/manifest.webmanifest');
    const content = fs.readFileSync(manifestPath, 'utf-8');
    const manifest = JSON.parse(content);

    expect(manifest.name).toBe('Habite Engenharia');
    expect(manifest.short_name).toBe('Habite Eng');
    expect(manifest.start_url).toBe('/');
    expect(manifest.display).toBe('standalone');
    expect(manifest.theme_color).toBe('#f26522');
    expect(Array.isArray(manifest.icons)).toBe(true);
    expect(manifest.icons.length).toBeGreaterThanOrEqual(3);
  });

  it('sw.js deve conter a lista de precache estático e versão do cache', () => {
    const swPath = path.resolve(__dirname, '../public/sw.js');
    const content = fs.readFileSync(swPath, 'utf-8');

    expect(content).toContain('habite-pwa-v1');
    expect(content).toContain('/manifest.webmanifest');
    expect(content).toContain('/assets/logo-para-site.webp');
    expect(content).toContain('install');
    expect(content).toContain('activate');
    expect(content).toContain('fetch');
  });

  it('index.html deve conter links para manifest, favicon e meta tags PWA', () => {
    const indexPath = path.resolve(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf-8');

    expect(content).toContain('rel="manifest" href="/manifest.webmanifest"');
    expect(content).toContain('name="theme-color" content="#f26522"');
    expect(content).toContain('name="apple-mobile-web-app-capable" content="yes"');
    expect(content).toContain('rel="apple-touch-icon" href="/icons/apple-touch-icon.png"');
  });
});
