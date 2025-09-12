---
title: "Stream Eligibility Checker - After 10th"
description: "Check your eligibility for Science, Commerce, or Arts stream after 10th. Get personalized stream recommendations based on your marks, interests, and career goals."
layout: tool
published: false 
categories: [educationCalc, eligibilityChecker, calculators]
permalink: /calculators/education/stream-eligibility-checker
faq:
  - q: "What percentage is required for Science stream?"
    a: "Most schools require 75-80% for Science with Math, and 70-75% for Science with Biology. However, this varies by school and board. Some prestigious schools may require 85%+ while others accept 60%+."
  - q: "Can I change my stream after 11th?"
    a: "Yes, but it's challenging. You can change from Science to Commerce/Arts easily, but moving to Science from other streams is difficult. It's best to choose carefully initially."
  - q: "What if I'm eligible for multiple streams?"
    a: "That's great! Consider your interests, career goals, and aptitude. Our tool provides recommendations based on your inputs. Also consult with teachers, parents, and career counselors."
  - q: "Do extracurricular activities matter for stream selection?"
    a: "Yes! While marks are primary criteria, many schools consider overall profile including extracurriculars, especially for competitive schools. Sports, arts, and leadership roles can be advantageous."
  - q: "What stream is best for confused students?"
    a: "If you're unsure, Commerce offers good flexibility - you can pursue various careers later. Science keeps most options open but requires strong foundation. Arts is great for creative fields. Consider taking aptitude tests."
  - q: "How accurate is this eligibility checker?"
    a: "We use standard criteria followed by most schools, but actual requirements vary. Always check with specific schools you're interested in. This tool provides general guidance based on common practices."
---

<style>
  :root {
    --se-primary: #6366F1;
    --se-primary-hover: #4F46E5;
    --se-secondary: #10B981;
    --se-secondary-hover: #059669;
    --se-science: #3B82F6;
    --se-commerce: #F59E0B;
    --se-arts: #EC4899;
    --se-bg: #FFFFFF;
    --se-bg-secondary: #F9FAFB;
    --se-text: #111827;
    --se-text-secondary: #6B7280;
    --se-border: #E5E7EB;
    --se-shadow: rgba(0, 0, 0, 0.1);
    --se-success: #10B981;
    --se-warning: #F59E0B;
    --se-danger: #EF4444;
  }
  
  html[data-theme="dark"] {
    --se-primary: #818CF8;
    --se-primary-hover: #6366F1;
    --se-secondary: #34D399;
    --se-secondary-hover: #10B981;
    --se-bg: #1F2937;
    --se-bg-secondary: #111827;
    --se-text: #F9FAFB;
    --se-text-secondary: #D1D5DB;
    --se-border: #374151;
    --se-shadow: rgba(0, 0, 0, 0.3);
  }
  
  .se-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .se-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .se-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--se-primary), var(--se-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .se-header p {
    color: var(--se-text-secondary);
    font-size: 1.25rem;
  }
  
  /* Main Grid */
  .se-main-grid {
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  /* Progress Steps */
  .se-progress {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  
  .se-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1;
  }
  
  .se-step::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    width: 100%;
    height: 2px;
    background: var(--se-border);
    z-index: -1;
  }
  
  .se-step:last-child::after {
    display: none;
  }
  
  .se-step-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--se-bg);
    border: 3px solid var(--se-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: var(--se-text-secondary);
    transition: all 0.3s ease;
  }
  
  .se-step.active .se-step-circle {
    border-color: var(--se-primary);
    background: var(--se-primary);
    color: white;
  }
  
  .se-step.completed .se-step-circle {
    border-color: var(--se-success);
    background: var(--se-success);
    color: white;
  }
  
  .se-step-label {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: var(--se-text-secondary);
  }
  
  /* Form Card */
  .se-form-card {
    background: var(--se-bg-secondary);
    border: 1px solid var(--se-border);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px var(--se-shadow);
  }
  
  .se-form-section {
    display: none;
  }
  
  .se-form-section.active {
    display: block;
  }
  
  .se-section-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--se-text);
  }
  
  /* Subject Marks Grid */
  .se-subjects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .se-subject-input {
    display: flex;
    flex-direction: column;
  }
  
  .se-subject-input label {
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
    color: var(--se-text);
    font-weight: 500;
  }
  
  .se-subject-input input {
    padding: 0.75rem;
    border: 2px solid var(--se-border);
    border-radius: 8px;
    font-size: 1rem;
    background: var(--se-bg);
    color: var(--se-text);
    transition: all 0.3s ease;
  }
  
  .se-subject-input input:focus {
    outline: none;
    border-color: var(--se-primary);
  }
  
  /* Interest Selection */
  .se-interests-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .se-interest-card {
    padding: 1rem;
    border: 2px solid var(--se-border);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
  }
  
  .se-interest-card:hover {
    border-color: var(--se-primary);
    transform: translateY(-2px);
  }
  
  .se-interest-card.selected {
    border-color: var(--se-primary);
    background: rgba(99, 102, 241, 0.1);
  }
  
  .se-interest-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .se-interest-label {
    font-weight: 500;
    color: var(--se-text);
  }
  
  /* Career Goals */
  .se-career-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
  
  .se-career-option {
    padding: 1rem;
    border: 2px solid var(--se-border);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .se-career-option:hover {
    border-color: var(--se-primary);
  }
  
  .se-career-option.selected {
    border-color: var(--se-primary);
    background: rgba(99, 102, 241, 0.1);
  }
  
  .se-career-icon {
    font-size: 1.5rem;
  }
  
  .se-career-content h4 {
    margin: 0 0 0.25rem 0;
    color: var(--se-text);
  }
  
  .se-career-content p {
    margin: 0;
    font-size: 0.875rem;
    color: var(--se-text-secondary);
  }
  
  /* Buttons */
  .se-button-group {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .se-btn {
    padding: 0.875rem 2rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .se-btn-primary {
    background: var(--se-primary);
    color: white;
    flex: 1;
  }
  
  .se-btn-primary:hover {
    background: var(--se-primary-hover);
    transform: translateY(-1px);
  }
  
  .se-btn-secondary {
    background: var(--se-border);
    color: var(--se-text);
  }
  
  .se-btn-secondary:hover {
    background: var(--se-text-secondary);
    color: white;
  }
  
  /* Results Section */
  .se-results-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .se-results-card {
    background: var(--se-bg-secondary);
    border: 1px solid var(--se-border);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px var(--se-shadow);
  }
  
  .se-results-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--se-text);
  }
  
  /* Stream Results */
  .se-stream-result {
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1rem;
    border: 2px solid transparent;
  }
  
  .se-stream-result.science {
    background: rgba(59, 130, 246, 0.1);
    border-color: var(--se-science);
  }
  
  .se-stream-result.commerce {
    background: rgba(245, 158, 11, 0.1);
    border-color: var(--se-commerce);
  }
  
  .se-stream-result.arts {
    background: rgba(236, 72, 153, 0.1);
    border-color: var(--se-arts);
  }
  
  .se-stream-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }
  
  .se-stream-name {
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .se-eligibility-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .se-eligibility-badge.eligible {
    background: var(--se-success);
    color: white;
  }
  
  .se-eligibility-badge.maybe {
    background: var(--se-warning);
    color: white;
  }
  
  .se-eligibility-badge.not-eligible {
    background: var(--se-danger);
    color: white;
  }
  
  .se-match-score {
    font-size: 2rem;
    font-weight: 700;
    margin: 0.5rem 0;
  }
  
  .se-stream-details {
    font-size: 0.95rem;
    color: var(--se-text-secondary);
    line-height: 1.6;
  }
  
  /* Recommendation Card */
  .se-recommendation {
    background: linear-gradient(135deg, var(--se-primary), var(--se-secondary));
    color: white;
    padding: 1.5rem;
    border-radius: 12px;
    margin-top: 1rem;
  }
  
  .se-recommendation h4 {
    margin: 0 0 0.5rem 0;
  }
  
  /* Tips Section */
  .se-tips-card {
    background: var(--se-bg-secondary);
    border: 1px solid var(--se-border);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px var(--se-shadow);
  }
  
  .se-tips-card h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--se-text);
  }
  
  .se-tip-item {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
    padding: 0.75rem;
    background: var(--se-bg);
    border-radius: 8px;
  }
  
  .se-tip-icon {
    color: var(--se-primary);
    font-size: 1.25rem;
  }
  
  .se-tip-content {
    flex: 1;
    font-size: 0.95rem;
    color: var(--se-text-secondary);
  }
  
  /* Content Section */
  .se-content-section {
    background: var(--se-bg-secondary);
    border: 1px solid var(--se-border);
    border-radius: 16px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px var(--se-shadow);
  }
  
  /* FAQ Section */
  .se-faq-section {
    background: var(--se-bg-secondary);
    border: 1px solid var(--se-border);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 4px 6px var(--se-shadow);
  }
  
  .se-faq-item {
    border-bottom: 1px solid var(--se-border);
    padding: 1.25rem 0;
    cursor: pointer;
  }
  
  .se-faq-item:last-child {
    border-bottom: none;
  }
  
  .se-faq-question {
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--se-text);
  }
  
  .se-faq-question::after {
    content: '+';
    font-size: 1.5rem;
    color: var(--se-primary);
    transition: transform 0.3s ease;
  }
  
  .se-faq-item.active .se-faq-question::after {
    transform: rotate(45deg);
  }
  
  .se-faq-answer {
    display: none;
    padding-top: 1rem;
    color: var(--se-text-secondary);
    line-height: 1.8;
  }
  
  .se-faq-item.active .se-faq-answer {
    display: block;
  }
  
  /* Mobile Styles */
  @media (max-width: 768px) {
    .se-container {
      padding: 1rem;
    }
    
    .se-main-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .se-header h1 {
      font-size: 2rem;
    }
    
    .se-subjects-grid,
    .se-interests-grid {
      grid-template-columns: 1fr;
    }
    
    .se-form-card {
      padding: 1.5rem;
      order: 1;
    }
    
    .se-results-section {
      order: 2;
    }
    
    .se-tips-card {
      order: 3;
    }
    
    .se-progress {
      padding: 0;
    }
    
    .se-step-label {
      font-size: 0.75rem;
    }
  }
</style>

<div class="se-container">
  <!-- Header -->
  <div class="se-header">
    <h1>Stream Eligibility Checker</h1>
    <p>Find your perfect stream after 10th based on marks, interests & career goals</p>
  </div>

  <!-- Main Grid -->
  <div class="se-main-grid">
    <!-- Form Section -->
    <div class="se-form-card">
      <!-- Progress Steps -->
      <div class="se-progress">
        <div class="se-step active" data-step="1">
          <div class="se-step-circle">1</div>
          <div class="se-step-label">Marks</div>
        </div>
        <div class="se-step" data-step="2">
          <div class="se-step-circle">2</div>
          <div class="se-step-label">Interests</div>
        </div>
        <div class="se-step" data-step="3">
          <div class="se-step-circle">3</div>
          <div class="se-step-label">Career</div>
        </div>
        <div class="se-step" data-step="4">
          <div class="se-step-circle">4</div>
          <div class="se-step-label">Results</div>
        </div>
      </div>

      <!-- Step 1: Academic Performance -->
      <div class="se-form-section active" id="step1">
        <h2 class="se-section-title">Enter Your 10th Marks</h2>
        <div class="se-subjects-grid">
          <div class="se-subject-input">
            <label for="english">English</label>
            <input type="number" id="english" placeholder="Out of 100" min="0" max="100">
          </div>
          <div class="se-subject-input">
            <label for="mathematics">Mathematics</label>
            <input type="number" id="mathematics" placeholder="Out of 100" min="0" max="100">
          </div>
          <div class="se-subject-input">
            <label for="science">Science</label>
            <input type="number" id="science" placeholder="Out of 100" min="0" max="100">
          </div>
          <div class="se-subject-input">
            <label for="social">Social Science</label>
            <input type="number" id="social" placeholder="Out of 100" min="0" max="100">
          </div>
          <div class="se-subject-input">
            <label for="language">2nd Language</label>
            <input type="number" id="language" placeholder="Out of 100" min="0" max="100">
          </div>
          <div class="se-subject-input">
            <label for="overall">Overall Percentage</label>
            <input type="number" id="overall" placeholder="Total %" min="0" max="100" readonly>
          </div>
        </div>
        
        <div class="se-button-group">
          <button class="se-btn se-btn-primary" onclick="nextStep()">
            Next: Interests
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Step 2: Interests -->
      <div class="se-form-section" id="step2">
        <h2 class="se-section-title">Select Your Interests</h2>
        <p style="margin-bottom: 1rem; color: var(--se-text-secondary);">Choose up to 4 areas that interest you most</p>
        
        <div class="se-interests-grid">
          <div class="se-interest-card" data-interest="technology">
            <div class="se-interest-icon">💻</div>
            <div class="se-interest-label">Technology & Computing</div>
          </div>
          <div class="se-interest-card" data-interest="medical">
            <div class="se-interest-icon">🏥</div>
            <div class="se-interest-label">Medical & Healthcare</div>
          </div>
          <div class="se-interest-card" data-interest="business">
            <div class="se-interest-icon">💼</div>
            <div class="se-interest-label">Business & Finance</div>
          </div>
          <div class="se-interest-card" data-interest="creative">
            <div class="se-interest-icon">🎨</div>
            <div class="se-interest-label">Creative Arts</div>
          </div>
          <div class="se-interest-card" data-interest="research">
            <div class="se-interest-icon">🔬</div>
            <div class="se-interest-label">Research & Innovation</div>
          </div>
          <div class="se-interest-card" data-interest="social">
            <div class="se-interest-icon">🤝</div>
            <div class="se-interest-label">Social Service</div>
          </div>
          <div class="se-interest-card" data-interest="sports">
            <div class="se-interest-icon">⚽</div>
            <div class="se-interest-label">Sports & Fitness</div>
          </div>
          <div class="se-interest-card" data-interest="communication">
            <div class="se-interest-icon">📢</div>
            <div class="se-interest-label">Media & Communication</div>
          </div>
        </div>
        
        <div class="se-button-group">
          <button class="se-btn se-btn-secondary" onclick="prevStep()">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            Back
          </button>
          <button class="se-btn se-btn-primary" onclick="nextStep()">
            Next: Career Goals
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Step 3: Career Goals -->
      <div class="se-form-section" id="step3">
        <h2 class="se-section-title">What's Your Career Goal?</h2>
        
        <div class="se-career-grid">
          <div class="se-career-option" data-career="engineering">
            <div class="se-career-icon">🏗️</div>
            <div class="se-career-content">
              <h4>Engineering & Technology</h4>
              <p>IIT, NIT, Software Development, AI/ML</p>
            </div>
          </div>
          <div class="se-career-option" data-career="medical">
            <div class="se-career-icon">👨‍⚕️</div>
            <div class="se-career-content">
              <h4>Medical & Healthcare</h4>
              <p>MBBS, BDS, Pharmacy, Nursing, AYUSH</p>
            </div>
          </div>
          <div class="se-career-option" data-career="business">
            <div class="se-career-icon">📈</div>
            <div class="se-career-content">
              <h4>Business & Management</h4>
              <p>MBA, CA, CS, Finance, Marketing</p>
            </div>
          </div>
          <div class="se-career-option" data-career="government">
            <div class="se-career-icon">🏛️</div>
            <div class="se-career-content">
              <h4>Government Services</h4>
              <p>UPSC, State Services, Banking, Railways</p>
            </div>
          </div>
          <div class="se-career-option" data-career="creative">
            <div class="se-career-icon">🎭</div>
            <div class="se-career-content">
              <h4>Creative Fields</h4>
              <p>Design, Media, Journalism, Film, Fashion</p>
            </div>
          </div>
          <div class="se-career-option" data-career="teaching">
            <div class="se-career-icon">👩‍🏫</div>
            <div class="se-career-content">
              <h4>Teaching & Academia</h4>
              <p>Professor, School Teacher, Research</p>
            </div>
          </div>
          <div class="se-career-option" data-career="law">
            <div class="se-career-icon">⚖️</div>
            <div class="se-career-content">
              <h4>Law & Legal Services</h4>
              <p>Lawyer, Judge, Legal Advisor</p>
            </div>
          </div>
          <div class="se-career-option" data-career="undecided">
            <div class="se-career-icon">🤔</div>
            <div class="se-career-content">
              <h4>Still Exploring</h4>
              <p>Haven't decided yet, keeping options open</p>
            </div>
          </div>
        </div>
        
        <div class="se-button-group">
          <button class="se-btn se-btn-secondary" onclick="prevStep()">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            Back
          </button>
          <button class="se-btn se-btn-primary" onclick="checkEligibility()">
            Check Eligibility
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Step 4: Results -->
      <div class="se-form-section" id="step4">
        <h2 class="se-section-title">Your Stream Eligibility Results</h2>
        <div id="resultsContainer">
          <!-- Results will be populated here -->
        </div>
        
        <div class="se-button-group">
          <button class="se-btn se-btn-secondary" onclick="resetChecker()">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
            Start Over
          </button>
          <button class="se-btn se-btn-primary" onclick="window.print()">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Save Results
          </button>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="se-results-section">
      <!-- Live Preview -->
      <div class="se-results-card" id="livePreview">
        <h3>Quick Analysis</h3>
        <div id="quickAnalysis">
          <p style="color: var(--se-text-secondary); text-align: center;">Complete the form to see your eligibility</p>
        </div>
      </div>

      <!-- Tips Card -->
      <div class="se-tips-card">
        <h3>Stream Selection Tips</h3>
        <div class="se-tip-item">
          <div class="se-tip-icon">💡</div>
          <div class="se-tip-content">Don't choose based on peer pressure - follow your interests</div>
        </div>
        <div class="se-tip-item">
          <div class="se-tip-icon">📊</div>
          <div class="se-tip-content">Consider both marks and aptitude for best results</div>
        </div>
        <div class="se-tip-item">
          <div class="se-tip-icon">🎯</div>
          <div class="se-tip-content">Research career options in each stream before deciding</div>
        </div>
        <div class="se-tip-item">
          <div class="se-tip-icon">💬</div>
          <div class="se-tip-content">Discuss with teachers, parents, and career counselors</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Content Section -->
  <div class="se-content-section">
    <h2>Complete Guide to Stream Selection After 10th</h2>
    
    <p>Choosing the right stream after 10th is one of the most important decisions in a student's academic journey. This choice shapes your career path, so it's crucial to make an informed decision based on your marks, interests, and career goals.</p>

    <h3>🎓 Understanding the Three Streams</h3>
    
    <h4>Science Stream</h4>
    <ul>
      <li><strong>Subjects:</strong> Physics, Chemistry, Mathematics/Biology, English, Optional Subject</li>
      <li><strong>Career Options:</strong> Engineering, Medicine, Research, Technology, Architecture</li>
      <li><strong>Required Skills:</strong> Analytical thinking, problem-solving, mathematical aptitude</li>
      <li><strong>Typical Requirements:</strong> 75-85% in 10th (varies by school)</li>
    </ul>

    <h4>Commerce Stream</h4>
    <ul>
      <li><strong>Subjects:</strong> Accountancy, Business Studies, Economics, Mathematics/IP, English</li>
      <li><strong>Career Options:</strong> CA, CS, Banking, Finance, Management, Entrepreneurship</li>
      <li><strong>Required Skills:</strong> Numerical ability, business acumen, analytical skills</li>
      <li><strong>Typical Requirements:</strong> 60-70% in 10th</li>
    </ul>

    <h4>Arts/Humanities Stream</h4>
    <ul>
      <li><strong>Subjects:</strong> History, Political Science, Economics, Psychology, Sociology, etc.</li>
      <li><strong>Career Options:</strong> Law, Journalism, Civil Services, Teaching, Creative fields</li>
      <li><strong>Required Skills:</strong> Communication, creativity, critical thinking</li>
      <li><strong>Typical Requirements:</strong> 50-60% in 10th</li>
    </ul>

    <h3>📊 Factors to Consider</h3>
    <ol>
      <li><strong>Academic Performance:</strong> Your 10th marks, especially in core subjects</li>
      <li><strong>Interest & Aptitude:</strong> What subjects you enjoy and excel at</li>
      <li><strong>Career Goals:</strong> Long-term professional aspirations</li>
      <li><strong>Market Trends:</strong> Current and future job opportunities</li>
      <li><strong>Financial Considerations:</strong> Cost of education in different streams</li>
    </ol>

    <h3>🚀 Emerging Career Options</h3>
    <ul>
      <li><strong>Data Science & AI:</strong> Requires Science/Math background</li>
      <li><strong>Digital Marketing:</strong> Open to all streams</li>
      <li><strong>Environmental Science:</strong> Science stream preferred</li>
      <li><strong>Psychology & Mental Health:</strong> Arts/Science streams</li>
      <li><strong>Sports Management:</strong> Any stream with sports interest</li>
    </ul>

    <h3>💡 Common Myths Debunked</h3>
    <ul>
      <li><strong>Myth:</strong> Science is only for toppers<br>
          <strong>Reality:</strong> Average students can excel with dedication</li>
            <li><strong>Myth:</strong> Arts has no career scope<br>
          <strong>Reality:</strong> Arts offers diverse careers in law, media, civil services</li>
      <li><strong>Myth:</strong> Commerce is easier than Science<br>
          <strong>Reality:</strong> Each stream has its own challenges and requirements</li>
      <li><strong>Myth:</strong> You can't switch streams later<br>
          <strong>Reality:</strong> Many courses accept students from different streams</li>
    </ul>

    <h3>✅ Making the Right Choice</h3>
    <p>Remember these key points:</p>
    <ul>
      <li>There's no "best" stream - only what's best for YOU</li>
      <li>Consider your strengths, not just marks</li>
      <li>Think long-term but stay flexible</li>
      <li>Success is possible in every stream with dedication</li>
      <li>Seek guidance but make your own decision</li>
    </ul>
  </div>

  <!-- FAQ Section -->
  <div class="se-faq-section">
    <h2>Frequently Asked Questions</h2>
    
    <div class="se-faq-item">
      <div class="se-faq-question">What percentage is required for Science stream?</div>
      <div class="se-faq-answer">Most schools require 75-80% for Science with Math, and 70-75% for Science with Biology. However, this varies significantly by school and board. Some prestigious schools may require 85%+ while others accept 60%+. Check with specific schools in your area.</div>
    </div>
    
    <div class="se-faq-item">
      <div class="se-faq-question">Can I change my stream after 11th?</div>
      <div class="se-faq-answer">Yes, but it's challenging. You can change from Science to Commerce/Arts relatively easily, but moving to Science from other streams is difficult due to the technical foundation required. It's best to choose carefully initially. Some boards allow changes within the first few months.</div>
    </div>
    
    <div class="se-faq-item">
      <div class="se-faq-question">What if I'm eligible for multiple streams?</div>
      <div class="se-faq-answer">That's great! Consider your interests, career goals, and aptitude. Take aptitude tests, talk to professionals in fields you're interested in, and consider which subjects you enjoy studying. Our tool provides recommendations based on your inputs. Also consult with teachers, parents, and career counselors.</div>
    </div>
    
    <div class="se-faq-item">
      <div class="se-faq-question">Do extracurricular activities matter for stream selection?</div>
      <div class="se-faq-answer">Yes! While marks are the primary criteria, many schools consider overall profile including extracurriculars, especially for competitive schools. Sports achievements can help in sports quota, arts/music for creative fields, and leadership roles show management potential. They also indicate your interests and strengths.</div>
    </div>
    
    <div class="se-faq-item">
      <div class="se-faq-question">What stream is best for confused students?</div>
      <div class="se-faq-answer">If you're unsure, Commerce offers good flexibility - you can pursue various careers later including MBA, law, or even creative fields. Science keeps most options open but requires strong foundation in Math/Science. Arts is great for those interested in humanities, social sciences, or creative fields. Consider taking career counseling or aptitude tests.</div>
    </div>
    
    <div class="se-faq-item">
      <div class="se-faq-question">How accurate is this eligibility checker?</div>
      <div class="se-faq-answer">We use standard criteria followed by most schools, but actual requirements vary by institution. This tool provides general guidance based on common practices across Indian boards. Always verify with specific schools you're interested in. Consider this as a starting point for your research, not the final word.</div>
    </div>

    <div class="se-faq-item">
      <div class="se-faq-question">Can weak students take Science stream?</div>
      <div class="se-faq-answer">Science requires consistent effort and strong foundation in Math and analytical thinking. If you're weak in these areas but passionate about science, you can succeed with extra effort, coaching, and dedication. However, be realistic about the workload. Sometimes choosing a stream where you can excel is better than struggling in a "prestigious" stream.</div>
    </div>

    <div class="se-faq-item">
      <div class="se-faq-question">What about vocational courses?</div>
      <div class="se-faq-answer">Vocational courses are excellent alternatives offering practical skills and faster job entry. Options include ITI, polytechnic diplomas, skill-based courses in hospitality, fashion, animation, etc. These are suitable if you prefer hands-on learning over traditional academics. Many offer good career prospects and can lead to degree programs later.</div>
    </div>
  </div>
</div>

<script>
  // Current step tracking
  let currentStep = 1;
  let studentData = {
    marks: {},
    interests: [],
    career: '',
    percentage: 0
  };

  // Subject inputs
  const subjectInputs = ['english', 'mathematics', 'science', 'social', 'language'];

  // Calculate percentage on mark entry
  subjectInputs.forEach(subject => {
    document.getElementById(subject).addEventListener('input', calculatePercentage);
  });

  function calculatePercentage() {
    let total = 0;
    let count = 0;
    
    subjectInputs.forEach(subject => {
      const value = parseFloat(document.getElementById(subject).value);
      if (!isNaN(value) && value >= 0) {
        total += value;
        count++;
        studentData.marks[subject] = value;
      }
    });
    
    if (count > 0) {
      studentData.percentage = (total / count).toFixed(2);
      document.getElementById('overall').value = studentData.percentage;
      updateQuickAnalysis();
    }
  }

  // Interest selection
  document.querySelectorAll('.se-interest-card').forEach(card => {
    card.addEventListener('click', function() {
      const interest = this.dataset.interest;
      
      if (this.classList.contains('selected')) {
        this.classList.remove('selected');
        studentData.interests = studentData.interests.filter(i => i !== interest);
      } else if (studentData.interests.length < 4) {
        this.classList.add('selected');
        studentData.interests.push(interest);
      } else {
        alert('You can select maximum 4 interests');
      }
      updateQuickAnalysis();
    });
  });

  // Career selection
  document.querySelectorAll('.se-career-option').forEach(option => {
    option.addEventListener('click', function() {
      document.querySelectorAll('.se-career-option').forEach(o => o.classList.remove('selected'));
      this.classList.add('selected');
      studentData.career = this.dataset.career;
      updateQuickAnalysis();
    });
  });

  // Navigation functions
  function nextStep() {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('active');
        updateProgress();
      }
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      document.getElementById(`step${currentStep}`).classList.remove('active');
      currentStep--;
      document.getElementById(`step${currentStep}`).classList.add('active');
      updateProgress();
    }
  }

  function updateProgress() {
    document.querySelectorAll('.se-step').forEach((step, index) => {
      if (index + 1 < currentStep) {
        step.classList.add('completed');
        step.classList.remove('active');
      } else if (index + 1 === currentStep) {
        step.classList.add('active');
        step.classList.remove('completed');
      } else {
        step.classList.remove('active', 'completed');
      }
    });
  }

  function validateStep(step) {
    switch(step) {
      case 1:
        if (studentData.percentage === 0) {
          alert('Please enter your marks in at least one subject');
          return false;
        }
        return true;
      case 2:
        if (studentData.interests.length === 0) {
          alert('Please select at least one interest');
          return false;
        }
        return true;
      case 3:
        if (!studentData.career) {
          alert('Please select your career goal');
          return false;
        }
        return true;
      default:
        return true;
    }
  }

  // Quick Analysis Update
  function updateQuickAnalysis() {
    const analysisDiv = document.getElementById('quickAnalysis');
    let html = '';
    
    if (studentData.percentage > 0) {
      html += `<div style="margin-bottom: 1rem;">
        <strong>Overall Percentage:</strong> ${studentData.percentage}%
      </div>`;
      
      // Quick eligibility check
      html += '<div style="margin-bottom: 0.5rem;"><strong>Quick Check:</strong></div>';
      if (studentData.percentage >= 75) {
        html += '<div style="color: var(--se-success);">✓ Eligible for all streams</div>';
      } else if (studentData.percentage >= 60) {
        html += '<div style="color: var(--se-warning);">✓ Eligible for Commerce & Arts</div>';
      } else if (studentData.percentage >= 50) {
        html += '<div style="color: var(--se-warning);">✓ Eligible for Arts stream</div>';
      } else {
        html += '<div style="color: var(--se-danger);">Consider vocational courses</div>';
      }
    }
    
    if (studentData.interests.length > 0) {
      html += `<div style="margin-top: 1rem;">
        <strong>Interests:</strong> ${studentData.interests.length}/4 selected
      </div>`;
    }
    
    if (studentData.career) {
      html += `<div style="margin-top: 0.5rem;">
        <strong>Career Goal:</strong> Selected
      </div>`;
    }
    
    analysisDiv.innerHTML = html || '<p style="color: var(--se-text-secondary); text-align: center;">Complete the form to see your eligibility</p>';
  }

  // Check Eligibility
  function checkEligibility() {
    if (validateStep(3)) {
      // Move to results
      document.getElementById('step3').classList.remove('active');
      currentStep = 4;
      document.getElementById('step4').classList.add('active');
      updateProgress();
      
      // Generate results
      generateResults();
    }
  }

  // Generate Results
  function generateResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    const results = calculateStreamEligibility();
    
    let html = '';
    
    // Stream results
    results.forEach(stream => {
      html += `
        <div class="se-stream-result ${stream.name.toLowerCase()}">
          <div class="se-stream-header">
            <div class="se-stream-name">${stream.name}</div>
            <div class="se-eligibility-badge ${stream.eligibility}">${stream.eligibilityText}</div>
          </div>
          <div class="se-match-score">${stream.matchScore}% Match</div>
          <div class="se-stream-details">${stream.details}</div>
        </div>
      `;
    });
    
    // Recommendation
    const topStream = results[0];
    html += `
      <div class="se-recommendation">
        <h4>Our Recommendation</h4>
        <p>${getRecommendation(topStream, studentData)}</p>
      </div>
    `;
    
    resultsContainer.innerHTML = html;
  }

  // Calculate Stream Eligibility
  function calculateStreamEligibility() {
    const results = [];
    
    // Science Stream
    const scienceScore = calculateScienceScore();
    results.push({
      name: 'Science',
      matchScore: scienceScore.score,
      eligibility: scienceScore.eligibility,
      eligibilityText: scienceScore.eligibilityText,
      details: scienceScore.details
    });
    
    // Commerce Stream
    const commerceScore = calculateCommerceScore();
    results.push({
      name: 'Commerce',
      matchScore: commerceScore.score,
      eligibility: commerceScore.eligibility,
      eligibilityText: commerceScore.eligibilityText,
      details: commerceScore.details
    });
    
    // Arts Stream
    const artsScore = calculateArtsScore();
    results.push({
      name: 'Arts',
      matchScore: artsScore.score,
      eligibility: artsScore.eligibility,
      eligibilityText: artsScore.eligibilityText,
      details: artsScore.details
    });
    
    // Sort by match score
    results.sort((a, b) => b.matchScore - a.matchScore);
    
    return results;
  }

  // Calculate Science Score
  function calculateScienceScore() {
    let score = 0;
    let eligibility = 'not-eligible';
    let eligibilityText = 'Not Eligible';
    let details = '';
    
    // Marks criteria (40%)
    const mathMarks = studentData.marks.mathematics || 0;
    const scienceMarks = studentData.marks.science || 0;
    
    if (studentData.percentage >= 75 && mathMarks >= 75 && scienceMarks >= 75) {
      score += 40;
      eligibility = 'eligible';
      eligibilityText = 'Eligible';
    } else if (studentData.percentage >= 65 && mathMarks >= 65 && scienceMarks >= 65) {
      score += 25;
      eligibility = 'maybe';
      eligibilityText = 'Maybe Eligible';
    } else {
      score += 10;
    }
    
    // Interest alignment (30%)
    const scienceInterests = ['technology', 'medical', 'research'];
    const interestMatch = studentData.interests.filter(i => scienceInterests.includes(i)).length;
    score += (interestMatch / scienceInterests.length) * 30;
    
    // Career alignment (30%)
    const scienceCareers = ['engineering', 'medical', 'teaching'];
    if (scienceCareers.includes(studentData.career)) {
      score += 30;
    } else if (studentData.career === 'undecided') {
      score += 15;
    }
    
    // Details
    if (eligibility === 'eligible') {
      details = `Strong foundation in Math (${mathMarks}%) and Science (${scienceMarks}%). `;
    } else if (eligibility === 'maybe') {
      details = `Moderate scores in core subjects. Consider improving Math/Science. `;
    } else {
      details = `Below typical requirements. Focus on strengthening fundamentals. `;
    }
    
    details += `Good for careers in ${scienceCareers.includes(studentData.career) ? 'your chosen field' : 'engineering, medicine, research'}.`;
    
    return { score: Math.round(score), eligibility, eligibilityText, details };
  }

  // Calculate Commerce Score
  function calculateCommerceScore() {
    let score = 0;
    let eligibility = 'not-eligible';
    let eligibilityText = 'Not Eligible';
    let details = '';
    
    // Marks criteria (40%)
    const mathMarks = studentData.marks.mathematics || 0;
    
    if (studentData.percentage >= 60) {
      score += 40;
      eligibility = 'eligible';
      eligibilityText = 'Eligible';
    } else if (studentData.percentage >= 50) {
      score += 25;
      eligibility = 'maybe';
      eligibilityText = 'Maybe Eligible';
    } else {
      score += 10;
    }
    
    // Interest alignment (30%)
    const commerceInterests = ['business', 'technology', 'communication'];
    const interestMatch = studentData.interests.filter(i => commerceInterests.includes(i)).length;
    score += (interestMatch / commerceInterests.length) * 30;
    
    // Career alignment (30%)
    const commerceCareers = ['business', 'government', 'law'];
    if (commerceCareers.includes(studentData.career)) {
      score += 30;
    } else if (studentData.career === 'undecided') {
      score += 15;
    }
    
    // Details
    details = `${eligibility === 'eligible' ? 'Good' : 'Moderate'} academic performance. `;
    details += `Math skills ${mathMarks >= 60 ? 'adequate' : 'need improvement'} for Commerce with Math. `;
    details += `Suitable for careers in ${commerceCareers.includes(studentData.career) ? 'your area of interest' : 'business, finance, management'}.`;
    
    return { score: Math.round(score), eligibility, eligibilityText, details };
  }

  // Calculate Arts Score
  function calculateArtsScore() {
    let score = 0;
    let eligibility = 'not-eligible';
    let eligibilityText = 'Not Eligible';
    let details = '';
    
    // Marks criteria (40%)
    if (studentData.percentage >= 45) {
      score += 40;
      eligibility = 'eligible';
      eligibilityText = 'Eligible';
    } else if (studentData.percentage >= 35) {
      score += 25;
      eligibility = 'maybe';
      eligibilityText = 'Maybe Eligible';
    } else {
      score += 10;
    }
    
    // Interest alignment (30%)
    const artsInterests = ['creative', 'social', 'communication', 'sports'];
    const interestMatch = studentData.interests.filter(i => artsInterests.includes(i)).length;
    score += (interestMatch / artsInterests.length) * 30;
    
    // Career alignment (30%)
    const artsCareers = ['creative', 'teaching', 'law', 'government'];
    if (artsCareers.includes(studentData.career)) {
      score += 30;
    } else if (studentData.career === 'undecided') {
      score += 15;
    }
    
    // Details
    const langMarks = studentData.marks.english || 0;
    const socialMarks = studentData.marks.social || 0;
    
    details = `Strong in languages (${langMarks}%) and social studies (${socialMarks}%). `;
    details += `Great for ${artsCareers.includes(studentData.career) ? 'your career choice' : 'creative and social fields'}. `;
    details += 'Offers diverse career options and flexibility.';
    
    return { score: Math.round(score), eligibility, eligibilityText, details };
  }

  // Get Recommendation
  function getRecommendation(topStream, data) {
    let recommendation = `Based on your ${data.percentage}% marks, `;
    
    if (data.interests.length > 0) {
      recommendation += `interests in ${data.interests.slice(0, 2).join(' and ')}, `;
    }
    
    if (data.career && data.career !== 'undecided') {
      recommendation += `and career goal in ${data.career.replace('-', ' ')}, `;
    }
    
    recommendation += `we recommend ${topStream.name} stream with ${topStream.matchScore}% compatibility. `;
    
    if (topStream.eligibility === 'maybe') {
      recommendation += 'You may need to check specific school requirements or consider improving your scores.';
    } else if (topStream.eligibility === 'not-eligible') {
      recommendation += 'Consider vocational courses or work on improving your academic performance.';
    } else {
      recommendation += 'You have a strong profile for this stream!';
    }
    
    return recommendation;
  }

  // Reset function
  function resetChecker() {
    // Reset data
    studentData = {
      marks: {},
      interests: [],
      career: '',
      percentage: 0
    };
    
    // Reset form
    subjectInputs.forEach(subject => {
      document.getElementById(subject).value = '';
    });
    document.getElementById('overall').value = '';
    
    document.querySelectorAll('.se-interest-card').forEach(card => {
      card.classList.remove('selected');
    });
    
    document.querySelectorAll('.se-career-option').forEach(option => {
      option.classList.remove('selected');
    });
    
    // Reset to step 1
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep = 1;
    document.getElementById('step1').classList.add('active');
    updateProgress();
    updateQuickAnalysis();
  }

  // FAQ functionality
  document.querySelectorAll('.se-faq-item').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
</script>
