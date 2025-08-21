---
layout: default
title: "All Generators"
permalink: /generators/
description: "Browse our comprehensive collection of free online generators, organized by subcategory. Find tools for passwords, data, text, and more."
---

<style>
    /* --- CSS VARIABLES --- */
    :root {
        --color-primary: #377DFF; /* A vibrant, link-friendly blue */
        --color-heading: #1A202C;
        --color-body-text: #718096; /* Lighter gray for descriptions */
        --color-background: #F8F9FB; /* Light gray page background */
        --color-white: #FFFFFF;
        --color-border: #E2E8F0;
        --shadow-md: 0 8px 25px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --font-family: 'Poppins', sans-serif;
        --border-radius: 16px;
        --container-width: 1200px;
    }

    /* --- BASE STYLES --- */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
        font-family: var(--font-family);
        background-color: var(--color-background);
        color: var(--color-body-text);
        line-height: 1.6;
    }

    /* --- LAYOUT & TYPOGRAPHY --- */
    .page-container {
        max-width: var(--container-width);
        margin: 0 auto;
        padding: 60px 20px;
    }
    .page-header { text-align: center; margin-bottom: 50px; }
    .page-header h1 {
        font-size: 2.75rem;
        color: var(--color-heading);
        margin-bottom: 1rem;
    }
    .page-header p {
        font-size: 1.1rem;
        color: var(--color-body-text);
    }

    /* --- GRID CONTAINER --- */
    .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 30px;
    }

    /* --- TOOL CARD STYLING --- */
    .tool-card {
        background-color: var(--color-white);
        border-radius: var(--border-radius);
        padding: 40px 30px;
        border: 1px solid var(--color-border);
        box-shadow: 0 4px 6px rgba(226,232,240, 0.6);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-align: center;
        opacity: 0;
        transform: translateY(20px);
    }
    .tool-card.is-visible { opacity: 1; transform: translateY(0); }
    .tool-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
    .card-icon {
        margin: 0 auto 20px auto;
        width: 64px;
        height: 64px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background-image: linear-gradient(145deg, #7F56D9 0%, #5A67D8 100%);
        color: var(--color-white);
        box-shadow: 0 8px 16px rgba(90, 103, 216, 0.25);
    }
    .card-icon svg { width: 32px; height: 32px; }
    .card-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--color-heading);
        margin: 0 0 10px 0;
    }
    .card-description {
        color: var(--color-body-text);
        font-size: 0.95rem;
        margin-bottom: 25px;
    }
    .card-separator {
        border: none;
        height: 1px;
        background-color: var(--color-border);
        margin: 0 auto 25px auto;
    }
    .tool-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .tool-list a {
        color: var(--color-primary);
        text-decoration: none;
        font-weight: 500;
        transition: text-decoration 0.2s ease;
    }
    .tool-list a:hover { text-decoration: underline; }
</style>

<div class="page-container">
    <header class="page-header">
        <h1>All Generators</h1>
        <p>A comprehensive collection of tools, organized by category.</p>
    </header>

    <main class="tools-grid">
        <article class="tool-card" style="transition-delay: 0ms;">
            <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <h2 class="card-title">Security Generators</h2>
            <p class="card-description">Create strong passwords, hashes, and other security-related data.</p>
            <hr class="card-separator">
            <ul class="tool-list">
                <li><a href="#">Password Generator</a></li>
                <li><a href="#">UUID Generator</a></li>
                <li><a href="#">MD5 Hash Generator</a></li>
                <li><a href="#">HMAC Generator</a></li>
            </ul>
        </article>

        <article class="tool-card" style="transition-delay: 100ms;">
            <div class="card-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </div>
            <h2 class="card-title">Text & Data Generators</h2>
            <p class="card-description">Generate dummy text, random numbers, and other placeholder content.</p>
            <hr class="card-separator">
            <ul class="tool-list">
                <li><a href="#">Lorem Ipsum Generator</a></li>
                <li><a href="#">Random Name Generator</a></li>
                <li><a href="#">Dummy Data Generator</a></li>
                <li><a href="#">Credit Card Generator</a></li>
            </ul>
        </article>

        <article class="tool-card" style="transition-delay: 200ms;">
            <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" /></svg>
            </div>
            <h2 class="card-title">Code & Image Generators</h2>
            <p class="card-description">Create useful assets like QR codes, barcodes, and color palettes.</p>
            <hr class="card-separator">
            <ul class="tool-list">
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
        const cards = document.querySelectorAll('.tool-card');
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