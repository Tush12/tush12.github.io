// Theme management
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const navMenu = document.getElementById('nav-menu');

// Check for saved theme preference or use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

// Set initial theme
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
} else {
    const initialTheme = prefersDarkScheme.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add transition effect
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
});

// Update theme icon
function updateThemeIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateThemeIcon(newTheme);
    }
});

// Add glassmorphic effect to elements on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const header = document.querySelector('header');
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Only adjust header transparency if not in mobile view
    if (window.innerWidth > 768) {
        if (scrolled > 50) {
            header.style.background = 'var(--glass-bg)';
            header.style.backdropFilter = 'blur(10px)';
            themeToggle.style.background = 'var(--glass-bg)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            themeToggle.style.background = 'transparent';
        }
    }
}); 