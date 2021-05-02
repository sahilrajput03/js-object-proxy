let obj = [1, 2]

let handler = {
  get: (obj, keyName) => {
    const isPushOrLength = keyName === 'push' || keyName === 'length'
    if (!isPushOrLength) {
      console.log('::get', {keyName})
      // ^^ 🤾︎ Doing this so I don't get log for methods like push or length which is annoying.
    }

    return obj[keyName] // Note: Also, I am returning our array's push method when accessed on `line 8` and `line 9`.
  },
  set: (obj, keyName, inputValue) => {
    const isLength = keyName === 'length'
    if (!isLength) {
      console.log('::set', {keyName, inputValue})
      // ^^ 🤾︎ Doing this so I don't get log for methods like length which is annoying.
    }

    obj[keyName] = inputValue // Note: Also, I am setting our array's length when called the original push method on the array on `line 11`(i.e., method returned from the get method of the proxy handler, yikes!).
    return true
    // NOTE: The length of the object is automatically updated with required value calculated from the array though.
  },
}

const proxy8 = new Proxy(obj, handler)

// proxy7.c = 30
// console.log(proxy7.c) // 30

// console.log(proxy7[0])// Works very well 🏑︎ with get behaviour.

// proxy7[4] = 'boom chick' // Works very well 🏑︎ too.

proxy8.push(4)
proxy8.push(5)
// Note: proxy8.length get and set methods are automatically called(as we unnoticingly return those methods from each of get/set methods of handlers, yikes🧸︎!) when we use push method on proxy object, and we get logs for each of these calls in our get and set methods and thus I am removing those logs.

console.log('------')
// console.log(proxy8)

console.log(proxy8[3])
// proxy8[3] = 6 // Uncommet to see expected behaviour🧸︎.
console.log(proxy8[3])
