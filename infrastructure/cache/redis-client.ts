import { createClient } from 'redis'
import { RedisError } from './errors/RedisError.js';
import { RedisErrorDefinitions } from './errors/RedisErrorDefinitions.js';

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
    throw new RedisError(RedisErrorDefinitions.URL_ERROR.code, RedisErrorDefinitions.URL_ERROR.message)
}

export const redisClient = createClient({
    url: redisUrl
})