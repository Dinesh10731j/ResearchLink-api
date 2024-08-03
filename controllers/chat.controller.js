let io;

const initializeSocket = (server) => {
  const { Server } = require('socket.io');
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('user is disconnected');
    });
  });
};

module.exports = {
  initializeSocket,
};
