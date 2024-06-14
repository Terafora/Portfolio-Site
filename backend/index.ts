import express from 'express';
import mongoose from 'mongoose';

const dbURL = "mongodb://localhost:27017/portfolio";

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving data on port ${port}`);
});