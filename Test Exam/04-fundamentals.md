# Spread Syntax and Rest Parameters

What value does calling doSomething(1,2,3) return?

```js
function doSomething(x = 2, ...xs) {
    return [1, 2, ...xs].concat([x])
}

doSomething(1, 2, 3)
```

1. [1, 2, 3, 2]
2. [1, 2, 5, 1]
3. [1, 2, 2, 3, 1]
4. [1, 2, [2, 3], 2]
5. [1, 2, 2, 3, 2]

---

Answer: 3
