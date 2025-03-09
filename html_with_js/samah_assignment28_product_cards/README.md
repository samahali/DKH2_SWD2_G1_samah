# Car Products Display and Cart System

## Description
This project is a simple car product display system with an interactive shopping cart. It dynamically renders car product cards, allowing users to view car details, add products to the cart, and adjust the quantity.

## Features
- Displays a list of car products with images, prices, and sale badges.
- Allows users to view product details.
- Includes a cart system that updates dynamically when items are added.
- Highlights products that are on sale.
- Shows review stars for reviewed products.

## Technologies Used
- HTML
- CSS (Bootstrap for styling)
- JavaScript (DOM manipulation)

## Installation & Usage
1. Clone the repository or download the files.
2. Open the `index.html` file in a browser.
3. Browse through the car products.
4. Click **View Options** to see details.
5. Click **Add to Cart** to increase the cart count.
6. Adjust quantity in the input field to update the cart.

## Code Overview
### JavaScript Functionality
- `productCars`: Array of car objects containing details like image, price, sale status, and review status.
- `showProduct(carImage, price, discount)`: Updates the main product view with selected car details.
- `addToCart()`: Increases the cart counter and updates the cart display.
- `document.addEventListener("DOMContentLoaded", ...)`: Dynamically generates product cards and displays them in rows.
- `document.querySelector("#inputQuantity").addEventListener("input", ...)`: Updates cart quantity when users adjust the input.

## Known Issues & Improvements
- The `productCars` array is modified using `splice()`, which removes elements permanently. This can be changed to avoid altering the original array.
- The cart count logic may need improvement to prevent incorrect values when updating the quantity input.
- Additional styling enhancements can improve the UI.


## Author
Samah Ali.

