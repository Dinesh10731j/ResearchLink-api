const express = require("express");
const server = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const DbConn = require("./utils/dbconn");
const UserSignupRoute = require("./Routes/signup.routes");
const cors = require("cors")
dotenv.config();

const Port = process.env.PORT || 1000;

server.use(morgan("combined"));
server.use(express.json());
server.use(cors());
server.use("/api", UserSignupRoute);

DbConn().then(() => {
  server.listen(Port, () => {
    console.log(`Server is listening to port:${Port}`);
  });
});
