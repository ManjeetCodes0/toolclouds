---
layout: default
title: "All Converters"
permalink: /converters/
description: "Browse our comprehensive collection of free online converters, organized by subcategory. Find tools for units, data formats, timezones, and more."
---

<div class="clp-page-container">
    <header class="clp-page-header">
        <h1>All Converters</h1>
        <p>A comprehensive collection of tools, organized by category.</p>
    </header>

    <main class="clp-tools-grid">
        <article class="clp-tool-card" style="transition-delay: 0ms;">
            <div class="clp-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
            </div>
            <h2 class="clp-card-title">Unit Converters</h2>
            <p class="clp-card-description">Convert between different units of measurement, like length and weight.</p>
            <hr class="clp-card-separator">
            <ul class="clp-tool-list">
                <li><a href="#">Length Converter</a></li>
                <li><a href="#">Weight Converter</a></li>
                <li><a href="#">Temperature Converter</a></li>
                <li><a href="#">Area Converter</a></li>
            </ul>
        </article>

        <article class="clp-tool-card" style="transition-delay: 100ms;">
            <div class="clp-card-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
            </div>
            <h2 class="clp-card-title">Currency Converters</h2>
            <p class="clp-card-description">Get up-to-date exchange rates for hundreds of world currencies.</p>
            <hr class="clp-card-separator">
            <ul class="clp-tool-list">
                <li><a href="#">Live Exchange Rates</a></li>
                <li><a href="#">Historical Rates</a></li>
                <li><a href="#">Travel Calculator</a></li>
                <li><a href="#">Crypto Rates</a></li>
            </ul>
        </article>

        <article class="clp-tool-card" style="transition-delay: 200ms;">
            <div class="clp-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25l-2.41 2.41a.75.75 0 01-1.06 0l-2.41-2.41M12 21V3M3 12h18" /></svg>
            </div>
            <h2 class="clp-card-title">Data Converters</h2>
            <p class="clp-card-description">Transform data between different formats, such as JSON, XML, and CSV.</p>
            <hr class="clp-card-separator">
            <ul class="clp-tool-list">
                <li><a href="#">JSON to CSV</a></li>
                <li><a href="#">XML to JSON</a></li>
                <li><a href="#">Base64 Encoder</a></li>
                <li><a href="#">URL Decoder</a></li>
            </ul>
        </article>
    </main>
</div>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        const cards = document.querySelectorAll('.clp-tool-card');
        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            cards.forEach(card => { observer.observe(card); });
        } else {
            cards.forEach(card => card.classList.add('is-visible'));
        }
    });
</script>