export const GTM_ID: string | undefined = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const pageview = (url: string): void => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};
