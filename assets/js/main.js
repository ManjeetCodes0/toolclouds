document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME TOGGLE LOGIC ---
    // Handles light/dark mode switching and saves the user's preference.
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    const setTheme = (theme) => {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    // --- 3. MOBILE NAVIGATION LOGIC ---
    // Uses your advanced script with updated element IDs.
    const navToggler = document.getElementById('nav-toggler');
    const mobileNav = document.getElementById('mobile-nav');
    const navClose = document.getElementById('nav-close');

    if (navToggler && mobileNav && navClose) {
        const openMobileNav = () => {
            navToggler.classList.add('active');
            mobileNav.classList.add('active');
            document.body.classList.add('nav-open');
        };
        
        const closeMobileNav = () => {
            navToggler.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.classList.remove('nav-open');
        };

        navToggler.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                closeMobileNav();
            } else {
                openMobileNav();
            }
        });

        navClose.addEventListener('click', closeMobileNav);

        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });
    }


    // --- 4. LIVE SEARCH FUNCTIONALITY ---
    const toolsData = [
        { "title": "BMI Calculator", "url": "#", "category": "calculators" },
        { "title": "Loan Calculator", "url": "#", "category": "calculators" },
        { "title": "Age Calculator", "url": "#", "category": "calculators" },
        { "title": "Percentage Calculator", "url": "#", "category": "calculators" },
        { "title": "Currency Converter", "url": "#", "category": "converters" },
        { "title": "Length Converter", "url": "#", "category": "converters" },
        { "title": "Weight Converter", "url": "#", "category": "converters" },
        { "title": "Temperature Converter", "url": "#", "category": "converters" },
        { "title": "Password Generator", "url": "#", "category": "generators" },
        { "title": "QR Code Generator", "url": "#", "category": "generators" },
        { "title": "Lorem Ipsum Generator", "url": "#", "category": "generators" },
        { "title": "UUID Generator", "url": "#", "category": "generators" }
    ];
    
    const searchInput = document.getElementById('toolSearch');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            searchResults.innerHTML = '';
            if (query.length > 1) {
                const filteredTools = toolsData.filter(tool => tool.title.toLowerCase().includes(query));
                if (filteredTools.length > 0) {
                    filteredTools.forEach(tool => {
                        const a = document.createElement('a');
                        a.href = tool.url; // Note: you'll want to update these URLs
                        a.textContent = tool.title;
                        searchResults.appendChild(a);
                    });
                    searchResults.style.display = 'block';
                } else {
                    searchResults.style.display = 'none';
                }
            } else {
                searchResults.style.display = 'none';
            }
        });
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }


    // --- 5. SCROLL ANIMATION (AOS) ---
    const animatedElements = document.querySelectorAll('[data-aos]');
    if (animatedElements.length > 0 && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }


    // --- 6. FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = 0;
                });
                
                // Open the clicked item if it wasn't already active
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });

});