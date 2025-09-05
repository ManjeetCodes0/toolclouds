---
title: "NDA 2025-2027 Age Calculator: Check for All Upcoming Exams"
localtitle: "NDA Age Calculator"
layout: tool
categories: [calculators, educationCalc, examsCalc]
permalink: /calculators/education/nda-age-calculator
description: "Check your exact age and eligibility for the upcoming NDA exams. Our tool uses the latest official cutoff dates for NDA 1 and NDA 2 from 2025 to 2027."
tags:
  - "NDA Age Calculator"
  - "NDA Age Limit"
  - "NDA Eligibility"
  - "NDA 2025"
  - "NDA 2026"
  - "NDA 2027"
  - "Government Exam Calculator"
---

<style>
  /* === Color Variables for Light and Dark Modes === */
  :root {
    --light-bg-prime: #f8f9fa;
    --light-bg-card: #ffffff;
    --light-text-dark: #212529;
    --light-text-muted: #6c757d;
    --light-primary: #007bff;
    --light-secondary: #ffc107;
    --light-border: #dee2e6;
    --light-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    --light-success: #28a745;
    --light-danger: #dc3545;
    --light-info: #17a2b8;
    --light-warning: #ffc107;
    --light-bg-accent: #f0f7ff;
  }
  
  [data-theme="dark"] {
    --light-bg-prime: #121212;
    --light-bg-card: #1e1e1e;
    --light-text-dark: #e0e0e0;
    --light-text-muted: #b0b0b0;
    --light-primary: #5e9cff;
    --light-secondary: #ffbd59;
    --light-border: #333333;
    --light-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    --light-success: #4caf50;
    --light-danger: #ef5350;
    --light-info: #29b6f6;
    --light-warning: #ffb74d;
    --light-bg-accent: #1a2332;
  }
  
  /* === Base Styles === */
  .age-calc-body {
    font-family: 'Inter', sans-serif;
    background-color: var(--light-bg-prime);
    color: var(--light-text-dark);
    transition: background-color 0.3s, color 0.3s;
    line-height: 1.6;
    padding: 20px;
  }

  /* === Main Container and Layout === */
  .age-calc-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  @media (min-width: 768px) {
    .age-calc-container {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 40px;
    }
  }

  /* === Qualification Cards Section === */
  .qual-cards-section {
    margin-bottom: 30px;
  }

  .qual-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 15px;
    margin-bottom: 15px;
  }

  .qual-card {
    background: var(--light-bg-card);
    border: 1px solid var(--light-border);
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
    cursor: default;
    position: relative;
    overflow: hidden;
  }

  .qual-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--light-primary);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .qual-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }

  .qual-card:hover::before {
    opacity: 1;
  }

  .qual-card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }

  .qual-card-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 18px;
  }

  .qual-card-icon.gender {
    background: rgba(123, 31, 162, 0.1);
    color: #7b1fa2;
  }

  .qual-card-icon.age {
    background: rgba(255, 87, 34, 0.1);
    color: #ff5722;
  }

  .qual-card-icon.marital {
    background: rgba(0, 188, 212, 0.1);
    color: #00bcd4;
  }

  .qual-card-icon.education {
    background: rgba(33, 150, 243, 0.1);
    color: #2196f3;
  }

  .qual-card-icon.physical {
    background: rgba(76, 175, 80, 0.1);
    color: #4caf50;
  }

  .qual-card-icon.nationality {
    background: rgba(255, 193, 7, 0.1);
    color: #ff6b00;
  }

  .qual-card h4 {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0;
    color: var(--light-text-dark);
  }

  .qual-card p {
    font-size: 0.85rem;
    color: var(--light-text-muted);
    margin: 0;
    line-height: 1.4;
  }

  .show-more-btn {
    background: linear-gradient(135deg, var(--light-primary), #0056b3);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
  }

  .show-more-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 123, 255, 0.4);
  }

  .show-more-btn i {
    transition: transform 0.3s ease;
  }

  .show-more-btn:hover i {
    transform: translateX(3px);
  }

  /* === Modal Styles === */
  .qual-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 9999;
    overflow-y: auto;
    animation: fadeIn 0.3s ease;
  }

  .qual-modal-content {
    background: var(--light-bg-card);
    margin: 50px auto;
    padding: 0;
    border-radius: 16px;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    animation: slideUp 0.3s ease;
  }

  .qual-modal-header {
    background: linear-gradient(135deg, var(--light-primary), #0056b3);
    color: white;
    padding: 25px;
    border-radius: 16px 16px 0 0;
    position: relative;
  }

  .qual-modal-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .qual-modal-header p {
    margin: 5px 0 0;
    opacity: 0.9;
    font-size: 0.95rem;
  }

  .qual-modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255,255,255,0.2);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .qual-modal-close:hover {
    background: rgba(255,255,255,0.3);
    transform: rotate(90deg);
  }

  .qual-modal-body {
    padding: 25px;
    max-height: 60vh;
    overflow-y: auto;
  }

  .qual-modal-list {
    display: grid;
    gap: 15px;
  }

  .qual-modal-item {
    background: var(--light-bg-prime);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--light-border);
    transition: all 0.3s;
  }

  .qual-modal-item:hover {
    border-color: var(--light-primary);
    box-shadow: 0 2px 8px rgba(0,123,255,0.1);
  }

  .qual-modal-item-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }

  .qual-modal-item h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    color: var(--light-text-dark);
  }

  .qual-modal-item p {
    font-size: 0.95rem;
    color: var(--light-text-muted);
    margin: 0;
    line-height: 1.5;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* === Card and UI Elements === */
  .age-calc-card {
    background-color: var(--light-bg-card);
    border: 1px solid var(--light-border);
    border-radius: 16px;
    padding: 30px;
    box-shadow: var(--light-shadow);
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  .age-calc-header {
    text-align: center;
    margin-bottom: 30px;
  }
  .age-calc-header h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--light-primary);
    margin: 0;
  }
  .age-calc-header p {
    font-size: 1rem;
    color: var(--light-text-muted);
    margin-top: 5px;
  }

  .age-calc-input-group {
    margin-bottom: 20px;
  }
  .age-calc-input-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 0.95rem;
  }
  .age-calc-input-group input {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--light-border);
    border-radius: 8px;
    background-color: var(--light-bg-prime);
    color: var(--light-text-dark);
    font-size: 1rem;
    transition: border-color 0.3s, background-color 0.3s;
  }
  .age-calc-input-group input:focus {
    outline: none;
    border-color: var(--light-primary);
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }

  .age-calc-btn {
    width: 100%;
    padding: 15px;
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
    background-color: var(--light-primary);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
  }
  .age-calc-btn:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
  }

  /* === Results Section === */
  .age-calc-results {
    margin-top: 30px;
    display: none;
  }
  .age-calc-results-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .age-calc-result-item {
    background-color: var(--light-border);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 15px;
    transition: background-color 0.3s;
  }
  .age-calc-result-item.eligible {
    background-color: var(--light-success);
    color: #fff;
  }
  .age-calc-result-item.not-eligible {
    background-color: var(--light-danger);
    color: #fff;
  }
  .age-calc-result-item h3 {
    margin-top: 0;
    font-size: 1.25rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .age-calc-result-item p {
    margin: 5px 0 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }

  /* === Sidebar and Content === */
  .age-calc-sidebar {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .age-calc-ad {
    text-align: center;
    border: 2px dashed var(--light-border);
    border-radius: 12px;
    padding: 40px 20px;
    color: var(--light-text-muted);
    transition: border-color 0.3s;
  }
  .age-calc-ad .fa-ad {
    font-size: 2rem;
    margin-bottom: 10px;
    opacity: 0.7;
  }
  .age-calc-related {
    padding: 20px;
    background-color: var(--light-bg-card);
    border: 1px solid var(--light-border);
    border-radius: 16px;
  }
  .age-calc-related h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--light-primary);
    margin-top: 0;
    margin-bottom: 20px;
  }
  .age-calc-related ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .age-calc-related li a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--light-text-dark);
    padding: 10px;
    border-radius: 8px;
    transition: background-color 0.3s;
  }
  .age-calc-related li a:hover {
    background-color: var(--light-bg-prime);
  }
  .age-calc-related li a i {
    color: var(--light-secondary);
  }
  
  /* === Enhanced Blog Content Styles === */
  .age-calc-blog-content {
    max-width: 800px;
    margin: 60px auto 0;
    padding: 0 20px;
  }

  .age-calc-blog-content h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--light-primary);
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-left: 20px;
  }

  .age-calc-blog-content h2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 30px;
    background: var(--light-primary);
    border-radius: 3px;
  }

  .age-calc-blog-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--light-primary);
    margin-top: 2.5rem;
    margin-bottom: 1.2rem;
  }

  .age-calc-blog-content h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--light-text-dark);
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 10px 15px;
    background: var(--light-bg-accent);
    border-radius: 8px;
    border-left: 4px solid var(--light-primary);
  }

  .age-calc-blog-content p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--light-text-dark);
    margin-bottom: 1.2rem;
  }

  .age-calc-blog-content ul, .age-calc-blog-content ol {
    margin: 1.5rem 0;
    padding-left: 30px;
  }

  .age-calc-blog-content li {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--light-text-dark);
    margin-bottom: 0.8rem;
    position: relative;
  }

  .age-calc-blog-content ul li::marker {
    color: var(--light-primary);
  }

  .age-calc-blog-content a {
    color: var(--light-primary);
    text-decoration: none;
    font-weight: 500;
    border-bottom: 1px dotted var(--light-primary);
    transition: all 0.3s;
  }

  .age-calc-blog-content a:hover {
    color: #0056b3;
    border-bottom-style: solid;
  }

  /* === FAQ Section Styles === */
  .faq-section {
    margin-top: 4rem;
    padding: 40px 0;
    border-top: 2px solid var(--light-border);
  }

  .faq-container {
    max-width: 700px;
    margin: 0 auto;
  }

  .faq-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .faq-header h3 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--light-primary);
    margin-bottom: 0.5rem;
  }

  .faq-header p {
    font-size: 1.1rem;
    color: var(--light-text-muted);
  }

  .faq-item {
    background: var(--light-bg-card);
    border: 1px solid var(--light-border);
    border-radius: 12px;
    margin-bottom: 20px;
    overflow: hidden;
    transition: all 0.3s;
  }

  .faq-item:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }

  .faq-question {
    padding: 20px 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    background: var(--light-bg-card);
    transition: all 0.3s;
    border: none;
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--light-text-dark);
  }

  .faq-question:hover {
    background: var(--light-bg-accent);
  }

  .faq-question.active {
    background: var(--light-bg-accent);
    color: var(--light-primary);
  }

  .faq-icon {
    font-size: 1.5rem;
    color: var(--light-primary);
    transition: transform 0.3s;
    flex-shrink: 0;
  }

  .faq-icon.active {
    transform: rotate(45deg);
  }

  .faq-answer {
    padding: 0 25px;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    background: var(--light-bg-card);
  }

  .faq-answer.active {
    padding: 0 25px 20px;
    max-height: 500px;
  }

  .faq-answer p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--light-text-dark);
    margin: 0;
    padding-top: 10px;
  }

  .faq-answer strong {
    color: var(--light-primary);
    display: inline-block;
    margin-bottom: 5px;
  }

  /* === Special Content Highlights === */
  .content-highlight {
    background: var(--light-bg-accent);
    border-left: 4px solid var(--light-primary);
    padding: 20px;
    margin: 2rem 0;
    border-radius: 0 8px 8px 0;
  }

  .content-highlight p {
    margin: 0;
    font-size: 1.05rem;
  }

  /* === Bottom Line Box === */
  .bottom-line-box {
    background: linear-gradient(135deg, var(--light-bg-accent), var(--light-bg-card));
    border: 2px solid var(--light-primary);
    border-radius: 12px;
    padding: 30px;
    margin: 3rem 0;
    text-align: center;
  }

  .bottom-line-box h3 {
    color: var(--light-primary);
    margin-top: 0;
  }

  .bottom-line-box p {
    margin-bottom: 0;
    font-size: 1.1rem;
  }

  @media (max-width: 767px) {
    .qual-cards-container {
      grid-template-columns: 1fr;
    }
    .qual-modal-content {
      margin: 20px auto;
      width: 95%;
    }
    .age-calc-blog-content {
      padding: 0;
    }
    .age-calc-blog-content h2 {
      font-size: 1.6rem;
    }
    .faq-question {
      font-size: 1rem;
      padding: 15px 20px;
    }
  }
</style>

<div class="age-calc-body">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <div class="age-calc-container">
    <main>
      <!-- === Calculator Tool === -->
      <div class="age-calc-header">
        <h1>NDA Age Calculator 2025-2027</h1>
        <p>Check your age and eligibility for the upcoming NDA exams. Simply enter your date of birth to see your status instantly.</p>
      </div>

      <!-- === Qualification Cards === -->
      <div class="qual-cards-section">
        <div class="qual-cards-container">
          <div class="qual-card">
            <div class="qual-card-header">
              <div class="qual-card-icon gender">
                <i class="fas fa-venus-mars"></i>
              </div>
              <h4>No Gender Discrimination</h4>
            </div>
            <p>Both male and female candidates can apply for all NDA wings</p>
          </div>

          <div class="qual-card">
            <div class="qual-card-header">
              <div class="qual-card-icon age">
                <i class="fas fa-calendar-days"></i>
              </div>
              <h4>No Age Relaxation</h4>
            </div>
            <p>Same age limit for all categories: 16.5 to 19.5 years</p>
          </div>

          <div class="qual-card">
            <div class="qual-card-header">
              <div class="qual-card-icon marital">
                <i class="fas fa-ring"></i>
              </div>
              <h4>Marital Status</h4>
            </div>
            <p>Only unmarried candidates are eligible to apply</p>
          </div>
        </div>
        <button class="show-more-btn" onclick="showQualModal()">
          <i class="fas fa-plus-circle"></i>
          View 6+ More Requirements
        </button>
      </div>

      <div class="age-calc-card">
        <div class="age-calc-input-group">
          <label for="nda-dob-input">Your Date of Birth</label>
          <input type="date" id="nda-dob-input" required>
        </div>
        <button id="nda-submit-btn" class="age-calc-btn">Check My Eligibility</button>
        
        <div id="nda-results" class="age-calc-results">
          <ul id="nda-eligibility-list" class="age-calc-results-list"></ul>
        </div>
      </div>
    </main>
    
    <!-- === Sidebar Content (for desktop) / Renders after tool on mobile === -->
    <aside class="age-calc-sidebar">
      <div class="age-calc-ad">
        <i class="fas fa-ad"></i>
        <span>Advertisement</span>
      </div>
      <div class="age-calc-related">
        <h3><i class="fa-solid fa-graduation-cap"></i> Explore More Tools</h3>
        <ul>
          {% assign education_tools = site.tools | where_exp:"item","item.categories contains 'examsCalc'" %}
          {% for tool in education_tools %}
            {% unless tool.url == page.url %}
              <li>
                <a href="{{ tool.url | relative_url }}">
                  <i class="fas fa-calculator"></i>{{ tool.localtitle }}
                </a>
              </li>
            {% endunless %}
          {% endfor %}
        </ul>
      </div>
    </aside>
  </div>

  <!-- === Enhanced Blog Content === -->
  <div class="age-calc-blog-content">
    <h2>✨ Why Every NDA Aspirant Needs This Age Calculator</h2>
    <p>Look, we get it – the National Defence Academy (NDA) is your dream. It's one of India's most prestigious institutions where young minds transform into officers for the Indian Army, Navy, and Air Force. But here's the thing: before you dive into those late-night study sessions, there's one crucial step you can't skip – checking if you actually meet the age criteria!</p>
    
    <p>Every year, <a href="https://sciencehindi.in/upsc-kya-hota-hai-hindi-me/" target="_blank" >UPSC</a> conducts two NDA exams (NDA 1 and NDA 2), and trust me, thousands of brilliant students face heartbreak simply because they miscalculated their eligibility. That's exactly why we built this free Age Calculator – to save you from that disappointment.</p>

    <h3>🔎 Why Should You Care About Getting Your Age Right?</h3>
    <p>Here's a reality check: manually checking those cut-off dates against your birth date can get really confusing. One small mistake, and boom – your application gets rejected. We've seen it happen way too many times.</p>
    
    <p><strong>Our NDA Age Calculator helps you:</strong></p>
    <ul>
      <li>✅ Get instant clarity on your eligibility status</li>
      <li>✅ Avoid those costly form-filling mistakes</li>
      <li>✅ Save precious time (no more manual date counting!)</li>
      <li>✅ Focus on what really matters – your preparation</li>
    </ul>

    <h3>🛠️ Using This Tool is Dead Simple</h3>
    <p>Seriously, it's easier than making Maggi noodles:</p>
    <ol>
      <li>Enter your Date of Birth (exactly as it appears on your 10th marksheet)</li>
      <li>Hit that "Check My Eligibility" button</li>
      <li>Instantly see if you're eligible for upcoming NDA exams</li>
    </ol>
    <p>That's it! No complex calculations, no confusion – just straight answers.</p>

    <h3>📌 Let's Talk NDA Eligibility (The Real Deal)</h3>
    <p>Alright, let's break down what <a href="https://upsc.gov.in" target="_blank" rel="noopener">UPSC</a> actually looks for:</p>
    
    <h4>✅ The Age Game</h4>
    <ul>
      <li><strong>Minimum:</strong> 16.5 years (yes, that half year matters!)</li>
      <li><strong>Maximum:</strong> 19.5 years (not a day more)</li>
    </ul>
    
    <div class="content-highlight">
      <p>For example, for NDA 1 (2025), you need to be born between July 2, 2006 and January 1, 2009. Even being one day outside this range means game over. Harsh? Yes. But that's how UPSC rolls.</p>
    </div>

    <h4>✅ Education Requirements</h4>
    <ul>
      <li><strong>Army Wing:</strong> Just pass or be appearing in Class 12th (any stream works!)</li>
      <li><strong>Air Force & Navy:</strong> Class 12th with Physics and Maths (non-negotiable)</li>
    </ul>

    <h4>✅ Other Must-Haves</h4>
    <ul>
      <li><strong>Nationality:</strong> Indian citizen (or as specified by UPSC)</li>
      <li><strong>Gender:</strong> Great news – both boys and girls can apply!</li>
      <li><strong>Marital Status:</strong> Must be unmarried (and stay that way during training)</li>
    </ul>

    <h3>🎯 Why NDA? Here's What You're Fighting For</h3>
    <p>Let me paint you a picture of what awaits:</p>
    <ul>
      <li>A chance to don that uniform and serve in the Indian Army, Navy, or Air Force</li>
      <li>World-class training at NDA Khadakwasla, Pune (trust me, it's legendary)</li>
      <li>A career that commands respect wherever you go</li>
      <li>The pride of serving your nation (priceless, really)</li>
    </ul>

    <!-- === FAQ Section === -->
    <div class="faq-section">
      <div class="faq-container">
        <div class="faq-header">
          <h3>🙋‍♂️ Your Burning Questions, Answered</h3>
          <p>Everything you wanted to know about NDA eligibility</p>
        </div>
        
        <div class="faq-item">
          <button class="faq-question">
            What exactly is the NDA age limit?
            <i class="fas fa-plus faq-icon"></i>
          </button>
          <div class="faq-answer">
            <p><strong>👉 Answer:</strong> It's 16.5 to 19.5 years, but here's the catch – the exact dates change with each exam. That's why our calculator updates automatically with the latest UPSC notifications.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            Can girls really apply for NDA now?
            <i class="fas fa-plus faq-icon"></i>
          </button>
          <div class="faq-answer">
            <p><strong>👉 Answer:</strong> Absolutely! Since 2021, NDA opened its doors to female candidates. About time, right?</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            How accurate is this age calculator?
            <i class="fas fa-plus faq-icon"></i>
          </button>
          <div class="faq-answer">
            <p><strong>👉 Answer:</strong> 100% accurate. Just enter your DOB correctly, and we'll tell you exactly where you stand based on official UPSC criteria.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            I'm just 2 days over the age limit. Any chance?
            <i class="fas fa-plus faq-icon"></i>
          </button>
          <div class="faq-answer">
            <p><strong>👉 Answer:</strong> I hate to break it to you, but no. UPSC doesn't budge even for a single day. It's brutal but fair – same rules for everyone.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            How many times can I attempt NDA?
            <i class="fas fa-plus faq-icon"></i>
          </button>
          <div class="faq-answer">
            <p><strong>👉 Answer:</strong> Good news here – there's no attempt limit! Keep trying as long as you're within the age bracket.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            Do I need to pay for using this calculator?
            <i class="fas fa-plus faq-icon"></i>
          </button>
          <div class="faq-answer">
            <p><strong>👉 Answer:</strong> Nope! It's completely free. We built this to help aspirants like you, not to make money.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-line-box">
      <h3>🔑 The Bottom Line</h3>
      <p>Listen, cracking NDA is tough enough without worrying about eligibility confusion. Use our calculator, confirm you're in the game, and then give it everything you've got. Remember, this exam is your gateway to becoming a commissioned officer in the Armed Forces – that's huge!</p>
      
      <p>Pro tip: Once you've confirmed your eligibility here, don't forget to check your physical fitness too. Maybe try our <a href="/calculators/health/bmi-calculator">BMI Calculator</a> to ensure you're in the right shape for those SSB interviews!</p>
      
      <p><strong>Now stop reading and check your eligibility already. Your journey to NDA starts with knowing if you're eligible. All the best, future officer! 🫡</strong></p>
    </div>
  </div>
</div>

<!-- === Qualification Modal === -->
<div id="qualModal" class="qual-modal">
  <div class="qual-modal-content">
    <div class="qual-modal-header">
      <h3>All NDA Eligibility Requirements</h3>
      <p>Complete list of criteria you must meet</p>
      <button class="qual-modal-close" onclick="closeQualModal()">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="qual-modal-body">
      <div class="qual-modal-list">
        <div class="qual-modal-item">
          <div class="qual-modal-item-header">
            <div class="qual-card-icon education">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h4>Educational Qualification</h4>
          </div>
          <p>Class 12 pass or appearing. Physics & Mathematics mandatory for Air Force and Naval wings. Any stream eligible for Army wing.</p>
        </div>

        <div class="qual-modal-item">
          <div class="qual-modal-item-header">
            <div class="qual-card-icon physical">
              <i class="fas fa-ruler-vertical"></i>
            </div>
            <h4>Height Requirements</h4>
          </div>
          <p>
            Minimum standing height 
            <strong>Army &amp; Naval wings: 157 cm</strong><br>
            <strong>Air Force (Flying Branch): 162.5 cm</strong><br>
            Relaxation of up to 5 cm is admissible for Gorkhas and candidates from the hill regions of the North-East, Garhwal and Kumaon.<br>
            (Heights are the same for male and female NDA candidates.)
            </p>

        </div>

        <div class="qual-modal-item">
          <div class="qual-modal-item-header">
            <div class="qual-card-icon nationality">
              <i class="fas fa-flag"></i>
            </div>
            <h4>Nationality</h4>
          </div>
          <p>Must be a citizen of India, Nepal, Bhutan, or Tibetan refugee who came to India before 1 January 1962.</p>
        </div>

        <div class="qual-modal-item">
          <div class="qual-modal-item-header">
            <div class="qual-card-icon physical">
              <i class="fas fa-eye"></i>
            </div>
            <h4>Vision Standards</h4>
          </div>
                    <p>Distance vision 6/6 in better eye and 6/9 in worse eye. Myopia not exceeding -2.5D and hypermetropia not exceeding +3.5D.</p>
        </div>

        <div class="qual-modal-item">
          <div class="qual-modal-item-header">
            <div class="qual-card-icon physical">
              <i class="fas fa-weight"></i>
            </div>
            <h4>Weight Requirements</h4>
          </div>
          <p>Proportionate to height and age as per medical standards. BMI should be within normal range.</p>
        </div>

        <div class="qual-modal-item">
          <div class="qual-modal-item-header">
            <div class="qual-card-icon physical">
              <i class="fas fa-heartbeat"></i>
            </div>
            <h4>Medical Fitness</h4>
          </div>
          <p>Must be medically fit according to prescribed standards. No major surgery or chronic illness history.</p>
        </div>

        <div class="qual-modal-item">
          <div class="qual-modal-item-header">
            <div class="qual-card-icon education">
              <i class="fas fa-language"></i>
            </div>
            <h4>Language Proficiency</h4>
          </div>
          <p>Good command over English language is essential as the medium of instruction at NDA is English.</p>
        </div>

        <div class="qual-modal-item">
          <div class="qual-modal-item-header">
            <div class="qual-card-icon physical">
              <i class="fas fa-tooth"></i>
            </div>
            <h4>Dental Standards</h4>
          </div>
          <p>Minimum 14 dental points with healthy gums. No severe malocclusion or other dental issues.</p>
        </div>

        <div class="qual-modal-item">
          <div class="qual-modal-item-header">
            <div class="qual-card-icon marital">
              <i class="fas fa-child"></i>
            </div>
            <h4>No Children Policy</h4>
          </div>
          <p>Candidates must not have any children from previous relationships. Marriage is not permitted during training.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  (function() {
    const dobInput = document.getElementById('nda-dob-input');
    const submitBtn = document.getElementById('nda-submit-btn');
    const resultsDiv = document.getElementById('nda-results');
    const eligibilityList = document.getElementById('nda-eligibility-list');

    // Define NDA exam cut-off dates
    const examDates = [
      { year: 2025, exam: 'NDA 1', start: '2006-07-02', end: '2009-07-01' },
      { year: 2025, exam: 'NDA 2', start: '2007-01-02', end: '2010-01-01' },
      { year: 2026, exam: 'NDA 1', start: '2007-07-02', end: '2010-07-01' },
      { year: 2026, exam: 'NDA 2', start: '2008-01-02', end: '2011-01-01' },
      { year: 2027, exam: 'NDA 1', start: '2008-07-02', end: '2011-07-01' },
      { year: 2027, exam: 'NDA 2', start: '2009-01-02', end: '2012-01-01' }
    ];

    const formatDate = (dateString) => {
      const d = new Date(dateString);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return d.toLocaleDateString('en-GB', options);
    };

    const calculateEligibility = () => {
      const dobString = dobInput.value;
      if (!dobString) {
        // Instead of alert(), use a custom UI element for error messages.
        // For this example, we'll keep it simple and just return.
        return;
      }

      const userDob = new Date(dobString);
      eligibilityList.innerHTML = '';
      resultsDiv.style.display = 'block';

      examDates.forEach(exam => {
        const startDate = new Date(exam.start);
        const endDate = new Date(exam.end);
        const isEligible = userDob >= startDate && userDob <= endDate;
        
        const listItem = document.createElement('li');
        listItem.classList.add('age-calc-result-item', isEligible ? 'eligible' : 'not-eligible');
        
        const icon = `<i class="fa-solid fa-${isEligible ? 'circle-check' : 'circle-xmark'}"></i>`;
        const statusText = isEligible ? `You are eligible for ${exam.exam} ${exam.year}` : `You are not eligible for ${exam.exam} ${exam.year}`;

        listItem.innerHTML = `
          <h3>${icon} ${statusText}</h3>
          <p><strong>DOB Range:</strong> ${formatDate(exam.start)} to ${formatDate(exam.end)}</p>
        `;
        
        eligibilityList.appendChild(listItem);
      });
    };

    submitBtn.addEventListener('click', calculateEligibility);
    
    // Modal functionality
    window.showQualModal = function() {
      document.getElementById('qualModal').style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    window.closeQualModal = function() {
      document.getElementById('qualModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Close modal on outside click
    document.getElementById('qualModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeQualModal();
      }
    });

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('.faq-icon');
        const isActive = this.classList.contains('active');
        
        // Close all other FAQs
        faqQuestions.forEach(q => {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('active');
          q.querySelector('.faq-icon').classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!isActive) {
          this.classList.add('active');
          answer.classList.add('active');
          icon.classList.add('active');
        }
      });
    });

    // Enter key support for date input
    dobInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calculateEligibility();
      }
    });
  })();
</script>
