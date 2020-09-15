const { taskQueue, storageQueue } = require('./queue');

taskQueue.process(5, `${__dirname}/worker.js`);
taskQueue.on('completed', job => {
  storageQueue.add({ books: job.returnvalue });
});

storageQueue.process(5, `${__dirname}/store-worker.js`);
