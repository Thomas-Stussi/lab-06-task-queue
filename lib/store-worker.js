const store = require('./scraper/store');

module.exports = job => {
  return store(job.data.books);
};
