const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);


// app.get => route handler
//  / => access root route
// req => request => represent incoming requests => wgo is making request etc
// res => response => respresents the response or the data that is about to send back who ever make the request
// res.send => close the request and send the response containing the data(hi: there)
// app.listen(5000) => it tell the node that express want to listen on port 5000  
// const PORT = process.env.PORT => when heroku run the app it has ability to inject environment variables, these variables are that are setup run time that node are runing on the top of, that some thing heroku want to tell us after we deploy our app

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));