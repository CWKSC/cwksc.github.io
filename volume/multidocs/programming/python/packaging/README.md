# Packaging

Use `pyproject.toml`

[The Packaging Flow - Python Packaging User Guide](https://packaging.python.org/en/latest/flow/)

[Packaging Python Projects - Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/)


## Compare build tools

[Python Packaging Tools — Python Packaging Guide](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-build-tools.html)

## hatch

https://setuptools.pypa.io/en/latest/userguide/entry_point.html#console-scripts

```toml
[project.scripts]
cli-name = "pkg.subpkg:func"
```

## setuptools

This is old, but still many project using it

[Package Discovery and Namespace Packages - setuptools 70.2.0.post20240702 documentation](https://setuptools.pypa.io/en/latest/userguide/package_discovery.html)


