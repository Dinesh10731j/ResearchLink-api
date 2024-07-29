const express = require("express");
const server = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const DbConn = require("./utils/dbconn");
const UserSignupRoute = require("./Routes/signup.routes");
const LoginRoute = require("./Routes/login.routes");
const UploadPaperRoute = require("./Routes/uploadpaper.routes");
const UserDetailsRouter = require("./Routes/userdetails.routes");
const GetResearchPaperRoute = require("./Routes/getresearchpaper.routes");
const ResearchLinkUsersRoutes = require("./Routes/getresearchlinkusers.routes");
const FriendRequestRoute = require("./Routes/friendrequest.routes")
const cors = require("cors");
dotenv.config();

const Port = process.env.PORT || 1000;

server.use(morgan("combined"));
server.use(express.json());
server.use(cors());
server.use("/api", UserSignupRoute);
server.use("/api", LoginRoute);
server.use("/api", UploadPaperRoute);
server.use("/api",UserDetailsRouter);
server.use("/api",GetResearchPaperRoute);
server.use("/api",ResearchLinkUsersRoutes);
server.use("/api",FriendRequestRoute)
DbConn().then(() => {
  server.listen(Port, () => {
    console.log(`Server is listening to port:${Port}`);
  });
});
