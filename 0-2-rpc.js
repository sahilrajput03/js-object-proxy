// Usage in my-rpc frontend: [Click here](https://github.com/sahilrajput03/learn-rpc-middlewares/blob/main/my-rpc/index.html)

const handler = {
    get(target, property, receiver) {
        return (...args) => {
            console.log('property?:', property);
            console.log('args?', args, '\n');
        };
    },
};

const myTarget = {};
const rpc = new Proxy(myTarget, handler);

rpc.a('1');
// property?: a
// args? ['1']

rpc.b('one', 'two');
// property?: b
// args? ['one', 'two']
