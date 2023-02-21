const express = require("express", "meaningOfLife");
const app = express();

// we are using the express static function and it points to the public folder
app.use(express.static("public"))

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/public/frontpage/frontpage.html")
});

app.get("/tanks", (req,res) => {
    res.sendFile(__dirname+"/public/tanks/tanks.html")
});


console.log(__dirname);

const PORT = 8080
app.listen(PORT, (error) => {
    if (error){// error is a falsy value (like null, false, undefined, also an empty string) so if checks for a falsy value
        console.log(error);
        return
    }
    console.log("Server is runnning on port", PORT)
})