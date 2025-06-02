const mongoose = require("mongoose");
const connetDb = async () => {
    await mongoose.connect(process.env.DB_URI)
        .then(() => console.log("MongoDB Connected"));
}
module.exports = connetDb;