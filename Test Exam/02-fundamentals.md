# Type Coercion

What is printed to the console?

```js
function maybe(maybe) {
    if (maybe) {
        maybe += "1"
    }
    if ("maybe") {
        maybe += "2"
    }
    if (maybe) {
        maybe += "3"
    }
    if (false - 3) {
        maybe += 4
    }
    if (true - 1) {
        maybe += 5
    }
    return maybe
}

console.log(maybe(""))
```

1. 234
2. 1235
3. 27
4. 128
5. 123

---

Answer: 1
