# Promises

What is printed to the console on a successful GET request?

```js
function foo() {
    let data

    fetch("https://api.example.com/")
        .then(response => {
            if (response.ok) return response.json()
        })
        .then(result => {
            data = result
        })

    return data
}

console.log(foo())
```

1. JSON-data
2. A JavaScript data object
3. A JavaScript response object
4. A Promise containing the data object
5. undefined

---

Answer: 5
