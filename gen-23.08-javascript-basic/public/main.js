// Get the product image element
var productImage = document.querySelector('#carouselExampleControls img');

// Add a click event listener to the product image
productImage.addEventListener('click', function() {
    // Get the value of the 'data-href' attribute
    var nextPageUrl = productImage.getAttribute('data-href');

    // Navigate to the next page
    window.location.href = nextPageUrl;
});
// Function untuk kotak merah
function onClickKotakMerah() {
    console.log('Kotak Merah Diklik');
}

// Function untuk kotak putih
function onClickKotakPutih() {
    console.log('Kotak Putih Diklik');
}

// Function untuk kotak hitam
function onClickKotakHitam() {
    console.log('Kotak Hitam Diklik');
}

// Function untuk kotak S
function onClickKotakS() {
    console.log('Kotak S Diklik');
}

// Function untuk kotak M
function onClickKotakM() {
    console.log('Kotak M Diklik');
}

// Function untuk kotak L
function onClickKotakL() {
    console.log('Kotak L Diklik');
}

// Function untuk kotak XL
function onClickKotakXL() {
    console.log('Kotak XL Diklik');
}

// Function untuk kotak Go to cart
function onClickKotakCart() {
    console.log('Kotak Go to cart Diklik');
}

// Function untuk kotak Save
function onClickKotakSave() {
    console.log('Kotak Save Diklik');
}
