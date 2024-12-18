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
