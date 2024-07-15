const mongoose = require("mongoose");
require('dotenv').config()


const DB = process.env.URI;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  };



mongoose.connect( DB, options)
.then(() => console.log("DataBase Connected")).catch((errr) => {
    console.log(errr);
})