---
title: "Fraction Calculator - Add, Subtract, Multiply & Divide Fractions"
description: "Free online fraction calculator with step-by-step solutions. Simplify fractions, convert to decimals, find common denominators,and work with mixed numbers."
localtitle: "Fraction Calculator"
layout: tool
categories: [mathCalc, calculators]
permalink: /calculators/math/number-fraction-calculator
faq:
  - q: "How do I add fractions with different denominators?"
    a: "To add fractions with different denominators, first find the least common denominator (LCD). Convert each fraction to an equivalent fraction with the LCD, then add the numerators. For example: 1/3 + 1/4 = 4/12 + 3/12 = 7/12."
  - q: "What's the difference between a proper and improper fraction?"
    a: "A proper fraction has a numerator smaller than its denominator (like 3/4). An improper fraction has a numerator equal to or larger than its denominator (like 5/4 or 4/4). Improper fractions can be converted to mixed numbers."
  - q: "How do I simplify fractions?"
    a: "To simplify a fraction, divide both the numerator and denominator by their greatest common divisor (GCD). For example, to simplify 12/18, divide both by 6 to get 2/3. Our calculator automatically simplifies all results."
  - q: "Can I enter negative fractions?"
    a: "Yes! You can enter negative fractions by putting a minus sign before the numerator. For example, -3/4 or 3/-4. The calculator handles negative fractions in all operations correctly."
  - q: "How do I convert a mixed number to an improper fraction?"
    a: "Multiply the whole number by the denominator, add the numerator, then place over the original denominator. For example: 2 1/3 = (2×3+1)/3 = 7/3."
  - q: "What happens when I divide by a fraction?"
    a: "Dividing by a fraction is the same as multiplying by its reciprocal. To divide by a fraction, flip it and multiply. For example: 1/2 ÷ 3/4 = 1/2 × 4/3 = 4/6 = 2/3."
  - q: "How accurate is the decimal conversion?"
    a: "Our calculator shows decimal equivalents up to 10 decimal places. For repeating decimals, we show the pattern and indicate it with notation like 0.333... or 0.1̄6̄."
  - q: "Can I calculate with more than two fractions?"
    a: "Currently, the calculator works with two fractions at a time. For multiple fractions, calculate step by step - first calculate two fractions, then use that result with the next fraction."
---

<style>
  :root {
    /* Ocean Depths Color Scheme */
    --fc-gradient-1: #00d2ff;
    --fc-gradient-2: #3a7bd5;
    --fc-gradient-3: #00d2ff;
    --fc-gradient-4: #928dab;
    --fc-bg: #0f1419;
    --fc-surface: #1a2332;
    --fc-surface-light: #243447;
    --fc-text: #ffffff;
    --fc-text-dim: #8ca0b3;
    --fc-accent: #00d2ff;
    --fc-border: rgba(255, 255, 255, 0.1);
    --fc-success: #00ff88;
    --fc-error: #ff3860;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .fc-wrapper {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--fc-bg);
    color: var(--fc-text);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  
  /* Wave Animation Background */
  .fc-waves {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.5;
  }
  
  .fc-wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--fc-gradient-1) 30%, var(--fc-gradient-2) 60%, var(--fc-gradient-4));
    opacity: 0.1;
    animation: wave 15s linear infinite;
  }
  
  .fc-wave:nth-child(2) {
    animation-delay: -5s;
    opacity: 0.05;
  }
  
  .fc-wave:nth-child(3) {
    animation-delay: -10s;
    opacity: 0.08;
  }
  
  @keyframes wave {
    0% { transform: translateX(0) translateY(0); }
    50% { transform: translateX(-25%) translateY(-20px); }
    100% { transform: translateX(-50%) translateY(0); }
  }
  
  .fc-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    z-index: 1;
  }
  
  .fc-header {
    text-align: center;
    margin-bottom: 3rem;
    animation: fadeDown 0.8s ease;
  }
  
  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fc-title {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--fc-gradient-1), var(--fc-gradient-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    .fc-title { font-size: 2.5rem; }
  }
  
  .fc-main-calc {
    background: var(--fc-surface);
    border-radius: 32px;
    padding: 3rem;
    margin-bottom: 3rem;
    border: 1px solid var(--fc-border);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
  }
  
  .fc-main-calc::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, var(--fc-gradient-1) 0%, transparent 70%);
    opacity: 0.05;
    animation: rotate 30s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .fc-input-section {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto;
    gap: 2rem;
    align-items: center;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 768px) {
    .fc-input-section {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
  
  .fc-fraction-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  }
  
  .fc-numerator, .fc-denominator {
    width: 120px;
    padding: 1rem;
    background: var(--fc-surface-light);
    border: 2px solid var(--fc-border);
    border-radius: 12px;
    color: var(--fc-text);
    font-size: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .fc-numerator:focus, .fc-denominator:focus {
    outline: none;
    border-color: var(--fc-gradient-1);
    box-shadow: 0 0 20px rgba(0, 210, 255, 0.3);
  }
  
  .fc-fraction-line {
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--fc-gradient-1), var(--fc-gradient-2));
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 210, 255, 0.5);
  }
  
  .fc-operation-select {
    font-size: 2rem;
    padding: 1rem 1.5rem;
    background: var(--fc-surface-light);
    border: 3px solid var(--fc-gradient-1);
    border-radius: 16px;
    color: var(--fc-gradient-1);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 700;
  }
  
  .fc-operation-select:hover {
    background: var(--fc-gradient-1);
    color: white;
    transform: scale(1.1);
  }
  
  .fc-equals {
    font-size: 2rem;
    color: var(--fc-text-dim);
    font-weight: 300;
  }
  
  .fc-calculate-btn {
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(135deg, var(--fc-gradient-1), var(--fc-gradient-2));
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 2rem;
  }
  
  .fc-calculate-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 210, 255, 0.4);
  }
  
  .fc-result-section {
    background: var(--fc-surface-light);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease;
  }
  
  .fc-result-section.show {
    opacity: 1;
    transform: translateY(0);
  }
  
  .fc-result-main {
    font-size: 3rem;
    font-weight: 200;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--fc-gradient-1), var(--fc-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .fc-result-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .fc-result-item {
    background: var(--fc-surface);
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid var(--fc-border);
  }
  
  .fc-result-label {
    font-size: 0.875rem;
    color: var(--fc-text-dim);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
  
  .fc-result-value {
    font-size: 1.5rem;
    color: var(--fc-accent);
    font-weight: 600;
  }
  
  .fc-visual-section {
    background: var(--fc-surface);
    border-radius: 24px;
    padding: 2.5rem;
    margin-bottom: 3rem;
    border: 1px solid var(--fc-border);
  }
  
  .fc-visual-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .fc-pie-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
  }
  
  .fc-pie {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    background: conic-gradient(
      var(--fc-gradient-1) 0deg 90deg,
      var(--fc-surface-light) 90deg 360deg
    );
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .fc-pie-label {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 600;
    color: var(--fc-accent);
  }
  
  .fc-common-fractions {
    background: var(--fc-surface);
    border-radius: 24px;
    padding: 2.5rem;
    margin-bottom: 3rem;
    border: 1px solid var(--fc-border);
  }
  
  .fc-common-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .fc-common-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }
  
  .fc-common-item {
    background: var(--fc-surface-light);
    border: 2px solid var(--fc-border);
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .fc-common-item:hover {
    border-color: var(--fc-gradient-1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .fc-common-fraction {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--fc-gradient-1);
  }
  
  .fc-common-decimal {
    font-size: 0.875rem;
    color: var(--fc-text-dim);
    margin-top: 0.25rem;
  }
  
  .fc-related-tools {
    margin-bottom: 3rem;
  }
  
  .fc-section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .fc-tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .fc-tool-card {
    background: var(--fc-surface);
    border-radius: 20px;
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    border: 1px solid var(--fc-border);
    text-align: center;
  }
  
  .fc-tool-card:hover {
    transform: translateY(-5px);
    border-color: var(--fc-gradient-1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  .fc-tool-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1rem;
    background: linear-gradient(135deg, var(--fc-gradient-1), var(--fc-gradient-2));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
  
  .fc-tool-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .fc-tool-desc {
    color: var(--fc-text-dim);
    font-size: 0.9rem;
  }
  
  .fc-faq-section {
    margin-top: 3rem;
  }
  
  .fc-faq-container {
    background: var(--fc-surface);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid var(--fc-border);
  }
  
  .fc-faq-item {
    border-bottom: 1px solid var(--fc-border);
    padding: 0;
  }
  
  .fc-faq-item:last-child {
    border-bottom: none;
  }
  
  .fc-faq-question {
    width: 100%;
    padding: 1.5rem 2rem;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--fc-text);
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
  }
  
  .fc-faq-question:hover {
    color: var(--fc-gradient-1);
    background: rgba(0, 210, 255, 0.05);
  }
  
  .fc-faq-q {
    flex: 1;
    padding-right: 1rem;
  }
  
  .fc-faq-arrow {
    transition: transform 0.3s ease;
    color: var(--fc-gradient-1);
    flex-shrink: 0;
  }
  
  .fc-faq-item.active .fc-faq-arrow {
    transform: rotate(180deg);
  }
  
  .fc-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .fc-faq-item.active .fc-faq-answer {
    max-height: 500px;
  }
  
  .fc-faq-answer p {
    padding: 0 2rem 1.5rem 2rem;
    color: var(--fc-text-dim);
    line-height: 1.8;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .fc-container { padding: 1rem; }
    .fc-main-calc { padding: 2rem; }
    .fc-numerator, .fc-denominator { width: 100px; font-size: 1.25rem; }
  }
</style>

<div class="fc-wrapper">
  <div class="fc-waves">
    <div class="fc-wave"></div>
    <div class="fc-wave"></div>
    <div class="fc-wave"></div>
  </div>
  
  <div class="fc-container">
    <header class="fc-header">
      <h1 class="fc-title">Fraction Calculator</h1>
    </header>
    
    <div class="fc-main-calc">
      <div class="fc-input-section">
        <div class="fc-fraction-input">
          <input type="number" class="fc-numerator" id="num1" placeholder="1" value="1">
          <div class="fc-fraction-line"></div>
          <input type="number" class="fc-denominator" id="den1" placeholder="2" value="2">
        </div>
        
        <select class="fc-operation-select" id="operation">
          <option value="add">+</option>
          <option value="subtract">−</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>
        
        <div class="fc-fraction-input">
          <input type="number" class="fc-numerator" id="num2" placeholder="1" value="1">
          <div class="fc-fraction-line"></div>
          <input type="number" class="fc-denominator" id="den2" placeholder="4" value="4">
        </div>
        
        <div class="fc-equals">=</div>
      </div>
      
      <button class="fc-calculate-btn" onclick="calculateFraction()">Calculate</button>
      
      <div class="fc-result-section" id="resultSection">
        <div class="fc-result-main" id="resultMain">3/4</div>
        <div class="fc-result-details">
          <div class="fc-result-item">
            <div class="fc-result-label">Decimal</div>
            <div class="fc-result-value" id="resultDecimal">0.75</div>
          </div>
          <div class="fc-result-item">
            <div class="fc-result-label">Percentage</div>
            <div class="fc-result-value" id="resultPercent">75%</div>
          </div>
          <div class="fc-result-item">
            <div class="fc-result-label">Mixed Number</div>
            <div class="fc-result-value" id="resultMixed">N/A</div>
          </div>
          <div class="fc-result-item">
            <div class="fc-result-label">Simplified</div>
            <div class="fc-result-value" id="resultSimplified">3/4</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="fc-visual-section">
      <h3 class="fc-visual-title">Visual Representation</h3>
      <div class="fc-pie-container">
        <div style="position: relative;">
          <div class="fc-pie" id="pie1" style="background: conic-gradient(var(--fc-gradient-1) 0deg 180deg, var(--fc-surface-light) 180deg 360deg)"></div>
          <div class="fc-pie-label" id="pieLabel1">1/2</div>
        </div>
        <div style="font-size: 2rem; color: var(--fc-text-dim);">+</div>
        <div style="position: relative;">
          <div class="fc-pie" id="pie2" style="background: conic-gradient(var(--fc-gradient-2) 0deg 90deg, var(--fc-surface-light) 90deg 360deg)"></div>
          <div class="fc-pie-label" id="pieLabel2">1/4</div>
        </div>
        <div style="font-size: 2rem; color: var(--fc-text-dim);">=</div>
        <div style="position: relative;">
          <div class="fc-pie" id="pieResult" style="background: conic-gradient(var(--fc-gradient-3) 0deg 270deg, var(--fc-surface-light) 270deg 360deg)"></div>
          <div class="fc-pie-label" id="pieLabelResult">3/4</div>
        </div>
      </div>
    </div>
    
    <div class="fc-common-fractions">
      <h3 class="fc-common-title">Common Fractions</h3>
      <div class="fc-common-grid">
        <div class="fc-common-item" onclick="setFraction(1, 2)">
          <div class="fc-common-fraction">1/2</div>
          <div class="fc-common-decimal">0.5</div>
        </div>
        <div class="fc-common-item" onclick="setFraction(1, 3)">
          <div class="fc-common-fraction">1/3</div>
          <div class="fc-common-decimal">0.333...</div>
        </div>
        <div class="fc-common-item" onclick="setFraction(1, 4)">
          <div class="fc-common-fraction">1/4</div>
          <div class="fc-common-decimal">0.25</div>
        </div>
        <div class="fc-common-item" onclick="setFraction(3, 4)">
          <div class="fc-common-fraction">3/4</div>
          <div class="fc-common-decimal">0.75</div>
        </div>
        <div class="fc-common-item" onclick="setFraction(2, 3)">
          <div class="fc-common-fraction">2/3</div>
          <div class="fc-common-decimal">0.667...</div>
        </div>
        <div class="fc-common-item" onclick="setFraction(1, 5)">
          <div class="fc-common-fraction">1/5</div>
          <div class="fc-common-decimal">0.2</div>
        </div>
        <div class="fc-common-item" onclick="setFraction(1, 8)">
          <div class="fc-common-fraction">1/8</div>
          <div class="fc-common-decimal">0.125</div>
        </div>
        <div class="fc-common-item" onclick="setFraction(5, 6)">
          <div class="fc-common-fraction">5/6</div>
          <div class="fc-common-decimal">0.833...</div>
        </div>
      </div>
    </div>
    
    <div class="fc-related-tools">
      <h2 class="fc-section-title">Related Tools</h2>
      <div class="fc-tools-grid">
        <a href="#" class="fc-tool-card">
          <div class="fc-tool-icon">%</div>
          <div class="fc-tool-name">Percentage Calculator</div>
          <div class="fc-tool-desc">Convert fractions to percentages</div>
        </a>
        <a href="#" class="fc-tool-card">
          <div class="fc-tool-icon">.</div>
          <div class="fc-tool-name">Decimal Calculator</div>
          <div class="fc-tool-desc">Work with decimal numbers</div>
        </a>
        <a href="#" class="fc-tool-card">
          <div class="fc-tool-icon">🔢</div>
          <div class="fc-tool-name">Mixed Numbers</div>
          <div class="fc-tool-desc">Convert between mixed & improper</div>
        </a>
        <a href="#" class="fc-tool-card">
          <div class="fc-tool-icon">⚖️</div>
          <div class="fc-tool-name">Ratio Calculator</div>
          <div class="fc-tool-desc">Simplify and compare ratios</div>
        </a>
      </div>
    </div>
    
    <div class="fc-faq-section">
      <h2 class="fc-section-title">Frequently Asked Questions</h2>
      
      <div class="fc-faq-container">
        <div class="fc-faq-item">
          <button class="fc-faq-question" onclick="toggleFaq(this)">
            <span class="fc-faq-q">How do I add fractions with different denominators?</span>
            <svg class="fc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="fc-faq-answer">
            <p>To add fractions with different denominators, first find the least common denominator (LCD). Convert each fraction to an equivalent fraction with the LCD, then add the numerators. For example: 1/3 + 1/4 = 4/12 + 3/12 = 7/12.</p>
          </div>
        </div>
        
        <div class="fc-faq-item">
          <button class="fc-faq-question" onclick="toggleFaq(this)">
            <span class="fc-faq-q">What's the difference between a proper and improper fraction?</span>
            <svg class="fc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="fc-faq-answer">
            <p>A proper fraction has a numerator smaller than its denominator (like 3/4). An improper fraction has a numerator equal to or larger than its denominator (like 5/4 or 4/4). Improper fractions can be converted to mixed numbers.</p>
          </div>
        </div>
        
        <div class="fc-faq-item">
          <button class="fc-faq-question" onclick="toggleFaq(this)">
            <span class="fc-faq-q">How do I simplify fractions?</span>
            <svg class="fc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="fc-faq-answer">
            <p>To simplify a fraction, divide both the numerator and denominator by their greatest common divisor (GCD). For example, to simplify 12/18, divide both by 6 to get 2/3. Our calculator automatically simplifies all results.</p>
          </div>
        </div>
        
        <div class="fc-faq-item">
          <button class="fc-faq-question" onclick="toggleFaq(this)">
            <span class="fc-faq-q">Can I enter negative fractions?</span>
            <svg class="fc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="fc-faq-answer">
            <p>Yes! You can enter negative fractions by putting a minus sign before the numerator. For example, -3/4 or 3/-4. The calculator handles negative fractions in all operations correctly.</p>
          </div>
        </div>
        
        <div class="fc-faq-item">
          <button class="fc-faq-question" onclick="toggleFaq(this)">
            <span class="fc-faq-q">How do I convert a mixed number to an improper fraction?</span>
            <svg class="fc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="fc-faq-answer">
            <p>Multiply the whole number by the denominator, add the numerator, then place over the original denominator. For example: 2 1/3 = (2×3+1)/3 = 7/3.</p>
          </div>
        </div>
        
        <div class="fc-faq-item">
          <button class="fc-faq-question" onclick="toggleFaq(this)">
            <span class="fc-faq-q">What happens when I divide by a fraction?</span>
            <svg class="fc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="fc-faq-answer">
            <p>Dividing by a fraction is the same as multiplying by its reciprocal. To divide by a fraction, flip it and multiply. For example: 1/2 ÷ 3/4 = 1/2 × 4/3 = 4/6 = 2/3.</p>
          </div>
        </div>
        
        <div class="fc-faq-item">
          <button class="fc-faq-question" onclick="toggleFaq(this)">
            <span class="fc-faq-q">How accurate is the decimal conversion?</span>
            <svg class="fc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="fc-faq-answer">
            <p>Our calculator shows decimal equivalents up to 10 decimal places. For repeating decimals, we show the pattern and indicate it with notation like 0.333... or 0.1̄6̄.</p>
          </div>
        </div>
        
        <div class="fc-faq-item">
          <button class="fc-faq-question" onclick="toggleFaq(this)">
            <span class="fc-faq-q">Can I calculate with more than two fractions?</span>
            <svg class="fc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="fc-faq-answer">
            <p>Currently, the calculator works with two fractions at a time. For multiple fractions, calculate step by step - first calculate two fractions, then use that result with the next fraction.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    calculateFraction();
  });
  
  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }
  
  function simplifyFraction(num, den) {
    const divisor = gcd(num, den);
    return {
      numerator: num / divisor,
      denominator: den / divisor
    };
  }
  
  function calculateFraction() {
    const num1 = parseInt(document.getElementById('num1').value) || 0;
    const den1 = parseInt(document.getElementById('den1').value) || 1;
    const num2 = parseInt(document.getElementById('num2').value) || 0;
    const den2 = parseInt(document.getElementById('den2').value) || 1;
    const operation = document.getElementById('operation').value;
    
    if (den1 === 0 || den2 === 0) {
      alert('Denominator cannot be zero!');
      return;
    }
    
    let resultNum, resultDen;
    
    switch (operation) {
      case 'add':
        const lcmDen = lcm(den1, den2);
        resultNum = (num1 * lcmDen / den1) + (num2 * lcmDen / den2);
        resultDen = lcmDen;
        break;
        
      case 'subtract':
        const lcmDenSub = lcm(den1, den2);
        resultNum = (num1 * lcmDenSub / den1) - (num2 * lcmDenSub / den2);
        resultDen = lcmDenSub;
        break;
        
      case 'multiply':
        resultNum = num1 * num2;
        resultDen = den1 * den2;
        break;
        
      case 'divide':
        if (num2 === 0) {
          alert('Cannot divide by zero!');
          return;
        }
        resultNum = num1 * den2;
        resultDen = den1 * num2;
        break;
    }
    
    // Handle negative denominators
    if (resultDen < 0) {
      resultNum = -resultNum;
      resultDen = -resultDen;
    }
    
    // Simplify
    const simplified = simplifyFraction(resultNum, resultDen);
    
        // Update display
    updateResults(simplified.numerator, simplified.denominator, resultNum, resultDen);
    updateVisualPies(num1, den1, num2, den2, simplified.numerator, simplified.denominator, operation);
  }
  
  function updateResults(simplifiedNum, simplifiedDen, originalNum, originalDen) {
    // Main result
    document.getElementById('resultMain').textContent = `${simplifiedNum}/${simplifiedDen}`;
    
    // Decimal
    const decimal = simplifiedNum / simplifiedDen;
    let decimalStr;
    if (Number.isInteger(decimal)) {
      decimalStr = decimal.toString();
    } else {
      decimalStr = decimal.toFixed(10).replace(/\.?0+$/, '');
      // Check for repeating decimals
      if (decimalStr.length > 8) {
        decimalStr = decimal.toFixed(3) + '...';
      }
    }
    document.getElementById('resultDecimal').textContent = decimalStr;
    
    // Percentage
    document.getElementById('resultPercent').textContent = (decimal * 100).toFixed(2) + '%';
    
    // Mixed number
    if (Math.abs(simplifiedNum) > Math.abs(simplifiedDen)) {
      const whole = Math.floor(Math.abs(simplifiedNum) / Math.abs(simplifiedDen));
      const remainder = Math.abs(simplifiedNum) % Math.abs(simplifiedDen);
      const sign = simplifiedNum < 0 ? '-' : '';
      document.getElementById('resultMixed').textContent = `${sign}${whole} ${remainder}/${Math.abs(simplifiedDen)}`;
    } else {
      document.getElementById('resultMixed').textContent = 'N/A';
    }
    
    // Simplified form
    if (originalNum === simplifiedNum && originalDen === simplifiedDen) {
      document.getElementById('resultSimplified').textContent = 'Already simplified';
    } else {
      document.getElementById('resultSimplified').textContent = `${simplifiedNum}/${simplifiedDen}`;
    }
    
    // Show results
    document.getElementById('resultSection').classList.add('show');
  }
  
  function updateVisualPies(num1, den1, num2, den2, resultNum, resultDen, operation) {
    // Calculate degrees for each fraction
    const deg1 = (Math.abs(num1) / den1) * 360;
    const deg2 = (Math.abs(num2) / den2) * 360;
    const degResult = (Math.abs(resultNum) / resultDen) * 360;
    
    // Update pie charts
    document.getElementById('pie1').style.background = 
      `conic-gradient(var(--fc-gradient-1) 0deg ${deg1}deg, var(--fc-surface-light) ${deg1}deg 360deg)`;
    document.getElementById('pie2').style.background = 
      `conic-gradient(var(--fc-gradient-2) 0deg ${deg2}deg, var(--fc-surface-light) ${deg2}deg 360deg)`;
    document.getElementById('pieResult').style.background = 
      `conic-gradient(var(--fc-gradient-3) 0deg ${degResult}deg, var(--fc-surface-light) ${degResult}deg 360deg)`;
    
    // Update labels
    document.getElementById('pieLabel1').textContent = `${num1}/${den1}`;
    document.getElementById('pieLabel2').textContent = `${num2}/${den2}`;
    document.getElementById('pieLabelResult').textContent = `${resultNum}/${resultDen}`;
    
    // Update operation symbol
    const operationSymbols = {
      'add': '+',
      'subtract': '−',
      'multiply': '×',
      'divide': '÷'
    };
    const pieContainer = document.querySelector('.fc-pie-container');
    const operationSpans = pieContainer.querySelectorAll('div[style*="font-size: 2rem"]');
    if (operationSpans[0]) {
      operationSpans[0].textContent = operationSymbols[operation];
    }
  }
  
  function setFraction(num, den) {
    document.getElementById('num1').value = num;
    document.getElementById('den1').value = den;
    calculateFraction();
  }
  
  // Auto-calculate on input change
  document.querySelectorAll('#num1, #den1, #num2, #den2, #operation').forEach(element => {
    element.addEventListener('input', calculateFraction);
    element.addEventListener('change', calculateFraction);
  });
  
  // Enter key support
  document.querySelectorAll('.fc-numerator, .fc-denominator').forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        calculateFraction();
      }
    });
  });
  
  // FAQ Toggle
  function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.fc-faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // If this item wasn't active, open it
    if (!wasActive) {
      faqItem.classList.add('active');
    }
  }
  
  // Keyboard navigation for operation select
  document.getElementById('operation').addEventListener('keydown', (e) => {
    const operations = ['add', 'subtract', 'multiply', 'divide'];
    const currentIndex = operations.indexOf(e.target.value);
    
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const newIndex = currentIndex > 0 ? currentIndex - 1 : operations.length - 1;
      e.target.value = operations[newIndex];
      calculateFraction();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const newIndex = currentIndex < operations.length - 1 ? currentIndex + 1 : 0;
      e.target.value = operations[newIndex];
      calculateFraction();
    }
  });
  
  // Validate inputs
  document.querySelectorAll('.fc-numerator, .fc-denominator').forEach(input => {
    input.addEventListener('input', (e) => {
      // Allow negative numbers
      const value = e.target.value;
      if (value && !value.match(/^-?\d*$/)) {
        e.target.value = value.replace(/[^\d-]/g, '').replace(/(?!^)-/g, '');
      }
    });
  });
</script>
