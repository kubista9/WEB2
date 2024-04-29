import express from 'express';
import bcrypt from 'bcrypt';

const app = express();
const PORT = 3000;

// Middleware to parse the request body
app.use(express.json());

const users = [];

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    if (users.some(user => user.email === email)) {
        return res.status(400).json({ error: "Email already exists" });
    }

    try {
        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ email, password: hashedPassword });
        res.status(201).json({ message: "User signed up successfully" });
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
