// Strips HTML tags from rich-text content to get a plain-text preview/snippet.
// Use this anywhere you're showing a short summary (table rows, cards) where
// truncate/line-clamp is applied — rendering raw HTML there breaks tags mid-way.
export const stripHtml = (html) => {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};