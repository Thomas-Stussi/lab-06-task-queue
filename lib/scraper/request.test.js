const request = require('./request');

describe('request function', () => {
  it('makes a request to Books to Scrape and returns html', async() => {
    const document = await request();
    expect(document).not.toBeNull();
  });
});
