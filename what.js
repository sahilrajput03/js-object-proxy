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
