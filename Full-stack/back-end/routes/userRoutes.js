const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();
 
// create a new user

router.post('/users', async (req, res) =>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);

    } catch(error){
        res.status(400).send(error);
    }
});
router.get('/users', async (req, res) =>{
    try{
        const users = await User.find({});
         res.status(201).send(users);

    } catch(error){
        res.status(400).send(error);
    }
});

router.put('/users/:id', async (req, res) =>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true,
        });
        if(!user){
            res.status(404).send();
         }
         res.status(201).send(user);

    } catch(error){
        res.status(400).send(error);
    }
});
router.delete('/users/:id', async (req, res) =>{
    try{
        const user = await User.findByIdAndDelete(req.params.id, req.body);
        if(!user){
            res.status(404).send();
         }
         res.status(204).send(user);

    } catch(error){
        res.status(400).send(error);
    }
});

router.post('/register', async (req, res) =>{
    const { name, email, password} = req.body;
    try{
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }
        const hashedPassword = await bcrypt.hash( password, 10);
        const newUser = new User({ name, email, password: hashedPassword});
        await newUser.save();
        res.status(201).send({ message: "user Registered successfully !" });
    } catch(error){
        res.status(500).send({ message: "Registration Failed" });
    }

});
router.get('/register', async (req, res) =>{
    try{
        const users = await User.find({});
         res.status(201).send(users);

    } catch(error){
        res.status(400).send(error);
    }
});
router.post('/login', async (req, res) =>{
    const { email, password} = req.body;
    try{
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).send("Invalid Credentials");
        }
        const isMatch = await bcrypt.compare( password, user.password);
         if(!isMatch) {
            return res.status(400).send("Invalid password");
        }
        res.status(201).send('Logged in Successfully');
    } catch(error){
        res.status(500).send("server error", error);
    }

});

module.exports = router; 