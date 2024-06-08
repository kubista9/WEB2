# State

What is the result of rendering this component?

```js
function App() {
    const [state, setState] = useState(1)
    setState(state + 1)
    return <h1>{state && state + 1}</h1>
}
```

1. A heading displaying "1"
2. A heading displaying "2"
3. A heading displaying "3"
4. A heading displaying "2 && 3"
5. An Error

---

Answer: 5
