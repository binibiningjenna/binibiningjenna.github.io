var categories = [];
var products = [];
var total = 0;

const getAllCategories = async () => {
    fetch('http://localhost/Academic/binibiningjenna.github.io/ADET/A06/BE/categories.php')
        .then(response => response.json())
        .then(data => {
            categories = data;
            loadCategories();
            if (categories.length > 0) {
                getAllProducts(categories[0].category_id);
            }
        })
        .catch(error => console.error('Error fetching categories:', error));
}

const getAllProducts = async (category_id) => {
    const categoryData = {
        category_id: category_id
    };

    fetch('http://localhost/Academic/binibiningjenna.github.io/ADET/A06/BE/products.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {
            products = data;
            loadProducts();
        })
        .catch(error => console.error('Error fetching products:', error));
}

getAllCategories();

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");
    categoriesContainer.innerHTML = "";

    categories.forEach((category) => {
        const itemCount = category.product_count || 0;
        categoriesContainer.innerHTML +=
            `
            <div onclick="getAllProducts('` + category.category_id + `')" class="card-btn shadow p-3 flex-grow-1">
              <div class="d-flex flex-column align-items-center justify-content-center h-100">
                <span class="category-icon d-md-none"><i class="fas fa-book-open" style="color: var(--secondary-color)"></i></span>
                <div class="card-title mb-2 d-none d-md-block subheading">`+ category.name + `</div>
                <p class="mb-0 d-none d-md-block">` + itemCount + ` items</p>
                <span class="badge d-md-none" style="background-color: var(--primary-color)">` + itemCount + `</span>
              </div>
            </div>
          `;
    });
}

function loadProducts() {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products.forEach((product) => {
        maincontainer.innerHTML +=
            `<div onclick="addToReceipt('` + product.price + `','` + product.code + `')" class="col">
              <div class="card shadow-sm h-100">
                <img src="img/` + product.cover_image + `" class="card-img-top pt-3" style="height: 200px; object-fit: contain;" onerror="this.src='img/placeholder.jpg'">
                <div class="card-body">
                  <div class="badge position-absolute" style="background-color: var(--primary-color); top: 10px; right: 10px;">New</div>
                  <div class="subheading card-title" style="font-size:1rem;">` + product.title + `</div>
                  <div class=" h6 text-muted mb-3" style="font-size:0.9rem;">by ` + product.author + `</div>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="fw-bold">₱` + product.price + `</span>
                    <button class="cart-btn subheading py-1 px-2">
                      <i class="fa fa-cart-plus"></i> Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
    });
}

function findExistingItem(code) {
    var items = document.querySelectorAll("#receipt > div");
    for (var i = 0; i < items.length; i++) {
        if (items[i].querySelector(".h6").textContent.trim() === code) {
            return items[i].id;
        }
    }
    return null;
}

function addToReceipt(price, code) {
    var receiptContainer = document.getElementById("receipt");

    if (receiptContainer.innerHTML.includes("Thank you for shopping with us!")) {
        receiptContainer.innerHTML = "";
    }

    var existingId = findExistingItem(code);
    if (existingId) {
        updateQuantity(existingId, 1, price);
        return;
    }

    total = parseFloat(total) + parseFloat(price);

    var totalValueElement = document.getElementById("totalValue");
    if (totalValueElement) {
        totalValueElement.innerHTML = total.toFixed(2);
    }

    var itemId = 'cart-item-' + Date.now();

    receiptContainer.innerHTML +=
        `<div class="d-flex justify-content-between align-items-center py-2 border-bottom" id="` + itemId + `">
                <div class="w-40">
                    <div class="h6">` + code + `</div>
                </div>
                <div class="d-flex align-items-center">
                    <button class="cart-btn px-1 py-0" style="font-size:0.6rem;" onclick="updateQuantity('` + itemId + `', -1, ` + price + `)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="mx-2 quantity">1</span>
                    <button class="cart-btn px-1 py-0" style="font-size:0.6rem;" onclick="updateQuantity('` + itemId + `', 1, ` + price + `)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="text-end w-25">
                    <div class="fw-medium item-total">₱`+ parseFloat(price).toFixed(2) + `</div>
                </div>
                <div class="w-10 text-end">
                    <button class="btn btn-sm btn-outline-dark" onclick="removeItem('` + itemId + `', ` + price + `)">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>`;

    var checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
        checkoutBtn.disabled = false;
    }
}

function removeItem(itemId, price) {
    var itemElement = document.getElementById(itemId);
    var quantity = parseInt(itemElement.querySelector('.quantity').textContent);

    total = parseFloat(total) - (price * quantity);
    document.getElementById("totalValue").innerHTML = total.toFixed(2);

    itemElement.remove();
}

function updateQuantity(itemId, change, price) {
    var itemElement = document.getElementById(itemId);
    var quantityElement = itemElement.querySelector('.quantity');
    var itemTotalElement = itemElement.querySelector('.item-total');
    var totalValueElement = document.getElementById("totalValue");

    var currentQuantity = parseInt(quantityElement.textContent);
    var newQuantity = currentQuantity + change;

    if (newQuantity < 1) {
        removeItem(itemId, price);
        return;
    }

    quantityElement.textContent = newQuantity;

    var priceDifference = change * price;
    total = parseFloat(total) + priceDifference;
    totalValueElement.innerHTML = total.toFixed(2);

    var newItemTotal = newQuantity * price;
    itemTotalElement.innerHTML = '₱' + newItemTotal.toFixed(2);
}

function checkOut() {
    var receipt = document.getElementById("receipt");
    receipt.innerHTML = "";
    total = 0;
    document.getElementById("totalValue").innerHTML = "0.00";
    receipt.innerHTML = `
            <div class='p-3 text-center'>
                <div class="h6">Thank you for shopping with us!</div>
            </div>
        `;
}
