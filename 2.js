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
