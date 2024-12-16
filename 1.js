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
