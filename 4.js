// In this simple example, the number 37 gets returned as the default value when the property name is not in the object. It is using the get() handler.

let obj = {}

const handler = {
  get: function (obj, keyName) {
    return keyName in obj ? obj[keyName] : 37
  },
}

const proxy4 = new Proxy(obj, handler)
proxy4.a = 1
proxy4.b = undefined

console.log(proxy4.a, proxy4.b)
//  1, undefined

console.log('c' in proxy4, proxy4.c)
//  false, 37

console.log('-------')

console.log(obj.a, obj.b)
//  1, undefined

console.log('c' in obj, obj.c)
//  false, undefined
