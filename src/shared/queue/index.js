const Bull = require('bull');

const bull = new Bull('Master', {redis: {
    port: 6379,
    host: '127.0.0.1'
  }});

module.exports = bull;
