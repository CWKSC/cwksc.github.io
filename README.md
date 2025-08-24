# docusaurus-plus

```bash
pnpm create docusaurus
```

```bash
pnpm add `
    @docusaurus/faster `
    @docusaurus/plugin-content-docs@$latest `
    @docusaurus/plugin-content-blog@$latest `
    remark-math@6 rehype-katex@7 `
    @easyops-cn/docusaurus-search-local
```

## Add Giscus

https://ouch1978.github.io/docs/docusaurus/customization/add-giscus-to-docusaurus

https://docusaurus.io/docs/swizzling

```bash
pnpm swizzle @docusaurus/theme-classic DocItem/Footer --wrap --typescript
```

https://github.com/giscus/giscus-component

```bash
pnpm add @docusaurus/theme-common
pnpm add @giscus/react
```
