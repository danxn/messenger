module.exports = function (io, app) {
    io.on('connection', function (socket) {
        console.log('A user connected');
        socket.on('user', function (name) {
            console.log(name);
        });
        socket.on('message', function (text) {
            console.log('[MESSAGE] ', text);
        });
    });
};