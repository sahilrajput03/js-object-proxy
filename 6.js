let handler = {
  get: (obj, keyName) => { },
  set: (obj, keyName, inputValue) => { },
};

let myTarget = {
  a: 10,
  b: 20,
};
const myProxy = new Proxy(myTarget, handler);

myProxy.c = 30;
console.log(myProxy.c); // undefined
