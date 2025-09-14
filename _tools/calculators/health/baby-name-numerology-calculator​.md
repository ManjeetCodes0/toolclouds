---
title: "Baby Name Numerology Calculator - Find Your Baby's Lucky Name Number"
description: "Calculate the numerology number of baby names using Pythagorean and Chaldean systems. Discover personality traits, destiny numbers, and find the perfect name for your child."
localtitle: "Baby Name Numerology Calculator"
layout: tool
categories: [numerologyCalc, healthCalc, calculators]
permalink: /calculators/numerology/baby-name-calculator
published: false
faq:
  - q: "What is baby name numerology?"
    a: "Baby name numerology is the practice of calculating numerical values from a baby's name to understand potential personality traits, life path, and destiny. Each letter corresponds to a number, and these numbers reveal insights about your child's future characteristics and potential."
  - q: "What's the difference between Pythagorean and Chaldean numerology?"
    a: "Pythagorean numerology assigns numbers 1-9 to letters A-Z in sequence (A=1, B=2, etc.), while Chaldean numerology uses vibrations and assigns numbers 1-8 based on ancient meanings. Chaldean is considered more accurate by some practitioners but Pythagorean is more commonly used."
  - q: "How do I choose a lucky name for my baby?"
    a: "Calculate the numerology number for potential names and look for numbers that align with positive traits you desire. Numbers 1, 3, 5, and 9 are often considered lucky. Also consider the harmony between the name number and birth date number for best results."
  - q: "Should the first name and last name numbers be compatible?"
    a: "Yes, ideally the first name, middle name (if used), and last name should have compatible numbers. The total of all names gives the 'Expression Number' which represents your child's natural talents and abilities. Harmonious numbers work better together."
  - q: "Can I change my baby's name if the numerology isn't favorable?"
    a: "Many parents adjust spelling or choose different names based on numerology. Even small changes like adding or removing a letter can change the numerical value. However, remember that numerology is just one factor - the name's meaning and family significance matter too."
  - q: "What does each numerology number mean for a baby?"
    a: "Number 1: Leadership, independence. Number 2: Cooperation, sensitivity. Number 3: Creativity, communication. Number 4: Stability, hard work. Number 5: Adventure, freedom. Number 6: Nurturing, responsibility. Number 7: Spirituality, analysis. Number 8: Ambition, material success. Number 9: Compassion, wisdom."
  - q: "Is the birth date important in name numerology?"
    a: "Yes! The birth date gives the Life Path number, which should ideally harmonize with the name number. Some numerologists recommend choosing names that complement or balance the Life Path number for a more balanced personality."
  - q: "Can numerology predict my baby's future?"
    a: "Numerology provides insights into potential traits and tendencies, not fixed predictions. It suggests natural inclinations and talents your child may have, but environment, upbringing, and personal choices play the biggest role in shaping their future."
---

<style>
  :root {
    /* Mystical Theme Colors */
    --gradient-1: #b794f6;
    --gradient-2: #9f7aea;
    --gradient-3: #fbb6ce;
    --gradient-4: #f687b3;
    --bg: #0f0817;
    --surface: #1a0f2e;
    --surface-light: #2d1b4e;
    --text: #ffffff;
    --text-dim: #a78bfa;
    --accent: #fbbf24;
    --border: rgba(167, 139, 250, 0.2);
    --success: #10b981;
    --error: #ef4444;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
  }

  /* Floating Background Elements */
  .bg-decoration {
    position: fixed;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    pointer-events: none;
    animation: float 20s ease-in-out infinite;
  }

  .orb-1 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
    top: -200px;
    right: -200px;
  }

  .orb-2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, var(--gradient-3), var(--gradient-4));
    bottom: -150px;
    left: -150px;
    animation-delay: -5s;
  }

  .orb-3 {
    width: 250px;
    height: 250px;
    background: linear-gradient(135deg, var(--gradient-2), var(--gradient-3));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-50px) scale(1.1);
    }
  }

  /* Header Section */
  .header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--gradient-1), var(--gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    animation: glow 3s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% {
      filter: brightness(1);
    }
    50% {
      filter: brightness(1.2);
    }
  }

  .subtitle {
    color: var(--text-dim);
    font-size: 1.25rem;
  }

  /* Main Calculator Card */
  .calculator-card {
    background: var(--surface);
    border-radius: 36px;
    padding: 3rem;
    margin-bottom: 3rem;
    backdrop-filter: blur(20px);
    border: 1px solid var(--border);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
  }

  .calculator-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--gradient-1), transparent);
    animation: shimmer 3s linear infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  /* Name Input Section */
  .input-group {
    margin-bottom: 2rem;
  }

  .input-label {
    display: block;
    margin-bottom: 0.75rem;
    color: var(--text-dim);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .name-input {
    width: 100%;
    padding: 1.5rem;
    background: var(--surface-light);
    border: 2px solid var(--border);
    border-radius: 16px;
    color: var(--text);
    font-size: 1.25rem;
    transition: all 0.3s ease;
    position: relative;
  }

  .name-input:focus {
    outline: none;
    border-color: var(--gradient-1);
    box-shadow: 0 0 20px rgba(183, 148, 246, 0.3);
  }

  .char-counter {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-dim);
    font-size: 0.875rem;
  }

  /* Method Selector */
  .method-selector {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .method-btn {
    flex: 1;
    padding: 1rem 1.5rem;
    background: var(--surface-light);
    border: 2px solid var(--border);
    border-radius: 12px;
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .method-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(183, 148, 246, 0.2);
  }

  .method-btn.active {
    background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
    color: var(--text);
    border-color: transparent;
    transform: scale(1.05);
  }

  /* Calculate Button */
  .calculate-btn {
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(135deg, var(--gradient-1), var(--gradient-3));
    border: none;
    border-radius: 16px;
    color: var(--text);
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(183, 148, 246, 0.4);
    }
    50% {
      box-shadow: 0 0 40px rgba(183, 148, 246, 0.6);
    }
  }

  .calculate-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(183, 148, 246, 0.4);
  }

  /* Results Section */
  .results-section {
    display: none;
    margin-top: 3rem;
    animation: slideUp 0.5s ease;
  }

  .results-section.show {
    display: block;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .result-card {
    background: var(--surface);
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 2rem;
    border: 1px solid var(--border);
    position: relative;
  }

  .master-number {
    font-size: 5rem;
    font-weight: 700;
    text-align: center;
    background: linear-gradient(135deg, var(--gradient-2), var(--gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    animation: revealNumber 0.8s ease;
  }

  @keyframes revealNumber {
    from {
      transform: scale(0) rotate(180deg);
      opacity: 0;
    }
    to {
      transform: scale(1) rotate(0);
      opacity: 1;
    }
  }

  .traits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }

  .trait-card {
    background: var(--surface-light);
    padding: 1.5rem;
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .trait-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(183, 148, 246, 0.2);
  }

  .trait-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  /* Letter Breakdown */
  .letter-breakdown {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 0.75rem;
    margin-top: 2rem;
  }

  .letter-item {
    background: var(--surface-light);
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    animation: letterPop 0.5s ease backwards;
  }

  .letter-item:nth-child(n) {
    animation-delay: calc(n * 0.05s);
  }

  @keyframes letterPop {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .letter-item:hover {
    background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
    transform: scale(1.1);
  }

  .letter {
    font-size: 1.25rem;
    font-weight: 600;
    display: block;
  }

  .number {
    font-size: 0.875rem;
    color: var(--text-dim);
    margin-top: 0.25rem;
  }

  /* Number Meanings Accordion */
  .meanings-section {
    margin-top: 3rem;
  }

  .accordion-item {
    background: var(--surface);
    border-radius: 16px;
    margin-bottom: 1rem;
    overflow: hidden;
    border: 1px solid var(--border);
  }

  .accordion-header {
    padding: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
  }

  .accordion-header:hover {
    background: var(--surface-light);
  }

  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .accordion-content.open {
    max-height: 500px;
  }

  .accordion-body {
    padding: 0 1.5rem 1.5rem;
    color: var(--text-dim);
  }

  /* Quick Examples */
  .examples-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .example-card {
    background: var(--surface);
    border-radius: 20px;
    padding: 1.5rem;
    border: 1px solid var(--border);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .example-card:hover {
    transform: translateY(-5px);
    border-color: var(--gradient-1);
    box-shadow: 0 15px 30px rgba(183, 148, 246, 0.2);
  }

  .example-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .example-number {
    display: inline-block;
    background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
    color: var(--text);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  /* Related Tools */
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .tool-card {
    background: var(--surface);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid var(--border);
    text-decoration: none;
    color: var(--text);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .tool-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  .tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(183, 148, 246, 0.3);
  }

  .tool-card:hover::after {
    opacity: 0.1;
  }

  .tool-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .tool-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .tool-description {
    color: var(--text-dim);
    font-size: 0.875rem;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    .calculator-card {
      padding: 2rem 1.5rem;
    }

    .method-selector {
      flex-direction: column;
    }

    .master-number {
      font-size: 3.5rem;
    }

    .letter-breakdown {
      grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    }
  }

  /* Loading State */
  .loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid var(--border);
    border-top-color: var(--gradient-1);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Sparkle Effect */
  .sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--accent);
    border-radius: 50%;
    animation: sparkle 1.5s linear infinite;
  }

  @keyframes sparkle {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Print Styles */
  @media print {
    body {
      background: white;
      color: black;
    }

    .bg-decoration,
    .calculate-btn,
    .method-selector {
      display: none;
    }

    .results-section {
      display: block !important;
    }
  }
</style>

<div class="bg-decoration orb-1"></div>
<div class="bg-decoration orb-2"></div>
<div class="bg-decoration orb-3"></div>

<div class="container">
  <header class="header">
    <h1>Baby Name Numerology Calculator</h1>
    <p class="subtitle">Discover the mystical meaning behind your baby's name</p>
  </header>

  <div class="calculator-card">
    <div class="input-group">
      <label class="input-label" for="babyName">Enter Baby's Name</label>
      <div style="position: relative;">
        <input 
          type="text" 
          id="babyName" 
          class="name-input" 
          placeholder="Type your baby's name..."
          maxlength="50"
        >
        <span class="char-counter">
          <span id="charCount">0</span>/50
        </span>
      </div>
    </div>

    <div class="input-group">
      <label class="input-label">Select Calculation Method</label>
      <div class="method-selector">
        <button class="method-btn active" data-method="pythagorean">
          <div style="font-weight: 600;">Pythagorean</div>
          <div style="font-size: 0.75rem; margin-top: 0.25rem;">Most Common</div>
        </button>
        <button class="method-btn" data-method="chaldean">
          <div style="font-weight: 600;">Chaldean</div>
          <div style="font-size: 0.75rem; margin-top: 0.25rem;">Ancient System</div>
        </button>
        <button class="method-btn" data-method="hebrew">
          <div style="font-weight: 600;">Hebrew</div>
          <div style="font-size: 0.75rem; margin-top: 0.25rem;">Kabbalah</div>
        </button>
      </div>
    </div>

    <div class="input-group">
      <label class="input-label" for="birthDate">Birth Date (Optional)</label>
      <input 
        type="date" 
        id="birthDate" 
        class="name-input"
        style="font-size: 1rem;"
      >
    </div>

    <button class="calculate-btn" onclick="calculateNumerology()">
      Calculate Numerology
    </button>
  </div>

  <div id="results" class="results-section">
    <div class="result-card">
      <div class="master-number" id="masterNumber">8</div>
      <h2 style="text-align: center; margin-bottom: 2rem;">Expression Number</h2>
      
      <div class="traits-grid">
        <div class="trait-card">
          <div class="trait-icon">👑</div>
          <h3>Leadership</h3>
          <p style="font-size: 0.875rem; color: var(--text-dim);">Natural born leader with strong ambition</p>
        </div>
        <div class="trait-card">
          <div class="trait-icon">💎</div>
          <h3>Success</h3>
          <p style="font-size: 0.875rem; color: var(--text-dim);">Destined for material achievement</p>
        </div>
        <div class="trait-card">
          <div class="trait-icon">⚡</div>
          <h3>Power</h3>
          <p style="font-size: 0.875rem; color: var(--text-dim);">Strong will and determination</p>
        </div>
      </div>
    </div>

    <div class="result-card">
      <h3 style="margin-bottom: 1rem;">Letter Breakdown</h3>
      <div class="letter-breakdown" id="letterBreakdown">
        <!-- Letters will be populated here -->
      </div>
    </div>

    <div class="result-card">
      <h3 style="margin-bottom: 1rem;">Detailed Analysis</h3>
      <div id="detailedAnalysis" style="color: var(--text-dim); line-height: 1.8;">
        <!-- Analysis will be populated here -->
      </div>
    </div>
  </div>

  <section class="meanings-section">
    <h2 style="text-align: center; margin-bottom: 2rem;">Number Meanings</h2>
    
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <div>
          <span style="font-size: 1.5rem; margin-right: 1rem;">1</span>
          <span>The Leader</span>
        </div>
        <span>▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-body">
          Number 1 represents independence, leadership, and innovation. Children with this number are natural-born leaders who are confident, ambitious, and pioneering. They tend to be self-reliant and original thinkers.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <div>
          <span style="font-size: 1.5rem; margin-right: 1rem;">2</span>
          <span>The Diplomat</span>
        </div>
        <span>▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-body">
          Number 2 symbolizes cooperation, balance, and sensitivity. These children are natural peacemakers who work well with others. They are gentle, considerate, and have a talent for bringing harmony to their surroundings.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <div>
          <span style="font-size: 1.5rem; margin-right: 1rem;">3</span>
          <span>The Communicator</span>
        </div>
        <span>▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-body">
          Number 3 represents creativity, communication, and joy. These children are artistic, expressive, and sociable. They have a natural gift for words and often excel in creative fields like writing, speaking, or performing.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <div>
          <span style="font-size: 1.5rem; margin-right: 1rem;">11</span>
          <span>Master Number - The Intuitive</span>
        </div>
        <span>▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-body">
          Master Number 11 represents intuition, spiritual insight, and inspiration. These children are highly sensitive and intuitive, often possessing psychic abilities. They are visionaries who can inspire others with their insights.
        </div>
      </div>
    </div>
  </section>

  <section style="margin-top: 3rem;">
    <h2 style="text-align: center; margin-bottom: 2rem;">Celebrity Name Examples</h2>
    <div class="examples-grid">
      <div class="example-card" onclick="loadExample('Emma')">
        <div class="example-name">Emma</div>
        <span class="example-number">5</span>
        <p style="color: var(--text-dim); font-size: 0.875rem;">
          Adventurous and freedom-loving
        </p>
      </div>
      <div class="example-card" onclick="loadExample('Liam')">
        <div class="example-name">Liam</div>
        <span class="example-number">3</span>
        <p style="color: var(--text-dim); font-size: 0.875rem;">
          Creative and expressive
        </p>
      </div>
      <div class="example-card" onclick="loadExample('Sophia')">
        <div class="example-name">Sophia</div>
        <span class="example-number">7</span>
        <p style="color: var(--text-dim); font-size: 0.875rem;">
          Spiritual and analytical
        </p>
      </div>
      <div class="example-card" onclick="loadExample('Noah')">
        <div class="example-name">Noah</div>
        <span class="example-number">1</span>
        <p style="color: var(--text-dim); font-size: 0.875rem;">
          Leadership and independence
        </p>
      </div>
    </div>
  </section>

  <section style="margin-top: 3rem;">
    <h2 style="text-align: center; margin-bottom: 2rem;">Related Tools</h2>
    <div class="tools-grid">
      <a href="#" class="tool-card">
        <div class="tool-icon">🌟</div>
        <div class="tool-title">Birth Chart Calculator</div>
        <div class="tool-description">
          Create a complete astrological birth chart for your baby
        </div>
      </a>
      <a href="#" class="tool-card">
        <div class="tool-icon">💑</div>
        <div class="tool-title">Name Compatibility</div>
        <div class="tool-description">
          Check compatibility between first and last names
        </div>
      </a>
      <a href="#" class="tool-card">
        <div class="tool-icon">🎲</div>
        <div class="tool-title">Lucky Number Finder</div>
        <div class="tool-description">
          Discover your baby's lucky numbers and dates
        </div>
      </a>
    </div>
  </section>
</div>

<script>
// Numerology mappings
const pythagoreanMap = {
  A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
  J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
  S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
};

const chaldeanMap = {
  A:1, B:2, C:3, D:4, E:5, F:8, G:3, H:5, I:1,
  J:1, K:2, L:3, M:4, N:5, O:7, P:8, Q:1, R:2,
  S:3, T:4, U:6, V:6, W:6, X:5, Y:1, Z:7
};

const hebrewMap = {
  A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
  J:10, K:20, L:30, M:40, N:50, O:60, P:70, Q:80, R:90,
  S:100, T:200, U:300, V:400, W:500, X:600, Y:700, Z:800
};

// Track character count
document.getElementById('babyName').addEventListener('input', function(e) {
  document.getElementById('charCount').textContent = e.target.value.length;
});

// Method selector
document.querySelectorAll('.method-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// Accordion toggle
function toggleAccordion(header) {
  const content = header.nextElementSibling;
  content.classList.toggle('open');
  const arrow = header.querySelector('span:last-child');
  arrow.textContent = content.classList.contains('open') ? '▲' : '▼';
}

// Load example
function loadExample(name) {
  document.getElementById('babyName').value = name;
  document.getElementById('charCount').textContent = name.length;
  calculateNumerology();
}

// Main calculation function
function calculateNumerology() {
  const name = document.getElementById('babyName').value.trim();
  if (!name) {
    alert('Please enter a name to calculate');
    return;
  }

  // Get selected method
  const method = document.querySelector('.method-btn.active').dataset.method;
  let numberMap;
  
  switch(method) {
    case 'chaldean':
      numberMap = chaldeanMap;
      break;
    case 'hebrew':
      numberMap = hebrewMap;
      break;
    default:
      numberMap = pythagoreanMap;
  }

  // Calculate
  let total = 0;
  const letters = name.toUpperCase().split('');
  const letterBreakdown = document.getElementById('letterBreakdown');
  letterBreakdown.innerHTML = '';

  letters.forEach((letter, index) => {
    if (numberMap[letter]) {
      const value = numberMap[letter];
      total += value;
      
      // Create letter element
      const letterEl = document.createElement('div');
      letterEl.className = 'letter-item';
      letterEl.style.animationDelay = `${index * 0.05}s`;
      letterEl.innerHTML = `
        <span class="letter">${letter}</span>
        <span class="number">${value}</span>
      `;
      letterBreakdown.appendChild(letterEl);
    }
  });

  // Reduce to single digit (except master numbers)
  let finalNumber = total;
  while (finalNumber > 9 && finalNumber !== 11 && finalNumber !== 22 && finalNumber !== 33) {
    finalNumber = String(finalNumber).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }

  // Display results
  document.getElementById('masterNumber').textContent = finalNumber;
  document.getElementById('results').classList.add('show');
  
  // Update traits based on number
  updateTraits(finalNumber);
  
  // Generate detailed analysis
  generateAnalysis(name, finalNumber, method);
  
  // Scroll to results
  document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Update traits based on number
function updateTraits(number) {
  const traits = {
    1: {
      traits: [
        { icon: '👑', title: 'Leadership', desc: 'Natural born leader with strong ambition' },
        { icon: '🎯', title: 'Pioneer', desc: 'Innovative and original thinker' },
        { icon: '⚡', title: 'Independent', desc: 'Self-reliant and confident' }
      ]
    },
    2: {
      traits: [
        { icon: '🤝', title: 'Cooperation', desc: 'Works harmoniously with others' },
        { icon: '💝', title: 'Sensitive', desc: 'Emotionally aware and caring' },
        { icon: '⚖️', title: 'Balance', desc: 'Natural mediator and peacemaker' }
      ]
    },
    3: {
      traits: [
        { icon: '🎨', title: 'Creative', desc: 'Artistic and imaginative mind' },
        { icon: '💬', title: 'Communicator', desc: 'Excellent verbal expression' },
        { icon: '✨', title: 'Joyful', desc: 'Optimistic and enthusiastic' }
      ]
    },
    4: {
      traits: [
        { icon: '🏗️', title: 'Builder', desc: 'Practical and hardworking' },
        { icon: '🛡️', title: 'Reliable', desc: 'Trustworthy and dependable' },
        { icon: '📐', title: 'Organized', desc: 'Systematic and detail-oriented' }
      ]
    },
    5: {
      traits: [
        { icon: '🌍', title: 'Adventurous', desc: 'Loves freedom and exploration' },
        { icon: '🎭', title: 'Versatile', desc: 'Adaptable to change' },
        { icon: '🚀', title: 'Dynamic', desc: 'Energetic and progressive' }
      ]
    },
    6: {
      traits: [
        { icon: '❤️', title: 'Nurturing', desc: 'Caring and responsible' },
        { icon: '🏠', title: 'Family-oriented', desc: 'Values home and relationships' },
        { icon: '🌹', title: 'Harmonious', desc: 'Creates beauty and balance' }
      ]
    },
    7: {
      traits: [
        { icon: '🔮', title: 'Spiritual', desc: 'Deep thinker and seeker' },
        { icon: '🧠', title: 'Analytical', desc: 'Logical and investigative' },
        { icon: '📚', title: 'Wise', desc: 'Natural philosopher' }
      ]
    },
    8: {
      traits: [
        { icon: '💎', title: 'Ambitious', desc: 'Success and achievement driven' },
        { icon: '💪', title: 'Powerful', desc: 'Strong will and determination' },
        { icon: '🏆', title: 'Leader', desc: 'Executive ability and vision' }
      ]
    },
    9: {
      traits: [
        { icon: '🌟', title: 'Humanitarian', desc: 'Compassionate and giving' },
        { icon: '🎓', title: 'Wise', desc: 'Old soul with deep understanding' },
        { icon: '🌈', title: 'Universal', desc: 'Broad-minded and tolerant' }
      ]
    },
        11: {
      traits: [
        { icon: '🔮', title: 'Intuitive', desc: 'Highly sensitive and psychic' },
        { icon: '💫', title: 'Visionary', desc: 'Inspirational and idealistic' },
        { icon: '🌟', title: 'Master Teacher', desc: 'Spiritual guide and healer' }
      ]
    },
    22: {
      traits: [
        { icon: '🏛️', title: 'Master Builder', desc: 'Manifests dreams into reality' },
        { icon: '🌍', title: 'Global Vision', desc: 'Thinks on a grand scale' },
        { icon: '⚡', title: 'Powerful', desc: 'Exceptional organizational ability' }
      ]
    },
    33: {
      traits: [
        { icon: '💖', title: 'Master Healer', desc: 'Ultimate nurturer and teacher' },
        { icon: '🕊️', title: 'Selfless', desc: 'Devoted to serving humanity' },
        { icon: '✨', title: 'Enlightened', desc: 'Highest spiritual consciousness' }
      ]
    }
  };

  const numberTraits = traits[number] || traits[1];
  const traitsGrid = document.querySelector('.traits-grid');
  traitsGrid.innerHTML = '';

  numberTraits.traits.forEach((trait, index) => {
    const traitCard = document.createElement('div');
    traitCard.className = 'trait-card';
    traitCard.style.animationDelay = `${index * 0.1}s`;
    traitCard.innerHTML = `
      <div class="trait-icon">${trait.icon}</div>
      <h3>${trait.title}</h3>
      <p style="font-size: 0.875rem; color: var(--text-dim);">${trait.desc}</p>
    `;
    traitsGrid.appendChild(traitCard);
  });
}

// Generate detailed analysis
function generateAnalysis(name, number, method) {
  const analyses = {
    1: `${name} carries the vibration of the number 1, marking them as a natural-born leader. This powerful number suggests a child who will be independent, pioneering, and confident. They will likely show early signs of wanting to do things their own way and may resist being told what to do. Encourage their leadership abilities while teaching them the value of collaboration.`,
    
    2: `${name} resonates with the gentle energy of number 2, indicating a sensitive and cooperative soul. This child will be naturally diplomatic, preferring harmony over conflict. They may be more emotionally sensitive than others and will thrive in peaceful environments. Their gift lies in bringing people together and creating balance.`,
    
    3: `${name} vibrates with the creative energy of number 3, suggesting a child blessed with artistic talents and communication skills. Expect a talkative, expressive child who loves to entertain and be the center of attention. They will benefit from creative outlets like art, music, or drama. Their optimistic nature will light up any room.`,
    
    4: `${name} carries the stable vibration of number 4, indicating a practical and hardworking nature. This child will appreciate routine and structure, showing remarkable focus and determination from an early age. They are builders who take pride in their accomplishments and value security. Encourage their methodical approach while helping them embrace flexibility.`,
    
    5: `${name} resonates with the adventurous energy of number 5, suggesting a child who craves freedom and variety. They will be curious about everything, always ready for the next adventure. This child may struggle with routine and will need plenty of stimulation. Their versatility and adaptability will serve them well in life.`,
    
    6: `${name} vibrates with the nurturing energy of number 6, indicating a child with a strong sense of responsibility and care for others. They will likely be protective of younger siblings and show an early interest in helping. This child values family and home, finding joy in creating harmony and beauty in their environment.`,
    
    7: `${name} carries the mystical vibration of number 7, marking them as a deep thinker and spiritual seeker. This child may prefer solitude at times and show an early interest in life's bigger questions. They possess natural analytical abilities and may be drawn to research, philosophy, or spiritual pursuits. Honor their need for quiet reflection.`,
    
    8: `${name} resonates with the powerful energy of number 8, suggesting a child destined for achievement and material success. They will show early signs of ambition and may be naturally drawn to leadership roles. This child understands the value of hard work and has the potential to achieve great things. Balance their material focus with spiritual values.`,
    
    9: `${name} vibrates with the humanitarian energy of number 9, indicating an old soul with natural wisdom. This child will show unusual compassion and concern for others from an early age. They possess a global perspective and may be drawn to causes that help humanity. Their challenge will be learning to care for themselves as much as they care for others.`,
    
    11: `${name} carries the master vibration of 11, marking them as highly intuitive and spiritually gifted. This is a sensitive child who may display psychic abilities or unusual insights. They are here to inspire others but may struggle with the intensity of their gifts. Provide grounding while encouraging their spiritual development.`,
    
    22: `${name} resonates with the master builder energy of 22, suggesting a child with the potential to achieve great things on a global scale. They combine vision with practical ability, capable of turning dreams into reality. This is a powerful number that requires patience and support to fully develop. Help them stay grounded while reaching for the stars.`,
    
    33: `${name} vibrates with the rare master number 33, indicating a child with extraordinary healing and teaching abilities. They embody unconditional love and have the potential to uplift humanity. This is a challenging path requiring great spiritual development. Support their compassionate nature while helping them maintain healthy boundaries.`
  };

  const analysis = analyses[number] || analyses[1];
  const methodNote = method === 'pythagorean' ? 'Pythagorean system' : method === 'chaldean' ? 'ancient Chaldean system' : 'Hebrew Kabbalah system';
  
  document.getElementById('detailedAnalysis').innerHTML = `
    <p>${analysis}</p>
    <p style="margin-top: 1rem;">This calculation was performed using the ${methodNote}, which assigns specific vibrational values to each letter. The total of all letters (${name}) was reduced to the single digit ${number}${number > 9 ? ', which is a master number and carries special significance' : ''}.</p>
  `;
}

// Add sparkle effects on calculation
function addSparkles() {
  const container = document.querySelector('.calculator-card');
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 1.5 + 's';
    container.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1500);
  }
}

// Birthday compatibility check
document.getElementById('birthDate').addEventListener('change', function(e) {
  if (e.target.value) {
    const date = new Date(e.target.value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    // Calculate life path number
    let lifePathSum = String(day).split('').reduce((sum, d) => sum + parseInt(d), 0) +
                      String(month).split('').reduce((sum, d) => sum + parseInt(d), 0) +
                      String(year).split('').reduce((sum, d) => sum + parseInt(d), 0);
    
    while (lifePathSum > 9 && lifePathSum !== 11 && lifePathSum !== 22 && lifePathSum !== 33) {
      lifePathSum = String(lifePathSum).split('').reduce((sum, d) => sum + parseInt(d), 0);
    }
    
    // Add life path info to results
    const lifePathInfo = document.createElement('div');
    lifePathInfo.className = 'result-card';
    lifePathInfo.style.marginTop = '2rem';
    lifePathInfo.innerHTML = `
      <h3>Life Path Number: ${lifePathSum}</h3>
      <p style="color: var(--text-dim); margin-top: 1rem;">
        The Life Path number reveals the path your child will walk in life. 
        Combined with their name number, this creates a complete numerological profile.
      </p>
    `;
    
    // Insert after main result if visible
    if (document.getElementById('results').classList.contains('show')) {
      const resultsSection = document.getElementById('results');
      if (!document.getElementById('lifePath')) {
        lifePathInfo.id = 'lifePath';
        resultsSection.insertBefore(lifePathInfo, resultsSection.children[1]);
      }
    }
  }
});

// Save results functionality
function saveResults() {
  const name = document.getElementById('babyName').value;
  const number = document.getElementById('masterNumber').textContent;
  const method = document.querySelector('.method-btn.active').dataset.method;
  
  const results = {
    name: name,
    number: number,
    method: method,
    date: new Date().toLocaleDateString(),
    analysis: document.getElementById('detailedAnalysis').textContent
  };
  
  // Save to localStorage
  let savedResults = JSON.parse(localStorage.getItem('numerologyResults') || '[]');
  savedResults.push(results);
  localStorage.setItem('numerologyResults', JSON.stringify(savedResults));
  
  // Show confirmation
  const saveBtn = event.target;
  saveBtn.textContent = 'Saved! ✓';
  setTimeout(() => {
    saveBtn.textContent = 'Save Results';
  }, 2000);
}

// Share results functionality
function shareResults() {
  const name = document.getElementById('babyName').value;
  const number = document.getElementById('masterNumber').textContent;
  const url = window.location.href;
  const text = `${name}'s numerology number is ${number}! Discover what this means: `;
  
  if (navigator.share) {
    navigator.share({
      title: 'Baby Name Numerology Result',
      text: text,
      url: url
    });
  } else {
    // Fallback to copying to clipboard
    const shareText = text + url;
    navigator.clipboard.writeText(shareText);
    
    const shareBtn = event.target;
    shareBtn.textContent = 'Copied! 📋';
    setTimeout(() => {
      shareBtn.textContent = 'Share Results';
    }, 2000);
  }
}

// Add save and share buttons to results
document.addEventListener('DOMContentLoaded', function() {
  const resultsSection = document.getElementById('results');
  const actionButtons = document.createElement('div');
  actionButtons.style.cssText = 'display: flex; gap: 1rem; margin-top: 2rem;';
  actionButtons.innerHTML = `
    <button onclick="saveResults()" style="flex: 1; padding: 1rem; background: var(--surface-light); border: 1px solid var(--border); border-radius: 12px; color: var(--text); cursor: pointer; transition: all 0.3s ease;">
      Save Results
    </button>
    <button onclick="shareResults()" style="flex: 1; padding: 1rem; background: var(--surface-light); border: 1px solid var(--border); border-radius: 12px; color: var(--text); cursor: pointer; transition: all 0.3s ease;">
      Share Results
    </button>
  `;
  resultsSection.appendChild(actionButtons);
});

// Initialize tooltips for method descriptions
document.querySelectorAll('.method-btn').forEach(btn => {
  btn.addEventListener('mouseenter', function(e) {
    const method = e.target.dataset.method;
    const descriptions = {
      pythagorean: 'Modern Western system using sequential number assignments',
      chaldean: 'Ancient Babylonian system based on sound vibrations',
      hebrew: 'Kabbalistic system with deeper mystical meanings'
    };
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.style.cssText = `
      position: absolute;
      background: var(--surface-light);
      border: 1px solid var(--border);
      padding: 0.75rem;
      border-radius: 8px;
      font-size: 0.875rem;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(-0.5rem);
      white-space: nowrap;
      z-index: 1000;
      pointer-events: none;
    `;
    tooltip.textContent = descriptions[method];
    e.target.style.position = 'relative';
    e.target.appendChild(tooltip);
  });
  
  btn.addEventListener('mouseleave', function(e) {
    const tooltip = e.target.querySelector('.tooltip');
    if (tooltip) tooltip.remove();
  });
});

// Add keyboard support
document.getElementById('babyName').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    calculateNumerology();
  }
});

// Add print functionality
function printResults() {
  window.print();
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
</script>

<!-- FAQ Schema Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is baby name numerology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Baby name numerology is the practice of calculating numerical values from a baby's name to understand potential personality traits, life path, and destiny. Each letter corresponds to a number, and these numbers reveal insights about your child's future characteristics and potential."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Pythagorean and Chaldean numerology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pythagorean numerology assigns numbers 1-9 to letters A-Z in sequence (A=1, B=2, etc.), while Chaldean numerology uses vibrations and assigns numbers 1-8 based on ancient meanings. Chaldean is considered more accurate by some practitioners but Pythagorean is more commonly used."
      }
    }
  ]
}
</script>
