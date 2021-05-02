const object = {
  message1: 'hello',
  message2: 'everyone',
}

const handler2 = {
  get: function (object, keyName) {
    // Although there is third param i.e., reveicer but there's no good usage of it known yet according to my research.

    // here we get reference to object itself.
    console.log(object)
    return 'world'
  },
}

const proxy2 = new Proxy(object, handler2)

console.log(proxy2.message1) // world
console.log(proxy2.message2) // world
