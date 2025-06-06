const rabbit = require('amqplib');

// connect to rabbitMQ
const connectionRabbitMQ = async () => {
  try {
    const connection = await rabbit.connect({ hostname: 'localhost', port: 5672 });
    console.log('connection success!');
    return connection;
  } catch (error) {
    console.log(error);
    return error
  }
}

module.exports = connectionRabbitMQ;
