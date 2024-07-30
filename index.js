const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const cuisines = {
    indian: ['Butter Chicken', 'Paneer Tikka', 'Biryani'],
    italian: ['Margherita Pizza', 'Pasta Carbonara', 'Tiramisu'],
    chinese: ['Kung Pao Chicken', 'Sweet and Sour Pork', 'Spring Rolls'],
};

app.get('/api/cuisines', (req, res) => {
    res.json(cuisines);
});

app.post('/api/order', (req, res) => {
    const order = req.body;
    console.log('Order received:', order);
    res.status(200).json({ message: 'Order placed successfully!' });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'user@example.com' && password === 'password') {
        res.status(200).json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid credentials!' });
    }
});

app.post('/api/signup', (req, res) => {
    const user = req.body;
    console.log('User signed up:', user);
    res.status(200).json({ message: 'Signup successful!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
