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
// @media (min-width:314px) and (max-width: 389px) {
//         #downloadApp .phone-section {
    
//     padding: 0px 0px;
//     overflow: hidden;
// }    
//        .twoPhoneImg {
//         width: 658px;
//         left: -25px;
//         top: 10px;
//     } 
     
//  .dashed-line-2 {
//     width: 300px;
//     height: 300px;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// }
//     .icon-dollar-1 {
//         top: 19%;
//         left: 48%;
//     }

//  .icon-chart {
//         top: 50%;
//         right: 4%;
//     }
 
//          .icon-dollar-2 {
//         bottom: 15%;
//         left: 50%;
//     }
//         .icon-growth {
//         top: 50%;
//         left: 3%;
//     }
//   }
//   @media (width:390px){
//         .twoPhoneImg {
//         width: 658px;
//         left: -15px;
//         top: 10px;
//     }
//      #downloadApp .phone-section {
    
//     padding: 0px 0px;
//     overflow: hidden;
// }    
      
     
//  .dashed-line-2 {
//     width: 300px;
//     height: 300px;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// }
//          .icon-dollar-1 {
//         top: 16%;
//         left: 43%;
//     }
//         .icon-chart {
//         top: 50%;
//         right: 3%;
//     }
//         .icon-dollar-2 {
//         bottom: 9%;
//         left: 45%;
//     }
//         .icon-growth {
//         top: 50%;
//         left: 3%;
//     }
//   }
//   @media (min-width:412px) and (max-width:539px){
//         #downloadApp .phone-section {
    
//     padding: 0px 0px;
//     overflow: hidden;
// }    
//             .twoPhoneImg {
//         width: 658px;
//         left: 1px;
//         top: 10px;
//     }
     
//  .dashed-line-2 {
//     width: 300px;
//     height: 300px;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// }
//          .icon-dollar-1 {
//         top: 16%;
//         left: 48%;
//     }

//       .icon-chart {
//         top: 50%;
//         right: 2%;
//     }
 
//              .icon-dollar-2 {
//         bottom: 12%;
//         left: 50%;
//     }
//             .icon-growth {
//         top: 50%;
//         left: 2%;
//     }
//   }
//   @media (min-width:540px) and (max-width:767px){
//         #downloadApp .phone-section {
    
//     padding: 0px 0px;
//     overflow: hidden;
// }    
//              .twoPhoneImg {
//         width: 806px;
//         left: 24px;
//         top: -42px;
//     }
//       .dashed-line-2 {
//         width: 350px;
//         height: 350px;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//     }
//         .icon-dollar-1 {
//         top: 13%;
//         left: 48%;
//     }

//       .icon-chart {
//         top: 50%;
//         right: 12%;
//     }
 
//           .icon-dollar-2 {
//         bottom: 9%;
//         left: 50%;
//     }
//             .icon-growth {
//         top: 50%;
//         left: 12%;
//     }
//   }
   
//   @media (min-width: 1919px) {
//     .dashed-line-2 {
//       width: 600px;
//       height: 600px;
//     }

//     .twoPhoneImg {
//       width: 1400px;
//       left: 27px;
//     }

//     .icon-dollar-1 {
//       top: 3%;
//       left: 50%;
//     }

//     .icon-chart {
//       top: 50%;
//       right: 16%;
//     }

//     .icon-growth {
//       top: 50%;
//       left: 16%;
//     }

//     .icon-dollar-2 {

//       bottom: 0%;

//     }
//   }
//   @media (min-width: 2560px) {
//         .dashed-line-2 {
//         width: 700px;
//         height: 700px;
//     }
//         .twoPhoneImg {
//         width: 1550px;
//         left: 132px;
//     }
//     .dashed-line {
//     position: absolute;
//     border: 5px dashed rgba(0, 0, 0, 0.5);
//     border-radius: 50%;
//     animation: rotate 20s linear infinite;
// }
//     .icon-dollar-1 {
//         top: 5%;
//         left: 50%;
//     }
//         .icon-chart {
//         top: 50%;
//         right: 20%;
//     }
//         .icon-dollar-2 {
//         bottom: 3%;
//     }
//         .icon-growth {
//         top: 50%;
//         left: 21%;
//     }

//   }