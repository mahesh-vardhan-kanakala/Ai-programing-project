import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ddf'),
    exact: true
  },
  {
    path: '/blog/ai-best-practices',
    component: ComponentCreator('/blog/ai-best-practices', 'e4d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/soma-mahesh-vardhan-kanakala',
    component: ComponentCreator('/blog/authors/soma-mahesh-vardhan-kanakala', 'a99'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai', '7ac'),
    exact: true
  },
  {
    path: '/blog/tags/best-practices',
    component: ComponentCreator('/blog/tags/best-practices', 'a33'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f9b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '0b1'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '91f'),
            routes: [
              {
                path: '/docs/advanced/ai-applications',
                component: ComponentCreator('/docs/advanced/ai-applications', '7d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/advanced/project-management',
                component: ComponentCreator('/docs/advanced/project-management', 'b06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/ai-basics',
                component: ComponentCreator('/docs/fundamentals/ai-basics', 'e60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/tools-overview',
                component: ComponentCreator('/docs/fundamentals/tools-overview', '820'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intermediate/markdown-best-practices',
                component: ComponentCreator('/docs/intermediate/markdown-best-practices', '8ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intermediate/workflows',
                component: ComponentCreator('/docs/intermediate/workflows', 'bf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects',
                component: ComponentCreator('/docs/projects', '3d0'),
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
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
