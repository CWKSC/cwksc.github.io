# shadcn/ui

https://ui.shadcn.com/

[為什麼 Shadcn UI 是 2023 年前端最熱門的開源專案？ | by Leo Chiu | 手寫筆記](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/why-shadcn-ui-is-so-popular-in-2023-0f95e66f3ddc)

```bash
npx create-next-app@latest
cd <project-name>
npx shadcn-ui@latest init
```

## Customize installation directory of ui components

https://ui.shadcn.com/docs/components-json

For example:

```json
{
  "aliases": {
     "ui": "@/components/shadcn-ui"
  }
}
```

## Troubleshooting

### Can't resolve '@/components/icons'

```typescript
Module not found: Can't resolve '@/components/icons'

>  7 | import { Icons } from "@/components/icons"
     | ^
```

See https://github.com/shadcn-ui/ui/issues/1006

Copy https://github.com/shadcn-ui/ui/blob/main/apps/www/components/icons.tsx


