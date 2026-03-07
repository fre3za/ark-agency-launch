/**
 * WordPress REST API integration layer.
 * Set VITE_WP_API_URL in your .env to point at your WordPress site.
 * Example: VITE_WP_API_URL=https://yourdomain.com/wp-json/wp/v2
 */

const WP_API_URL = import.meta.env.VITE_WP_API_URL || "";

export interface WPPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  featured_media: number;
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

export interface WPPage {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  acf?: Record<string, unknown>; // Advanced Custom Fields support
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, { source_url: string; width: number; height: number }>;
  };
}

async function wpFetch<T>(endpoint: string, params?: Record<string, string>): Promise<T | null> {
  if (!WP_API_URL) return null;

  const url = new URL(`${WP_API_URL}/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }

  try {
    const res = await fetch(url.toString(), {
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(`WP API ${res.status}`);
    return res.json();
  } catch (err) {
    console.warn("[WordPress API]", err);
    return null;
  }
}

/** Fetch posts (blog, testimonials, case studies via custom post types) */
export async function getPosts(
  params?: Record<string, string>
): Promise<WPPost[]> {
  return (await wpFetch<WPPost[]>("posts", { _embed: "true", ...params })) || [];
}

/** Fetch a single page by slug */
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await wpFetch<WPPage[]>("pages", { slug, _embed: "true" });
  return pages?.[0] ?? null;
}

/** Fetch custom post type entries (e.g. testimonials, services) */
export async function getCustomPosts(
  postType: string,
  params?: Record<string, string>
): Promise<WPPost[]> {
  return (await wpFetch<WPPost[]>(postType, { _embed: "true", ...params })) || [];
}

/** Fetch media by ID */
export async function getMedia(id: number): Promise<WPMedia | null> {
  return wpFetch<WPMedia>(`media/${id}`);
}

/** Fetch site info */
export async function getSiteInfo(): Promise<Record<string, unknown> | null> {
  if (!WP_API_URL) return null;
  const baseUrl = WP_API_URL.replace("/wp/v2", "");
  try {
    const res = await fetch(baseUrl);
    return res.ok ? res.json() : null;
  } catch {
    return null;
  }
}

/** Check if WordPress is connected */
export function isWordPressConnected(): boolean {
  return !!WP_API_URL;
}
