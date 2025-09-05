---
title: "GPA Calculator: Calculate Your Grade Point Average Instantly"
localtitle: "GPA Calculator - Track Your Academic Performance"
layout: tool
categories: [education, student-tools, calculators]
permalink: /education/gpa-calculator
description: "Free GPA calculator to calculate your Grade Point Average instantly. Works for college, high school, and university students. Calculate cumulative GPA, semester GPA, and plan your grades to reach target GPA."
tags:
  - "GPA Calculator"
  - "Grade Point Average"
  - "CGPA Calculator"
  - "College GPA Calculator"
  - "High School GPA Calculator"
  - "Semester GPA Calculator"
  - "Cumulative GPA Calculator"
  - "Grade Calculator"
  - "4.0 GPA Scale"
  - "University GPA Calculator"
  - "Academic Calculator"
  - "GPA Planning Tool"
  - "How to Calculate GPA"
  - "GPA Calculator 4.0 Scale"
  - "Weighted GPA Calculator"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

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

    .dark-mode {
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
        padding: 3rem 0;
        margin-bottom: 3rem;
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
    }

    @media (min-width: 1024px) {
        .gpa-main-grid {
            grid-template-columns: 1fr 400px;
        }
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
        position: sticky;
        top: 2rem;
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
        padding: 2rem;
        margin-bottom: 2rem;
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
        padding: 3rem;
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

    .gpa-info-body p {
        font-size: 1.0625rem;
        line-height: 1.75;
        color: var(--gpa-text-secondary);
        margin-bottom: 1.25rem;
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
        background: var(--gpa-bg-hover);
        border-radius: 12px;
        overflow: hidden;
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
    }

    .gpa-scale-table td {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--gpa-border);
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
    .gpa-faq {
        margin: 3rem 0;
    }

    .gpa-faq-item {
        background: var(--gpa-bg-hover);
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .gpa-faq-item:hover {
        box-shadow: var(--gpa-shadow-sm);
    }

    .gpa-faq-question {
        font-weight: 600;
        color: var(--gpa-text-primary);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .gpa-faq-answer {
        margin-top: 1rem;
        color: var(--gpa-text-secondary);
        display: none;
        line-height: 1.7;
    }

    .gpa-faq-item.active .gpa-faq-answer {
        display: block;
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

    .gpa-tips-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .gpa-tips-list li {
        padding-left: 2rem;
        margin-bottom: 0.75rem;
        position: relative;
        color: var(--gpa-text-secondary);
    }

    .gpa-tips-list li::before {
        content: '💡';
        position: absolute;
        left: 0;
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
            padding: 1rem;
        }
    }

    /* Loading Animation */
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    .gpa-loading {
        animation: pulse 1.5s ease-in-out infinite;
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
        <!-- Hero Section -->
        <div class="gpa-hero">
            <h1>GPA Calculator</h1>
            <p>Calculate your Grade Point Average instantly. Perfect for college students, high schoolers, and anyone tracking their academic performance.</p>
        </div>

        <!-- Main Calculator Grid -->
        <div class="gpa-main-grid">
            <!-- Calculator Section -->
            <div>
                <div class="gpa-calc-card">
                    <div class="gpa-card-header">
                        <h2>
                            <span class="icon"><i class="fas fa-calculator"></i></span>
                            Calculate Your GPA
                        </h2>
                    </div>
                    <div class="gpa-card-body">
                        <!-- Calculator Type Selector -->
                        <div class="gpa-type-selector">
                            <button class="gpa-type-btn active" data-type="semester">Semester GPA</button>
                            <button class="gpa-type-btn" data-type="cumulative">Cumulative GPA</button>
                        </div>

                        <!-- Course List -->
                        <div class="gpa-course-list" id="courseList">
                            <!-- Courses will be dynamically added here -->
                        </div>

                        <!-- Add Course Button -->
                        <button class="gpa-btn gpa-btn-add" id="addCourseBtn">
                            <i class="fas fa-plus"></i> Add Course
                        </button>

                        <!-- Action Buttons -->
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

                <!-- Planning Tools -->
                <div class="gpa-planning-section" style="margin-top: 2rem;">
                    <div class="gpa-planning-header">
                        <div class="gpa-planning-icon">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <div>
                            <h3 style="margin: 0; font-size: 1.5rem;">GPA Goal Planner</h3>
                            <p style="margin: 0.25rem 0 0; color: var(--gpa-text-secondary);">Find out what grades you need to reach your target GPA</p>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        <div class="gpa-input-group">
                            <label class="gpa-input-label">Current GPA</label>
                            <input type="number" class="gpa-input" id="currentGPA" placeholder="3.50" min="0" max="4" step="0.01">
                        </div>
                        <div class="gpa-input-group">
                            <label class="gpa-input-label">Credits Completed</label>
                            <input type="number" class="gpa-input" id="currentCredits" placeholder="60" min="0">
                        </div>
                        <div class="gpa-input-group">
                            <label class="gpa-input-label">Target GPA</label>
                            <input type="number" class="gpa-input" id="targetGPA" placeholder="3.75" min="0" max="4" step="0.01">
                        </div>
                        <div class="gpa-input-group">
                            <label class="gpa-input-label">Future Credits</label>
                            <input type="number" class="gpa-input" id="futureCredits" placeholder="15" min="0">
                        </div>
                    </div>
                    
                    <button class="gpa-btn gpa-btn-primary" id="planBtn" style="margin-top: 1.5rem;">
                        <i class="fas fa-magic"></i> Calculate Required GPA
                    </button>
                    
                    <div id="planResult" style="display: none; margin-top: 1.5rem; padding: 1.5rem; background: var(--gpa-bg-hover); border-radius: 12px;">
                        <!-- Planning results will appear here -->
                    </div>
                </div>
            </div>

            <!-- Results Panel -->
            <div class="gpa-results-panel">
                <div class="gpa-result-display">
                    <div class="gpa-result-label">Your GPA</div>
                    <div class="gpa-result-value" id="gpaResult">0.00</div>
                    <div class="gpa-result-scale">out of 4.0</div>
                </div>

                <!-- Grade Distribution -->
                <div class="gpa-grade-chart">
                    <h3 style="font-size: 1.125rem; margin-bottom: 1rem;">Grade Distribution</h3>
                    <div class="gpa-grade-bar">
                        <span class="gpa-grade-label">A</span>
                        <div class="gpa-grade-progress">
                            <div class="gpa-grade-fill" data-grade="A" style="width: 0%;"></div>
                        </div>
                        <span class="gpa-grade-count" data-grade-count="A">0</span>
                    </div>
                    <div class="gpa-grade-bar">
                        <span class="gpa-grade-label">B</span>
                        <div class="gpa-grade-progress">
                            <div class="gpa-grade-fill" data-grade="B" style="width: 0%;"></div>
                        </div>
                        <span class="gpa-grade-count" data-grade-count="B">0</span>
                    </div>
                    <div class="gpa-grade-bar">
                        <span class="gpa-grade-label">C</span>
                        <div class="gpa-grade-progress">
                            <div class="gpa-grade-fill" data-grade="C" style="width: 0%;"></div>
                        </div>
                        <span class="gpa-grade-count" data-grade-count="C">0</span>
                    </div>
                    <div class="gpa-grade-bar">
                        <span class="gpa-grade-label">D</span>
                        <div class="gpa-grade-progress">
                            <div class="gpa-grade-fill" data-grade="D" style="width: 0%;"></div>
                        </div>
                        <span class="gpa-grade-count" data-grade-count="D">0</span>
                    </div>
                    <div class="gpa-grade-bar">
                        <span class="gpa-grade-label">F</span>
                        <div class="gpa-grade-progress">
                            <div class="gpa-grade-fill" data-grade="F" style="width: 0%;"></div>
                        </div>
                        <span class="gpa-grade-count" data-grade-count="F">0</span>
                    </div>
                </div>

                <!-- Statistics -->
                <div class="gpa-stats-grid">
                    <div class="gpa-stat-card">
                        <div class="gpa-stat-value" id="totalCredits">0</div>
                        <div class="gpa-stat-label">Total Credits</div>
                    </div>
                    <div class="gpa-stat-card">
                        <div class="gpa-stat-value" id="totalCourses">0</div>
                        <div class="gpa-stat-label">Total Courses</div>
                    </div>
                    <div class="gpa-stat-card">
                        <div class="gpa-stat-value" id="avgGrade">-</div>
                        <div class="gpa-stat-label">Average Grade</div>
                    </div>
                    <div class="gpa-stat-card">
                        <div class="gpa-stat-value" id="qualityPoints">0</div>
                        <div class="gpa-stat-label">Quality Points</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Information Section -->
        <div class="gpa-info-section">
            <div class="gpa-info-header">
                <h2>📚 Everything You Need to Know About GPA Calculation</h2>
            </div>
            <div class="gpa-info-body">
                <p>Hey there, student! Let me guess - you're here because you're trying to figure out your GPA, right? Maybe you're applying for scholarships, checking if you're on track for graduation, or just curious about where you stand academically. Whatever brought you here, you're in the right place.</p>

                <h3>What Exactly is GPA?</h3>
                <p>GPA stands for Grade Point Average, and honestly, it's just a fancy way of putting a number on your academic performance. Think of it as your academic batting average - it tells everyone (including yourself) how well you're doing in school overall.</p>
                
                <p>Most schools in the US use a 4.0 scale, where an A equals 4.0 points, and it goes down from there. But here's the thing - calculating your GPA by hand is tedious and prone to errors. That's why smart students use a <strong>GPA calculator</strong> like ours to get accurate results instantly.</p>

                <div class="gpa-tips-box">
                    <h4><i class="fas fa-lightbulb"></i> Quick Tip from a Dean's List Student</h4>
                    <ul class="gpa-tips-list">
                        <li>Your GPA isn't everything, but it opens doors. Keep it above 3.0 for most opportunities</li>
                        <li>One bad semester won't ruin your life - I bombed freshman year and still graduated with honors</li>
                        <li>Use our <strong>college GPA calculator</strong> regularly to track your progress</li>
                        <li>Remember: employers care more about your major GPA than overall GPA</li>
                    </ul>
                </div>

                <h3>How to Calculate GPA (The Easy Way)</h3>
                <p>Look, I'll be honest - nobody enjoys calculating GPA manually. It involves multiplying each grade by its credit hours, adding everything up, then dividing by total credits. Sounds fun? Nope. That's why our <strong>GPA calculator 4.0 scale</strong> does all the heavy lifting for you.</p>

                <p>But if you're curious about the formula (maybe for a math test?), here it is:</p>
                <div style="background: var(--gpa-bg-hover); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
                    <code style="font-size: 1.1rem;">GPA = Total Quality Points ÷ Total Credit Hours</code>
                    <br><br>
                    <code style="font-size: 0.9rem;">Quality Points = Grade Value × Credit Hours</code>
                </div>

                <h3>Understanding the GPA Scale</h3>
                <p>Not all schools calculate GPA the same way (because why make things simple, right?). Here's the standard 4.0 scale most colleges use:</p>

                <table class="gpa-scale-table">
                    <thead>
                        <tr>
                            <th>Letter Grade</th>
                            <th>Percentage</th>
                            <th>4.0 Scale</th>
                            <th>What It Means</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-a">A</span></td>
                            <td>93-100%</td>
                            <td>4.0</td>
                            <td>Excellent - You're killing it!</td>
                        </tr>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-a">A-</span></td>
                            <td>90-92%</td>
                            <td>3.7</td>
                            <td>Great job - Almost perfect</td>
                        </tr>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-b">B+</span></td>
                            <td>87-89%</td>
                            <td>3.3</td>
                            <td>Above average - Nice work</td>
                        </tr>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-b">B</span></td>
                            <td>83-86%</td>
                            <td>3.0</td>
                            <td>Good - Solid performance</td>
                        </tr>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-b">B-</span></td>
                            <td>80-82%</td>
                            <td>2.7</td>
                            <td>Above average - Room to grow</td>
                        </tr>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-c">C+</span></td>
                            <td>77-79%</td>
                            <td>2.3</td>
                            <td>Average - Meeting expectations</td>
                        </tr>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-c">C</span></td>
                            <td>73-76%</td>
                            <td>2.0</td>
                            <td>Satisfactory - Just passing</td>
                        </tr>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-c">C-</span></td>
                            <td>70-72%</td>
                            <td>1.7</td>
                            <td>Below average - Needs work</td>
                        </tr>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-d">D+</span></td>
                            <td>67-69%</td>
                            <td>1.3</td>
                            <td>Poor - Barely passing</td>
                        </tr>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-d">D</span></td>
                            <td>60-66%</td>
                            <td>1.0</td>
                            <td>Poor - Minimum passing</td>
                        </tr>
                        <tr>
                            <td><span class="gpa-grade-badge gpa-grade-d">F</span></td>
                            <td>Below 60%</td>
                            <td>0.0</td>
                            <td>Failing - Time to retake</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Different Types of GPA (Because One Wasn't Enough)</h3>
                <p>Just when you thought you understood GPA, turns out there are different types. Don't worry, I'll break them down for you:</p>

                <div class="gpa-features-grid">
                    <div class="gpa-feature-card">
                        <div class="gpa-feature-icon"><i class="fas fa-graduation-cap"></i></div>
                        <h4>Semester GPA</h4>
                        <p>Your grades for just one semester. This is what most students check obsessively during finals week. Use our <strong>semester GPA calculator</strong> to see where you stand this term.</p>
                    </div>
                    <div class="gpa-feature-card">
                        <div class="gpa-feature-icon"><i class="fas fa-chart-line"></i></div>
                        <h4>Cumulative GPA</h4>
                        <p>Your overall GPA including all semesters. This is the big one - what employers and grad schools look at. Our <strong>cumulative GPA calculator</strong> helps you track long-term progress.</p>
                    </div>
                    <div class="gpa-feature-card">
                        <div class="gpa-feature-icon"><i class="fas fa-weight"></i></div>
                        <h4>Weighted GPA</h4>
                        <p>Takes into account course difficulty. AP and honors classes can push this above 4.0. High schools love this, colleges... not so much.</p>
                    </div>
                </div>

                <h3>Real Talk: Does GPA Really Matter?</h3>
                <p>Okay, let's have an honest conversation here. Yes, GPA matters, but it's not everything. I've seen students with perfect GPAs struggle in the real world, and C students become millionaire entrepreneurs. That said, here's when GPA actually matters:</p>

                <ul style="line-height: 1.8;">
                    <li><strong>Scholarships:</strong> Most require at least a 3.0, competitive ones want 3.5+</li>
                    <li><strong>Grad School:</strong> You'll need a solid GPA (usually 3.0 minimum, 3.5+ for top programs)</li>
                    <li><strong>First Job:</strong> Many companies have GPA cutoffs (typically 3.0) for new grads</li>
                    <li><strong>Internships:</strong> Competitive ones often screen by GPA first</li>
                    <li><strong>Academic Honors:</strong> Dean's List, Latin honors, etc. all depend on GPA</li>
                </ul>

                <div class="gpa-tips-box">
                    <h4><i class="fas fa-star"></i> Pro Tips for Boosting Your GPA</h4>
                    <ul class="gpa-tips-list">
                        <li>Take easier electives to balance hard core classes (we all do it)</li>
                        <li>Retake failed classes - most schools replace the F in GPA calculations</li>
                        <li>Summer classes are often easier and can boost your GPA</li>
                        <li>Use our <strong>GPA calculator</strong> to plan which grades you need</li>
                        <li>Don't overload your schedule - better to ace 4 classes than struggle through 6</li>
                    </ul>
                </div>

                <h3>Common GPA Questions (From Real Students)</h3>
                <div class="gpa-faq">
                    <div class="gpa-faq-item" onclick="toggleFAQ(this)">
                        <div class="gpa-faq-question">
                            How often should I calculate my GPA?
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="gpa-faq-answer">
                            I recommend checking your GPA at least twice per semester - once at midterms to see where you stand, and again before finals to know what grades you need. Our <strong>college GPA calculator</strong> makes it quick and easy to check anytime.
                        </div>
                    </div>
                    
                    <div class="gpa-faq-item" onclick="toggleFAQ(this)">
                        <div class="gpa-faq-question">
                            Can I get into a good college with a low GPA?
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="gpa-faq-answer">
                            Absolutely! I know someone who got into Stanford with a 3.2 GPA because they started a successful nonprofit. GPA is just one factor. Strong test scores, amazing essays, unique extracurriculars, or compelling life stories can outweigh a lower GPA. Plus, many schools look at improvement trends - a bad freshman year followed by straight A's tells a great story.
                        </div>
                    </div>
                    
                    <div class="gpa-faq-item" onclick="toggleFAQ(this)">
                        <div class="gpa-faq-question">
                            What's the difference between weighted and unweighted GPA?
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="gpa-faq-answer">
                            Unweighted GPA uses the standard 4.0 scale regardless of course difficulty. Weighted GPA gives extra points for harder classes - typically adding 0.5 for honors and 1.0 for AP/IB courses. So an A in AP Calculus might be worth 5.0 instead of 4.0. Most colleges recalculate using unweighted GPA for fair comparison, but they definitely notice if you took challenging courses.
                        </div>
                    </div>
                    
                    <div class="gpa-faq-item" onclick="toggleFAQ(this)">
                        <div class="gpa-faq-question">
                            My school uses a different grading scale. Can I still use this calculator?
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="gpa-faq-answer">
                            Yes! While our <strong>GPA calculator 4.0 scale</strong> is set up for the standard system, you can adapt it. If your school uses percentages or a different scale, just convert your grades to the equivalent letter grades first. Most schools provide a conversion chart, or you can ask your counselor.
                        </div>
                    </div>
                    
                    <div class="gpa-faq-item" onclick="toggleFAQ(this)">
                        <div class="gpa-faq-question">
                            Should I include pass/fail courses in my GPA calculation?
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="gpa-faq-answer">
                            Generally, no. Pass/fail courses typically don't affect your GPA - that's kind of the point! A 'Pass' doesn't help or hurt your GPA, while a 'Fail' usually counts as 0.0. But policies vary by school, so double-check with your registrar. Some schools have "Credit/No Credit" which works similarly.
                        </div>
                    </div>
                </div>

                <h3>The Bottom Line</h3>
                <p>Your GPA is important, but it's not your entire identity. I've been there - stressing over every tenth of a point, calculating and recalculating after every assignment. Use our <strong>GPA calculator</strong> to stay informed, but don't let it consume you.</p>
                
                <p>Focus on learning, growing, and becoming the best version of yourself. The numbers will follow. And remember - plenty of successful people had mediocre GPAs. What matters most is what you do with your education, not just the grades you get along the way.</p>
                
                <p>Now go ahead and calculate that GPA! Whether you're aiming for the Dean's List or just trying to keep that scholarship, we've got your back. And hey, if the number isn't what you hoped, remember - there's always next semester. You've got this! 💪</p>
            </div>
        </div>
    </div>
</div>

<!-- Notification Element -->
<div class="gpa-notification" id="notification">
    <i class="fas fa-check-circle" style="color: var(--gpa-success);"></i>
    <span id="notificationText">Notification</span>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Grade point values
    const gradePoints = {
        'A': 4.0, 'A-': 3.7,
        'B+': 3.3, 'B': 3.0, 'B-': 2.7,
        'C+': 2.3, 'C': 2.0, 'C-': 1.7,
        'D+': 1.3, 'D': 1.0,
        'F': 0.0
    };

    // State
    let courses = [];
    let calculatorType = 'semester';
    let courseIdCounter = 0;

    // DOM Elements
    const courseList = document.getElementById('courseList');
    const addCourseBtn = document.getElementById('addCourseBtn');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const planBtn = document.getElementById('planBtn');
    const typeButtons = document.querySelectorAll('.gpa-type-btn');

    // Initialize with 3 courses
    for (let i = 0; i < 3; i++) {
        addCourse();
    }

    // Event Listeners
    addCourseBtn.addEventListener('click', addCourse);
    calculateBtn.addEventListener('click', calculateGPA);
    resetBtn.addEventListener('click', resetCalculator);
    planBtn.addEventListener('click', calculateRequiredGPA);

    typeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            typeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            calculatorType = this.dataset.type;
            
            if (calculatorType === 'cumulative') {
                showNotification('Switched to Cumulative GPA mode', 'info');
            } else {
                showNotification('Switched to Semester GPA mode', 'info');
            }
        });
    });

    // Add Course Function
    function addCourse() {
        const courseId = courseIdCounter++;
        const courseDiv = document.createElement('div');
        courseDiv.className = 'gpa-course-item';
        courseDiv.id = `course-${courseId}`;
        courseDiv.innerHTML = `
            <div class="gpa-course-header">
                <span class="gpa-course-number">Course ${courses.length + 1}</span>
                <button class="gpa-remove-btn" onclick="removeCourse(${courseId})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="gpa-course-inputs">
                <div class="gpa-input-group">
                    <label class="gpa-input-label">Course Name</label>
                    <input type="text" class="gpa-input" placeholder="e.g., Calculus I" data-course="${courseId}" data-field="name">
                </div>
                <div class="gpa-input-group">
                    <label class="gpa-input-label">Credits</label>
                    <input type="number" class="gpa-input" placeholder="3" min="0" max="6" step="0.5" data-course="${courseId}" data-field="credits">
                </div>
                <div class="gpa-input-group">
                    <label class="gpa-input-label">Grade</label>
                    <select class="gpa-select" data-course="${courseId}" data-field="grade">
                        <option value="">Select Grade</option>
                        <option value="A">A (4.0)</option>
                        <option value="A-">A- (3.7)</option>
                        <option value="B+">B+ (3.3)</option>
                        <option value="B">B (3.0)</option>
                        <option value="B-">B- (2.7)</option>
                        <option value="C+">C+ (2.3)</option>
                        <option value="C">C (2.0)</option>
                        <option value="C-">C- (1.7)</option>
                        <option value="D+">D+ (1.3)</option>
                        <option value="D">D (1.0)</option>
                        <option value="F">F (0.0)</option>
                    </select>
                </div>
            </div>
        `;
        
        courseList.appendChild(courseDiv);
        courses.push({
            id: courseId,
            name: '',
            credits: '',
            grade: ''
        });

        // Add change listeners
        courseDiv.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('change', function() {
                const courseId = parseInt(this.dataset.course);
                const field = this.dataset.field;
                const course = courses.find(c => c.id === courseId);
                if (course) {
                    course[field] = this.value;
                }
            });
        });

        updateCourseNumbers();
    }

    // Remove Course Function
    window.removeCourse = function(courseId) {
        const courseElement = document.getElementById(`course-${courseId}`);
        if (courseElement) {
            courseElement.style.transform = 'translateX(-100%)';
            courseElement.style.opacity = '0';
            setTimeout(() => {
                courseElement.remove();
                courses = courses.filter(c => c.id !== courseId);
                updateCourseNumbers();
                showNotification('Course removed', 'info');
            }, 300);
        }
    }

    // Update Course Numbers
    function updateCourseNumbers() {
        const courseItems = courseList.querySelectorAll('.gpa-course-item');
        courseItems.forEach((item, index) => {
            const numberSpan = item.querySelector('.gpa-course-number');
            if (numberSpan) {
                numberSpan.textContent = `Course ${index + 1}`;
            }
        });
    }

    // Calculate GPA
    function calculateGPA() {
        let totalQualityPoints = 0;
        let totalCredits = 0;
        let gradeCount = { A: 0, B: 0, C: 0, D: 0, F: 0 };
        let validCourses = 0;

        courses.forEach(course => {
            if (course.grade && course.credits) {
                const credits = parseFloat(course.credits);
                const gradePoint = gradePoints[course.grade];
                
                totalQualityPoints += gradePoint * credits;
                totalCredits += credits;
                validCourses++;

                // Count grades for distribution
                const letterGrade = course.grade.charAt(0);
                gradeCount[letterGrade] = (gradeCount[letterGrade] || 0) + 1;
            }
        });

        if (totalCredits === 0) {
            showNotification('Please enter at least one course with credits and grade', 'warning');
            return;
        }

        const gpa = totalQualityPoints / totalCredits;

        // Update display
        document.getElementById('gpaResult').textContent = gpa.toFixed(2);
        document.getElementById('totalCredits').textContent = totalCredits;
        document.getElementById('totalCourses').textContent = validCourses;
        document.getElementById('qualityPoints').textContent = totalQualityPoints.toFixed(1);

        // Update average grade
        let avgGradeText = '-';
        if (gpa >= 3.7) avgGradeText = 'A';
        else if (gpa >= 3.3) avgGradeText = 'B+';
        else if (gpa >= 3.0) avgGradeText = 'B';
        else if (gpa >= 2.7) avgGradeText = 'B-';
        else if (gpa >= 2.3) avgGradeText = 'C+';
        else if (gpa >= 2.0) avgGradeText = 'C';
        else if (gpa >= 1.7) avgGradeText = 'C-';
        else if (gpa >= 1.3) avgGradeText = 'D+';
        else if (gpa >= 1.0) avgGradeText = 'D';
        else avgGradeText = 'F';
        
        document.getElementById('avgGrade').textContent = avgGradeText;

        // Update grade distribution
        const totalGrades = Object.values(gradeCount).reduce((a, b) => a + b, 0);
        Object.keys(gradeCount).forEach(grade => {
            const percentage = totalGrades > 0 ? (gradeCount[grade] / totalGrades) * 100 : 0;
            const fillElement = document.querySelector(`.gpa-grade-fill[data-grade="${grade}"]`);
            const countElement = document.querySelector(`.gpa-grade-count[data-grade-count="${grade}"]`);
            
            if (fillElement) fillElement.style.width = `${percentage}%`;
            if (countElement) countElement.textContent = gradeCount[grade];
        });

        // Show success message
        let message = `Your ${calculatorType} GPA is ${gpa.toFixed(2)}`;
        if (gpa >= 3.5) message += ' - Excellent work! 🎉';
        else if (gpa >= 3.0) message += ' - Good job! Keep it up! 💪';
        else if (gpa >= 2.5) message += ' - You\'re doing okay. Room for improvement! 📈';
        else message += ' - Consider seeking academic support 📚';
        
        showNotification(message, 'success');
    }

    // Reset Calculator
    function resetCalculator() {
        courses = [];
        courseIdCounter = 0;
        courseList.innerHTML = '';
        
        // Reset results
        document.getElementById('gpaResult').textContent = '0.00';
        document.getElementById('totalCredits').textContent = '0';
        document.getElementById('totalCourses').textContent = '0';
        document.getElementById('avgGrade').textContent = '-';
        document.getElementById('qualityPoints').textContent = '0';
        
        // Reset grade distribution
        document.querySelectorAll('.gpa-grade-fill').forEach(el => {
            el.style.width = '0%';
        });
        document.querySelectorAll('.gpa-grade-count').forEach(el => {
            el.textContent = '0';
        });
        
        // Add 3 new courses
        for (let i = 0; i < 3; i++) {
            addCourse();
        }
        
        showNotification('Calculator reset', 'info');
    }

    // Calculate Required GPA
    function calculateRequiredGPA() {
        const currentGPA = parseFloat(document.getElementById('currentGPA').value);
        const currentCredits = parseFloat(document.getElementById('currentCredits').value);
        const targetGPA = parseFloat(document.getElementById('targetGPA').value);
        const futureCredits = parseFloat(document.getElementById('futureCredits').value);

        if (!currentGPA || !currentCredits || !targetGPA || !futureCredits) {
            showNotification('Please fill in all planning fields', 'warning');
            return;
        }

        const currentQualityPoints = currentGPA * currentCredits;
        const targetQualityPoints = targetGPA * (currentCredits + futureCredits);
        const requiredQualityPoints = targetQualityPoints - currentQualityPoints;
        const requiredGPA = requiredQualityPoints / futureCredits;

        const resultDiv = document.getElementById('planResult');
        
        if (requiredGPA > 4.0) {
            resultDiv.innerHTML = `
                <div style="text-align: center;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--gpa-warning); margin-bottom: 1rem;"></i>
                    <h4 style="color: var(--gpa-warning); margin-bottom: 0.5rem;">Target GPA Not Achievable</h4>
                    <p>You would need a ${requiredGPA.toFixed(2)} GPA in your next ${futureCredits} credits, which exceeds the maximum 4.0.</p>
                    <p style="margin-top: 1rem;">Consider taking more credits or adjusting your target GPA to ${((currentQualityPoints + (4.0 * futureCredits)) / (currentCredits + futureCredits)).toFixed(2)}</p>
                </div>
            `;
        } else if (requiredGPA < 0) {
            resultDiv.innerHTML = `
                <div style="text-align: center;">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--gpa-success); margin-bottom: 1rem;"></i>
                    <h4 style="color: var(--gpa-success); margin-bottom: 0.5rem;">You're Already There!</h4>
                    <p>Your current GPA of ${currentGPA} already exceeds your target of ${targetGPA}.</p>
                    <p style="margin-top: 1rem;">You can maintain a ${((targetQualityPoints - currentQualityPoints) / futureCredits).toFixed(2)} GPA or higher to keep your target.</p>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div style="text-align: center;">
                    <i class="fas fa-bullseye" style="font-size: 3rem; color: var(--gpa-primary); margin-bottom: 1rem;"></i>
                    <h4 style="color: var(--gpa-primary); margin-bottom: 0.5rem;">Required GPA: ${requiredGPA.toFixed(2)}</h4>
                    <p>To reach your target GPA of ${targetGPA}, you need to maintain a ${requiredGPA.toFixed(2)} GPA over your next ${futureCredits} credits.</p>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(99, 102, 241, 0.1); border-radius: 8px;">
                        <p style="margin: 0; font-size: 0.9rem;">This means earning mostly ${requiredGPA >= 3.7 ? 'A\'s' : requiredGPA >= 3.0 ? 'B\'s' : requiredGPA >= 2.0 ? 'C\'s' : 'passing grades'} in your upcoming courses.</p>
                    </div>
                </div>
            `;
        }

        resultDiv.style.display = 'block';
        showNotification('GPA plan calculated!', 'success');
    }

    // Toggle FAQ
    window.toggleFAQ = function(element) {
        element.classList.toggle('active');
        const icon = element.querySelector('.fa-chevron-down');
        if (icon) {
            icon.style.transform = element.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
            icon.style.transition = 'transform 0.3s ease';
        }
    }

    // Show Notification
    function showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');
        const icon = notification.querySelector('i');
        
        notificationText.textContent = message;
        
        // Update icon based on type
        icon.className = type === 'success' ? 'fas fa-check-circle' : 
                        type === 'warning' ? 'fas fa-exclamation-triangle' : 
                        'fas fa-info-circle';
        icon.style.color = type === 'success' ? 'var(--gpa-success)' : 
                          type === 'warning' ? 'var(--gpa-warning)' : 
                          'var(--gpa-primary)';
        
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'Enter':
                    e.preventDefault();
                    calculateGPA();
                    break;
                case 'r':
                    e.preventDefault();
                    resetCalculator();
                    break;
                case 'a':
                    e.preventDefault();
                    addCourse();
                    break;
            }
        }
    });
});
</script>

