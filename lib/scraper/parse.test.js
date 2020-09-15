const request = require('./request');
const parse = require('./parse');

describe('parse function', () => {
  it('returns an array of all book information', async() => {
    const document = await request(1);
    const parsedDocument = parse(document);
    
    expect(parsedDocument).toEqual(expect.arrayContaining([
      {
        img: '../../../media/cache/27/a5/27a53d0bb95bdd88288eaf66c9230d7e.jpg',
        inStock: true,
        price: '£45.17',
        rating: 'Two',
        title: 'It\'s Only the Himalayas' }
    ]));
  });
});
