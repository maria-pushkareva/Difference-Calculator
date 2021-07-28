## Difference Calculator
[![Actions Status](https://github.com/de-euforie/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/de-euforie/frontend-project-lvl2/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/22f19725e163f85d68b9/test_coverage)](https://codeclimate.com/github/de-euforie/frontend-project-lvl2/test_coverage) ![Tests](https://github.com/de-euforie/frontend-project-lvl2/actions/workflows/github-actions.yml/badge.svg)

Difference Calculator is a program that compares two data structures.

- Available input formats: yaml, json.
- Available output formats: json, plain-text and diff-tree (stylish) format.

```bash
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           display help for command
```

## Comparing two flat JSON files (stylish format)
[![asciicast](https://asciinema.org/a/YpKefUVTWmAWPAucK3bjgA11M.svg)](https://asciinema.org/a/YpKefUVTWmAWPAucK3bjgA11M)

## Comparing two nested JSON files (stylish format)
[![asciicast](https://asciinema.org/a/hVxuIsKulv2ryMphj21SXy674.svg)](https://asciinema.org/a/hVxuIsKulv2ryMphj21SXy674)

## Comparing two YAML files (stylish format)
[![asciicast](https://asciinema.org/a/ELAJzGtmi4CJ3OSjjOiVjj847.svg)](https://asciinema.org/a/ELAJzGtmi4CJ3OSjjOiVjj847)

## Comparing two files (plain format)
[![asciicast](https://asciinema.org/a/A1ENvdMlhIxL28DwmXyQ0kdWB.svg)](https://asciinema.org/a/A1ENvdMlhIxL28DwmXyQ0kdWB)

## Comparing two files (json format)
[![asciicast](https://asciinema.org/a/Ildh6wXTWNiBgYAzfd77llZNU.svg)](https://asciinema.org/a/Ildh6wXTWNiBgYAzfd77llZNU)
