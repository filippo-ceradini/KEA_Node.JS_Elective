const express = require("express");
const app = express();
app.use(express.json());
//const app = express()

//

app.use(express.json());
app.get("/", (req,res) => {
    res.send({message: "Our first route"});
});

let bicycleSpins = 0;
app.get("/spinTheBicycle", (req,res) => {
    bicycleSpins +=1;
    res.send({message:bicycleSpins});
});
// /bat?adjective=spooky
app.get("/dino", (req,res) => {
    console.log(req.query);
    res.send({message:`dino says: ${req.query.adjective}`});
});

app.get("/about", (req,res) => {
    res.send(`
     <h1>About</h1>
     <h3>this is my about page</h3>   
    `);
});

app.post("/package", (req,res) => {
    res.send();
});




app.listen(8080)