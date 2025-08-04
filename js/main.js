         // Initialize tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // Navbar scroll effects
        let lastScrollTop = 0;
        const navbar = document.getElementById('mainNavbar');
     
        
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    const logo = document.getElementById("navbarLogo");
    
    // Check if it's mobile device (screen width <= 991px)
    const isMobile = window.innerWidth <= 991;
    
    // Set different scroll thresholds for mobile and desktop
    const scrollThreshold = isMobile ? 10 : 20;
    
    if (window.scrollY > scrollThreshold) {
        // Add scrolled class to navbar
        navbar.classList.add("scrolled");
        
        // Show logo for both mobile and desktop
        logo.classList.remove("d-none");
        logo.classList.add("d-flex"); // Ensure it displays as flex
        
        // Add smooth appearance animation
        logo.style.opacity = "1";
        logo.style.transform = "translateY(0)";
        
    } else {
        // Remove scrolled class
        navbar.classList.remove("scrolled");
        
        // Hide logo for both mobile and desktop
        logo.classList.add("d-none");
        logo.classList.remove("d-flex");
        
        // Reset animation properties
        logo.style.opacity = "0";
        logo.style.transform = "translateY(-10px)";
    }
});

// Handle window resize to update mobile detection
window.addEventListener("resize", function() {
    const navbar = document.getElementById("mainNavbar");
    const logo = document.getElementById("navbarLogo");
    const isMobile = window.innerWidth <= 991;
    const scrollThreshold = isMobile ? 30 : 50;
    
    // Re-evaluate scroll state after resize
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add("scrolled");
        logo.classList.remove("d-none");
        logo.classList.add("d-flex");
        logo.style.opacity = "1";
        logo.style.transform = "translateY(0)";
    } else {
        navbar.classList.remove("scrolled");
        logo.classList.add("d-none");
        logo.classList.remove("d-flex");
        logo.style.opacity = "0";
        logo.style.transform = "translateY(-10px)";
    }
});
        // Active link management
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                if (!this.classList.contains('dropdown-toggle')) {
                    this.classList.add('active');
                }
            });
        });

        // Close mobile menu when clicking on a link
        const navbarCollapse = document.getElementById('navbarNav');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(navbarCollapse).hide();
                }
            });
        });
 document.addEventListener('DOMContentLoaded', function() {
    // Get all carousel elements
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const carouselInner = carousel.querySelector('.carousel-inner');
        const carouselInstance = new bootstrap.Carousel(carousel);
        
        let isDragging = false;
        let startX = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        
        // Add drag functionality
        carouselInner.addEventListener('mousedown', dragStart);
        carouselInner.addEventListener('mousemove', dragMove);
        carouselInner.addEventListener('mouseup', dragEnd);
        carouselInner.addEventListener('mouseleave', dragEnd);
        
        // Touch events for mobile
        carouselInner.addEventListener('touchstart', dragStart);
        carouselInner.addEventListener('touchmove', dragMove);
        carouselInner.addEventListener('touchend', dragEnd);
        
        function dragStart(e) {
            isDragging = true;
            carousel.classList.add('dragging');
            startX = getPositionX(e);
            carouselInstance.pause();
            e.preventDefault();
        }
        
        function dragMove(e) {
            if (!isDragging) return;
            
            const currentPosition = getPositionX(e);
            const diff = currentPosition - startX;
            const resistance = 0.7;
            currentTranslate = prevTranslate + (diff * resistance);
            
            carouselInner.style.transform = `translateX(${currentTranslate}px)`;
        }
        
        function dragEnd(e) {
            if (!isDragging) return;
            
            isDragging = false;
            carousel.classList.remove('dragging');
            
            const movedBy = currentTranslate - prevTranslate;
            const threshold = 50;
            
            carouselInner.style.transform = '';
            
            if (Math.abs(movedBy) > threshold) {
                if (movedBy < 0) {
                    carouselInstance.next();
                } else {
                    carouselInstance.prev();
                }
            }
            
            currentTranslate = 0;
            prevTranslate = 0;
            
            setTimeout(() => {
                carouselInstance.cycle();
            }, 3000);
        }
        
        function getPositionX(e) {
            return e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        }
        
        // Pause carousel on hover
        carousel.addEventListener('mouseenter', () => {
            carouselInstance.pause();
        });
        
        carousel.addEventListener('mouseleave', () => {
            if (!isDragging) {
                carouselInstance.cycle();
            }
        });
    });
    
    // Keyboard navigation (works for currently visible carousel)
    document.addEventListener('keydown', function(e) {
        const visibleCarousel = document.querySelector('.carousel:not(.d-none)');
        if (visibleCarousel) {
            const carouselInstance = bootstrap.Carousel.getInstance(visibleCarousel);
            if (e.key === 'ArrowLeft') {
                carouselInstance.prev();
            } else if (e.key === 'ArrowRight') {
                carouselInstance.next();
            }
        }
    });
    
    // Add hover effects to screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        screen.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});