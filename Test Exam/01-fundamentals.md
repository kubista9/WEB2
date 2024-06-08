# Scope

What is printed to the console?

```js
let x = 1

function foo() {
    var x = 2

    if (true) {
        var x = 3
        console.log(x)
    }

    console.log(x)
}

foo()
console.log(x)
```

1. 3, 2, 1
2. 3, 3, 1
3. 3, 3, 3
4. 1, 3, 3
5. 1, 2, 1

---

Answer: 2
