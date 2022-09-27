var redis = require('redis');
var subscriber = redis.createClient();
var publisher = redis.createClient();
//var subscriber = redis.createClient(9000, 'redis-service.test-wallet.svc.cluster.local');
//var publisher = redis.createClient(9000, 'redis-service.test-wallet.svc.cluster.local');
var msg_count = 0;

subscriber.on('subscribe', function (channel, count) {
    publisher.publish('Channel', 'first message');
    publisher.publish('Channel', 'second message');
    publisher.publish('Channel', 'third message');
});

subscriber.on('message', function (channel, message) {
    console.log('channel : ' + channel + ', message : ' + message);
    msg_count += 1;

    if (msg_count == 3) {
       subscriber.unsubscribe();
       subscriber.end();
       publisher.end();
    }
});

subscriber.subscribe('Channel');
