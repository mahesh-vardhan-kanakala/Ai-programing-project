import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Programming Teaching Project',
  tagline: 'Empowering Developers with AI—From Fundamentals to Mastery',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.com',
  baseUrl: '/',
  organizationName: 'your-org',
  projectName: 'ai-programming-teaching',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/your-org/ai-programming-teaching/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/your-org/ai-programming-teaching/tree/main/',
          // Removed authorsMapPath since you are not using authors
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: 'AI Programming Teaching',
        logo: {
          alt: 'AI Programming Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/docs/projects', label: 'Projects', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/mahesh-vardhan-kanakala',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Projects',
                to: '/docs/projects',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://Linkedin.com/mahesh-vardhan-kanakala',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/channels/@me',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/Maheshsvk',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mahesh-vardhan-kanakala',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Programming Teaching Project. Built By Mahesh Vardhan.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
