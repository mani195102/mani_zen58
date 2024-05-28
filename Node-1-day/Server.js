const express = require("express");
const fs = require("fs-extra");
const path = require("path");

const app = express();
const PORT = 3000;

const folderPath = path.join(__dirname, "text");

// Ensure the directory exists at the start using IIFE

// (async () => {
//     try {
//         await fs.ensureDir(folderPath);
//         console.log("Directory ensured:", folderPath);
//     } catch (error) {
//         console.error("Error ensuring directory:", error);
//     }
// })();

function getFormattedFileName(){
    return new Date().toISOString().replace(/:/g, '-');
}

app.post("/createFile", async (req, res) => {
    try {
        // Ensure the directory exists when handling the request
        await fs.ensureDir(folderPath);

        // Generate a timestamp and sanitize it for use as a filename
       const time =getFormattedFileName();
        const fileName = `${time}.txt`;
        const filePath = path.join(folderPath, fileName);
        

        // Write the timestamp to the new file
        await fs.writeFile(filePath, time);

        res.send("File created successfully");
    } catch (error) {
        console.error("Error writing the file:", error);
        res.status(500).send("Error writing the file");
    }
});

// Basic GET route for testing
app.get("/getFiles", async (req, res) => {

    try{
        await fs.ensureDir(folderPath);
        const files = await fs.readdir(folderPath);
        const textfiles = files.filter((file) => file.endsWith(".txt"));
        res.json(textfiles);
    } catch (error){
        res.status(500).send("Error reading Folder-", error)

    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
