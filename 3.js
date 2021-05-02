const object = {
  message1: 'hello',
  message2: 'everyone',
}

const handler3 = {
  get: function (object, keyName) {
    // console.log(object) // { message1: 'hello', message2: 'everyone' }
    // console.log(keyName) // message1, message2
    if (keyName === 'message2') {
      return 'world'
    }
    return Reflect.get(...arguments)
  },
}

const proxy3 = new Proxy(object, handler3)

console.log(proxy3.message1) // hello
console.log(proxy3.message2) // world
