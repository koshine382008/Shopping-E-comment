// Products Data
const products = [
    { id: 1, name: "Premium Sneakers", category: "Footwear", price: 129.99, emoji: "👟", badge: "NEW" },
    { id: 2, name: "Designer Watch", category: "Accessories", price: 299.99, emoji: "⌚", badge: "SALE" },
    { id: 3, name: "Luxury Handbag", category: "Bags", price: 449.99, emoji: "👜", badge: "HOT" },
    { id: 4, name: "Stylish Sunglasses", category: "Accessories", price: 89.99, emoji: "🕶️", badge: "NEW" },
    { id: 5, name: "Leather Jacket", category: "Clothing", price: 399.99, emoji: "🧥", badge: "SALE" },
    { id: 6, name: "Casual T-Shirt", category: "Clothing", price: 39.99, emoji: "👕", badge: "HOT" },
    { id: 7, name: "Sport Shoes", category: "Footwear", price: 159.99, emoji: "👟", badge: "NEW" },
    { id: 8, name: "Elegant Dress", category: "Clothing", price: 179.99, emoji: "👗", badge: "SALE" },
];

let cart = 0;

// Render Products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <div class="product-badge">${product.badge}</div>
                ${product.emoji}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-price">$${product.price}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Add to Cart Function
function addToCart(productId) {
    cart++;
    document.getElementById('cartCount').textContent = cart;
    
    // Show notification
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initThemeToggle();
    initSmoothScroll();
});