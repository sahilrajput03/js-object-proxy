# Readme

- Note: Proxy works in browser and nodejs.
- Source: [MDN Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
  - **Todo:** Do continue learning from examples from above link, and master every example's logic though.
- **Todo:** Another decent article(already covered in this repo though): https://www.javascripttutorial.net/es6/javascript-proxy/

## Todo

- **TODO:** ❤️ Do the todo mentioned inside file `./using-markdown-autodocs.md`
- Newer files (16 Dec, 2024): `new-0.js`, `new-1.js`, `new-2.js`
- all other .js files in this repository

### Notes on **not** using prettier for this readme

Google Docs - [Learn markdown-autodocs](https://docs.google.com/document/d/1kg532M0dHBGgLTuRvc5RznHdRJX_P259rlyof6784Vg/edit?tab=t.0#heading=h.hvtjqdu7k8j2)

- _Note: I have disabled this file's formatting with prettier in `.prettierignore` file because prettier adds empty lines before and after the code snippets which are then removed by `autodocs-github-actions` when its run on server. Thus I'm removing prettier for this file. (Future: If I ever want to use prettier --- then the way is to run autodocs on your own in the workflow file and then re-run the prettier before commiting the code so any empty line side-effects made by autodocs are removed even before they are commited to the git._

# Code of all files (using Markdown autodocs ❤️)

## File: `0-1-a-counter-advanced.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./0-1-a-counter-advanced.js) -->
<!-- The below code snippet is automatically added from ./0-1-a-counter-advanced.js -->
```js
const assert = require('assert');

const handler = {
    get(target, property, receiver) {
        if (property in target) {
            return target[property]; // return the property value
        } else {
            return (...args) => {
                if (property === 'increment') {
                    target[args[0]] += args[1];
                }
                return target[args[0]];
            };
        }
    },
};
const myTarget = { alice: 1, bob: 1 };
const myProxy = new Proxy(myTarget, handler);
assert.strictEqual(typeof myProxy, 'object', 'Type of myProxy should be `object`');
assert.strictEqual(myProxy.alice, 1, 'myProxy.alice should be 1');
assert.strictEqual(myProxy.bob, 1, 'myProxy.bob should be 1');
assert.strictEqual(typeof myProxy.anyOtherProperty, 'function', 'Type of `myProxy.anyOtherProperty` should be a function');

assert.strictEqual(myProxy.increment('alice', 2), 3, 'Return value from `myTarget.alice(..)` should be equal to 3.');
assert.strictEqual(myProxy.alice, 3);
assert.strictEqual(myTarget.alice, 3);

assert.strictEqual(myProxy.increment('bob', 3), 4, 'Return value from `myTarget.bob(..)` should be equal to 4.');
assert.strictEqual(myProxy.bob, 4);
assert.strictEqual(myTarget.bob, 4);

const updateBob = myProxy.increment('bob', 3);
console.log("updateBob:", updateBob);
// new text
```
<!-- MARKDOWN-AUTO-DOCS:END -->
