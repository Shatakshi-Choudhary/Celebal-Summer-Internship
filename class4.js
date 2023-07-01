//JSON
// API
//Express
// Database connectivity
// MVC Archietecture
// HTTP & Express with file system & DB Conn.. & MVC , JWD token
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// body parser 
// GET POST API 
// PUT API

let data = [];
//id=request.fetch.id
app.get("/api/data/:id", (req, res) => {
    res.status(200).json(data);

    const item = data.find((item) => item.id === id);
    if (item) {
        res.status(200).json(item);
    }
    else {
        res.status(404).send("Data not found");
    }
});

// Create operation: Add new data
addEventListener.post("/api/data", (req, res) => {
    const newData = req.body;
    console.log(newData);
    data.push(newData);
    res.status(201).send("Data created successfully");
})
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Node moon
// POSTMAN
// request & response
// Route