// @ts-check
import { themes as prismThemes } from "prism-react-renderer"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HSAKA JavaScript Kurs",
  tagline: "Click here for intro",
  url: "https://js.oc.is",
  baseUrl: "/",
  onBrokenLinks: "throw",
  trailingSlash: true,
  onBrokenMarkdownLinks: "warn",
  favicon: "img/js-logo.svg",
  organizationName: "info-hsaka", // Usually your GitHub org/user name.
  projectName: "js-kurs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/info-hsaka/js-kurs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Startseite",
        logo: {
          alt: "JS Logo",
          src: "img/js-logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro/welcome",
            position: "left",
            label: "Intro",
          },
          {
            type: "doc",
            docId: "js/intro/welcome",
            position: "left",
            label: "Javascript-Kurs",
          },
                    {
            type: "doc",
            docId: "canvas/intro",
            position: "left",
            label: "Canvas-Kurs",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} HSAKA JS-Kurs`,
      },
      prism: {
        theme: prismThemes.okaidia,
      },
    }),
}

module.exports = config
