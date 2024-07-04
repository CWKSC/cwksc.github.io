import { themes as prismThemes } from 'prism-react-renderer';

// https://docusaurus.io/docs/markdown-features/code-blocks
// https://prismjs.com/#supported-languages

// Docusaurus default supported Languages
// https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L23

export const prism = {
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
};
