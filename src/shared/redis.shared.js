const { createClient } = require('redis');

const client = createClient({ url: 'http://localhost:6379'});

const redisSetKey = async (key, value) => {
  try {
    const redisValue = await client.get(key);
    if (redisValue) {
      return false;
    }
    await client.set(key, value);
    return true;
  } catch (err) {
    throw new Error(err.message);
  } 
}

const redisGetKey = async (key) => {
  return await client.get(key);
}

const redisDeleteKey = async (key) => {
  return await client.del(key)
}

module.exports = {
  redisSetKey,
  redisGetKey,
  redisDeleteKey
}
