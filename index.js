require('dotenv').config();

const express = require('express');
const compression = require("compression");


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(compression());


app.get('/', (req, res) => {
    res.send('App is working fine!!')
})

app.listen(port,()=>console.log(`listening on port ${port}`));