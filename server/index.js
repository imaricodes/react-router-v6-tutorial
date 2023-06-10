import express from 'express';
import cors from 'cors';
import { mongoose } from 'mongoose';
import model from './models/user.model.js';

const User = model;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userData')

app.post('/api/register', async (req, res) => {
  console.log(req.body);
    try {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    res.json({status: 'ok'});
  } catch (error) {
    console.log(error);
    res.json({status: 'error', error: 'Duplicate email'});
    
  }
});

app.post('/api/login', async (req, res) => {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });

        if (user) {
            res.json({status: 'ok', user:true});
        } else return res.json({status: 'error', user: false});

        res.json({status:'ok'})


  });

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.listen(8000, () => console.log('Server is listening on port 8000...'));
