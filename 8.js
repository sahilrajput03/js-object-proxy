const handler = {
  get: (obj, keyName) => {
    console.log('::get', { keyName });
    return obj[keyName]; // Array's `push` method is returned when `myProxy.push()` is executed
  },
  set: (obj, keyName, inputValue) => {
    console.log('::set', { keyName, inputValue });
    obj[keyName] = inputValue; // Array's length is set push method on the array on `line 11`(i.e., method returned from the get method of the proxy handler, yikes!).
    return true;
  },
};

const myTarget = [];
const myProxy = new Proxy(myTarget, handler);

myProxy.push(1);
// Output:
// ::get { keyName: 'push' }                  // push method is retrieved
// ::get { keyName: 'length' }                // length is retrieved
// ::set { keyName: '0', inputValue: 1 }      // On property '0' set value `1`
// ::set { keyName: 'length', inputValue: 1 } // On property 'length' set value `1`


console.log('---');

myProxy[0] = 2;
// Output:
// ::set { keyName: '0', inputValue: 2 }
