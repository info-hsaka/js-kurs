import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "HSAKA JavaScript Kurs",
    tagline: "Click here for intro",
    favicon: "img/js-logo.svg",

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: "https://js.oc.is",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "info-hsaka", // Usually your GitHub org/user name.
    projectName: "js-kurs", // Usually your repo name.

    onBrokenLinks: "throw",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    markdown:{
      hooks:{ 
        onBrokenMarkdownLinks: "warn",
      }
    },
    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/info-hsaka/js-kurs",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
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
            label: "Kursübersicht",
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
    } satisfies Preset.ThemeConfig,
}

export default config
