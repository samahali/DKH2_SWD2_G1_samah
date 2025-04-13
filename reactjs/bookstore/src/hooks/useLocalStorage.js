import { useEffect } from "react"

export function useLocalStorage({state, toggleTheme}) {
  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("bookstore-wishlist");
    if (savedWishlist) {
      state.whishlist = JSON.parse(savedWishlist);
    }

    const savedTheme = localStorage.getItem("bookstore-theme");
    if (savedTheme && state.theme !== savedTheme) {
        // Only toggle if different, to avoid unnecessary rerenders
        toggleTheme();
    }

    const savedReadingList = localStorage.getItem("bookstore-reading-list");
    if (savedReadingList) {
      state.readingList = JSON.parse(savedReadingList);
    }

    const savedCart = localStorage.getItem("bookstore-cart");
    if (savedCart) {
      state.cartItems = JSON.parse(savedCart);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bookstore-wishlist", JSON.stringify(state.whishlist));
  }, [state.whishlist]);

  useEffect(() => {
    localStorage.setItem("bookstore-theme", state.theme);
    document.body.className = state.theme === "dark" ? "dark-theme" : "";
  }, [state.theme]);

  useEffect(() => {
    localStorage.setItem("bookstore-reading-list", JSON.stringify(state.readingList));
  }, [state.readingList]);

  useEffect(() => {
    localStorage.setItem("bookstore-cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);
  return null; // This hook doesn't return anything
}
