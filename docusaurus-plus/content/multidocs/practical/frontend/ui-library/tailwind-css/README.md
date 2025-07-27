# Tailwind CSS

[Install Tailwind CSS with Next.js - Tailwind CSS](https://tailwindcss.com/)

## Styling based on parent state

[Styling based on parent state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state)


```html
<div  class="group">
    ...
    <div class="group-hover:stroke-white"></div>
    ...
</a>
```

Naming group: `group/{name}`

Arbitrary groups: `group-*`, e.g. `group-[.is-published]`
