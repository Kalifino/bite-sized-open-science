/**
 * ========================================================
 * FILE: sidebars.js
 * PURPOSE:
 *   Defines the sidebar structure for the Bite Sized Tutorials documentation.
 *   Organizes content into categories and subcategories for easy navigation.
 *
 * STRUCTURE:
 *   1. Intro & Setup — guides on GitHub and VSCode basics
 *   2. Open Science Process — introduction and workflow overview
 *   3. Mini-Project Walkthrough — practical hands-on tutorial
 *
 * NOTES:
 *   - Uses Docusaurus SidebarsConfig type for type checking.
 *   - Each category can have a link to a main doc and nested items.
 * ========================================================
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialsSidebar: [
    {
      type: 'category',
      label: 'Intro & Setup',
      link: {
        type: 'doc',
        id: 'intro-setup/workflow-setup-overview',
      },
      items: [
        {
          type: 'category',
          label: 'GitHub',
          items: [
            'intro-setup/github/creating-an-account',
            'intro-setup/github/intro-to-github-repos',
            'intro-setup/github/github-branches',
            'intro-setup/github/commits-and-pull-requests',
            'intro-setup/github/github-issues',
            'intro-setup/github/coding-in-github',
          ],
        },
        {
          type: 'category',
          label: 'VSCode',
          items: [
            'intro-setup/vscode/installing-vscode-and-python',
            'intro-setup/vscode/installing-git',
            'intro-setup/vscode/virtual-environment-basics',
            'intro-setup/vscode/git-integration-in-vscode',
            'intro-setup/vscode/github-copilot-basics',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Open Science Process',
      link: {
        type: 'doc',
        id: 'open-science-process/index',
      },
      items: ['open-science-process/index'],
    },
    {
      type: 'category',
      label: 'Mini-Project Walkthrough',
      link: {
        type: 'doc',
        id: 'mini-project/index',
      },
      items: ['mini-project/index'],
    },
  ],
};

module.exports = sidebars;
