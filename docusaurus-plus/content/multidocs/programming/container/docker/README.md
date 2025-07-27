# Docker

## Troubleshooting

### `archive/tar: unknown file mode ?rwxr-xr-x`

```
archive/tar: unknown file mode ?rwxr-xr-x
```

In my situation, it is because docker build context is included `node_modules`

Use `.dockerignore` to exclude it

