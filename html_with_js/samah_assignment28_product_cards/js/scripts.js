let productCars = [
  {
    url: "https://vehicle-images.dealerinspire.com/stock-images/chrome/853ad3a8d349d85484ef8abc969c6222.png",
    title: "Mercedes-Benz AMG®",
    discountedPrice: "",
    price: "$200000.00",
    sale: false,
    reviewed:false,
  },
  {
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/168707/syros-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    title: "Kia Syros",
    discountedPrice: "$110000.00",
    price: "$150000.00",
    sale: true,
    reviewed:true,
  },
  {
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/114971/ev6-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    title: "Kia EV6",
    discountedPrice: "$100000.00",
    price: "$160000.00",
    sale: true,
    reviewed:false,
  },
  {
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144485/ev9-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    title: "Kia EV6",
    discountedPrice: "",
    price: "$200000.00",
    sale: false,
    reviewed:true,
  },
  {
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    title: "Kia Seltos",
    discountedPrice: "$510000.00",
    price: "$610000.00",
    sale: true,
    reviewed:false,
  },
  {
    url: "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9ehP9Q6FjcBXBUuXGEAaVJ0l5HNOB2CbjbApz7VI5ulf2QC3LSQkzNL6km7jaSthymI9WFyUcUfzAWXGE7rmJ0lp5AOB2utqbAp3cyI5uNWxQC3jn3kzNV3Km7jqvfhKVRLN%25vq3IdyLRNX6YaxjuhrH1VLtn8wqaxoiZg6oM4FSCuTg9tme6PDchmSeWXOutsdJ5DcUfvXkXGEHVSe%25ELqtsylzRcUSlRxXGtqW1J0cavwOBf3HZbA4uuFI5gx59QCP4mDkz9cjWm7DWudhKWHKf%25vDEvEyLUpElYaGZA2rH0Zfpn8Bl8uoi8fl3M4jQ0NTmCI82R0s5jCE%255hcYg9jP4HttU7RKeEPKVfv75Y5949JikhXHOiSGtKpPK=&imgt=P27&bkgnd=9&pov=BE040&uni=m&width=610&crop=",
    title: "G-Class",
    discountedPrice: "$8100000.00",
    price: "$8110000.00",
    sale: true,
    reviewed:false,
  },
];
const reviewDiv = `
    <div class="d-flex justify-content-center small text-warning mb-2">
        <div class="bi-star-fill"></div>
        <div class="bi-star-fill"></div>
        <div class="bi-star-fill"></div>
        <div class="bi-star-fill"></div>
        <div class="bi-star-fill"></div>
    </div>
`
let counter = 0;
document.addEventListener("DOMContentLoaded", () => {
    showProduct(productCars[0].url, productCars[0].price, productCars[0].discountedPrice);
    let cards = document.querySelector("div#card-content");
    const rows = Math.ceil(productCars.length / 4);
    for (let i = 0; i < rows; i++) {
        cards.innerHTML += `
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" id="card${i}">
            </div>
        `;
        let newProduct = productCars.length > 4 ? productCars.splice(0, 4) : productCars;
        let cardProduct = cards.querySelector(`#card${i}`);
        newProduct.forEach((element) => {
        const salesPadge = element.sale
            ? `
                <!-- Sale badge-->
                <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            `
            : "";
        const reviewedStar = element.reviewed ? reviewDiv : "";
        cardProduct.innerHTML += `
                <div class="col mb-5">
                    <div class="card h-100">
                        ${salesPadge}
                        <!-- Product image-->
                        <img class="card-img-top" src="${element.url}" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${element.title}</h5>
                                <!-- Product reviews-->
                                ${reviewedStar}
                                <!-- Product price-->
                                <span class="text-muted text-decoration-line-through">${element.discountedPrice}</span>

                                ${element.price}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                            <div class="text-center"><button class="btn btn-outline-primary mt-auto p-2" onclick="showProduct('${element.url}', '${element.price}', '${element.discountedPrice}');" title="View Details"><i class="bi-eye-fill mx-1"></i></button></div>
                            <div class="text-center"><button class="btn btn-outline-dark mt-auto p-2" onclick="addToCart();" title="Add to cart"><i class="bi-cart-fill mx-1"></i></button></div>

                        </div>
                    </div>
                </div>
            `;
        });
    }
});

const showProduct = (carImage, price, discount) => {
    document.querySelector("#inputQuantity").value = 1;
    document.querySelector("#carImage").setAttribute("src", carImage);
    document.querySelector("#price").innerHTML = price;
    document.querySelector("#discount").innerHTML = discount;
    // Scroll to the product details section smoothly
    document.querySelector("#productDetails").scrollIntoView({ behavior: "smooth" });
}
const addToCart = () => {
    counter ++;
    document.querySelector("#cart").innerHTML = counter;
}

document.querySelector("#inputQuantity").addEventListener("input", function(){
    counter += Number(this.value)
    document.querySelector("#cart").innerHTML = counter;
})