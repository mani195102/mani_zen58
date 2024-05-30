const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is running on the port ${PORT}`);
});
app.get("/name", (req, res) =>{
    res.json(displayName("Mani", "muthu"))
});
const displayName = (firstName, lastName) =>{
    return `hey ,${firstName} ${lastName}`
};