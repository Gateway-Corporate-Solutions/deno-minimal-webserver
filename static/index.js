const demoBtn = document.getElementById('demo-btn');
const productsBtn = document.getElementById('products-btn');
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const closeMenu = document.getElementById('close-menu');

demoBtn?.addEventListener('click', () => {
    alert('Demo feature coming soon!');
});

productsBtn?.addEventListener('click', () => {
    alert('Product details coming soon!');
});

menuBtn?.addEventListener('click', () => {
    if (dropdownMenu) {
        dropdownMenu.classList.add('show');
    }
});

closeMenu?.addEventListener('click', () => {
    if (dropdownMenu) {
        dropdownMenu.classList.remove('show');
    }
});