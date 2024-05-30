const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require ("body-parser");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const app = express();
const PORT = 3000;

// MiddleWare
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/apiUser", userRoutes);



mongoose.connect(process.env.MONGODB).then(() =>{
    console.log("connected to MongoDB");
    app.listen(process.env.PORT, () =>{
        console.log(`Server is running on the port ${PORT}`);
    });
})
.catch((error) =>{
    console.log("connection error :",error.message);
})


app.get("/name", (req, res) =>{
    res.json(displayName("Mani", "muthu"));
});
const displayName = (firstName, lastName) =>{
    return `hey ,${firstName} ${lastName}`
};