/**
 * Database connect
 */

var mongoose = require('mongoose');

var mongoMaxRetries = 100;
var defaultRetryMiliSeconds = 5000;
var mongoRetries = mongoMaxRetries;
var mongooseOptions = {
    socketTimeoutMS: 30000,
    reconnectTries: 30000,
    readPreference: "secondary",
    retryMiliSeconds: defaultRetryMiliSeconds,
    auto_reconnect: true,
    keepAlive: 30000,
    connectTimeoutMS: 30000,
}

mongoose.set('useFindAndModify', false);

function mongoDbConnect() {
    console.log('connecting with ' + process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
}

mongoDbConnect();


mongoose.connection.on('error', function (err) {
    console.log('[MongoDB connection error]: ' + err);
});
mongoose.connection.on('connecting', function () {
    console.log('[Reconnecting to DB]');
});
mongoose.connection.on('connected', function () {
    console.log("[Database connected successfully]");
    // Reset
    mongoRetries = mongoMaxRetries;
    mongooseOptions.retryMiliseconds = defaultRetryMiliSeconds;
});
mongoose.connection.on('reconnected', function () {
    console.log("[Datbase successfully reconnected]");
});
mongoose.connection.on('disconnected', function () {
    console.log("[Database disconnected] retries left: " + mongoRetries + " retry delay: " + mongooseOptions.retryMiliSeconds);
    if (mongoRetries > 0) {
        // Increase back off
        mongooseOptions.retryMiliSeconds += 100 * (mongoMaxRetries - mongoRetries);
        mongoDbConnect();
        mongoRetries--;
    } else {
        console.log("[No mongodb connection retries left] Quitting.");
        process.exit(1);
    }
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports.mongoose = mongoose;