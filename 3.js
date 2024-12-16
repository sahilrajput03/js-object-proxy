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
