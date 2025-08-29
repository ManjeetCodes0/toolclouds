---
layout: default
title: "All Generators"
permalink: /generators/
description: "Browse our comprehensive collection of free online generators, organized by subcategory. Find tools for passwords, data, text, and more."
---

<div class="clp-page-container">
    <header class="clp-page-header">
        <h1>All Generators</h1>
        <p>A comprehensive collection of tools, organized by category.</p>
    </header>

    <main class="clp-tools-grid">
        <article class="clp-tool-card" style="transition-delay: 0ms;">
            <div class="clp-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <h2 class="clp-card-title">Security Generators</h2>
            <p class="clp-card-description">Create strong passwords, hashes, and other security-related data.</p>
            <hr class="clp-card-separator">
            <ul class="clp-tool-list">
                <li><a href="#">Password Generator</a></li>
                <li><a href="#">UUID Generator</a></li>
                <li><a href="#">MD5 Hash Generator</a></li>
                <li><a href="#">HMAC Generator</a></li>
            </ul>
        </article>

        <article class="clp-tool-card" style="transition-delay: 100ms;">
            <div class="clp-card-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </div>
            <h2 class="clp-card-title">Text & Data Generators</h2>
            <p class="clp-card-description">Generate dummy text, random numbers, and other placeholder content.</p>
            <hr class="clp-card-separator">
            <ul class="clp-tool-list">
                <li><a href="#">Lorem Ipsum Generator</a></li>
                <li><a href="#">Random Name Generator</a></li>
                <li><a href="#">Dummy Data Generator</a></li>
                <li><a href="#">Credit Card Generator</a></li>
            </ul>
        </article>

        <article class="clp-tool-card" style="transition-delay: 200ms;">
            <div class="clp-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" /></svg>
            </div>
            <h2 class="clp-card-title">Code & Image Generators</h2>
            <p class="clp-card-description">Create useful assets like QR codes, barcodes, and color palettes.</p>
            <hr class="clp-card-separator">
            <ul class="clp-tool-list">
                <li><a href="#">QR Code Generator</a></li>
                <li><a href="#">Barcode Generator</a></li>
                <li><a href="#">Color Palette Generator</a></li>
                <li><a href="#">CSS Gradient Generator</a></li>
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