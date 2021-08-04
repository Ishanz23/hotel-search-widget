import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'hotel-search-widget',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  bundles: [{ components: ['ibe-hotel-search', 'ibe-hotel-search-view'] }],
};
