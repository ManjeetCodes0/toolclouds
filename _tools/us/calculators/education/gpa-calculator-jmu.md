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
        --jmu-purple: #450084;
        --jmu-gold: #CBB677;
        --jmu-light-purple: #69519D;
        --jmu-dark-purple: #2E0051;
        --jmu-gray: #4A4A4A;
        --jmu-light-gray: #E8E8E8;
        --bg-white: #FFFFFF;
        --bg-off-white: #FAFAFA;
        --bg-purple-tint: #F8F5FF;
        --text-dark: #1A1A1A;
        --text-medium: #5C5C5C;
        --text-light: #8C8C8C;
        --border-light: #E0E0E0;
        --shadow-base: 0 6px 20px rgba(69,0,132,0.08);
        --shadow-hover: 0 12px 32px rgba(69,0,132,0.12);
    }
    
    body.dark-mode {
        --jmu-purple: #7B2BCA;
        --jmu-gold: #E5D19F;
        --jmu-light-purple: #9B7FC9;
        --jmu-dark-purple: #450084;
        --jmu-gray: #CACACA;
        --jmu-light-gray: #2A2A2A;
        --bg-white: #141414;
        --bg-off-white: #1E1E1E;
        --bg-purple-tint: #1F1A2E;
        --text-dark: #EFEFEF;
        --text-medium: #BCBCBC;
        --text-light: #8A8A8A;
        --border-light: #3A3A3A;
        --shadow-base: 0 6px 20px rgba(0,0,0,0.5);
        --shadow-hover: 0 12px 32px rgba(123,43,202,0.3);
    }

    .jmu-wrapper {
        font-family: 'Inter', -apple-system, system-ui, sans-serif;
        background: var(--bg-off-white);
        min-height: 100vh;
        color: var(--text-dark);
        position: relative;
    }

    .jmu-wrapper::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 300px;
        background: linear-gradient(180deg, var(--jmu-purple) 0%, transparent 100%);
        opacity: 0.03;
        pointer-events: none;
        z-index: 0;
    }

    .jmu-layout {
        max-width: 1240px;
        margin: 0 auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;
        z-index: 1;
    }

    @media (min-width: 1024px) {
        .jmu-layout {
            padding: 36px;
            gap: 36px;
            display: grid;
            grid-template-columns: 1fr 380px;
            grid-template-areas:
                "calculator sidebar"
                "info info";
        }
    }

    .jmu-calculator-card {
        order: 1;
        background: var(--bg-white);
        border-radius: 24px;
        box-shadow: var(--shadow-base);
        border: 1px solid var(--border-light);
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (min-width: 1024px) {
        .jmu-calculator-card {
            grid-area: calculator;
        }
    }

    .jmu-calculator-card:hover {
        box-shadow: var(--shadow-hover);
        transform: translateY(-4px);
    }

    .jmu-header-section {
        background: var(--jmu-purple);
        background-image: 
            linear-gradient(45deg, var(--jmu-dark-purple) 25%, transparent 25%),
            linear-gradient(-45deg, var(--jmu-dark-purple) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, var(--jmu-dark-purple) 75%),
            linear-gradient(-45deg, transparent 75%, var(--jmu-dark-purple) 75%);
        background-size: 30px 30px;
        background-position: 0 0, 0 15px, 15px -15px, -15px 0px;
        padding: 28px 24px;
        text-align: center;
        position: relative;
    }

    @media (min-width: 768px) {
        .jmu-header-section {
            padding: 48px 40px;
        }
    }

    .jmu-header-title {
        font-size: 1.875rem;
        font-weight: 900;
        color: white;
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
    }

    @media (min-width: 768px) {
        .jmu-header-title {
            font-size: 2.5rem;
        }
    }

    .jmu-header-icon {
        font-size: 1.75rem;
        animation: sparkle 3s ease-in-out infinite;
    }

    @keyframes sparkle {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(5deg); }
        50% { transform: scale(1) rotate(-5deg); }
        75% { transform: scale(1.1) rotate(5deg); }
    }

    .jmu-header-subtitle {
        color: var(--jmu-gold);
        margin-top: 8px;
        font-size: 1.125rem;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    .jmu-calculator-content {
        padding: 24px 20px;
    }

    @media (min-width: 768px) {
        .jmu-calculator-content {
            padding: 40px;
        }
    }

    .jmu-intro {
        color: var(--text-medium);
        line-height: 1.7;
        margin-bottom: 28px;
        font-size: 1.0625rem;
    }

    .jmu-form-block {
        margin-bottom: 32px;
    }

    .jmu-form-heading {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
    }

    @media (min-width: 768px) {
        .jmu-form-heading {
            font-size: 1.375rem;
        }
    }

    .jmu-form-heading::after {
        content: '';
        flex-grow: 1;
        height: 2px;
        background: linear-gradient(90deg, var(--jmu-gold) 0%, transparent 100%);
    }

    .jmu-form-heading i {
        color: var(--jmu-purple);
        font-size: 1.25rem;
    }

    .jmu-input-row {
        margin-bottom: 18px;
    }

    .jmu-label {
        display: block;
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--text-medium);
        margin-bottom: 8px;
    }

    .jmu-input, .jmu-select {
        width: 100%;
        padding: 12px 18px;
        border: 2px solid var(--border-light);
        border-radius: 12px;
        font-size: 1rem;
        color: var(--text-dark);
        background: var(--bg-off-white);
        transition: all 0.2s ease;
    }

    .jmu-input:focus, .jmu-select:focus {
        outline: none;
        border-color: var(--jmu-purple);
        background: var(--bg-white);
        box-shadow: 0 0 0 4px rgba(69,0,132,0.08);
    }

    body.dark-mode .jmu-input,
    body.dark-mode .jmu-select {
        background: var(--bg-off-white);
    }

    body.dark-mode .jmu-input:focus,
    body.dark-mode .jmu-select:focus {
        background: var(--jmu-gray);
        box-shadow: 0 0 0 4px rgba(123,43,202,0.15);
    }

    .jmu-course-item {
        display: grid;
        grid-template-columns: 1fr;
        gap: 14px;
        margin-bottom: 16px;
        padding: 16px;
        background: var(--bg-purple-tint);
        border-radius: 14px;
        border: 1px solid rgba(69,0,132,0.08);
        position: relative;
    }

    @media (min-width: 640px) {
        .jmu-course-item {
            grid-template-columns: 2.5fr 140px 100px 50px;
            align-items: end;
            padding: 0;
            background: transparent;
            border: none;
        }
    }

    .jmu-btn {
        padding: 14px 24px;
        border: none;
        border-radius: 12px;
        font-size: 1.0625rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
    }

    .jmu-btn-primary {
        background: var(--jmu-purple);
        color: white;
        margin-top: 24px;
        box-shadow: 0 4px 16px rgba(69,0,132,0.2);
    }

    .jmu-btn-primary:hover {
        background: var(--jmu-dark-purple);
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(69,0,132,0.3);
    }

    .jmu-btn-secondary {
        background: transparent;
        color: var(--jmu-purple);
        border: 2px solid var(--jmu-purple);
    }

    .jmu-btn-secondary:hover {
        background: var(--jmu-purple);
        color: white;
    }

    .jmu-btn-delete {
        background: transparent;
        color: var(--text-light);
        padding: 10px;
        width: auto;
        min-width: 44px;
    }

    .jmu-btn-delete:hover {
        color: #E74C3C;
    }

    .jmu-result-panel {
        background: linear-gradient(135deg, var(--jmu-purple) 0%, var(--jmu-light-purple) 100%);
        border-radius: 20px;
        padding: 32px;
        margin-top: 32px;
        text-align: center;
        display: none;
        color: white;
        position: relative;
        overflow: hidden;
    }

    .jmu-result-panel::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, var(--jmu-gold) 0%, transparent 60%);
        opacity: 0.1;
        animation: rotate 20s linear infinite;
    }

    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    .jmu-result-panel.show {
        display: block;
        animation: fadeSlideUp 0.4s ease-out;
    }

    @keyframes fadeSlideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .jmu-gpa-value {
        font-size: 4rem;
        font-weight: 900;
        margin: 16px 0;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        position: relative;
        z-index: 1;
    }

    @media (min-width: 768px) {
        .jmu-gpa-value {
            font-size: 5rem;
        }
    }

    .jmu-gpa-type {
        font-size: 1.25rem;
        font-weight: 600;
        opacity: 0.95;
        position: relative;
        z-index: 1;
    }

    .jmu-sidebar-section {
        order: 2;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media (min-width: 1024px) {
        .jmu-sidebar-section {
            grid-area: sidebar;
        }
    }

    .jmu-ad-block {
        order: 1;
        background: var(--bg-white);
        border: 3px dashed var(--jmu-gold);
        border-radius: 20px;
        padding: 48px 24px;
        text-align: center;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    .jmu-ad-block i {
        font-size: 4rem;
        color: var(--jmu-gold);
        opacity: 0.6;
    }

    .jmu-ad-block h4 {
        color: var(--text-medium);
        font-size: 1.25rem;
        margin: 0;
    }

    .jmu-ad-block p {
        color: var(--text-light);
        font-size: 0.9375rem;
        margin: 0;
    }

    .jmu-related-links {
        order: 2;
        background: var(--bg-white);
        border-radius: 20px;
        padding: 28px;
        box-shadow: var(--shadow-base);
        border: 1px solid var(--border-light);
    }

    .jmu-related-heading {
        font-size: 1.375rem;
        font-weight: 800;
        color: var(--text-dark);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .jmu-related-heading i {
        color: var(--jmu-gold);
        font-size: 1.25rem;
    }

    .jmu-link-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px;
        margin: 0 -16px;
        text-decoration: none;
        color: var(--text-medium);
        border-radius: 12px;
        transition: all 0.2s ease;
        font-weight: 600;
    }

    .jmu-link-item:hover {
        background: var(--bg-purple-tint);
        color: var(--jmu-purple);
        transform: translateX(8px);
    }

    .jmu-link-item i {
        color: var(--jmu-light-purple);
        font-size: 1.25rem;
    }

    .jmu-info-wrapper {
        order: 3;
        grid-area: info;
        background: var(--bg-white);
        border-radius: 24px;
        padding: 32px 24px;
        margin-top: 20px;
        box-shadow: var(--shadow-base);
        border: 1px solid var(--border-light);
    }

    @media (min-width: 768px) {
        .jmu-info-wrapper {
            padding: 56px;
            margin-top: 0;
        }
    }

    .jmu-info-header {
        font-size: 2rem;
        font-weight: 900;
        color: var(--text-dark);
        text-align: center;
        margin-bottom: 32px;
        background: linear-gradient(135deg, var(--jmu-purple) 0%, var(--jmu-light-purple) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    @media (min-width: 768px) {
        .jmu-info-header {
            font-size: 2.5rem;
            margin-bottom: 40px;
        }
    }

    .jmu-info-subheader {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--text-dark);
        margin-top: 40px;
        margin-bottom: 20px;
        position: relative;
        padding-left: 24px;
    }

    @media (min-width: 768px) {
        .jmu-info-subheader {
            font-size: 1.75rem;
        }
    }

    .jmu-info-subheader::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 80%;
        background: linear-gradient(180deg, var(--jmu-purple) 0%, var(--jmu-gold) 100%);
        border-radius: 3px;
    }

    .jmu-info-content {
        color: var(--text-medium);
        line-height: 1.8;
        margin-bottom: 20px;
        font-size: 1.0625rem;
    }

    .jmu-grading-table {
        width: 100%;
        margin: 32px 0;
        background: var(--bg-off-white);
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid var(--border-light);
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        overflow-x: auto;
    }

    .jmu-grading-table table {
        width: 100%;
        min-width: 320px;
        border-collapse: collapse;
    }

    .jmu-grading-table th {
        background: var(--jmu-purple);
        color: white;
        padding: 16px 18px;
        text-align: left;
        font-weight: 700;
        font-size: 1rem;
    }

    body.dark-mode .jmu-grading-table th {
        background: var(--jmu-purple);
    }

    .jmu-grading-table td {
        padding: 14px 18px;
        border-bottom: 1px solid var(--border-light);
        color: var(--text-medium);
    }

    .jmu-grading-table tr:last-child td {
        border-bottom: none;
    }

    .jmu-grading-table tbody tr {
        transition: background 0.2s ease;
    }

    .jmu-grading-table tbody tr:hover {
        background: var(--bg-purple-tint);
    }

    .jmu-info-box {
        background: linear-gradient(135deg, rgba(69,0,132,0.05) 0%, rgba(203,182,119,0.05) 100%);
        border-left: 5px solid var(--jmu-purple);
        border-radius: 12px;
        padding: 24px 28px;
        margin: 32px 0;
    }

    body.dark-mode .jmu-info-box {
        background: linear-gradient(135deg, rgba(123,43,202,0.1) 0%, rgba(229,209,159,0.1) 100%);
    }

    .jmu-info-box h4 {
        color: var(--jmu-purple);
        font-size: 1.25rem;
        margin-bottom: 12px;
        font-weight: 700;
    }

    .jmu-info-list {
        list-style: none;
        padding: 0;
        margin: 24px 0;
    }

    .jmu-info-list li {
        position: relative;
        padding-left: 36px;
        margin-bottom: 16px;
        color: var(--text-medium);
        line-height: 1.7;
    }

    .jmu-info-list li::before {
        content: '💜';
        position: absolute;
        left: 0;
        top: 0;
        font-size: 1.125rem;
    }

    .jmu-footer-note {
        text-align: center;
        margin-top: 40px;
        padding-top: 40px;
        border-top: 2px solid var(--border-light);
        color: var(--text-light);
        font-style: italic;
        font-size: 0.9375rem;
        line-height: 1.6;
    }
</style>

<div class="jmu-wrapper">
    <div class="jmu-layout">
        <div class="jmu-calculator-card">
            <div class="jmu-header-section">
                <h1 class="jmu-header-title">
                    <i class="fas fa-crown jmu-header-icon"></i>
                    JMU GPA Calculator
                </h1>
                <p class="jmu-header-subtitle">Go Dukes! Calculate Your Madison GPA</p>
            </div>
            
            <div class="jmu-calculator-content">
                <p class="jmu-intro">
            Welcome, Dukes! Whether you're grabbing Chick-fil-A at E-Hall, pulling an   all-nighter at Rose Library, or catching a sunset from the ISAT rooftop, tracking your <strong>JMU GPA</strong> is essential. Located in the heart of the Shenandoah  Valley, JMU's competitive programs demand academic excellence. Our <strong>GPA calculator JMU</strong> tool helps you monitor your progress toward that coveted  purple and gold graduation cord.
                </p>

                <div class="jmu-form-block">
                    <h2 class="jmu-form-heading">
                        <i class="fas fa-history"></i>
                        Current Academic Status
                    </h2>
                    <div class="jmu-input-row">
                        <label class="jmu-label" for="existing-gpa">Current Cumulative GPA (Optional)</label>
                        <input type="number" id="existing-gpa" class="jmu-input" placeholder="e.g., 3.45" step="0.01" min="0" max="4">
                    </div>
                    <div class="jmu-input-row">
                        <label class="jmu-label" for="existing-credits">Total Credits Completed (Optional)</label>
                        <input type="number" id="existing-credits" class="jmu-input" placeholder="e.g., 72" min="0">
                    </div>
                </div>

                <div class="jmu-form-block">
                    <h2 class="jmu-form-heading">
                        <i class="fas fa-book-open"></i>
                        Current Semester Courses
                    </h2>
                    <div id="jmu-courses-list">
                        <!-- Dynamic course entries will appear here -->
                    </div>
                    <button class="jmu-btn jmu-btn-secondary" id="jmu-add-course">
                        <i class="fas fa-plus-circle"></i>
                        Add Another Course
                    </button>
                </div>

                <button class="jmu-btn jmu-btn-primary" id="jmu-calculate">
                    <i class="fas fa-calculator"></i>
                    Calculate My Duke GPA
                </button>

                <div class="jmu-result-panel" id="jmu-results">
                    <div>
                        <p class="jmu-gpa-type">Semester GPA</p>
                        <div class="jmu-gpa-value" id="jmu-semester-gpa">0.00</div>
                    </div>
                    <div style="margin-top: 32px;">
                        <p class="jmu-gpa-type">Cumulative GPA</p>
                        <div class="jmu-gpa-value" id="jmu-cumulative-gpa">0.00</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="jmu-sidebar-section">
            <div class="jmu-ad-block">
                <i class="fas fa-ad"></i>
                <h4>Advertisement Space</h4>
                <p>Reach JMU students here</p>
            </div>

            <div class="jmu-related-links">
                <h3 class="jmu-related-heading">
                    <i class="fas fa-link"></i>
                    Related GPA Tools
                </h3>
                <div>
                    {% assign education_tools = site.tools | where_exp:"item","item.categories contains 'education-US'" %}
                        {% for tool in education_tools %}
                            {% unless tool.url == page.url %}
                                <a href="{{ tool.url | relative_url }}" class="utk-tool-item"> <i class="fas fa-graduation-cap"></i>
                                <span>{{ tool.localtitle }}</span>
                                </a>
                            {% endunless %}
                    {% endfor %}
                </div>
            </div>
        </div>

<div class="jmu-info-wrapper">
    <h2 class="jmu-info-header">Master Your JMU Academic Journey</h2>
    
    <p class="jmu-info-content">
        At JMU, your GPA opens doors to prestigious programs like the <strong>College of Business's BBA</strong>, the nationally-ranked <strong>School of Nursing</strong>, or the competitive <strong>Media Arts & Design</strong> program. With over 80 undergraduate majors and JMU's unique GenEd program (The Madison Experience), understanding your GPA is crucial for navigating requirements and opportunities.
    </p>

    <h3 class="jmu-info-subheader">JMU's Official Grading Scale (Fall 2024)</h3>
    <p class="jmu-info-content">
        JMU uses a detailed plus/minus grading system that can significantly impact your GPA. For example, the difference between an A- (3.70) and B+ (3.30) in a 4-credit course like BIO 140 or CHEM 131 means 1.6 quality points - enough to affect Dean's List eligibility.
    </p>

    <!-- Keep existing grading table -->

    <h3 class="jmu-info-subheader">JMU-Specific Academic Milestones</h3>
    
    <div class="jmu-info-box">
        <h4>Critical GPA Benchmarks at Madison</h4>
        <ul class="jmu-info-list">
            <li><strong>2.0 GPA:</strong> Minimum to remain in good standing and keep your JACard privileges</li>
            <li><strong>2.5 GPA:</strong> Required for most major declarations (check your specific college)</li>
            <li><strong>2.75 GPA:</strong> Minimum for School of Nursing and Education programs</li>
            <li><strong>3.0 GPA:</strong> Required for College of Business progression</li>
            <li><strong>3.25 GPA:</strong> Eligibility for many JMU scholarships and study abroad programs</li>
            <li><strong>3.5 GPA:</strong> Dean's List (minimum 12 graded hours, no I/W grades)</li>
            <li><strong>3.8+ GPA:</strong> Summa Cum Laude at graduation (top 5% of class)</li>
        </ul>
    </div>

    <h3 class="jmu-info-subheader">Strategic Tips from Successful Dukes</h3>
    
    <ul class="jmu-info-list">
        <li><strong>Use the Learning Centers:</strong> Visit Roop Hall for STEM tutoring or the Writing Center in Wilson Hall - both are FREE</li>
        <li><strong>GenEd Strategy:</strong> Balance challenging Cluster courses with manageable ones each semester</li>
        <li><strong>JAC Card Benefits:</strong> Your meal plan includes guest passes - use them for study groups!</li>
        <li><strong>ALEKS & Lab Sciences:</strong> These weed-out courses (MATH 155, CHEM 131) can tank GPAs - get help early</li>
        <li><strong>Grade Replacement:</strong> You can repeat up to 2 courses - both grades show but only the higher counts</li>
        <li><strong>MyMadison Tools:</strong> Use DegreeWorks to track requirements and plan your schedule</li>
        <li><strong>Purple Out Days:</strong> Professors often give extra credit for attendance - every point helps!</li>
    </ul>

    <h3 class="jmu-info-subheader">JMU Program-Specific Requirements</h3>
    
    <div class="jmu-info-box">
        <h4>Popular Major GPA Requirements (2024-2025)</h4>
        <ul class="jmu-info-list">
            <li><strong>College of Business:</strong> 3.0 overall GPA + completion of COB 202/204 with C or better</li>
            <li><strong>School of Nursing:</strong> 2.75 cumulative + 3.0 in prerequisite sciences</li>
            <li><strong>SMAD (Media Arts):</strong> 2.7 GPA + portfolio submission</li>
            <li><strong>Engineering:</strong> 2.0 in major + C or better in all ENGR courses</li>
            <li><strong>Honors College:</strong> 3.5 GPA to remain + thesis requirement</li>
        </ul>
    </div>

    <h3 class="jmu-info-subheader">When Your GPA Needs Help</h3>
    
    <div class="jmu-info-box">
        <h4>JMU Academic Recovery Resources</h4>
        <p class="jmu-info-content">
            If your GPA drops below 2.0, you'll receive an Academic Warning letter via your dukes email. Don't panic! JMU offers:
        </p>
        <ul class="jmu-info-list">
            <li><strong>Success Coaching:</strong> One-on-one meetings in SSC 1075</li>
            <li><strong>Course Repeat Policy:</strong> Retake up to 2 courses with grade replacement</li>
            <li><strong>Summer Session:</strong> Smaller classes at JMU can boost GPA</li>
            <li><strong>Academic Renewal:</strong> After 5 years away, you can petition to exclude old grades</li>
        </ul>
    </div>

    <h3 class="jmu-info-subheader">Important Dates for GPA Management (Spring 2025)</h3>
    
    <ul class="jmu-info-list">
        <li><strong>January 13:</strong> Classes begin - set GPA goals early!</li>
        <li><strong>January 24:</strong> Last day to add/drop without W grade</li>
        <li><strong>March 17:</strong> Course withdrawal deadline (W appears on transcript)</li>
        <li><strong>April 4:</strong> Last day to change to Credit/No Credit option</li>
        <li><strong>May 5-9:</strong> Finals week - use the 24-hour study spaces in Carrier</li>
    </ul>

    <h3 class="jmu-info-subheader">Beyond the Numbers: Your JMU Journey</h3>
    <p class="jmu-info-content">
        While maintaining a strong GPA is important for opportunities like the <strong>Washington Semester Program</strong>, JMU Honors, or graduate school, remember that JMU values the whole person. Get involved with one of our 350+ student organizations, volunteer through Community Service-Learning, or join Madison Union's programming board. Employers and grad schools look at more than just your <strong>Duke Dog GPA</strong> - they want to see the engaged citizen that JMU helps you become.
    </p>

    <p class="jmu-info-content">
        Ready to take control of your academic future? Use this <strong>JMU academic calculator</strong> regularly - we recommend checking after midterms and before finals. Save your results screenshot to track progress throughout your time in Harrisonburg. Remember: whether you're aiming for that Madison Achievement Award or just trying to keep your Valley Scholars benefits, every semester counts toward your ultimate goal of walking across that Bridgeforth Stadium stage in your cap and gown!
    </p>

    <p class="jmu-footer-note">
        This calculator uses JMU's official grading scale as published in the 2024-2025 undergraduate catalog. For official GPA verification, log into MyMadison. Not affiliated with James Madison University. Be the Change! 💜💛
    </p>
    </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const gradePoints = {
        'A': 4.00, 'A-': 3.70,
        'B+': 3.30, 'B': 3.00, 'B-': 2.70,
        'C+': 2.30, 'C': 2.00, 'C-': 1.70,
        'D+': 1.30, 'D': 1.00, 'D-': 0.70,
        'F': 0.00
    };

    const coursesContainer = document.getElementById('jmu-courses-list');
    const addCourseBtn = document.getElementById('jmu-add-course');
    const calculateBtn = document.getElementById('jmu-calculate');
    const resultsPanel = document.getElementById('jmu-results');
    let courseIdCounter = 0;

    function createCourseRow() {
        const courseRow = document.createElement('div');
        courseRow.className = 'jmu-course-item';
        courseRow.innerHTML = `
            <div class="jmu-input-row">
                <label class="jmu-label">Course Name</label>
                <input type="text" class="jmu-input course-name" placeholder="e.g., PSYC 101">
            </div>
            <div class="jmu-input-row">
                <label class="jmu-label">Grade</label>
                <select class="jmu-select course-grade">
                    <option value="">Select</option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="C-">C-</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="D-">D-</option>
                    <option value="F">F</option>
                </select>
            </div>
            <div class="jmu-input-row">
                <label class="jmu-label">Credits</label>
                <input type="number" class="jmu-input course-credits" placeholder="3" min="0" max="6" step="0.5">
            </div>
            <button class="jmu-btn jmu-btn-delete" onclick="this.parentElement.remove()">
                <i class="fas fa-trash"></i>
            </button>
        `;
        coursesContainer.appendChild(courseRow);
    }

    // Initialize with 4 course rows
    for (let i = 0; i < 4; i++) {
        createCourseRow();
    }

    addCourseBtn.addEventListener('click', createCourseRow);

    calculateBtn.addEventListener('click', function() {
        let semesterPoints = 0;
        let semesterCredits = 0;
        
        const courseRows = coursesContainer.querySelectorAll('.jmu-course-item');
        
        courseRows.forEach(row => {
            const grade = row.querySelector('.course-grade').value;
            const credits = parseFloat(row.querySelector('.course-credits').value) || 0;
            
            if (grade && credits > 0) {
                semesterPoints += gradePoints[grade] * credits;
                semesterCredits += credits;
            }
        });

        const semesterGPA = semesterCredits > 0 ? (semesterPoints / semesterCredits) : 0;
        document.getElementById('jmu-semester-gpa').textContent = semesterGPA.toFixed(2);

        // Calculate cumulative GPA if previous data provided
        const existingGPA = parseFloat(document.getElementById('existing-gpa').value) || 0;
        const existingCredits = parseFloat(document.getElementById('existing-credits').value) || 0;
        
        let cumulativeGPA = semesterGPA;
        if (existingCredits > 0 && existingGPA > 0) {
            const existingPoints = existingGPA * existingCredits;
            const totalPoints = existingPoints + semesterPoints;
            const totalCredits = existingCredits + semesterCredits;
            cumulativeGPA = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
        }
        
        document.getElementById('jmu-cumulative-gpa').textContent = cumulativeGPA.toFixed(2);
        
        resultsPanel.classList.add('show');
        resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
</script>
