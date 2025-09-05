---
title: "Rutgers University GPA Calculator with Academic Deadlines"
localtitle: "Rutgers GPA Calculator"
layout: tool
categories: [calculators-US, education-US]
permalink: /us/calculators/education/gpa-calculator-rutgers
description: "A free online GPA calculator for Rutgers students. Accurately calculate your semester and cumulative GPA, understand the official grading scale, and plan for key academic deadlines."
lang: en-US
region: US
tags:
  - "gpa calculator rutgers"
  - "rutgers gpa"
  - "rutgers grade point average"
  - "college gpa calculator"
  - "rutgers academics"
  - "how to calculate rutgers gpa"
  - "rutgers grading scale"
  - "what is a gpa"
  - "gpa requirements rutgers"
  - "rutgers gpa scale"
  - "college grade calculator"
  - "rutgers academic calendar"

schema:
  "@context": "https://schema.org"
  "@type": "WebApplication"
  "name": "Rutgers University GPA Calculator"
  "url": "https://toolsclouds.com/us/calculators/education/gpa-calculator-rutgers"
  "description": "Calculate your Rutgers GPA using the official grading scale. Track Scarlet Knight semester and cumulative GPA with academic deadline reminders."
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
      "name": "What is the Rutgers grading scale?"
      "acceptedAnswer":
        "@type": "Answer"
        "text": "Rutgers uses: A = 4.0, B+ = 3.5, B = 3.0, C+ = 2.5, C = 2.0, D = 1.0, F = 0.0. Some schools within Rutgers may have slight variations."
    - "@type": "Question"
      "name": "What GPA do I need for Rutgers Dean's List?"
      "acceptedAnswer":
        "@type": "Answer"
        "text": "Rutgers Dean's List requires a 3.5 semester GPA with at least 12 credits of graded coursework (no Pass/No Credit)."
    - "@type": "Question"
      "name": "How does Rutgers calculate cumulative GPA?"
      "acceptedAnswer":
        "@type": "Answer"
        "text": "Rutgers calculates cumulative GPA by dividing total grade points earned by total credit hours attempted. Only courses taken at Rutgers count toward your Rutgers GPA."
    - "@type": "Question"
      "name": "What is the E-credit option at Rutgers?"
      "acceptedAnswer":
        "@type": "Answer"
        "text": "E-credit allows you to repeat up to 16 credits where the new grade replaces the old in GPA calculation, though both grades appear on transcript."
    - "@type": "Question"
      "name": "When is the Rutgers add/drop deadline?"
      "acceptedAnswer":
        "@type": "Answer"
        "text": "Add/drop deadlines vary by semester but typically end after the first week of classes. Check the official Rutgers academic calendar for exact dates."
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<style>
    :root {
        --at-primary: #CC0033; /* Rutgers Scarlet */
        --at-primary-dark: #990026;
        --at-secondary: #000000; /* Secondary for contrast */
        --at-secondary-light: #444444;
        --at-accent: #fcd34d; /* Yellow */
        --at-bg-light: #f3f4f6;
        --at-bg-secondary: #ffffff;
        --at-bg-tertiary: #f9fafb;
        --at-text-primary: #1f2937;
        --at-text-secondary: #4b5563;
        --at-text-muted: #6b7280;
        --at-border: #e5e7eb;
        --at-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    }
    .dark-mode {
        --at-primary: #CC0033; /* Rutgers Scarlet */
        --at-primary-dark: #A60029;
        --at-secondary: #f9fafb;
        --at-secondary-light: #e5e7eb;
        --at-accent: #f59e0b;
        --at-bg-light: #111827;
        --at-bg-secondary: #1f2937;
        --at-bg-tertiary: #374151;
        --at-text-primary: #f9fafb;
        --at-text-secondary: #e5e7eb;
        --at-text-muted: #9ca3af;
        --at-border: rgba(156, 163, 175, 0.2);
    }

    .at-wrapper {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background: var(--at-bg-light);
        min-height: 100vh;
        color: var(--at-text-primary);
        position: relative;
    }
    .at-wrapper.dark-mode::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:
            radial-gradient(circle at 20% 50%, rgba(204, 0, 51, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.1) 0%, transparent 50%),
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
        background: linear-gradient(135deg, rgba(204, 0, 51, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
        padding: 30px;
        text-align: center;
        border-bottom: 1px solid var(--at-border);
    }
    .dark-mode .at-tool-header {
        background: linear-gradient(135deg, rgba(204, 0, 51, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
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
    }
    .at-input:focus {
        outline: none;
        border-color: var(--at-primary);
        box-shadow: 0 0 0 3px rgba(204, 0, 51, 0.2);
    }
    .dark-mode .at-input {
        background: var(--at-bg-tertiary);
        color: var(--at-text-primary);
    }
    .dark-mode .at-input:focus {
        box-shadow: 0 0 0 3px rgba(204, 0, 51, 0.2);
    }

    .at-gpa-grid {
        display: grid;
        grid-template-columns: 1fr 100px 100px 30px;
        gap: 12px;
        align-items: center;
    }
    .at-remove-row {
        background: none;
        border: none;
        color: var(--at-text-muted);
        cursor: pointer;
        font-size: 1.2em;
        transition: color 0.2s ease;
    }
    .at-remove-row:hover {
        color: var(--at-primary);
    }

    .at-add-row {
        background: var(--at-bg-tertiary);
        border: 1px solid var(--at-border);
        border-radius: 12px;
        padding: 12px 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: var(--at-text-secondary);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .at-add-row:hover {
        background: var(--at-border);
        color: var(--at-text-primary);
    }

    .at-result-card {
        background: var(--at-bg-tertiary);
        border: 1px solid var(--at-border);
        border-radius: 20px;
        padding: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .dark-mode .at-result-card {
        background: rgba(31, 41, 55, 0.8);
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
        box-shadow: 0 15px 50px rgba(204, 0, 51, 0.2);
    }
    .dark-mode .at-related-card:hover {
        box-shadow: 0 15px 50px rgba(204, 0, 51, 0.2);
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
        background: rgba(204, 0, 51, 0.1);
        border-color: rgba(204, 0, 51, 0.3);
        color: var(--at-primary);
        transform: translateX(4px);
    }
    .dark-mode .at-related-card a:hover {
        background: rgba(204, 0, 51, 0.1);
        border-color: rgba(204, 0, 51, 0.3);
    }
    .at-related-card .fas {
        font-size: 1.1rem;
        color: var(--at-primary);
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
        background: linear-gradient(135deg, rgba(204, 0, 51, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
        padding: 40px;
        text-align: center;
        border-bottom: 1px solid var(--at-border);
    }
    .dark-mode .at-info-header {
        background: linear-gradient(135deg, rgba(204, 0, 51, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
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
        background: rgba(204, 0, 51, 0.1);
        border-left: 4px solid var(--at-primary);
        padding: 24px;
        margin: 30px 0;
        border-radius: 0 12px 12px 0;
    }
    .dark-mode .at-info-box {
        background: rgba(204, 0, 51, 0.1);
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
                <h1><i class="fas fa-calculator"></i> GPA Calculator for Rutgers University</h1>
            </div>
            <div class="at-tool-body">
                <p>Welcome, Scarlet Knights! Whether you're a new student at the New Brunswick, Newark, or Camden campus, figuring out your **Rutgers grade point average** can feel a bit confusing. Our free **Rutgers GPA calculator** is here to make your life easier. It's the perfect tool to track your grades, set academic goals, and stay on top of your game.</p>
                
                <div id="gpa-tool">
                    <div class="at-input-group">
                        <label for="cumulative-gpa" class="at-label">Current Cumulative GPA (Optional)</label>
                        <input type="number" id="cumulative-gpa" class="at-input" placeholder="e.g., 3.5">
                    </div>
                    <div class="at-input-group">
                        <label for="cumulative-credits" class="at-label">Current Cumulative Credits (Optional)</label>
                        <input type="number" id="cumulative-credits" class="at-input" placeholder="e.g., 30">
                    </div>
                    
                    <h3 style="margin-top: 2em; text-align: center;">Semester Courses</h3>
                    <div id="course-list">
                        <!-- Course input fields will be dynamically added here -->
                    </div>

                    <button id="add-course-btn" class="at-add-row">
                        <i class="fas fa-plus-circle"></i> Add Course
                    </button>

                    <button id="calculate-btn" class="at-button">
                        <i class="fas fa-calculator"></i> Calculate GPA
                    </button>

                    <div id="result-card" class="at-result-card" style="display: none;">
                        <div class="at-result-summary">
                            <h3>Semester GPA: <strong id="semester-gpa">0.00</strong></h3>
                            <h3>Cumulative GPA: <strong id="cumulative-gpa-result">0.00</strong></h3>
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
                        {% for tool in education_tools %}
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
                <h2>A Guide to Your Rutgers GPA and Academic Success</h2>
            </div>
            <div class="at-info-body">
                <p>Calculating your **GPA at Rutgers** doesn't have to be a guessing game. Our tool simplifies the entire process, empowering you to take control of your academic journey. This guide will walk you through the grading scale and give you the information you need to stay on track.</p>

                <h3>Understanding the Rutgers Grading Scale</h3>
                <p>Rutgers University uses a standard 4.0 grading scale. Knowing the exact scale is the first step in calculating your **Rutgers grade point average** accurately. This official table will help you convert your letter grades into the correct point values.</p>
                <div class="at-info-box">
                    <table>
                        <thead>
                            <tr>
                                <th>Letter Grade</th>
                                <th>Grade Point</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>A</td><td>4.0</td></tr>
                            <tr><td>B+</td><td>3.5</td></tr>
                            <tr><td>B</td><td>3.0</td></tr>
                            <tr><td>C+</td><td>2.5</td></tr>
                            <tr><td>C</td><td>2.0</td></tr>
                            <tr><td>D</td><td>1.0</td></tr>
                            <tr><td>F</td><td>0.0</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Note: Grades like A-, B-, and C- are also used, but their point values may vary slightly by school. For an accurate calculation, always refer to the official **Rutgers grading scale** for your specific college within the university. This is especially important for students at the School of Arts and Sciences, the School of Engineering, or other specialized programs.</p>

                <h3>Key Academic Deadlines to Remember</h3>
                <p>Staying on top of your **GPA at Rutgers** is not just about calculating grades—it's also about meeting important deadlines. While these dates can change, here are some key deadlines you should always keep in mind when planning your semester:</p>
                <ul>
                    <li>**Add/Drop Period:** The first few days of the semester when you can adjust your course schedule without penalty.</li>
                    <li>**Withdrawal Deadline:** The last day to withdraw from a course without receiving a grade of 'W' (for Withdrawal) on your transcript.</li>
                    <li>**Pass/No Credit Deadline:** The final day to elect the Pass/No Credit option for eligible courses.</li>
                    <li>**Final Exam Period:** The last week of the semester dedicated to final exams.</li>
                </ul>
                <p>For official dates, always check the <a href="https://scheduling.rutgers.edu/scheduling/academic-calendar" target="_blank" rel="nofollow noopener">Rutgers Academic Calendar</a>.</p>
                
                <h3>FAQs About the Rutgers GPA</h3>
                <div class="at-info-box">
                    <h4>How is a semester GPA different from a cumulative GPA?</h4>
                    <p>Your **semester GPA** is the average of all grades you earned in a single semester. Your **cumulative GPA** includes all of the grades you've earned throughout your entire academic career at Rutgers. Both are important, but the cumulative GPA is typically what's used for graduation and academic honors.</p>

                    <h4>What's considered a good GPA at Rutgers?</h4>
                    <p>A GPA of 3.0 or higher is generally considered a good GPA and is often required for scholarships and certain programs. For more specific information on academic standing and honors, refer to the official **gpa requirements rutgers** page on the university website.</p>

                    <h4>Can this tool help me with my **college grade calculator** needs?</h4>
                    <p>Yes, absolutely! Our tool is built to be a comprehensive **college grade calculator**. You can use it to predict what grades you need in your final exams to reach a certain GPA goal. This is a powerful way to manage your study habits and stay on track.</p>
                </div>

                <h3>Ready to Calculate Your GPA?</h3>
                <p>It's time to stop guessing and start calculating. Our user-friendly **rutgers gpa tool** makes it easy to add your grades and credits. Simply enter your course information in the fields above, and let the tool do the heavy lifting for you. Whether you're aiming for a perfect 4.0 or just want to make sure you're on track, this is your go-to **Rutgers GPA calculator**.</p>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const gradeScale = {
            'A': 4.0, 'B+': 3.5, 'B': 3.0, 'C+': 2.5,
            'C': 2.0, 'D': 1.0, 'F': 0.0
        };

        const courseList = document.getElementById('course-list');
        const addCourseBtn = document.getElementById('add-course-btn');
        const calculateBtn = document.getElementById('calculate-btn');
        const resultCard = document.getElementById('result-card');
        const semesterGpaResult = document.getElementById('semester-gpa');
        const cumulativeGpaResult = document.getElementById('cumulative-gpa-result');
        const cumulativeGpaInput = document.getElementById('cumulative-gpa');
        const cumulativeCreditsInput = document.getElementById('cumulative-credits');

        function createCourseRow() {
            const row = document.createElement('div');
            row.className = 'at-gpa-grid';
            
            row.innerHTML = `
                <input type="text" class="at-input course-name" placeholder="Course Name (e.g., Intro to CS)">
                <select class="at-input course-grade">
                    <option value="">Grade</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
                <input type="number" class="at-input course-credits" placeholder="Credits" min="0">
                <button class="at-remove-row"><i class="fas fa-trash-alt"></i></button>
            `;
            courseList.appendChild(row);

            row.querySelector('.at-remove-row').addEventListener('click', () => {
                row.remove();
            });
        }

        // Add initial rows
        for (let i = 0; i < 4; i++) {
            createCourseRow();
        }

        addCourseBtn.addEventListener('click', () => {
            createCourseRow();
        });

        calculateBtn.addEventListener('click', () => {
            let totalSemesterPoints = 0;
            let totalSemesterCredits = 0;
            const rows = courseList.querySelectorAll('.at-gpa-grid');
            
            rows.forEach(row => {
                const grade = row.querySelector('.course-grade').value;
                const credits = parseFloat(row.querySelector('.course-credits').value);

                if (grade && !isNaN(credits) && credits > 0) {
                    const gradePoint = gradeScale[grade];
                    totalSemesterPoints += gradePoint * credits;
                    totalSemesterCredits += credits;
                }
            });

            if (totalSemesterCredits === 0) {
                semesterGpaResult.textContent = '0.00';
                cumulativeGpaResult.textContent = 'N/A';
                resultCard.style.display = 'flex';
                return;
            }

            const semesterGPA = totalSemesterPoints / totalSemesterCredits;
            semesterGpaResult.textContent = semesterGPA.toFixed(2);

            // Calculate cumulative GPA
            const currentCumulativeGpa = parseFloat(cumulativeGpaInput.value);
            const currentCumulativeCredits = parseFloat(cumulativeCreditsInput.value);

            if (!isNaN(currentCumulativeGpa) && !isNaN(currentCumulativeCredits)) {
                const totalPastPoints = currentCumulativeGpa * currentCumulativeCredits;
                const newTotalPoints = totalPastPoints + totalSemesterPoints;
                const newTotalCredits = currentCumulativeCredits + totalSemesterCredits;
                const newCumulativeGpa = newTotalPoints / newTotalCredits;
                cumulativeGpaResult.textContent = newCumulativeGpa.toFixed(2);
            } else {
                cumulativeGpaResult.textContent = 'N/A';
            }

            resultCard.style.display = 'flex';
        });
    });
</script>