# The Event Loop

In what order are the numbers printed to the console?

```js
console.log(1)
setTimeout(() => {
    console.log(2)
}, 100)
setTimeout(() => {
    console.log(3)
}, 0)
console.log(4)
```

1. 1, 2, 3, 4
2. 1, 4, 2, 3
3. 1, 3, 4, 2
4. 1, 4, 3, 2
5. 1, 2, 4, 3

---

Answer: 4
