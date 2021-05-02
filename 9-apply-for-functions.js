const user = {
	firstName: 'John',
	lastName: 'Doe',
}

const getFullName = function (user) {
	return `${user.firstName} ${user.lastName}`
}

const getFullNameProxy = new Proxy(getFullName, {
	apply(fn, thisArg, args) {
		// args[0] // Output: { firstName: 'John', lastName: 'Doe' }
		// args[1] // Output: 'Chikchik'
		return fn(...args).toUpperCase()
	},
})

console.log(getFullNameProxy(user, 'Chikchik')) // JOHN DOE.
