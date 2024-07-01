export const getImageUrl = (path: URL) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
