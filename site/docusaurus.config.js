// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PrintNanny',
  tagline: '👀 Stop Babysitting your 3D Printer.',
  url: 'https://docs.printnanny.ai',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bitsy-ai', // Usually your GitHub org/user name.
  projectName: 'printnanny-os', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/bitsy-ai/printnanny-os/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/bitsy-ai/printnanny-os/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // style: 'primary',
        // title: 'PrintNanny',
        logo: {
          href: 'https://printnanny.ai',
          height: '5rem',
          alt: 'PrintNanny Logo',
          srcDark: 'img/logo-dark.svg',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/quick-start',
            position: 'left',
            label: 'Quick Start',
          },
          { label: 'Download', docId: 'quick-start/create-printnanny-os-image', type: 'doc' },
          {
            label: 'Demo',
            position: 'left',
            href: 'https://printnanny.ai'
          },
          {
            label: 'Log In',
            position: 'left',
            href: 'https://printnanny.ai/dashboard'
          },
          { label: 'Join Waitlist', position: 'left', href: 'https://printnanny.ai/surveys/remote-access' },
          { label: 'Become a Founding Member', position: 'left', href: 'https://printnanny.ai/subscriptions/checkout' },

          { label: 'Discord', position: 'right', href: 'https://discord.gg/sf23bk2hPr' },
          {
            label: 'Issues & Roadmap',
            position: 'right',
            href: 'https://github.com/bitsy-ai/printnanny-os/issues'
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: 'https://github.com/bitsy-ai/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/category/quick-start',
              },
              {
                label: 'Update PrintNanny OS',
                to: '/docs/update-printnanny-os',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/bitsy-ai/printnanny-os',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/sf23bk2hPr',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/grepLeigh',
              },
            ],
          },
          {
            title: 'PrintNanny Cloud',
            items: [
              {
                label: 'Log in',
                href: 'https://printnanny.ai/dashboard',
              },
              {
                label: 'Join the Waitlist',
                href: 'https://printnanny.ai/surveys/remote-access'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bitsy AI Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
