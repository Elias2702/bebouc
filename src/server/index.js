// Dependencies
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";

// Database connection
mongoose.connect(
    `mongodb://${process.env.MONGO_ATLAS_LOGIN}:${process.env.MONGO_ATLAS_PASSWORD}@bebouc-shard-00-00-pnqv7.mongodb.net:27017,bebouc-shard-00-01-pnqv7.mongodb.net:27017,bebouc-shard-00-02-pnqv7.mongodb.net:27017/test?ssl=true&replicaSet=Bebouc-shard-0&authSource=admin&retryWrites=true`,
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    console.log("----------   yeah! connected!   ----------");
});

//  Express config
const app = express();

// Body Parser config and express protocol
const urlencodedParser = bodyParser.urlencoded({
    extended: true,
});

app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(cors());

//  CORS config (even if we aim to deploy product in https)
 app.use((req, res, next) => {
     res.setHeader(
         "Access-Control-Allow-Headers",
         "X-Requested-With,content-type",
     );
     res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader(
         "Access-Control-Allow-Methods",
         "GET, POST, OPTIONS, PUT, PATCH, DELETE",
     );
     res.setHeader("Access-Control-Allow-Credentials", true);
     next();
 });


app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// Router config
const router = new express.Router();

app.use("/api", router);
require(`${__dirname}/routes`)(router);

// Port listener
// const {APP_PORT} = process.env;
const port = process.env.PORT

app.listen(port || 8000, () =>
    console.log(`🚀 Server is listening on port ${port}.`),
);
