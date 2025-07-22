 
        function handleCTAClick(event, type) {
            event.preventDefault();
            if (type === 'start') {
                alert('مرحباً بك! سنتواصل معك قريباً لبدء رحلتك معنا');
            } else {
                alert('سنعرض لك تفاصيل خدماتنا المتميزة');
            }
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            // Observe all fade-in elements
            document.querySelectorAll('.fade-in-up').forEach(el => {
                observer.observe(el);
            });

            // Smooth scrolling for scroll indicator
            document.querySelector('.scroll-indicator').addEventListener('click', () => {
                document.querySelector('.content-section').scrollIntoView({
                    behavior: 'smooth'
                });
            });

            // Parallax effect for hero decoration
            document.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const decoration = document.querySelector('.title-decoration');
                if (decoration) {
                    decoration.style.transform = `translate(-50%, -50%) rotate(${scrolled * 0.1}deg)`;
                }
            });
        });
    