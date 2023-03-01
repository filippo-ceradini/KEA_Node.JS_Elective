app.get("/time/time", (req,res) =>{
    res.send(
        {
            timeUTC: new Date(),
            timeLocal: Date(),
            unixTimestamp: Date.now()
        }
    );
}
)