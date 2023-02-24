const express = require("express", "meaningOfLife");
const app = express();

// we are using the express static function and it points to the public folder
app.use(express.static("public"))

let visitorsCount = 0

const tanks =[
    {name: "Tiger", nationality: "Germany", year: 1999},
    {name: "M1 Abrams", version: "M1"}
]

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/public/frontpage/frontpage.html")
});

app.get("/tanks/", (req,res) => {
    res.sendFile(__dirname+"/public/tanks/tanks.html")
});

app.get("/visitors/", (req,res) => {
    res.sendFile(__dirname+"/public/visitors/visitors.html")
});

app.get("/api/visitors", (req, res) => {res.send({ data: visitorsCount }); });

app.put("/api/visitors", (req, res) => { res.send({ data: ++visitorsCount }); });


//GET all
app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks }); //{data: byrds} gives out 
  });


const PORT = 8080
app.listen(PORT, (error) => {
    if (error){// error is a falsy value (like null, false, undefined, also an empty string) so if checks for a falsy value
        console.log(error);
        return
    }
    console.log("Server is runnning on port", PORT)
})