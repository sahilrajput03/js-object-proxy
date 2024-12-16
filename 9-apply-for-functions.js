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
