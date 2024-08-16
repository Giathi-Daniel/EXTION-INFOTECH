const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');  
const Post = require('./models/post')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const uploadMiddleware = multer({dest: 'uploads/'})
const fs = require('fs')

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = '3u98u39f3984hf93hf934h9hfhe'

app.use(cors({credentials: true, origin:'https://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'))

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
                res.cookie('token', token).json({
                    id:userDoc._id,
                    username,
                })
            })
        } else {
            res.status(400).json('wrong credentials')
        }
    } catch (e) {
        
    }
})

// Profile
app.get('/profile', (req, res) => {
    const {token} = req.cookies
    jwt.verify(token, secret, {}, (err, info) => {
        if(err) throw err
        res.json(info)
    })
})

// logout
app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok')
})

// Create post
app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const {originalname, path} = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path+'.'+ext
    fs.renameSync(path, newPath)

    const {token} = req.cookies
    jwt.verify(token, secret, {}, async (err, info) => {
        if(err) throw err

        const {title,summary,content} = req.body
        const postDoc = await Post.create({
            title,
            summary,
            content,
            cover:newPath,
            author: info.id
        })
        res.json(postDoc)
    })
    
})

// get post
app.get('/post', async (req,res) => {
    res.json(
        await Post.find()
        .populate('author', ['username'])
        .sort({createdAt: -1})
        .limit(20)
    )
})

app.listen(4000)
