---
layout: default
title: "All Converters"
permalink: /converters/
description: "Browse our comprehensive collection of free online converters, organized by subcategory. Find tools for units, data formats, timezones, and more."
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
        <h1>All Converters</h1>
        <p>A comprehensive collection of tools, organized by category.</p>
    </header>

    <main class="tools-grid">
        <article class="tool-card" style="transition-delay: 0ms;">
            <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
            </div>
            <h2 class="card-title">Unit Converters</h2>
            <p class="card-description">Convert between different units of measurement, like length and weight.</p>
            <hr class="card-separator">
            <ul class="tool-list">
                <li><a href="#">Length Converter</a></li>
                <li><a href="#">Weight Converter</a></li>
                <li><a href="#">Temperature Converter</a></li>
                <li><a href="#">Area Converter</a></li>
            </ul>
        </article>

        <article class="tool-card" style="transition-delay: 100ms;">
            <div class="card-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
            </div>
            <h2 class="card-title">Currency Converters</h2>
            <p class="card-description">Get up-to-date exchange rates for hundreds of world currencies.</p>
            <hr class="card-separator">
            <ul class="tool-list">
                <li><a href="#">Live Exchange Rates</a></li>
                <li><a href="#">Historical Rates</a></li>
                <li><a href="#">Travel Calculator</a></li>
                <li><a href="#">Crypto Rates</a></li>
            </ul>
        </article>

        <article class="tool-card" style="transition-delay: 200ms;">
            <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25l-2.41 2.41a.75.75 0 01-1.06 0l-2.41-2.41M12 21V3M3 12h18" /></svg>
            </div>
            <h2 class="card-title">Data Converters</h2>
            <p class="card-description">Transform data between different formats, such as JSON, XML, and CSV.</p>
            <hr class="card-separator">
            <ul class="tool-list">
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