document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const productList = document.getElementById("product-list");

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== "") {
            fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
                .then(response => response.json())
                .then(data => {
                    displayProducts(data.products);
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    });

    function displayProducts(products) {
        productList.innerHTML = "";
        if (products.length === 0) {
            productList.innerHTML = "<p>Tidak ada produk yang ditemukan.</p>";
        } else {
            products.forEach(product => {
                const listItem = document.createElement("li");
                listItem.classList.add("product-item");
                listItem.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>Harga: $${product.price}</p>
                    <p>Rating: ${product.rating}</p>
                    <p>Stok: ${product.stock}</p>
                    <p>Merek: ${product.brand}</p>
                    <p>Kategori: ${product.category}</p>
                    <img src="${product.thumbnail}" alt="${product.title}">
                `;
                productList.appendChild(listItem);
            });
        }
    }
});

