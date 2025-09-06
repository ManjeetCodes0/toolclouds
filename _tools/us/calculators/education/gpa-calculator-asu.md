---
title: "ASU GPA Calculator - Arizona State University Grade Calculator"
localtitle: "ASU GPA Calculator"
layout: tool
categories: [calculators-US, education-US]
permalink: /us/calculators/education/gpa-calculator-asu
description: "Calculate your ASU GPA instantly with our free Arizona State University grade calculator. Track Sun Devil semester & cumulative GPA using the official ASU grading scale with A+ through E grades."
lang: en-US
region: US
tags:
  - "gpa calculator asu"
  - "asu gpa calculator"
  - "arizona state university gpa"
  - "asu grading scale"
  - "sun devil gpa"
  - "asu grade calculator"
  - "tempe gpa calculator"
  - "asu cumulative gpa"
  - "my asu gpa"
  - "asu gpa requirements"
  - "arizona state grades"
  - "asu academic standing"
schema:
  "@context": "https://schema.org"
  "@type": "WebApplication"
  "name": "ASU GPA Calculator"
  "url": "https://toolsclouds.com/us/calculators/education/gpa-calculator-asu"
  "description": "Calculate your Arizona State University GPA using the official ASU grading scale"
  "applicationCategory": "EducationalApplication"
  "operatingSystem": "Any"
  "offers":
    "@type": "Offer"
    "price": "0"
    "priceCurrency": "USD"
faq_schema:
  "@context": "https://schema.org"
  "@type": "FAQPage"
  "mainEntity":
    - "@type": "Question"
      "name": "What is the ASU grading scale?"
      "acceptedAnswer":
        "@type": "Answer"
        "text": "ASU uses: A+ and A = 4.0, A- = 3.67, B+ = 3.33, B = 3.0, B- = 2.67, C+ = 2.33, C = 2.0, D = 1.0, E = 0.0 (ASU uses E instead of F)"
    - "@type": "Question"
      "name": "What GPA do I need for ASU Dean's List?"
      "acceptedAnswer":
        "@type": "Answer"
        "text": "You need a 3.5 GPA with at least 12 graded semester hours to make the ASU Dean's List"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<style>
    :root {
        --at-primary: #8C1934; /* ASU Maroon */
        --at-primary-dark: #661226;
        --at-secondary: #FFC627; /* ASU Gold */
        --at-secondary-light: #FFD25B;
        --at-accent: #fcd34d; /* Yellow */
        --at-bg-light: #f3f4f6;
        --at-bg-secondary: #ffffff;
        --at-bg-tertiary: #f9fafb;
        --at-text-primary: #1f2937;
        --at-text-secondary: #4b5563;
        --at-text-muted: #6b7280;
        --at-border: #e5e7eb;
        --at-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        --at-success: #10b981;
        --at-warning: #f59e0b;
        --at-danger: #ef4444;
    }
    
    .dark-mode {
        --at-primary: #8C1934; /* ASU Maroon */
        --at-primary-dark: #661226;
        --at-secondary: #FFC627; /* ASU Gold */
        --at-secondary-light: #FFD25B;
        --at-accent: #f59e0b;
        --at-bg-light: #111827;
        --at-bg-secondary: #1f2937;
        --at-bg-tertiary: #374151;
        --at-text-primary: #f9fafb;
        --at-text-secondary: #e5e7eb;
        --at-text-muted: #9ca3af;
        --at-border: rgba(156, 163, 175, 0.2);
        --at-success: #34d399;
        --at-warning: #fbbf24;
        --at-danger: #f87171;
    }
    
    .at-wrapper {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background: var(--at-bg-light);
        min-height: 100vh;
        color: var(--at-text-primary);
        position: relative;
    }
    
    .dark-mode::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:
            radial-gradient(circle at 20% 50%, rgba(140, 25, 52, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 198, 39, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);
        animation: at-mesh-move 20s ease-in-out infinite;
        pointer-events: none;
    }

    @keyframes at-mesh-move {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(-10px, 10px) rotate(1deg); }
        50% { transform: translate(10px, -10px) rotate(-1deg); }
        75% { transform: translate(-5px, -5px) rotate(0.5deg); }
    }
    
    .at-layout {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        gap: 30px;
        padding: 20px 3px;
        position: relative;
        z-index: 1;
    }
    
    .at-tool-container {
        order: 1;
        background: var(--at-bg-secondary);
        border: 1px solid var(--at-border);
        border-radius: 24px;
        overflow: hidden;
        box-shadow: var(--at-shadow);
    }
    
    .dark-mode .at-tool-container {
        background: rgba(31, 41, 55, 0.8);
        backdrop-filter: blur(10px);
    }
    
    .at-tool-header {
        background: linear-gradient(135deg, rgba(140, 25, 52, 0.1) 0%, rgba(255, 198, 39, 0.1) 100%);
        padding: 30px;
        text-align: center;
        border-bottom: 1px solid var(--at-border);
    }
    
    .dark-mode .at-tool-header {
        background: linear-gradient(135deg, rgba(140, 25, 52, 0.2) 0%, rgba(255, 198, 39, 0.2) 100%);
    }
    
    .at-tool-header h1 {
        font-size: 2rem;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        color: var(--at-text-primary);
    }
    
    .dark-mode .at-tool-header h1 {
        background: linear-gradient(135deg, var(--at-primary) 0%, var(--at-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .at-tool-header .fas {
        color: var(--at-primary);
        font-size: 1.8rem;
    }
    
    .at-tool-body {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
    .at-input-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    
    .at-label {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--at-text-secondary);
    }
    
    .at-input {
        width: 100%;
        padding: 12px 16px;
        background: var(--at-bg-tertiary);
        border: 1px solid var(--at-border);
        border-radius: 12px;
        font-size: 1rem;
        color: var(--at-text-primary);
        transition: all 0.3s ease;
        box-sizing: border-box;
    }
    
    .at-input:focus {
        outline: none;
        border-color: var(--at-primary);
        box-shadow: 0 0 0 3px rgba(140, 25, 52, 0.2);
    }
    
    .dark-mode .at-input {
        background: var(--at-bg-tertiary);
        color: var(--at-text-primary);
    }
    
    .dark-mode .at-input:focus {
        box-shadow: 0 0 0 3px rgba(140, 25, 52, 0.2);
    }

    /* Semester Management Styles */
    .at-semester-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 24px;
        padding: 12px;
        background: var(--at-bg-tertiary);
        border-radius: 16px;
        border: 1px solid var(--at-border);
    }

    .at-semester-tab {
        padding: 10px 20px;
        background: transparent;
        border: none;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--at-text-secondary);
        cursor: pointer;
        transition: all 0.2s ease;
        min-width: 100px;
        text-align: center;
        position: relative;
    }

    .at-semester-tab:hover {
        background: rgba(140, 25, 52, 0.1);
        color: var(--at-primary);
    }

    .at-semester-tab.active {
        background: var(--at-primary);
        color: white;
        box-shadow: 0 4px 12px rgba(140, 25, 52, 0.3);
        transform: translateY(-2px);
    }

    .at-add-semester-btn {
        padding: 10px 20px;
        background: var(--at-secondary);
        border: none;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--at-primary-dark);
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .at-add-semester-btn:hover {
        background: var(--at-secondary-light);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 198, 39, 0.4);
    }

    .at-semester-content {
        display: none;
        animation: fadeIn 0.3s ease;
    }

    .at-semester-content.active {
        display: block;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .at-semester-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding: 20px;
        background: rgba(140, 25, 52, 0.05);
        border-radius: 16px;
        border: 1px solid rgba(140, 25, 52, 0.1);
    }

    .at-semester-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--at-text-primary);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .at-semester-title i {
        color: var(--at-primary);
        font-size: 1.1rem;
    }

    .at-delete-semester-btn {
        padding: 8px 16px;
        background: transparent;
        border: 2px solid var(--at-danger);
        border-radius: 10px;
        color: var(--at-danger);
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .at-delete-semester-btn:hover {
        background: var(--at-danger);
        color: white;
        transform: scale(1.05);
    }
    
    .at-gpa-grid {
        display: grid;
        grid-template-columns: 1fr 100px 100px 30px;
        gap: 8px;
        align-items: center;
        margin-bottom: 12px;
        padding: 16px;
        background: var(--at-bg-tertiary);
        border-radius: 12px;
        border: 1px solid var(--at-border);
        transition: all 0.2s ease;
    }

    .at-gpa-grid:hover {
        box-shadow: 0 4px 12px rgba(140, 25, 52, 0.1);
        transform: translateY(-2px);
    }

    @media (max-width: 640px) {
        .at-gpa-grid {
            grid-template-columns: 1fr;
            gap: 12px;
        }
    }
    
    .at-remove-row {
        background: none;
        border: none;
        color: var(--at-text-muted);
        cursor: pointer;
        font-size: 1.2em;
        transition: all 0.2s ease;
        padding: 8px;
        border-radius: 6px;
    }
    
    .at-remove-row:hover {
        color: var(--at-danger);
        background: rgba(239, 68, 68, 0.1);
        transform: scale(1.1);
    }
    
    .at-add-row {
        background: var(--at-bg-tertiary);
        border: 2px dashed var(--at-border);
        border-radius: 12px;
        padding: 16px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        color: var(--at-text-secondary);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        margin-bottom: 20px;
    }
    
    .at-add-row:hover {
        background: rgba(140, 25, 52, 0.05);
        border-color: var(--at-primary);
        color: var(--at-primary);
        transform: translateY(-2px);
    }

    /* Enhanced Calculate Button */
    .at-calculate-btn {
        background: linear-gradient(135deg, var(--at-primary) 0%, var(--at-primary-dark) 100%);
        border: none;
        border-radius: 16px;
        padding: 18px 32px;
        font-size: 1.125rem;
        font-weight: 700;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin-top: 32px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 8px 25px rgba(140, 25, 52, 0.25);
    }

    .at-calculate-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }

    .at-calculate-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(140, 25, 52, 0.35);
        background: linear-gradient(135deg, var(--at-primary-dark) 0%, var(--at-primary) 100%);
    }

    .at-calculate-btn:hover::before {
        left: 100%;
    }

    .at-calculate-btn:active {
        transform: translateY(-1px);
        transition: transform 0.1s;
    }

    .at-calculate-btn.loading {
        opacity: 0.7;
        pointer-events: none;
        background: var(--at-text-muted);
    }

    .at-calculate-btn.loading i {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .at-result-card {
        background: linear-gradient(135deg, var(--at-bg-secondary) 0%, var(--at-bg-tertiary) 100%);
        border: 2px solid var(--at-border);
        border-radius: 20px;
        padding: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-top: 24px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        animation: slideUp 0.4s ease-out;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .dark-mode .at-result-card {
        background: linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(55, 65, 81, 0.8) 100%);
        backdrop-filter: blur(10px);
    }
    
    .at-result-value {
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--at-primary);
        text-align: center;
    }
    
    .at-result-summary {
        margin-top: 15px;
        text-align: center;
        width: 100%;
    }
    
    .at-result-summary h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--at-text-primary);
        margin-bottom: 10px;
    }
    
    .at-result-summary p {
        font-size: 1.1rem;
        color: var(--at-text-secondary);
        line-height: 1.5;
    }
    
    .at-result-summary strong {
        color: var(--at-primary);
    }

    .at-result-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        width: 100%;
    }

    @media (min-width: 640px) {
        .at-result-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    .at-result-item {
        padding: 20px;
        background: rgba(140, 25, 52, 0.05);
        border-radius: 16px;
        border: 1px solid rgba(140, 25, 52, 0.1);
    }

    .at-result-item h4 {
        color: var(--at-text-secondary);
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .at-result-item .value {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--at-primary);
        margin: 0;
    }
    
    .at-sidebar {
        display: flex;
        flex-direction: column;
        gap: 24px;
        order: 2;
    }
    
    .at-related-card, .at-ad-space {
        background: var(--at-bg-secondary);
        border: 1px solid var(--at-border);
        border-radius: 20px;
        padding: 24px;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .dark-mode .at-related-card, .dark-mode .at-ad-space {
        background: linear-gradient(135deg, var(--at-bg-secondary) 0%, var(--at-bg-tertiary) 100%);
        backdrop-filter: blur(10px);
    }
    
    .at-related-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--at-primary), var(--at-secondary), var(--at-accent));
        animation: at-shimmer 3s linear infinite;
    }
    
    @keyframes at-shimmer {
        from { transform: translateX(-100%); }
        to { transform: translateX(100%); }
    }
    
    .at-related-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 50px rgba(140, 25, 52, 0.2);
    }
    
    .dark-mode .at-related-card:hover {
        box-shadow: 0 15px 50px rgba(140, 25, 52, 0.2);
    }
    
    .at-related-card h3 {
        font-size: 1.35rem;
        font-weight: 800;
        margin-bottom: 20px;
        background: linear-gradient(135deg, var(--at-primary) 0%, var(--at-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-align: center;
    }
    
    .at-related-card ul {
        list-style: none;
        padding: 0;
    }
    
    .at-related-card li {
        margin-bottom: 8px;
    }
    
    .at-related-card a {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        color: var(--at-text-secondary);
        font-weight: 500;
        padding: 12px 16px;
        border-radius: 12px;
        transition: all 0.3s ease;
        border: 1px solid transparent;
    }
    
    .at-related-card a:hover {
        background: rgba(140, 25, 52, 0.1);
        border-color: rgba(140, 25, 52, 0.3);
        color: var(--at-primary);
        transform: translateX(4px);
    }
    
    .dark-mode .at-related-card a:hover {
        background: rgba(140, 25, 52, 0.1);
        border-color: rgba(140, 25, 52, 0.3);
    }
    
    .at-related-card .fas {
        font-size: 1.1rem;
        color: var(--at-primary);
        min-width: 16px;
    }
    
    .at-ad-space {
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--at-text-muted);
        border-style: dashed;
    }
    
    .at-info-content {
        order: 3;
        background: var(--at-bg-secondary);
        border: 1px solid var(--at-border);
        border-radius: 24px;
        overflow: hidden;
        margin-top: 40px;
    }
    
    .dark-mode .at-info-content {
        background: linear-gradient(135deg, var(--at-bg-secondary) 0%, var(--at-bg-tertiary) 100%);
        backdrop-filter: blur(10px);
    }
    
    .at-info-header {
        background: linear-gradient(135deg, rgba(140, 25, 52, 0.2) 0%, rgba(255, 198, 39, 0.2) 100%);
        padding: 40px;
        text-align: center;
        border-bottom: 1px solid var(--at-border);
    }
    
    .dark-mode .at-info-header {
        background: linear-gradient(135deg, rgba(140, 25, 52, 0.2) 0%, rgba(255, 198, 39, 0.2) 100%);
    }
    
    .at-info-header h2 {
        font-size: 2.25rem;
        font-weight: 900;
        background: linear-gradient(135deg, var(--at-primary) 0%, var(--at-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .at-info-body {
        padding: 50px 40px;
        color: var(--at-text-secondary);
    }
    
    .at-info-body h3 {
        font-size: 1.75rem;
        font-weight: 800;
        margin: 2em 0 1em;
        position: relative;
        padding-left: 20px;
        color: var(--at-text-primary);
    }
    
    .at-info-body h3::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 24px;
        background: linear-gradient(135deg, var(--at-primary), var(--at-secondary));
        border-radius: 2px;
    }
    
    .at-info-body p, .at-info-body li {
        font-size: 17px;
        line-height: 1.8;
        margin-bottom: 1em;
    }
    
    .at-info-body ul {
        padding-left: 20px;
    }
    
    .at-info-body strong {
        color: var(--at-primary);
    }
    
    .at-info-box {
        background: rgba(140, 25, 52, 0.1);
        border-left: 4px solid var(--at-primary);
        padding: 24px;
        margin: 30px 0;
        border-radius: 0 12px 12px 0;
    }
    
    .dark-mode .at-info-box {
        background: rgba(140, 25, 52, 0.1);
        border-left-color: var(--at-primary);
    }
    
    .at-info-box h4 {
        color: var(--at-primary);
        margin-top: 0;
    }
    
    .at-info-box ul {
        list-style: none;
        padding: 0;
    }
    
    .at-info-box ul li {
        position: relative;
        padding-left: 32px;
        margin-bottom: 12px;
        color: var(--at-text-secondary);
    }
    
    .at-info-box ul li::before {
        content: '✨';
        position: absolute;
        left: 0;
        color: var(--at-accent);
    }

    .at-info-box table {
        width: 100%;
        border-collapse: collapse;
        margin: 16px 0;
    }

    .at-info-box table th,
    .at-info-box table td {
        padding: 12px 16px;
        text-align: left;
        border-bottom: 1px solid var(--at-border);
    }

    .at-info-box table th {
        background: var(--at-primary);
        color: white;
        font-weight: 600;
    }

    .at-info-box table tr:hover {
        background: rgba(140, 25, 52, 0.05);
    }
    
    @media (min-width: 1200px) {
        .at-layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 380px;
            grid-template-areas:
                "main sidebar"
                "info info";
            gap: 40px;
            max-width: 1400px;
            padding: 40px;
        }
        .at-tool-container {
            grid-area: main;
            order: 0;
        }
        .at-sidebar {
            grid-area: sidebar;
            order: 0;
            align-self: start;
        }
        .at-info-content {
            grid-area: info;
            order: 0;
            margin-top: 0;
        }
    }
</style>

<div class="at-wrapper">
    <div class="at-layout">
        <div class="at-tool-container">
            <div class="at-tool-header">
                <h1><i class="fas fa-calculator"></i> GPA Calculator for ASU</h1>
            </div>
            <div class="at-tool-body">                
                <div id="gpa-tool">
                    <div class="at-input-group">
                        <label for="cumulative-gpa" class="at-label">Current Cumulative GPA (Optional)</label>
                        <input type="number" id="cumulative-gpa" class="at-input" placeholder="e.g., 3.5" step="0.01" min="0" max="4">
                    </div>
                    <div class="at-input-group">
                        <label for="cumulative-credits" class="at-label">Current Cumulative Credits (Optional)</label>
                        <input type="number" id="cumulative-credits" class="at-input" placeholder="e.g., 30" min="0">
                    </div>
                    
                    <h3 style="margin: 32px 0 24px 0; text-align: center; color: var(--at-text-primary); font-size: 1.375rem;">
                        <i class="fas fa-calendar-alt" style="color: var(--at-primary); margin-right: 10px;"></i>
                        Semester Management
                    </h3>

                    <div class="at-semester-tabs" id="semester-tabs">
                        <!-- Semester tabs will be dynamically added here -->
                    </div>

                    <div id="semesters-container">
                        <!-- Semester content will be dynamically added here -->
                    </div>

                    <button id="calculate-btn" class="at-calculate-btn">
                        <i class="fas fa-calculator"></i>
                        <span>Calculate My Sun Devil GPA</span>
                    </button>

                    <div id="result-card" class="at-result-card" style="display: none;">
                        <div class="at-result-grid">
                            <div class="at-result-item">
                                <h4>Current Semester GPA</h4>
                                <div class="value" id="semester-gpa">0.00</div>
                            </div>
                            <div class="at-result-item">
                                <h4>Cumulative GPA</h4>
                                <div class="value" id="cumulative-gpa-result">0.00</div>
                            </div>
                        </div>
                        <div id="gpa-analysis" style="margin-top: 24px; width: 100%;">
                            <!-- GPA analysis will be added here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="at-sidebar">
            <div class="at-ad-space">
                <div>
                    <i class="fas fa-ad fa-2x" style="margin-bottom: 10px; opacity: 0.5;"></i>
                    <p><strong>Advertisement Space</strong></p>
                    <p style="font-size: 0.9em; margin-top: 8px;">Your ad could be here</p>
                </div>
            </div>

            <div class="at-related-card">
                <h3>📚 More College GPA Tools</h3>
                <ul>
                {% assign education_tools = site.tools | where_exp:"item","item.categories contains 'education-US'" %}
                        {% for tool in education_tools limit:8 %}
                            {% unless tool.url == page.url %}
                                <li>
                                    <a href="{{ tool.url | relative_url }}">
                                        <i class="fas fa-graduation-cap"></i>{{ tool.localtitle }}
                                    </a>
                                </li>
                            {% endunless %}
                {% endfor %}
                </ul>
            </div>
        </div>

        <div class="at-info-content">
            <div class="at-info-header">
                <h2>A Guide to Your ASU GPA and Academic Success</h2>
            </div>
            <div class="at-info-body">
                <p>Figuring out your **gpa at asu** doesn't have to be a headache. Our tool simplifies the entire process, empowering you to take control of your academic journey. This guide will walk you through the grading scale and give you the information you need to stay on track.</p>

                <h3>Understanding the ASU Grading Scale</h3>
                <p>Arizona State University uses a standard 4.0 grading scale. Knowing the exact scale is the first step in calculating your **arizona state university gpa** accurately. This official table will help you convert your letter grades into the correct point values.</p>
                
                <div class="at-info-box">
                    <table>
                        <thead>
                            <tr>
                                <th>Letter Grade</th>
                                <th>Grade Point</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>A+</td><td>4.00</td></tr>
                            <tr><td>A</td><td>4.00</td></tr>
                            <tr><td>A-</td><td>3.67</td></tr>
                            <tr><td>B+</td><td>3.33</td></tr>
                            <tr><td>B</td><td>3.00</td></tr>
                            <tr><td>B-</td><td>2.67</td></tr>
                            <tr><td>C+</td><td>2.33</td></tr>
                            <tr><td>C</td><td>2.00</td></tr>
                            <tr><td>D</td><td>1.00</td></tr>
                            <tr><td>E</td><td>0.00</td></tr>
                        </tbody>
                    </table>
                </div>
                
                <p>Note: While a D is a passing grade, it may not be sufficient for your major requirements. Always check with your academic advisor. For more information, refer to the official <a href="https://students.asu.edu/grades" target="_blank" rel="nofollow noopener">ASU Grading Policies page</a>.</p>

                <h3>Why You Need an ASU-Specific Tool</h3>
                <p>While a generic GPA calculator can give you a rough estimate, a dedicated **GPA calculator ASU** students can use is far more precise. Our tool helps you keep track of your classes and understand how each grade impacts your overall academic standing. Use this tool to:</p>
                <ul>
                    <li>Quickly find your semester GPA.</li>
                    <li>Add your past grades to find your cumulative GPA.</li>
                    <li>Set a goal and see what grades you need to achieve it.</li>
                </ul>

                <h3>Key Academic Deadlines to Remember at ASU</h3>
                <p>Staying on top of your **ASU GPA** is not just about calculating grades—it's also about meeting important deadlines. While these dates can change, here are some key deadlines you should always keep in mind when planning your semester:</p>
                <ul>
                    <li>**Session A, B, and C Deadlines:** ASU has multiple sessions within a semester, each with its own specific deadlines. Make sure you are tracking the correct session!</li>
                    <li>**Withdrawal Deadline:** The last day to withdraw from a course without receiving a penalty.
                                        <li>**Final Exam Period:** The last week of the semester dedicated to final exams.</li>
                </ul>
                <p>For official dates, always check the <a href="https://students.asu.edu/academic-calendar" target="_blank" rel="nofollow noopener">ASU Academic Calendar</a>.</p>
                
                <h3>FAQs About the ASU GPA</h3>
                <div class="at-info-box">
                    <h4>How is a semester GPA different from a cumulative GPA?</h4>
                    <p>Your **semester GPA** is the average of all grades you earned in a single semester. Your **cumulative GPA** includes all of the grades you've earned throughout your entire academic career at ASU. Both are important, but the cumulative GPA is typically what's used for graduation and academic honors.</p>

                    <h4>What's a good GPA at ASU?</h4>
                    <p>A GPA of 3.0 or higher is generally considered a good GPA and is often required for scholarships and certain programs. For more specific information on academic standing, refer to the official **gpa requirements asu** page on the university website.</p>
                </div>

                <h3>Ready to Calculate Your ASU GPA?</h3>
                <p>It's time to stop guessing and start calculating. Our user-friendly **ASU GPA tool** makes it easy to add your grades and credits. Simply enter your course information in the fields above, and let the tool do the heavy lifting for you. Whether you're aiming for a perfect 4.0 or just want to make sure you're on track, this is your go-to **ASU GPA calculator**.</p>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const gradeScale = {
            'A+': 4.00, 'A': 4.00, 'A-': 3.67, 'B+': 3.33,
            'B': 3.00, 'B-': 2.67, 'C+': 2.33, 'C': 2.00,
            'D': 1.00, 'E': 0.00
        };

        const semestersContainer = document.getElementById('semesters-container');
        const tabsContainer = document.getElementById('semester-tabs');
        const calculateBtn = document.getElementById('calculate-btn');
        const resultCard = document.getElementById('result-card');
        const semesterGpaResult = document.getElementById('semester-gpa');
        const cumulativeGpaResult = document.getElementById('cumulative-gpa-result');
        const cumulativeGpaInput = document.getElementById('cumulative-gpa');
        const cumulativeCreditsInput = document.getElementById('cumulative-credits');
        
        let semesterCounter = 0;
        let activeSemester = null;

        // Semester Management Functions
        function createSemester(name = null) {
            semesterCounter++;
            const semesterName = name || `Semester ${semesterCounter}`;
            const semesterId = `semester-${semesterCounter}`;
            
            // Create tab
            const tab = document.createElement('button');
            tab.className = 'at-semester-tab';
            tab.textContent = semesterName;
            tab.dataset.semester = semesterId;
            tab.addEventListener('click', () => switchSemester(semesterId));
            
            // Create add semester button if it doesn't exist
            let addBtn = tabsContainer.querySelector('.at-add-semester-btn');
            if (!addBtn) {
                addBtn = document.createElement('button');
                addBtn.className = 'at-add-semester-btn';
                addBtn.innerHTML = '<i class="fas fa-plus"></i> Add Semester';
                addBtn.addEventListener('click', () => createSemester());
                tabsContainer.appendChild(addBtn);
            }
            
            tabsContainer.insertBefore(tab, addBtn);
            
            // Create semester content
            const semesterContent = document.createElement('div');
            semesterContent.className = 'at-semester-content';
            semesterContent.id = semesterId;
            
            semesterContent.innerHTML = `
                <div class="at-semester-header">
                    <h3 class="at-semester-title">
                        <i class="fas fa-calendar-week"></i>
                        ${semesterName}
                    </h3>
                    <button class="at-delete-semester-btn" onclick="deleteSemester('${semesterId}')">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
                <div class="semester-courses" data-semester="${semesterId}">
                    <!-- Courses will be added here -->
                </div>
                <button class="at-add-row add-course-btn" data-semester="${semesterId}">
                    <i class="fas fa-plus-circle"></i> Add Course
                </button>
            `;
            
            semestersContainer.appendChild(semesterContent);
            
            // Add event listener for add course button
            const addCourseBtn = semesterContent.querySelector('.add-course-btn');
            addCourseBtn.addEventListener('click', () => addCourse(semesterId));
            
            // Add initial courses
            for (let i = 0; i < 4; i++) {
                addCourse(semesterId);
            }
            
            // Switch to new semester
            switchSemester(semesterId);
            
            return semesterId;
        }

        function switchSemester(semesterId) {
            // Update tabs
            document.querySelectorAll('.at-semester-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelector(`[data-semester="${semesterId}"]`).classList.add('active');
            
            // Update content
            document.querySelectorAll('.at-semester-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(semesterId).classList.add('active');
            
            activeSemester = semesterId;
        }

        function addCourse(semesterId) {
            const coursesList = document.querySelector(`.semester-courses[data-semester="${semesterId}"]`);
            const row = document.createElement('div');
            row.className = 'at-gpa-grid';
            
            row.innerHTML = `
                <input type="text" class="at-input course-name" placeholder="Course name (e.g., MAT 270) -- Optional">
                <select class="at-input course-grade">
                    <option value="">Grade</option>
                    <option value="A+">A+ (4.00)</option>
                    <option value="A">A (4.00)</option>
                    <option value="A-">A- (3.67)</option>
                    <option value="B+">B+ (3.33)</option>
                    <option value="B">B (3.00)</option>
                    <option value="B-">B- (2.67)</option>
                    <option value="C+">C+ (2.33)</option>
                    <option value="C">C (2.00)</option>
                    <option value="D">D (1.00)</option>
                    <option value="E">E (0.00)</option>
                </select>
                <input type="number" class="at-input course-credits" placeholder="Credits" min="0" max="6" step="0.5">
                <button class="at-remove-row"><i class="fas fa-trash-alt"></i></button>
            `;
            
            coursesList.appendChild(row);

            row.querySelector('.at-remove-row').addEventListener('click', () => {
                row.remove();
            });
            
            // Add animation
            row.style.opacity = '0';
            row.style.transform = 'translateY(20px)';
            setTimeout(() => {
                row.style.transition = 'all 0.3s ease';
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }, 10);
        }

        window.deleteSemester = function(semesterId) {
            if (document.querySelectorAll('.at-semester-content').length <= 1) {
                alert('You must have at least one semester!');
                return;
            }
            
            if (confirm('Are you sure you want to delete this semester? All course data will be lost.')) {
                // Remove tab
                document.querySelector(`[data-semester="${semesterId}"]`).remove();
                
                // Remove content
                document.getElementById(semesterId).remove();
                
                // Switch to first available semester if deleted semester was active
                if (activeSemester === semesterId) {
                    const firstTab = document.querySelector('.at-semester-tab');
                    if (firstTab) {
                        switchSemester(firstTab.dataset.semester);
                    }
                }
            }
        };

        function calculateGPA() {
            calculateBtn.classList.add('loading');
            calculateBtn.innerHTML = '<i class="fas fa-spinner"></i><span>Calculating...</span>';
            
            setTimeout(() => {
                let totalSemesterPoints = 0;
                let totalSemesterCredits = 0;
                
                // Calculate each semester
                document.querySelectorAll('.at-semester-content').forEach(semesterContent => {
                    const rows = semesterContent.querySelectorAll('.at-gpa-grid');
                    
                    rows.forEach(row => {
                        const grade = row.querySelector('.course-grade').value;
                        const credits = parseFloat(row.querySelector('.course-credits').value);

                        if (grade && !isNaN(credits) && credits > 0) {
                            const gradePoint = gradeScale[grade];
                            totalSemesterPoints += gradePoint * credits;
                            totalSemesterCredits += credits;
                        }
                    });
                });

                // Current semester GPA (active semester)
                const activeCourses = document.querySelectorAll(`#${activeSemester} .at-gpa-grid`);
                let currentSemesterPoints = 0;
                let currentSemesterCredits = 0;
                
                activeCourses.forEach(row => {
                    const grade = row.querySelector('.course-grade').value;
                    const credits = parseFloat(row.querySelector('.course-credits').value);
                    
                    if (grade && !isNaN(credits) && credits > 0) {
                        currentSemesterPoints += gradeScale[grade] * credits;
                        currentSemesterCredits += credits;
                    }
                });

                const currentSemesterGPA = currentSemesterCredits > 0 ? (currentSemesterPoints / currentSemesterCredits) : 0;
                semesterGpaResult.textContent = currentSemesterGPA.toFixed(2);

                // Calculate cumulative GPA
                const currentCumulativeGpa = parseFloat(cumulativeGpaInput.value);
                const currentCumulativeCredits = parseFloat(cumulativeCreditsInput.value);

                if (!isNaN(currentCumulativeGpa) && !isNaN(currentCumulativeCredits) && currentCumulativeCredits > 0) {
                    const totalPastPoints = currentCumulativeGpa * currentCumulativeCredits;
                    const newTotalPoints = totalPastPoints + totalSemesterPoints;
                    const newTotalCredits = currentCumulativeCredits + totalSemesterCredits;
                    const newCumulativeGpa = newTotalPoints / newTotalCredits;
                    cumulativeGpaResult.textContent = newCumulativeGpa.toFixed(2);
                } else {
                    const overallGPA = totalSemesterCredits > 0 ? (totalSemesterPoints / totalSemesterCredits) : 0;
                    cumulativeGpaResult.textContent = overallGPA.toFixed(2);
                }

                // Add GPA analysis
                displayGPAAnalysis(currentSemesterGPA, parseFloat(cumulativeGpaResult.textContent));

                resultCard.style.display = 'flex';
                resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Reset button
                calculateBtn.classList.remove('loading');
                calculateBtn.innerHTML = '<i class="fas fa-calculator"></i><span>Calculate My Sun Devil GPA</span>';
            }, 1000);
        }

        function displayGPAAnalysis(semesterGPA, cumulativeGPA) {
            const analysisDiv = document.getElementById('gpa-analysis');
            let analysis = '';
            let statusClass = '';
            
            if (cumulativeGPA >= 3.8) {
                analysis = '🎓 Outstanding! You\'re on track for Summa Cum Laude honors at ASU!';
                statusClass = 'color: var(--at-success)';
            } else if (cumulativeGPA >= 3.5) {
                analysis = '🌟 Excellent work! You qualify for ASU Dean\'s List recognition!';
                statusClass = 'color: var(--at-success)';
            } else if (cumulativeGPA >= 3.0) {
                analysis = '👍 Good progress! You\'re maintaining solid academic standing at ASU!';
                statusClass = 'color: var(--at-success)';
            } else if (cumulativeGPA >= 2.0) {
                analysis = '📚 You\'re in good standing. Consider ASU tutoring resources to boost your GPA!';
                statusClass = 'color: var(--at-warning)';
            } else {
                analysis = '⚠️ Academic warning territory. Contact ASU Student Success for support!';
                statusClass = 'color: var(--at-danger)';
            }
            
            analysisDiv.innerHTML = `
                <div style="background: rgba(140, 25, 52, 0.05); border-radius: 12px; padding: 20px; border-left: 4px solid var(--at-primary);">
                    <h4 style="color: var(--at-primary); margin-bottom: 12px;">Your ASU Academic Standing</h4>
                    <p style="margin: 0; font-size: 1.1rem; font-weight: 600; ${statusClass}">${analysis}</p>
                </div>
            `;
        }

        // Event Listeners
        calculateBtn.addEventListener('click', calculateGPA);

        // Initialize with first semester
        createSemester('Fall');
        
        // Auto-save functionality
        function autoSave() {
            const data = {
                existingGPA: cumulativeGpaInput.value,
                existingCredits: cumulativeCreditsInput.value,
                semesters: {}
            };
            
            document.querySelectorAll('.at-semester-content').forEach(semester => {
                const semesterId = semester.id;
                const courses = [];
                
                semester.querySelectorAll('.at-gpa-grid').forEach(row => {
                    courses.push({
                        name: row.querySelector('.course-name').value,
                        grade: row.querySelector('.course-grade').value,
                        credits: row.querySelector('.course-credits').value
                    });
                });
                
                data.semesters[semesterId] = {
                    name: semester.querySelector('.at-semester-title').textContent.trim(),
                    courses: courses
                };
            });
            
            localStorage.setItem('asu-gpa-calculator', JSON.stringify(data));
        }

        // Auto-save every 30 seconds
        setInterval(autoSave, 30000);
        
        // Auto-save on input changes
        document.addEventListener('input', function(e) {
            if (e.target.matches('.at-input')) {
                clearTimeout(window.autoSaveTimeout);
                window.autoSaveTimeout = setTimeout(autoSave, 2000);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    calculateGPA();
                } else if (e.key === '=') {
                    e.preventDefault();
                    addCourse(activeSemester);
                }
            }
        });
    });
</script>
