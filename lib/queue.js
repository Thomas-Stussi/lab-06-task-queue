const Queue = require('bull');

const taskQueue = new Queue('tasks', {
  redis: process.env.REDIS_URL
});

const storageQueue = new Queue('storage', {
  redis: process.env.REDIS_URL
});

module.exports = {
  taskQueue,
  storageQueue
};
