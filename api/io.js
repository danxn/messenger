module.exports = function (io, app) {
    app.locals.chat = {
        usersCount: 1,
        users: []
    }
    io.on('connection', function (socket) {
        console.log('A user connected');
        socket.on('user', function (name) {
            console.log(name);
            socket.emit('user', 'User ' + app.locals.chat.usersCount);
            app.locals.chat.users.push('User ' + app.locals.chat.usersCount);
            app.locals.chat.usersCount++;
        });
        socket.on('message', function (text) {
            console.log('[MESSAGE] ', text);
            io.sockets.emit('message', text);
        });
    });
};