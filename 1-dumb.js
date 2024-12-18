// no handler example
const handler = {};

const myTarget = {
	message1: 'hello',
	message2: 'everyone',
};
const myProxy = new Proxy(myTarget, handler);

console.log(myProxy.message1); // hello
console.log(myProxy.message2); // everyone
