// In this simple example, the number 100 gets returned as the default value when the property name is not in the object. It is using the get() handler.
const handler = {
  get: function (obj, keyName) {
    return keyName in obj ? obj[keyName] : 100;
  },
};

let myTarget = {};
const myProxy = new Proxy(myTarget, handler);
myProxy.a = 1;
myProxy.b = undefined;

console.log(myProxy.a, myProxy.b, 'c' in myProxy, myProxy.c);
//  1, undefined, false, 100