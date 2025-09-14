---
title: "Number Square Calculator - Calculate Square & Perfect Squares"
description: "Free online square calculator to find squares, square roots, perfect squares, and more. Features visual representations and step-by-step solutions."
localtitle: "Number Square Calculator"
layout: tool
categories: [mathCalc, calculators]
permalink: /calculators/math/number-square-calculator
faq:
  - q: "What's the difference between square and square root?"
    a: "Square means multiplying a number by itself (5² = 5 × 5 = 25). Square root is the opposite - finding what number multiplied by itself gives you the original number (√25 = 5). They're inverse operations."
  - q: "How do I know if a number is a perfect square?"
    a: "A perfect square is a number that results from multiplying an integer by itself. Our calculator instantly tells you if your number is a perfect square. For example, 16 is a perfect square (4²), but 17 is not."
  - q: "Can I calculate square roots of negative numbers?"
    a: "In real numbers, you can't take the square root of a negative number. However, in complex numbers, this gives an imaginary result. Our calculator shows when a result would be imaginary."
  - q: "What's the largest number I can square?"
    a: "The calculator can handle very large numbers up to JavaScript's maximum safe integer (2^53 - 1). For most practical purposes, this is more than sufficient."
  - q: "How accurate are decimal square roots?"
    a: "Our calculator provides square roots accurate to 10 decimal places. For irrational square roots (like √2), we show the decimal approximation."
  - q: "What are squares used for in real life?"
    a: "Squares are everywhere! Area calculations (square footage), physics (E=mc²), statistics (standard deviation), computer graphics (distance calculations), and engineering (structural loads) all use squares."
  - q: "Why is 1 considered a perfect square?"
    a: "Because 1 × 1 = 1. By definition, a perfect square is any number that can be expressed as n², where n is an integer. Since 1 is 1², it's a perfect square."
  - q: "What's the square root of 0?"
    a: "The square root of 0 is 0, because 0 × 0 = 0. Zero is unique in that it's the only number that equals its own square root."
---

<style>
  :root {
    /* Aurora Borealis Color Scheme */
    --sq-gradient-1: #43cea2;
    --sq-gradient-2: #185a9d;
    --sq-gradient-3: #ba5370;
    --sq-gradient-4: #f4e2d8;
    --sq-bg: #0a0b1e;
    --sq-surface: #141629;
    --sq-surface-light: #1d1f3a;
    --sq-text: #ffffff;
    --sq-text-dim: #a8b2d1;
    --sq-accent: #43cea2;
    --sq-border: rgba(255, 255, 255, 0.08);
    --sq-success: #43cea2;
    --sq-warning: #ffd93d;
    --sq-error: #ba5370;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .sq-wrapper {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--sq-bg);
    color: var(--sq-text);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  
  /* Animated Background */
  .sq-bg-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.03;
    pointer-events: none;
    background-image: 
      repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);
    animation: slide 20s linear infinite;
  }
  
  @keyframes slide {
    0% { transform: translate(0, 0); }
    100% { transform: translate(70px, 70px); }
  }
  
  .sq-aurora {
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    pointer-events: none;
    opacity: 0.15;
  }
  
  .sq-aurora-1 {
    background: radial-gradient(ellipse at center, var(--sq-gradient-1) 0%, transparent 70%);
    animation: aurora1 15s ease-in-out infinite;
  }
  
  .sq-aurora-2 {
    background: radial-gradient(ellipse at center, var(--sq-gradient-2) 0%, transparent 70%);
    animation: aurora2 20s ease-in-out infinite;
  }
  
  .sq-aurora-3 {
    background: radial-gradient(ellipse at center, var(--sq-gradient-3) 0%, transparent 70%);
    animation: aurora3 25s ease-in-out infinite;
  }
  
  @keyframes aurora1 {
    0%, 100% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
    33% { transform: translate(30%, -20%) scale(1.2) rotate(120deg); }
    66% { transform: translate(-20%, 30%) scale(0.8) rotate(240deg); }
  }
  
  @keyframes aurora2 {
    0%, 100% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
    33% { transform: translate(-30%, 20%) scale(0.9) rotate(-120deg); }
    66% { transform: translate(20%, -30%) scale(1.1) rotate(-240deg); }
  }
  
  @keyframes aurora3 {
    0%, 100% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
    50% { transform: translate(25%, 25%) scale(1.3) rotate(180deg); }
  }
  
  .sq-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    z-index: 1;
  }
  
  .sq-header {
    text-align: center;
    margin-bottom: 4rem;
    animation: fadeInDown 0.8s ease;
  }
  
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .sq-title {
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--sq-gradient-1), var(--sq-gradient-2), var(--sq-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: gradientShift 5s ease infinite;
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .sq-main-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  @media (min-width: 1024px) {
    .sq-main-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .sq-input-card {
    background: var(--sq-surface);
    border-radius: 32px;
    padding: 3rem;
    border: 1px solid var(--sq-border);
    position: relative;
    overflow: hidden;
    animation: fadeInLeft 0.8s ease 0.2s both;
  }
  
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .sq-input-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, var(--sq-gradient-1), var(--sq-gradient-2), var(--sq-gradient-3));
    border-radius: 32px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  .sq-input-card:hover::before {
    opacity: 0.3;
  }
  
  .sq-input-label {
    font-size: 1rem;
    color: var(--sq-accent);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    margin-bottom: 1rem;
    display: block;
  }
  
  .sq-input-wrapper {
    position: relative;
    margin-bottom: 2rem;
  }
  
  .sq-number-input {
    width: 100%;
    padding: 1.5rem 2rem;
    font-size: 2rem;
    background: var(--sq-surface-light);
    border: 2px solid var(--sq-border);
    border-radius: 20px;
    color: var(--sq-text);
    transition: all 0.3s ease;
    font-weight: 300;
  }
  
  .sq-number-input:focus {
    outline: none;
    border-color: var(--sq-gradient-1);
    box-shadow: 0 0 30px rgba(67, 206, 162, 0.3);
  }
  
  .sq-input-hint {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--sq-text-dim);
    font-size: 0.875rem;
  }
  
  .sq-operation-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .sq-operation-btn {
    padding: 1.25rem;
    background: var(--sq-surface-light);
    border: 2px solid var(--sq-border);
    border-radius: 16px;
    color: var(--sq-text);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    position: relative;
    overflow: hidden;
  }
  
  .sq-operation-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(67, 206, 162, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  .sq-operation-btn:hover::before {
    width: 100%;
    height: 100%;
  }
  
  .sq-operation-btn:hover {
    border-color: var(--sq-gradient-1);
    transform: translateY(-2px);
  }
  
  .sq-operation-btn.active {
    background: linear-gradient(135deg, var(--sq-gradient-1), var(--sq-gradient-2));
    color: white;
    border-color: transparent;
  }
  
  .sq-calculate-btn {
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(135deg, var(--sq-gradient-1), var(--sq-gradient-2));
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .sq-calculate-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(67, 206, 162, 0.3);
  }
  
  .sq-visual-card {
    background: var(--sq-surface);
    border-radius: 32px;
    padding: 3rem;
    border: 1px solid var(--sq-border);
    animation: fadeInRight 0.8s ease 0.2s both;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 500px;
  }
  
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .sq-visual-display {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1;
    position: relative;
    margin-bottom: 2rem;
  }
  
  .sq-square-grid {
    display: grid;
    gap: 4px;
    width: 100%;
    height: 100%;
    padding: 2rem;
    background: var(--sq-surface-light);
    border-radius: 20px;
    border: 2px solid var(--sq-border);
  }
  
  .sq-square-unit {
    background: var(--sq-gradient-1);
    border-radius: 4px;
    opacity: 0;
    animation: popIn 0.3s ease forwards;
  }
  
  @keyframes popIn {
    from { transform: scale(0); opacity: 0; }
    to { transform: scale(1); opacity: 0.8; }
  }
  
  .sq-result-display {
    text-align: center;
    width: 100%;
  }
  
  .sq-result-value {
    font-size: 3rem;
    font-weight: 200;
    font-variant-numeric: tabular-nums;
    background: linear-gradient(135deg, var(--sq-gradient-1), var(--sq-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    word-break: break-all;
    max-width: 100%;
    overflow-wrap: break-word;
  }
  
  .sq-result-label {
    color: var(--sq-text-dim);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    word-break: break-all;
  }
  
  .sq-perfect-square-badge {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(67, 206, 162, 0.2);
    border: 2px solid var(--sq-gradient-1);
    border-radius: 30px;
    color: var(--sq-gradient-1);
    font-weight: 600;
    margin-top: 1rem;
    animation: pulse 2s ease infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  .sq-features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .sq-feature-card {
    background: var(--sq-surface);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid var(--sq-border);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .sq-feature-card:hover {
    transform: translateY(-5px);
    border-color: var(--sq-gradient-1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .sq-feature-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--sq-gradient-1), var(--sq-gradient-2));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .sq-feature-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--sq-text);
  }
  
  .sq-feature-value {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--sq-gradient-1);
    font-variant-numeric: tabular-nums;
    word-break: break-all;
    overflow-wrap: break-word;
  }
  
  .sq-perfect-squares-section {
    background: var(--sq-surface);
    border-radius: 32px;
    padding: 3rem;
    margin-bottom: 3rem;
    border: 1px solid var(--sq-border);
  }
  
  .sq-section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--sq-text);
  }
  
  .sq-squares-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }
  
  .sq-square-item {
    background: var(--sq-surface-light);
    border: 2px solid var(--sq-border);
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .sq-square-item:hover {
    border-color: var(--sq-gradient-1);
    transform: scale(1.05);
  }
  
  .sq-square-number {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--sq-gradient-1);
  }
  
  .sq-square-equals {
    color: var(--sq-text-dim);
    font-size: 0.875rem;
    margin: 0.25rem 0;
  }
  
  .sq-square-result {
    font-size: 1.25rem;
    color: var(--sq-text);
  }
  
  .sq-history {
    background: var(--sq-surface);
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 3rem;
    border: 1px solid var(--sq-border);
  }
  
  .sq-history-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: var(--sq-surface-light);
    border-radius: 12px;
    margin-bottom: 0.75rem;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  
  .sq-history-item:hover {
    transform: translateX(5px);
  }
  
  .sq-history-calc {
    word-break: break-all;
    flex: 1;
    margin-right: 1rem;
  }
  
  .sq-related-tools {
    margin-top: 4rem;
    margin-bottom: 3rem;
  }
  
  .sq-related-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--sq-text);
  }
  
  .sq-related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .sq-tool-card {
    background: var(--sq-surface);
    border-radius: 20px;
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--sq-border);
  }
  
  .sq-tool-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, rgba(67, 206, 162, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .sq-tool-card:hover::before {
    opacity: 1;
  }
  
  .sq-tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .sq-tool-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--sq-gradient-1), var(--sq-gradient-2));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .sq-tool-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .sq-tool-desc {
    color: var(--sq-text-dim);
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .sq-content {
    background: var(--sq-surface);
    border-radius: 32px;
    padding: 3rem;
    margin-top: 4rem;
    border: 1px solid var(--sq-border);
  }
  
  .sq-content h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--sq-gradient-1), var(--sq-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .sq-faq-section {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .sq-faq-container {
    background: var(--sq-surface);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid var(--sq-border);
  }

  .sq-faq-item {
    border-bottom: 1px solid var(--sq-border);
    padding: 0;
    margin: 0;
  }

  .sq-faq-item:last-child {
    border-bottom: none;
  }

  .sq-faq-question {
    width: 100%;
    padding: 1.5rem 2rem;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--sq-text);
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
  }

  .sq-faq-question:hover {
    color: var(--sq-gradient-1);
    background: rgba(67, 206, 162, 0.05);
  }

  .sq-faq-q {
    flex: 1;
    padding-right: 1rem;
  }

  .sq-faq-arrow {
    transition: transform 0.3s ease;
    color: var(--sq-gradient-1);
    flex-shrink: 0;
  }

  .sq-faq-item.active .sq-faq-arrow {
    transform: rotate(180deg);
  }

  .sq-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .sq-faq-item.active .sq-faq-answer {
    max-height: 500px;
  }

  .sq-faq-answer p {
    padding: 0 2rem 1.5rem 2rem;
    color: var(--sq-text-dim);
    line-height: 1.8;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .sq-title { font-size: 2.5rem; }
    .sq-container { padding: 1rem; }
    .sq-input-card, .sq-visual-card { padding: 2rem; }
    .sq-result-value { font-size: 2rem; }
    .sq-features-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="sq-wrapper">
  <div class="sq-bg-pattern"></div>
  <div class="sq-aurora sq-aurora-1"></div>
  <div class="sq-aurora sq-aurora-2"></div>
  <div class="sq-aurora sq-aurora-3"></div>
  
  <div class="sq-container">
    <header class="sq-header">
      <h1 class="sq-title">Number Square Calculator</h1>
    </header>
    
    <div class="sq-main-grid">
      <div class="sq-input-card">
        <label class="sq-input-label">Enter Your Number</label>
        <div class="sq-input-wrapper">
          <input type="number" class="sq-number-input" id="numberInput" placeholder="Enter any number" value="5">
          <span class="sq-input-hint">Press Enter</span>
        </div>
        
        <div class="sq-operation-grid">
          <button class="sq-operation-btn active" onclick="setOperation('square')" data-op="square">
            <div style="font-size: 1.5rem;">x²</div>
            <small style="opacity: 0.7; display: block; margin-top: 0.25rem;">Square</small>
          </button>
          <button class="sq-operation-btn" onclick="setOperation('sqrt')" data-op="sqrt">
            <div style="font-size: 1.5rem;">√x</div>
            <small style="opacity: 0.7; display: block; margin-top: 0.25rem;">Square Root</small>
          </button>
          <button class="sq-operation-btn" onclick="setOperation('cube')" data-op="cube">
            <div style="font-size: 1.5rem;">x³</div>
            <small style="opacity: 0.7; display: block; margin-top: 0.25rem;">Cube</small>
          </button>
          <button class="sq-operation-btn" onclick="setOperation('power')" data-op="power">
            <div style="font-size: 1.5rem;">xⁿ</div>
            <small style="opacity: 0.7; display: block; margin-top: 0.25rem;">Power</small>
          </button>
        </div>
        
        <div id="powerInput" style="display: none; margin-bottom: 1rem;">
          <input type="number" class="sq-number-input" id="exponentInput" placeholder="Enter exponent" style="font-size: 1.5rem;">
        </div>
        
        <button class="sq-calculate-btn" onclick="calculate()">Calculate</button>
      </div>
      
      <div class="sq-visual-card">
        <div class="sq-visual-display" id="visualDisplay">
          <div class="sq-square-grid" id="squareGrid"></div>
        </div>
        <div class="sq-result-display">
          <div class="sq-result-value" id="resultValue">25</div>
          <div class="sq-result-label" id="resultLabel">5² = 25</div>
          <div id="perfectSquareBadge" style="display: none;">
            <div class="sq-perfect-square-badge">Perfect Square!</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="sq-features-grid">
      <div class="sq-feature-card" onclick="calculate()">
        <div class="sq-feature-icon">📊</div>
        <div class="sq-feature-title">Square</div>
        <div class="sq-feature-value" id="squareValue">25</div>
      </div>
      <div class="sq-feature-card" onclick="setOperation('sqrt')">
        <div class="sq-feature-icon">√</div>
        <div class="sq-feature-title">Square Root</div>
        <div class="sq-feature-value" id="sqrtValue">2.236...</div>
      </div>
      <div class="sq-feature-card" onclick="setOperation('cube')">
        <div class="sq-feature-icon">³</div>
        <div class="sq-feature-title">Cube</div>
        <div class="sq-feature-value" id="cubeValue">125</div>
      </div>
      <div class="sq-feature-card">
        <div class="sq-feature-icon">🎯</div>
        <div class="sq-feature-title">Factors</div>
        <div class="sq-feature-value" id="factorsValue">1, 5</div>
      </div>
    </div>
    
    <div class="sq-perfect-squares-section">
      <h2 class="sq-section-title">Perfect Squares (1-20)</h2>
      <div class="sq-squares-grid" id="perfectSquaresGrid"></div>
    </div>
    
    <div class="sq-history" id="historySection" style="display: none;">
      <h2 class="sq-section-title">Calculation History</h2>
      <div id="historyList"></div>
    </div>
    
    <div class="sq-related-tools">
      <h2 class="sq-related-title">Related Tools</h2>
      <div class="sq-related-grid">
        <a href="#" class="sq-tool-card">
          <div class="sq-tool-icon">³</div>
          <div class="sq-tool-name">Cube Calculator</div>
          <div class="sq-tool-desc">Calculate cubes and cube roots</div>
        </a>
        <a href="#" class="sq-tool-card">
          <div class="sq-tool-icon">xⁿ</div>
          <div class="sq-tool-name">Exponent Calculator</div>
          <div class="sq-tool-desc">Calculate any power of numbers</div>
        </a>
        <a href="#" class="sq-tool-card">
          <div class="sq-tool-icon">%</div>
          <div class="sq-tool-name">Percentage Calculator</div>
          <div class="sq-tool-desc">Find percentages and changes</div>
        </a>
        <a href="#" class="sq-tool-card">
          <div class="sq-tool-icon">🔢</div>
          <div class="sq-tool-name">Prime Number Checker</div>
          <div class="sq-tool-desc">Check if a number is prime</div>
        </a>
      </div>
    </div>
    
    <div class="sq-content">
      <h2>Quick Guide</h2>
      <p style="color: var(--sq-text-dim); line-height: 1.8; margin-bottom: 1.5rem;">
        Calculate squares, square roots, cubes, and any power instantly. Features visual grid representation for perfect squares.
      </p>
      
      <ul style="color: var(--sq-text-dim); padding-left: 2rem; line-height: 1.8;">
        <li>Enter any number and select operation</li>
        <li>Visual grid shows square representation (up to 20×20)</li>
        <li>Automatic perfect square detection</li>
        <li>Calculate any power (x^n)</li>
        <li>View calculation history</li>
      </ul>
    </div>
    
    <div class="sq-faq-section">
      <h2 class="sq-section-title">Frequently Asked Questions</h2>
      
      <div class="sq-faq-container">
        <div class="sq-faq-item">
          <button class="sq-faq-question" onclick="toggleFaq(this)">
            <span class="sq-faq-q">What's the difference between square and square root?</span>
            <svg class="sq-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sq-faq-answer">
            <p>Square means multiplying a number by itself (5² = 5 × 5 = 25). Square root is the opposite - finding what number multiplied by itself gives you the original number (√25 = 5). They're inverse operations.</p>
          </div>
        </div>
        
        <div class="sq-faq-item">
          <button class="sq-faq-question" onclick="toggleFaq(this)">
            <span class="sq-faq-q">How do I know if a number is a perfect square?</span>
            <svg class="sq-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sq-faq-answer">
            <p>A perfect square is a number that results from multiplying an integer by itself. Our calculator instantly tells you if your number is a perfect square. For example, 16 is a perfect square (4²), but 17 is not.</p>
          </div>
        </div>
        
        <div class="sq-faq-item">
          <button class="sq-faq-question" onclick="toggleFaq(this)">
            <span class="sq-faq-q">Can I calculate square roots of negative numbers?</span>
            <svg class="sq-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sq-faq-answer">
            <p>In real numbers, you can't take the square root of a negative number. However, in complex numbers, this gives an imaginary result. Our calculator shows when a result would be imaginary.</p>
          </div>
        </div>
        
        <div class="sq-faq-item">
          <button class="sq-faq-question" onclick="toggleFaq(this)">
            <span class="sq-faq-q">What's the largest number I can square?</span>
            <svg class="sq-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sq-faq-answer">
            <p>The calculator can handle very large numbers up to JavaScript's maximum safe integer (2^53 - 1). For most practical purposes, this is more than sufficient.</p>
          </div>
        </div>
        
        <div class="sq-faq-item">
          <button class="sq-faq-question" onclick="toggleFaq(this)">
            <span class="sq-faq-q">How accurate are decimal square roots?</span>
            <svg class="sq-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sq-faq-answer">
            <p>Our calculator provides square roots accurate to 10 decimal places. For irrational square roots (like √2), we show the decimal approximation.</p>
          </div>
        </div>
        
        <div class="sq-faq-item">
                    <button class="sq-faq-question" onclick="toggleFaq(this)">
            <span class="sq-faq-q">What are squares used for in real life?</span>
            <svg class="sq-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sq-faq-answer">
            <p>Squares are everywhere! Area calculations (square footage), physics (E=mc²), statistics (standard deviation), computer graphics (distance calculations), and engineering (structural loads) all use squares.</p>
          </div>
        </div>
        
        <div class="sq-faq-item">
          <button class="sq-faq-question" onclick="toggleFaq(this)">
            <span class="sq-faq-q">Why is 1 considered a perfect square?</span>
            <svg class="sq-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sq-faq-answer">
            <p>Because 1 × 1 = 1. By definition, a perfect square is any number that can be expressed as n², where n is an integer. Since 1 is 1², it's a perfect square.</p>
          </div>
        </div>
        
        <div class="sq-faq-item">
          <button class="sq-faq-question" onclick="toggleFaq(this)">
            <span class="sq-faq-q">What's the square root of 0?</span>
            <svg class="sq-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sq-faq-answer">
            <p>The square root of 0 is 0, because 0 × 0 = 0. Zero is unique in that it's the only number that equals its own square root.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  let currentOperation = 'square';
  let history = [];
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    generatePerfectSquares();
    calculate();
    
    // Enter key support
    document.getElementById('numberInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') calculate();
    });
  });
  
  function setOperation(op) {
    currentOperation = op;
    document.querySelectorAll('.sq-operation-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-op="${op}"]`).classList.add('active');
    
    // Show/hide power input
    document.getElementById('powerInput').style.display = op === 'power' ? 'block' : 'none';
    
    calculate();
  }
  
  function calculate() {
    const num = parseFloat(document.getElementById('numberInput').value) || 0;
    let result, label, visual = true;
    
    switch(currentOperation) {
      case 'square':
        result = num * num;
        label = `${formatInputNumber(num)}² = ${formatNumber(result)}`;
        updateVisualGrid(num);
        updateFeatures(num);
        checkPerfectSquare(result);
        break;
        
      case 'sqrt':
        if (num < 0) {
          result = `${Math.sqrt(Math.abs(num)).toFixed(10).replace(/\.?0+$/, '')}i`;
          label = `√${formatInputNumber(num)} = ${result}`;
        } else {
          result = Math.sqrt(num);
          label = `√${formatInputNumber(num)} = ${formatNumber(result)}`;
        }
        visual = false;
        checkPerfectSquare(num);
        break;
        
      case 'cube':
        result = num * num * num;
        label = `${formatInputNumber(num)}³ = ${formatNumber(result)}`;
        visual = false;
        break;
        
      case 'power':
        const exp = parseFloat(document.getElementById('exponentInput').value) || 2;
        result = Math.pow(num, exp);
        label = `${formatInputNumber(num)}^${exp} = ${formatNumber(result)}`;
        visual = false;
        break;
    }
    
    // Update display
    document.getElementById('resultValue').textContent = typeof result === 'string' ? result : formatNumber(result);
    document.getElementById('resultLabel').textContent = label;
    
    if (!visual) {
      document.getElementById('squareGrid').innerHTML = '<div style="text-align: center; color: var(--sq-text-dim); padding: 3rem;">Visual representation available for squares only</div>';
    }
    
    // Add to history
    addToHistory(label);
  }
  
  function updateVisualGrid(num) {
    const grid = document.getElementById('squareGrid');
    const absNum = Math.abs(Math.floor(num));
    
    if (absNum > 20) {
      grid.innerHTML = '<div style="text-align: center; color: var(--sq-text-dim); padding: 3rem;">Too large to visualize (max: 20)</div>';
      return;
    }
    
    if (absNum === 0) {
      grid.innerHTML = '<div style="text-align: center; color: var(--sq-text-dim); padding: 3rem;">0² = 0</div>';
      return;
    }
    
    grid.style.gridTemplateColumns = `repeat(${absNum}, 1fr)`;
    grid.innerHTML = '';
    
    for (let i = 0; i < absNum * absNum; i++) {
      const unit = document.createElement('div');
      unit.className = 'sq-square-unit';
      unit.style.animationDelay = `${i * 0.01}s`;
      grid.appendChild(unit);
    }
  }
  
  function updateFeatures(num) {
    document.getElementById('squareValue').textContent = formatNumber(num * num);
    document.getElementById('sqrtValue').textContent = num < 0 ? `${Math.sqrt(Math.abs(num)).toFixed(3)}i` : formatNumber(Math.sqrt(Math.abs(num)));
    document.getElementById('cubeValue').textContent = formatNumber(num * num * num);
    
    // Calculate factors
    const factors = [];
    const absNum = Math.abs(Math.floor(num));
    if (absNum > 0) {
      for (let i = 1; i <= Math.min(absNum, 1000); i++) {
        if (absNum % i === 0) factors.push(i);
      }
      if (absNum > 1000) {
        document.getElementById('factorsValue').textContent = 'Too large';
      } else {
        document.getElementById('factorsValue').textContent = factors.join(', ');
      }
    } else {
      document.getElementById('factorsValue').textContent = 'N/A';
    }
  }
  
  function checkPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    const isPerfect = sqrt === Math.floor(sqrt) && num > 0;
    document.getElementById('perfectSquareBadge').style.display = isPerfect ? 'block' : 'none';
  }
  
  function formatNumber(num) {
    if (isNaN(num)) return 'Invalid';
    if (!isFinite(num)) return num > 0 ? '∞' : '-∞';
    if (Number.isInteger(num)) {
      if (Math.abs(num) > 1e15) return num.toExponential(3);
      return num.toLocaleString();
    }
    if (Math.abs(num) > 1e15 || Math.abs(num) < 1e-10) return num.toExponential(3);
    return parseFloat(num.toFixed(10).replace(/\.?0+$/, '')).toString();
  }
  
  function formatInputNumber(num) {
    if (Math.abs(num) > 1e6) return num.toExponential(2);
    return num.toString();
  }
  
  function generatePerfectSquares() {
    const grid = document.getElementById('perfectSquaresGrid');
    for (let i = 1; i <= 20; i++) {
      const item = document.createElement('div');
      item.className = 'sq-square-item';
      item.innerHTML = `
        <div class="sq-square-number">${i}²</div>
        <div class="sq-square-equals">=</div>
        <div class="sq-square-result">${i * i}</div>
      `;
      item.onclick = () => {
        document.getElementById('numberInput').value = i;
        setOperation('square');
      };
      grid.appendChild(item);
    }
  }
  
  function addToHistory(calculation) {
    history.unshift({
      calc: calculation,
      time: new Date().toLocaleTimeString()
    });
    if (history.length > 10) history.pop();
    
    const historySection = document.getElementById('historySection');
    const historyList = document.getElementById('historyList');
    
    historySection.style.display = 'block';
    historyList.innerHTML = history.map(item => `
      <div class="sq-history-item">
        <span class="sq-history-calc">${item.calc}</span>
        <span style="color: var(--sq-text-dim); white-space: nowrap;">${item.time}</span>
      </div>
    `).join('');
  }
  
  // FAQ Toggle Function
  function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.sq-faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // If this item wasn't active, open it
    if (!wasActive) {
      faqItem.classList.add('active');
    }
  }
</script>

