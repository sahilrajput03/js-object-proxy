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

## File: `0-1.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./0-1.js) -->
<!-- The below code snippet is automatically added from ./0-1.js -->
```js
// Usage in my-rpc frontend: [Click here](https://github.com/sahilrajput03/learn-rpc-middlewares/blob/main/my-rpc/index.html)
// Wow superb123

const target = {};
const handler = {
    get(target, property, receiver) {
        return () => console.log('property?:', property);
    },
};

const rpc = new Proxy(target, handler);

rpc.a(); // property?: a

rpc.b(); // property?: b
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `0-2.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./0-2.js) -->
<!-- The below code snippet is automatically added from ./0-2.js -->
```js
const handler = {
    get(target, property, receiver) {
        return (...args) => {
            target.count += args[0];
            console.log('property?:', property); // increment
            return 234;
        };
    },
};

const myTarget = { count: 1 };
const rpc = new Proxy(myTarget, handler);

const count = rpc.increment(2);
console.log("count:", count);

console.log("rpc:", rpc);

// console.log(myTarget.count === myProxy.count); // true
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `0-3.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./0-3.js) -->
<!-- The below code snippet is automatically added from ./0-3.js -->
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
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `1.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./1.js) -->
<!-- The below code snippet is automatically added from ./1.js -->
```js
// no handler example
const handler = {};
// handlers are always objects though🧄︎.
// * Popular traps(properties) of handler object are get, set and apply.

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

## File: `3-0.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./3-0.js) -->
<!-- The below code snippet is automatically added from ./3-0.js -->
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
// In this simple example, the number 37 gets returned as the default value when the property name is not in the object. It is using the get() handler.
const handler = {
  get: function (obj, keyName) {
    return keyName in obj ? obj[keyName] : 37;
  },
};

let myTarget = {};
const myProxy = new Proxy(myTarget, handler);
myProxy.a = 1;
myProxy.b = undefined;

console.log(myProxy.a, myProxy.b);
//  1, undefined

console.log('c' in myProxy, myProxy.c);
//  false, 37

console.log('-------');

console.log(myTarget.a, myTarget.b);
//  1, undefined

console.log('c' in myTarget, myTarget.c);
//  false, undefined
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `5.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./5.js) -->
<!-- The below code snippet is automatically added from ./5.js -->
```js
const handler = {};

const myTarget = {};
const myProxy = new Proxy(myTarget, handler);

myProxy.a = 37;
//  operation forwarded to the target

console.log(myProxy.a);
//  37
//  (The operation has been properly forwarded!)

// No-op forwarding proxy
// In this example, we are using a native JavaScript object to which our proxy will forward all operations that are applied to it.
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `5.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./5.js) -->
<!-- The below code snippet is automatically added from ./5.js -->
```js
const handler = {};

const myTarget = {};
const myProxy = new Proxy(myTarget, handler);

myProxy.a = 37;
//  operation forwarded to the target

console.log(myProxy.a);
//  37
//  (The operation has been properly forwarded!)

// No-op forwarding proxy
// In this example, we are using a native JavaScript object to which our proxy will forward all operations that are applied to it.
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `6.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./6.js) -->
<!-- The below code snippet is automatically added from ./6.js -->
```js
let handler = {
  get: (obj, keyName) => { },
  set: (obj, keyName, inputValue) => { },
};

let myTarget = {
  a: 10,
  b: 20,
};
const myProxy = new Proxy(myTarget, handler);

myProxy.c = 30;
console.log(myProxy.c); // undefined
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `7.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./7.js) -->
<!-- The below code snippet is automatically added from ./7.js -->
```js
// example 1 for `set` method.
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

## File: `8.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./8.js) -->
<!-- The below code snippet is automatically added from ./8.js -->
```js
const handler = {
  get: (obj, keyName) => {
    const isPushOrLength = keyName === 'push' || keyName === 'length';
    if (!isPushOrLength) {
      console.log('::get', { keyName });
      // ^^ 🤾︎ Doing this so I don't get log for methods like push or length which is annoying.
    }

    return obj[keyName]; // Note: Also, I am returning our array's push method when accessed on `line 8` and `line 9`.
  },
  set: (obj, keyName, inputValue) => {
    const isLength = keyName === 'length';
    if (!isLength) {
      console.log('::set', { keyName, inputValue });
      // ^^ 🤾︎ Doing this so I don't get log for methods like length which is annoying.
    }

    obj[keyName] = inputValue; // Note: Also, I am setting our array's length when called the original push method on the array on `line 11`(i.e., method returned from the get method of the proxy handler, yikes!).
    return true;
    // NOTE: The length of the object is automatically updated with required value calculated from the array though.
  },
};

const myTarget = [1, 2];
const myProxy = new Proxy(myTarget, handler);

// proxy7.c = 30
// console.log(proxy7.c) // 30

// console.log(proxy7[0])// Works very well 🏑︎ with get behaviour.

// proxy7[4] = 'boom chick' // Works very well 🏑︎ too.

myProxy.push(4);
myProxy.push(5);
// Note: proxy8.length get and set methods are automatically called(as we unnoticingly return those methods from each of get/set methods of handlers, yikes🧸︎!) when we use push method on proxy object, and we get logs for each of these calls in our get and set methods and thus I am removing those logs.

console.log('------');
// console.log(proxy8)

console.log(myProxy[3]);
// proxy8[3] = 6 // Uncommet to see expected behaviour🧸︎.
console.log(myProxy[3]);
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## File: `9.js`

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./9.js) -->
<!-- The below code snippet is automatically added from ./9.js -->
```js
const getFullName = function (user) {
	return `${user.firstName} ${user.lastName}`;
};

const getFullNameProxy = new Proxy(getFullName, {
	apply(fn, thisArg, args) {
		// console.log('args[0]?', args[0]); // { firstName: 'John', lastName: 'Doe' }
		// console.log('args[1]?', args[1]); // 'Chikchik'
		return fn(...args).toUpperCase();
	},
});

const myUser = {
	firstName: 'John',
	lastName: 'Doe',
};
console.log(getFullNameProxy(myUser, 'Chikchik')); // JOHN DOE.
```
<!-- MARKDOWN-AUTO-DOCS:END -->
