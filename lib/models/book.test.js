const fs = require('fs');
const Book = require('./book');
const pool = require('../utils/pool');

describe('Book model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  
  it('inserts a new Book into the database', async() => {
    const createdBook = await Book.insert({
      title: 'The Requiem Red',
      img: 'media/cache/68/33/68339b4c9bc034267e1da611ab3b34f8.jpg',
      rating: 'One',
      price: '£22.65',
      inStock: true
    });
  
    const { rows } = await pool.query(
      'SELECT * FROM Books WHERE id = $1',
      [createdBook.id]
    );
  
    expect(rows[0]).toEqual({
      id: '1',
      title: 'The Requiem Red',
      img: 'media/cache/68/33/68339b4c9bc034267e1da611ab3b34f8.jpg',
      rating: 'One',
      price: '£22.65',
      in_stock: true
    });
  });
});
