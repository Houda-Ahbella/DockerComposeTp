const mongoose = require("mongoose");

module.exports = async () => {
    try {

        await mongoose.connect(
            "mongodb://mongo:27017/todo-app"
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
