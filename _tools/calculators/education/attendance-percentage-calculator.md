---
title: "Attendance Percentage Calculator: Track Your College Attendance"
localtitle: "Attendance Percentage Calculator"
layout: tool
categories: [calculators, educationCalc, collegeCalc]
permalink: /calculators/education/attendance-percentage-calculator
description: "Free online attendance calculator for students. Calculate current attendance percentage, find how many classes you can skip, and track classes needed to reach 75% attendance. Perfect for college, school, and university students."
tags:
  - "Attendance Calculator"
  - "Student Tool"
  - "Attendance Percentage"
  - "Class Tracker"
  - "Bunk Classes"
  - "Lecture Counter"
  - "Educational Tool"
  - "Student Planner"
  - "attendance percentage calculator"
  - "how to calculate attendance"
  - "required attendance calculator"
  - "attendance required to reach 75%"
  - "class attendance calculator"
  - "college attendance calculator"
  - "university attendance tracker"
  - "school attendance calculator"
  - "online attendance checker"
  - "attendance shortage calculator"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<style>
    :root {
        --at-primary: #34d399;
        --at-primary-dark: #059669;
        --at-secondary: #60a5fa;
        --at-secondary-dark: #3b82f6;
        --at-accent: #fcd34d;
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
        --at-primary: #10b981;
        --at-primary-dark: #059669;
        --at-secondary: #8b5cf6;
        --at-secondary-dark: #7c3aed;
        --at-accent: #f59e0b;
        --at-bg-light: #111827;
        --at-bg-secondary: #1f2937;
        --at-bg-tertiary: #374151;
        --at-text-primary: #f9fafb;
        --at-text-secondary: #e5e7eb;
        --at-text-muted: #9ca3af;
        --at-border: rgba(156, 163, 175, 0.2);
    }

    * {
        box-sizing: border-box;
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
            radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
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

    .at-tool-header {
        background: linear-gradient(135deg, rgba(52, 211, 153, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%);
        padding: 30px;
        text-align: center;
        border-bottom: 1px solid var(--at-border);
    }

    .at-tool-header h1 {
        font-size: 2rem;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        color: var(--at-text-primary);
        margin: 0;
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

    .at-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }
    @media (min-width: 768px) {
        .at-grid {
            grid-template-columns: repeat(2, 1fr);
        }
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
        box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.2);
    }
    .dark-mode .at-input {
        background: var(--at-bg-tertiary);
        color: var(--at-text-primary);
    }
    .dark-mode .at-input:focus {
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
    }

    .at-slider-group {
        margin-top: 10px;
    }
    .at-slider-label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.95rem;
        color: var(--at-text-secondary);
        margin-bottom: 8px;
    }
    .at-slider {
        width: 100%;
        -webkit-appearance: none;
        height: 8px;
        background: var(--at-border);
        border-radius: 5px;
        outline: none;
        transition: opacity .2s;
    }
    .at-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--at-primary);
        cursor: pointer;
        transition: background .2s ease;
    }
    .at-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--at-primary);
        cursor: pointer;
    }

    .at-button {
        padding: 12px 24px;
        border: none;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: linear-gradient(135deg, var(--at-primary) 0%, var(--at-primary-dark) 100%);
        color: white;
        box-shadow: 0 4px 15px rgba(52, 211, 153, 0.3);
    }
    .dark-mode .at-button {
        background: linear-gradient(135deg, var(--at-primary) 0%, var(--at-primary-dark) 100%);
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    }
    .at-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(52, 211, 153, 0.4);
    }
    .dark-mode .at-button:hover {
        box-shadow: 0 6px 25px rgba(16, 185, 129, 0.4);
    }
    .at-button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }

    .at-button-secondary {
        padding: 10px 20px;
        border: 2px solid var(--at-primary);
        background: transparent;
        color: var(--at-primary);
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .at-button-secondary:hover {
        background: var(--at-primary);
        color: white;
    }

    .at-action-buttons {
        display: flex;
        gap: 12px;
        margin-top: 20px;
        flex-wrap: wrap;
        justify-content: center;
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

    .at-result-circle {
        position: relative;
        width: 150px;
        height: 150px;
    }
    .at-progress-ring {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(-90deg);
    }
    .at-progress-ring__circle {
        transition: stroke-dasharray 0.35s, stroke 0.35s;
        transform: rotate(180deg);
        transform-origin: center;
    }
    .at-result-value {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--at-primary);
        text-align: center;
        line-height: 1;
    }
    .at-result-value small {
        font-size: 1rem;
        font-weight: 600;
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
    .at-result-summary .miss-classes {
        color: var(--at-secondary);
    }
    .at-result-summary .need-classes {
        color: var(--at-accent);
    }
    
    .at-alert {
        padding: 15px 20px;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 500;
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .at-alert.success {
        background: rgba(52, 211, 153, 0.1);
        border: 1px solid rgba(52, 211, 153, 0.2);
        color: var(--at-primary-dark);
    }
    .at-alert.info {
        background: rgba(96, 165, 250, 0.1);
        border: 1px solid rgba(96, 165, 250, 0.2);
        color: var(--at-secondary-dark);
    }
    .at-alert.warning {
        background: rgba(252, 211, 77, 0.1);
        border: 1px solid rgba(252, 211, 77, 0.2);
        color: #b45309;
    }
    .at-alert.danger {
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.2);
        color: #dc2626;
    }

    .at-error-message {
        color: #dc2626;
        font-size: 0.875rem;
        margin-top: 8px;
        display: none;
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
        box-shadow: 0 15px 50px rgba(52, 211, 153, 0.2);
    }
    .dark-mode .at-related-card:hover {
        box-shadow: 0 15px 50px rgba(16, 185, 129, 0.2);
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
        margin: 0;
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
        background: rgba(52, 211, 153, 0.1);
        border-color: rgba(52, 211, 153, 0.3);
        color: var(--at-primary);
        transform: translateX(4px);
    }
    .dark-mode .at-related-card a:hover {
        background: rgba(16, 185, 129, 0.1);
        border-color: rgba(16, 185, 129, 0.3);
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
        background: linear-gradient(135deg, rgba(52, 211, 153, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%);
        padding: 40px;
        text-align: center;
        border-bottom: 1px solid var(--at-border);
    }
    .dark-mode .at-info-header {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
    }

    .at-info-header h2 {
        font-size: 2.25rem;
        font-weight: 900;
        background: linear-gradient(135deg, var(--at-primary) 0%, var(--at-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
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
    
    .at-info-body ul, .at-info-body ol {
        padding-left: 20px;
        margin-bottom: 1.5em;
    }

    .at-info-body strong {
        color: var(--at-primary);
    }

    .at-info-box {
        background: rgba(52, 211, 153, 0.1);
        border-left: 4px solid var(--at-primary);
        padding: 24px;
        margin: 30px 0;
        border-radius: 0 12px 12px 0;
    }
    .dark-mode .at-info-box {
        background: rgba(16, 185, 129, 0.1);
        border-left-color: var(--at-primary);
    }

    .at-info-box h4 {
        color: var(--at-primary);
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 1.25rem;
    }
    
    .at-info-box ul {
        list-style: none;
        padding: 0;
        margin: 0;
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

    .at-info-box pre {
        background: var(--at-bg-tertiary);
        padding: 16px;
        border-radius: 8px;
        overflow-x: auto;
        margin: 0;
    }

    .at-info-box code {
        font-family: 'Consolas', 'Monaco', monospace;
        font-size: 0.9rem;
        color: var(--at-text-primary);
    }

    /* Strategy Grid */
    .at-strategy-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin: 30px 0;
    }

    .at-strategy-card {
        background: var(--at-bg-tertiary);
        border: 1px solid var(--at-border);
        border-radius: 16px;
        padding: 24px;
        text-align: center;
        transition: transform 0.3s ease;
    }

    .at-strategy-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .at-strategy-card i {
        font-size: 2.5rem;
        color: var(--at-primary);
        margin-bottom: 16px;
    }

    .at-strategy-card h4 {
        font-size: 1.25rem;
        color: var(--at-text-primary);
        margin: 16px 0 12px;
    }

    .at-strategy-card p {
        font-size: 0.95rem;
        color: var(--at-text-secondary);
        line-height: 1.6;
    }

    /* Statistics */
    .at-stats-container {
        display: flex;
        gap: 20px;
        margin: 30px 0;
        flex-wrap: wrap;
    }

    .at-stat-card {
        flex: 1;
        min-width: 200px;
        text-align: center;
        padding: 30px;
        background: linear-gradient(135deg, rgba(52, 211, 153, 0.1), rgba(96, 165, 250, 0.1));
        border-radius: 16px;
        transition: transform 0.3s ease;
    }

    .at-stat-card:hover {
        transform: scale(1.05);
    }

    .at-stat-number {
        font-size: 3rem;
        font-weight: 900;
        color: var(--at-primary);
        margin-bottom: 8px;
    }

    .at-stat-label {
        font-size: 0.95rem;
        color: var(--at-text-secondary);
        line-height: 1.5;
    }

    /* FAQ */
    .at-faq-container {
        margin: 30px 0;
    }

    .at-faq-item {
        margin-bottom: 24px;
        padding: 20px;
        background: var(--at-bg-tertiary);
        border-radius: 12px;
        border: 1px solid var(--at-border);
        transition: all 0.3s ease;
    }

    .at-faq-item:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    .at-faq-item h4 {
        color: var(--at-primary);
        margin-bottom: 10px;
        font-size: 1.1rem;
    }

    .at-faq-item p {
        margin: 0;
    }

    /* History Modal */
    .at-modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        animation: fadeIn 0.3s ease;
    }

    .at-modal-content {
        background-color: var(--at-bg-secondary);
        margin: 5% auto;
        padding: 20px;
        border: 1px solid var(--at-border);
        border-radius: 20px;
        width: 90%;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        animation: slideIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    .at-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .at-modal-header h3 {
        margin: 0;
        color: var(--at-text-primary);
    }

    .at-close {
        color: var(--at-text-muted);
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .at-close:hover {
        color: var(--at-text-primary);
    }

    .at-history-item {
        background: var(--at-bg-tertiary);
        border: 1px solid var(--at-border);
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 12px;
    }

    .at-history-item-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 0.9rem;
        color: var(--at-text-muted);
    }

    .at-history-item-body {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 12px;
    }

    .at-history-stat {
        text-align: center;
    }

    .at-history-stat-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--at-primary);
    }

    .at-history-stat-label {
        font-size: 0.85rem;
        color: var(--at-text-secondary);
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

    @media (max-width: 768px) {
        .at-info-body {
            padding: 30px 20px;
        }
        
        .at-info-body h3 {
            font-size: 1.5rem;
        }
        
        .at-stats-container {
            flex-direction: column;
        }
    }
</style>

<div class="at-wrapper">
    <div class="at-layout">
        <div class="at-tool-container">
            <div class="at-tool-header">
                <h1><i class="fas fa-chart-line"></i> Attendance Calculator</h1>
            </div>
            <div class="at-tool-body">
                <div class="at-grid">
                    <div class="at-input-group">
                        <label for="total-classes" class="at-label">Total Classes Conducted</label>
                        <input type="number" id="total-classes" class="at-input" placeholder="e.g., 50" value="50" min="0">
                        <span id="total-classes-error" class="at-error-message">Please enter a valid number</span>
                    </div>
                    <div class="at-input-group">
                        <label for="classes-attended" class="at-label">Classes Attended</label>
                        <input type="number" id="classes-attended" class="at-input" placeholder="e.g., 40" value="40" min="0">
                        <span id="classes-attended-error" class="at-error-message">Please enter a valid number</span>
                    </div>
                </div>

                <div class="at-slider-group">
                    <label for="goal-percentage" class="at-slider-label">
                        Required Attendance Percentage:
                        <span id="goal-value">75%</span>
                    </label>
                    <input type="range" id="goal-percentage" class="at-slider" min="0" max="100" value="75">
                </div>
                
                <button id="calculate-btn" class="at-button">
                    <i class="fas fa-calculator"></i> Calculate
                </button>
                
                <div id="result-container" class="at-result-card" style="display: none;">
                    <div class="at-result-circle">
                        <svg class="at-progress-ring" width="150" height="150">
                            <circle class="at-progress-ring__circle" stroke="#e5e7eb" stroke-width="12" fill="transparent" r="60" cx="75" cy="75" />
                            <circle id="progress-circle" class="at-progress-ring__circle" stroke="#34d399" stroke-width="12" fill="transparent" r="60" cx="75" cy="75" />
                        </svg>
                        <div class="at-result-value" id="current-percentage-display">
                            0<small>%</small>
                        </div>
                    </div>

                    <div id="summary-result" class="at-result-summary">
                        <h3>Your Attendance is on Track!</h3>
                        <p>You can miss <strong>3 classes</strong> and still maintain your target attendance.</p>
                        <div id="summary-alert" class="at-alert success" style="display: none;">
                            <i class="fas fa-check-circle"></i> <span>Great job! You've met your attendance goal.</span>
                        </div>
                    </div>

                    <div class="at-action-buttons">
                        <button id="save-btn" class="at-button-secondary">
                            <i class="fas fa-save"></i> Save
                        </button>
                        <button id="share-btn" class="at-button-secondary">
                            <i class="fas fa-share"></i> Share
                        </button>
                        <button id="history-btn" class="at-button-secondary">
                            <i class="fas fa-history"></i> History
                        </button>
                        <button id="reset-btn" class="at-button-secondary">
                            <i class="fas fa-redo"></i> Reset
                        </button>
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
                <h3>📚 More Student Tools</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-graduation-cap"></i>GPA Calculator</a></li>
                    <li><a href="#"><i class="fas fa-calendar-alt"></i>Semester Planner</a></li>
                    <li><a href="#"><i class="fas fa-clipboard-list"></i>To-Do List Maker</a></li>
                    <li><a href="#"><i class="fas fa-stopwatch"></i>Pomodoro Timer</a></li>
                    <li><a href="#"><i class="fas fa-calculator"></i>Grade Calculator</a></li>
                </ul>
            </div>
        </div>

        <div class="at-info-content">
            <div class="at-info-header">
                <h2>📝 Complete Guide to Attendance Calculation & Management</h2>
            </div>
            <div class="at-info-body">
                <h3>What is an Attendance Calculator?</h3>
                <p>An <strong>attendance percentage calculator</strong> is a free online tool that helps students quickly find out their current attendance status and plan their academic schedule effectively. Whether you're using a <strong>college attendance calculator</strong> or checking your school attendance, this tool provides instant insights into:</p>
                <ul>
                    <li>Your current attendance percentage</li>
                    <li>How many classes you can safely skip</li>
                    <li>Classes needed to reach your target percentage</li>
                    <li>Real-time attendance tracking and planning</li>
                </ul>

                <h3>How to Calculate Attendance Percentage</h3>
                <p>Understanding <strong>how to calculate attendance</strong> is simple with our formula:</p>
                <div class="at-info-box">
                    <h4>Basic Attendance Formula:</h4>
                    <pre><code>Attendance % = (Classes Attended ÷ Total Classes) × 100</code></pre>
                    <p>Example: If you attended 42 out of 50 classes:</p>
                    <pre><code>(42 ÷ 50) × 100 = 84% attendance</code></pre>
                </div>

                <h3>Understanding Attendance Requirements</h3>
                <div class="at-info-box">
                    <h4>Common Attendance Requirements:</h4>
                    <ul>
                        <li>🏫 <strong>Schools</strong>: Usually 75-85% minimum attendance</li>
                        <li>🎓 <strong>Colleges/Universities</strong>: Typically 75% minimum</li>
                        <li>🏥 <strong>Medical Colleges</strong>: Often 80-85% mandatory</li>
                        <li>⚖️ <strong>Law Schools</strong>: Usually 70-75% required</li>
                        <li>💼 <strong>Professional Courses</strong>: Varies from 75-90%</li>
                    </ul>
                </div>

                <h3>Smart Attendance Strategies for Students</h3>
                <p>Managing attendance doesn't have to be stressful. Here are proven strategies that successful students use:</p>
                
                <div class="at-strategy-grid">
                    <div class="at-strategy-card">
                        <i class="fas fa-calendar-check"></i>
                        <h4>Plan Your Absences</h4>
                        <p>Use our calculator to know exactly how many classes you can afford to miss. Plan your leaves for important events or emergencies.</p>
                    </div>
                    
                    <div class="at-strategy-card">
                        <i class="fas fa-bell"></i>
                        <h4>Set Reminders</h4>
                        <p>When your attendance drops below 80%, set daily reminders to attend all classes until you're back in the safe zone.</p>
                    </div>
                    
                    <div class="at-strategy-card">
                        <i class="fas fa-users"></i>
                        <h4>Form Study Groups</h4>
                        <p>Having friends in class makes attendance more enjoyable and helps you catch up on missed material.</p>
                    </div>
                    
                    <div class="at-strategy-card">
                        <i class="fas fa-chart-line"></i>
                        <h4>Track Weekly</h4>
                        <p>Check your attendance every week using our calculator. Don't wait until the end of the semester!</p>
                    </div>
                </div>

                <h3>Attendance Impact on Academic Performance</h3>
                <p>Research shows that attendance directly correlates with academic success:</p>
                
                <div class="at-stats-container">
                    <div class="at-stat-card">
                        <div class="at-stat-number">23%</div>
                        <div class="at-stat-label">Higher grades for students with >90% attendance</div>
                    </div>
                    
                    <div class="at-stat-card">
                        <div class="at-stat-number">2.5x</div>
                        <div class="at-stat-label">More likely to graduate on time</div>
                    </div>
                    
                    <div class="at-stat-card">
                        <div class="at-stat-number">87%</div>
                        <div class="at-stat-label">Of top performers maintain >85% attendance</div>
                    </div>
                </div>

                <h3>Common Attendance Mistakes to Avoid</h3>
                <ol>
                    <li><strong>Calculating attendance wrong</strong> - Always use our <strong>attendance percentage calculator</strong> for accuracy</li>
                    <li><strong>Forgetting about practical/lab attendance</strong> - These often have separate requirements</li>
                    <li><strong>Missing classes early in semester</strong> - Save your leaves for when you really need them</li>
                    <li><strong>Not checking updated attendance</strong> - Teachers may mark you absent by mistake</li>
                    <li><strong>Ignoring medical certificate rules</strong> - Know your institution's policy on medical leaves</li>
                </ol>

                <h3>Required Attendance Calculator Examples</h3>
                <p>Let's understand how to use the <strong>required attendance calculator</strong> feature with real examples:</p>
                
                <div class="at-info-box">
                    <h4>Example 1: Reaching 75% from 68%</h4>
                    <p>Current: 34 classes attended out of 50 (68%)<br>
                    Target: 75% attendance<br>
                    <strong>Result:</strong> You need to attend the next 8 consecutive classes to reach 75%.</p>
                </div>

                <div class="at-info-box">
                    <h4>Example 2: Safe to Skip?</h4>
                    <p>Current: 45 classes attended out of 50 (90%)<br>
                    Target: 75% attendance<br>
                    <strong>Result:</strong> You can skip up to 10 more classes and still maintain 75%.</p>
                </div>

                <h3>Frequently Asked Questions</h3>
                
                <div class="at-faq-container">
                    <div class="at-faq-item">
                        <h4>Q: How is attendance percentage calculated?</h4>
                        <p>A: Attendance % = (Classes Attended ÷ Total Classes) × 100. Our <strong>class attendance calculator</strong> does this instantly for you.</p>
                    </div>
                    
                    <div class="at-faq-item">
                        <h4>Q: What happens if my attendance falls below the minimum requirement?</h4>
                        <p>A: You may be detained from exams, lose internal marks, or need special permission to appear for exams. Check your institution's specific policy.</p>
                    </div>
                    
                    <div class="at-faq-item">
                        <h4>Q: Can medical certificates compensate for low attendance?</h4>
                        <p>A: It depends on your institution. Most allow 5-10% medical leave, but you should verify with your college administration.</p>
                    </div>
                    
                    <div class="at-faq-item">
                        <h4>Q: How many classes can I miss if I have 75% attendance requirement?</h4>
                        <p>A: Use our calculator! It depends on total classes. For example, in 100 classes, you can miss 25 and maintain 75%.</p>
                    </div>

                    <div class="at-faq-item">
                        <h4>Q: Is attendance calculated subject-wise or overall?</h4>
                        <p>A: This varies by institution. Some calculate overall attendance, while others require minimum attendance in each subject separately.</p>
                    </div>

                    <div class="at-faq-item">
                        <h4>Q: Do online classes count towards attendance?</h4>
                        <p>A: Yes, in most institutions, online classes are counted the same as physical classes for attendance purposes.</p>
                    </div>
                </div>

                <h3>Pro Tips for Maintaining Good Attendance</h3>
                <div class="at-info-box">
                    <h4>🎯 Expert Recommendations:</h4>
                    <ul>
                        <li>Maintain a buffer of 5-10% above minimum requirement</li>
                        <li>Track attendance weekly, not monthly</li>
                        <li>Prioritize classes with strict attendance policies</li>
                        <li>Use our <strong>college attendance calculator</strong> before planning any leaves</li>
                        <li>Keep documentation of all medical emergencies</li>
                        <li>Coordinate with classmates for notes when absent</li>
                    </ul>
                </div>

                <h3>Final Words</h3>
                <p>Managing attendance is crucial for academic success. Our <strong>attendance percentage calculator</strong> takes the guesswork out of tracking your attendance, helping you make informed decisions about when to attend and when you can afford to miss classes.</p>
                
                <p>Whether you're looking for an <strong>attendance required to reach 75%</strong> calculator or simply want to check your current status, our tool provides instant, accurate results. Remember, good attendance isn't just about meeting requirements—it's about maximizing your learning opportunities and academic success.</p>
                
                <p>Start using our free <strong>online attendance calculator</strong> today and take control of your academic journey. Stay informed, plan smart, and never worry about attendance shortage again!</p>
            </div>
        </div>
    </div>

    <!-- History Modal -->
    <div id="historyModal" class="at-modal">
        <div class="at-modal-content">
            <div class="at-modal-header">
                <h3>📊 Attendance History</h3>
                <span class="at-close">&times;</span>
            </div>
            <div id="history-list">
                <p style="text-align: center; color: var(--at-text-muted);">No history available yet. Start calculating!</p>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const elements = {
            totalClassesInput: document.getElementById('total-classes'),
            classesAttendedInput: document.getElementById('classes-attended'),
            goalSlider: document.getElementById('goal-percentage'),
            goalValueSpan: document.getElementById('goal-value'),
            calculateBtn: document.getElementById('calculate-btn'),
            resultContainer: document.getElementById('result-container'),
            currentPercentageDisplay: document.getElementById('current-percentage-display'),
            progressCircle: document.getElementById('progress-circle'),
            summaryResult: document.getElementById('summary-result'),
            summaryAlert: document.getElementById('summary-alert'),
            saveBtn: document.getElementById('save-btn'),
            shareBtn: document.getElementById('share-btn'),
            historyBtn: document.getElementById('history-btn'),
            resetBtn: document.getElementById('reset-btn'),
            historyModal: document.getElementById('historyModal'),
            historyList: document.getElementById('history-list'),
            totalClassesError: document.getElementById('total-classes-error'),
            classesAttendedError: document.getElementById('classes-attended-error')
        };

        const radius = 60;
        const circumference = 2 * Math.PI * radius;
        elements.progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        elements.progressCircle.style.strokeDashoffset = circumference;

        // Load history from localStorage
        let attendanceHistory = JSON.parse(localStorage.getItem('attendanceHistory')) || [];

        function validateInputs(total, attended) {
            const errors = [];
            let isValid = true;
            
            // Reset error states
            elements.totalClassesError.style.display = 'none';
            elements.classesAttendedError.style.display = 'none';
            elements.totalClassesInput.style.borderColor = '';
            elements.classesAttendedInput.style.borderColor = '';
            
            if (total === '' || total < 0 || isNaN(total)) {
                elements.totalClassesError.textContent = 'Please enter a valid number';
                elements.totalClassesError.style.display = 'block';
                elements.totalClassesInput.style.borderColor = '#dc2626';
                isValid = false;
            }
            
            if (attended === '' || attended < 0 || isNaN(attended)) {
                elements.classesAttendedError.textContent = 'Please enter a valid number';
                elements.classesAttendedError.style.display = 'block';
                elements.classesAttendedInput.style.borderColor = '#dc2626';
                isValid = false;
            }
            
            if (total > 0 && attended > total) {
                elements.classesAttendedError.textContent = 'Cannot exceed total classes';
                elements.classesAttendedError.style.display = 'block';
                elements.classesAttendedInput.style.borderColor = '#dc2626';
                isValid = false;
            }
            
            return isValid;
        }

        function updateProgress(percentage) {
            const offset = circumference - (percentage / 100) * circumference;
            elements.progressCircle.style.strokeDashoffset = offset;
            elements.currentPercentageDisplay.innerHTML = `${Math.round(percentage)}<small>%</small>`;

            let color;
            if (percentage >= elements.goalSlider.value) {
                color = '#34d399';
            } else if (percentage >= elements.goalSlider.value - 5) {
                color = '#fcd34d';
            } else {
                color = '#ef4444';
            }
            elements.progressCircle.style.stroke = color;
            
            const isDarkMode = document.body.classList.contains('dark-mode');
            if (isDarkMode) {
                if (percentage >= elements.goalSlider.value) {
                    color = '#10b981';
                } else if (percentage >= elements.goalSlider.value - 5) {
                    color = '#f59e0b';
                } else {
                    color = '#ef4444';
                }
                elements.progressCircle.style.stroke = color;
            }
        }

        function calculateAttendance() {
            const totalClasses = parseInt(elements.totalClassesInput.value) || 0;
            const classesAttended = parseInt(elements.classesAttendedInput.value) || 0;
            const requiredPercentage = parseInt(elements.goalSlider.value) || 0;

            if (!validateInputs(totalClasses, classesAttended) || totalClasses <= 0) {
                elements.resultContainer.style.display = 'none';
                return;
            }

            const currentPercentage = (classesAttended / totalClasses) * 100;
            updateProgress(currentPercentage);

            let summaryHtml = '';
            let alertHtml = '';
            let alertClass = '';

            if (currentPercentage >= requiredPercentage) {
                // Calculate how many classes can be missed
                let classesToMiss = 0;
                let tempAttended = classesAttended;
                let tempTotal = totalClasses;
                
                while (tempTotal > 0 && (tempAttended / (tempTotal + 1)) * 100 >= requiredPercentage) {
                    classesToMiss++;
                    tempTotal++;
                }
                
                if (classesToMiss > 0) {
                    summaryHtml = `
                        <h3>You're doing great! 🎉</h3>
                        <p>You can miss up to <strong><span class="miss-classes">${classesToMiss}</span> classes</strong> and still maintain ${requiredPercentage}% attendance.</p>
                    `;
                    alertHtml = `<i class="fas fa-check-circle"></i> Excellent! You've exceeded your attendance goal.`;
                    alertClass = 'success';
                } else {
                    summaryHtml = `
                        <h3>On the Edge! ⚠️</h3>
                        <p>Your attendance is exactly at ${requiredPercentage}%. <strong>Don't miss any more classes</strong> to stay safe.</p>
                    `;
                    alertHtml = `<i class="fas fa-exclamation-triangle"></i> Warning: You're at the minimum required attendance.`;
                    alertClass = 'warning';
                }
            } else {
                let classesNeeded = 0;
                let tempAttended = classesAttended;
                let tempTotal = totalClasses;

                while ((tempAttended / tempTotal) * 100 < requiredPercentage) {
                    classesNeeded++;
                    tempAttended++;
                    tempTotal++;
                }

                summaryHtml = `
                    <h3>Time to catch up! 📚</h3>
                    <p>To reach ${requiredPercentage}%, you need to attend the next <strong><span class="need-classes">${classesNeeded}</span> classes</strong> consecutively.</p>
                `;

                if (classesNeeded > 20) {
                    alertHtml = `<i class="fas fa-exclamation-circle"></i> Critical: Your attendance is very low. Immediate action required!`;
                    alertClass = 'danger';
                } else if (classesNeeded > 10) {
                    alertHtml = `<i class="fas fa-exclamation-triangle"></i> Warning: You need to attend many classes to reach your goal.`;
                    alertClass = 'warning';
                } else {
                    alertHtml = `<i class="fas fa-info-circle"></i> You're close! Just a few more classes to reach your target.`;
                    alertClass = 'info';
                }
            }

            elements.summaryResult.innerHTML = summaryHtml;
            elements.summaryAlert.innerHTML = alertHtml;
            elements.summaryAlert.className = `at-alert ${alertClass}`;
            elements.summaryAlert.style.display = 'flex';
            elements.resultContainer.style.display = 'flex';

            // Store current calculation data
            window.currentCalculation = {
                totalClasses,
                classesAttended,
                currentPercentage: currentPercentage.toFixed(2),
                requiredPercentage,
                date: new Date().toLocaleString()
            };
        }

        function saveToHistory() {
            if (window.currentCalculation) {
                attendanceHistory.unshift(window.currentCalculation);
                // Keep only last 20 entries
                if (attendanceHistory.length > 20) {
                    attendanceHistory = attendanceHistory.slice(0, 20);
                }
                localStorage.setItem('attendanceHistory', JSON.stringify(attendanceHistory));
                showNotification('Saved to history!', 'success');
            }
        }

        function shareResults() {
            if (window.currentCalculation) {
                const shareText = `My Attendance Report:\n` +
                    `Current: ${window.currentCalculation.currentPercentage}%\n` +
                    `Classes: ${window.currentCalculation.classesAttended}/${window.currentCalculation.totalClasses}\n` +
                    `Target: ${window.currentCalculation.requiredPercentage}%\n\n` +
                    `Check your attendance at ${window.location.href}`;

                if (navigator.share) {
                    navigator.share({
                        title: 'My Attendance Report',
                        text: shareText,
                        url: window.location.href
                    }).catch(err => {
                        // Fallback to clipboard
                        copyToClipboard(shareText);
                    });
                } else {
                    copyToClipboard(shareText);
                }
            }
        }

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Failed to copy', 'danger');
            });
        }

        function showHistory() {
            const modal = elements.historyModal;
            const historyList = elements.historyList;
            
            if (attendanceHistory.length === 0) {
                historyList.innerHTML = '<p style="text-align: center; color: var(--at-text-muted);">No history available yet. Start calculating!</p>';
            } else {
                historyList.innerHTML = attendanceHistory.map((item, index) => `
                    <div class="at-history-item">
                        <div class="at-history-item-header">
                            <span>Entry ${index + 1}</span>
                            <span>${item.date}</span>
                        </div>
                        <div class="at-history-item-body">
                            <div class="at-history-stat">
                                <div class="at-history-stat-value">${item.currentPercentage}%</div>
                                <div class="at-history-stat-label">Attendance</div>
                            </div>
                            <div class="at-history-stat">
                                <div class="at-history-stat-value">${item.classesAttended}</div>
                                <div class="at-history-stat-label">Attended</div>
                            </div>
                            <div class="at-history-stat">
                                <div class="at-history-stat-value">${item.totalClasses}</div>
                                <div class="at-history-stat-label">Total</div>
                            </div>
                            <div class="at-history-stat">
                                <div class="at-history-stat-value">${item.requiredPercentage}%</div>
                                <div class="at-history-stat-label">Target</div>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            
            modal.style.display = 'block';
        }

        function resetCalculator() {
            elements.totalClassesInput.value = '';
            elements.classesAttendedInput.value = '';
            elements.goalSlider.value = 75;
            elements.goalValueSpan.textContent = '75%';
            elements.resultContainer.style.display = 'none';
            elements.totalClassesError.style.display = 'none';
            elements.classesAttendedError.style.display = 'none';
            elements.totalClassesInput.style.borderColor = '';
            elements.classesAttendedInput.style.borderColor = '';
            window.currentCalculation = null;
        }

        function showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = `at-alert ${type}`;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1001;
                min-width: 250px;
                animation: slideIn 0.3s ease;
            `;
            
            const icon = type === 'success' ? 'check-circle' : 
                        type === 'danger' ? 'exclamation-circle' : 
                        'info-circle';
            
            notification.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        // Event Listeners
        elements.goalSlider.addEventListener('input', (e) => {
            elements.goalValueSpan.textContent = `${e.target.value}%`;
            if (window.currentCalculation) {
                calculateAttendance();
            }
        });
        
        elements.totalClassesInput.addEventListener('input', () => {
            if (elements.classesAttendedInput.value) {
                calculateAttendance();
            }
        });
        
        elements.classesAttendedInput.addEventListener('input', () => {
            if (elements.totalClassesInput.value) {
                calculateAttendance();
            }
        });
        
        elements.calculateBtn.addEventListener('click', calculateAttendance);
        elements.saveBtn.addEventListener('click', saveToHistory);
        elements.shareBtn.addEventListener('click', shareResults);
        elements.historyBtn.addEventListener('click', showHistory);
        elements.resetBtn.addEventListener('click', resetCalculator);

        // Modal close handlers
        document.querySelector('.at-close').addEventListener('click', () => {
            elements.historyModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === elements.historyModal) {
                elements.historyModal.style.display = 'none';
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 's':
                        e.preventDefault();
                        if (window.currentCalculation) saveToHistory();
                        break;
                    case 'r':
                        e.preventDefault();
                        resetCalculator();
                        break;
                }
            }
        });

        // Initial calculation if default values exist
        if (elements.totalClassesInput.value && elements.classesAttendedInput.value) {
            calculateAttendance();
        }
    });
</script>
