const request = require('./request');
const parse = require('./parse');

describe('parse function', () => {
  it('returns an array of all book information', async() => {
    const document = await request();
    const parsedDocument = parse(document);
    
    expect(parsedDocument).toEqual(expect.arrayContaining([
      {
        title: 'The Requiem Red',
        img: 'media/cache/68/33/68339b4c9bc034267e1da611ab3b34f8.jpg',
        rating: 'One',
        price: '£22.65',
        inStock: true
      },
      {
        title: 'The Dirty Little Secrets of Getting Your Dream Job',
        img: 'media/cache/92/27/92274a95b7c251fea59a2b8a78275ab4.jpg',
        rating: 'Four',
        price: '£33.34',
        inStock: true
      }
    ]));
  });
});
