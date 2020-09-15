const request = require('./scraper/request');
const parse = require('./scraper/parse');

module.exports = job => {
  console.log(`About to scrape page ${job.data.page}`);
  console.log(job.data.page);
  
  return request(job.data.page)
    .then(parse);
};
