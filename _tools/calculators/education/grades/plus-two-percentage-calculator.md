---
title: "Plus Two (12th) Percentage Calculator - State Board"
description: "Calculate your 12th percentage instantly with our free calculator. stream-wise calculation for Science, Commerce, and Arts all Indian state boards."
localtitle: 12th Percentage Calcualtor
layout: tool
categories: [educationCalc, examsCalc, calculators]
permalink: /calculators/education/plus-two-percentage-calculator-state-board
faq:
  - q: "How do I calculate percentage from total marks?"
    a: "Simply enter your total marks and obtained marks in the Total Marks tab. The calculator will instantly show your percentage and grade/division based on standard grading criteria."
  - q: "What subjects are included for each stream?"
    a: "Science stream includes Physics, Chemistry, Maths/Biology. Commerce includes Accountancy, Business Studies, Economics. Arts includes core subjects like History, Political Science, Geography, etc."
  - q: "Can I calculate percentage without practical marks?"
    a: "Yes! In stream-wise calculation, you can enter theory and practical marks separately. If you don't have practicals, just leave those fields empty or enter 0."
  - q: "Why does my percentage differ from official results?"
    a: "Some boards use best of 4/5 subjects, exclude certain subjects, or apply specific weightage. This calculator provides straightforward percentage calculation."
  - q: "What is the passing percentage for 12th?"
    a: "Most boards require 33% overall and in each subject (theory + practical). However, this varies by board. Check your board's official guidelines."
  - q: "How are practical marks calculated?"
    a: "Enter your practical marks separately for each subject. The calculator automatically adds theory + practical for total subject marks."
---

<style>
  :root {
    --tp12-primary: #7C3AED;
    --tp12-primary-hover: #6D28D9;
    --tp12-secondary: #10B981;
    --tp12-secondary-hover: #059669;
    --tp12-danger: #EF4444;
    --tp12-bg: #FFFFFF;
    --tp12-bg-secondary: #F9FAFB;
    --tp12-text: #111827;
    --tp12-text-secondary: #6B7280;
    --tp12-border: #E5E7EB;
    --tp12-shadow: rgba(0, 0, 0, 0.1);
    --tp12-success-bg: #D1FAE5;
    --tp12-success-text: #065F46;
    --tp12-science: #3B82F6;
    --tp12-commerce: #F59E0B;
    --tp12-arts: #EC4899;
  }
  
  html[data-theme="dark"] {
    --tp12-primary: #8B5CF6;
    --tp12-primary-hover: #7C3AED;
    --tp12-secondary: #34D399;
    --tp12-secondary-hover: #10B981;
    --tp12-bg: #1F2937;
    --tp12-bg-secondary: #111827;
    --tp12-text: #F9FAFB;
    --tp12-text-secondary: #D1D5DB;
    --tp12-border: #374151;
    --tp12-shadow: rgba(0, 0, 0, 0.3);
    --tp12-success-bg: #064E3B;
    --tp12-success-text: #A7F3D0;
  }
  
  .tp12-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: var(--tp12-bg);
    color: var(--tp12-text);
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  /* Desktop Layout */
  .tp12-main-grid {
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .tp12-header {
    text-align: center;
    margin-bottom: 2rem;
    grid-column: 1 / -1;
  }
  
  .tp12-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--tp12-primary), var(--tp12-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .tp12-header p {
    color: var(--tp12-text-secondary);
    font-size: 1.25rem;
  }
  
  /* Tabs */
  .tp12-tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    background: var(--tp12-bg-secondary);
    padding: 0.5rem;
    border-radius: 12px;
  }
  
  .tp12-tab {
    flex: 1;
    padding: 0.75rem 1.5rem;
    border: none;
    background: transparent;
    color: var(--tp12-text-secondary);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .tp12-tab.active {
    background: var(--tp12-bg);
    color: var(--tp12-primary);
    box-shadow: 0 2px 4px var(--tp12-shadow);
  }
  
  /* Stream Selector */
  .tp12-stream-selector {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .tp12-stream-btn {
    padding: 1rem;
    border: 2px solid var(--tp12-border);
    background: var(--tp12-bg);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    font-weight: 600;
  }
  
  .tp12-stream-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--tp12-shadow);
  }
  
  .tp12-stream-btn.active.science {
    border-color: var(--tp12-science);
    background: rgba(59, 130, 246, 0.1);
    color: var(--tp12-science);
  }
  
  .tp12-stream-btn.active.commerce {
    border-color: var(--tp12-commerce);
    background: rgba(245, 158, 11, 0.1);
    color: var(--tp12-commerce);
  }
  
  .tp12-stream-btn.active.arts {
    border-color: var(--tp12-arts);
    background: rgba(236, 72, 153, 0.1);
    color: var(--tp12-arts);
  }
  
  /* Calculator Card */
  .tp12-calculator-card {
    background: var(--tp12-bg-secondary);
    border: 1px solid var(--tp12-border);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px var(--tp12-shadow);
  }
  
  .tp12-tab-content {
    display: none;
  }
  
  .tp12-tab-content.active {
    display: block;
  }
  
  /* Results Section */
  .tp12-results-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .tp12-live-results {
    background: var(--tp12-bg-secondary);
    border: 1px solid var(--tp12-border);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 6px var(--tp12-shadow);
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .tp12-live-results h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--tp12-text);
  }
  
  .tp12-percentage-display {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--tp12-primary);
    margin: 0.5rem 0;
  }
  
  .tp12-grade-display {
    font-size: 1.5rem;
    color: var(--tp12-success-text);
    font-weight: 600;
  }
  
  .tp12-no-results {
    color: var(--tp12-text-secondary);
    font-size: 1.1rem;
  }
  
  /* Related Tools */
  .tp12-related-tools {
    background: var(--tp12-bg-secondary);
    border: 1px solid var(--tp12-border);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px var(--tp12-shadow);
  }
  
  .tp12-related-tools h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--tp12-text);
  }
  
  .tp12-tool-link {
    display: block;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    background: var(--tp12-bg);
    border: 1px solid var(--tp12-border);
    border-radius: 8px;
    text-decoration: none;
    color: var(--tp12-text);
    transition: all 0.3s ease;
  }
  
  .tp12-tool-link:hover {
    background: var(--tp12-primary);
    color: white;
    transform: translateX(5px);
  }
  
  /* Input Styles */
  .tp12-input-group {
    margin-bottom: 1.5rem;
  }
  
  .tp12-input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    color: var(--tp12-text);
  }
  
  .tp12-input {
    width: 100%;
    padding: 0.875rem 1.25rem;
    border: 2px solid var(--tp12-border);
    border-radius: 10px;
    font-size: 1.1rem;
    background: var(--tp12-bg);
    color: var(--tp12-text);
    transition: all 0.3s ease;
  }
  
  .tp12-input:focus {
    outline: none;
    border-color: var(--tp12-primary);
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
  
  /* Subject Input Grid */
  .tp12-subject-container {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: var(--tp12-bg);
    border-radius: 10px;
    border: 1px solid var(--tp12-border);
  }
  
  .tp12-subject-header {
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: var(--tp12-text);
  }
  
  .tp12-marks-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
  
  .tp12-marks-input {
    display: flex;
    flex-direction: column;
  }
  
  .tp12-marks-input label {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
    color: var(--tp12-text-secondary);
  }
  
  .tp12-marks-input input {
    padding: 0.625rem;
    border: 2px solid var(--tp12-border);
    border-radius: 6px;
    font-size: 0.95rem;
    background: var(--tp12-bg);
    color: var(--tp12-text);
  }
  
  .tp12-marks-input input:focus {
    outline: none;
    border-color: var(--tp12-primary);
  }
  
  /* Button Styles */
  .tp12-btn {
    width: 100%;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .tp12-btn-primary {
    background: var(--tp12-primary);
    color: white;
  }
  
  .tp12-btn-primary:hover {
    background: var(--tp12-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
  }
  
  .tp12-btn-secondary {
    background: var(--tp12-secondary);
    color: white;
    margin-top: 1rem;
  }
  
  .tp12-btn-secondary:hover {
    background: var(--tp12-secondary-hover);
  }
  
  /* Content Section */
  .tp12-content-section {
    background: var(--tp12-bg-secondary);
    border: 1px solid var(--tp12-border);
    border-radius: 16px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px var(--tp12-shadow);
  }
  
  .tp12-content-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--tp12-primary);
  }
  
  .tp12-content-section h3 {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--tp12-text);
  }
  
  .tp12-content-section p {
    line-height: 1.8;
    margin-bottom: 1rem;
    color: var(--tp12-text-secondary);
  }
  
  .tp12-content-section ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  
  .tp12-content-section li {
    margin-bottom: 0.5rem;
    color: var(--tp12-text-secondary);
  }
  
  /* FAQ Section */
  .tp12-faq-section {
    background: var(--tp12-bg-secondary);
    border: 1px solid var(--tp12-border);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 4px 6px var(--tp12-shadow);
  }
  
  .tp12-faq-section h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--tp12-primary);
  }
  
  .tp12-faq-item {
    border-bottom: 1px solid var(--tp12-border);
    padding: 1.25rem 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .tp12-faq-item:last-child {
    border-bottom: none;
  }
  
  .tp12-faq-question {
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--tp12-text);
  }
  
  .tp12-faq-question::after {
    content: '+';
    font-size: 1.5rem;
    color: var(--tp12-primary);
    transition: transform 0.3s ease;
  }
  
  .tp12-faq-item.active .tp12-faq-question::after {
    transform: rotate(45deg);
  }
  
  .tp12-faq-answer {
    display: none;
    padding-top: 1rem;
    color: var(--tp12-text-secondary);
    line-height: 1.8;
  }
  
  .tp12-faq-item.active .tp12-faq-answer {
    display: block;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Mobile Styles */
  @media (max-width: 768px) {
    .tp12-container {
      padding: 1rem;
    }
    
    .tp12-main-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .tp12-header h1 {
      font-size: 2rem;
    }
    
    .tp12-header p {
      font-size: 1.1rem;
    }
    
    .tp12-calculator-card {
      padding: 1.5rem;
      order: 1;
    }
    
    .tp12-results-section {
      order: 2;
    }
    
    .tp12-live-results {
      min-height: 150px;
      padding: 1.5rem;
    }
    
    .tp12-percentage-display {
      font-size: 3rem;
    }
    
    .tp12-grade-display {
      font-size: 1.25rem;
    }
    
    .tp12-related-tools {
      order: 3;
    }
    
    .tp12-content-section,
    .tp12-faq-section {
      padding: 1.5rem;
    }
    
    .tp12-content-section h2,
    .tp12-faq-section h2 {
      font-size: 1.75rem;
    }
    
    .tp12-stream-selector {
      grid-template-columns: 1fr;
    }
    
    .tp12-marks-grid {
      grid-template-columns: 1fr;
    }
  }
  
  /* Icon */
  .tp12-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
</style>

<div class="tp12-container">
  <!-- Header -->
  <div class="tp12-header">
    <h1>Plus Two (12th) Percentage Calculator</h1>
    <p>Calculate your HSC/12th board percentage with stream-wise support!</p>
  </div>

  <!-- Main Grid Layout -->
  <div class="tp12-main-grid">
    <!-- Calculator Section -->
    <div class="tp12-calculator-card">
      <!-- Tabs -->
      <div class="tp12-tabs">
        <button class="tp12-tab active" data-tab="total">Total Marks</button>
        <button class="tp12-tab" data-tab="stream">Stream-wise</button>
      </div>

      <!-- Total Marks Tab -->
      <div class="tp12-tab-content active" id="totalTab">
        <div class="tp12-input-group">
          <label for="total">Total Marks</label>
          <input type="number" id="total" class="tp12-input" placeholder="Enter total marks (e.g., 500)" min="1" max="1000">
        </div>
        
        <div class="tp12-input-group">
          <label for="obtained">Marks Obtained</label>
          <input type="number" id="obtained" class="tp12-input" placeholder="Enter your marks (e.g., 432)" min="0" max="1000">
        </div>
        
        <button id="calcBtn" class="tp12-btn tp12-btn-primary">
          <svg class="tp12-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100-2H6V7h8v6h-2a1 1 0 100 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a1 1 0 100-2h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clip-rule="evenodd"></path>
          </svg>
          Calculate Percentage
        </button>
      </div>

      <!-- Stream-wise Tab -->
      <div class="tp12-tab-content" id="streamTab">
        <!-- Stream Selector -->
        <div class="tp12-stream-selector">
          <button class="tp12-stream-btn science" data-stream="science">Science</button>
          <button class="tp12-stream-btn commerce" data-stream="commerce">Commerce</button>
          <button class="tp12-stream-btn arts" data-stream="arts">Arts</button>
        </div>

        <!-- Science Stream Subjects -->
        <div class="tp12-stream-content" id="scienceContent" style="display:none;">
          <div class="tp12-subject-container">
            <div class="tp12-subject-header">English</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory (80)</label>
                <input type="number" id="eng-theory-sci" min="0" max="80">
              </div>
              <div class="tp12-marks-input">
                <label>Practical/Internal (20)</label>
                <input type="number" id="eng-practical-sci" min="0" max="20">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">Physics</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory (70)</label>
                <input type="number" id="phy-theory" min="0" max="70">
              </div>
              <div class="tp12-marks-input">
                <label>Practical (30)</label>
                <input type="number" id="phy-practical" min="0" max="30">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">Chemistry</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory (70)</label>
                <input type="number" id="chem-theory" min="0" max="70">
              </div>
              <div class="tp12-marks-input">
                <label>Practical (30)</label>
                <input type="number" id="chem-practical" min="0" max="30">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">Mathematics/Biology</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory (70/80)</label>
                <input type="number" id="math-bio-theory" min="0" max="80">
              </div>
              <div class="tp12-marks-input">
                <label>Practical (30/20)</label>
                <input type="number" id="math-bio-practical" min="0" max="30">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">5th Subject (Optional)</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory</label>
                <input type="number" id="fifth-theory-sci" min="0" max="100">
              </div>
              <div class="tp12-marks-input">
                <label>Practical</label>
                <input type="number" id="fifth-practical-sci" min="0" max="100">
              </div>
            </div>
          </div>
        </div>

        <!-- Commerce Stream Subjects -->
        <div class="tp12-stream-content" id="commerceContent" style="display:none;">
          <div class="tp12-subject-container">
            <div class="tp12-subject-header">English</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory (80)</label>
                <input type="number" id="eng-theory-com" min="0" max="80">
              </div>
              <div class="tp12-marks-input">
                <label>Internal (20)</label>
                <input type="number" id="eng-practical-com" min="0" max="20">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">Accountancy</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory (80)</label>
                <input type="number" id="acc-theory" min="0" max="80">
              </div>
              <div class="tp12-marks-input">
                <label>Practical (20)</label>
                <input type="number" id="acc-practical" min="0" max="20">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">Business Studies</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory (80)</label>
                <input type="number" id="bst-theory" min="0" max="80">
              </div>
              <div class="tp12-marks-input">
                <label>Project (20)</label>
                <input type="number" id="bst-practical" min="0" max="20">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">Economics</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory (80)</label>
                <input type="number" id="eco-theory" min="0" max="80">
              </div>
              <div class="tp12-marks-input">
                <label>Project (20)</label>
                <input type="number" id="eco-practical" min="0" max="20">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">5th Subject (Maths/CS/Other)</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory</label>
                <input type="number" id="fifth-theory-com" min="0" max="100">
              </div>
              <div class="tp12-marks-input">
                <label>Practical</label>
                <input type="number" id="fifth-practical-com" min="0" max="100">
              </div>
            </div>
          </div>
        </div>

        <!-- Arts Stream Subjects -->
        <div class="tp12-stream-content" id="artsContent" style="display:none;">
          <div class="tp12-subject-container">
            <div class="tp12-subject-header">English</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory (80)</label>
                <input type="number" id="eng-theory-arts" min="0" max="80">
              </div>
              <div class="tp12-marks-input">
                <label>Internal (20)</label>
                <input type="number" id="eng-practical-arts" min="0" max="20">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">Subject 2 (History/Pol Science)</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory</label>
                <input type="number" id="sub2-theory-arts" min="0" max="100">
              </div>
              <div class="tp12-marks-input">
                <label>Project/Internal</label>
                <input type="number" id="sub2-practical-arts" min="0" max="100">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">Subject 3 (Geography/Economics)</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory</label>
                <input type="number" id="sub3-theory-arts" min="0" max="100">
              </div>
              <div class="tp12-marks-input">
                <label>Practical/Project</label>
                <input type="number" id="sub3-practical-arts" min="0" max="100">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">Subject 4 (Psychology/Sociology)</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory</label>
                <input type="number" id="sub4-theory-arts" min="0" max="100">
              </div>
              <div class="tp12-marks-input">
                <label>Practical/Project</label>
                <input type="number" id="sub4-practical-arts" min="0" max="100">
              </div>
            </div>
          </div>

          <div class="tp12-subject-container">
            <div class="tp12-subject-header">5th Subject (Optional)</div>
            <div class="tp12-marks-grid">
              <div class="tp12-marks-input">
                <label>Theory</label>
                <input type="number" id="fifth-theory-arts" min="0" max="100">
              </div>
              <div class="tp12-marks-input">
                <label>Practical</label>
                <input type="number" id="fifth-practical-arts" min="0" max="100">
              </div>
            </div>
          </div>
        </div>
        
        <button id="calcStreamBtn" class="tp12-btn tp12-btn-primary" style="margin-top: 1.5rem; display:none;">
          <svg class="tp12-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100-2H6V7h8v6h-2a1 1 0 100 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a1 1 0 100-2h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clip-rule="evenodd"></path>
          </svg>
          Calculate Percentage
        </button>
      </div>
      
      <button id="resetBtn" class="tp12-btn tp12-btn-secondary">
        <svg class="tp12-icon" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path>
        </svg>
        Reset Calculator
      </button>
    </div>

    <!-- Results Section -->
    <div class="tp12-results-section">
      <!-- Live Results -->
      <div class="tp12-live-results" id="liveResults">
        <h3>Live Results</h3>
        <div id="resultsContent" class="tp12-no-results">
          Enter your marks to see results
        </div>
      </div>

      <!-- Related Tools -->
      {% assign related_tools = site.tools | where_exp:"item", "item.categories contains 'examsCalc'" %}

      {% if related_tools.size > 1 %}
        <div class="tp12-related-tools">
          <h3>Related Tools</h3>
          {% for tool in related_tools limit:4 %}
            {% unless tool.url == page.url %}
              <a href="{{ tool.url | relative_url }}" class="tp12-tool-link">{{ tool.localtitle }}</a>
            {% endunless %}
          {% endfor %}
        </div>
      {% endif %}

    </div>
  </div>

  <!-- Content Section -->
  <div class="tp12-content-section">
    <h2>About 12th Board Percentage Calculator</h2>
    
    <p>Hey students! Ready to calculate your 12th board percentage? Our <strong>Plus Two (12th) Percentage Calculator</strong> is specially designed for HSC/12th standard students across all Indian state boards. Whether you're from Science, Commerce, or Arts stream, we've got you covered!</p>
    
    <p>This tool offers two calculation methods - quick calculation using total marks or detailed stream-wise calculation with theory and practical marks. No more confusion about how to add up those theory and practical scores!</p>

    <h3>🚀 Key Features</h3>
    <ul>
      <li><strong>Stream-Specific Calculation:</strong> Tailored for Science, Commerce, and Arts students</li>
      <li><strong>Theory + Practical Support:</strong> Enter marks separately for accurate calculation</li>
      <li><strong>Flexible Input:</strong> Works with different marking schemes across boards</li>
      <li><strong>Instant Results:</strong> Get percentage and grade in seconds</li>
      <li><strong>Mobile Optimized:</strong> Calculate on-the-go from any device</li>
      <li><strong>100% Private:</strong> No data storage, completely secure</li>
    </ul>

    <h3>📊 Understanding 12th Grade System</h3>
    
    <h4>Standard Grading Scale</h4>
    <ul>
      <li><strong>A1:</strong> 91-100% (Outstanding)</li>
      <li><strong>A2:</strong> 81-90% (Excellent)</li>
      <li><strong>B1:</strong> 71-80% (Very Good)</li>
      <li><strong>B2:</strong> 61-70% (Good)</li>
      <li><strong>C1:</strong> 51-60% (Above Average)</li>
      <li><strong>C2:</strong> 41-50% (Average)</li>
      <li><strong>D:</strong> 33-40% (Below Average)</li>
      <li><strong>E:</strong> Below 33% (Needs Improvement)</li>
    </ul>

    <h4>Division System</h4>
    <ul>
      <li><strong>Distinction:</strong> 75% and above</li>
      <li><strong>First Division:</strong> 60-74%</li>
      <li><strong>Second Division:</strong> 45-59%</li>
      <li><strong>Third Division/Pass:</strong> 33-44%</li>
      <li><strong>Fail:</strong> Below 33%</li>
    </ul>

        <h3>🎯 Stream-wise Subject Details</h3>
    
    <h4>Science Stream</h4>
    <ul>
      <li><strong>English:</strong> Theory (80) + Internal (20)</li>
      <li><strong>Physics:</strong> Theory (70) + Practical (30)</li>
      <li><strong>Chemistry:</strong> Theory (70) + Practical (30)</li>
      <li><strong>Mathematics:</strong> Theory (80) + Practical (20)</li>
      <li><strong>Biology:</strong> Theory (70) + Practical (30)</li>
      <li><strong>Computer Science/PE:</strong> Theory + Practical (varies)</li>
    </ul>

    <h4>Commerce Stream</h4>
    <ul>
      <li><strong>English:</strong> Theory (80) + Internal (20)</li>
      <li><strong>Accountancy:</strong> Theory (80) + Practical (20)</li>
      <li><strong>Business Studies:</strong> Theory (80) + Project (20)</li>
      <li><strong>Economics:</strong> Theory (80) + Project (20)</li>
      <li><strong>Mathematics/Informatics:</strong> Optional 5th subject</li>
    </ul>

    <h4>Arts Stream</h4>
    <ul>
      <li><strong>English:</strong> Theory (80) + Internal (20)</li>
      <li><strong>History/Political Science:</strong> Theory + Project</li>
      <li><strong>Geography/Economics:</strong> Theory + Practical/Project</li>
      <li><strong>Psychology/Sociology:</strong> Theory + Practical</li>
      <li><strong>Optional Subject:</strong> Varies by choice</li>
    </ul>

    <h3>💡 Tips for Accurate Calculation</h3>
    <ol>
      <li><strong>Check marking scheme:</strong> Different boards have different theory-practical ratios</li>
      <li><strong>Include all subjects:</strong> Don't forget internal assessments and practicals</li>
      <li><strong>Best of 4/5:</strong> Some boards/colleges consider best subjects only</li>
      <li><strong>Grace marks:</strong> Add any grace marks received before calculating</li>
      <li><strong>Recheck totals:</strong> Verify your marksheet totals match your calculation</li>
    </ol>

    <h3>🎓 What After 12th?</h3>
    <p>Your 12th percentage opens doors to:</p>
    <ul>
      <li><strong>Engineering:</strong> JEE Main/Advanced, state entrance exams</li>
      <li><strong>Medical:</strong> NEET for MBBS/BDS/AYUSH courses</li>
      <li><strong>Commerce:</strong> CA, CS, CMA, B.Com, BBA</li>
      <li><strong>Arts:</strong> BA, Mass Communication, Design, Law</li>
      <li><strong>Professional Courses:</strong> Hotel Management, Fashion, Animation</li>
    </ul>

    <h3>📈 Importance of 12th Percentage</h3>
    <ul>
      <li><strong>College Admissions:</strong> Minimum eligibility criteria</li>
      <li><strong>Scholarship Eligibility:</strong> Merit-based financial aid</li>
      <li><strong>Job Applications:</strong> Many companies have percentage criteria</li>
      <li><strong>Higher Studies:</strong> Required for postgraduate admissions</li>
      <li><strong>Competitive Exams:</strong> Some exams have percentage requirements</li>
    </ul>

    <p>Remember, while percentage is important, it's not everything. Your skills, knowledge, and passion matter equally. Many successful people didn't have perfect scores but excelled through dedication and hard work!</p>
  </div>

  <!-- FAQ Section -->
  <div class="tp12-faq-section">
    <h2>Frequently Asked Questions</h2>
    
    <div class="tp12-faq-item">
      <div class="tp12-faq-question">How do I calculate percentage from total marks?</div>
      <div class="tp12-faq-answer">Simply enter your total marks and obtained marks in the Total Marks tab. For example, if your exam was out of 500 marks and you scored 425, enter these values and click Calculate. The tool will instantly show your percentage (85%) and corresponding grade.</div>
    </div>
    
    <div class="tp12-faq-item">
      <div class="tp12-faq-question">What subjects are included for each stream?</div>
      <div class="tp12-faq-answer">Science stream includes Physics, Chemistry, Maths/Biology with practicals. Commerce includes Accountancy, Business Studies, Economics with projects. Arts includes various subjects like History, Political Science, Geography, Psychology with their respective practical/project components. English is common to all streams.</div>
    </div>
    
    <div class="tp12-faq-item">
      <div class="tp12-faq-question">Can I calculate percentage without practical marks?</div>
      <div class="tp12-faq-answer">Yes! In stream-wise calculation, you can enter theory and practical marks separately. If you don't have practicals for a subject, just leave that field empty or enter 0. The calculator will adjust accordingly.</div>
    </div>
    
    <div class="tp12-faq-item">
      <div class="tp12-faq-question">Why does my percentage differ from official results?</div>
      <div class="tp12-faq-answer">Some boards use best of 4 or 5 subjects for percentage calculation, while others include all subjects. Some exclude optional subjects or apply specific weightage. This calculator provides straightforward calculation of all entered marks. Check your board's specific rules.</div>
    </div>
    
    <div class="tp12-faq-item">
      <div class="tp12-faq-question">What is the passing percentage for 12th?</div>
      <div class="tp12-faq-answer">Most boards require 33% overall and in each subject (theory + practical combined). For theory papers, minimum is usually 33% of theory marks. Some boards may have different criteria, so check your board's official guidelines.</div>
    </div>
    
    <div class="tp12-faq-item">
      <div class="tp12-faq-question">How are practical marks calculated?</div>
      <div class="tp12-faq-answer">Enter your practical marks separately for each subject. The calculator automatically adds theory + practical for total subject marks. Make sure to check your board's marking scheme as practical marks vary (20-30 marks typically).</div>
    </div>

    <div class="tp12-faq-item">
      <div class="tp12-faq-question">Which calculation method should I use?</div>
      <div class="tp12-faq-answer">If you have your final total marks, use the Total Marks tab for quick calculation. If you want to calculate from individual subjects with theory-practical breakup, use the Stream-wise tab. Both give accurate results.</div>
    </div>
  </div>
</div>

<script>
  // Elements
  const tabs = document.querySelectorAll('.tp12-tab');
  const tabContents = document.querySelectorAll('.tp12-tab-content');
  const streamBtns = document.querySelectorAll('.tp12-stream-btn');
  const streamContents = document.querySelectorAll('.tp12-stream-content');
  const totalEl = document.getElementById('total');
  const obtEl = document.getElementById('obtained');
  const calcBtn = document.getElementById('calcBtn');
  const calcStreamBtn = document.getElementById('calcStreamBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultsContent = document.getElementById('resultsContent');
  const faqItems = document.querySelectorAll('.tp12-faq-item');

  let currentStream = '';

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.dataset.tab;
      
      // Update active states
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      tabContents.forEach(content => content.classList.remove('active'));
      document.getElementById(tabName + 'Tab').classList.add('active');
    });
  });

  // Stream selection
  streamBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const stream = btn.dataset.stream;
      currentStream = stream;
      
      // Update active states
      streamBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Show corresponding content
      streamContents.forEach(content => content.style.display = 'none');
      document.getElementById(stream + 'Content').style.display = 'block';
      
      // Show calculate button
      calcStreamBtn.style.display = 'block';
    });
  });

  // Calculate grade
  function calculateGrade(percentage) {
    const p = parseFloat(percentage);
    let grade = '';
    
    if (p >= 91) grade = 'A1 - Outstanding';
    else if (p >= 81) grade = 'A2 - Excellent';
    else if (p >= 71) grade = 'B1 - Very Good';
    else if (p >= 61) grade = 'B2 - Good';
    else if (p >= 51) grade = 'C1 - Above Average';
    else if (p >= 41) grade = 'C2 - Average';
    else if (p >= 33) grade = 'D - Below Average';
    else grade = 'E - Needs Improvement';
    
    // Add division
    let division = '';
    if (p >= 75) division = 'Distinction';
    else if (p >= 60) division = 'First Division';
    else if (p >= 45) division = 'Second Division';
    else if (p >= 33) division = 'Third Division';
    else division = 'Fail';
    
    return `${grade}<br><small>${division}</small>`;
  }

  // Update live results
  function updateLiveResults(percentage, grade) {
    resultsContent.innerHTML = `
      <div class="tp12-percentage-display">${percentage}%</div>
      <div class="tp12-grade-display">${grade}</div>
    `;
  }

  // Calculate from total marks
  function calculateFromTotal() {
    const total = parseFloat(totalEl.value);
    const obt = parseFloat(obtEl.value);
    
    if (isNaN(total) || isNaN(obt) || total <= 0 || obt < 0) {
      return null;
    }
    
    if (obt > total) {
      return null;
    }
    
    let pct = (obt / total) * 100;
    pct = Math.min(pct, 100).toFixed(2);
    
    return pct;
  }

  // Calculate from stream subjects
  function calculateFromStream() {
    let totalMarks = 0;
    let totalMax = 0;
    
    if (currentStream === 'science') {
      // English
      const engTheory = parseFloat(document.getElementById('eng-theory-sci').value) || 0;
      const engPractical = parseFloat(document.getElementById('eng-practical-sci').value) || 0;
      if (engTheory > 0 || engPractical > 0) {
        totalMarks += engTheory + engPractical;
        totalMax += 100;
      }
      
      // Physics
      const phyTheory = parseFloat(document.getElementById('phy-theory').value) || 0;
      const phyPractical = parseFloat(document.getElementById('phy-practical').value) || 0;
      if (phyTheory > 0 || phyPractical > 0) {
        totalMarks += phyTheory + phyPractical;
        totalMax += 100;
      }
      
      // Chemistry
      const chemTheory = parseFloat(document.getElementById('chem-theory').value) || 0;
      const chemPractical = parseFloat(document.getElementById('chem-practical').value) || 0;
      if (chemTheory > 0 || chemPractical > 0) {
        totalMarks += chemTheory + chemPractical;
        totalMax += 100;
      }
      
      // Math/Bio
      const mathBioTheory = parseFloat(document.getElementById('math-bio-theory').value) || 0;
      const mathBioPractical = parseFloat(document.getElementById('math-bio-practical').value) || 0;
      if (mathBioTheory > 0 || mathBioPractical > 0) {
        totalMarks += mathBioTheory + mathBioPractical;
        totalMax += 100;
      }
      
      // 5th subject
      const fifthTheory = parseFloat(document.getElementById('fifth-theory-sci').value) || 0;
      const fifthPractical = parseFloat(document.getElementById('fifth-practical-sci').value) || 0;
      if (fifthTheory > 0 || fifthPractical > 0) {
        totalMarks += fifthTheory + fifthPractical;
        totalMax += 100;
      }
      
    } else if (currentStream === 'commerce') {
      // English
      const engTheory = parseFloat(document.getElementById('eng-theory-com').value) || 0;
      const engPractical = parseFloat(document.getElementById('eng-practical-com').value) || 0;
      if (engTheory > 0 || engPractical > 0) {
        totalMarks += engTheory + engPractical;
        totalMax += 100;
      }
      
      // Accountancy
      const accTheory = parseFloat(document.getElementById('acc-theory').value) || 0;
      const accPractical = parseFloat(document.getElementById('acc-practical').value) || 0;
      if (accTheory > 0 || accPractical > 0) {
        totalMarks += accTheory + accPractical;
        totalMax += 100;
      }
      
      // Business Studies
      const bstTheory = parseFloat(document.getElementById('bst-theory').value) || 0;
      const bstPractical = parseFloat(document.getElementById('bst-practical').value) || 0;
      if (bstTheory > 0 || bstPractical > 0) {
        totalMarks += bstTheory + bstPractical;
        totalMax += 100;
      }
      
      // Economics
      const ecoTheory = parseFloat(document.getElementById('eco-theory').value) || 0;
      const ecoPractical = parseFloat(document.getElementById('eco-practical').value) || 0;
      if (ecoTheory > 0 || ecoPractical > 0) {
        totalMarks += ecoTheory + ecoPractical;
        totalMax += 100;
      }
      
      // 5th subject
      const fifthTheory = parseFloat(document.getElementById('fifth-theory-com').value) || 0;
      const fifthPractical = parseFloat(document.getElementById('fifth-practical-com').value) || 0;
      if (fifthTheory > 0 || fifthPractical > 0) {
        totalMarks += fifthTheory + fifthPractical;
        totalMax += 100;
      }
      
    } else if (currentStream === 'arts') {
      // English
      const engTheory = parseFloat(document.getElementById('eng-theory-arts').value) || 0;
      const engPractical = parseFloat(document.getElementById('eng-practical-arts').value) || 0;
      if (engTheory > 0 || engPractical > 0) {
        totalMarks += engTheory + engPractical;
        totalMax += 100;
      }
      
      // Subject 2
      const sub2Theory = parseFloat(document.getElementById('sub2-theory-arts').value) || 0;
      const sub2Practical = parseFloat(document.getElementById('sub2-practical-arts').value) || 0;
      if (sub2Theory > 0 || sub2Practical > 0) {
        totalMarks += sub2Theory + sub2Practical;
        totalMax += 100;
      }
      
      // Subject 3
      const sub3Theory = parseFloat(document.getElementById('sub3-theory-arts').value) || 0;
      const sub3Practical = parseFloat(document.getElementById('sub3-practical-arts').value) || 0;
      if (sub3Theory > 0 || sub3Practical > 0) {
        totalMarks += sub3Theory + sub3Practical;
        totalMax += 100;
      }
      
      // Subject 4
      const sub4Theory = parseFloat(document.getElementById('sub4-theory-arts').value) || 0;
      const sub4Practical = parseFloat(document.getElementById('sub4-practical-arts').value) || 0;
      if (sub4Theory > 0 || sub4Practical > 0) {
        totalMarks += sub4Theory + sub4Practical;
        totalMax += 100;
      }
      
      // 5th subject
      const fifthTheory = parseFloat(document.getElementById('fifth-theory-arts').value) || 0;
      const fifthPractical = parseFloat(document.getElementById('fifth-practical-arts').value) || 0;
      if (fifthTheory > 0 || fifthPractical > 0) {
        totalMarks += fifthTheory + fifthPractical;
        totalMax += 100;
      }
    }
    
    if (totalMax === 0) return null;
    
    let pct = (totalMarks / totalMax) * 100;
    pct = Math.min(pct, 100).toFixed(2);
    
    return pct;
  }

  // Total marks calculate button
  calcBtn.addEventListener('click', () => {
    const percentage = calculateFromTotal();
    
    if (!percentage) {
      if (parseFloat(obtEl.value) > parseFloat(totalEl.value)) {
        alert('Obtained marks cannot be greater than total marks!');
      } else {
        alert('Please enter valid marks!');
      }
      return;
    }
    
    const grade = calculateGrade(percentage);
    updateLiveResults(percentage, grade);
    
    // Smooth scroll on mobile
    if (window.innerWidth <= 768) {
      document.getElementById('liveResults').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // Stream-wise calculate button
  calcStreamBtn.addEventListener('click', () => {
    if (!currentStream) {
      alert('Please select your stream first!');
      return;
    }
    
    const percentage = calculateFromStream();
    
    if (!percentage) {
      alert('Please enter marks for at least one subject!');
      return;
    }
    
    const grade = calculateGrade(percentage);
    updateLiveResults(percentage, grade);
    
    // Smooth scroll on mobile
    if (window.innerWidth <= 768) {
      document.getElementById('liveResults').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // Reset calculator
  resetBtn.addEventListener('click', () => {
    // Reset total marks inputs
    totalEl.value = '';
    obtEl.value = '';
    
    // Reset all stream inputs
    document.querySelectorAll('.tp12-marks-input input').forEach(input => {
      input.value = '';
    });
    
    // Reset stream selection
    streamBtns.forEach(b => b.classList.remove('active'));
    streamContents.forEach(content => content.style.display = 'none');
    calcStreamBtn.style.display = 'none';
    currentStream = '';
    
    // Reset results
    resultsContent.innerHTML = '<div class="tp12-no-results">Enter your marks to see results</div>';
  });

  // Real-time calculation for desktop
  function handleRealtimeCalc() {
    if (window.innerWidth > 768) {
      const activeTab = document.querySelector('.tp12-tab.active').dataset.tab;
      
      if (activeTab === 'total') {
        const percentage = calculateFromTotal();
        if (percentage) {
          const grade = calculateGrade(percentage);
          updateLiveResults(percentage, grade);
        } else {
          resultsContent.innerHTML = '<div class="tp12-no-results">Enter your marks to see results</div>';
        }
      } else if (activeTab === 'stream' && currentStream) {
        const percentage = calculateFromStream();
        if (percentage) {
          const grade = calculateGrade(percentage);
          updateLiveResults(percentage, grade);
        } else {
          resultsContent.innerHTML = '<div class="tp12-no-results">Enter your marks to see results</div>';
        }
      }
    }
  }

  // Add real-time calculation listeners
  totalEl.addEventListener('input', handleRealtimeCalc);
  obtEl.addEventListener('input', handleRealtimeCalc);
  
  // Add listeners to all stream inputs
  document.querySelectorAll('.tp12-marks-input input').forEach(input => {
    input.addEventListener('input', handleRealtimeCalc);
  });

  // FAQ accordion
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      // Close other items
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Enter key support for total marks
  totalEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') obtEl.focus();
  });
  
  obtEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calcBtn.click();
  });
</script>
