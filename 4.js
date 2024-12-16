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
