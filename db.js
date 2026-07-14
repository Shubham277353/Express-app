
const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const books = [
  {id:1, name: "Dune"},
  {id:2, name: "Hunger Games"},
  {id:3, name: "Kite Runner"},
  {id:4, name: "Dark Forest"},
]

async function getAuthorById(authorId) {
  return authors.find(author => author.id === authorId);
};

async function getBookById(bookId) {
  return books.find((book) => book.id === bookId);
}

module.exports = { getAuthorById, getBookById };
