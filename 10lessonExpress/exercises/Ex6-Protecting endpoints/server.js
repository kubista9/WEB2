app.get("/protected", requireAuth, (req, res) => {
    res.send({ message: `Hello ${req.user.username}! This route is protected.` })
})

function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) return res.status(401).send({ error: "Unauthorized" })

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send({ error: "Unauthorized" })
        req.user = decoded
        next()
    })
}