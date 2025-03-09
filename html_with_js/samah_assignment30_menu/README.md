# Restaurant Menu & Ordering System  

## Overview  
This is a dynamic restaurant menu and ordering system that allows users to browse the menu, add items to their cart, adjust quantities, and proceed to checkout. The menu is loaded from a `menu variable` in JavaScript, and the shopping cart is managed with `localStorage`.  

## Features  
- **Add to Cart**: Users can add items to their cart with a modal interface.  
- **Quantity Adjustment**: Increase or decrease item quantity directly in the modal.  
- **Price Calculation**: Automatically updates the total price based on selected quantity and discount (if available).  
- **Local Storage**: Saves cart data even after page reloads.  
- **Checkout Process**: Displays selected items and total amount before final checkout.  
- **Bootstrap-based UI**: Uses Bootstrap for styling and modal interactions.  

## Technologies Used  
- **HTML**  
- **CSS** (Bootstrap)  
- **JavaScript**  
- **LocalStorage** (for cart persistence)  

## How to Use  
1. Clone the repository or download the files.  
2. Open `index.html` in a browser.  

## Folder Structure  
```
/project-root  
│── /css              # Stylesheets  
│── /js               # JavaScript files  
│── /images           # Product images  
│── menu.json         # Menu data  
│── index.html        # Main website  
│── README.md         # Documentation  
```

## Menu JSON Format (`menu.json`)  
```json
{
  "food": [
    {
      "id": 1,
      "title": "Burger",
      "price": 50,
      "discountPrice": 45,
      "url": "images/burger.jpg",
      "symbol": "EGP"
    }
  ],
  "drinks": [
    {
      "id": 2,
      "title": "Cola",
      "price": 20,
      "url": "images/cola.jpg",
      "symbol": "EGP"
    }
  ]
}
```

## Future Enhancements  
- Add user authentication for personalized carts.  
- Implement a backend for real order processing.  
- Add payment gateway integration.  

## License  
This project is open-source and free to use under the MIT License.  

## Author  
[Samah Ali] – Developer  

