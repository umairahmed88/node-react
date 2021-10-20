const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send({ hi: "Umair" })
});

// app.get => route handler
//  / => access root route
// req => request => represent incoming requests => wgo is making request etc
// res => response => respresents the response or the data that is about to send back who ever make the request
// res.send => close the request and send the response containing the data(hi: there)
// app.listen(5000) => it tell the node that express want to listen on port 5000  
// const PORT = process.env.PORT => when heroku run the app it has ability to inject environment variables, these variables are that are setup run time that node are runing on the top of, that some thing heroku want to tell us after we deploy our app

const PORT = process.env.PORT || 5000
app.listen(PORT);