const express = require("express");
const server = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const DbConn = require("./utils/dbconn");
const UserSignupRoute = require("./Routes/signup.routes");
const LoginRoute = require("./Routes/login.routes");
const UploadPaperRoute = require("./Routes/uploadpaper.routes");
const UserProfileRoute = require("./Routes/getuserprofile.routes");
const UploadProfileRoute = require("./Routes/uploadprofile.routes");
const UserDetailsRouter = require("./Routes/userdetails.routes");
const GetResearchPaperRoute = require("./Routes/getresearchpaper.routes");
const ResearchLinkUsersRoutes = require("./Routes/getresearchlinkusers.routes");
const cors = require("cors");
dotenv.config();

const Port = process.env.PORT || 1000;

server.use(morgan("combined"));
server.use(express.json());
server.use(cors());
server.use("/api", UserSignupRoute);
server.use("/api", LoginRoute);
server.use("/api", UploadPaperRoute);
server.use("/api", UserProfileRoute);
server.use("/api", UploadProfileRoute);
server.use("/api",UserDetailsRouter);
server.use("/api",GetResearchPaperRoute);
server.use("/api",ResearchLinkUsersRoutes);
DbConn().then(() => {
  server.listen(Port, () => {
    console.log(`Server is listening to port:${Port}`);
  });
});
