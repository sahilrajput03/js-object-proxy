# Test MARKDOWN AUTO DOCS 1

### Notes on usage of autodocs in this repository

- *Note: I have disabled this file's formatting with prettier in `.prettierignore` file because prettier adds empty lines before and after the code snippets which are then removed by `autodocs-github-actions` when its run on server. Thus I'm removing prettier for this file. (Future: If I ever want to use prettier --- then the way is to run autodocs on your own in the workflow file and then re-run the prettier before commiting the code so any empty line side-effects made by autodocs are removed even before they are commited to the git.*

- Some other issues I was facing earlier are mentioend here - https://github.com/dineshsonachalam/markdown-autodocs/issues/33

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./myfile.js) -->
<!-- The below code snippet is automatically added from ./myfile.js -->
```js
console.log('file.js? - 5:15pm');
```
<!-- MARKDOWN-AUTO-DOCS:END -->

Please refer the original readme file at Readme-original.md file in this repo.
