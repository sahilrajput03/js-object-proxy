**#TODO: Move contents of this to my homepage at sahilrajput.com (under `Learn Markdown` page with a heart).**

# Using Markdown autodocs

Source: https://github.com/marketplace/actions/markdown-autodocs

Add below text to your readme file for importing `./relative/path/to/file.js` file's code.

```
<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./relative/path/to/file.js) -->
<!-- MARKDOWN-AUTO-DOCS:END -->
```

**❤️ Note: The path to file can be a markdown file as well (tested).**

## Local Usage

```bash
npm i -g markdown-autodocs
markdown-autodocs -c code-block -o ./README.md
```

## Adding markdown autodocs as github workflow

Refer the workflow file of - https://github.com/sahilrajput03/js-object-proxy
