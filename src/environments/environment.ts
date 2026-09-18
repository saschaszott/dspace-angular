// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.production.ts`.
// `ng test --configuration test` replaces `environment.ts` with `environment.test.ts`.
// The list of file replacements can be found in `angular.json`.

import { BuildConfig } from '@dspace/config/build-config.interface';

export const environment: Partial<BuildConfig> = {
  production: false,

  // Angular SSR (Server Side Rendering) settings
  ssr: {
    enabled: false,
    enablePerformanceProfiler: false,
    inlineCriticalCss: false,
    transferState: true,
    replaceRestUrl: false,
    excludePathPatterns: [
      {
        pattern: '^/communities/[a-f0-9-]{36}/browse(/.*)?',
        flag: 'i',
      },
      {
        pattern: '^/collections/[a-f0-9-]{36}/browse(/.*)?',
        flag: 'i',
      },
      {
        pattern: '^/communities/[a-f0-9-]{36}/search(/.*)?',
        flag: 'i',
      },
      {
        pattern: '^/collections/[a-f0-9-]{36}/search(/.*)?',
        flag: 'i',
      },
      {
        pattern: '^/communities/[a-f0-9-]{36}/subcoms-cols(/.*)?',
        flag: 'i',
      },
      { pattern: '^/browse(/.*)?' },
      { pattern: '^/search(/.*)?' },
      { pattern: '^/explore(/.*)?' },
      { pattern: '^/community-list(/.*)?' },
      { pattern: '^/statistics(/.*)?' },
      { pattern: '^/admin(/.*)?' },
      { pattern: '^/processes(/.*)?' },
      { pattern: '^/notifications(/.*)?' },
      { pattern: '^/access-control(/.*)?' },
      { pattern: '^/health(/.*)?' },
      { pattern: '^/mydspace(/.*)?' },
      { pattern: '^/profile(/.*)?' },
      { pattern: '^/subscriptions(/.*)?' },
      { pattern: '^/logout(/.*)?' },
      { pattern: '^/submit(/.*)?' },
      { pattern: '^/import-external(/.*)?' },
      { pattern: '^/auditlogs(/.*)?' },
      { pattern: '^/suggestions(/.*)?' },
      { pattern: '^/edit-items/[a-f0-9-]{36}(/.*)?', flag: 'i' },
      { pattern: '^/collections/create(/.*)?', flag: 'i' },
      { pattern: '^/collections/[a-f0-9-]{36}(/.*)?', flag: 'i' },
      { pattern: '^/collections/[a-f0-9-]{36}/itemtemplate(/.*)?', flag: 'i' },
      { pattern: '^/collections/[a-f0-9-]{36}/bulk-import(/.*)?', flag: 'i' },
      { pattern: '^/communities/create(/.*)?', flag: 'i' },
      { pattern: '^/communities/[a-f0-9-]{36}/delete(/.*)?', flag: 'i' },
      { pattern: '^/(items|entities/[^/]+)/[.a-zA-Z0-9_-]+/bitstreams/new(/.*)?', flag: 'i' },
      { pattern: '^/(items|entities/[^/]+)/[.a-zA-Z0-9_-]+/orcid(/.*)?', flag: 'i' },
      { pattern: '^/bitstreams?/[a-f0-9-]{36}/edit(/.*)?', flag: 'i' },
      { pattern: '^/bitstreams?/[a-f0-9-]{36}/replace(/.*)?', flag: 'i' },
      { pattern: '^/workflowitems/[a-f0-9-]{36}(/.*)?', flag: 'i' },
      { pattern: '^/workspaceitems/[a-f0-9-]{36}/(edit|view|delete)(/.*)?', flag: 'i' },
    ],
    enableSearchComponent: false,
    enableBrowseComponent: false,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
