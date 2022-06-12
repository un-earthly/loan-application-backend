
require('dotenv').config();
const express = require("express")
const cors = require("cors")
const app = express();
const port = 80;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send(`<h1>Lets get you a loan !</h1>`)
});

app.listen(port);