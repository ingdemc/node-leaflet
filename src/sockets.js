module.exports = io => {
    io.on('connection', (socket) => {
        socket.on('userCoordinates', coords => {
            socket.broadcast.emit('newUserCoordinate', coords);
        });
    });
}