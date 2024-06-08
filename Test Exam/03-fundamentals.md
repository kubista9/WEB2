# Closures

What is printed to the console?

```js
function foo() {
    let x = 0
    return () => {
        x++
        return x
    }
}

const baz = foo()
const qux = foo()

baz()
qux()
console.log(qux())
```

1. undefined
2. 0
3. 1
4. 2
5. 3

---

Answer: 4
