const handler = {
    get(target, property, receiver) {
        return (...args) => {
            target.count += args[0];
            console.log('property?:', property); // increment
            return target.count;
        };
    },
};

const myTarget = { count: 1 };
const rpc = new Proxy(myTarget, handler);

const count = rpc.increment(2);
console.log("count:", count); // 3

console.log("rpc:", rpc); // { count: 3 }
