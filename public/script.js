// Microsoft Security Technical Services - Frontend

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadServices();
    initNavbarScroll();
    initSmoothScroll();
});

// Icon mapping
const iconMap = {
    'shield-lock': 'bi-shield-lock-fill',
    'radar': 'bi-radar',
    'cloud-shield': 'bi-cloud-fill',
    'diagram-3': 'bi-diagram-3-fill',
    'code-square': 'bi-code-square',
    'eye': 'bi-eye-fill',
    'exclamation-triangle': 'bi-exclamation-triangle-fill',
    'clipboard-check': 'bi-clipboard-check-fill',
    'diagram-2': 'bi-diagram-2-fill',
    'sliders': 'bi-sliders'
};

// Load Products
async function loadProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '<div class="loading-spinner"></div>';

    try {
        const response = await fetch('/api/products');
        const products = await response.json();

        container.innerHTML = '';

        products.forEach((category, index) => {
            const card = createProductCard(category, index);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading products:', error);
        container.innerHTML = '<p class="error-message">Error loading products</p>';
    }
}

// Create Product Card
function createProductCard(category, index) {
    const card = document.createElement('div');
    card.className = `product-card fade-in delay-${(index % 4) + 1}`;

    const itemsHtml = category.items.map(item => `
        <div class="product-item ${item.highlight ? 'highlight' : ''}">
            <div class="name">
                ${item.highlight ? '<i class="bi bi-star-fill star"></i>' : ''}
                ${item.name}
            </div>
            <div class="description">${item.description}</div>
        </div>
    `).join('');

    card.innerHTML = `
        <div class="category-header">
            <div class="category-icon">
                <i class="bi ${iconMap[category.icon] || 'bi-shield'}"></i>
            </div>
            <h3 class="category-title">${category.category}</h3>
        </div>
        <div class="product-items">
            ${itemsHtml}
        </div>
    `;

    return card;
}

// Load Technical Services
async function loadServices() {
    const container = document.getElementById('services-container');
    container.innerHTML = '<div class="loading-spinner"></div>';

    try {
        const response = await fetch('/api/services');
        const serviceCategories = await response.json();

        container.innerHTML = '';

        serviceCategories.forEach((category, index) => {
            const section = createServiceCategory(category, index);
            container.appendChild(section);
        });
    } catch (error) {
        console.error('Error loading services:', error);
        container.innerHTML = '<p class="error-message">Error loading services</p>';
    }
}

// Create Service Category Section
function createServiceCategory(category, index) {
    const section = document.createElement('div');
    section.className = `service-category fade-in delay-${(index % 4) + 1}`;

    const servicesHtml = category.services.map(service => `
        <div class="service-card">
            <div class="service-header">
                <h4 class="service-name">${service.name}</h4>
                <p class="service-description">${service.description}</p>
            </div>
            <div class="deliverables">
                <div class="deliverables-label">Deliverables</div>
                <ul class="deliverables-list">
                    ${service.deliverables.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    section.innerHTML = `
        <div class="category-banner">
            <div class="category-icon-large">
                <i class="bi ${iconMap[category.icon] || 'bi-gear'}"></i>
            </div>
            <div class="category-info">
                <h3 class="category-name">${category.category}</h3>
                <p class="category-description">${category.description}</p>
            </div>
        </div>
        <div class="services-grid">
            ${servicesHtml}
        </div>
    `;

    return section;
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax effect for orbs
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 15;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});
