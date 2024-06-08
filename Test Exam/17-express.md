# Middleware

What is true or false about the code below?

```js
function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) return res.status(401).send({ error: "Unauthorized" })

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send({ error: "Unauthorized" })
        req.user = decoded
    })
}
```

1. It is an Express middleware function
2. The request will never be passed on
3. The authentication process is session based
4. The verification process is handled synchronously
5. Correct HTTP error messages have been used

---

Answer: True: 1,2,5
