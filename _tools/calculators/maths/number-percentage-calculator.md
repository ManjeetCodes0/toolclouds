---
title: "Number Percentage Calculator - Calculate Percentages, Inc & Dec"
description: "Free online percentage calculator for all percentage calculations. Find percentages of numbers, changes, and what percentage one number is of another."
localtitle: "Percentage Calculator"
layout: tool
categories: [mathCalc, calculators]
permalink: /calculators/math/number-percentage-calculator
faq:
  - q: "How do I calculate what percentage one number is of another?"
    a: "To find what percentage A is of B, divide A by B and multiply by 100. For example, to find what percentage 25 is of 200: (25 ÷ 200) × 100 = 12.5%. Our calculator does this automatically when you select 'What % is X of Y'."
  - q: "What's the difference between percentage change and percentage difference?"
    a: "Percentage change has a specific direction (increase or decrease) from an original value. Percentage difference compares two values without a specific reference point. For example, going from 50 to 75 is a 50% increase, while the percentage difference between them is 40%."
  - q: "How do I calculate a percentage increase?"
    a: "To calculate percentage increase: ((New Value - Original Value) ÷ Original Value) × 100. For example, if a price increases from $50 to $60: ((60-50) ÷ 50) × 100 = 20% increase."
  - q: "Can percentages be greater than 100%?"
    a: "Yes! Percentages over 100% are common. For example, if something doubles in size, that's a 100% increase. If it triples, that's a 200% increase. In our calculator, you can work with any percentage value."
  - q: "How do I add or subtract a percentage from a number?"
    a: "To add X% to a number, multiply the number by (1 + X/100). To subtract X%, multiply by (1 - X/100). For example, adding 20% to 50: 50 × 1.20 = 60. Our calculator handles this automatically."
  - q: "What's the formula for reverse percentage calculation?"
    a: "To find the original value before a percentage increase: Original = Final ÷ (1 + Percentage/100). Before a decrease: Original = Final ÷ (1 - Percentage/100). This is useful for finding pre-sale prices."
  - q: "Why do I get different results calculating percentage increase vs decrease?"
    a: "Because the base value changes. A 50% decrease from 100 gives you 50. But a 50% increase from 50 gives you 75, not 100. This is because percentages are always relative to the starting value."
  - q: "How do I calculate compound percentages?"
    a: "For compound percentages, multiply the decimal forms together. For example, a 10% increase followed by a 20% increase: 1.10 × 1.20 = 1.32, or a 32% total increase. Don't just add the percentages!"
---

<style>
  :root {
    /* Sunset Glow Color Scheme */
    --pc-gradient-1: #f2709c;
    --pc-gradient-2: #ff9472;
    --pc-gradient-3: #f9d423;
    --pc-gradient-4: #ff4e50;
    --pc-bg: #1a0e2e;
    --pc-surface: #2d1b4e;
    --pc-surface-light: #3d2861;
    --pc-text: #ffffff;
    --pc-text-dim: #b8a3d1;
    --pc-accent: #f9d423;
    --pc-border: rgba(255, 255, 255, 0.1);
    --pc-success: #4ade80;
    --pc-error: #ff4e50;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .pc-wrapper {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--pc-bg);
    color: var(--pc-text);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  
  /* Animated Background */
  .pc-bg-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .pc-bg-circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.4;
    animation: float 20s ease-in-out infinite;
  }
  
  .pc-bg-circle:nth-child(1) {
    width: 600px;
    height: 600px;
    background: var(--pc-gradient-1);
    top: -200px;
    left: -200px;
    animation-duration: 25s;
  }
  
  .pc-bg-circle:nth-child(2) {
    width: 800px;
    height: 800px;
    background: var(--pc-gradient-2);
    bottom: -300px;
    right: -300px;
    animation-duration: 30s;
    animation-delay: 5s;
  }
  
  .pc-bg-circle:nth-child(3) {
    width: 500px;
    height: 500px;
    background: var(--pc-gradient-3);
    top: 50%;
    left: 50%;
    animation-duration: 35s;
    animation-delay: 10s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -30px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }
  
  .pc-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    z-index: 1;
  }
  
  .pc-header {
    text-align: center;
    margin-bottom: 3rem;
    animation: slideDown 0.8s ease;
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .pc-title {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--pc-gradient-1), var(--pc-gradient-2), var(--pc-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px rgba(249, 212, 35, 0.3);
  }
  
  @media (max-width: 768px) {
    .pc-title { font-size: 2.5rem; }
  }
  
  .pc-calculator-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .pc-calc-card {
    background: var(--pc-surface);
    border-radius: 24px;
    padding: 2.5rem;
    border: 1px solid var(--pc-border);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    animation: fadeIn 0.8s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .pc-calc-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--pc-gradient-1), var(--pc-gradient-2), var(--pc-gradient-3));
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  .pc-calc-card:hover::before {
    transform: scaleX(1);
  }
  
  .pc-calc-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .pc-calc-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--pc-accent);
  }
  
  .pc-input-group {
    margin-bottom: 1.5rem;
  }
  
  .pc-input-label {
    display: block;
    font-size: 0.875rem;
    color: var(--pc-text-dim);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .pc-input {
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--pc-surface-light);
    border: 2px solid var(--pc-border);
    border-radius: 12px;
    color: var(--pc-text);
    font-size: 1.25rem;
    transition: all 0.3s ease;
  }
  
  .pc-input:focus {
    outline: none;
    border-color: var(--pc-gradient-2);
    box-shadow: 0 0 20px rgba(255, 148, 114, 0.3);
  }
  
  .pc-input-row {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 1rem;
    align-items: center;
  }
  
  .pc-operator {
    font-size: 1.5rem;
    color: var(--pc-accent);
    font-weight: 700;
  }
  
  .pc-calculate-btn {
    width: 100%;
    padding: 1.25rem;
    background: linear-gradient(135deg, var(--pc-gradient-1), var(--pc-gradient-2));
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 1rem;
  }
  
  .pc-calculate-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(242, 112, 156, 0.4);
  }
  
  .pc-result {
    margin-top: 1.5rem;
    padding: 1.5rem;
    background: var(--pc-surface-light);
    border-radius: 12px;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }
  
  .pc-result.show {
    opacity: 1;
    transform: translateY(0);
  }
  
  .pc-result-value {
    font-size: 2.5rem;
    font-weight: 300;
    background: linear-gradient(135deg, var(--pc-gradient-2), var(--pc-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .pc-result-label {
    color: var(--pc-text-dim);
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
  
  .pc-visual-display {
    background: var(--pc-surface);
    border-radius: 24px;
    padding: 2.5rem;
    margin-bottom: 3rem;
    border: 1px solid var(--pc-border);
    text-align: center;
  }
  
  .pc-percentage-bar {
    width: 100%;
    height: 60px;
    background: var(--pc-surface-light);
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    margin: 2rem 0;
  }
  
  .pc-percentage-fill {
    height: 100%;
    background: linear-gradient(135deg, var(--pc-gradient-1), var(--pc-gradient-2));
    border-radius: 30px;
    transition: width 0.8s ease;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1.5rem;
  }
  
  .pc-percentage-text {
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
  }
  
  .pc-quick-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  
  .pc-quick-btn {
    padding: 0.75rem;
    background: var(--pc-surface-light);
    border: 2px solid var(--pc-border);
    border-radius: 8px;
    color: var(--pc-text);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
  }
  
  .pc-quick-btn:hover {
    border-color: var(--pc-gradient-2);
    color: var(--pc-gradient-2);
    transform: scale(1.05);
  }
  
  .pc-history {
    background: var(--pc-surface);
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 3rem;
    border: 1px solid var(--pc-border);
  }
  
  .pc-history-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--pc-text);
  }
  
  .pc-history-item {
    padding: 1rem;
    background: var(--pc-surface-light);
    border-radius: 8px;
    margin-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
  }
  
  .pc-history-item:hover {
    transform: translateX(5px);
  }
  
  .pc-related-tools {
    margin-bottom: 3rem;
  }
  
  .pc-section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--pc-text);
  }
  
  .pc-tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .pc-tool-card {
    background: var(--pc-surface);
    border-radius: 20px;
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    border: 1px solid var(--pc-border);
    text-align: center;
  }
  
  .pc-tool-card:hover {
    transform: translateY(-5px);
    border-color: var(--pc-gradient-2);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  .pc-tool-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1rem;
    background: linear-gradient(135deg, var(--pc-gradient-1), var(--pc-gradient-2));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
  
  .pc-tool-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .pc-tool-desc {
    color: var(--pc-text-dim);
    font-size: 0.9rem;
  }
  
  .pc-faq-section {
    margin-top: 3rem;
  }
  
  .pc-faq-container {
    background: var(--pc-surface);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid var(--pc-border);
  }
  
  .pc-faq-item {
    border-bottom: 1px solid var(--pc-border);
    padding: 0;
  }
  
  .pc-faq-item:last-child {
    border-bottom: none;
  }
  
  .pc-faq-question {
    width: 100%;
    padding: 1.5rem 2rem;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--pc-text);
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
  }
  
  .pc-faq-question:hover {
    color: var(--pc-gradient-2);
    background: rgba(255, 148, 114, 0.05);
  }
  
  .pc-faq-q {
    flex: 1;
    padding-right: 1rem;
  }
  
  .pc-faq-arrow {
    transition: transform 0.3s ease;
    color: var(--pc-gradient-2);
    flex-shrink: 0;
  }
  
  .pc-faq-item.active .pc-faq-arrow {
    transform: rotate(180deg);
  }
  
  .pc-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .pc-faq-item.active .pc-faq-answer {
    max-height: 500px;
  }
  
  .pc-faq-answer p {
    padding: 0 2rem 1.5rem 2rem;
    color: var(--pc-text-dim);
    line-height: 1.8;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .pc-container { padding: 1rem; }
    .pc-calculator-grid { grid-template-columns: 1fr; }
    .pc-calc-card { padding: 1.5rem; }
  }
</style>

<div class="pc-wrapper">
  <div class="pc-bg-wrapper">
    <div class="pc-bg-circle"></div>
    <div class="pc-bg-circle"></div>
    <div class="pc-bg-circle"></div>
  </div>
  
  <div class="pc-container">
    <header class="pc-header">
      <h1 class="pc-title">Percentage Calculator</h1>
    </header>
    
    <div class="pc-visual-display">
      <h2 style="margin-bottom: 1rem; color: var(--pc-text);">Visual Percentage</h2>
      <div class="pc-percentage-bar">
        <div class="pc-percentage-fill" id="visualBar" style="width: 50%">
          <span class="pc-percentage-text" id="visualText">50%</span>
        </div>
      </div>
      <div class="pc-quick-buttons">
        <button class="pc-quick-btn" onclick="setVisualPercentage(10)">10%</button>
        <button class="pc-quick-btn" onclick="setVisualPercentage(25)">25%</button>
        <button class="pc-quick-btn" onclick="setVisualPercentage(50)">50%</button>
        <button class="pc-quick-btn" onclick="setVisualPercentage(75)">75%</button>
        <button class="pc-quick-btn" onclick="setVisualPercentage(100)">100%</button>
      </div>
    </div>
    
    <div class="pc-calculator-grid">
      <!-- What is X% of Y? -->
      <div class="pc-calc-card">
        <h3 class="pc-calc-title">What is X% of Y?</h3>
        <div class="pc-input-group">
          <label class="pc-input-label">What is</label>
          <div class="pc-input-row">
            <input type="number" class="pc-input" id="percent1" placeholder="20" value="20">
            <span class="pc-operator">%</span>
            <span style="color: var(--pc-text-dim)">of</span>
          </div>
        </div>
        <div class="pc-input-group">
          <input type="number" class="pc-input" id="of1" placeholder="100" value="100">
        </div>
        <button class="pc-calculate-btn" onclick="calculatePercentOf()">Calculate</button>
        <div class="pc-result" id="result1">
          <div class="pc-result-value">20</div>
          <div class="pc-result-label">20% of 100 = 20</div>
        </div>
      </div>
      
      <!-- X is what % of Y? -->
      <div class="pc-calc-card">
        <h3 class="pc-calc-title">X is what % of Y?</h3>
        <div class="pc-input-group">
          <input type="number" class="pc-input" id="is2" placeholder="25" value="25">
          <label class="pc-input-label" style="margin-top: 0.5rem;">is what % of</label>
        </div>
        <div class="pc-input-group">
          <input type="number" class="pc-input" id="of2" placeholder="100" value="100">
        </div>
        <button class="pc-calculate-btn" onclick="calculateWhatPercent()">Calculate</button>
        <div class="pc-result" id="result2">
          <div class="pc-result-value">25%</div>
          <div class="pc-result-label">25 is 25% of 100</div>
        </div>
      </div>
      
      <!-- Percentage Change -->
      <div class="pc-calc-card">
        <h3 class="pc-calc-title">Percentage Change</h3>
        <div class="pc-input-group">
          <label class="pc-input-label">From</label>
          <input type="number" class="pc-input" id="from3" placeholder="50" value="50">
        </div>
        <div class="pc-input-group">
          <label class="pc-input-label">To</label>
          <input type="number" class="pc-input" id="to3" placeholder="75" value="75">
        </div>
        <button class="pc-calculate-btn" onclick="calculatePercentChange()">Calculate</button>
        <div class="pc-result" id="result3">
          <div class="pc-result-value">50%</div>
          <div class="pc-result-label">50% increase</div>
        </div>
      </div>
      
      <!-- Add/Subtract Percentage -->
      <div class="pc-calc-card">
        <h3 class="pc-calc-title">Add/Subtract Percentage</h3>
        <div class="pc-input-group">
          <label class="pc-input-label">Number</label>
          <input type="number" class="pc-input" id="base4" placeholder="100" value="100">
        </div>
        <div class="pc-input-group">
          <label class="pc-input-label">Add/Subtract</label>
          <div style="display: grid; grid-template-columns: auto 1fr; gap: 0.5rem;">
            <select class="pc-input" id="operation4" style="width: auto;">
              <option value="add">+</option>
              <option value="subtract">−</option>
            </select>
            <div class="pc-input-row" style="grid-template-columns: 1fr auto;">
              <input type="number" class="pc-input" id="percent4" placeholder="20" value="20">
              <span class="pc-operator">%</span>
            </div>
          </div>
        </div>
        <button class="pc-calculate-btn" onclick="calculateAddSubtract()">Calculate</button>
        <div class="pc-result" id="result4">
          <div class="pc-result-value">120</div>
          <div class="pc-result-label">100 + 20% = 120</div>
        </div>
      </div>
    </div>
    
    <div class="pc-history" id="historySection" style="display: none;">
      <h3 class="pc-history-title">Recent Calculations</h3>
      <div id="historyList"></div>
    </div>
    
    <div class="pc-related-tools">
      <h2 class="pc-section-title">Related Tools</h2>
      <div class="pc-tools-grid">
        <a href="#" class="pc-tool-card">
          <div class="pc-tool-icon">⅔</div>
          <div class="pc-tool-name">Fraction Calculator</div>
          <div class="pc-tool-desc">Add, subtract, multiply fractions</div>
        </a>
        <a href="#" class="pc-tool-card">
          <div class="pc-tool-icon">⚖️</div>
          <div class="pc-tool-name">Ratio Calculator</div>
          <div class="pc-tool-desc">Simplify and compare ratios</div>
        </a>
        <a href="#" class="pc-tool-card">
          <div class="pc-tool-icon">🏷️</div>
          <div class="pc-tool-name">Discount Calculator</div>
          <div class="pc-tool-desc">Calculate sale prices and savings</div>
        </a>
        <a href="#" class="pc-tool-card">
          <div class="pc-tool-icon">💵</div>
          <div class="pc-tool-name">Tip Calculator</div>
          <div class="pc-tool-desc">Calculate tips and split bills</div>
        </a>
      </div>
    </div>
    
    <div class="pc-faq-section">
      <h2 class="pc-section-title">Frequently Asked Questions</h2>
      
      <div class="pc-faq-container">
        <div class="pc-faq-item">
          <button class="pc-faq-question" onclick="toggleFaq(this)">
            <span class="pc-faq-q">How do I calculate what percentage one number is of another?</span>
            <svg class="pc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="pc-faq-answer">
            <p>To find what percentage A is of B, divide A by B and multiply by 100. For example, to find what percentage 25 is of 200: (25 ÷ 200) × 100 = 12.5%. Our calculator does this automatically when you select 'What % is X of Y'.</p>
          </div>
        </div>
        
        <div class="pc-faq-item">
          <button class="pc-faq-question" onclick="toggleFaq(this)">
            <span class="pc-faq-q">What's the difference between percentage change and percentage difference?</span>
            <svg class="pc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="pc-faq-answer">
            <p>Percentage change has a specific direction (increase or decrease) from an original value. Percentage difference compares two values without a specific reference point. For example, going from 50 to 75 is a 50% increase, while the percentage difference between them is 40%.</p>
          </div>
        </div>
        
        <div class="pc-faq-item">
          <button class="pc-faq-question" onclick="toggleFaq(this)">
            <span class="pc-faq-q">How do I calculate a percentage increase?</span>
            <svg class="pc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="pc-faq-answer">
            <p>To calculate percentage increase: ((New Value - Original Value) ÷ Original Value) × 100. For example, if a price increases from $50 to $60: ((60-50) ÷ 50) × 100 = 20% increase.</p>
          </div>
        </div>
        
        <div class="pc-faq-item">
          <button class="pc-faq-question" onclick="toggleFaq(this)">
            <span class="pc-faq-q">Can percentages be greater than 100%?</span>
            <svg class="pc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="pc-faq-answer">
            <p>Yes! Percentages over 100% are common. For example, if something doubles in size, that's a 100% increase. If it triples, that's a 200% increase. In our calculator, you can work with any percentage value.</p>
          </div>
        </div>
        
        <div class="pc-faq-item">
          <button class="pc-faq-question" onclick="toggleFaq(this)">
            <span class="pc-faq-q">How do I add or subtract a percentage from a number?</span>
            <svg class="pc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="pc-faq-answer">
            <p>To add X% to a number, multiply the number by (1 + X/100). To subtract X%, multiply by (1 - X/100). For example, adding 20% to 50: 50 × 1.20 = 60. Our calculator handles this automatically.</p>
          </div>
        </div>
        
        <div class="pc-faq-item">
          <button class="pc-faq-question" onclick="toggleFaq(this)">
            <span class="pc-faq-q">What's the formula for reverse percentage calculation?</span>
            <svg class="pc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="pc-faq-answer">
            <p>To find the original value before a percentage increase: Original = Final ÷ (1 + Percentage/100). Before a decrease: Original = Final ÷ (1 - Percentage/100). This is useful for finding pre-sale prices.</p>
          </div>
        </div>
        
        <div class="pc-faq-item">
          <button class="pc-faq-question" onclick="toggleFaq(this)">
            <span class="pc-faq-q">Why do I get different results calculating percentage increase vs decrease?</span>
            <svg class="pc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="pc-faq-answer">
            <p>Because the base value changes. A 50% decrease from 100 gives you 50. But a 50% increase from 50 gives you 75, not 100. This is because percentages are always relative to the starting value.</p>
          </div>
        </div>
        
        <div class="pc-faq-item">
          <button class="pc-faq-question" onclick="toggleFaq(this)">
            <span class="pc-faq-q">How do I calculate compound percentages?</span>
            <svg class="pc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="pc-faq-answer">
            <p>For compound percentages, multiply the decimal forms together. For example, a 10% increase followed by a 20% increase: 1.10 × 1.20 = 1.32, or a 32% total increase. Don't just add the percentages!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  let history = [];
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    calculatePercentOf();
    calculateWhatPercent();
    calculatePercentChange();
    calculateAddSubtract();
  });
  
  function setVisualPercentage(percent) {
    const bar = document.getElementById('visualBar');
    const text = document.getElementById('visualText');
    bar.style.width = percent + '%';
    text.textContent = percent + '%';
  }
  
  function calculatePercentOf() {
    const percent = parseFloat(document.getElementById('percent1').value) || 0;
    const of = parseFloat(document.getElementById('of1').value) || 0;
    const result = (percent / 100) * of;
    
    showResult('result1', result, `${percent}% of ${of} = ${formatNumber(result)}`);
    addToHistory(`${percent}% of ${of} = ${formatNumber(result)}`);
    setVisualPercentage(Math.min(percent, 100));
  }
  
  function calculateWhatPercent() {
    const is = parseFloat(document.getElementById('is2').value) || 0;
    const of = parseFloat(document.getElementById('of2').value) || 0;
    
    if (of === 0) {
      showResult('result2', 'Error', 'Cannot divide by zero');
      return;
    }
    
    const percent = (is / of) * 100;
    showResult('result2', percent + '%', `${is} is ${formatNumber(percent)}% of ${of}`);
    addToHistory(`${is} is ${formatNumber(percent)}% of ${of}`);
  }
  
  function calculatePercentChange() {
    const from = parseFloat(document.getElementById('from3').value) || 0;
    const to = parseFloat(document.getElementById('to3').value) || 0;
    
    if (from === 0) {
      showResult('result3', 'Error', 'Cannot calculate change from zero');
      return;
    }
    
    const change = ((to - from) / Math.abs(from)) * 100;
    const changeType = change >= 0 ? 'increase' : 'decrease';
    
    showResult('result3', Math.abs(change).toFixed(2) + '%', 
      `${formatNumber(Math.abs(change))}% ${changeType}`);
    addToHistory(`From ${from} to ${to}: ${formatNumber(Math.abs(change))}% ${changeType}`);
  }
  
  function calculateAddSubtract() {
    const base = parseFloat(document.getElementById('base4').value) || 0;
    const percent = parseFloat(document.getElementById('percent4').value) || 0;
    const operation = document.getElementById('operation4').value;
    
    let result;
    let label;
    
    if (operation === 'add') {
            result = base * (1 + percent / 100);
      label = `${base} + ${percent}% = ${formatNumber(result)}`;
    } else {
      result = base * (1 - percent / 100);
      label = `${base} − ${percent}% = ${formatNumber(result)}`;
    }
    
    showResult('result4', formatNumber(result), label);
    addToHistory(label);
  }
  
  function showResult(elementId, value, label) {
    const resultDiv = document.getElementById(elementId);
    const valueDiv = resultDiv.querySelector('.pc-result-value');
    const labelDiv = resultDiv.querySelector('.pc-result-label');
    
    valueDiv.textContent = value;
    labelDiv.textContent = label;
    
    resultDiv.classList.add('show');
  }
  
  function formatNumber(num) {
    if (isNaN(num)) return 'Error';
    if (!isFinite(num)) return num > 0 ? '∞' : '-∞';
    
    // For percentages, show up to 2 decimal places
    if (Math.abs(num - Math.floor(num)) > 0.001) {
      return num.toFixed(2).replace(/\.?0+$/, '');
    }
    
    // For large numbers, use thousand separators
    if (Math.abs(num) >= 1000) {
      return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
    }
    
    return num.toString();
  }
  
  function addToHistory(calculation) {
    history.unshift({
      calc: calculation,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    
    if (history.length > 5) history.pop();
    
    updateHistoryDisplay();
  }
  
  function updateHistoryDisplay() {
    const historySection = document.getElementById('historySection');
    const historyList = document.getElementById('historyList');
    
    if (history.length === 0) {
      historySection.style.display = 'none';
      return;
    }
    
    historySection.style.display = 'block';
    historyList.innerHTML = history.map(item => `
      <div class="pc-history-item">
        <span>${item.calc}</span>
        <span style="color: var(--pc-text-dim); font-size: 0.875rem;">${item.time}</span>
      </div>
    `).join('');
  }
  
  // FAQ Toggle
  function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.pc-faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // If this item wasn't active, open it
    if (!wasActive) {
      faqItem.classList.add('active');
    }
  }
  
  // Add Enter key support for all inputs
  document.querySelectorAll('.pc-input').forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const card = e.target.closest('.pc-calc-card');
        const btn = card.querySelector('.pc-calculate-btn');
        if (btn) btn.click();
      }
    });
  });
  
  // Auto-calculate on input change
  document.querySelectorAll('.pc-input, select').forEach(element => {
    element.addEventListener('input', () => {
      // Trigger calculation for the respective card
      const card = element.closest('.pc-calc-card');
      if (card) {
        setTimeout(() => {
          const btn = card.querySelector('.pc-calculate-btn');
          if (btn) btn.click();
        }, 300);
      }
    });
  });
</script>
