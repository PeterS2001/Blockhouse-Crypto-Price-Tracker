/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['installation', 'project-structure'],
    },
    {
      type: 'category',
      label: 'Technical Details',
      items: ['api-integration', 'state-management'],
    },
    'challenges',
  ],
};

module.exports = sidebars;
