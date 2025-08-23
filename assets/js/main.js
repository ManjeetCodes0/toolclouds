// navbar Sricpt
// for mobile toggle

document.addEventListener('DOMContentLoaded', () => {
            const navToggler = document.getElementById('js-nav-toggler');
            const mobileNav = document.getElementById('js-mobile-nav');

            if (navToggler && mobileNav) {
                navToggler.addEventListener('click', () => {
                    navToggler.classList.toggle('active');
                    mobileNav.classList.toggle('active');
                    document.body.classList.toggle('nav-open');
                });

                const mobileLinks = document.querySelectorAll('.mobile-nav-link');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        navToggler.classList.remove('active');
                        mobileNav.classList.remove('active');
                        document.body.classList.remove('nav-open');
                    });
                });
            }
});





// Index page JS



// Hardcoded data for the search bar
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

document.addEventListener('DOMContentLoaded', () => {
    // --- LIVE SEARCH FUNCTIONALITY ---
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
                        a.href = tool.url;
                        a.textContent = tool.title;
                        searchResults.appendChild(a);
                    });
                    searchResults.style.display = 'block';
                } else { searchResults.style.display = 'none'; }
            } else { searchResults.style.display = 'none'; }
        });
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target)) { searchResults.style.display = 'none'; }
        });
    }

    // --- SCROLL ANIMATION ---
    const animatedElements = document.querySelectorAll('[data-aos]');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { entry.target.classList.add('aos-animate'); }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => {
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
    }

    // --- FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = 0;
            });
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});




