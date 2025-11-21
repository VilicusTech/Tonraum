function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(item) {
    const cart = getCart();
    cart.push(item);
    saveCart(cart);
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadCartPage();
}

function goToCart() {
    window.location.href = "/PAGES/cart.html";
}