const menu = {
  food: {
    pizza: [
      {
        id: 1,
        title: "Margherita pizza",
        url: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-4.jpg",
        price: "150",
        discountPrice: "100",
        symbol: "EGP",
      },
      {
        id: 2,
        title: "Pizza pepperoni with black olives",
        url: "https://www.ilovelindsay.com/assets/components/phpthumbof/cache/pizza-with-black-olives-and-pepperoni-small.f82724c758f5a7e1142cf0568b85d580.jpg",
        price: "200",
        discountPrice: "170",
        symbol: "EGP",
      },
      {
        id: 3,
        title: "Cheese pizza",
        url: "https://preppykitchen.com/wp-content/uploads/2021/10/Cheese-Pizza-Feature.jpg",
        price: "90",
        discountPrice: "75",
        symbol: "EGP",
      },
      {
        id: 4,
        title: "Greek Pizza",
        url: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2019/12/greek-pizza-21-001.jpg",
        price: "300",
        discountPrice: "",
        symbol: "EGP",
      },
      {
        id: 5,
        title: "Hawaiian-Pizza",
        url: "https://outgrilling.com/wp-content/uploads/2024/02/Easy-Hawaiian-Pizza-Recipe-Image-F.jpg",
        price: "250",
        discountPrice: "150",
        symbol: "EGP",
      },
      {
        id: 6,
        title: "Pizza capricciosa",
        url: "https://cdn.tasteatlas.com//images/dishes/6b28b438a3b64a7e9fca9081c89f07ff.jpg?width=800&height=513",
        price: "80",
        discountPrice: "",
        symbol: "EGP",
      },
    ],
    burger: [
      {
        id: 7,
        title: "Beef Burger",
        url: "https://www.unileverfoodsolutions.com.au/dam/global-ufs/mcos/ANZ/calcmenu/recipes/NZ-recipes/red-meats-&-red-meat-dishes/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing/main-header.jpg",
        price: "300",
        discountPrice: "",
        symbol: "EGP",
      },
      {
        id: 8,
        title: "Chicken Burger",
        url: "https://www.chicken.ca/wp-content/uploads/2022/11/Chicken-Burgers-1180x580.jpg",
        price: "150",
        discountPrice: "50",
        symbol: "EGP",
      },
      {
        id: 9,
        title: "Double Cheeseburger",
        url: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        price: "200",
        discountPrice: "150",
        symbol: "EGP",
      },
      {
        id: 10,
        title: "Vegan Burger",
        url: "https://www.wellplated.com/wp-content/uploads/2016/03/Black-Bean-Vegan-Burger-Recipe.jpg",
        price: "320",
        discountPrice: "300",
        symbol: "EGP",
      },
    ],
  },
  meals: {
    chicken: [
      {
        id: 11,
        title: "Grilled Chicken",
        url: "https://kristineskitchenblog.com/wp-content/uploads/2023/05/grilled-chicken-recipe-25-500x500.jpg",
        price: "280",
        discountPrice: "",
        symbol: "EGP",
      },
      {
        id: 12,
        title: "Fried Chicken",
        url: "https://www.allrecipes.com/thmb/q-IfK20zxeyp1DgKWhrVp6CQ43w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-89268-triple-dipped-fried-chicken-beauty-4x3-3961ac838ddd41958e7cb9f49376cd68.jpg",
        price: "500",
        discountPrice: "400",
        symbol: "EGP",
      },
      {
        id: 13,
        title: "Chicken Strips",
        url: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Fried-Chicken-Strips_EXPS_FT24_25184_JR_0301_1.jpg",
        price: "250",
        discountPrice: "140",
        symbol: "EGP",
      },
    ],
    meat: [
      {
        id: 14,
        title: "Steak",
        url: "https://res.cloudinary.com/perkchops/image/upload/v1625782636/product/202168/eqauhh0muxblbuvwithr.jpg",
        price: "500",
        discountPrice: "300",
        symbol: "EGP",
      },
      {
        id: 15,
        title: "Meatballs",
        url: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/02/Meatballs-6.jpg",
        price: "250",
        discountPrice: "100",
        symbol: "EGP",
      },
      {
        id: 16,
        title: "Grilled Beef",
        url: "https://www.expondo.co.uk/inspirations/wp-content/uploads/2021/08/grilled-steak.jpg",
        price: "450",
        discountPrice: "250",
        symbol: "EGP",
      },
    ],
  },
  drinks: {
    hot: [
      {
        id: 17,
        title: "Coffee",
        url: "https://etimg.etb2bimg.com/photo/113047605.cms",
        price: "70",
        discountPrice: "",
        symbol: "EGP",
      },
      {
        id: 18,
        title: "Tea",
        url: "https://www.aok.de/pk/magazin/cms/fileadmin/_processed_/3/b/csm_gruener-tee-gesund_d6b5a8aad4.jpg.webp",
        price: "50",
        discountPrice: "25",
        symbol: "EGP",
      },
      {
        id: 19,
        title: "Cappuccino",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvthhy8frIY2WeY4dgkTfGd9zzChCeVpv5zw&s",
        price: "50",
        discountPrice: "40",
        symbol: "EGP",
      },
      {
        id: 20,
        title: "Latte",
        url: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw2ca0aa66/images/recipe-Images/cafe-latte1-recipe.jpg?sw=1200&sh=630",
        price: "90",
        discountPrice: "70",
        symbol: "EGP",
      },
      {
        id: 21,
        title: "Espresso",
        url: "https://coffeebros.com/cdn/shop/articles/what-is-espresso.jpg?v=1710281243",
        price: "100",
        discountPrice: "75",
        symbol: "EGP",
      },
    ],
    cold: [
      {
        id: 22,
        title: "Iced Coffee",
        url: "https://mns.sidechef.com/recipe/34d9bf7f-6bfb-4e60-8301-726e5ac6509c.jpg",
        price: "190",
        discountPrice: "70",
        symbol: "EGP",
      },
      {
        id: 23,
        title: "Iced Tea",
        url: "https://s3.amazonaws.com/yummy_uploads2/blog/7482.jpg",
        price: "130",
        discountPrice: "110",
        symbol: "EGP",
      },
      {
        id: 24,
        title: "Soft Drinks",
        url: "https://cdn.britannica.com/33/206333-050-598A0208/sodas-plastic-cups-ice-straws.jpg",
        price: "200",
        discountPrice: "110",
        symbol: "EGP",
      },
      {
        id: 25,
        title: "Fresh Juices",
        url: "https://www.shutterstock.com/image-photo/pictures-natural-fresh-fruit-juice-260nw-2335482853.jpg",
        price: "170",
        discountPrice: "80",
        symbol: "EGP",
      },
      {
        id: 26,
        title: "Milkshakes",
        url: "https://cdn.tasteatlas.com/images/dishes/5291b5f2fcee42849cd84a03bff55e0a.jpg?m=facebook",
        price: "120",
        discountPrice: "50",
        symbol: "EGP",
      },
    ],
  },
};
let quantity = 0;
// change modal content
function openModal(productId) {
  // Get the modal body
  var modalBody = document.getElementById("modalBody");
  const product = findItemById(menu, productId);
  const price = product.discountPrice ? product.discountPrice : product.price;
  const productItem = JSON.stringify(product);
  // Update modal content based on productId
  if (modalBody) {
    modalBody.innerHTML = `
  <div class="text-center p-4" data-product='${productItem}'>
    <h5 class="fw-bold mb-4">${product.title}</h5>
    <img class="product-img rounded-circle mb-4" src="${product.url}">
    
    <div class="mb-4">
      <span class="fw-semibold d-block mb-2">Quantity</span>
      <div class="input-group justify-content-center w-50 mx-auto">
        <button class="btn btn-outline-gold btn-outline-gold-hover fw-bold" type="button" onclick="decreaseQuantity(${product.price}, ${product.discountPrice})">-</button>
        <input type="text" class="form-control text-center" value="1" id="quantity"
          oninput="this.value = this.value.replace(/[^0-9]/g, '')">
        <button class="btn btn-outline-gold btn-outline-gold-hover fw-bold" type="button" onclick="increaseQuantity(${product.price}, ${product.discountPrice})">+</button>
      </div>
    </div>

    <div class="mb-4">
      <span class="fw-semibold">Price:</span> 
      <span class="fw-semibold">${product.price} <small class="fw-semibold">EGP</small></span>
    </div>

    <div class="">
      <strong>Total:</strong> 
      <output id="totalPrice" class="fw-semibold text-gold">${price}</output> 
      <small class="fw-semibold">EGP</small>
    </div>`;
  }
}

function updateTotalPrice(quantity, productPrice, discountProductPrice) {
  // Determine the price to use
  const price = discountProductPrice
    ? parseFloat(discountProductPrice)
    : parseFloat(productPrice);
  const totalPriceElement = document.querySelector("output");

  // Calculate total price
  const totalPrice = quantity * price;

  // Update the total price display
  totalPriceElement.innerHTML = `${totalPrice}`;
}

function increaseQuantity(price, discountPrice) {
  const quantityInput = document.querySelector("#quantity");
  quantityInput.value = +quantityInput.value + 1;

  updateTotalPrice(quantityInput.value, price, discountPrice);
}

function decreaseQuantity(price, discountPrice) {
  const quantityInput = document.querySelector("#quantity");
  const currentValue = +quantityInput.value;
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
  updateTotalPrice(quantityInput.value, price, discountPrice);
}

function findItemById(menu, id) {
  return (
    Object.values(menu)
      .flatMap((category) => Object.values(category).flat())
      .find((item) => item.id === id) || null
  );
}

function checkoutModal() {
  // Close the first modal
  const cartModal = bootstrap.Modal.getInstance(
    document.getElementById("cartModalToggle")
  );
  cartModal.hide();

  // Open the second modal
  const checkoutModal = new bootstrap.Modal(
    document.getElementById("checkoutModal")
  );
  checkoutModal.show();
}

// Function to open the Checkout Modal
function openCheckoutModal() {
  const product = getProduct();
  if (product) {
    // Update the second modal's content with the product details
    checkoutModalBody(product);
    checkoutModal();
  } else {
    console.error("Product data not found.");
  }
}
const getProduct = () => {
  // Get the dynamically created element with the data-product attribute
  const productElement = document.querySelector(
    "#modalBody .text-center[data-product]"
  );
  let product = null;
  if (productElement) {
    // Retrieve the data-product attribute
    const productData = productElement.getAttribute("data-product");

    try {
      // Parse the JSON string back into an object
      product = JSON.parse(productData);
    } catch (error) {
      console.error("Invalid JSON in data-product:", productData, error);
    }
  }

  return product;
};

function continueShopping() {
  // Hide the first modal
  const cartModal = bootstrap.Modal.getInstance(
    document.getElementById("cartModalToggle")
  );
  cartModal.hide();

  // Get the selected product
  const product = getProduct();
  if (!product) {
    console.error("No product found.");
    return; // Stop execution if there's no product
  }

  // Update product properties
  product.totalPrice = document.querySelector("#totalPrice").textContent;
  product.quantity = document.querySelector("#quantity").value;

  // Retrieve products from localStorage
  let products = localStorage.getItem("products");
  products = products ? JSON.parse(products) : [];

  // Check if the product already exists in the cart
  const productIndex = products.findIndex((p) => p.id === product.id);
  if (productIndex !== -1) {
    // Update existing product
    products[productIndex].quantity = product.quantity;
    products[productIndex].totalPrice = product.totalPrice;
  } else {
    // Add new product
    products.push(product);
  }

  // Save updated products back to localStorage
  localStorage.setItem("products", JSON.stringify(products));
  updateCartQuantity();
}

function checkoutModalBody(product) {
  let products = localStorage.getItem("products");
  products = products ? JSON.parse(products) : [];

  // Update product details
  product.totalPrice = document.querySelector("#totalPrice").textContent;
  product.quantity = document.querySelector("#quantity").value;

  // Check if the product already exists in the cart
  const productIndex = products.findIndex((p) => p.id === product.id);
  if (productIndex !== -1) {
    // Update existing product
    products[productIndex].quantity = product.quantity;
    products[productIndex].totalPrice = product.totalPrice;
  } else {
    // Add new product
    products.push(product);
  }
  localStorage.setItem("products", JSON.stringify(products));
  // Calculate total price of all products
  const totalAmount = products.reduce(
    (sum, p) => sum + parseFloat(p.totalPrice),
    0
  );

  // Get the modal body
  const checkoutModalBody = document.getElementById("checkoutModalBody");
  checkoutModalBody.innerHTML = `<div class="container text-center"><h4 class="mb-3">You are about to checkout:</h4></div>`;

  // Create structured layout using Bootstrap
  products.forEach((selectedProduct) => {
    checkoutModalBody.innerHTML += `
          <div class="container text-center">
              <div class="row align-items-center border rounded p-3 shadow-sm">
                  <div class="col-md-4">
                      <img class="product-img img-fluid rounded-circle" src="${selectedProduct.url}" alt="${selectedProduct.title}">
                  </div>
                  <div class="col-md-8 text-start">
                      <h5 class="fw-bold">${selectedProduct.title}</h5>
                      <p class="mb-1"><strong>Price:</strong> ${selectedProduct.price} EGP</p>
                      <p class="mb-1"><strong>Quantity:</strong> ${selectedProduct.quantity}</p>
                      <p class="mb-1"><strong>Total Price:</strong> ${selectedProduct.totalPrice} EGP</p>
                  </div>
              </div>
          </div>
      `;
  });
  // Add total amount at the end of modal
  checkoutModalBody.innerHTML += `
    <hr>
    <div class="text-center">
        <h4 class="fw-bold">Total: ${totalAmount.toFixed(2)} EGP</h4>
    </div>
    `;
  document.querySelector("#modalfooterCheckout").innerHTML = `
    <!-- Discard Button (Return to First Modal) -->
    <button type="button" class="btn btn-outline-secondary" onclick="returnToCartModal();">Discard</button>
    <!-- Checkout Button (Close Both Modals) -->
    <button type="button" class="btn bg-gold bg-gold-hover text-dark fw-semibold" onclick="proceedToCheckout();">Checkout
    </button>
    `;
  updateCartQuantity();
}
function openCartModal() {
  let products = localStorage.getItem("products");
  products = products ? JSON.parse(products) : [];
  // Calculate total price of all products
  const totalAmount = products.reduce(
    (sum, p) => sum + parseFloat(p.totalPrice),
    0
  );

  // Get the modal body
  const checkoutModalBody = document.getElementById("checkoutModalBody");
  checkoutModalBody.innerHTML = `<div class="container text-center"><h4 class="mb-3">You are about to checkout:</h4></div>`;

  // Create structured layout using Bootstrap
  products.forEach((selectedProduct) => {
    checkoutModalBody.innerHTML += `
          <div class="container text-center">
              <div class="row align-items-center border rounded p-3 shadow-sm">
                  <div class="col-md-4">
                      <img class="product-img img-fluid rounded-circle" src="${selectedProduct.url}" alt="${selectedProduct.title}">
                  </div>
                  <div class="col-md-8 text-start">
                      <h5 class="fw-bold">${selectedProduct.title}</h5>
                      <p class="mb-1"><strong>Price:</strong> ${selectedProduct.price} EGP</p>
                      <p class="mb-1"><strong>Quantity:</strong> ${selectedProduct.quantity}</p>
                      <p class="mb-1"><strong>Total Price:</strong> ${selectedProduct.totalPrice} EGP</p>
                  </div>
              </div>
          </div>
      `;
  });
  // Add total amount at the end of modal
  checkoutModalBody.innerHTML += `
    <hr>
    <div class="text-center">
        <h4 class="fw-bold">Total: ${totalAmount.toFixed(2)} EGP</h4>
    </div>

    `;
  // add footer of modal
  document.querySelector("#modalfooterCheckout").innerHTML = `
      <button type="button" class="btn bg-gold bg-gold-hover text-dark fw-semibold" onclick="proceedToCheckout();">Checkout</button>
    `;
  // Open the second modal
  const checkoutModal = new bootstrap.Modal(
    document.getElementById("checkoutModal")
  );
  checkoutModal.show();
}
// Function to return to the Cart Modal
function returnToCartModal() {
  // Hide the second modal
  const checkoutModal = bootstrap.Modal.getInstance(
    document.getElementById("checkoutModal")
  );
  checkoutModal.hide();

  // Open the first modal
  const cartModal = new bootstrap.Modal(
    document.getElementById("cartModalToggle")
  );
  cartModal.show();
}

// Function to proceed to checkout (close both modals)
function proceedToCheckout() {
  // Close the second modal
  const checkoutModal = bootstrap.Modal.getInstance(
    document.getElementById("checkoutModal")
  );
  checkoutModal.hide();

  // Optionally, you can add logic here to handle the checkout process
  console.log("Proceeding to checkout...");
}
function updateCartQuantity() {
  // Update cart amount
  let products = localStorage.getItem("products");
  products = products ? JSON.parse(products) : [];
  console.log(products);

  // Ensure every product has a valid numeric quantity
  const totalQuantity = products.reduce((sum, p) => {
    const quantity = parseFloat(p.quantity) || 0; // Convert or default to 0
    return sum + quantity;
  }, 0);

  console.log("Total Quantity:", totalQuantity);
  document.querySelector("#cart").textContent = totalQuantity;
}
const menuItems = (items) => {
  let content = ``;
  items.forEach((element) => {
    const discount = element.discountPrice
      ? `
      <span class="fw-bold">
        <ins class="text-success">${element.discountPrice}</ins> <small>${element.symbol}</small>
      </span>
      `
      : "";
    const price = element.discountPrice
      ? `Price: <del class="text-danger">${element.price}</del> <small>${element.symbol}</small>`
      : `Price: <span>${element.price}</span> <small>${element.symbol}</small>`;
    content += `<div class="card">
          <div class="card-header">
            <img class="menuImage" src="${element.url}" alt="${element.title}">
          </div>
          <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p>
                <span class="fw-bold">
                  ${price}
                </span>
                ${discount}
              </p>
          </div>
          <div class="card-footer text-muted">
            <div class="d-flex">
              <!-- <button class="btn btn-outline-dark flex-shrink-0" onclick="addToCart();" type="button">
                  <i class="fa-solid fa-cart-plus"></i>
                  Add to cart
              </button> -->
              <a
                  id="${element.id}"
                  class="btn btn-outline-dark"
                  data-bs-toggle="modal"
                  href="#cartModalToggle"
                  role="button"
                  onclick="openModal(${element.id})"
                  ><i class="fa-solid fa-cart-plus"></i> Add to cart</a
              >
            </div>
          </div>
      </div>`;
  });
  return content;
};

const menuContent = (menuCategories) => {
  let content = ``;
  Object.entries(menuCategories).forEach(([key, value]) => {
    content += `
      <h3 class="text-capitalize my-5 text-center">${key}</h3>
      <div class="d-flex justify-content-center mx-auto gap-3 flex-wrap">
        ${menuItems(value)}
      </div>
      `;
  });
  return content;
};
document.addEventListener("DOMContentLoaded", function () {
  //Load menu food, drinks, meals
  Object.entries(menu).forEach(([key, value]) => {
    const classTab = key === "food" ? "show active" : "";
    document.querySelector(
      ".tab-content"
    ).innerHTML += `<div id="${key}"class="tab-pane fade ${classTab}">
    ${menuContent(value)}
    </div>`;
  });
  updateCartQuantity();
});
