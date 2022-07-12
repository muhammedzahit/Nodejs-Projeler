const {RedisPubSub} = require('graphql-redis-subscriptions')
const Redis = require('ioredis')
const dotenv = require('dotenv')

dotenv.config()

const options = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password : process.env.REDIS_PASSWORD,
  retryStrategy: times => {
    // reconnect after
    return Math.min(times * 50, 2000);
  }
};

const pubSub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options)
});

module.exports = pubSub