declare interface PageContext {
  Page: (pageProps: {}) => React.ReactElement;
  pageProps?: {};
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
}
