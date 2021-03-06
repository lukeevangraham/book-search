const express = require("express");
const http = require("http");
const routes = require("./routes");
const logger = require("morgan");
// const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const socketIo = require('socket.io')
const app = express();

// setting up Morgan logger
app.use(logger("dev"));

// Require all models
var db = require("./models")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

// Socket.io
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
const server = http.createServer(app);
const io = socketIo(server);
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
  socket.on('example_message', function(msg){
    console.log('message: ' + msg);
    io.emit('example_message', msg)
  });
});
// const serverOnPort = io.listen(8000);

// let wss = new WebSocketServer({http: serverOnPort})







// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
