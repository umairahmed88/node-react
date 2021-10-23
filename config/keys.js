if (process.env.NODE_ENV === "production") {
    // we are in production - return the production set of keys
    module.exports = require("./prod");
} else {
    // we are in developement - return the dev-keys
    module.exports = require("./dev");
}