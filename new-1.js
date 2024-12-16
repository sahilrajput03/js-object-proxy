const handler = {
    get(target, property, receiver) {
        return (...args) => {
            target.count += args[0];
            console.log('property?:', property); // increment
            return 234;
        };
    },
};

const myTarget = { count: 1 };
const rpc = new Proxy(myTarget, handler);

const count = rpc.increment(2);
console.log("count:", count);

console.log("rpc:", rpc);

// console.log(myTarget.count === myProxy.count); // true