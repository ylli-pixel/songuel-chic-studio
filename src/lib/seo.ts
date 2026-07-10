// Central place to swap the production URL when the custom domain goes live.
export const BASE_URL = "https://hairbysonguel.ch";

export const OG_IMAGE_URL =
  "https://hairbysonguel.ch/__l5e/assets-v1/79c45a01-2647-4a34-bb60-ff7803ddd457/og-image.jpg";

export const url = (path: string) => `${BASE_URL}${path}`;
