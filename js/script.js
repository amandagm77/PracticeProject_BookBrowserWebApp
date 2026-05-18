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
    rating: 4.5
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    year: 1937,
    image: "images/thehobbit.jpg",
    description: "A fantasy adventure through Middle-earth.",
    rating: 4.3
  },
  {
    id: 3,
    title: "Pride & Prejudice",
    author: "Jane Austen",
    category: "Romance",
    year: 1813,
    image: "images/prideandprejudice.jpg",
    description: "A story of romance in rural England during the early 19th century.",
    rating: 4.3
  },
  {
    id: 4,
    title: "The Last Unicorn",
    author: "Peter S. Beagle",
    category: "Fantasy",
    year: 1968,
    image: "images/thelastunicorn.jpg",
    description: "A fantasy adventure of a lone unicorn searching for the rest of her kind.",
    rating: 4.2
  },
  {
    id: 5,
    title: "The Hound of the Baskervilles",
    author: "Sir Arthur Conan Doyle",
    category: "Mystery",
    year: 1902,
    image: "images/sherlockholmesandthehoundofthebaskervilles.jpg",
    description: "A mystery story following the famous detective Sherlock Holmes who investigates reports of a demonic hound.",
    rating: 4.35
  },
  {
    id: 6,
    title: "The Devil's Highway",
    author: "Luis Alberto Urrea",
    category: "Nonfiction",
    year: 2004,
    image: "images/thedevilshighway.jpg",
    description: "A recounting of the tragic 2001 deaths of 14 out of 26 men attempting to cross the Arizona desert through the region known as 'The Devil's Highway'.",
    rating: 4.1
  }
];
// 2. DOM SELECTORS
const bookContainer = document.querySelector("#bookContainer");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const bookDetails = document.querySelector("#bookDetails");
const darkModeToggle = document.querySelector("#darkModeToggle");
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
    <div class="details-layout">
      <div class="details-image">
        <img src="${book.image}" alt="${book.title}">
      </div>
      <div class="details-text">
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Category:</strong> ${book.category}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Rating:</strong> ${book.rating}/5</p>
        <p>${book.description}</p>
      </div>
    </div>
  `;
  //SCROLL TO DETAILS SECTION
  bookDetails.scrollIntoView({
    behavior: "smooth"
  });
}
// 4. SEARCH + FILTER LOGIC
function updateDisplayedBooks() {
  const searchText =
    searchInput.value.toLowerCase();
  const selectedCategory =
    categoryFilter.value;
  // START WITH ALL BOOKS
  let filteredBooks = books;
  // FILTER BY SEARCH TEXT
  filteredBooks = filteredBooks.filter(book => {
    return book.title
      .toLowerCase()
      .includes(searchText);
  });
  // FILTER BY CATEGORY
  if (selectedCategory !== "all") {
    filteredBooks = filteredBooks.filter(book => {
      return book.category === selectedCategory;
    });
  }
  // RENDER FINAL FILTERED BOOKS
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
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }
});
// 6. INITIAL RENDER
renderBooks(books);