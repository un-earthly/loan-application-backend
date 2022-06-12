const express = require("express")
const cors = require("cors")
require('dotenv').config();
const app = express();
const port = 80;

app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.loan_admin}:${process.env.loan_pass}@cluster0.vt0bn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const loanCollection = client.db("loanDB").collection("loan");
try {
    client.connect()

    app.post("/loan", async (req, res) => {
        const result = loanCollection.insertOne(req.body)
        res.send(result)
    })


} catch {
    console.log(error)
}


app.listen(port);