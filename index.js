function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // 1) sends a fetch request to 'https://anapioficeandfire.com/api/books'
  // 2) renders book titles into the DOM by passing a JSON object to renderBooks()
  
  /* Make request to 'https://anapioficeandfire.com/api/books' */
  return fetch('https://anapioficeandfire.com/api/books')
          /* Convert response to JSON. */
          .then((resp) => resp.json())
          /* Pass JSON to renderBooks() */
          .then((json) => (renderBooks(json)))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
