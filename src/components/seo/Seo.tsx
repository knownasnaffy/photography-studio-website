import { useEffect } from 'react';

type OpenGraphType = 'website' | 'article';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: OpenGraphType;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const SITE_NAME = 'Lucky Photography';
const SITE_URL = 'https://www.luckyphotography.com';
const DEFAULT_IMAGE = '/logo-dark.png';

function toAbsoluteUrl(value: string): string {
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertStructuredData(
  data: Record<string, unknown> | Array<Record<string, unknown>> | undefined,
) {
  const scriptId = 'seo-structured-data';
  let element = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!data) {
    if (element) {
      element.remove();
    }
    return;
  }

  if (!element) {
    element = document.createElement('script');
    element.id = scriptId;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  keywords = [],
  type = 'website',
  noIndex = false,
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const normalizedPath = path === '/' ? '' : path;
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const imageUrl = toAbsoluteUrl(image);
    const robotsValue = noIndex ? 'noindex, nofollow' : 'index, follow';

    document.title = fullTitle;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', robotsValue);

    if (keywords.length > 0) {
      upsertMeta('name', 'keywords', keywords.join(', '));
    }

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:site_name', SITE_NAME);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);

    upsertCanonical(canonicalUrl);
    upsertStructuredData(structuredData);
  }, [description, image, keywords, noIndex, path, structuredData, title, type]);

  return null;
}
