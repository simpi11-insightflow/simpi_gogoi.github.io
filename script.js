// Target Document Elements for State Toggling
const themeToggleBtn = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');

// Evaluate Local Storage Options Upon Initialization
const savedTheme = localStorage.getItem('cute-bootstrap-theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleIcon.classList.replace('bx-star', 'bx-moon'); 
} else {
    toggleIcon.classList.add('bx-star');
}

// Global Event Registration for Theme Transition Execution
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    let themeMode = 'light';
    if (document.body.classList.contains('dark-theme')) {
        themeMode = 'dark';
        toggleIcon.classList.replace('bx-star', 'bx-moon'); 
    } else {
        toggleIcon.classList.replace('bx-moon', 'bx-star');
    }
    
    localStorage.setItem('cute-bootstrap-theme', themeMode);
});

// Auto-close Bootstrap mobile menu dropdown when an option link is selected
const navLinks = document.querySelectorAll('.nav-links .nav-link');
const menuDropdown = document.getElementById('portfolioNav');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only trigger collapse closure if menu dropdown container is currently revealed
        if (menuDropdown.classList.contains('show')) {
            const bootstrapCollapseInstance = bootstrap.Collapse.getInstance(menuDropdown);
            if (bootstrapCollapseInstance) {
                bootstrapCollapseInstance.hide();
            }
        }
    });
});

// Scroll Boundary Header Shadows Adjustment
window.addEventListener('scroll', () => {
    const navbarHeader = document.querySelector('.main-nav');
    if (window.scrollY > 40) {
        navbarHeader.style.boxShadow = '0 8px 25px var(--card-shadow)';
    } else {
        navbarHeader.style.boxShadow = 'none';
    }
});