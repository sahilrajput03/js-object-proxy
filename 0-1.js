// Usage in my-rpc frontend: [Click here](https://github.com/sahilrajput03/learn-rpc-middlewares/blob/main/my-rpc/index.html)
// hello world!!!

const target = {};
const handler = {
    get(target, property, receiver) {
        return () => console.log('property?:', property);
    },
};

const rpc = new Proxy(target, handler);

rpc.a(); // property?: a

rpc.b(); // property?: b
