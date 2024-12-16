const handler = {};

const myTarget = {};
const myProxy = new Proxy(myTarget, handler);

myProxy.a = 37;
//  operation forwarded to the target

console.log(myProxy.a);
//  37
//  (The operation has been properly forwarded!)

// No-op forwarding proxy
// In this example, we are using a native JavaScript object to which our proxy will forward all operations that are applied to it.
