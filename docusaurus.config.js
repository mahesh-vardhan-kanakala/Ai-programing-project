import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Programming Teaching Project',
  tagline: 'Empowering Developers with AI—From Fundamentals to Mastery',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.com', // Update this with your actual URL
  baseUrl: '/', // Adjust if your site is not at the root
  organizationName: 'mahesh-vardhan-kanakala', // Your GitHub username or organization name
  projectName: 'ai-programming-teaching', // Your project name (repository name)
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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Ensure the file exists
          editUrl: 'https://github.com/mahesh-vardhan-kanakala/ai-programming-teaching/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/mahesh-vardhan-kanakala/ai-programming-teaching/tree/main/',
          // Removed authorsMapPath since you're not using authors
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
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
        { to: '/docs/projects', label: 'Projects', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
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
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/mahesh-vardhan-kanakala/',
            },
            {
              label: 'Discord',
              href: 'https://www.discord.com/channels/@me',
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
  },
};

export default config;

