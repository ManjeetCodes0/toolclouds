---
title: "GPA Calculator: Calculate Your Grade Point Average Instantly"
localtitle: "GPA Calculator"
layout: tool
categories: [educationCalc, studentCalc, calculators]
permalink: /calculators/education/gpa-calculator
description: "Free GPA calculator to calculate your Grade Point Average instantly. Calculate cumulative GPA, semester GPA, and plan your grades to reach target GPA."
faq:
  - q: "What is a good GPA?"
    a: "A 'good' GPA is subjective and depends on your goals. Generally, a 3.0-3.5 is considered good for most undergraduate programs and job applications. For competitive graduate schools, scholarships, or top-tier companies, aiming for a 3.5 or higher is recommended. A 4.0 GPA is perfect and signifies outstanding academic achievement."
  - q: "How is GPA calculated?"
    a: "GPA is calculated by dividing the total number of quality points by the total number of credit hours. Quality points for a course are found by multiplying the grade's point value (e.g., A=4.0, B=3.0) by the course's credit hours. Our calculator automates this formula: GPA = (Σ [Grade Point × Credit Hours]) / (Σ Credit Hours)."
  - q: "What is the difference between GPA and CGPA?"
    a: "GPA (Grade Point Average) usually refers to your academic performance in a single semester or term. CGPA (Cumulative Grade Point Average) is the average of your GPAs from all completed semesters, giving a comprehensive overview of your entire academic performance to date."
  - q: "Do Pass/Fail classes affect GPA?"
    a: "Typically, no. Pass/Fail or Credit/No Credit courses are not included in the GPA calculation. A 'Pass' grade awards you the credits without affecting your GPA, while a 'Fail' gives you no credits and also does not impact your GPA. Some institutions may treat a 'Fail' as an 'F' (0.0 grade points), so always check your school's policy."
  - q: "What is the difference between weighted and unweighted GPA?"
    a: "An unweighted GPA is calculated on a standard 4.0 scale, where an A is always 4.0, regardless of course difficulty. A weighted GPA gives extra 'weight' to more challenging courses like AP, IB, or Honors classes, often using a 5.0 scale. An A in an AP class might be worth 5.0 points, potentially pushing the GPA above 4.0."
  - q: "How can I calculate my major GPA?"
    a: "To calculate your major GPA, use our calculator but only enter the courses required for your major. Exclude general education, electives, and minor courses. This gives a focused view of your performance in your primary field of study."
  - q: "Can one bad semester ruin my cumulative GPA?"
    a: "Not necessarily. A bad semester will lower your cumulative GPA, but its impact diminishes as you complete more credits. Strong performance in later semesters can significantly raise your overall GPA. Many admission committees and employers value an upward trend."
---

<style>
    :root {
        --gpa-primary: #6366f1;
        --gpa-primary-dark: #4f46e5;
        --gpa-secondary: #ec4899;
        --gpa-secondary-dark: #db2777;
        --gpa-accent: #14b8a6;
        --gpa-warning: #f59e0b;
        --gpa-success: #10b981;
        --gpa-danger: #ef4444;
        --gpa-bg-main: #f8fafc;
        --gpa-bg-card: #ffffff;
        --gpa-bg-hover: #f1f5f9;
        --gpa-text-primary: #0f172a;
        --gpa-text-secondary: #475569;
        --gpa-text-muted: #94a3b8;
        --gpa-border: #e2e8f0;
        --gpa-shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
        --gpa-shadow-md: 0 4px 20px rgba(0,0,0,0.08);
        --gpa-shadow-lg: 0 10px 40px rgba(0,0,0,0.1);
    }

    html[data-theme="dark"] .gpa-wrapper,
    html[data-theme="dark"] {
        --gpa-primary: #818cf8;
        --gpa-primary-dark: #6366f1;
        --gpa-secondary: #f472b6;
        --gpa-secondary-dark: #ec4899;
        --gpa-accent: #2dd4bf;
        --gpa-warning: #fbbf24;
        --gpa-success: #34d399;
        --gpa-danger: #f87171;
        --gpa-bg-main: #0f172a;
        --gpa-bg-card: #1e293b;
        --gpa-bg-hover: #334155;
        --gpa-text-primary: #f1f5f9;
        --gpa-text-secondary: #cbd5e1;
        --gpa-text-muted: #64748b;
        --gpa-border: #334155;
    }

    * {
        box-sizing: border-box;
    }

    .gpa-wrapper {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: var(--gpa-bg-main);
        min-height: 100vh;
        color: var(--gpa-text-primary);
        line-height: 1.6;
        position: relative;
        overflow-x: hidden;
    }

    /* Animated Background */
    .gpa-wrapper::before {
        content: '';
        position: fixed;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: 
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(20, 184, 166, 0.06) 0%, transparent 50%);
        animation: gpa-float 30s ease-in-out infinite;
        pointer-events: none;
        z-index: 0;
    }

    @keyframes gpa-float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        33% { transform: translate(30px, -30px) rotate(120deg); }
        66% { transform: translate(-20px, 20px) rotate(240deg); }
    }

    .gpa-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 2rem;
        position: relative;
        z-index: 1;
    }

    /* Hero Section */
    .gpa-hero {
        text-align: center;
        margin-bottom: 1.5rem;
        position: relative;
    }

    .gpa-hero h1 {
        font-size: 3rem;
        font-weight: 900;
        background: linear-gradient(135deg, var(--gpa-primary) 0%, var(--gpa-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
    }

    .gpa-hero p {
        font-size: 1.25rem;
        color: var(--gpa-text-secondary);
        max-width: 600px;
        margin: 0 auto;
    }

    /* Main Layout Grid */
    .gpa-main-grid {
        display: grid;
        gap: 2rem;
        margin-bottom: 3rem;
        grid-template-columns: 1fr; /* Mobile first: single column */
    }

    @media (min-width: 1024px) {
        .gpa-main-grid {
            grid-template-columns: 1fr 400px; /* Two columns for desktop */
            grid-template-areas:
                "calculator results"
                "planner    results";
            align-items: start;
        }
        .gpa-calculator-wrapper { grid-area: calculator; }
        .gpa-results-panel { grid-area: results; }
        .gpa-planning-section { grid-area: planner; }
    }

    /* Calculator Card */
    .gpa-calc-card {
        background: var(--gpa-bg-card);
        border-radius: 24px;
        border: 1px solid var(--gpa-border);
        box-shadow: var(--gpa-shadow-md);
        overflow: hidden;
    }

    .gpa-card-header {
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
        padding: 2rem;
        border-bottom: 1px solid var(--gpa-border);
    }

    .gpa-card-header h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--gpa-text-primary);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .gpa-card-header .icon {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, var(--gpa-primary), var(--gpa-secondary));
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.25rem;
    }

    .gpa-card-body {
        padding: 2rem;
    }

    /* Calculator Type Selector */
    .gpa-type-selector {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        padding: 0.25rem;
        background: var(--gpa-bg-hover);
        border-radius: 12px;
    }

    .gpa-type-btn {
        flex: 1;
        padding: 0.75rem 1.5rem;
        border: none;
        background: transparent;
        color: var(--gpa-text-secondary);
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.95rem;
    }

    .gpa-type-btn.active {
        background: var(--gpa-bg-card);
        color: var(--gpa-primary);
        box-shadow: var(--gpa-shadow-sm);
    }

    .gpa-type-btn:hover:not(.active) {
        color: var(--gpa-text-primary);
    }

    /* Course List */
    .gpa-course-list {
        margin-bottom: 1.5rem;
        max-height: 400px;
        overflow-y: auto;
        padding-right: 0.5rem;
    }

    .gpa-course-list::-webkit-scrollbar {
        width: 6px;
    }

    .gpa-course-list::-webkit-scrollbar-thumb {
        background: var(--gpa-border);
        border-radius: 3px;
    }

    .gpa-course-item {
        background: var(--gpa-bg-hover);
        border: 1px solid var(--gpa-border);
        border-radius: 16px;
        padding: 1.25rem;
        margin-bottom: 1rem;
        transition: all 0.3s ease;
        position: relative;
    }

    .gpa-course-item:hover {
        border-color: var(--gpa-primary);
        box-shadow: var(--gpa-shadow-sm);
    }

    .gpa-course-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .gpa-course-number {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--gpa-primary);
        background: rgba(99, 102, 241, 0.1);
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
    }

    .gpa-remove-btn {
        background: none;
        border: none;
        color: var(--gpa-danger);
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 6px;
        transition: all 0.2s ease;
    }

    .gpa-remove-btn:hover {
        background: rgba(239, 68, 68, 0.1);
    }

    .gpa-course-inputs {
        display: grid;
        grid-template-columns: 2fr 1fr 1.5fr;
        gap: 0.75rem;
    }

    .gpa-input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .gpa-input-label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--gpa-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .gpa-input, .gpa-select {
        padding: 0.75rem 1rem;
        background: var(--gpa-bg-card);
        border: 1px solid var(--gpa-border);
        border-radius: 10px;
        font-size: 0.95rem;
        color: var(--gpa-text-primary);
        transition: all 0.2s ease;
        width: 100%;
    }

    .gpa-input:focus, .gpa-select:focus {
        outline: none;
        border-color: var(--gpa-primary);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    /* Buttons */
    .gpa-btn {
        padding: 0.875rem 1.75rem;
        border: none;
        border-radius: 12px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .gpa-btn-primary {
        background: linear-gradient(135deg, var(--gpa-primary) 0%, var(--gpa-primary-dark) 100%);
        color: white;
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    }

    .gpa-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(99, 102, 241, 0.4);
    }

    .gpa-btn-secondary {
        background: var(--gpa-bg-hover);
        color: var(--gpa-text-secondary);
        border: 1px solid var(--gpa-border);
    }

    .gpa-btn-secondary:hover {
        background: var(--gpa-bg-card);
        border-color: var(--gpa-primary);
        color: var(--gpa-primary);
    }

    .gpa-btn-add {
        width: 100%;
        border: 2px dashed var(--gpa-border);
        background: transparent;
        color: var(--gpa-primary);
        margin-bottom: 1.5rem;
    }

    .gpa-btn-add:hover {
        border-color: var(--gpa-primary);
        background: rgba(99, 102, 241, 0.05);
    }

    /* Results Panel */
    .gpa-results-panel {
        background: var(--gpa-bg-card);
        border-radius: 24px;
        border: 1px solid var(--gpa-border);
        box-shadow: var(--gpa-shadow-md);
        padding: 2rem;
        height: fit-content;
    }
    
    @media (min-width: 1024px) {
        .gpa-results-panel {
            position: sticky;
            top: 2rem;
        }
    }


    .gpa-result-display {
        text-align: center;
        padding: 2rem 0;
        border-bottom: 1px solid var(--gpa-border);
        margin-bottom: 2rem;
    }

    .gpa-result-label {
        font-size: 0.875rem;
        color: var(--gpa-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 0.5rem;
    }

    .gpa-result-value {
        font-size: 4rem;
        font-weight: 900;
        line-height: 1;
        background: linear-gradient(135deg, var(--gpa-primary) 0%, var(--gpa-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .gpa-result-scale {
        font-size: 1.25rem;
        color: var(--gpa-text-secondary);
        margin-top: 0.5rem;
    }

    /* Grade Distribution Chart */
    .gpa-grade-chart {
        margin-top: 2rem;
    }

    .gpa-grade-bar {
        display: flex;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    .gpa-grade-label {
        width: 30px;
        font-weight: 600;
        color: var(--gpa-text-secondary);
    }

    .gpa-grade-progress {
        flex: 1;
        height: 24px;
        background: var(--gpa-bg-hover);
        border-radius: 12px;
        overflow: hidden;
        margin: 0 1rem;
    }

    .gpa-grade-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--gpa-primary), var(--gpa-secondary));
        border-radius: 12px;
        transition: width 0.5s ease;
    }

    .gpa-grade-count {
        width: 30px;
        text-align: right;
        font-size: 0.875rem;
        color: var(--gpa-text-muted);
    }

    /* Statistics Cards */
    .gpa-stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-top: 2rem;
    }

    .gpa-stat-card {
        background: var(--gpa-bg-hover);
        border-radius: 12px;
        padding: 1.25rem;
        text-align: center;
    }

    .gpa-stat-value {
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--gpa-primary);
        margin-bottom: 0.25rem;
    }

    .gpa-stat-label {
        font-size: 0.8125rem;
        color: var(--gpa-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    /* Planning Tools */
    .gpa-planning-section {
        background: var(--gpa-bg-card);
        border-radius: 24px;
        border: 1px solid var(--gpa-border);
        box-shadow: var(--gpa-shadow-md);
        padding: 2rem;
    }

    .gpa-planning-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .gpa-planning-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, var(--gpa-accent) 0%, var(--gpa-primary) 100%);
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
    }
    
    /* NEW: Related Tools Section */
    .gpa-related-tools {
        background: var(--gpa-bg-card);
        border-radius: 24px;
        border: 1px solid var(--gpa-border);
        padding: 2rem;
        margin-bottom: 3rem;
    }

    .gpa-related-header {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--gpa-text-primary);
        margin: 0 0 1.5rem 0;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .gpa-tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .gpa-tool-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        background: var(--gpa-bg-hover);
        border: 1px solid var(--gpa-border);
        border-radius: 16px;
        text-decoration: none;
        color: var(--gpa-text-primary);
        transition: all 0.3s ease;
    }

    .gpa-tool-link:hover {
        transform: translateY(-4px);
        box-shadow: var(--gpa-shadow-sm);
        border-color: var(--gpa-primary);
    }
    
    .gpa-tool-icon {
        width: 48px;
        height: 48px;
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--gpa-primary), var(--gpa-secondary));
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
    }
    
    .gpa-tool-info h4 {
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0 0 0.25rem 0;
    }

    .gpa-tool-info p {
        font-size: 0.9rem;
        color: var(--gpa-text-secondary);
        margin: 0;
        line-height: 1.4;
    }


    /* Information Content */
    .gpa-info-section {
        background: var(--gpa-bg-card);
        border-radius: 24px;
        border: 1px solid var(--gpa-border);
        overflow: hidden;
        margin-bottom: 3rem;
    }

    .gpa-info-header {
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%);
        padding: 3rem;
        text-align: center;
        border-bottom: 1px solid var(--gpa-border);
    }

    .gpa-info-header h2 {
        font-size: 2.25rem;
        font-weight: 800;
        color: var(--gpa-text-primary);
        margin: 0;
    }

    .gpa-info-body {
        padding: 3rem 1rem;
    }

    .gpa-info-body h3 {
        font-size: 1.75rem;
        font-weight: 700;
        margin: 2rem 0 1rem;
        color: var(--gpa-text-primary);
        position: relative;
        padding-left: 1.5rem;
    }

    .gpa-info-body h3::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 70%;
        background: linear-gradient(to bottom, var(--gpa-primary), var(--gpa-secondary));
        border-radius: 2px;
    }

    .gpa-info-body p, .gpa-info-body li {
        font-size: 1.0625rem;
        line-height: 1.75;
        color: var(--gpa-text-secondary);
        margin-bottom: 1.25rem;
    }
    
    .gpa-info-body ul {
        list-style: none;
        padding-left: 0;
    }
    
    .gpa-info-body ul li {
        padding-left: 2rem;
        position: relative;
    }
    
    .gpa-info-body ul li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--gpa-primary);
        font-weight: bold;
    }

    /* Feature Cards */
    .gpa-features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .gpa-feature-card {
        background: var(--gpa-bg-hover);
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        transition: transform 0.3s ease;
    }

    .gpa-feature-card:hover {
        transform: translateY(-4px);
    }

    .gpa-feature-icon {
        width: 64px;
        height: 64px;
        background: linear-gradient(135deg, var(--gpa-primary) 0%, var(--gpa-secondary) 100%);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        font-size: 1.75rem;
        color: white;
    }

    /* GPA Scale Table */
    .gpa-scale-table {
        width: 100%;
        border-collapse: collapse;
        margin: 2rem 0;
    }
    
    .gpa-table-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        border: 1px solid var(--gpa-border);
        border-radius: 16px;
    }

    .gpa-scale-table thead {
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
    }

    .gpa-scale-table th {
        padding: 1rem 1.5rem;
        text-align: left;
        font-weight: 600;
        color: var(--gpa-text-primary);
        border-bottom: 2px solid var(--gpa-border);
        white-space: nowrap;
    }

    .gpa-scale-table td {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--gpa-border);
        white-space: nowrap;
    }

    .gpa-scale-table tr:last-child td {
        border-bottom: none;
    }

    .gpa-grade-badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.875rem;
    }

    .gpa-grade-a { background: rgba(16, 185, 129, 0.1); color: var(--gpa-success); }
    .gpa-grade-b { background: rgba(99, 102, 241, 0.1); color: var(--gpa-primary); }
    .gpa-grade-c { background: rgba(245, 158, 11, 0.1); color: var(--gpa-warning); }
    .gpa-grade-d { background: rgba(239, 68, 68, 0.1); color: var(--gpa-danger); }

    /* FAQ Section */
    .gpa-faq-item {
        background: var(--gpa-bg-hover);
        border: 1px solid var(--gpa-border);
        border-radius: 16px;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        overflow: hidden;
    }

    .gpa-faq-item:hover {
        border-color: var(--gpa-primary);
    }

    .gpa-faq-question {
        font-weight: 600;
        font-size: 1.1rem;
        color: var(--gpa-text-primary);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
    }
    
    .gpa-faq-question .faq-icon {
        transition: transform 0.3s ease;
    }
    
    .gpa-faq-item.active .faq-icon {
        transform: rotate(180deg);
    }

    .gpa-faq-answer {
        color: var(--gpa-text-secondary);
        line-height: 1.7;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 0.4s ease-in-out;
        padding: 0 1.5rem;
    }
    
    .gpa-faq-item.active .gpa-faq-answer {
        max-height: 300px;
        opacity: 1;
        padding-bottom: 1.5rem;
    }
    
    /* Tips Box */
    .gpa-tips-box {
        background: linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
        border: 1px solid rgba(20, 184, 166, 0.2);
        border-radius: 16px;
        padding: 2rem;
        margin: 2rem 0;
    }

    .gpa-tips-box h4 {
        color: var(--gpa-accent);
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .gpa-tips-list li {
        position: relative;
    }

    .gpa-tips-list li::before {
        content: '💡';
        position: absolute;
        left: -2rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .gpa-hero h1 {
            font-size: 2.25rem;
        }

        .gpa-course-inputs {
            grid-template-columns: 1fr;
        }

        .gpa-stats-grid {
            grid-template-columns: 1fr;
        }

        .gpa-container {
            padding: 1rem 0.5rem;
        }
    }

    /* Notification */
    .gpa-notification {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--gpa-bg-card);
        border: 1px solid var(--gpa-border);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        box-shadow: var(--gpa-shadow-lg);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    }

    .gpa-notification.show {
        transform: translateX(0);
    }
</style>

<div class="gpa-wrapper">
    <div class="gpa-container">
        <div class="gpa-hero">
            <h1>GPA Calculator</h1>
        </div>

        <div class="gpa-main-grid">
            <div class="gpa-calculator-wrapper">
                <div class="gpa-calc-card">
                    <div class="gpa-card-header">
                        <h2>
                            <span class="icon"><i class="fas fa-calculator"></i></span>
                            Calculate Your GPA
                        </h2>
                    </div>
                    <div class="gpa-card-body">
                        <div class="gpa-type-selector">
                            <button class="gpa-type-btn active" data-type="semester">Semester GPA</button>
                            <button class="gpa-type-btn" data-type="cumulative">Cumulative GPA</button>
                        </div>
                        
                        <div id="cumulativeInputs" style="display: none; margin-bottom: 2rem; border-bottom: 1px solid var(--gpa-border); padding-bottom: 2rem;">
                            <h3 style="font-size: 1.1rem; margin-top:0; margin-bottom: 1rem; color: var(--gpa-text-secondary);">Previous Academic Record (Optional)</h3>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                                <div class="gpa-input-group">
                                    <label class="gpa-input-label" id="prevCreditsLabel">Total Credits Earned</label>
                                    <input type="number" class="gpa-input" id="prevCredits" placeholder="e.g., 60" min="0">
                                </div>
                                <div class="gpa-input-group">
                                    <label class="gpa-input-label" id="prevGpaLabel">Cumulative GPA</label>
                                    <input type="number" class="gpa-input" id="prevGPA" placeholder="e.g., 3.50" min="0" max="4" step="0.01">
                                </div>
                            </div>
                        </div>
                        
                        <h3 id="courseListHeader" style="font-size: 1.1rem; margin-top:0; margin-bottom: 1rem; color: var(--gpa-text-secondary); display: none;">Current Semester Courses</h3>
                        
                        <div class="gpa-course-list" id="courseList">
                            </div>
                        <button class="gpa-btn gpa-btn-add" id="addCourseBtn">
                            <i class="fas fa-plus"></i> Add Course
                        </button>
                        <div style="display: flex; gap: 1rem;">
                            <button class="gpa-btn gpa-btn-primary" id="calculateBtn" style="flex: 1;">
                                <i class="fas fa-chart-line"></i> Calculate GPA
                            </button>
                            <button class="gpa-btn gpa-btn-secondary" id="resetBtn">
                                <i class="fas fa-redo"></i> Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="gpa-results-panel">
                <div class="gpa-result-display">
                    <div class="gpa-result-label" id="gpaResultLabel">Your GPA</div>
                    <div class="gpa-result-value" id="gpaResult">0.00</div>
                    <div class="gpa-result-scale">out of 4.0</div>
                </div>
                <div class="gpa-grade-chart">
                    <h3 style="font-size: 1.125rem; margin-bottom: 1rem;">Grade Distribution</h3>
                    <div class="gpa-grade-bar"><span class="gpa-grade-label">A</span><div class="gpa-grade-progress"><div class="gpa-grade-fill" data-grade="A" style="width: 0%;"></div></div><span class="gpa-grade-count" data-grade-count="A">0</span></div>
                    <div class="gpa-grade-bar"><span class="gpa-grade-label">B</span><div class="gpa-grade-progress"><div class="gpa-grade-fill" data-grade="B" style="width: 0%;"></div></div><span class="gpa-grade-count" data-grade-count="B">0</span></div>
                    <div class="gpa-grade-bar"><span class="gpa-grade-label">C</span><div class="gpa-grade-progress"><div class="gpa-grade-fill" data-grade="C" style="width: 0%;"></div></div><span class="gpa-grade-count" data-grade-count="C">0</span></div>
                    <div class="gpa-grade-bar"><span class="gpa-grade-label">D</span><div class="gpa-grade-progress"><div class="gpa-grade-fill" data-grade="D" style="width: 0%;"></div></div><span class="gpa-grade-count" data-grade-count="D">0</span></div>
                    <div class="gpa-grade-bar"><span class="gpa-grade-label">F</span><div class="gpa-grade-progress"><div class="gpa-grade-fill" data-grade="F" style="width: 0%;"></div></div><span class="gpa-grade-count" data-grade-count="F">0</span></div>
                </div>
                <div class="gpa-stats-grid">
                    <div class="gpa-stat-card"><div class="gpa-stat-value" id="totalCredits">0</div><div class="gpa-stat-label">Total Credits</div></div>
                    <div class="gpa-stat-card"><div class="gpa-stat-value" id="totalCourses">0</div><div class="gpa-stat-label">Total Courses</div></div>
                    <div class="gpa-stat-card"><div class="gpa-stat-value" id="avgGrade">-</div><div class="gpa-stat-label">Average Grade</div></div>
                    <div class="gpa-stat-card"><div class="gpa-stat-value" id="qualityPoints">0</div><div class="gpa-stat-label">Quality Points</div></div>
                </div>
            </div>
            
            <div class="gpa-planning-section">
                <div class="gpa-planning-header">
                    <div class="gpa-planning-icon"><i class="fas fa-bullseye"></i></div>
                    <div>
                        <h3 style="margin: 0; font-size: 1.5rem; padding-left: 0; border-left: none;">GPA Goal Planner</h3>
                        <p style="margin: 0.25rem 0 0; color: var(--gpa-text-secondary); line-height: 1.5;">Find out what grades you need to reach your target GPA</p>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <div class="gpa-input-group"><label class="gpa-input-label">Current GPA</label><input type="number" class="gpa-input" id="currentGPA" placeholder="3.50" min="0" max="4" step="0.01"></div>
                    <div class="gpa-input-group"><label class="gpa-input-label">Credits Completed</label><input type="number" class="gpa-input" id="currentCredits" placeholder="60" min="0"></div>
                    <div class="gpa-input-group"><label class="gpa-input-label">Target GPA</label><input type="number" class="gpa-input" id="targetGPA" placeholder="3.75" min="0" max="4" step="0.01"></div>
                    <div class="gpa-input-group"><label class="gpa-input-label">Future Credits</label><input type="number" class="gpa-input" id="futureCredits" placeholder="15" min="0"></div>
                </div>
                <button class="gpa-btn gpa-btn-primary" id="planBtn" style="margin-top: 1.5rem;"><i class="fas fa-magic"></i> Calculate Required GPA</button>
                <div id="planResult" style="display: none; margin-top: 1.5rem; padding: 1.5rem; background: var(--gpa-bg-hover); border-radius: 12px;"></div>
            </div>
        </div>

        <div class="gpa-related-tools">
            <h3 class="gpa-related-header"><i class="fas fa-tools"></i> Related Student Tools</h3>
                <div class="gpa-tools-grid">
                {% assign related_tools = site.tools | where_exp:"item", "item.categories contains 'studentCalc'" %}
                {% assign counter = 0 %}
                {% for tool in related_tools %}
                    {% if counter >= 4 %}{% break %}{% endif %}
                    {% unless tool.url == page.url %}
                    <a href="{{ tool.url | relative_url }}" class="gpa-tool-link">
                        <div class="gpa-tool-icon">
                        <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div class="gpa-tool-info">
                        <h4>{{ tool.localtitle }}</h4>
                        <p>{{ tool.description | truncate: 70, "..." }}</p>
                        </div>
                    </a>
                    {% assign counter = counter | plus: 1 %}
                    {% endunless %}
                {% endfor %}
                </div>            
        </div>

        <div class="gpa-info-section">
            <div class="gpa-info-header"><h2>📚 Everything You Need to Know About GPA</h2></div>
            <div class="gpa-info-body">
                <h3>What Exactly is a GPA?</h3>
                <p>GPA stands for Grade Point Average. It’s a standard way to measure academic achievement. Essentially, it converts your letter grades into a numerical score (usually on a 4.0 scale), making it easy for schools and employers to quickly assess your overall academic performance.</p>
                
                <div class="gpa-tips-box">
                    <h4><i class="fas fa-lightbulb"></i> Quick Tips for Success</h4>
                    <ul class="gpa-tips-list">
                        <li>A GPA above 3.0 opens most doors for jobs and internships. A 3.5+ is great for competitive programs.</li>
                        <li>One bad semester won't ruin you. An upward trend in your grades shows resilience.</li>
                        <li>Use our <strong>GPA calculator</strong> regularly to track progress and set achievable goals.</li>
                    </ul>
                </div>

                <h3>Understanding the Standard 4.0 GPA Scale</h3>
                <p>While some schools have slight variations, the 4.0 grading scale is the most common system. Here's a breakdown of how letter grades typically convert to grade points:</p>
                <div class="gpa-table-wrapper">
                    <table class="gpa-scale-table">
                        <thead><tr><th>Letter Grade</th><th>Percentage</th><th>4.0 Scale</th><th>Academic Standing</th></tr></thead>
                        <tbody>
                            <tr><td><span class="gpa-grade-badge gpa-grade-a">A / A+</span></td><td>93-100%</td><td>4.0</td><td>Excellent</td></tr>
                            <tr><td><span class="gpa-grade-badge gpa-grade-a">A-</span></td><td>90-92%</td><td>3.7</td><td>Excellent</td></tr>
                            <tr><td><span class="gpa-grade-badge gpa-grade-b">B+</span></td><td>87-89%</td><td>3.3</td><td>Good</td></tr>
                            <tr><td><span class="gpa-grade-badge gpa-grade-b">B</span></td><td>83-86%</td><td>3.0</td><td>Good</td></tr>
                            <tr><td><span class="gpa-grade-badge gpa-grade-b">B-</span></td><td>80-82%</td><td>2.7</td><td>Good</td></tr>
                            <tr><td><span class="gpa-grade-badge gpa-grade-c">C+</span></td><td>77-79%</td><td>2.3</td><td>Average</td></tr>
                            <tr><td><span class="gpa-grade-badge gpa-grade-c">C</span></td><td>73-76%</td><td>2.0</td><td>Average</td></tr>
                            <tr><td><span class="gpa-grade-badge gpa-grade-d">D</span></td><td>65-72%</td><td>1.0</td><td>Poor</td></tr>
                            <tr><td><span class="gpa-grade-badge gpa-grade-d">F</span></td><td>Below 65%</td><td>0.0</td><td>Failing</td></tr>
                        </tbody>
                    </table>
                </div>
                
                <h3>Real Talk: Does GPA Really Matter?</h3>
                <p>Yes, your GPA matters, but it doesn't define you. It serves as a key benchmark in several important areas:</p>
                <ul>
                    <li><strong>Scholarships:</strong> Most merit-based financial aid requires a minimum GPA.</li>
                    <li><strong>Graduate School Admissions:</strong> A strong GPA is often a prerequisite for competitive master's or Ph.D. programs.</li>
                    <li><strong>First Job & Internships:</strong> Many companies use a GPA cutoff (commonly 3.0) to screen candidates.</li>
                    <li><strong>Academic Honors:</strong> Making the Dean's List or graduating with honors is directly tied to your GPA.</li>
                </ul>

                <h3 id="faq">Frequently Asked Questions</h3>
                <div class="gpa-faq">
                    <div class="gpa-faq-item" onclick="toggleFAQ(this)"><div class="gpa-faq-question">What is a good GPA?<span class="faq-icon"><i class="fas fa-chevron-down"></i></span></div><div class="gpa-faq-answer"><p>A 'good' GPA is subjective. Generally, a 3.0-3.5 is considered solid. For competitive graduate schools or top-tier companies, aiming for a 3.5 or higher is recommended. A 4.0 is a perfect score.</p></div></div>
                    <div class="gpa-faq-item" onclick="toggleFAQ(this)"><div class="gpa-faq-question">What is the difference between GPA and CGPA?<span class="faq-icon"><i class="fas fa-chevron-down"></i></span></div><div class="gpa-faq-answer"><p>GPA (Grade Point Average) usually refers to your performance in a single semester. CGPA (Cumulative Grade Point Average) is the average of your GPAs from all completed semesters.</p></div></div>
                    <div class="gpa-faq-item" onclick="toggleFAQ(this)"><div class="gpa-faq-question">Do Pass/Fail classes affect GPA?<span class="faq-icon"><i class="fas fa-chevron-down"></i></span></div><div class="gpa-faq-answer"><p>Typically, no. A 'Pass' grade awards you credits without affecting your GPA. However, some schools treat a 'Fail' as an 'F' (0.0 grade points), so it's crucial to check your school's specific policy.</p></div></div>
                    <div class="gpa-faq-item" onclick="toggleFAQ(this)"><div class="gpa-faq-question">What is weighted vs. unweighted GPA?<span class="faq-icon"><i class="fas fa-chevron-down"></i></span></div><div class="gpa-faq-answer"><p>An unweighted GPA is on a standard 4.0 scale. A weighted GPA gives extra points for harder courses like AP or Honors, often using a 5.0 scale. This rewards students for taking a more challenging course load.</p></div></div>
                    <div class="gpa-faq-item" onclick="toggleFAQ(this)"><div class="gpa-faq-question">Can one bad semester ruin my GPA?<span class="faq-icon"><i class="fas fa-chevron-down"></i></span></div><div class="gpa-faq-answer"><p>Not necessarily. While it will lower your CGPA, its impact diminishes as you complete more credits. Consistently strong performance in future semesters can raise your overall GPA significantly. An upward trend is often viewed positively.</p></div></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="gpa-notification" id="notification">
    <i class="fas fa-check-circle" style="color: var(--gpa-success);"></i>
    <span id="notificationText">Notification</span>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Grade point values
    const gradePoints = {
        'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
        'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0
    };
    
    let courses = [], calculatorType = 'semester', courseIdCounter = 0;

    // Element Selectors
    const courseList = document.getElementById('courseList');
    const addCourseBtn = document.getElementById('addCourseBtn');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const planBtn = document.getElementById('planBtn');
    const typeButtons = document.querySelectorAll('.gpa-type-btn');
    const cumulativeInputs = document.getElementById('cumulativeInputs');
    const courseListHeader = document.getElementById('courseListHeader');
    const gpaResultLabel = document.getElementById('gpaResultLabel');

    // Initial setup
    for (let i = 0; i < 3; i++) addCourse();

    // Event Listeners
    addCourseBtn.addEventListener('click', addCourse);
    calculateBtn.addEventListener('click', calculateGPA);
    resetBtn.addEventListener('click', resetCalculator);
    planBtn.addEventListener('click', calculateRequiredGPA);
    
    typeButtons.forEach(btn => btn.addEventListener('click', function() {
        typeButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        calculatorType = this.dataset.type;

        if (calculatorType === 'cumulative') {
            cumulativeInputs.style.display = 'block';
            courseListHeader.style.display = 'block';
            gpaResultLabel.textContent = 'New Cumulative GPA';
        } else {
            cumulativeInputs.style.display = 'none';
            courseListHeader.style.display = 'none';
            gpaResultLabel.textContent = 'Semester GPA';
        }
        showNotification(`Switched to ${this.textContent} mode`, 'info');
    }));

    function addCourse() {
        const courseId = courseIdCounter++;
        const courseDiv = document.createElement('div');
        courseDiv.className = 'gpa-course-item';
        courseDiv.id = `course-${courseId}`;
        courseDiv.innerHTML = `<div class="gpa-course-header"><span class="gpa-course-number"></span><button class="gpa-remove-btn" onclick="removeCourse(${courseId})"><i class="fas fa-times"></i></button></div><div class="gpa-course-inputs"><div class="gpa-input-group"><label class="gpa-input-label">Course Name</label><input type="text" class="gpa-input" placeholder="e.g., Calculus I" data-course="${courseId}" data-field="name"></div><div class="gpa-input-group"><label class="gpa-input-label">Credits</label><input type="number" class="gpa-input" placeholder="3" min="0" max="6" step="0.5" data-course="${courseId}" data-field="credits"></div><div class="gpa-input-group"><label class="gpa-input-label">Grade</label><select class="gpa-select" data-course="${courseId}" data-field="grade"><option value="">Select Grade</option><option value="A">A (4.0)</option><option value="A-">A- (3.7)</option><option value="B+">B+ (3.3)</option><option value="B">B (3.0)</option><option value="B-">B- (2.7)</option><option value="C+">C+ (2.3)</option><option value="C">C (2.0)</option><option value="C-">C- (1.7)</option><option value="D+">D+ (1.3)</option><option value="D">D (1.0)</option><option value="F">F (0.0)</option></select></div></div>`;
        courseList.appendChild(courseDiv);
        courses.push({ id: courseId, name: '', credits: '', grade: '' });
        courseDiv.querySelectorAll('input, select').forEach(input => input.addEventListener('change', function() {
            const course = courses.find(c => c.id === parseInt(this.dataset.course));
            if (course) course[this.dataset.field] = this.value;
        }));
        updateCourseNumbers();
    }

    window.removeCourse = function(courseId) {
        const courseElement = document.getElementById(`course-${courseId}`);
        if (courseElement) {
            courseElement.style.transform = 'translateX(-120%)';
            courseElement.style.opacity = '0';
            setTimeout(() => {
                courseElement.remove();
                courses = courses.filter(c => c.id !== courseId);
                updateCourseNumbers();
                showNotification('Course removed', 'info');
            }, 300);
        }
    };

    function updateCourseNumbers() {
        courseList.querySelectorAll('.gpa-course-item').forEach((item, index) => {
            const numberSpan = item.querySelector('.gpa-course-number');
            if (numberSpan) numberSpan.textContent = `Course ${index + 1}`;
        });
    }

    function calculateGPA() {
        let currentTotalQP = 0, currentTotalCredits = 0, validCourses = 0;
        let gradeCount = { A: 0, B: 0, C: 0, D: 0, F: 0 };
        
        courses.forEach(course => {
            if (course.grade && course.credits) {
                const credits = parseFloat(course.credits);
                if (isNaN(credits) || credits <= 0) return;
                const gradePoint = gradePoints[course.grade];
                currentTotalQP += gradePoint * credits;
                currentTotalCredits += credits;
                validCourses++;
                const letterGrade = course.grade.charAt(0);
                if(gradeCount.hasOwnProperty(letterGrade)) gradeCount[letterGrade]++;
            }
        });

        let finalTotalQP = currentTotalQP;
        let finalTotalCredits = currentTotalCredits;

        if (calculatorType === 'cumulative') {
            const prevCredits = parseFloat(document.getElementById('prevCredits').value) || 0;
            const prevGPA = parseFloat(document.getElementById('prevGPA').value) || 0;
            
            if (prevCredits > 0) {
                finalTotalQP += prevGPA * prevCredits;
                finalTotalCredits += prevCredits;
            }
        }
        
        if (finalTotalCredits === 0) {
            showNotification('Please enter credits and grades to calculate.', 'warning');
            return;
        }

        const gpa = finalTotalQP / finalTotalCredits;
        updateResultsUI(gpa, finalTotalCredits, validCourses, finalTotalQP, gradeCount);
        showNotification(`Your ${calculatorType} GPA is ${gpa.toFixed(2)}`, 'success');
    }
    
    function updateResultsUI(gpa, credits, numCourses, qualityPoints, gradeCount) {
        document.getElementById('gpaResult').textContent = gpa.toFixed(2);
        document.getElementById('totalCredits').textContent = credits;
        document.getElementById('totalCourses').textContent = numCourses;
        document.getElementById('qualityPoints').textContent = qualityPoints.toFixed(1);

        let avgGradeText = '-';
        if (gpa >= 3.85) avgGradeText = 'A'; else if (gpa >= 3.5) avgGradeText = 'A-';
        else if (gpa >= 3.15) avgGradeText = 'B+'; else if (gpa >= 2.85) avgGradeText = 'B';
        else if (gpa >= 2.5) avgGradeText = 'B-'; else if (gpa >= 2.15) avgGradeText = 'C+';
        else if (gpa >= 1.85) avgGradeText = 'C'; else if (gpa >= 1.5) avgGradeText = 'C-';
        else if (gpa >= 1.15) avgGradeText = 'D+'; else if (gpa >= 0.5) avgGradeText = 'D';
        else avgGradeText = 'F';
        document.getElementById('avgGrade').textContent = avgGradeText;

        const totalGrades = numCourses;
        Object.keys(gradeCount).forEach(grade => {
            const percentage = totalGrades > 0 ? (gradeCount[grade] / totalGrades) * 100 : 0;
            document.querySelector(`.gpa-grade-fill[data-grade="${grade}"]`).style.width = `${percentage}%`;
            document.querySelector(`.gpa-grade-count[data-grade-count="${grade}"]`).textContent = gradeCount[grade];
        });
    }

    function resetCalculator() {
        courses = [];
        courseIdCounter = 0;
        courseList.innerHTML = '';
        document.getElementById('prevCredits').value = '';
        document.getElementById('prevGPA').value = '';
        updateResultsUI(0, 0, 0, 0, { A: 0, B: 0, C: 0, D: 0, F: 0 });

        // Reset to semester view
        document.querySelectorAll('.gpa-type-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === 'semester');
        });
        calculatorType = 'semester';
        cumulativeInputs.style.display = 'none';
        courseListHeader.style.display = 'none';
        gpaResultLabel.textContent = 'Your GPA';

        for (let i = 0; i < 3; i++) addCourse();
        showNotification('Calculator has been reset', 'info');
    }

    function calculateRequiredGPA() {
        const currentGPA = parseFloat(document.getElementById('currentGPA').value);
        const currentCredits = parseFloat(document.getElementById('currentCredits').value);
        const targetGPA = parseFloat(document.getElementById('targetGPA').value);
        const futureCredits = parseFloat(document.getElementById('futureCredits').value);
        if (isNaN(currentGPA) || isNaN(currentCredits) || isNaN(targetGPA) || isNaN(futureCredits)) {
            showNotification('Please fill all planning fields', 'warning'); return;
        }
        const currentQP = currentGPA * currentCredits;
        const targetQP = targetGPA * (currentCredits + futureCredits);
        const requiredQP = targetQP - currentQP;
        const requiredGPA = requiredQP / futureCredits;
        const resultDiv = document.getElementById('planResult');
        let html = '';
        if (requiredGPA > 4.0) {
            html = `<div style="text-align: center;"><i class="fas fa-times-circle" style="font-size: 2rem; color: var(--gpa-danger); margin-bottom: 1rem;"></i><h4 style="color: var(--gpa-danger);">Target Not Achievable</h4><p>You need a ${requiredGPA.toFixed(2)} GPA, which is not possible.</p></div>`;
        } else if (requiredGPA < 2.0) {
            html = `<div style="text-align: center;"><i class="fas fa-check-circle" style="font-size: 2rem; color: var(--gpa-success); margin-bottom: 1rem;"></i><h4 style="color: var(--gpa-success);">Target Achievable!</h4><p>You need a ${requiredGPA.toFixed(2)} GPA over your next ${futureCredits} credits.</p></div>`;
        } else {
             html = `<div style="text-align: center;"><i class="fas fa-bullseye" style="font-size: 2rem; color: var(--gpa-primary); margin-bottom: 1rem;"></i><h4>Required GPA: ${requiredGPA.toFixed(2)}</h4><p>You need to maintain a ${requiredGPA.toFixed(2)} GPA over your next ${futureCredits} credits.</p></div>`;
        }
        resultDiv.innerHTML = html;
        resultDiv.style.display = 'block';
    }

    window.toggleFAQ = function(element) {
        element.classList.toggle('active');
    };

    function showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');
        const icon = notification.querySelector('i');
        notificationText.textContent = message;
        icon.className = type === 'success' ? 'fas fa-check-circle' : type === 'warning' ? 'fas fa-exclamation-triangle' : 'fas fa-info-circle';
        icon.style.color = type === 'success' ? 'var(--gpa-success)' : type === 'warning' ? 'var(--gpa-warning)' : 'var(--gpa-primary)';
        notification.classList.add('show');
        setTimeout(() => notification.classList.remove('show'), 3000);
    }
});
</script>