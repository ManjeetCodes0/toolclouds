---
title: "10th Percentage Calculator - State Board"
description: "Calculate your 10th percentage instantly with our free online calculator. Supports total marks and subject-wise calculation for all Indian state boards."
layout: tool
localtitle: 10th Percentage Calculator
categories: [educationCalc, studentCalc, examsCalc, calculators]
permalink: /calculators/education/10th-percentage-calculator-state-board
faq:
  - q: "How do I calculate percentage from total marks?"
    a: "Simply enter your total marks and obtained marks in the Total Marks tab. The calculator will instantly show your percentage and grade/division based on standard grading criteria."
  - q: "What subjects are included in subject-wise calculation?"
    a: "We include all standard 10th class subjects: English, Hindi/Regional Language, Mathematics, Science, Social Science, and 6th Subject (Computer/Physical Education/etc)."
  - q: "Which calculation method should I use?"
    a: "If you have your total marks, use the Total Marks tab. If you want to calculate from individual subject marks, use the Subject-wise tab. Both will give you the same result."
  - q: "Why does my percentage differ from official results?"
    a: "Some boards use best of 5 subjects or specific weightage. This tool calculates basic percentage. For official results, always refer to your board's marksheet."
  - q: "What is the passing percentage?"
    a: "Most Indian boards require 33% as minimum passing percentage. However, this may vary by board and subject. Check your board's official guidelines."
---

<style>
  :root {
    --tp10-primary: #4F46E5;
    --tp10-primary-hover: #4338CA;
    --tp10-secondary: #10B981;
    --tp10-secondary-hover: #059669;
    --tp10-danger: #EF4444;
    --tp10-bg: #FFFFFF;
    --tp10-bg-secondary: #F9FAFB;
    --tp10-text: #111827;
    --tp10-text-secondary: #6B7280;
    --tp10-border: #E5E7EB;
    --tp10-shadow: rgba(0, 0, 0, 0.1);
    --tp10-success-bg: #D1FAE5;
    --tp10-success-text: #065F46;
  }
  
  html[data-theme="dark"] {
    --tp10-primary: #6366F1;
    --tp10-primary-hover: #4F46E5;
    --tp10-secondary: #34D399;
    --tp10-secondary-hover: #10B981;
    --tp10-bg: #1F2937;
    --tp10-bg-secondary: #111827;
    --tp10-text: #F9FAFB;
    --tp10-text-secondary: #D1D5DB;
    --tp10-border: #374151;
    --tp10-shadow: rgba(0, 0, 0, 0.3);
    --tp10-success-bg: #064E3B;
    --tp10-success-text: #A7F3D0;
  }
  
  .tp10-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: var(--tp10-bg);
    color: var(--tp10-text);
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  /* Desktop Layout */
  .tp10-main-grid {
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .tp10-header {
    text-align: center;
    margin-bottom: 2rem;
    grid-column: 1 / -1;
  }
  
  .tp10-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--tp10-primary), var(--tp10-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .tp10-header p {
    color: var(--tp10-text-secondary);
    font-size: 1.25rem;
  }
  
  /* Tabs */
  .tp10-tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    background: var(--tp10-bg-secondary);
    padding: 0.5rem;
    border-radius: 12px;
  }
  
  .tp10-tab {
    flex: 1;
    padding: 0.75rem 1.5rem;
    border: none;
    background: transparent;
    color: var(--tp10-text-secondary);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .tp10-tab.active {
    background: var(--tp10-bg);
    color: var(--tp10-primary);
    box-shadow: 0 2px 4px var(--tp10-shadow);
  }
  
  /* Calculator Card */
  .tp10-calculator-card {
    background: var(--tp10-bg-secondary);
    border: 1px solid var(--tp10-border);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px var(--tp10-shadow);
  }
  
  .tp10-tab-content {
    display: none;
  }
  
  .tp10-tab-content.active {
    display: block;
  }
  
  /* Results Section */
  .tp10-results-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .tp10-live-results {
    background: var(--tp10-bg-secondary);
    border: 1px solid var(--tp10-border);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 6px var(--tp10-shadow);
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .tp10-live-results h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--tp10-text);
  }
  
  .tp10-percentage-display {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--tp10-primary);
    margin: 0.5rem 0;
  }
  
  .tp10-grade-display {
    font-size: 1.5rem;
    color: var(--tp10-success-text);
    font-weight: 600;
  }
  
  .tp10-no-results {
    color: var(--tp10-text-secondary);
    font-size: 1.1rem;
  }
  
  /* Related Tools */
  .tp10-related-tools {
    background: var(--tp10-bg-secondary);
    border: 1px solid var(--tp10-border);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px var(--tp10-shadow);
  }
  
  .tp10-related-tools h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--tp10-text);
  }
  
  .tp10-tool-link {
    display: block;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    background: var(--tp10-bg);
    border: 1px solid var(--tp10-border);
    border-radius: 8px;
    text-decoration: none;
    color: var(--tp10-text);
    transition: all 0.3s ease;
  }
  
  .tp10-tool-link:hover {
    background: var(--tp10-primary);
    color: white;
    transform: translateX(5px);
  }
  
  /* Input Styles */
  .tp10-input-group {
    margin-bottom: 1.5rem;
  }
  
  .tp10-input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    color: var(--tp10-text);
  }
  
  .tp10-input {
    width: 100%;
    padding: 0.875rem 1.25rem;
    border: 2px solid var(--tp10-border);
    border-radius: 10px;
    font-size: 1.1rem;
    background: var(--tp10-bg);
    color: var(--tp10-text);
    transition: all 0.3s ease;
  }
  
  .tp10-input:focus {
    outline: none;
    border-color: var(--tp10-primary);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
  
  /* Subject Input Grid */
  .tp10-subject-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .tp10-subject-input {
    display: flex;
    flex-direction: column;
  }
  
  .tp10-subject-input label {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    color: var(--tp10-text-secondary);
  }
  
  .tp10-subject-input input {
    padding: 0.75rem;
    border: 2px solid var(--tp10-border);
    border-radius: 8px;
    font-size: 1rem;
    background: var(--tp10-bg);
    color: var(--tp10-text);
    transition: all 0.3s ease;
  }
  
  .tp10-subject-input input:focus {
    outline: none;
    border-color: var(--tp10-primary);
  }
  
  /* Button Styles */
  .tp10-btn {
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
  
  .tp10-btn-primary {
    background: var(--tp10-primary);
    color: white;
  }
  
  .tp10-btn-primary:hover {
    background: var(--tp10-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(79, 70, 229, 0.3);
  }
  
  .tp10-btn-secondary {
    background: var(--tp10-secondary);
    color: white;
    margin-top: 1rem;
  }
  
  .tp10-btn-secondary:hover {
    background: var(--tp10-secondary-hover);
  }
  
  /* Content Section */
  .tp10-content-section {
    background: var(--tp10-bg-secondary);
    border: 1px solid var(--tp10-border);
    border-radius: 16px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px var(--tp10-shadow);
  }
  
  .tp10-content-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--tp10-primary);
  }
  
  .tp10-content-section h3 {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--tp10-text);
  }
  
  .tp10-content-section p {
    line-height: 1.8;
    margin-bottom: 1rem;
    color: var(--tp10-text-secondary);
  }
  
  .tp10-content-section ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  
  .tp10-content-section li {
    margin-bottom: 0.5rem;
    color: var(--tp10-text-secondary);
  }
  
  /* FAQ Section */
  .tp10-faq-section {
    background: var(--tp10-bg-secondary);
    border: 1px solid var(--tp10-border);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 4px 6px var(--tp10-shadow);
  }
  
  .tp10-faq-section h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--tp10-primary);
  }
  
  .tp10-faq-item {
    border-bottom: 1px solid var(--tp10-border);
    padding: 1.25rem 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .tp10-faq-item:last-child {
    border-bottom: none;
  }
  
  .tp10-faq-question {
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--tp10-text);
  }
  
  .tp10-faq-question::after {
    content: '+';
    font-size: 1.5rem;
    color: var(--tp10-primary);
    transition: transform 0.3s ease;
  }
  
  .tp10-faq-item.active .tp10-faq-question::after {
    transform: rotate(45deg);
  }
  
  .tp10-faq-answer {
    display: none;
    padding-top: 1rem;
    color: var(--tp10-text-secondary);
    line-height: 1.8;
  }
  
  .tp10-faq-item.active .tp10-faq-answer {
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
    .tp10-container {
      padding: 1rem;
    }
    
    .tp10-main-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .tp10-header h1 {
      font-size: 2rem;
    }
    
    .tp10-header p {
      font-size: 1.1rem;
    }
    
    .tp10-calculator-card {
      padding: 1.5rem;
      order: 1;
    }
    
    .tp10-results-section {
      order: 2;
    }
    
    .tp10-live-results {
      min-height: 150px;
      padding: 1.5rem;
    }
    
    .tp10-percentage-display {
      font-size: 3rem;
    }
    
    .tp10-grade-display {
      font-size: 1.25rem;
    }
    
    .tp10-related-tools {
      order: 3;
    }
    
    .tp10-content-section,
    .tp10-faq-section {
      padding: 1.5rem;
    }
    
    .tp10-content-section h2,
    .tp10-faq-section h2 {
      font-size: 1.75rem;
    }
    
    .tp10-subject-grid {
      grid-template-columns: 1fr;
    }
  }
  
  /* Icon */
  .tp10-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
</style>

<div class="tp10-container">
  <!-- Header -->
  <div class="tp10-header">
    <h1>10th Percentage Calculator State Board</h1>
    <p>Calculate your board exam percentage & grade instantly!</p>
  </div>

  <!-- Main Grid Layout -->
  <div class="tp10-main-grid">
    <!-- Calculator Section -->
    <div class="tp10-calculator-card">
      <!-- Tabs -->
      <div class="tp10-tabs">
        <button class="tp10-tab active" data-tab="total">Total Marks</button>
        <button class="tp10-tab" data-tab="subject">Subject-wise</button>
      </div>

      <!-- Total Marks Tab -->
      <div class="tp10-tab-content active" id="totalTab">
        <div class="tp10-input-group">
          <label for="total">Total Marks</label>
          <input type="number" id="total" class="tp10-input" placeholder="Enter total marks (e.g., 500)" min="1" max="1000">
        </div>
        
        <div class="tp10-input-group">
          <label for="obtained">Marks Obtained</label>
          <input type="number" id="obtained" class="tp10-input" placeholder="Enter your marks (e.g., 432)" min="0" max="1000">
        </div>
        
        <button id="calcBtn" class="tp10-btn tp10-btn-primary">
          <svg class="tp10-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100-2H6V7h8v6h-2a1 1 0 100 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a1 1 0 100-2h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clip-rule="evenodd"></path>
          </svg>
          Calculate Percentage
        </button>
      </div>

      <!-- Subject-wise Tab -->
      <div class="tp10-tab-content" id="subjectTab">
        <div class="tp10-subject-grid">
          <div class="tp10-subject-input">
            <label for="english">English</label>
            <input type="number" id="english" placeholder="Out of 100" min="0" max="100">
          </div>
          <div class="tp10-subject-input">
            <label for="hindi">Hindi/Regional Language</label>
            <input type="number" id="hindi" placeholder="Out of 100" min="0" max="100">
          </div>
          <div class="tp10-subject-input">
            <label for="math">Mathematics</label>
            <input type="number" id="math" placeholder="Out of 100" min="0" max="100">
          </div>
          <div class="tp10-subject-input">
            <label for="science">Science</label>
            <input type="number" id="science" placeholder="Out of 100" min="0" max="100">
          </div>
          <div class="tp10-subject-input">
            <label for="social">Social Science</label>
            <input type="number" id="social" placeholder="Out of 100" min="0" max="100">
          </div>
          <div class="tp10-subject-input">
            <label for="sixth">6th Subject (Optional)</label>
            <input type="number" id="sixth" placeholder="Out of 100" min="0" max="100">
          </div>
        </div>
        
        <button id="calcSubjectBtn" class="tp10-btn tp10-btn-primary" style="margin-top: 1.5rem;">
          <svg class="tp10-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100-2H6V7h8v6h-2a1 1 0 100 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a1 1 0 100-2h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clip-rule="evenodd"></path>
          </svg>
          Calculate Percentage
        </button>
      </div>
      
      <button id="resetBtn" class="tp10-btn tp10-btn-secondary">
        <svg class="tp10-icon" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path>
        </svg>
        Reset Calculator
      </button>
    </div>

    <!-- Results Section -->
    <div class="tp10-results-section">
      <!-- Live Results -->
      <div class="tp10-live-results" id="liveResults">
        <h3>Live Results</h3>
        <div id="resultsContent" class="tp10-no-results">
          Enter your marks to see results
        </div>
      </div>

      {% assign related_tools = site.tools | where_exp:"item", "item.categories contains 'examsCalc'" %}

      {% if related_tools.size > 1 %}
        <div class="tp10-related-tools">
          <h3>Related Tools</h3>
          {% for tool in related_tools limit:4 %}
            {% unless tool.url == page.url %}
              <a href="{{ tool.url | relative_url }}" class="tp10-tool-link">{{ tool.localtitle }}</a>
            {% endunless %}
          {% endfor %}
          <a href="#" class="tp10-tool-link">After 10th Checker</a>
        </div>
      {% endif %}

     
    </div>
  </div>

  <!-- Content Section -->
  <div class="tp10-content-section">
    <h2>About 10th Board Percentage Calculator</h2>
    
    <p>Hey students! Just got your 10th board results and need to quickly find out your percentage? You've come to the right place. Our <strong>10th Percentage Calculator State Board</strong> is designed specially for Indian state board students who want instant results without the hassle of manual calculations.</p>
    
    <p>Whether you have your total marks or want to calculate from individual subject scores, this tool got you covered. Simply enter your marks and boom - you'll get your percentage plus the grade or division according to standard criteria. No more confusion, no more manual math!</p>

    <h3>🚀 Why Use Our Calculator?</h3>
    <ul>
      <li><strong>Two Calculation Methods:</strong> Use total marks or enter subject-wise scores</li>
      <li><strong>Lightning Fast:</strong> Get results in seconds, not minutes</li>
      <li><strong>Accurate Grading:</strong> Shows grade/division based on standard criteria</li>
      <li><strong>Mobile Friendly:</strong> Works perfectly on all devices</li>
      <li><strong>100% Free:</strong> No hidden charges, no registration required</li>
      <li><strong>Privacy First:</strong> We don't store any of your data</li>
    </ul>

    <h3>📊 Understanding Grading Systems</h3>
    
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
    <p>Traditional division system used by many boards:</p>
    <ul>
      <li><strong>Distinction:</strong> 75% and above</li>
      <li><strong>First Division:</strong> 60-74%</li>
      <li><strong>Second Division:</strong> 45-59%</li>
      <li><strong>Third Division/Pass:</strong> 33-44%</li>
      <li><strong>Fail:</strong> Below 33%</li>
    </ul>

    <h3>🎯 How to Calculate Percentage?</h3>
    
    <h4>Method 1: From Total Marks</h4>
    <p><strong>Percentage = (Obtained Marks ÷ Total Marks) × 100</strong></p>
    <p>Example: If you scored 425 out of 500, your percentage = (425 ÷ 500) × 100 = 85%</p>

    <h4>Method 2: From Subject Marks</h4>
    <p><strong>Percentage = (Sum of all subject marks ÷ Total subjects × 100) × 100</strong></p>
    <p>Example: If you scored 85, 90, 78, 82, 88 in 5 subjects (each out of 100), your percentage = (423 ÷ 500) × 100 = 84.6%</p>

    <h3>💡 Tips for Students</h3>
    <ol>
      <li><strong>Double-check your marks</strong> before calculating - accuracy matters!</li>
      <li><strong>For subject-wise calculation</strong>, make sure all marks are out of 100</li>
      <li><strong>6th subject is optional</strong> - leave it blank if you don't have one</li>
      <li><strong>Save or screenshot</strong> your results for future reference</li>
      <li><strong>Remember</strong> that some boards use best of 5 subjects for final percentage</li>
    </ol>

    <h3>🎓 What's Next After 10th?</h3>
    <p>Got your percentage? Great! Here's what you can do next:</p>
    <ul>
      <li><strong>Science Stream:</strong> Generally requires 75%+ (varies by school)</li>
      <li><strong>Commerce Stream:</strong> Usually 60%+ is sufficient</li>
      <li><strong>Arts/Humanities:</strong> Most flexible, usually 45%+ works</li>
      <li><strong>Diploma Courses:</strong> Various options available based on interests</li>
      <li><strong>ITI Courses:</strong> Technical courses with different eligibility</li>
    </ul>

    <h3>📚 Standard 10th Class Subjects</h3>
    <p>Most Indian boards have these core subjects:</p>
    <ul>
      <li><strong>English:</strong> First language (compulsory)</li>
      <li><strong>Hindi/Regional Language:</strong> Second/Third language</li>
      <li><strong>Mathematics:</strong> Core subject</li>
      <li><strong>Science:</strong> Physics, Chemistry, Biology combined</li>
      <li><strong>Social Science:</strong> History, Geography, Civics, Economics</li>
      <li><strong>6th Subject:</strong> Computer Science, Physical Education, Art, etc. (optional)</li>
    </ul>

    <p>Remember, your percentage is just a number - it doesn't define your potential or limit your dreams. Every student has unique talents and there are multiple paths to success! Focus on learning and growing rather than just numbers.</p>
  </div>

  <!-- FAQ Section -->
  <div class="tp10-faq-section">
    <h2>Frequently Asked Questions</h2>
    
    <div class="tp10-faq-item">
      <div class="tp10-faq-question">How do I calculate percentage from total marks?</div>
      <div class="tp10-faq-answer">Simply enter your total marks and obtained marks in the Total Marks tab. For example, if your exam was out of 500 marks and you scored 425, enter these values and click Calculate. The tool will instantly show your percentage (85%) and corresponding grade.</div>
    </div>
    
    <div class="tp10-faq-item">
      <div class="tp10-faq-question">What subjects are included in subject-wise calculation?</div>
      <div class="tp10-faq-answer">We include all standard 10th class subjects: English, Hindi/Regional Language, Mathematics, Science, Social Science, and an optional 6th Subject (like Computer Science or Physical Education). Enter marks out of 100 for each subject.</div>
    </div>
    
    <div class="tp10-faq-item">
      <div class="tp10-faq-question">Which calculation method should I use?</div>
      <div class="tp10-faq-answer">If you have your total marks from your marksheet, use the Total Marks tab - it's quicker. If you want to calculate from individual subject marks or check your percentage before results, use the Subject-wise tab. Both methods will give you the same accurate result.</div>
    </div>
    
    <div class="tp10-faq-item">
      <div class="tp10-faq-question">Why does my percentage differ from official results?</div>
      <div class="tp10-faq-answer">Some boards calculate percentage using best of 5 subjects, exclude certain subjects, or apply specific weightage. This calculator provides straightforward percentage calculation. For official results, always refer to your board's marksheet and guidelines.</div>
    </div>
    
    <div class="tp10-faq-item">
      <div class="tp10-faq-question">What is the passing percentage?</div>
      <div class="tp10-faq-answer">Most Indian boards require 33% as minimum passing percentage overall and in each subject. However, this may vary by board. Some boards require 35% or 40% in certain subjects. Check your specific board's official guidelines for accurate information.</div>
    </div>
    
    <div class="tp10-faq-item">
      <div class="tp10-faq-question">Can I leave the 6th subject blank?</div>
      <div class="tp10-faq-answer">Yes! The 6th subject is optional. If you have only 5 subjects, leave it blank and the calculator will automatically calculate percentage based on 5 subjects. If you have a 6th subject, include it for more accurate results.</div>
    </div>
  </div>
</div>

<script>
  // Elements
  const tabs = document.querySelectorAll('.tp10-tab');
  const tabContents = document.querySelectorAll('.tp10-tab-content');
  const totalEl = document.getElementById('total');
  const obtEl = document.getElementById('obtained');
  const calcBtn = document.getElementById('calcBtn');
  const calcSubjectBtn = document.getElementById('calcSubjectBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultsContent = document.getElementById('resultsContent');
  const faqItems = document.querySelectorAll('.tp10-faq-item');

  // Subject inputs
  const subjectInputs = {
    english: document.getElementById('english'),
    hindi: document.getElementById('hindi'),
    math: document.getElementById('math'),
    science: document.getElementById('science'),
    social: document.getElementById('social'),
    sixth: document.getElementById('sixth')
  };

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

  // Calculate percentage and grade
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
      <div class="tp10-percentage-display">${percentage}%</div>
      <div class="tp10-grade-display">${grade}</div>
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

  // Calculate from subjects
  function calculateFromSubjects() {
    let totalMarks = 0;
    let subjectCount = 0;
    
    Object.values(subjectInputs).forEach(input => {
      const value = parseFloat(input.value);
      if (!isNaN(value) && value >= 0) {
        totalMarks += value;
        subjectCount++;
      }
    });
    
    if (subjectCount === 0) return null;
    
    let pct = (totalMarks / (subjectCount * 100)) * 100;
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

  // Subject-wise calculate button
  calcSubjectBtn.addEventListener('click', () => {
    const percentage = calculateFromSubjects();
    
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
    // Reset calculator
  resetBtn.addEventListener('click', () => {
    // Reset total marks inputs
    totalEl.value = '';
    obtEl.value = '';
    
    // Reset subject inputs
    Object.values(subjectInputs).forEach(input => {
      input.value = '';
    });
    
    // Reset results
    resultsContent.innerHTML = '<div class="tp10-no-results">Enter your marks to see results</div>';
  });

  // Real-time calculation for desktop
  function handleRealtimeCalc() {
    if (window.innerWidth > 768) {
      const activeTab = document.querySelector('.tp10-tab.active').dataset.tab;
      
      if (activeTab === 'total') {
        const percentage = calculateFromTotal();
        if (percentage) {
          const grade = calculateGrade(percentage);
          updateLiveResults(percentage, grade);
        } else {
          resultsContent.innerHTML = '<div class="tp10-no-results">Enter your marks to see results</div>';
        }
      } else {
        const percentage = calculateFromSubjects();
        if (percentage) {
          const grade = calculateGrade(percentage);
          updateLiveResults(percentage, grade);
        } else {
          resultsContent.innerHTML = '<div class="tp10-no-results">Enter your marks to see results</div>';
        }
      }
    }
  }

  // Add real-time calculation listeners
  totalEl.addEventListener('input', handleRealtimeCalc);
  obtEl.addEventListener('input', handleRealtimeCalc);
  
  Object.values(subjectInputs).forEach(input => {
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

  // Enter key support for subjects
  const subjectOrder = ['english', 'hindi', 'math', 'science', 'social', 'sixth'];
  subjectOrder.forEach((subject, index) => {
    subjectInputs[subject].addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        if (index < subjectOrder.length - 1) {
          subjectInputs[subjectOrder[index + 1]].focus();
        } else {
          calcSubjectBtn.click();
        }
      }
    });
  });

  // Validate subject inputs (max 100)
  Object.values(subjectInputs).forEach(input => {
    input.addEventListener('input', (e) => {
      let value = parseFloat(e.target.value);
      if (value > 100) {
        e.target.value = 100;
      }
      if (value < 0) {
        e.target.value = 0;
      }
    });
  });
</script>
