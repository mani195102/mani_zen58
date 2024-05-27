const express = require("express");
const fs = require("fs-extra");
const path = require("path");

const app = express();
const PORT = 3000;

const folderPath = path.join(__dirname, "text");

// Ensure the directory exists at the start
(async () => {
    try {
        await fs.ensureDir(folderPath);
        console.log("Directory ensured:", folderPath);
    } catch (error) {
        console.error("Error ensuring directory:", error);
    }
})();

app.post("/createFile", async (req, res) => {
    try {
        // Ensure the directory exists when handling the request
        await fs.ensureDir(folderPath);
        console.log("Directory checked/created during request");

        // Generate a timestamp and sanitize it for use as a filename
        const time = new Date().toISOString().replace(/:/g, '-');
        const fileName = `${time}.txt`;
        const filePath = path.join(folderPath, fileName);
        
        console.log("Attempting to create file:", filePath);

        // Write the timestamp to the new file
        await fs.writeFile(filePath, time);
        console.log("File created successfully at:", filePath);

        res.send("File created successfully");
    } catch (error) {
        console.error("Error writing the file:", error);
        res.status(500).send("Error writing the file");
    }
});

// Basic GET route for testing
app.get("/", (req, res) => {
    res.send("Server is up and running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
