var redis = require('redis');
//var subscriber = redis.createClient();
var subscriber = redis.createClient(9000, 'redis-service.test-redis.svc.cluster.local');

subscriber.on('subscribe', function (channel, count) {
    console.log('channel ', channel);
    console.log('count ', count);
});

subscriber.on('message', function (channel, message) {
    console.log('channel : ' + channel + ', message : ' + message);
});

subscriber.subscribe('send');
