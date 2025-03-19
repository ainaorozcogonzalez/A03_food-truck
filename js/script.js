document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let user = document.getElementById('username').value;
    if (user) {
        document.getElementById('userWelcome').textContent = `Bienvenido ${user}`;
        document.getElementById('btnLogin').style.display = "none";
        document.getElementById('btnLogout').style.display = "inline-block";
        let modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
    }
});

document.getElementById('btnLogout').addEventListener('click', function() {
    document.getElementById('userWelcome').textContent = "Benvingut xxxxx";
    document.getElementById('btnLogin').style.display = "inline-block";
    document.getElementById('btnLogout').style.display = "none";
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Update breadcrumb dynamically
function updateBreadcrumb(path) {
    const breadcrumb = document.querySelector('.breadcrumb');
    breadcrumb.innerHTML = `
        <li class="breadcrumb-item"><a href="index.html">Inici</a></li>
        ${path.map(item => 
            `<li class="breadcrumb-item${item.active ? ' active' : ''}">${item.link ? `<a href="${item.link}">${item.text}</a>` : item.text}</li>`
        ).join('')}
    `;
}

// Carrusel functionality
const carousel = new bootstrap.Carousel('#carouselExample', {
    interval: 3000,
    wrap: true
});

// Update breadcrumb on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const breadcrumbMap = {
        'index.html': [{text: 'Inici', active: true}],
        'burger.html': [
            {text: 'Inici', link: 'index.html'},
            {text: 'Menjar', link: '#'},
            {text: 'Burger', active: true}
        ],
        // Add mappings for other pages
    };
    
    if (breadcrumbMap[currentPage]) {
        updateBreadcrumb(breadcrumbMap[currentPage]);
    }
});

// Handle pagination clicks
document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = this.href;
    });
});

// Añadir evento para cerrar el modal al cancelar
const cancelButton = document.querySelector('#loginModal .btn-secondary');
cancelButton.addEventListener('click', function() {
    let modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
});