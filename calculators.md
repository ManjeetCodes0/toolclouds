---
layout: default
title: "All Calculators"
permalink: /calculators/
description: "Browse our comprehensive collection of free online calculators, organized by subcategory. Find tools for health, finance, mathematics, and more."
---

<style>
    /* --- FONT & CSS VARIABLES (should be consistent with your site) --- */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
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
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        scroll-behavior: smooth;
    }

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

    .page-header {
        text-align: center;
        margin-bottom: 50px;
    }
    
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
        /* For scroll animation */
        opacity: 0;
        transform: translateY(20px);
    }

    .tool-card.is-visible {
        opacity: 1;
        transform: translateY(0);
    }

    .tool-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-md);
    }

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

    .card-icon svg {
        width: 32px;
        height: 32px;
    }

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

    .tool-list a:hover {
        text-decoration: underline;
    }
</style>

<div class="page-container">
    <header class="page-header">
        <h1>Our Tools</h1>
        <p>A comprehensive collection of tools, organized by category.</p>
    </header>

    <main class="tools-grid">
        <article class="tool-card" style="transition-delay: 0ms;">
            <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h.75A.75.75 0 015.25 6v.75m0 0v-.75A.75.75 0 015.25 4.5h-.75m0 0h.75A.75.75 0 017.5 6v.75m0 0v-.75A.75.75 0 017.5 4.5h-.75m-4.5 0v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75V4.5m0 0h1.5m-1.5 0h.75m0 0h.75m-3 6l3-3m0 0l3 3m-3-3v12.75" /></svg>
            </div>
            <h2 class="card-title">Financial Calculators</h2>
            <p class="card-description">Calculate loans, mortgages, investments, and other financial metrics.</p>
            <hr class="card-separator">
            <ul class="tool-list">
                <li><a href="#">Loan Calculator</a></li>
                <li><a href="#">Mortgage Calculator</a></li>
                <li><a href="#">Compound Interest</a></li>
                <li><a href="#">ROI Calculator</a></li>
            </ul>
        </article>

        <article class="tool-card" style="transition-delay: 100ms;">
            <div class="card-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 class="card-title">Math Calculators</h2>
            <p class="card-description">Solve complex mathematical problems with our advanced calculators.</p>
            <hr class="card-separator">
            <ul class="tool-list">
                <li><a href="#">Scientific Calculator</a></li>
                <li><a href="#">Algebra Calculator</a></li>
                <li><a href="#">Geometry Calculator</a></li>
                <li><a href="#">Statistics Calculator</a></li>
            </ul>
        </article>

        <article class="tool-card" style="transition-delay: 200ms;">
            <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
            </div>
            <h2 class="card-title">Health & Fitness</h2>
            <p class="card-description">Monitor your health and fitness goals with these calculators.</p>
            <hr class="card-separator">
            <ul class="tool-list">
                {% assign health_tools = site.tools | where_exp:"item","item.categories contains 'health'" %}
                {% for tool in health_tools %}
                <li><a href="{{ tool.url | relative_url }}">{{ tool.localtitle }}</a></li>
                {% endfor %}
            </ul>

        </article>

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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M9.75 14.25h.008v.008H9.75v-.008zm3 0h.008v.008H12.75v-.008zm3 0h.008v.008H15.75v-.008z" /></svg>
            </div>
            <h2 class="card-title">Time & Date</h2>
            <p class="card-description">Calculate time differences, ages, and important dates with ease.</p>
            <hr class="card-separator">
            <ul class="tool-list">
                <li><a href="#">Age Calculator</a></li>
                <li><a href="#">Date Difference</a></li>
                <li><a href="#">Time Zone Converter</a></li>
                <li><a href="#">Stopwatch</a></li>
            </ul>
        </article>

        <article class="tool-card" style="transition-delay: 200ms;">
            <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.802H9.528a1.5 1.5 0 00-1.474 1.228L5.232 9.571a4.5 4.5 0 00-.12 1.03v.228c0 .377.068.75.197 1.111l1.428 3.571a4.5 4.5 0 004.243 3.097h1.414a4.5 4.5 0 004.243-3.097l1.428-3.571A4.5 4.5 0 0021.75 17.25z" /></svg>
            </div>
            <h2 class="card-title">Engineering Tools</h2>
            <p class="card-description">Professional calculators for various engineering applications.</p>
            <hr class="card-separator">
            <ul class="tool-list">
                <li><a href="#">Ohm's Law Calculator</a></li>
                <li><a href="#">Resistor Color Code</a></li>
                <li><a href="#">Voltage Divider</a></li>
                <li><a href="#">Capacitance Calculator</a></li>
            </ul>
        </article>
    </main>
</div>

<script>
    // This simple script adds a fade-in animation as cards scroll into view.
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
            }, {
                threshold: 0.1 // Trigger when 10% of the card is visible
            });

            cards.forEach(card => {
                observer.observe(card);
            });
        } else {
            // Fallback for older browsers
            cards.forEach(card => card.classList.add('is-visible'));
        }
    });
</script>