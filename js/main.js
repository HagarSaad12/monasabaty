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
    const scrollThreshold = isMobile ? 30 : 50;
    
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
