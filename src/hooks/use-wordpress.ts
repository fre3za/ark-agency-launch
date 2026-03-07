import { useQuery } from "@tanstack/react-query";
import {
  getPosts,
  getPageBySlug,
  getCustomPosts,
  isWordPressConnected,
  type WPPost,
  type WPPage,
} from "@/lib/wordpress";

/**
 * Fetch WordPress posts with react-query caching.
 * Returns empty array when WP is not connected (static fallback mode).
 */
export function useWPPosts(params?: Record<string, string>) {
  return useQuery<WPPost[]>({
    queryKey: ["wp-posts", params],
    queryFn: () => getPosts(params),
    enabled: isWordPressConnected(),
    staleTime: 5 * 60 * 1000, // 5 min cache
  });
}

/**
 * Fetch a WordPress page by slug.
 */
export function useWPPage(slug: string) {
  return useQuery<WPPage | null>({
    queryKey: ["wp-page", slug],
    queryFn: () => getPageBySlug(slug),
    enabled: isWordPressConnected(),
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Fetch custom post type entries from WordPress.
 */
export function useWPCustomPosts(postType: string, params?: Record<string, string>) {
  return useQuery<WPPost[]>({
    queryKey: ["wp-custom", postType, params],
    queryFn: () => getCustomPosts(postType, params),
    enabled: isWordPressConnected(),
    staleTime: 5 * 60 * 1000,
  });
}

export { isWordPressConnected };
