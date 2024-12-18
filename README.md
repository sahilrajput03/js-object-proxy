# Readme

- Note: Proxy works in browser and nodejs.
- Source: [MDN Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
  - **Todo:** Do continue learning from examples from above link, and master every example's logic though.
- **Todo:** Another decent article(already covered in this repo though): https://www.javascripttutorial.net/es6/javascript-proxy/

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


## File: `0-1-b-counter-simple.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./0-1-b-counter-simple.js) -->
<!-- The below code snippet is automatically added from ./0-1-b-counter-simple.js -->
```js
const handler = {
    get(target, property, receiver) {
        return (...args) => {
            target.count += args[0];
            console.log('property?:', property); // increment
            return target.count;
        };
    },
};

const myTarget = { count: 1 };
const rpc = new Proxy(myTarget, handler);

const count = rpc.increment(2);
console.log("count:", count); // 3

console.log("rpc:", rpc); // { count: 3 }
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `0-2-rpc.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./0-2-rpc.js) -->
<!-- The below code snippet is automatically added from ./0-2-rpc.js -->
```js
// Usage in my-rpc frontend: [Click here](https://github.com/sahilrajput03/learn-rpc-middlewares/blob/main/my-rpc/index.html)

const handler = {
    get(target, property, receiver) {
        return (...args) => {
            console.log('property?:', property);
            console.log('args?', args, '\n');
        };
    },
};

const myTarget = {};
const rpc = new Proxy(myTarget, handler);

rpc.a('1');
// property?: a
// args? ['1']

rpc.b('one', 'two');
// property?: b
// args? ['one', 'two']
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `1-dumb.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./1-dumb.js) -->
<!-- The below code snippet is automatically added from ./1-dumb.js -->
```js
// no handler example
const handler = {};

const myTarget = {
	message1: 'hello',
	message2: 'everyone',
};
const myProxy = new Proxy(myTarget, handler);

console.log(myProxy.message1); // hello
console.log(myProxy.message2); // everyone
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `2.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./2.js) -->
<!-- The below code snippet is automatically added from ./2.js -->
```js
// * Popular traps(properties) of handler object are:
// - get
// - set and
// - apply

const handler = {
	get: function (target) {
		// here we get reference to object itself.
		console.log(target);
		return 'world';
	},
};

const myTarget = {
	message1: 'hello',
	message2: 'everyone',
};
const myProxy = new Proxy(myTarget, handler);

console.log(myProxy.message1); // world
console.log(myProxy.message2); // world
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `3-dumb-reflect-get.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./3-dumb-reflect-get.js) -->
<!-- The below code snippet is automatically added from ./3-dumb-reflect-get.js -->
```js
// * What is Reflect.get ?, src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get
// * The static Reflect.get() method works like getting a property's value from an object
const object1 = {
	x: 1,
	y: 2,
}

console.log(Reflect.get(object1, 'x'))
// expected output: 1

const array1 = ['zero', 'one']

console.log(Reflect.get(array1, 1))
// expected output: "one"
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `3.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./3.js) -->
<!-- The below code snippet is automatically added from ./3.js -->
```js
const handler = {
	get: function (target, property) {
		// Although there is third param i.e., receiver but there's no good usage of it known yet according to my research.
		// Learn about receiver(i.e., 3rd param) @ here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get

		// console.log(object) // { message1: 'hello', message2: 'everyone' }
		// console.log(property) // message1, message2
		if (property === 'message2') {
			return 'world';
		}
		// return Reflect.get(...arguments)// This was from mdn, but it is insancely used here IMO ~sahil.
		return target[property];
	},
};

const myTarget = {
	message1: 'hello',
	message2: 'everyone',
};
const myProxy = new Proxy(myTarget, handler);

console.log(myProxy.message1); // hello
console.log(myProxy.message2); // world
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `4.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./4.js) -->
<!-- The below code snippet is automatically added from ./4.js -->
```js
// In this simple example, the number 100 gets returned as the default value when the property name is not in the object. It is using the get() handler.
const handler = {
  get: function (obj, keyName) {
    return keyName in obj ? obj[keyName] : 100;
  },
};

let myTarget = {};
const myProxy = new Proxy(myTarget, handler);
myProxy.a = 1;
myProxy.b = undefined;

console.log(myProxy.a, myProxy.b, 'c' in myProxy, myProxy.c);
//  1, undefined, false, 100
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `5-mimic-default-object-behavior.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./5-mimic-default-object-behavior.js) -->
<!-- The below code snippet is automatically added from ./5-mimic-default-object-behavior.js -->
```js
// In below example we are mimicing default js object behaviour with below proxy example.
let handler = {
  get: (obj, keyName) => {
    return obj[keyName];
  },
  set: (obj, keyName, inputValue) => {
    obj[keyName] = inputValue;
  },
};

let myTarget = {
  a: 10,
  b: 20,
};
const myProxy = new Proxy(myTarget, handler);

myProxy.c = 30;
console.log(myProxy.c); // 30
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `6-proxy-for-array.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./6-proxy-for-array.js) -->
<!-- The below code snippet is automatically added from ./6-proxy-for-array.js -->
```js
const handler = {
  get: (obj, keyName) => {
    console.log('::get', { keyName });
    return obj[keyName]; // Array's `push` method is returned when `myProxy.push()` is executed
  },
  set: (obj, keyName, inputValue) => {
    console.log('::set', { keyName, inputValue });
    obj[keyName] = inputValue; // Array's length is set push method on the array on `line 11`(i.e., method returned from the get method of the proxy handler, yikes!).
    return true;
  },
};

const myTarget = [];
const myProxy = new Proxy(myTarget, handler);

myProxy.push(1);
// Output:
// ::get { keyName: 'push' }                  // push method is retrieved
// ::get { keyName: 'length' }                // length is retrieved
// ::set { keyName: '0', inputValue: 1 }      // On property '0' set value `1`
// ::set { keyName: 'length', inputValue: 1 } // On property 'length' set value `1`


console.log('---');

myProxy[0] = 2;
// Output:
// ::set { keyName: '0', inputValue: 2 }
```
<!-- MARKDOWN-AUTO-DOCS:END -->

Thankyou.