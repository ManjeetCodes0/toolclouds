---
title: "Time Duration Calculator - Calculate Hours, Min & Sec in Times"
description: "Calculate the exact duration between two times. Perfect for work hours, event planning, and time tracking with instant results."
localtitle: "Time Duration"
layout: tool
categories: [dateTimeCalc, calculators]
permalink: /calculators/date-time/time-duration-calculator-online-free
faq:
  - q: "Can I calculate duration across midnight?"
    a: "Yes! The calculator automatically handles time spans that cross midnight. For example, calculating from 11:00 PM to 2:00 AM correctly shows 3 hours."
  - q: "What time formats are supported?"
    a: "The calculator supports both 12-hour (AM/PM) and 24-hour formats. You can enter times like 2:30 PM or 14:30 - both work perfectly."
  - q: "How do I calculate work hours including breaks?"
    a: "Calculate your total work time first, then subtract your break duration using the subtract mode. Or use multiple calculations and add them together."
  - q: "Can I add or subtract time durations?"
    a: "Yes! Use the mode selector to switch between calculating difference, adding durations, or subtracting time periods."
  - q: "What's the maximum duration I can calculate?"
    a: "The calculator can handle durations up to 999 hours, 59 minutes, and 59 seconds - more than enough for any practical use."
---

<style>
  :root {
    --td-gradient-1: #667eea;
    --td-gradient-2: #764ba2;
    --td-gradient-3: #f093fb;
    --td-gradient-4: #f5576c;
    --td-bg: #0a0e27;
    --td-surface: #151935;
    --td-surface-light: #1e2444;
    --td-text: #ffffff;
    --td-text-dim: #8892b0;
    --td-accent: #64ffda;
    --td-glow: #667eea;
    --td-border: rgba(255, 255, 255, 0.1);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .td-wrapper {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--td-bg);
    color: var(--td-text);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  
  .td-bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.3;
    pointer-events: none;  /* This allows clicks to pass through */

  }
  
  .td-bg-gradient {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(80px);
    animation: float 20s ease-in-out infinite;
  }
  
  .td-bg-gradient:nth-child(1) {
    background: var(--td-gradient-1);
    top: -250px;
    left: -250px;
    animation-delay: 0s;
  }
  
  .td-bg-gradient:nth-child(2) {
    background: var(--td-gradient-2);
    top: 50%;
    right: -250px;
    animation-delay: 5s;
  }
  
  .td-bg-gradient:nth-child(3) {
    background: var(--td-gradient-3);
    bottom: -250px;
    left: 30%;
    animation-delay: 10s;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }
  
  .td-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    z-index: 1;
  }
  
  .td-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .td-title {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--td-gradient-1), var(--td-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: glow 3s ease-in-out infinite;
  }
  
  @keyframes glow {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
  }
  
  @media (max-width: 768px) {
    .td-title { font-size: 2.5rem; }
  }
  
  .td-main-card {
    background: var(--td-surface);
    border-radius: 32px;
    padding: 3rem;
    backdrop-filter: blur(10px);
    border: 1px solid var(--td-border);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
  }
  
  .td-main-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--td-gradient-1), var(--td-gradient-3));
    animation: shimmer 3s linear infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .td-mode-selector {
    display: flex;
    background: var(--td-bg);
    border-radius: 20px;
    padding: 0.5rem;
    margin-bottom: 3rem;
    gap: 0.5rem;
  }
  
  .td-mode-btn {
    flex: 1;
    padding: 1rem;
    border: none;
    background: transparent;
    color: var(--td-text-dim);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    position: relative;
  }
  
  .td-mode-btn.active {
    background: linear-gradient(135deg, var(--td-gradient-1), var(--td-gradient-2));
    color: white;
    transform: scale(1.05);
  }
  
  .td-time-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 768px) {
    .td-time-inputs {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
  
  .td-time-group {
    position: relative;
  }
  
  .td-time-label {
    font-size: 0.875rem;
    color: var(--td-accent);
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }
  
  .td-time-input-wrapper {
    position: relative;
    background: var(--td-surface-light);
    border-radius: 20px;
    padding: 1.5rem;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }
  
  .td-time-input-wrapper:focus-within {
    border-color: var(--td-glow);
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.3);
  }
  
  .td-time-display {
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    color: var(--td-text);
  }
  
  .td-time-controls {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  
  .td-time-control {
    aspect-ratio: 1;
    border: none;
    background: var(--td-bg);
    color: var(--td-text-dim);
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .td-time-control:hover {
    background: var(--td-gradient-1);
    color: white;
    transform: scale(1.1);
  }
  
  .td-calculate-btn {
    width: 100%;
    padding: 1.5rem;
    border: none;
    border-radius: 20px;
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, var(--td-gradient-1), var(--td-gradient-3));
    color: white;
    transition: all 0.3s ease;
  }
  
  .td-calculate-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
  }
  
  .td-result-section {
    margin-top: 3rem;
    background: var(--td-surface);
    border-radius: 32px;
    padding: 3rem;
    border: 1px solid var(--td-border);
    position: relative;
    overflow: hidden;
    display: none;
  }
  
  .td-result-section.show {
    display: block;
    animation: slideUp 0.5s ease;
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
  
  .td-result-main {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .td-result-label {
    color: var(--td-accent);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
  
  .td-result-time {
    font-size: 4rem;
    font-weight: 200;
    font-variant-numeric: tabular-nums;
    background: linear-gradient(135deg, var(--td-gradient-1), var(--td-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .td-result-breakdown {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .td-breakdown-item {
    background: var(--td-surface-light);
    padding: 1.5rem;
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .td-breakdown-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .td-breakdown-value {
    font-size: 2rem;
    font-weight: 600;
    color: var(--td-gradient-1);
  }
  
  .td-breakdown-label {
    color: var(--td-text-dim);
    font-size: 0.875rem;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }
  
  .td-quick-access {
    margin: 3rem 0;
    background: var(--td-surface);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid var(--td-border);
  }
  
  .td-quick-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--td-text);
  }
  
  .td-quick-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }
  
  .td-quick-btn {
    padding: 1rem;
    background: var(--td-surface-light);
    border: 2px solid var(--td-border);
    border-radius: 12px;
    color: var(--td-text);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    text-align: center;
  }
  
  .td-quick-btn:hover {
    border-color: var(--td-gradient-1);
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-3px);
  }
  
  .td-related-tools {
    margin-top: 4rem;
  }
  
  .td-related-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--td-text);
  }
  
  .td-related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .td-tool-card {
    background: var(--td-surface);
    border-radius: 20px;
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--td-border);
  }
  
  .td-tool-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, rgba(102, 126, 234, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .td-tool-card:hover::before {
    opacity: 1;
  }
  
  .td-tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .td-tool-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--td-gradient-1), var(--td-gradient-2));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .td-tool-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .td-tool-desc {
    color: var(--td-text-dim);
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .td-content {
    background: var(--td-surface);
    border-radius: 32px;
    padding: 3rem;
    margin-top: 4rem;
    border: 1px solid var(--td-border);
  }
  
  .td-content h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--td-gradient-1), var(--td-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .td-content p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--td-text-dim);
  }
  
  .td-content ul {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }
  
  .td-content li {
    margin-bottom: 0.75rem;
    color: var(--td-text-dim);
  }
  
  @media (max-width: 768px) {
    .td-container { padding: 1rem 0.4rem; }
    .td-main-card { padding: 2rem 1.5rem; }
    .td-result-time { font-size: 2.5rem; }
  }
</style>

<div class="td-wrapper">
  <div class="td-bg-animation">
    <div class="td-bg-gradient"></div>
    <div class="td-bg-gradient"></div>
    <div class="td-bg-gradient"></div>
  </div>
  
  <div class="td-container">
    <header class="td-header">
      <h1 class="td-title">Time Duration Calculator</h1>
    </header>
    
    <div class="td-main-card">
      <div class="td-mode-selector">
        <button class="td-mode-btn active" onclick="setMode('difference')">Difference</button>
        <button class="td-mode-btn" onclick="setMode('add')">Add Time</button>
        <button class="td-mode-btn" onclick="setMode('subtract')">Subtract Time</button>
      </div>
      
      <div class="td-time-inputs">
        <div class="td-time-group">
          <div class="td-time-label">Start Time</div>
          <div class="td-time-input-wrapper">
            <div class="td-time-display" id="startTimeDisplay">12:00:00</div>
            <div class="td-time-controls">
              <button class="td-time-control" onclick="adjustTime('start', 'hour', 1)">+</button>
              <button class="td-time-control" onclick="adjustTime('start', 'minute', 1)">+</button>
              <button class="td-time-control" onclick="adjustTime('start', 'second', 1)">+</button>
              <button class="td-time-control" onclick="adjustTime('start', 'hour', -1)">−</button>
              <button class="td-time-control" onclick="adjustTime('start', 'minute', -1)">−</button>
              <button class="td-time-control" onclick="adjustTime('start', 'second', -1)">−</button>
            </div>
          </div>
        </div>
        
        <div class="td-time-group">
          <div class="td-time-label" id="endTimeLabel">End Time</div>
          <div class="td-time-input-wrapper">
            <div class="td-time-display" id="endTimeDisplay">13:30:00</div>
            <div class="td-time-controls">
              <button class="td-time-control" onclick="adjustTime('end', 'hour', 1)">+</button>
              <button class="td-time-control" onclick="adjustTime('end', 'minute', 1)">+</button>
              <button class="td-time-control" onclick="adjustTime('end', 'second', 1)">+</button>
              <button class="td-time-control" onclick="adjustTime('end', 'hour', -1)">−</button>
              <button class="td-time-control" onclick="adjustTime('end', 'minute', -1)">−</button>
              <button class="td-time-control" onclick="adjustTime('end', 'second', -1)">−</button>
            </div>
          </div>
        </div>
      </div>
      
      <button class="td-calculate-btn" onclick="calculateDuration()">Calculate</button>
    </div>
    
    <div class="td-result-section" id="resultSection">
      <div class="td-result-main">
        <div class="td-result-label" id="resultLabel">Duration</div>
        <div class="td-result-time" id="resultTime">00:00:00</div>
      </div>
      
      <div class="td-result-breakdown" id="resultBreakdown"></div>
    </div>
    
    <div class="td-quick-access">
      <h3 class="td-quick-title">Quick Times</h3>
      <div class="td-quick-grid">
        <button class="td-quick-btn" onclick="setQuickTime('start', '09:00:00')">9:00 AM</button>
        <button class="td-quick-btn" onclick="setQuickTime('start', '12:00:00')">12:00 PM</button>
        <button class="td-quick-btn" onclick="setQuickTime('start', '17:00:00')">5:00 PM</button>
        <button class="td-quick-btn" onclick="setQuickTime('end', '17:00:00')">5:00 PM</button>
        <button class="td-quick-btn" onclick="setQuickTime('end', '23:59:59')">Midnight</button>
        <button class="td-quick-btn" onclick="setCurrentTime()">Now</button>
      </div>
    </div>
    
    <div class="td-related-tools">
      <h2 class="td-related-title">Related Tools</h2>
      <div class="td-related-grid">
        <a href="/calculators/date-time/stopwatch-for-study-online" class="td-tool-card">
          <div class="td-tool-icon">⏱️</div>
          <div class="td-tool-name">Stopwatch</div>
          <div class="td-tool-desc">Precision timing with lap tracking</div>
        </a>
        <a href="/calculators/date-time/countdown-timer-online" class="td-tool-card">
          <div class="td-tool-icon">⏲️</div>
          <div class="td-tool-name">Countdown Timer</div>
          <div class="td-tool-desc">Count down to any event</div>
        </a>
        <a href="/calculators/date-time/two-date-difference-calculator" class="td-tool-card">
          <div class="td-tool-icon">📅</div>
          <div class="td-tool-name">Date Difference</div>
          <div class="td-tool-desc">Days between dates</div>
        </a>
        <a href="/converters/date-time/time-zone-converter" class="td-tool-card">
          <div class="td-tool-icon">🌍</div>
          <div class="td-tool-name">Time Zone Converter</div>
          <div class="td-tool-desc">Convert between time zones</div>
        </a>
      </div>
    </div>
    
    <div class="td-content">
      <h2>Quick Guide</h2>
      <p>Calculate time durations instantly with our intuitive calculator. Perfect for tracking work hours, planning events, or any time calculation needs.</p>
      
      <ul>
        <li>Use the + and − buttons to adjust hours, minutes, and seconds</li>
        <li>Switch between difference, addition, and subtraction modes</li>
        <li>Quick time buttons for common values</li>
        <li>Automatic handling of times crossing midnight</li>
      </ul>
      
      <p>The calculator shows results in multiple formats including total minutes and seconds, making it easy to use the data however you need.</p>
    </div>
  </div>
</div>

<script>
  let currentMode = 'difference';
  let startTime = { hours: 12, minutes: 0, seconds: 0 };
  let endTime = { hours: 13, minutes: 30, seconds: 0 };
  
  function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.td-mode-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const endLabel = document.getElementById('endTimeLabel');
    if (mode === 'add') {
      endLabel.textContent = 'Duration to Add';
    } else if (mode === 'subtract') {
      endLabel.textContent = 'Duration to Subtract';
    } else {
      endLabel.textContent = 'End Time';
    }
  }
  
  function adjustTime(which, unit, amount) {
    const time = which === 'start' ? startTime : endTime;
    
    if (unit === 'hour') {
      time.hours = (time.hours + amount + 24) % 24;
    } else if (unit === 'minute') {
      time.minutes = (time.minutes + amount + 60) % 60;
    } else if (unit === 'second') {
      time.seconds = (time.seconds + amount + 60) % 60;
    }
    
    updateDisplay();
  }
  
  function updateDisplay() {
    document.getElementById('startTimeDisplay').textContent = formatTime(startTime);
    document.getElementById('endTimeDisplay').textContent = formatTime(endTime);
  }
  
  function formatTime(time) {
    return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
  }
  
  function setQuickTime(which, timeStr) {
    const [h, m, s] = timeStr.split(':').map(Number);
    if (which === 'start') {
      startTime = { hours: h, minutes: m, seconds: s };
    } else {
      endTime = { hours: h, minutes: m, seconds: s };
    }
    updateDisplay();
  }
  
  function setCurrentTime() {
    const now = new Date();
    startTime = {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds()
    };
    updateDisplay();
  }
  
  function calculateDuration() {
    let totalSeconds;
    
    if (currentMode === 'difference') {
      const startSeconds = startTime.hours * 3600 + startTime.minutes * 60 + startTime.seconds;
      let endSeconds = endTime.hours * 3600 + endTime.minutes * 60 + endTime.seconds;
      
      if (endSeconds < startSeconds) {
        endSeconds += 86400; // Add 24 hours for crossing midnight
      }
      
      totalSeconds = endSeconds - startSeconds;
    } else if (currentMode === 'add') {
      const startSeconds = startTime.hours * 3600 + startTime.minutes * 60 + startTime.seconds;
      const durationSeconds = endTime.hours * 3600 + endTime.minutes * 60 + endTime.seconds;
      totalSeconds = startSeconds + durationSeconds;
    } else {
      const startSeconds = startTime.hours * 3600 + startTime.minutes * 60 + startTime.seconds;
      const durationSeconds = endTime.hours * 3600 + endTime.minutes * 60 + endTime.seconds;
      totalSeconds = Math.abs(startSeconds - durationSeconds);
    }
    
    displayResult(totalSeconds);
  }
  
  function displayResult(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    document.getElementById('resultTime').textContent = 
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    const breakdown = document.getElementById('resultBreakdown');
    breakdown.innerHTML = `
      <div class="td-breakdown-item">
        <div class="td-breakdown-value">${totalSeconds}</div>
        <div class="td-breakdown-label">Total Seconds</div>
      </div>
      <div class="td-breakdown-item">
        <div class="td-breakdown-value">${Math.floor(totalSeconds / 60)}</div>
        <div class="td-breakdown-label">Total Minutes</div>
      </div>
      <div class="td-breakdown-item">
        <div class="td-breakdown-value">${(totalSeconds / 3600).toFixed(2)}</div>
        <div class="td-breakdown-label">Total Hours</div>
      </div>
    `;
    
    document.getElementById('resultSection').classList.add('show');
  }
  
  updateDisplay();
</script>
