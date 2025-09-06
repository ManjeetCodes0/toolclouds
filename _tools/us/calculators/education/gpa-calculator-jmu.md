---
title: "JMU GPA Calculator - James Madison University Grade Calculator Tool"
localtitle: "JMU GPA Calculator"
layout: tool
categories: [calculators-US, education-US]
lang: en-US
region: US
permalink: /us/calculators/education/gpa-calculator-jmu
description: "Calculate your JMU GPA instantly with our free James Madison University grade calculator. Track semester & cumulative GPA, understand the Dukes grading scale, and monitor your academic progress."
tags:
  - "gpa calculator jmu"
  - "jmu gpa"
  - "james madison university gpa calculator"
  - "jmu grading scale"
  - "dukes gpa calculator"
  - "jmu grade calculator"
  - "madison gpa requirements"
  - "jmu academic calculator"
  - "harrisonburg gpa tool"
  - "jmu cumulative gpa"
  - "duke dog gpa"
  - "jmu semester gpa"
schema:
  "@context": "https://schema.org"
  "@type": "WebApplication"
  "name": "JMU GPA Calculator"
  "url": "https://toolsclouds.com/us/calculators/education/gpa-calculator-jmu"
  "description": "Calculate your James Madison University GPA using the official grading scale"
  "applicationCategory": "EducationalApplication"
  "operatingSystem": "Any"
  "offers":
    "@type": "Offer"
    "price": "0"
    "priceCurrency": "USD"
  "aggregateRating":
    "@type": "AggregateRating"
    "ratingValue": "4.8"
    "ratingCount": "523"
  "author":
    "@type": "Organization"
    "name": "ToolsClouds"
    "url": "https://toolsclouds.com"
faq_schema:
  "@context": "https://schema.org"
  "@type": "FAQPage"
  "mainEntity":
    - "@type": "Question"
      "name": "What is the JMU grading scale?"
      "acceptedAnswer":
        "@type": "Answer"
        "text": "JMU uses a 4.0 scale where A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D+=1.3, D=1.0, D-=0.7, and F=0.0"
    - "@type": "Question"
      "name": "What GPA do I need for JMU Dean's List?"
      "acceptedAnswer":
        "@type": "Answer"
        "text": "To make the JMU Dean's List, you need a semester GPA of 3.5 or higher with at least 12 credit hours of graded coursework"
    - "@type": "Question"
      "name": "How is cumulative GPA calculated at JMU?"
      "acceptedAnswer":
        "@type": "Answer"
        "text": "JMU calculates cumulative GPA by dividing total quality points earned by total graded credit hours attempted. Transfer credits don't affect JMU GPA"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<style>
    :root {
        --jmu-purple: #450084; /* JMU Purple */
        --jmu-purple-dark: #2E0051;
        --jmu-gold: #CBB677; /* JMU Gold */
        --jmu-gold-light: #E5D19F;
        --jmu-accent: #fcd34d; /* Yellow */
        --jmu-bg-light: #f3f4f6;
        --jmu-bg-secondary: #ffffff;
        --jmu-bg-tertiary: #f9fafb;
        --jmu-text-primary: #1f2937;
        --jmu-text-secondary: #4b5563;
        --jmu-text-muted: #6b7280;
        --jmu-border: #e5e7eb;
        --jmu-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        --jmu-success: #10b981;
        --jmu-warning: #f59e0b;
        --jmu-danger: #ef4444;
    }
    
    .dark-mode {
        --jmu-purple: #7B2BCA; /* JMU Purple - lighter for dark mode */
        --jmu-purple-dark: #450084;
        --jmu-gold: #E5D19F; /* JMU Gold - lighter for dark mode */
        --jmu-gold-light: #F2E5B8;
        --jmu-accent: #f59e0b;
        --jmu-bg-light: #111827;
        --jmu-bg-secondary: #1f2937;
        --jmu-bg-tertiary: #374151;
        --jmu-text-primary: #f9fafb;
        --jmu-text-secondary: #e5e7eb;
        --jmu-text-muted: #9ca3af;
        --jmu-border: rgba(156, 163, 175, 0.2);
        --jmu-success: #34d399;
        --jmu-warning: #fbbf24;
        --jmu-danger: #f87171;
    }
    
    .jmu-wrapper {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background: var(--jmu-bg-light);
        min-height: 100vh;
        color: var(--jmu-text-primary);
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
            radial-gradient(circle at 20% 50%, rgba(69, 0, 132, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(203, 182, 119, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);
        animation: jmu-mesh-move 20s ease-in-out infinite;
        pointer-events: none;
    }

    @keyframes jmu-mesh-move {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(-10px, 10px) rotate(1deg); }
        50% { transform: translate(10px, -10px) rotate(-1deg); }
        75% { transform: translate(-5px, -5px) rotate(0.5deg); }
    }
    
    .jmu-layout {
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
    
    .jmu-tool-container {
        order: 1;
        background: var(--jmu-bg-secondary);
        border: 1px solid var(--jmu-border);
        border-radius: 24px;
        overflow: hidden;
        box-shadow: var(--jmu-shadow);
    }
    
    .dark-mode .jmu-tool-container {
        background: rgba(31, 41, 55, 0.8);
        backdrop-filter: blur(10px);
    }
    
    .jmu-tool-header {
        background: linear-gradient(135deg, rgba(69, 0, 132, 0.1) 0%, rgba(203, 182, 119, 0.1) 100%);
        padding: 30px;
        text-align: center;
        border-bottom: 1px solid var(--jmu-border);
    }
    
    .dark-mode .jmu-tool-header {
        background: linear-gradient(135deg, rgba(69, 0, 132, 0.2) 0%, rgba(203, 182, 119, 0.2) 100%);
    }
    
    .jmu-tool-header h1 {
        font-size: 2rem;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        color: var(--jmu-text-primary);
        margin: 0;
    }
    
    .dark-mode .jmu-tool-header h1 {
        background: linear-gradient(135deg, var(--jmu-purple) 0%, var(--jmu-gold) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .jmu-tool-header .fas {
        color: var(--jmu-purple);
        font-size: 1.8rem;
        animation: sparkle 3s ease-in-out infinite;
    }

    @keyframes sparkle {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(5deg); }
        50% { transform: scale(1) rotate(-5deg); }
        75% { transform: scale(1.1) rotate(5deg); }
    }

    .jmu-tool-header p {
        color: var(--jmu-gold);
        margin-top: 8px;
        font-size: 1.125rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-bottom: 0;
    }
    
    .jmu-tool-body {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
    .jmu-input-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    
    .jmu-label {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--jmu-text-secondary);
    }
    
    .jmu-input {
        width: 100%;
        padding: 12px 16px;
        background: var(--jmu-bg-tertiary);
        border: 1px solid var(--jmu-border);
        border-radius: 12px;
        font-size: 1rem;
        color: var(--jmu-text-primary);
        transition: all 0.3s ease;
        box-sizing: border-box;
    }
    
    .jmu-input:focus {
        outline: none;
        border-color: var(--jmu-purple);
        box-shadow: 0 0 0 3px rgba(69, 0, 132, 0.2);
    }
    
    .dark-mode .jmu-input {
        background: var(--jmu-bg-tertiary);
        color: var(--jmu-text-primary);
    }
    
    .dark-mode .jmu-input:focus {
        box-shadow: 0 0 0 3px rgba(123, 43, 202, 0.2);
    }

    /* Semester Management Styles */
    .jmu-semester-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 24px;
        padding: 12px;
        background: var(--jmu-bg-tertiary);
        border-radius: 16px;
        border: 1px solid var(--jmu-border);
    }

    .jmu-semester-tab {
        padding: 10px 20px;
        background: transparent;
        border: none;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--jmu-text-secondary);
        cursor: pointer;
        transition: all 0.2s ease;
        min-width: 100px;
        text-align: center;
    }

    .jmu-semester-tab:hover {
        background: rgba(69, 0, 132, 0.1);
        color: var(--jmu-purple);
    }

    .jmu-semester-tab.active {
        background: var(--jmu-purple);
        color: white;
        box-shadow: 0 4px 12px rgba(69, 0, 132, 0.3);
        transform: translateY(-2px);
    }

    .jmu-add-semester-btn {
        padding: 10px 20px;
        background: var(--jmu-gold);
        border: none;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--jmu-purple-dark);
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .jmu-add-semester-btn:hover {
        background: var(--jmu-gold-light);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(203, 182, 119, 0.4);
    }

    .jmu-semester-content {
        display: none;
        animation: fadeIn 0.3s ease;
    }

    .jmu-semester-content.active {
        display: block;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .jmu-semester-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding: 20px;
        background: rgba(69, 0, 132, 0.05);
        border-radius: 16px;
        border: 1px solid rgba(69, 0, 132, 0.1);
    }

    .jmu-semester-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--jmu-text-primary);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .jmu-semester-title i {
        color: var(--jmu-purple);
        font-size: 1.1rem;
    }

    .jmu-delete-semester-btn {
        padding: 8px 16px;
        background: transparent;
        border: 2px solid var(--jmu-danger);
        border-radius: 10px;
        color: var(--jmu-danger);
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .jmu-delete-semester-btn:hover {
        background: var(--jmu-danger);
        color: white;
        transform: scale(1.05);
    }
    
    .jmu-gpa-grid {
        display: grid;
        grid-template-columns: 1fr 120px 100px 30px;
        gap: 12px;
        align-items: center;
        margin-bottom: 12px;
        padding: 16px;
        background: var(--jmu-bg-tertiary);
        border-radius: 12px;
        border: 1px solid var(--jmu-border);
        transition: all 0.2s ease;
    }

    .jmu-gpa-grid:hover {
        box-shadow: 0 4px 12px rgba(69, 0, 132, 0.1);
        transform: translateY(-2px);
    }

    @media (max-width: 640px) {
        .jmu-gpa-grid {
            grid-template-columns: 1fr;
            gap: 12px;
        }
    }
    
    .jmu-remove-row {
        background: none;
        border: none;
        color: var(--jmu-text-muted);
        cursor: pointer;
        font-size: 1.2em;
        transition: all 0.2s ease;
        padding: 8px;
        border-radius: 6px;
    }
    
    .jmu-remove-row:hover {
        color: var(--jmu-danger);
        background: rgba(239, 68, 68, 0.1);
        transform: scale(1.1);
    }
    
    .jmu-add-row {
        background: var(--jmu-bg-tertiary);
        border: 2px dashed var(--jmu-border);
        border-radius: 12px;
        padding: 16px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        color: var(--jmu-text-secondary);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        margin-bottom: 20px;
    }
    
    .jmu-add-row:hover {
        background: rgba(69, 0, 132, 0.05);
        border-color: var(--jmu-purple);
        color: var(--jmu-purple);
        transform: translateY(-2px);
    }

    /* Enhanced Calculate Button */
    .jmu-calculate-btn {
        background: linear-gradient(135deg, var(--jmu-purple) 0%, var(--jmu-purple-dark) 100%);
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
        box-shadow: 0 8px 25px rgba(69, 0, 132, 0.25);
    }

    .jmu-calculate-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }

    .jmu-calculate-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(69, 0, 132, 0.35);
        background: linear-gradient(135deg, var(--jmu-gold) 0%, var(--jmu-gold-light) 100%);
        color: var(--jmu-purple-dark);
    }

    .jmu-calculate-btn:hover::before {
        left: 100%;
    }

    .jmu-calculate-btn:active {
        transform: translateY(-1px);
        transition: transform 0.1s;
    }

    .jmu-calculate-btn.loading {
        opacity: 0.7;
        pointer-events: none;
        background: var(--jmu-text-muted);
    }

    .jmu-calculate-btn.loading i {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .jmu-result-card {
        background: linear-gradient(135deg, var(--jmu-bg-secondary) 0%, var(--jmu-bg-tertiary) 100%);
        border: 2px solid var(--jmu-border);
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
    
    .dark-mode .jmu-result-card {
        background: linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(55, 65, 81, 0.8) 100%);
        backdrop-filter: blur(10px);
    }

    .jmu-result-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        width: 100%;
    }

    @media (min-width: 640px) {
        .jmu-result-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    .jmu-result-item {
        padding: 20px;
        background: rgba(69, 0, 132, 0.05);
        border-radius: 16px;
        border: 1px solid rgba(69, 0, 132, 0.1);
    }

    .jmu-result-item h4 {
        color: var(--jmu-text-secondary);
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .jmu-result-item .value {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--jmu-purple);
        margin: 0;
    }
    
    .jmu-sidebar {
        display: flex;
        flex-direction: column;
        gap: 24px;
        order: 2;
    }
    
    .jmu-related-card, .jmu-ad-space {
        background: var(--jmu-bg-secondary);
        border: 1px solid var(--jmu-border);
        border-radius: 20px;
        padding: 24px;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .dark-mode .jmu-related-card, .dark-mode .jmu-ad-space {
        background: linear-gradient(135deg, var(--jmu-bg-secondary) 0%, var(--jmu-bg-tertiary) 100%);
        backdrop-filter: blur(10px);
    }
    
    .jmu-related-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--jmu-purple), var(--jmu-gold), var(--jmu-accent));
        animation: jmu-shimmer 3s linear infinite;
    }
    
    @keyframes jmu-shimmer {
        from { transform: translateX(-100%); }
        to { transform: translateX(100%); }
    }
    
    .jmu-related-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 50px rgba(69, 0, 132, 0.2);
    }
    
    .dark-mode .jmu-related-card:hover {
        box-shadow: 0 15px 50px rgba(69, 0, 132, 0.2);
    }
    
    .jmu-related-card h3 {
        font-size: 1.35rem;
        font-weight: 800;
        margin-bottom: 20px;
        background: linear-gradient(135deg, var(--jmu-purple) 0%, var(--jmu-gold) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-align: center;
    }
    
    .jmu-related-card ul {
        list-style: none;
        padding: 0;
    }
    
    .jmu-related-card li {
        margin-bottom: 8px;
    }
    
    .jmu-related-card a {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        color: var(--jmu-text-secondary);
        font-weight: 500;
        padding: 12px 16px;
        border-radius: 12px;
        transition: all 0.3s ease;
        border: 1px solid transparent;
    }
    
    .jmu-related-card a:hover {
        background: rgba(69, 0, 132, 0.1);
        border-color: rgba(69, 0, 132, 0.3);
        color: var(--jmu-purple);
        transform: translateX(4px);
    }
    
    .dark-mode .jmu-related-card a:hover {
        background: rgba(69, 0, 132, 0.1);
        border-color: rgba(69, 0, 132, 0.3);
    }
    
    .jmu-related-card .fas {
        font-size: 1.1rem;
        color: var(--jmu-purple);
        min-width: 16px;
    }
    
    .jmu-ad-space {
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--jmu-text-muted);
        border-style: dashed;
    }
    
    .jmu-info-content {
        order: 3;
        background: var(--jmu-bg-secondary);
        border: 1px solid var(--jmu-border);
        border-radius: 24px;
        overflow: hidden;
        margin-top: 40px;
    }
    
    .dark-mode .jmu-info-content {
        background: linear-gradient(135deg, var(--jmu-bg-secondary) 0%, var(--jmu-bg-tertiary) 100%);
        backdrop-filter: blur(10px);
    }
    
    .jmu-info-header {
        background: linear-gradient(135deg, rgba(69, 0, 132, 0.2) 0%, rgba(203, 182, 119, 0.2) 100%);
        padding: 40px;
        text-align: center;
        border-bottom: 1px solid var(--jmu-border);
    }
    
    .dark-mode .jmu-info-header {
        background: linear-gradient(135deg, rgba(69, 0, 132, 0.2) 0%, rgba(203, 182, 119, 0.2) 100%);
    }
    
    .jmu-info-header h2 {
        font-size: 2.25rem;
        font-weight: 900;
        background: linear-gradient(135deg, var(--jmu-purple) 0%, var(--jmu-gold) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
    }
    
    .jmu-info-body {
        padding: 50px 40px;
        color: var(--jmu-text-secondary);
    }
    
    .jmu-info-body h3 {
        font-size: 1.75rem;
        font-weight: 800;
        margin: 2em 0 1em;
        position: relative;
        padding-left: 20px;
        color: var(--jmu-text-primary);
    }
    
    .jmu-info-body h3::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 24px;
        background: linear-gradient(135deg, var(--jmu-purple), var(--jmu-gold));
        border-radius: 2px;
    }
    
    .jmu-info-body p, .jmu-info-body li {
        font-size: 17px;
        line-height: 1.8;
        margin-bottom: 1em;
    }
    
    .jmu-info-body ul {
        padding-left: 20px;
    }
    
    .jmu-info-body strong {
        color: var(--jmu-purple);
    }
    
    .jmu-info-box {
        background: rgba(69, 0, 132, 0.1);
        border-left: 4px solid var(--jmu-purple);
        padding: 24px;
        margin: 30px 0;
        border-radius: 0 12px 12px 0;
    }
    
    .dark-mode .jmu-info-box {
        background: rgba(69, 0, 132, 0.1);
        border-left-color: var(--jmu-purple);
    }
    
    .jmu-info-box h4 {
        color: var(--jmu-purple);
        margin-top: 0;
    }
    
    .jmu-info-box ul {
        list-style: none;
        padding: 0;
    }
    
    .jmu-info-box ul li {
        position: relative;
        padding-left: 32px;
        margin-bottom: 12px;
        color: var(--jmu-text-secondary);
    }
    
    .jmu-info-box ul li::before {
        content: '💜'; /* JMU Purple Heart */
        position: absolute;
        left: 0;
        font-size: 1.1rem;
    }

    .jmu-info-box table {
        width: 100%;
        border-collapse: collapse;
        margin: 16px 0;
    }

    .jmu-info-box table th,
    .jmu-info-box table td {
        padding: 12px 16px;
        text-align: left;
        border-bottom: 1px solid var(--jmu-border);
    }

    .jmu-info-box table th {
        background: var(--jmu-purple);
        color: white;
        font-weight: 600;
    }

    .jmu-info-box table tr:hover {
        background: rgba(69, 0, 132, 0.05);
    }
    
    @media (min-width: 1200px) {
        .jmu-layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 380px;
            grid-template-areas:
                "main sidebar"
                "info info";
            gap: 40px;
            max-width: 1400px;
            padding: 40px;
        }
        .jmu-tool-container {
            grid-area: main;
            order: 0;
        }
        .jmu-sidebar {
            grid-area: sidebar;
            order: 0;
            align-self: start;
        }
        .jmu-info-content {
            grid-area: info;
            order: 0;
            margin-top: 0;
        }
    }
</style>

<div class="jmu-wrapper">
    <div class="jmu-layout">
        <div class="jmu-tool-container">
            <div class="jmu-tool-header">
                <h1><i class="fas fa-crown"></i> GPA Calculator for JMU</h1>
                <p>Go Dukes! Calculate Your Madison GPA</p>
            </div>
            <div class="jmu-tool-body">                
                <div id="gpa-tool">
                    <div class="jmu-input-group">
                        <label for="cumulative-gpa" class="jmu-label">Current Cumulative GPA (Optional)</label>
                        <input type="number" id="cumulative-gpa" class="jmu-input" placeholder="e.g., 3.45" step="0.01" min="0" max="4">
                    </div>
                    <div class="jmu-input-group">
                        <label for="cumulative-credits" class="jmu-label">Current Cumulative Credits (Optional)</label>
                        <input type="number" id="cumulative-credits" class="jmu-input" placeholder="e.g., 72" min="0">
                    </div>
                    
                    <h3 style="margin: 32px 0 24px 0; text-align: center; color: var(--jmu-text-primary); font-size: 1.375rem;">
                        <i class="fas fa-calendar-alt" style="color: var(--jmu-purple); margin-right: 10px;"></i>
                        Semester Management
                    </h3>

                    <div class="jmu-semester-tabs" id="semester-tabs">
                        <!-- Semester tabs will be dynamically added here -->
                    </div>

                    <div id="semesters-container">
                        <!-- Semester content will be dynamically added here -->
                    </div>

                    <button id="calculate-btn" class="jmu-calculate-btn">
                        <i class="fas fa-calculator"></i>
                        <span>Calculate My Duke GPA</span>
                    </button>

                    <div id="result-card" class="jmu-result-card" style="display: none;">
                        <div class="jmu-result-grid">
                            <div class="jmu-result-item">
                                <h4>Current Semester GPA</h4>
                                <div class="value" id="semester-gpa">0.00</div>
                            </div>
                            <div class="jmu-result-item">
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
        
        <div class="jmu-sidebar">
            <div class="jmu-ad-space">
                <div>
                    <i class="fas fa-ad fa-2x" style="margin-bottom: 10px; opacity: 0.5;"></i>
                    <p><strong>Advertisement Space</strong></p>
                    <p style="font-size: 0.9em; margin-top: 8px;">Reach JMU students here</p>
                </div>
            </div>

            <div class="jmu-related-card">
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

        <div class="jmu-info-content">
            <div class="jmu-info-header">
                <h2>Master Your JMU Academic Journey</h2>
            </div>
            <div class="jmu-info-body">
                <p>Welcome, Dukes! Whether you're grabbing Chick-fil-A at E-Hall, pulling an all-nighter at Rose Library, or catching a sunset from the ISAT rooftop, tracking your **JMU GPA** is essential. Located in the heart of the Shenandoah Valley, JMU's competitive programs demand academic excellence.</p>

                <h3>Understanding the JMU Grading Scale</h3>
                <p>JMU uses a detailed plus/minus grading system that can significantly impact your GPA. For example, the difference between an A- (3.70) and B+ (3.30) in a 4-credit course like BIO 140 or CHEM 131 means 1.6 quality points - enough to affect Dean's List eligibility.</p>
                
                <div class="jmu-info-box">
                    <table>
                        <thead>
                            <tr>
                                <th>Letter Grade</th>
                                <th>Quality Points</th>
                                <th>Percentage Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>A</td><td>4.00</td><td>93-100%</td></tr>
                            <tr><td>A-</td><td>3.70</td><td>90-92%</td></tr>
                            <tr><td>B+</td><td>3.30</td><td>87-89%</td></tr>
                            <tr><td>B</td><td>3.00</td><td>83-86%</td></tr>
                            <tr><td>B-</td><td>2.70</td><td>80-82%</td></tr>
                            <tr><td>C+</td><td>2.30</td><td>77-79%</td></tr>
                            <tr><td>C</td><td>2.00</td><td>73-76%</td></tr>
                            <tr><td>C-</td><td>1.70</td><td>70-72%</td></tr>
                            <tr><td>D+</td><td>1.30</td><td>67-69%</td></tr>
                            <tr><td>D</td><td>1.00</td><td>63-66%</td></tr>
                            <tr><td>D-</td><td>0.70</td><td>60-62%</td></tr>
                            <tr><td>F</td><td>0.00</td><td>Below 60%</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>JMU-Specific Academic Milestones</h3>
                
                <div class="jmu-info-box">
                    <h4>Critical GPA Benchmarks at Madison</h4>
                    <ul>
                        <li>**2.0 GPA:** Minimum to remain in good standing and keep your JACard privileges</li>
                        <li>**2.5 GPA:** Required for most major declarations (check your specific college)</li>
                        <li>**2.75 GPA:** Minimum for School of Nursing and Education programs</li>
                        <li>**3.0 GPA:** Required for College of Business progression</li>
                        <li>**3.25 GPA:** Eligibility for many JMU scholarships and study abroad programs</li>
                        <li>**3.5 GPA:** Dean's List (minimum 12 graded hours, no I/W grades)</li>
                        <li>**3.8+ GPA:** Summa Cum Laude at graduation (top 5% of class)</li>
                    </ul>
                </div>

                <h3>Strategic Tips from Successful Dukes</h3>
                
                <ul>
                    <li>**Use the Learning Centers:** Visit Roop Hall for STEM tutoring or the Writing Center in Wilson Hall - both are FREE</li>
                    <li>**GenEd Strategy:** Balance challenging Cluster courses with manageable ones each semester</li>
                    <li>**JAC Card Benefits:** Your meal plan includes guest passes - use them for study groups!</li>
                    <li>**ALEKS & Lab Sciences:** These weed-out courses (MATH 155, CHEM 131) can tank GPAs - get help early</li>
                    <li>**Grade Replacement:** You can repeat up to 2 courses - both grades show but only the higher counts</li>
                    <li>**MyMadison Tools:** Use DegreeWorks to track requirements and plan your schedule</li>
                    <li>**Purple Out Days:** Professors often give extra credit for attendance - every point helps!</li>
                </ul>

                <h3>JMU Program-Specific Requirements</h3>
                
                <div class="jmu-info-box">
                    <h4>Popular Major GPA Requirements (2024-2025)</h4>
                    <ul>
                        <li>**College of Business:** 3.0 overall GPA + completion of COB 202/204 with C or better</li>
                        <li>**School of Nursing:** 2.75 cumulative + 3.0 in prerequisite sciences</li>
                        <li>**SMAD (Media Arts):** 2.7 GPA + portfolio submission</li>
                        <li>**Engineering:** 2.0 in major + C or better in all ENGR courses</li>
                        <li>**Honors College:** 3.5 GPA to remain + thesis requirement</li>
                    </ul>
                </div>

                <h3>When Your GPA Needs Help</h3>
                
                <div class="jmu-info-box">
                    <h4>JMU Academic Recovery Resources</h4>
                    <p>If your GPA drops below 2.0, you'll receive an Academic Warning letter via your dukes email. Don't panic! JMU offers:</p>
                    <ul>
                        <li>**Success Coaching:** One-on-one meetings in SSC 1075</li>
                        <li>**Course Repeat Policy:** Retake up to 2 courses with grade replacement</li>
                        <li>**Summer Session:** Smaller classes at JMU can boost GPA</li>
                        <li>**Academic Renewal:** After 5 years away, you can petition to exclude old grades</li>
                    </ul>
                </div>

                <h3>Important Dates for GPA Management (Spring 2025)</h3>
                
                <ul>
                    <li>**January 13:** Classes begin - set GPA goals early!</li>
                    <li>**January 24:** Last day to add/drop without W grade</li>
                    <li>**March 17:** Course withdrawal deadline (W appears on transcript)</li>
                    <li>**April 4:** Last day to change to Credit/No Credit option</li>
                    <li>**May 5-9:** Finals week - use the 24-hour study spaces in Carrier</li>
                </ul>

                <h3>Beyond the Numbers: Your JMU Journey</h3>
                <p>While maintaining a strong GPA is important for opportunities like the **Washington Semester Program**, JMU Honors, or graduate school, remember that JMU values the whole person. Get involved with one of our 350+ student organizations, volunteer through Community Service-Learning, or join Madison Union's programming board. Employers and grad schools look at more than just your **Duke Dog GPA** - they want to see the engaged citizen that JMU helps you become.</p>

                <p>Ready to take control of your academic future? Use this **JMU academic calculator** regularly - we recommend checking after midterms and before finals. Save your results screenshot to track progress throughout your time in Harrisonburg. Remember: whether you're aiming for that Madison Achievement Award or just trying to keep your Valley Scholars benefits, every semester counts toward your ultimate goal of walking across that Bridgeforth Stadium stage in your cap and gown!</p>

                <p style="text-align: center; margin-top: 40px; padding-top: 40px; border-top: 2px solid var(--jmu-border); color: var(--jmu-text-muted); font-style: italic; font-size: 0.9375rem; line-height: 1.6;">
                    This calculator uses JMU's official grading scale as published in the 2024-2025 undergraduate catalog. For official GPA verification, log into MyMadison. Not affiliated with James Madison University. Be the Change! 💜💛
                </p>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const gradeScale = {
            'A': 4.00, 'A-': 3.70, 'B+': 3.30, 'B': 3.00, 'B-': 2.70,
            'C+': 2.30, 'C': 2.00, 'C-': 1.70, 'D+': 1.30, 'D': 1.00,
            'D-': 0.70, 'F': 0.00
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
            tab.className = 'jmu-semester-tab';
            tab.textContent = semesterName;
            tab.dataset.semester = semesterId;
            tab.addEventListener('click', () => switchSemester(semesterId));
            
            // Create add semester button if it doesn't exist
            let addBtn = tabsContainer.querySelector('.jmu-add-semester-btn');
            if (!addBtn) {
                addBtn = document.createElement('button');
                addBtn.className = 'jmu-add-semester-btn';
                addBtn.innerHTML = '<i class="fas fa-plus"></i> Add Semester';
                addBtn.addEventListener('click', () => createSemester());
                tabsContainer.appendChild(addBtn);
            }
            
            tabsContainer.insertBefore(tab, addBtn);
            
            // Create semester content
            const semesterContent = document.createElement('div');
            semesterContent.className = 'jmu-semester-content';
            semesterContent.id = semesterId;
            
            semesterContent.innerHTML = `
                <div class="jmu-semester-header">
                    <h3 class="jmu-semester-title">
                        <i class="fas fa-calendar-week"></i>
                        ${semesterName}
                    </h3>
                    <button class="jmu-delete-semester-btn" onclick="deleteSemester('${semesterId}')">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
                <div class="semester-courses" data-semester="${semesterId}">
                    <!-- Courses will be added here -->
                </div>
                <button class="jmu-add-row add-course-btn" data-semester="${semesterId}">
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
            document.querySelectorAll('.jmu-semester-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelector(`[data-semester="${semesterId}"]`).classList.add('active');
            
            // Update content
            document.querySelectorAll('.jmu-semester-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(semesterId).classList.add('active');
            
            activeSemester = semesterId;
        }

        function addCourse(semesterId) {
            const coursesList = document.querySelector(`.semester-courses[data-semester="${semesterId}"]`);
            const row = document.createElement('div');
            row.className = 'jmu-gpa-grid';
            
            row.innerHTML = `
                <input type="text" class="jmu-input course-name" placeholder="Course name (e.g., PSYC 101) -- Optional">
                <select class="jmu-input course-grade">
                    <option value="">Grade</option>
                    <option value="A">A (4.00)</option>
                    <option value="A-">A- (3.70)</option>
                    <option value="B+">B+ (3.30)</option>
                    <option value="B">B (3.00)</option>
                    <option value="B-">B- (2.70)</option>
                    <option value="C+">C+ (2.30)</option>
                    <option value="C">C (2.00)</option>
                    <option value="C-">C- (1.70)</option>
                    <option value="D+">D+ (1.30)</option>
                    <option value="D">D (1.00)</option>
                    <option value="D-">D- (0.70)</option>
                    <option value="F">F (0.00)</option>
                </select>
                <input type="number" class="jmu-input course-credits" placeholder="Credits" min="0" max="6" step="0.5">
                <button class="jmu-remove-row"><i class="fas fa-trash-alt"></i></button>
            `;
            
            coursesList.appendChild(row);

            row.querySelector('.jmu-remove-row').addEventListener('click', () => {
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
            if (document.querySelectorAll('.jmu-semester-content').length <= 1) {
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
                    const firstTab = document.querySelector('.jmu-semester-tab');
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
                document.querySelectorAll('.jmu-semester-content').forEach(semesterContent => {
                    const rows = semesterContent.querySelectorAll('.jmu-gpa-grid');
                    
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
                const activeCourses = document.querySelectorAll(`#${activeSemester} .jmu-gpa-grid`);
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
                calculateBtn.innerHTML = '<i class="fas fa-calculator"></i><span>Calculate My Duke GPA</span>';
            }, 1000);
        }

        function displayGPAAnalysis(semesterGPA, cumulativeGPA) {
            const analysisDiv = document.getElementById('gpa-analysis');
            let analysis = '';
            let statusClass = '';
            
            if (cumulativeGPA >= 3.8) {
                analysis = '🎓 Outstanding! You\'re on track for Summa Cum Laude honors at JMU!';
                statusClass = 'color: var(--jmu-success)';
            } else if (cumulativeGPA >= 3.5) {
                analysis = '🌟 Excellent work! You qualify for JMU Dean\'s List recognition!';
                statusClass = 'color: var(--jmu-success)';
            } else if (cumulativeGPA >= 3.25) {
                analysis = '👍 Great job! You\'re eligible for most JMU scholarships and study abroad programs!';
                statusClass = 'color: var(--jmu-success)';
            } else if (cumulativeGPA >= 3.0) {
                analysis = '📚 Good progress! You meet College of Business requirements!';
                statusClass = 'color: var(--jmu-warning)';
            } else if (cumulativeGPA >= 2.5) {
                analysis = '⚠️ You\'re in good standing but consider using JMU\'s academic support resources.';
                statusClass = 'color: var(--jmu-warning)';
            } else if (cumulativeGPA >= 2.0) {
                analysis = '📖 You\'re maintaining minimum requirements. Visit the Learning Centers for support!';
                statusClass = 'color: var(--jmu-warning)';
            } else {
                analysis = '🚨 Academic warning territory. Contact Student Success for immediate support!';
                statusClass = 'color: var(--jmu-danger)';
            }
            
            analysisDiv.innerHTML = `
                <div style="background: rgba(69, 0, 132, 0.05); border-radius: 12px; padding: 20px; border-left: 4px solid var(--jmu-purple);">
                    <h4 style="color: var(--jmu-purple); margin-bottom: 12px;">Your JMU Academic Standing</h4>
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
            
            document.querySelectorAll('.jmu-semester-content').forEach(semester => {
                const semesterId = semester.id;
                const courses = [];
                
                semester.querySelectorAll('.jmu-gpa-grid').forEach(row => {
                    courses.push({
                        name: row.querySelector('.course-name').value,
                        grade: row.querySelector('.course-grade').value,
                        credits: row.querySelector('.course-credits').value
                    });
                });
                
                data.semesters[semesterId] = {
                    name: semester.querySelector('.jmu-semester-title').textContent.trim(),
                    courses: courses
                };
            });
            
            localStorage.setItem('jmu-gpa-calculator', JSON.stringify(data));
        }

        // Auto-save every 30 seconds
        setInterval(autoSave, 30000);
        
        // Auto-save on input changes
        document.addEventListener('input', function(e) {
            if (e.target.matches('.jmu-input')) {
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

        // Load saved data on page load (optional enhancement)
        function loadSaved() {
            const saved = localStorage.getItem('jmu-gpa-calculator');
            if (saved) {
                try {
                    const data = JSON.parse(saved);
                    cumulativeGpaInput.value = data.existingGPA || '';
                    cumulativeCreditsInput.value = data.existingCredits || '';
                } catch (e) {
                    console.log('Could not load saved data');
                }
            }
        }

        loadSaved();
    });
</script>
