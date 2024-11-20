import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a62'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '3c3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a71'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd58'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '72d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '192'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '207'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f96'),
    exact: true
  },
  {
    path: '/blog/ai-best-practices',
    component: ComponentCreator('/blog/ai-best-practices', 'fa4'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '555'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'd97'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai', '8ce'),
    exact: true
  },
  {
    path: '/blog/tags/best-practices',
    component: ComponentCreator('/blog/tags/best-practices', 'cfe'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '823'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '022'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '269'),
            routes: [
              {
                path: '/docs/advanced/ai-applications',
                component: ComponentCreator('/docs/advanced/ai-applications', '768'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/advanced/project-management',
                component: ComponentCreator('/docs/advanced/project-management', 'c19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/ai-basics',
                component: ComponentCreator('/docs/fundamentals/ai-basics', 'cd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/tools-overview',
                component: ComponentCreator('/docs/fundamentals/tools-overview', '3eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intermediate/markdown-best-practices',
                component: ComponentCreator('/docs/intermediate/markdown-best-practices', 'fbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intermediate/workflows',
                component: ComponentCreator('/docs/intermediate/workflows', 'ed7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects',
                component: ComponentCreator('/docs/projects', 'e3a'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '230'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
