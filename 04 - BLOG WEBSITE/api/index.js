const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');  
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = '3u98u39f3984hf93hf934h9hfhe'

app.use(cors({credentials: true, origin:'https://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://blacksharkchi:kx55RvAgKkcFJ1sk@cluster0.btqgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Register route
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userDoc = await User.create({ 
            username, 
            password:bcrypt.hashSync(password, salt), 
        });
        res.json(userDoc);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login route
app.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body
        const userDoc = await User.findOne({username})
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk) {
            jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
                if(err) throw err
                res.cookie('token', token).json('ok')
            })
        } else {
            res.status(400).json('wrong credentials')
        }
    } catch (e) {
        
    }
})

// Profile
app.get('/profile', (req, res) => {
    res.json(req.cookies)
})

app.listen(4000)
