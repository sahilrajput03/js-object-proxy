let obj = {
  a: 10,
  b: 20,
}

let handler = {
  get: (obj, keyName) => {},
  set: (obj, keyName, inputValue) => {},
}

const proxy6 = new Proxy(obj, handler)

proxy6.c = 30
console.log(proxy6.c) // undefined
