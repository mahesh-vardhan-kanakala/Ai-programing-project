/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Fundamentals',
      items: ['fundamentals/ai-basics', 'fundamentals/tools-overview'],
    },
    {
      type: 'category',
      label: 'Intermediate',
      items: ['intermediate/workflows', 'intermediate/markdown-best-practices'],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: ['advanced/ai-applications', 'advanced/project-management'],
    },
  ],
};

export default sidebars;