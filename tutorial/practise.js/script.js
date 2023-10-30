const productContainer = document.getElementById("product-container");
const updateModal = document.getElementById('update-modal');
const updateForm = document.getElementById('update-form');
const titleInput = document.getElementById('title');
const priceInput = document.getElementById('price');
const descriptionInput = document.getElementById('description');

let products = [];

// Function to render product items
function renderProducts() {
    productContainer.innerHTML = '';
    products.forEach((product, index) => {
        const productBox = document.createElement('div');
        productBox.className = 'product-box';
        productBox.innerHTML = `
            <img class="product-image" src="${product.image}" alt="Product Image">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-category">Category: ${product.category}</p>
            <p class="product-price">Price: $${product.price}</p>
            <p class="product-description">${product.description}</p>
            <button class="update-button" data-index="${index}">Update</button>
        `;
        console.log(product)
        const updateButton = productBox.querySelector('.update-button');
        updateButton.addEventListener('click', () => {
            openUpdateModal(index);
        });

        productContainer.appendChild(productBox);
    });
}

// Event listener for "Update" button click
function openUpdateModal(index) {
    const product = products[index];
    console.log(product)
    titleInput.value = product.title;
    priceInput.value = product.price;
    descriptionInput.value = product.description;

    updateModal.style.display = 'block';

    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const updatedData = {
            title: titleInput.value,
            price: parseFloat(priceInput.value),
            description: descriptionInput.value,
        };

        updateProduct(product.id, updatedData)
            .then(() => {
                updateModal.style.display = 'none';
                products[index] = { ...product, ...updatedData };
                renderProducts();
            })
            .catch((error) => {
                console.error('Error updating product:', error);
            });
    });
}

// Simulated API update request (replace with your API endpoint)
 function updateProduct(productId, updatedData) {
    return  fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: 'PUT', // Use PUT or PATCH based on your API's requirements
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    });
}

// Initialize and render the product list
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        products = await response.json();
        renderProducts();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchProducts();
