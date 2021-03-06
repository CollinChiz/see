const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./server/routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/balance_db");

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});