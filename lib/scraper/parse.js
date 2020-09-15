const parse = document => {
  const rawBooks = [...document.querySelectorAll('article')];
    
  const books = rawBooks.map(book => ({
    title: book.getElementsByTagName('a')[1].getAttribute('title'),
    img: book.getElementsByTagName('img')[0].getAttribute('src'),
    rating: book.querySelector('.star-rating').getAttribute('class').split(' ')[1],
    price: book.querySelector('.price_color').textContent,
    // eslint-disable-next-line no-constant-condition
    inStock: 'In Stock' ? true : false 
  }));
  return books;
};
  
module.exports = parse;
