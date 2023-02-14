const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config()


let dburl;
if  (process.env.NODE_ENV == "development") {
    dbUrl = process.env.MONGO_URI_DEV;
} else {
    dbUrl = process.env.MONGO_URI_PROD;
}

mongoose.set('strictQuery', true);

const connectdb = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("connected to db".yellow);
    }   catch (error) {
        console.log(error);
    }
};


module.exports = connectdb;