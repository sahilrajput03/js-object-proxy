// example 1 for `set` method.
// In below example we are mimicing default js object behaviour with below proxy example.
let handler = {
  get: (obj, keyName) => {
    return obj[keyName];
  },
  set: (obj, keyName, inputValue) => {
    obj[keyName] = inputValue;
  },
};

let myTarget = {
  a: 10,
  b: 20,
};
const myProxy = new Proxy(myTarget, handler);

myProxy.c = 30;
console.log(myProxy.c); // 30
