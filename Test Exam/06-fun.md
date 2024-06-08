# Pure Functions

Are the following functions pure or impure?

```js
const numbers = [1, 2, 3]
let multiplyFactor = 3

function add(a, b) {
    return a + b + 2
}

function last() {
    return numbers.pop()
}

function multiply(x, factor) {
    multiplyFactor = factor
    return x * multiplyFactor
}

function divide(x, ...numbers) {
    numbers.forEach(n => n / x)
    return numbers
}

function random() {
    return Math.ceil(Math.random() * a)
}
```

---

Answer: add & divide are pure
