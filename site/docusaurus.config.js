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
  scripts: [
    {
      src: 'https://code.tidio.co/au2l1bikey0opowkikwnoktwxgoslxkt.js',
      async: true,
    },
  ],
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_if1FbWP98XhFJMRt9ISTp1NvOe9MExeTNG9pH05c50P", // client key
        appUrl: "https://app.posthog.com", // optional
        enableInDevelopment: false, // optional
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
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
        gtag: {
          trackingID: 'G-QKHED5DPGV',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'v0_6_2',
        content:
          '<a href="https://printnanny.ai/docs/release-history/0.6.x-feldspar-langdale/">PrintNanny OS v0.6.3 is now available!</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        // style: 'primary',
        // title: 'PrintNanny',
        logo: {
          href: 'https://printnanny.ai',
          height: '5rem',
          alt: 'PrintNanny Logo',
          srcDark: 'https://cdn.printnanny.ai/www/logo/logo-dark.svg',
          src: 'https://cdn.printnanny.ai/www/logo/logo.svg',
        },
        items: [
          {
            to: '/docs/category/quick-start',
            position: 'left',
            label: 'Quick Start',
          },
          {
            to: '/blog',
            position: 'left',
            label: 'Blog',
          },
          { label: 'Join Launch Waitlist', position: 'left', href: 'https://printnanny.ai' },
          { label: 'Skip Waitlist, Get Early Access', position: 'left', href: 'https://printnanny.ai/shop/founding-membership' },

          { label: 'Discord', position: 'right', href: 'https://discord.gg/sf23bk2hPr' },
          {
            label: 'Issues',
            position: 'right',
            href: 'https://github.com/bitsy-ai/printnanny-os/issues'
          },
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
                to: '/docs/category/quick-start',
              },
              {
                label: 'Update PrintNanny OS',
                to: '/docs/update-printnanny-os',
              },
            ],
          },
          {
            title: 'News',
            items: [
              {
                label: 'OpenSSL Security Update',
                to: 'https://docs.printnanny.ai/blog/patch-openssl-security-vulnerability-across-hundreds-of-raspberry-pis/',
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
                label: 'Join the Waitlist',
                href: 'https://printnanny.ai'
              },
              {
                label: 'Get Early Access Now',
                href: 'https://printnanny.ai/shop/founding-membership'
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
      algolia: {
        // The application ID provided by Algolia
        appId: 'W87N9730TN',

        // Public API key: it is safe to commit it
        apiKey: 'e3db53361035c51dc47426044835002f',

        indexName: 'printnanny',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),
};

module.exports = config;
