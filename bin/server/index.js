"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect(`mongodb://${process.env.MONGO_ATLAS_LOGIN}:${process.env.MONGO_ATLAS_PASSWORD}@bebouc-shard-00-00-pnqv7.mongodb.net:27017,bebouc-shard-00-01-pnqv7.mongodb.net:27017,bebouc-shard-00-02-pnqv7.mongodb.net:27017/test?ssl=true&replicaSet=Bebouc-shard-0&authSource=admin&retryWrites=true`);

const db = _mongoose.default.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("----------   yeah! connected!   ----------");
});
const app = (0, _express.default)();

const urlencodedParser = _bodyParser.default.urlencoded({
  extended: true
});

app.use(urlencodedParser);
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(_express.default.static(_path.default.resolve(__dirname, "../../bin/client")));
const router = new _express.default.Router();
app.use("/api", router);

require(`${__dirname}/routes`)(router);

const port = process.env.PORT;
app.listen(port || 8000, () => console.log(`🚀 Server is listening on port ${port}.`));
//# sourceMappingURL=index.js.map