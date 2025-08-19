import fs from 'fs';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Math support
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Constants
const githubUsername = "CWKSC"
const repoName = "cwksc.github.io"
const gTagTrackingId = "G-6S086LWKZJ"

// Path to Label
// For navgation bar and html title
const pathToLabel: Record<string, string> = {
    'blog': 'Blog 博客',
    'tech-blog': 'Tech Blog 技術博客',
    'note': 'Note 筆記',
    'programming': 'Prog 編程',
    'node-js': 'Node.js',
    'artificial-intelligence': 'AI 人工智能',
    'algorithm': 'Algo 算法',
    'practical': 'Practical 實際',
    // 'project': 'Project 項目',
    'interest': 'Interest 興趣',
};
const navItems = Object.entries(pathToLabel).map(([path, label]) => ({
    label,
    to: `/${path}/`,
    position: 'left' as const,
}));

// Support github.io and sub repo deployment
let baseUrl = `/${repoName}/`
if (repoName === `${githubUsername}.github.io`.toLowerCase()) {
    baseUrl = "/"
}

// Multi Blog
const multiblogNames = fs.readdirSync("./content/multiblog", { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);
// console.log(multiblogNames);

const multiblogPlugin = multiblogNames.map((dirname, index) => {
    return [
        '@docusaurus/plugin-content-blog',
        {
            id: index === 0 ? 'default' : dirname,
            path: `./content/multiblog/${dirname}`,
            routeBasePath: `${dirname}`,
            blogTitle: pathToLabel[dirname] || dirname,
            remarkPlugins: [remarkMath],
            rehypePlugins: [[rehypeKatex, { strict: false }]],
            editUrl: ({ blogPath }) => {
                return `https://github.com/${githubUsername}/${repoName}/edit/main/docusaurus-plus/content/multiblog/${dirname}/${blogPath}`;
            }
        },
    ]
});

// Multi Docs
const multidocsNames = fs.readdirSync("./content/multidocs", { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);
// console.log(multidocsNames);

const multidocsPlugin = multidocsNames.map((dirname, index) => {
    return [
        '@docusaurus/plugin-content-docs',
        {
            id: index === 0 ? 'default' : dirname,
            path: `./content/multidocs/${dirname}`,
            routeBasePath: `${dirname}`,
            sidebarPath: './sidebars.ts',
            remarkPlugins: [remarkMath],
            rehypePlugins: [[rehypeKatex, { strict: false }]],
            editUrl: ({ docPath }) => {
                return `https://github.com/${githubUsername}/${repoName}/edit/main/docusaurus-plus/content/multidocs/${dirname}/${docPath}`;
            },
        },
    ]
});

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: `${githubUsername}`,
    // tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
        experimental_faster: true,
    },

    // Set the production url of your site here
    url: `https://${githubUsername}.github.io`,
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: baseUrl,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: githubUsername, // Usually your GitHub org/user name.
    projectName: repoName, // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: false,
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: undefined, // 'img/docusaurus-social-card.jpg',
        navbar: {
            title: `${githubUsername}`,
            logo: {
                alt: 'Logo',
                src: 'img/logo.svg',
            },
            items: navItems,
        },
        footer: {
            style: 'dark',
            links: [

            ],
            copyright: `Copyright © ${new Date().getFullYear()} ${githubUsername}. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.vsDark,
            additionalLanguages: [
                'bash',
                'csharp',
                'css',
                'dart',
                'diff',
                'java',
                'javascript',
                'json',
                'llvm',
                'powershell',
                'typescript',
                'typescript',
                'zig',
            ],
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        }
    } satisfies Preset.ThemeConfig,

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                docsDir: [],
                blogDir: [],
                docsRouteBasePath: multidocsNames,
                blogRouteBasePath: multiblogNames,
                language: ["en", "zh"],
            }),
        ],
    ],

    plugins: [
        ...multiblogPlugin,
        ...multidocsPlugin,
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: gTagTrackingId,
                anonymizeIP: false,
            },
        ],
    ]
};

export default config;
