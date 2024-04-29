import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv/config"

const app = express()
app.use(express.json())

const users = []

app.post("/login", async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await authenticateUser(username, password)
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.set("Authorization", `Bearer ${token}`).sendStatus(200)
    } catch (err) {
        res.status(401).send({ error: "Unauthorized" })
    }
})

async function authenticateUser(username, password) {
    const user = users.find(user => user.username === username)
    if (!user) throw new Error("Invalid credentials")

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) throw new Error("Invalid credentials")

    return { username: user.username }
}

app.post("/signup", async (req, res) => {
    const { username, password } = req.body
    try {
        await createUser(username, password)
        res.send({ message: "User created!" })
    } catch (err) {
        res.status(500).send({ error: "Error signing up" })
    }
})

async function createUser(username, password) {
    const existingUser = users.find(user => user.username === username)
    if (existingUser) throw new Error("Name taken!")

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = { username, password: hashedPassword }
    users.push(newUser)
    return newUser
}

app.listen(3000)