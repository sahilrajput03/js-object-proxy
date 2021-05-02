// example 1 for `set` method.
// In below example we are mimicing default js object behaviour with below proxy example.

let obj = {
  a: 10,
  b: 20,
}

let handler = {
  get: (obj, keyName) => {
    return obj[keyName]
  },
  set: (obj, keyName, inputValue) => {
    obj[keyName] = inputValue
  },
}

const proxy7 = new Proxy(obj, handler)

proxy7.c = 30
console.log(proxy7.c) // 30
