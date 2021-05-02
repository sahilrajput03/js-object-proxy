// handler is empty.
const object = {
	message1: 'hello',
	message2: 'everyone',
}

const handler1 = {}
// handlers are always objects though🧄︎.
// * Popular traps(properties) of handler object are get, set and apply.

const proxy1 = new Proxy(object, handler1)

console.log(proxy1.message1) // hello
console.log(proxy1.message2) // everyone
