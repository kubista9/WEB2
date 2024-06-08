# Rendering

Which of the below functions correctly return an HTML-list of chocolate cake ingredients?

```js
const ingredients = ["milk", "cocoa powder", "flour"]

function ListA() {
    return (
        <ul>
            {ingredients.map(p => (
                <li>{p}</li>
            ))}
        </ul>
    )
}
function ListB() {
    return (
        <ul>
            {ingredients.forEach(p => (
                <li>{p}</li>
            ))}
        </ul>
    )
}
function ListC() {
    return <ul>{ingredients.toList()}</ul>
}
function ListD() {
    return (
        <ul>
            {ingredients.filter(p => (
                <li>{p}</li>
            ))}
        </ul>
    )
}
```

---

Answer: ListA
