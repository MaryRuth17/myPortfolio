// Wait for page to load

window.addEventListener('load', function() {
    // Hide loading animation
    document.getElementById('loading').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 500);
    
    // Initialize other functionality
    initRatingSystem();
    initScrollToTop();
    addFloatingPixels();
});

// Rating system functionality
function initRatingSystem() {
    const stars = document.querySelectorAll('.rating input');
    const ratingValue = document.getElementById('rating-value');
    
    stars.forEach(star => {
        star.addEventListener('change', function() {
            const value = this.value;
            ratingValue.textContent = `Your rating: ${value} star${value > 1 ? 's' : ''}`;
            
            // In a real application, you would send this rating to a server
            // For now, we'll just store it in local storage
            localStorage.setItem('portfolio-rating', value);
        });
    });
    
    // Check if user has already rated
    const savedRating = localStorage.getItem('portfolio-rating');
    if (savedRating) {
        document.getElementById(`star-${savedRating}`).checked = true;
        ratingValue.textContent = `Your rating: ${savedRating} star${savedRating > 1 ? 's' : ''}`;
    }
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollButton = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add floating pixels for decoration
function addFloatingPixels() {
    const colors = ['#FF3E9D', '#8B0040', '#FFEE00', '#00FF99'];
    const body = document.querySelector('body');
    
    for (let i = 0; i < 15; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.textContent = '■';
        pixel.style.color = colors[Math.floor(Math.random() * colors.length)];
        pixel.style.left = `${Math.random() * 100}%`;
        pixel.style.top = `${Math.random() * 100}%`;
        pixel.style.animationDelay = `${Math.random() * 5}s`;
        
        body.appendChild(pixel);
    }
}