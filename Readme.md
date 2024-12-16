# Readme

- Note: Proxy works in browser and nodejs.
- Source: [MDN Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
  - **Todo:** Do continue learning from examples from above link, and master every example's logic though.
- **Todo:** Another decent article(already covered in this repo though): https://www.javascripttutorial.net/es6/javascript-proxy/

**Example 1:**

Usage in my-rpc frontend: [Click here](https://github.com/sahilrajput03/learn-rpc-middlewares/blob/main/my-rpc/index.html)

```js
const target = {}
const handler = {
	get(target, property, receiver) {
		return () => console.log('property?:', prop)
	},
}

const rpc = new Proxy(target, handler)

rpc.a() // property?: a

rpc.b() // property?: b
```
