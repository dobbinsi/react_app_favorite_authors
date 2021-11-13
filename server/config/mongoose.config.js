const mongoose = require("mongoose");

const dbName = "authors";

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("You are connected to the database:" + dbName)
    })
    .catch((err) => {
        console.log("There was an error connecting to the database.")
        console.log(err);
    })
