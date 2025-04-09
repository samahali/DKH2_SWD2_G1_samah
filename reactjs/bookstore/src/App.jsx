// App.jsx
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProductList from "./components/ProductList";
import { Container } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import Cart from "./components/Cart";
import ThemeContext from "./context/ThemeContext";
import {
  TranslationProvider,
  useTranslation,
} from "./context/TranslationContext";
import BookDetails from "./components/BookDetails";
import ReadingList from "./components/ReadingList";
import BookQuote from "./components/BookQuote";
import ReadingMoodSelector from "./components/ReadingMoodSelector";
import { products } from "./data/products"; // Import products data

function AppContent() {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [theme, setTheme] = useState("light");
  const [readingList, setReadingList] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);

  // Refs for scrolling to sections
  const homeRef = useRef(null);
  const categoriesRef = useRef(null);
  const bestSellersRef = useRef(null);

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("bookstore-wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }

    const savedTheme = localStorage.getItem("bookstore-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const savedReadingList = localStorage.getItem("bookstore-reading-list");
    if (savedReadingList) {
      setReadingList(JSON.parse(savedReadingList));
    }

    const savedCart = localStorage.getItem("bookstore-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bookstore-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("bookstore-theme", theme);
    document.body.className = theme === "dark" ? "dark-theme" : "";
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("bookstore-reading-list", JSON.stringify(readingList));
  }, [readingList]);

  useEffect(() => {
    localStorage.setItem("bookstore-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for fixed header

      if (
        homeRef.current &&
        scrollPosition <
          homeRef.current.offsetTop + homeRef.current.offsetHeight
      ) {
        setActiveSection("home");
      } else if (
        categoriesRef.current &&
        scrollPosition >= categoriesRef.current.offsetTop &&
        scrollPosition <
          categoriesRef.current.offsetTop + categoriesRef.current.offsetHeight
      ) {
        setActiveSection("categories");
      } else if (
        bestSellersRef.current &&
        scrollPosition >= bestSellersRef.current.offsetTop
      ) {
        setActiveSection("bestSellers");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Fixed to respect the quantity parameter
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    const quantity = product.quantity || 1;

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const viewBookDetails = (book) => {
    setSelectedBook(book);
    window.scrollTo(0, 0);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  const toggleReadingList = (product) => {
    const existingIndex = readingList.findIndex(
      (item) => item.id === product.id
    );

    if (existingIndex >= 0) {
      setReadingList(readingList.filter((_, index) => index !== existingIndex));
    } else {
      setReadingList([
        ...readingList,
        {
          id: product.id,
          title: product.titleEn,
          titleAr: product.titleAr,
          author: product.authorEn,
          authorAr: product.authorAr,
          image: product.image,
          progress: 0,
          totalPages: Math.floor(Math.random() * 300) + 150, // Random page count between 150-450
        },
      ]);
    }
  };

  const updateReadingProgress = (bookId, progress) => {
    setReadingList(
      readingList.map((book) =>
        book.id === bookId ? { ...book, progress } : book
      )
    );
  };

  const isInReadingList = (productId) => {
    return readingList.some((item) => item.id === productId);
  };

  const scrollToSection = (section) => {
    setActiveSection(section);

    let ref;
    switch (section) {
      case "home":
        ref = homeRef;
        break;
      case "categories":
        ref = categoriesRef;
        break;
      case "bestSellers":
        ref = bestSellersRef;
        break;
      default:
        ref = homeRef;
    }

    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Offset for fixed header
        behavior: "smooth",
      });
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (selectedBook) {
      closeBookDetails();
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (selectedBook) {
      closeBookDetails();
    }
    scrollToSection("home");
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setSelectedCategory(null);
    if (selectedBook) {
      closeBookDetails();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme === "dark" ? "dark-theme" : ""}`}>
        <Header
          cartItemCount={cartItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          )}
          wishlistCount={wishlist.length}
          readingListCount={readingList.length}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          onSearch={handleSearch}
        />
        <main className="main-content">
          <Container>
            {selectedBook ? (
              <div className="mb-4">
                <button onClick={closeBookDetails} className="btn-back">
                  <span className="back-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                  </span>{" "}
                  <span>{t("backToBooks")}</span>
                </button>
                <BookDetails
                  product={selectedBook}
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  isInWishlist={isInWishlist(selectedBook.id)}
                  toggleReadingList={toggleReadingList}
                  isInReadingList={isInReadingList(selectedBook.id)}
                />
              </div>
            ) : (
              <>
                <BookQuote />

                <ReadingMoodSelector
                  onMoodSelect={handleMoodSelect}
                  selectedMood={selectedMood}
                />

                {readingList.length > 0 && (
                  <ReadingList
                    books={readingList}
                    updateProgress={updateReadingProgress}
                    viewBookDetails={(bookId) => {
                      const book = products.find((p) => p.id === bookId);
                      if (book) viewBookDetails(book);
                    }}
                  />
                )}

                <div className="row my-4">
                  <div className="col-lg-8">
                    <ProductList
                      addToCart={addToCart}
                      viewBookDetails={viewBookDetails}
                      toggleWishlist={toggleWishlist}
                      wishlist={wishlist}
                      searchQuery={searchQuery}
                      selectedCategory={selectedCategory}
                      onCategorySelect={handleCategorySelect}
                      refs={{ homeRef, categoriesRef, bestSellersRef }}
                      selectedMood={selectedMood}
                      toggleReadingList={toggleReadingList}
                      readingList={readingList}
                    />
                  </div>
                  <div className="col-lg-4">
                    <Cart
                      cartItems={cartItems}
                      removeFromCart={removeFromCart}
                      updateQuantity={updateQuantity}
                    />
                  </div>
                </div>
              </>
            )}
          </Container>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
}

export default App;
