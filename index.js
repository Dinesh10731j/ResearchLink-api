const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const morgan = require("morgan");
const DbConn = require("./utils/dbconn");
const UserSignupRoute = require("./Routes/signup.routes");
const LoginRoute = require("./Routes/login.routes");
const UploadPaperRoute = require("./Routes/uploadpaper.routes");
const UserDetailsRouter = require("./Routes/userdetails.routes");
const GetResearchPaperRoute = require("./Routes/getresearchpaper.routes");
const ResearchLinkUsersRoutes = require("./Routes/getresearchlinkusers.routes");
const FriendRequestRoute = require("./Routes/friendrequest.routes");
const GetFriendRequestRoute = require("./Routes/getfriendrequest.routes");
const UserProfileRoute = require("./Routes/getuserprofile.routes");
const UserActivitiesRoute = require("./Routes/useractivities.routes");
const UserStatsRoutes = require("./Routes/userstats.routes");
const LikesRoute = require('./Routes/like.routes');
const DislikesRoute = require("./Routes/dislikes.routes");
const followerRoute = require("./Routes/followers.routes")
const { initializeSocket } = require("./controllers/chat.controller");
const cors = require("cors");
dotenv.config();

const app = express();
const server = http.createServer(app);
initializeSocket(server);

const Port = process.env.PORT || 1000;

app.use(morgan("combined"));
app.use(express.json());
app.use(cors());

app.use("/api", UserSignupRoute);
app.use("/api", LoginRoute);
app.use("/api", UploadPaperRoute);
app.use("/api", UserDetailsRouter);
app.use("/api", GetResearchPaperRoute);
app.use("/api", ResearchLinkUsersRoutes);
app.use("/api", FriendRequestRoute);
app.use("/api", GetFriendRequestRoute);
app.use("/api", UserProfileRoute);
app.use("/api", UserActivitiesRoute);
app.use("/api", UserStatsRoutes);
app.use("/api",LikesRoute);
app.use("/api",DislikesRoute);
app.use("/api",followerRoute);

DbConn().then(() => {
  server.listen(Port, () => {
    console.log(`Server is listening to port: ${Port}`);
  });
});
