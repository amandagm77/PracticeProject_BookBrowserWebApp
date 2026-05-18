// 1. BOOK DATA
const books = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    year: 1965,
    image: "images/dune.jpg",
    description: "A science fiction story about politics, power, and survival.",
    rating: 5
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    year: 1937,
    image: "images/thehobbit.jpg",
    description: "A fantasy adventure through Middle-earth.",
    rating: 5
  }
];
// 2. DOM SELECTORS
const bookContainer = document.querySelector("#bookContainer");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const bookDetails = document.querySelector("#bookDetails");
// 3. RENDER FUNCTIONS
function renderBooks(bookArray) {
  // CLEAR OLD BOOKS
  bookContainer.innerHTML = "";
  // LOOP THROUGH BOOKS
  bookArray.forEach(book => {
    // CREATE BOOK CARD
    const card = document.createElement("div");
    card.classList.add("book-card");
    // INSERT HTML
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Category:</strong> ${book.category}</p>
    `;
    // ADD CLICK EVENT
    card.addEventListener("click", () => {
      showBookDetails(book);
    });
    // ADD TO PAGE
    bookContainer.appendChild(card);
  });
}
function showBookDetails(book) {
  bookDetails.innerHTML = `
    <h2>${book.title}</h2>
    <img src="${book.image}" alt="${book.title}" width="200">
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Category:</strong> ${book.category}</p>
    <p><strong>Year:</strong> ${book.year}</p>
    <p><strong>Rating:</strong> ${book.rating}/5</p>
    <p>${book.description}</p>
  `;
}
// 4. SEARCH + FILTER LOGIC
function updateDisplayedBooks() {
  const searchText =
    searchInput.value.toLowerCase();
  const selectedCategory =
    categoryFilter.value;
  const filteredBooks = books.filter(book => {
    const matchesSearch =
      book.title
      .toLowerCase()
      .includes(searchText);
    const matchesCategory =
      selectedCategory === "all" ||
      book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  renderBooks(filteredBooks);
}
// 5. EVENT LISTENERS
searchInput.addEventListener(
  "input",
  updateDisplayedBooks
);
categoryFilter.addEventListener(
  "change",
  updateDisplayedBooks
);
// 6. INITIAL RENDER
renderBooks(books);