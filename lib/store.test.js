const fs = require('fs');
const pool = require('./utils/pool');
const store = require('./store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  
  it('takes an array of books and saves them in the db', async() => {
    const books = [
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
    ];
  
    await store(books);
  
    const { rows } = await pool.query('SELECT * FROM books');
  
    expect(rows).toHaveLength(2);
  });
});
