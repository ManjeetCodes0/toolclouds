---
title: "CDS 2025-2027 Age Calculator: Check for All Upcoming Exams"
localtitle: "CDS Age Calculator"
layout: tool
categories: [calculators, educationCalc, examsCalc]
permalink: /calculators/education/cds-age-calculator
description: "Check your exact age and eligibility for the upcoming CDS exams. Our tool uses the official cutoff dates for all (IMA, INA, AFA, OTA) from 2025 to 2027."
---

<style>
  /* === Color Variables for Light and Dark Modes === */
  :root {
    --cds-bg-prime: #f5f7fa;
    --cds-bg-card: #ffffff;
    --cds-text-primary: #1a202c;
    --cds-text-secondary: #4a5568;
    --cds-accent-army: #4a7c59;
    --cds-accent-navy: #1e3a8a;
    --cds-accent-airforce: #0891b2;
    --cds-accent-ota: #dc2626;
    --cds-border: #e2e8f0;
    --cds-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    --cds-success: #10b981;
    --cds-danger: #ef4444;
    --cds-warning: #f59e0b;
    --cds-hover-bg: #f8fafc;
    --cds-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  body.dark-mode {
    --cds-bg-prime: #0f172a;
    --cds-bg-card: #1e293b;
    --cds-text-primary: #f1f5f9;
    --cds-text-secondary: #cbd5e1;
    --cds-accent-army: #86efac;
    --cds-accent-navy: #60a5fa;
    --cds-accent-airforce: #67e8f9;
    --cds-accent-ota: #fca5a5;
    --cds-border: #334155;
    --cds-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    --cds-success: #34d399;
    --cds-danger: #f87171;
    --cds-warning: #fbbf24;
    --cds-hover-bg: #293548;
    --cds-gradient: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  }
  
  /* === Base Styles === */
  .cds-calc-body {
    font-family: 'Inter', -apple-system, sans-serif;
    background-color: var(--cds-bg-prime);
    color: var(--cds-text-primary);
    transition: all 0.3s ease;
    line-height: 1.6;
    padding: 1rem 0.5rem;
    min-height: 100vh;
  }

  /* === Hero Section - Compact for Mobile === */
  .cds-hero {
    background: var(--cds-gradient);
    color: white;
    padding: 30px 20px;
    text-align: center;
    border-radius: 16px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
  }

  .cds-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.3; }
  }

  .cds-hero h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 8px;
    position: relative;
    z-index: 1;
  }

  .cds-hero p {
    font-size: 0.9rem;
    opacity: 0.9;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  /* === Academy Cards Carousel === */
  .cds-academies-section {
    margin-bottom: 25px;
    position: relative;
  }

  .cds-carousel-container {
    position: relative;
    overflow: hidden;
    margin: 0 -10px;
    padding: 10px;
  }

  .cds-academies {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0 10px 15px;
  }

  .cds-academies::-webkit-scrollbar {
    display: none;
  }

  .cds-academy-card {
    background: var(--cds-bg-card);
    border: 2px solid var(--cds-border);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    flex: 0 0 250px;
    scroll-snap-align: start;
  }

  .cds-academy-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    transition: height 0.3s ease;
  }

  .cds-academy-card.army::before { background: var(--cds-accent-army); }
  .cds-academy-card.navy::before { background: var(--cds-accent-navy); }
  .cds-academy-card.airforce::before { background: var(--cds-accent-airforce); }
  .cds-academy-card.ota::before { background: var(--cds-accent-ota); }

  .cds-academy-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--cds-shadow);
  }

  .cds-academy-icon {
    font-size: 2.5rem;
    margin-bottom: 10px;
    display: block;
  }

  .cds-academy-card.army .cds-academy-icon { color: var(--cds-accent-army); }
  .cds-academy-card.navy .cds-academy-icon { color: var(--cds-accent-navy); }
  .cds-academy-card.airforce .cds-academy-icon { color: var(--cds-accent-airforce); }
  .cds-academy-card.ota .cds-academy-icon { color: var(--cds-accent-ota); }

  .cds-academy-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0 8px;
    color: var(--cds-text-primary);
  }

  .cds-academy-card p {
    font-size: 0.85rem;
    color: var(--cds-text-secondary);
    margin: 0;
  }

  .cds-age-badge {
    display: inline-block;
    background: var(--cds-hover-bg);
    border: 1px solid var(--cds-border);
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 8px;
  }

  /* === Carousel Indicators === */
  .cds-carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: -5px;
  }

  .cds-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--cds-border);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .cds-indicator.active {
    width: 24px;
    border-radius: 4px;
    background: var(--cds-gradient);
  }

  /* === Main Container === */
  .cds-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  /* === Calculator Card - Primary Focus on Mobile === */
  .cds-calc-card {
    background: var(--cds-bg-card);
    border: 1px solid var(--cds-border);
    border-radius: 16px;
    padding: 25px;
    box-shadow: var(--cds-shadow);
    margin-bottom: 0;
  }

  .cds-calc-header {
    text-align: center;
    margin-bottom: 25px;
  }

  .cds-calc-header h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--cds-text-primary);
    margin: 0 0 8px;
  }

  .cds-calc-header p {
    color: var(--cds-text-secondary);
    font-size: 0.9rem;
  }

  .cds-input-group {
    margin-bottom: 20px;
  }

  .cds-input-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--cds-text-primary);
    font-size: 0.9rem;
  }

  .cds-date-input {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid var(--cds-border);
    border-radius: 10px;
    background-color: var(--cds-bg-prime);
    color: var(--cds-text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  .cds-date-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }

  .cds-calc-btn {
    width: 100%;
    padding: 15px;
    font-size: 1.05rem;
    font-weight: 700;
    color: white;
    background: var(--cds-gradient);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .cds-calc-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  .cds-calc-btn:hover::before {
    width: 300px;
    height: 300px;
  }

  .cds-calc-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }

  /* === Results Section === */
  .cds-results {
    margin-top: 30px;
    display: none;
  }

  .cds-results-grid {
    display: grid;
    gap: 15px;
  }

  .cds-result-item {
    background: var(--cds-bg-prime);
    border: 2px solid var(--cds-border);
    border-radius: 12px;
    padding: 18px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .cds-result-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    transition: width 0.3s ease;
  }

  .cds-result-item.eligible::before { background: var(--cds-success); }
  .cds-result-item.not-eligible::before { background: var(--cds-danger); }
  .cds-result-item.age-warning::before { background: var(--cds-warning); }

  .cds-result-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .cds-result-icon {
    font-size: 1.3rem;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }

  .cds-result-item.eligible .cds-result-icon {
    background: rgba(16, 185, 129, 0.1);
    color: var(--cds-success);
  }

  .cds-result-item.not-eligible .cds-result-icon {
    background: rgba(239, 68, 68, 0.1);
    color: var(--cds-danger);
  }

  .cds-result-item.age-warning .cds-result-icon {
    background: rgba(245, 158, 11, 0.1);
    color: var(--cds-warning);
  }

  .cds-result-content h4 {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0 0 4px;
    color: var(--cds-text-primary);
  }

  .cds-result-content p {
    font-size: 0.85rem;
    color: var(--cds-text-secondary);
    margin: 0;
  }

  .cds-exam-badge {
    display: inline-block;
    padding: 3px 8px;
    background: var(--cds-hover-bg);
    border: 1px solid var(--cds-border);
    border-radius: 6px;
    font-size: 0.8rem;
    margin-top: 6px;
    font-weight: 500;
  }

  /* === Sidebar === */
  .cds-sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cds-ad-space {
    background: var(--cds-bg-card);
    border: 2px dashed var(--cds-border);
    border-radius: 16px;
    padding: 50px 20px;
    text-align: center;
    color: var(--cds-text-secondary);
  }

  .cds-ad-space i {
    font-size: 2.5rem;
    opacity: 0.5;
    margin-bottom: 10px;
  }

  .cds-info-card {
    background: var(--cds-bg-card);
    border: 1px solid var(--cds-border);
    border-radius: 16px;
    padding: 25px;
  }

  .cds-info-card h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--cds-text-primary);
    margin: 0 0 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .cds-info-card h3 i {
    color: #667eea;
  }

  .cds-quick-facts {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .cds-quick-facts li {
    padding: 12px 0;
    border-bottom: 1px solid var(--cds-border);
    font-size: 0.95rem;
    color: var(--cds-text-secondary);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .cds-quick-facts li:last-child {
    border-bottom: none;
  }

  .cds-quick-facts li i {
    color: #667eea;
    font-size: 1.1rem;
  }

  .cds-related-tools {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .cds-related-tools li {
    margin-bottom: 10px;
  }

  .cds-related-tools a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 15px;
    background: var(--cds-bg-prime);
    border-radius: 10px;
    text-decoration: none;
    color: var(--cds-text-primary);
    transition: all 0.3s ease;
    font-size: 0.95rem;
  }

  .cds-related-tools a:hover {
    background: var(--cds-hover-bg);
    transform: translateX(5px);
  }

  .cds-related-tools a i {
    color: #667eea;
  }

  /* === Desktop Layout === */
  @media (min-width: 968px) {
    .cds-hero {
      padding: 50px 20px;
      margin-bottom: 40px;
    }

    .cds-hero h1 {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }

    .cds-hero p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto;
    }

    .cds-academies {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      overflow: visible;
      padding: 0;
    }

    .cds-academy-card {
      flex: initial;
      padding: 25px;
    }

    .cds-carousel-indicators {
      display: none;
    }

    .cds-container {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 40px;
    }

    .cds-calc-card {
      padding: 35px;
    }

    .cds-calc-header h2 {
      font-size: 1.8rem;
    }

    .cds-calc-header p {
      font-size: 1rem;
    }
    
    .cds-sidebar {
      gap: 30px;
    }
  }

  /* === Blog Content Section === */
  .cds-content-section {
    max-width: 900px;
    margin: 40px auto 0;
    padding: 0 20px;
  }

  .cds-content-section h2 {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--cds-text-primary);
    margin: 3rem 0 1.5rem;
    position: relative;
    padding-left: 25px;
  }

  .cds-content-section h2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 35px;
    background: var(--cds-gradient);
    border-radius: 3px;
  }

  .cds-content-section h3 {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--cds-text-primary);
    margin: 2.5rem 0 1.2rem;
  }

  .cds-content-section h4 {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--cds-text-primary);
    margin: 2rem 0 1rem;
    padding: 12px 20px;
    background: var(--cds-bg-card);
    border-left: 4px solid #667eea;
    border-radius: 0 8px 8px 0;
  }

  .cds-content-section p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--cds-text-secondary);
    margin-bottom: 1.3rem;
  }

  .cds-content-section ul, .cds-content-section ol {
    margin: 1.5rem 0;
    padding-left: 30px;
  }

  .cds-content-section li {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--cds-text-secondary);
    margin-bottom: 0.8rem;
  }

  .cds-content-section a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
  }

  .cds-content-section a:hover {
    border-bottom-color: #667eea;
  }

  .content-highlight {
    background: var(--cds-bg-card);
    border: 2px solid var(--cds-border);
    border-radius: 12px;
    padding: 20px;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }

  .content-highlight::before {
    content: '💡';
    position: absolute;
    top: -10px;
    right: 20px;
    font-size: 3rem;
    opacity: 0.1;
  }

  /* === Comparison Table === */
  .cds-comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    background: var(--cds-bg-card);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--cds-shadow);
  }

  .cds-comparison-table th {
    background: var(--cds-gradient);
    color: white;
    padding: 15px;
    text-align: left;
    font-weight: 600;
  }

  .cds-comparison-table td {
    padding: 15px;
    border-bottom: 1px solid var(--cds-border);
  }

  .cds-comparison-table tr:last-child td {
    border-bottom: none;
  }

  .cds-comparison-table tr:hover {
    background: var(--cds-hover-bg);
  }

  /* === FAQ Section === */
  .cds-faq-section {
    margin-top: 4rem;
    padding: 50px 0;
    background: var(--cds-bg-card);
    border-radius: 20px;
  }

  .cds-faq-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .cds-faq-header h3 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--cds-text-primary);
    margin-bottom: 0.5rem;
  }

  .cds-faq-header p {
    font-size: 1.1rem;
    color: var(--cds-text-secondary);
  }

  .cds-faq-container {
    max-width: 700px;
    margin: 0 auto;
  }

  .cds-faq-item {
    background: var(--cds-bg-prime);
    border: 2px solid var(--cds-border);
    border-radius: 12px;
    margin-bottom: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .cds-faq-item:hover {
    box-shadow: var(--cds-shadow);
  }

  .cds-faq-question {
    padding: 20px 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    background: transparent;
    border: none;
    width: 100%;
    text-align: left;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--cds-text-primary);
    transition: all 0.3s ease;
  }

  .cds-faq-question:hover {
    background: var(--cds-hover-bg);
  }

  .cds-faq-question.active {
    background: var(--cds-hover-bg);
    color: #667eea;
  }

  .cds-faq-icon {
    font-size: 1.2rem;
    color: #667eea;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .cds-faq-question.active .cds-faq-icon {
    transform: rotate(45deg);
  }

  .cds-faq-answer {
    padding: 0 25px;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .cds-faq-answer.active {
    padding: 0 25px 20px;
    max-height: 500px;
  }

  .cds-faq-answer p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--cds-text-secondary);
    margin: 0;
    padding-top: 10px;
  }

  /* === CTA Box === */
  .cds-cta-box {
    background: var(--cds-gradient);
    color: white;
    border-radius: 16px;
    padding: 40px;
    margin: 3rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .cds-cta-box::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: pulse 4s ease-in-out infinite;
  }

  .cds-cta-box h3 {
    font-size: 1.8rem;
    margin: 0 0 1rem;
    position: relative;
    z-index: 1;
  }

  .cds-cta-box p {
    font-size: 1.1rem;
    margin: 0;
    opacity: 0.95;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .cds-content-section h2 { font-size: 1.8rem; }
    .cds-comparison-table { font-size: 0.9rem; }
    .cds-comparison-table th, .cds-comparison-table td { padding: 10px; }
  }
</style>

<div class="cds-calc-body">
  
  <!-- Compact Hero Section -->
  <div class="cds-hero">
    <h1>🎖️ CDS Age Calculator</h1>
    <p>Check eligibility for IMA, INA, AFA & OTA</p>
  </div>

  <!-- Academy Cards with Carousel on Mobile -->
  <div class="cds-academies-section">
    <div class="cds-carousel-container">
      <div class="cds-academies" id="cds-carousel">
        <div class="cds-academy-card army">
          <i class="fas fa-shield-alt cds-academy-icon"></i>
          <h3>IMA</h3>
          <p>Indian Military Academy</p>
          <span class="cds-age-badge">Age: 20-24 years</span>
        </div>
        
        <div class="cds-academy-card navy">
          <i class="fas fa-anchor cds-academy-icon"></i>
          <h3>INA</h3>
          <p>Indian Naval Academy</p>
          <span class="cds-age-badge">Age: 20-24 years</span>
        </div>
        
        <div class="cds-academy-card airforce">
          <i class="fas fa-jet-fighter cds-academy-icon"></i>
          <h3>AFA</h3>
          <p>Air Force Academy</p>
          <span class="cds-age-badge">Age: 20-24 years</span>
        </div>
        
        <div class="cds-academy-card ota">
          <i class="fas fa-users cds-academy-icon"></i>
          <h3>OTA</h3>
          <p>Officers' Training Academy</p>
          <span class="cds-age-badge">Age: 20-25 years</span>
        </div>
      </div>
    </div>
    <div class="cds-carousel-indicators">
      <span class="cds-indicator active" data-index="0"></span>
      <span class="cds-indicator" data-index="1"></span>
      <span class="cds-indicator" data-index="2"></span>
      <span class="cds-indicator" data-index="3"></span>
    </div>
  </div>

  <!-- Main Container with different structure for mobile/desktop -->
  <div class="cds-container">
    <main>
      <!-- Calculator Card - Priority on Mobile -->
      <div class="cds-calc-card">
        <div class="cds-calc-header">
          <h2>Calculate Your CDS Eligibility</h2>
          <p>Enter your date of birth to check all academies</p>
        </div>
        
        <div class="cds-input-group">
          <label for="cds-dob-input">
            <i class="fas fa-calendar-alt"></i> Your Date of Birth
          </label>
          <input type="date" id="cds-dob-input" class="cds-date-input" required>
        </div>
        
        <button id="cds-calc-btn" class="cds-calc-btn">
          <i class="fas fa-search"></i> Check My Eligibility
        </button>
        
        <div id="cds-results" class="cds-results">
          <h3 style="margin-bottom: 20px; font-size: 1.3rem;">Your Eligibility Status</h3>
          <div id="cds-results-grid" class="cds-results-grid"></div>
        </div>
      </div>
    </main>
    
    <!-- Sidebar - Shows after calculator on mobile, beside it on desktop -->
    <aside class="cds-sidebar">
      <div class="cds-ad-space">
        <i class="fas fa-ad"></i>
        <p>Advertisement</p>
      </div>
      
      <div class="cds-info-card">
        <h3><i class="fas fa-info-circle"></i> Quick Facts</h3>
        <ul class="cds-quick-facts">
          <li><i class="fas fa-check-circle"></i> Exam held twice yearly</li>
          <li><i class="fas fa-graduation-cap"></i> Graduate eligibility</li>
          <li><i class="fas fa-venus-mars"></i> Women can apply for OTA</li>
          <li><i class="fas fa-heart"></i> Unmarried for IMA, INA, OTA. AFA allows married candidates above 25 (no family accommodation during training)</li>
          <li><i class="fas fa-infinity"></i> No attempt limit</li>
        </ul>
      </div>
      
      <div class="cds-info-card">
        <h3><i class="fas fa-tools"></i> Related Tools</h3>
        <ul class="cds-related-tools">
          {% assign exam_tools = site.tools | where_exp:"item","item.categories contains 'examsCalc'" %}
          {% for tool in exam_tools limit:5 %}
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

  <!-- Blog Content -->
  <div class="cds-content-section">
    <h2>🎖️ CDS Age Calculator - Check Your Eligibility in Seconds</h2>
    <p>Planning to join the Indian Armed Forces as an officer through CDS? Hold on! Before you start burning the midnight oil with your preparation, there's one critical checkpoint - the CDS age limit. Every year, lakhs of aspirants apply for the Combined Defence Services (CDS) exam, but many face rejection simply because they didn't check their age eligibility properly.</p>
    
    <p>That's why we've created this free CDS Age Calculator - your instant eligibility checker for all upcoming CDS exams. No more confusion, no more manual calculations, just enter your DOB and know exactly where you stand!</p>

    <h3>📊 Understanding CDS Age Limits (2025-2027)</h3>
    <p>Unlike NDA, CDS has different age limits for different academies. Let's break it down clearly:</p>
    
    <h4>✅ Indian Military Academy (IMA)</h4>
    <ul>
      <li><strong>Age Range:</strong> 20 to 24 years</li>
      <li><strong>For CDS 1 2025:</strong> Born between 2nd January 2001 and 1st January 2006</li>
      <li><strong>Course Duration:</strong> 18 months at IMA Dehradun</li>
      <li><strong>Commission:</strong> Permanent Commission in Army</li>
    </ul>

    <h4>✅ Indian Naval Academy (INA)</h4>
    <ul>
      <li><strong>Age Range:</strong> 20 to 24 years</li>
      <li><strong>For CDS 1 2025:</strong> Born between 2nd January 2001 and 1st January 2006</li>
      <li><strong>Course Duration:</strong> 4 years (B.Tech degree included)</li>
      <li><strong>Commission:</strong> Permanent Commission in Navy</li>
    </ul>

    <h4>✅ Air Force Academy (AFA)</h4>
    <ul>
      <li><strong>Age Range:</strong> 20 to 24 years</li>
      <li><strong>For CDS 1 2025:</strong> Born between 2nd January 2001 and 1st January 2006</li>
      <li><strong>Additional:</strong> AFA requires: Bachelor's degree with Physics & Mathematics at 10+2 level OR Engineering degree. No AFCAT score needed for CDS route.</li>
      <li><strong>Commission:</strong> Permanent Commission in Air Force</li>
    </ul>

    <h4>✅ Officers' Training Academy (OTA)</h4>
    <ul>
      <li><strong>Age Range:</strong> 20 to 25 years (both men and women)</li>
      <li><strong>For CDS 1 2025:</strong> Born between 2nd January 2000 and 1st January 2006</li>
      <li><strong>Course Duration:</strong> 49 weeks at OTA Chennai</li>
      <li><strong>Commission:</strong> Short Service Commission (SSC)</li>
    </ul>

    <div class="content-highlight">
      <p><strong>💡 Pro Tip:</strong> OTA has a higher age limit (25 years) compared to IMA, INA, and AFA (24 years). If you're 24+, OTA is your only option through CDS!</p>
    </div>

    <h3>🚀 Why Use Our CDS Age Calculator?</h3>
    <p>Here's what makes our tool indispensable for every CDS aspirant:</p>
    <ul>
      <li>✅ <strong>Academy-Specific Results:</strong> Shows eligibility for each academy separately</li>
      <li>✅ <strong>Multiple Exam Coverage:</strong> Check eligibility for CDS 1 and CDS 2 across multiple years</li>
      <li>✅ <strong>100% Accurate:</strong> Based on official UPSC notifications</li>
      <li>✅ <strong>Time-Saver:</strong> No manual date calculations needed</li>
      <li>✅ <strong>Free Forever:</strong> No hidden charges or registrations</li>
    </ul>

    <h3>📋 CDS Educational Qualifications</h3>
    <p>Age is just one part of the eligibility puzzle. Here's what degree you need for each academy:</p>
    
    <h4>For IMA (Indian Military Academy):</h4>
    <ul>
      <li>Bachelor's degree from a recognized university</li>
      <li>Final year students can also apply</li>
      <li>Any stream accepted (BA, B.Com, B.Sc, B.Tech, etc.)</li>
    </ul>

    <h4>For INA (Indian Naval Academy):</h4>
    <ul>
      <li>B.Sc with Physics and Mathematics</li>
      <li>OR B.E/B.Tech degree</li>
      <li>Final year students eligible</li>
    </ul>

    <h4>For AFA (Air Force Academy):</h4>
    <ul>
      <li>Bachelor's degree with Physics and Mathematics at 10+2 level</li>
      <li>OR B.E/B.Tech degree</li>
      <li>Must have 60% marks in graduation</li>
    </ul>

    <h4>For OTA (Officers' Training Academy):</h4>
    <ul>
      <li>Any bachelor's degree from recognized university</li>
      <li>Both men and women can apply</li>
            <li>Final year students eligible</li>
    </ul>

    <h3>🎯 CDS vs NDA: Age Limit Comparison</h3>
    <p>Confused between NDA and CDS? Here's a quick comparison:</p>
    
    <table class="cds-comparison-table">
      <tr>
        <th>Aspect</th>
        <th>NDA</th>
        <th>CDS</th>
      </tr>
      <tr>
        <td>Age Range</td>
        <td>16.5 - 19.5 years</td>
        <td>20 - 25 years</td>
      </tr>
      <tr>
        <td>Education</td>
        <td>12th Pass/Appearing</td>
        <td>Graduate/Final Year</td>
      </tr>
      <tr>
        <td>Training Duration</td>
        <td>3 years at NDA + 1 year at IMA/INA/AFA</td>
        <td>Direct academy training</td>
      </tr>
      <tr>
        <td>Women Eligibility</td>
        <td>Yes (All academies)</td>
        <td>Yes (OTA only)</td>
      </tr>
    </table>

    <h3>⚡ Quick Facts About CDS Exam</h3>
    <ul>
      <li>📅 <strong>Frequency:</strong> Conducted twice a year (February and September)</li>
      <li>🏢 <strong>Conducting Body:</strong> Union Public Service Commission (<a href="https://sciencehindi.in/upsc-kya-hota-hai-hindi-me/" >UPSC</a>)</li>
      <li>📝 <strong>Exam Pattern:</strong> Written exam + SSB Interview</li>
      <li>🎖️ <strong>Career Path:</strong> Direct entry as Lieutenant/Sub-Lieutenant/Flying Officer</li>
      <li>💰 <strong>Starting Salary:</strong> ₹56,100/- to ₹1,77,500/- per month</li>
    </ul>

    <h3>🔍 How to Use This CDS Age Calculator</h3>
    <ol>
      <li><strong>Enter Your Date of Birth:</strong> Use the exact date from your 10th certificate</li>
      <li><strong>Click "Check My Eligibility":</strong> Our tool will process instantly</li>
      <li><strong>View Results:</strong> See your eligibility for each academy separately</li>
      <li><strong>Plan Accordingly:</strong> Choose the right academy based on your eligibility</li>
    </ol>

    <!-- FAQ Section -->
    <div class="cds-faq-section">
      <div class="cds-faq-header">
        <h3>❓ Frequently Asked Questions - CDS Age Limit</h3>
        <p>Clear your doubts about CDS eligibility</p>
      </div>
      
      <div class="cds-faq-container">
        <div class="cds-faq-item">
          <button class="cds-faq-question">
            What is the maximum age limit for CDS exam?
            <i class="fas fa-plus cds-faq-icon"></i>
          </button>
          <div class="cds-faq-answer">
            <p><strong>Answer:</strong> The maximum age is 24 years for IMA, INA, and AFA. For OTA, it's 25 years. Remember, this is your age on the first day of the month in which the course commences.</p>
          </div>
        </div>

        <div class="cds-faq-item">
          <button class="cds-faq-question">
            Is there any age relaxation for reserved categories in CDS?
            <i class="fas fa-plus cds-faq-icon"></i>
          </button>
          <div class="cds-faq-answer">
            <p><strong>Answer:</strong> No, there's no age relaxation for any category (SC/ST/OBC/EWS) in CDS exam. The age limits are same for all candidates regardless of their category.</p>
          </div>
        </div>

        <div class="cds-faq-item">
          <button class="cds-faq-question">
            Can married candidates apply for CDS?
            <i class="fas fa-plus cds-faq-icon"></i>
          </button>
          <div class="cds-faq-answer">
            <p><strong>Answer:</strong> Yes! Unlike NDA, married candidates can apply for CDS. For IMA and INA, married candidates are eligible but accommodation for families isn't provided during training. For AFA, candidates must be unmarried at the time of joining.</p>
          </div>
        </div>

        <div class="cds-faq-item">
          <button class="cds-faq-question">
            I'm 25 years old. Can I apply for any CDS academy?
            <i class="fas fa-plus cds-faq-icon"></i>
          </button>
          <div class="cds-faq-answer">
            <p><strong>Answer:</strong> If you're exactly 25 years old, you can only apply for OTA (Officers' Training Academy). IMA, INA, and AFA have a maximum age limit of 24 years.</p>
          </div>
        </div>

        <div class="cds-faq-item">
          <button class="cds-faq-question">
            Can women apply for IMA through CDS?
            <i class="fas fa-plus cds-faq-icon"></i>
          </button>
          <div class="cds-faq-answer">
            <p><strong>Answer:</strong> No, women can only apply for OTA through CDS exam. However, they can join IMA through NDA exam (since 2021) or through other entries like TGC (Technical Graduate Course).</p>
          </div>
        </div>

        <div class="cds-faq-item">
          <button class="cds-faq-question">
            How many attempts are allowed for CDS exam?
            <i class="fas fa-plus cds-faq-icon"></i>
          </button>
          <div class="cds-faq-answer">
            <p><strong>Answer:</strong> There's no limit on the number of attempts for CDS exam. You can appear as many times as you want, as long as you meet the age and educational eligibility criteria.</p>
          </div>
        </div>

        <div class="cds-faq-item">
          <button class="cds-faq-question">
            What happens if I turn 25 after applying but before joining?
            <i class="fas fa-plus cds-faq-icon"></i>
          </button>
          <div class="cds-faq-answer">
            <p><strong>Answer:</strong> Your age is calculated as on the first day of the month in which the course is scheduled to commence, not on the date of application. So if you're within the age limit on that specific date, you're eligible.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="cds-cta-box">
      <h3>🎯 Ready to Check Your CDS Eligibility?</h3>
      <p>Don't let age confusion derail your defence career dreams. Our CDS Age Calculator gives you instant, accurate results for all academies. Whether you're aiming for the permanent commission through IMA/INA/AFA or the short service commission through OTA, knowing your eligibility is the first step.</p>
      
      <p><strong>Remember:</strong> CDS is not just an exam, it's your gateway to leading men and women in uniform, serving the nation with honor and pride. Age is just a number, but in UPSC's book, every day counts!</p>
      
      <p><strong>Use our calculator now and take the first step towards your olive green, white, or blue uniform! Jai Hind! 🇮🇳</strong></p>
    </div>

    <h3>📚 Related Resources</h3>
    <p>Once you've confirmed your age eligibility, check out these helpful tools:</p>
    <ul>
      <li>📊 <a href="/calculators/health/bmi-calculator" target="_blank">BMI Calculator</a> - Ensure you meet the physical standards</li>
      <li>🎓 <a href="/calculators/education/nda-age-calculator" target="_blank">NDA Age Calculator</a> - If you're younger, check NDA eligibility</li>
      <li>📅 <a href="https://upsc.gov.in" target="_blank" rel="noopener">UPSC Official Website</a> - For latest notifications and updates</li>
    </ul>
  </div>
</div>

<script>
  (function() {
    const dobInput = document.getElementById('cds-dob-input');
    const calcBtn = document.getElementById('cds-calc-btn');
    const resultsDiv = document.getElementById('cds-results');
    const resultsGrid = document.getElementById('cds-results-grid');

    // Carousel functionality for mobile
    const carousel = document.getElementById('cds-carousel');
    const indicators = document.querySelectorAll('.cds-indicator');
    let currentIndex = 0;

    function updateCarouselIndicators() {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = 265; // 250px + 15px gap
      currentIndex = Math.round(scrollLeft / cardWidth);
      
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }

    carousel.addEventListener('scroll', updateCarouselIndicators);

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        const cardWidth = 265;
        carousel.scrollTo({
          left: index * cardWidth,
          behavior: 'smooth'
        });
      });
    });

    // Define CDS exam dates and age limits
    const examData = {
      academies: {
        ima: {
          name: 'Indian Military Academy (IMA)',
          minAge: 20,
          maxAge: 24,
          icon: 'shield-alt',
          color: 'army'
        },
        ina: {
          name: 'Indian Naval Academy (INA)',
          minAge: 20,
          maxAge: 24,
          icon: 'anchor',
          color: 'navy'
        },
        afa: {
          name: 'Air Force Academy (AFA)',
          minAge: 20,
          maxAge: 24,
          icon: 'jet-fighter',
          color: 'airforce'
        },
        ota: {
          name: 'Officers\' Training Academy (OTA)',
          minAge: 20,
          maxAge: 25,
          icon: 'users',
          color: 'ota'
        }
      },
      exams: [
        { year: 2025, exam: 'CDS 1', courseStart: '2025-07-01' },
        { year: 2025, exam: 'CDS 2', courseStart: '2026-01-01' },
        { year: 2026, exam: 'CDS 1', courseStart: '2026-07-01' },
        { year: 2026, exam: 'CDS 2', courseStart: '2027-01-01' },
        { year: 2027, exam: 'CDS 1', courseStart: '2027-07-01' },
        { year: 2027, exam: 'CDS 2', courseStart: '2028-01-01' }
      ]
    };

    const calculateAge = (birthDate, targetDate) => {
      const birth = new Date(birthDate);
      const target = new Date(targetDate);
      
      let years = target.getFullYear() - birth.getFullYear();
      let months = target.getMonth() - birth.getMonth();
      let days = target.getDate() - birth.getDate();
      
      if (days < 0) {
        months--;
        days += new Date(target.getFullYear(), target.getMonth(), 0).getDate();
      }
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      return { years, months, days };
    };

    const checkEligibility = (age, academy) => {
      if (age.years < academy.minAge || age.years > academy.maxAge) {
        return 'not-eligible';
      }
      
      if (age.years === academy.minAge && (age.months === 0 && age.days === 0)) {
        return 'eligible';
      }
      
      if (age.years === academy.maxAge && (age.months > 0 || age.days > 0)) {
        return 'not-eligible';
      }
      
      if (age.years === academy.maxAge - 1) {
        return 'age-warning';
      }
      
      return 'eligible';
    };

    const formatAgeString = (age) => {
      let parts = [];
      if (age.years > 0) parts.push(`${age.years} years`);
      if (age.months > 0) parts.push(`${age.months} months`);
      if (age.days > 0) parts.push(`${age.days} days`);
      return parts.join(', ');
    };

    const calculateEligibility = () => {
      const dobString = dobInput.value;
      if (!dobString) {
        resultsGrid.innerHTML = '<p style="color: var(--cds-danger); text-align: center;">Please select your date of birth</p>';
        resultsDiv.style.display = 'block';
        return;
      }

      resultsGrid.innerHTML = '';
      resultsDiv.style.display = 'block';

      examData.exams.forEach(exam => {
        const examResultsDiv = document.createElement('div');
        examResultsDiv.innerHTML = `
          <h4 style="margin: 25px 0 15px; font-size: 1.2rem; color: var(--cds-text-primary);">
            ${exam.exam} ${exam.year} 
          </h4>
        `;

        const academyGrid = document.createElement('div');
        academyGrid.style.display = 'grid';
        academyGrid.style.gap = '10px';

        Object.entries(examData.academies).forEach(([key, academy]) => {
          const age = calculateAge(dobString, exam.courseStart);
          const eligibility = checkEligibility(age, academy);
          
          const resultItem = document.createElement('div');
          resultItem.className = `cds-result-item ${eligibility}`;
          
          let icon, statusText, description;
          
          if (eligibility === 'eligible') {
            icon = 'circle-check';
            statusText = 'Eligible';
            description = `You'll be ${formatAgeString(age)} old`;
          } else if (eligibility === 'not-eligible') {
            icon = 'circle-xmark';
            if (age.years < academy.minAge) {
              statusText = 'Too Young';
              description = `Minimum age is ${academy.minAge} years`;
            } else {
              statusText = 'Over Age';
              description = `Maximum age is ${academy.maxAge} years`;
            }
          } else if (eligibility === 'age-warning') {
            icon = 'exclamation-triangle';
            statusText = 'Last Chance';
            description = `You'll be ${formatAgeString(age)} old - Apply soon!`;
          }

          resultItem.innerHTML = `
            <div class="cds-result-header">
              <div class="cds-result-icon">
                <i class="fas fa-${icon}"></i>
              </div>
              <div class="cds-result-content">
                <h4>${academy.name}</h4>
                <p>${description}</p>
                <span class="cds-exam-badge">${statusText}</span>
              </div>
            </div>
          `;
          
          academyGrid.appendChild(resultItem);
        });

        examResultsDiv.appendChild(academyGrid);
        resultsGrid.appendChild(examResultsDiv);
      });
    };

    // Event listeners
    calcBtn.addEventListener('click', calculateEligibility);
    
    dobInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calculateEligibility();
      }
    });

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.cds-faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = this.classList.contains('active');
        
        // Close all other FAQs
        faqQuestions.forEach(q => {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!isActive) {
          this.classList.add('active');
          answer.classList.add('active');
        }
      });
    });

    // Set max date to today for date input
    const today = new Date().toISOString().split('T')[0];
    dobInput.setAttribute('max', today);
  })();
</script>
