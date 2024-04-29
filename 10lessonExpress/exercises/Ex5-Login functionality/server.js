import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;
app.use(express.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = {
        id: 1,
        email: 'example@example.com',
        hashedPassword: '123',
    };

    bcrypt.compare(password, user.hashedPassword, (err, result) => {
        if (err || !result) {
            res.status(401).send('Invalid email or password');
        } 
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.set('Authorization', `Bearer ${token}`).sendStatus(200);
    });
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})