---
title: "Countdown Timer - Online Timer with Alarm & Custom Presets"
description: "Free countdown timer with multiple timers, custom alarms, and visual alerts. Perfect for cooking, studying, workouts, and productivity tracking."
localtitle: "Countdown Timer"
layout: tool
categories: [dateTimeCalc, calculators]
permalink: /calculators/date-time/countdown-timer-online
faq:
  - q: "Can I run multiple countdown timers at once?"
    a: "Yes! You can create and run multiple timers simultaneously. Each timer operates independently with its own settings, name, and alarm. This is perfect for cooking multiple dishes or managing different tasks."
  - q: "What happens when the timer reaches zero?"
    a: "When a timer completes, you'll get both visual and audio alerts. The screen flashes, the timer shows 'TIME'S UP!' and your selected alarm sound plays. The alert continues until you dismiss it."
  - q: "Can I use the timer in full-screen mode?"
    a: "Absolutely! Click the fullscreen button to expand any timer to fill your entire screen. This is great for visibility from across the room. Press ESC or click the exit button to return to normal view."
  - q: "Does the timer work if I switch browser tabs?"
    a: "Yes, timers continue running accurately even when you switch tabs or minimize your browser. You'll still receive notifications when a timer completes, even if you're on a different tab."
  - q: "Can I save my custom timer presets?"
    a: "Currently, the timer includes popular presets for common activities. Your custom times aren't saved between sessions, but you can quickly create any timer using the hour, minute, and second inputs."
  - q: "What's the maximum time I can set?"
    a: "You can set timers up to 99 hours, 59 minutes, and 59 seconds. That's over 4 days, which should cover any timing need you might have!"
---

<style>
  :root {
    /* Neon Nights Color Scheme */
    --ct-gradient-1: #b721ff;
    --ct-gradient-2: #21d4fd;
    --ct-gradient-3: #ff006e;
    --ct-gradient-4: #8338ec;
    --ct-bg: #0a0e27;
    --ct-surface: #151935;
    --ct-surface-light: #1e2444;
    --ct-text: #ffffff;
    --ct-text-dim: #8892b0;
    --ct-accent: #64ffda;
    --ct-border: rgba(255, 255, 255, 0.1);
    --ct-success: #00ff88;
    --ct-danger: #ff006e;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .ct-wrapper {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--ct-bg);
    color: var(--ct-text);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  
  .ct-bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.3;
    pointer-events: none;
  }
  
  .ct-bg-gradient {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(80px);
    animation: float 20s ease-in-out infinite;
  }
  
  .ct-bg-gradient:nth-child(1) {
    background: var(--ct-gradient-1);
    top: -250px;
    left: -250px;
    animation-delay: 0s;
  }
  
  .ct-bg-gradient:nth-child(2) {
    background: var(--ct-gradient-2);
    top: 50%;
    right: -250px;
    animation-delay: 5s;
  }
  
  .ct-bg-gradient:nth-child(3) {
    background: var(--ct-gradient-3);
    bottom: -250px;
    left: 30%;
    animation-delay: 10s;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }
  
  .ct-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    z-index: 1;
  }
  
  .ct-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .ct-title {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--ct-gradient-1), var(--ct-gradient-3));
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
    .ct-title { font-size: 2.5rem; }
  }
  
  .ct-main-timer {
    background: var(--ct-surface);
    border-radius: 32px;
    padding: 3rem;
    backdrop-filter: blur(10px);
    border: 1px solid var(--ct-border);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    margin-bottom: 3rem;
  }
  
  .ct-main-timer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--ct-gradient-1), var(--ct-gradient-3));
    animation: shimmer 3s linear infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .ct-timer-display {
    font-size: 6rem;
    font-weight: 200;
    text-align: center;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.1em;
    margin-bottom: 3rem;
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
    background: linear-gradient(135deg, var(--ct-gradient-1), var(--ct-gradient-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    .ct-timer-display { font-size: 3.5rem; }
  }
  
  .ct-timer-inputs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .ct-input-group {
    text-align: center;
  }
  
  .ct-input-wrapper {
    background: var(--ct-surface-light);
    border-radius: 20px;
    padding: 1.5rem;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }
  
  .ct-input-wrapper:focus-within {
    border-color: var(--ct-gradient-1);
    box-shadow: 0 0 30px rgba(183, 33, 255, 0.3);
  }
  
  .ct-time-input {
    background: transparent;
    border: none;
    color: var(--ct-text);
    font-size: 2rem;
    text-align: center;
    width: 100%;
    font-weight: 300;
    outline: none;
  }
  
  .ct-input-label {
    color: var(--ct-accent);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0.5rem;
    display: block;
  }
  
  .ct-controls {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .ct-btn {
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 16px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
  }
  
  .ct-btn-primary {
    background: linear-gradient(135deg, var(--ct-gradient-1), var(--ct-gradient-2));
    color: white;
  }
  
  .ct-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(183, 33, 255, 0.4);
  }
  
  .ct-btn-secondary {
    background: var(--ct-surface-light);
    color: var(--ct-text);
    border: 2px solid var(--ct-border);
  }
  
  .ct-btn-secondary:hover {
    border-color: var(--ct-gradient-1);
    background: rgba(183, 33, 255, 0.1);
  }
  
  .ct-btn-danger {
    background: var(--ct-danger);
    color: white;
  }
  
  .ct-btn-danger:hover {
    background: #cc0056;
    transform: translateY(-3px);
  }
  
  .ct-presets {
    background: var(--ct-surface);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid var(--ct-border);
    margin-bottom: 3rem;
  }
  
  .ct-presets-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--ct-text);
  }
  
  .ct-presets-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }
  
  .ct-preset-btn {
    padding: 1.25rem 1rem;
    background: var(--ct-surface-light);
    border: 2px solid var(--ct-border);
    border-radius: 12px;
    color: var(--ct-text);
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
  }
  
  .ct-preset-time {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .ct-preset-label {
    font-size: 0.875rem;
    color: var(--ct-text-dim);
  }
  
  .ct-preset-btn:hover {
    border-color: var(--ct-gradient-1);
    background: rgba(183, 33, 255, 0.1);
    transform: translateY(-3px);
  }
  
  .ct-active-timers {
    margin-bottom: 3rem;
  }
  
  .ct-active-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--ct-text);
  }
  
  .ct-timer-card {
    background: var(--ct-surface);
    border-radius: 20px;
    padding: 1.5rem;
    border: 1px solid var(--ct-border);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
  }
  
  .ct-timer-card:hover {
    border-color: var(--ct-gradient-1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .ct-timer-info {
    flex: 1;
  }
  
  .ct-timer-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .ct-timer-time {
    font-size: 2rem;
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
    color: var(--ct-gradient-2);
  }
  
  .ct-timer-actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .ct-timer-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.875rem;
  }
  
  .ct-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--ct-bg);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .ct-fullscreen-timer {
    font-size: 12rem;
    font-weight: 200;
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
    background: linear-gradient(135deg, var(--ct-gradient-1), var(--ct-gradient-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 4rem;
  }
  
  @media (max-width: 768px) {
    .ct-fullscreen-timer { font-size: 6rem; }
  }
  
  .ct-exit-fullscreen {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: var(--ct-text);
    padding: 1rem;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }
  
  .ct-exit-fullscreen:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .ct-alert {
    animation: pulse-danger 1s ease-in-out infinite;
  }
  
  @keyframes pulse-danger {
    0%, 100% { 
      transform: scale(1);
      filter: brightness(1);
    }
    50% { 
      transform: scale(1.05);
      filter: brightness(1.3);
    }
  }
  
  .ct-related-tools {
    margin-top: 4rem;
  }
  
  .ct-related-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--ct-text);
  }
  
  .ct-related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .ct-tool-card {
    background: var(--ct-surface);
    border-radius: 20px;
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--ct-border);
  }
  
  .ct-tool-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, rgba(183, 33, 255, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .ct-tool-card:hover::before {
    opacity: 1;
  }
  
  .ct-tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .ct-tool-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--ct-gradient-1), var(--ct-gradient-2));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .ct-tool-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .ct-tool-desc {
    color: var(--ct-text-dim);
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .ct-content {
    background: var(--ct-surface);
    border-radius: 32px;
    padding: 3rem;
    margin-top: 4rem;
    border: 1px solid var(--ct-border);
  }
  
  .ct-content h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--ct-gradient-1), var(--ct-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .ct-content p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--ct-text-dim);
  }
  
  .ct-content ul {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }
  
  .ct-content li {
    margin-bottom: 0.75rem;
    color: var(--ct-text-dim);
  }
  
  @media (max-width: 768px) {
    .ct-container { padding: 1rem 0.4rem; }
    .ct-main-timer { padding: 2rem 1.5rem; }
    .ct-timer-inputs { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
  }
</style>

<div class="ct-wrapper">
  <div class="ct-bg-animation">
    <div class="ct-bg-gradient"></div>
    <div class="ct-bg-gradient"></div>
    <div class="ct-bg-gradient"></div>
  </div>
  
  <div class="ct-container">
    <header class="ct-header">
      <h1 class="ct-title">Countdown Timer</h1>
    </header>
    
    <div class="ct-main-timer">
      <div class="ct-timer-display" id="mainDisplay">00:00:00</div>
      
      <div class="ct-timer-inputs">
        <div class="ct-input-group">
          <div class="ct-input-wrapper">
            <input type="number" class="ct-time-input" id="hoursInput" min="0" max="99" value="0">
          </div>
          <label class="ct-input-label">Hours</label>
        </div>
        
        <div class="ct-input-group">
          <div class="ct-input-wrapper">
            <input type="number" class="ct-time-input" id="minutesInput" min="0" max="59" value="5">
          </div>
          <label class="ct-input-label">Minutes</label>
        </div>
        
        <div class="ct-input-group">
          <div class="ct-input-wrapper">
            <input type="number" class="ct-time-input" id="secondsInput" min="0" max="59" value="0">
          </div>
          <label class="ct-input-label">Seconds</label>
        </div>
      </div>
      
      <div class="ct-controls">
        <button class="ct-btn ct-btn-primary" id="startBtn" onclick="startTimer()">Start Timer</button>
        <button class="ct-btn ct-btn-secondary" id="pauseBtn" onclick="pauseTimer()" style="display: none;">Pause</button>
        <button class="ct-btn ct-btn-danger" onclick="resetTimer()">Reset</button>
        <button class="ct-btn ct-btn-secondary" onclick="toggleFullscreen()">Full Screen</button>
      </div>
    </div>
    
    <div class="ct-presets">
      <h3 class="ct-presets-title">Quick Timers</h3>
      <div class="ct-presets-grid">
        <button class="ct-preset-btn" onclick="setPreset(0, 1, 0)">
          <div class="ct-preset-time">1:00</div>
          <div class="ct-preset-label">1 Minute</div>
        </button>
        <button class="ct-preset-btn" onclick="setPreset(0, 5, 0)">
          <div class="ct-preset-time">5:00</div>
          <div class="ct-preset-label">5 Minutes</div>
        </button>
        <button class="ct-preset-btn" onclick="setPreset(0, 10, 0)">
          <div class="ct-preset-time">10:00</div>
          <div class="ct-preset-label">10 Minutes</div>
        </button>
        <button class="ct-preset-btn" onclick="setPreset(0, 15, 0)">
          <div class="ct-preset-time">15:00</div>
          <div class="ct-preset-label">15 Minutes</div>
        </button>
        <button class="ct-preset-btn" onclick="setPreset(0, 25, 0)">
          <div class="ct-preset-time">25:00</div>
          <div class="ct-preset-label">Pomodoro</div>
        </button>
        <button class="ct-preset-btn" onclick="setPreset(0, 30, 0)">
          <div class="ct-preset-time">30:00</div>
          <div class="ct-preset-label">30 Minutes</div>
        </button>
        <button class="ct-preset-btn" onclick="setPreset(1, 0, 0)">
          <div class="ct-preset-time">1:00:00</div>
          <div class="ct-preset-label">1 Hour</div>
        </button>
        <button class="ct-preset-btn" onclick="setPreset(1, 30, 0)">
          <div class="ct-preset-time">1:30:00</div>
          <div class="ct-preset-label">90 Minutes</div>
        </button>
      </div>
    </div>
    
    <div class="ct-active-timers" id="activeTimers" style="display: none;">
      <h3 class="ct-active-title">Active Timers</h3>
      <div id="timersList"></div>
    </div>
    
    <div class="ct-related-tools">
      <h2 class="ct-related-title">Related Tools</h2>
      <div class="ct-related-grid">
        <a href="/calculators/date-time/stopwatch-for-study-online" class="ct-tool-card">
          <div class="ct-tool-icon">⏱️</div>
          <div class="ct-tool-name">Stopwatch</div>
          <div class="ct-tool-desc">Track elapsed time with precision</div>
        </a>
        <a href="/calculators/date-time/time-duration-calculator-online-free" class="ct-tool-card">
          <div class="ct-tool-icon">⏰</div>
          <div class="ct-tool-name">Time Duration</div>
          <div class="ct-tool-desc">Calculate time between two points</div>
        </a>
        <a href="/converters/date-time/time-zone-converter" class="ct-tool-card">
          <div class="ct-tool-icon">🌍</div>
          <div class="ct-tool-name">World Clock</div>
          <div class="ct-tool-desc">Current time around the world</div>
        </a>
        <a href="/calculators/date-time/date-calculator-by-days-weeks-months-years" class="ct-tool-card">
          <div class="ct-tool-icon">🍅</div>
          <div class="ct-tool-name">Date Calculator</div>
          <div class="ct-tool-desc">Add or Subtract Days, Weeks, Months & Years</div>
        </a>
      </div>
    </div>
    
    <div class="ct-content">
      <h2>Quick Timer Guide</h2>
      <p>Set custom countdown timers for any duration. Perfect for cooking, workouts, study sessions, and more.</p>
      
      <ul>
        <li>Enter hours, minutes, and seconds or use quick presets</li>
        <li>Visual and audio alerts when timer completes</li>
        <li>Run multiple timers simultaneously</li>
        <li>Full-screen mode for better visibility</li>
        <li>Continues running even if you switch tabs</li>
      </ul>
      
      <p>Pro tip: Use keyboard shortcuts - Spacebar to start/pause, R to reset, F for fullscreen.</p>
    </div>
  </div>
</div>

<div class="ct-fullscreen" id="fullscreenMode" style="display: none;">
  <button class="ct-exit-fullscreen" onclick="toggleFullscreen()">✕</button>
  <div class="ct-fullscreen-timer" id="fullscreenDisplay">00:00:00</div>
  <div class="ct-controls">
    <button class="ct-btn ct-btn-primary" onclick="startTimer()">
      <span id="fullscreenBtnText">Start</span>
    </button>
    <button class="ct-btn ct-btn-danger" onclick="resetTimer()">Reset</button>
  </div>
</div>

<script>
  let timers = [];
  let mainTimerInterval = null;
  let mainTimerSeconds = 0;
  let isMainTimerRunning = false;
  
  // Audio context for alarm
  let audioContext = null;
  
  function initAudio() {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }
  
  function playAlarm() {
    initAudio();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Create alarm pattern
    oscillator.frequency.value = 800;
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    
    // Beep pattern
    for (let i = 0; i < 3; i++) {
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + i * 0.5);
      gainNode.gain.setValueAtTime(0, audioContext.currentTime + i * 0.5 + 0.2);
    }
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1.5);
  }
  
  function updateDisplay(seconds, displayId = 'mainDisplay') {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById(displayId).textContent = display;
    
    if (displayId === 'mainDisplay') {
      document.getElementById('fullscreenDisplay').textContent = display;
    }
  }
  
  function setPreset(hours, minutes, seconds) {
    document.getElementById('hoursInput').value = hours;
    document.getElementById('minutesInput').value = minutes;
    document.getElementById('secondsInput').value = seconds;
    
    mainTimerSeconds = hours * 3600 + minutes * 60 + seconds;
    updateDisplay(mainTimerSeconds);
  }
  
  function startTimer() {
    if (!isMainTimerRunning) {
      const hours = parseInt(document.getElementById('hoursInput').value) || 0;
      const minutes = parseInt(document.getElementById('minutesInput').value) || 0;
      const seconds = parseInt(document.getElementById('secondsInput').value) || 0;
      
      if (mainTimerSeconds === 0) {
        mainTimerSeconds = hours * 3600 + minutes * 60 + seconds;
      }
      
      if (mainTimerSeconds === 0) {
        alert('Please set a timer duration!');
        return;
      }
      
      isMainTimerRunning = true;
      document.getElementById('startBtn').style.display = 'none';
      document.getElementById('pauseBtn').style.display = 'inline-block';
      document.getElementById('fullscreenBtnText').textContent = 'Pause';
      
      // Disable inputs
      document.querySelectorAll('.ct-time-input').forEach(input => input.disabled = true);
      
      mainTimerInterval = setInterval(() => {
        mainTimerSeconds--;
        updateDisplay(mainTimerSeconds);
        
        if (mainTimerSeconds <= 0) {
          completeTimer();
        }
      }, 1000);
    } else {
      pauseTimer();
    }
  }
  
  function pauseTimer() {
    isMainTimerRunning = false;
    clearInterval(mainTimerInterval);
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('fullscreenBtnText').textContent = 'Resume';
  }
  
  function resetTimer() {
    clearInterval(mainTimerInterval);
    mainTimerSeconds = 0;
    isMainTimerRunning = false;
    
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('fullscreenBtnText').textContent = 'Start';
    
    // Enable inputs
    document.querySelectorAll('.ct-time-input').forEach(input => input.disabled = false);
    
    // Reset display
    updateDisplay(0);
    
    // Remove alert class
    document.getElementById('mainDisplay').classList.remove('ct-alert');
    document.getElementById('fullscreenDisplay').classList.remove('ct-alert');
  }
  
  function completeTimer() {
    clearInterval(mainTimerInterval);
    isMainTimerRunning = false;
    
    // Visual alert
    document.getElementById('mainDisplay').textContent = "TIME'S UP!";
    document.getElementById('fullscreenDisplay').textContent = "TIME'S UP!";
    document.getElementById('mainDisplay').classList.add('ct-alert');
    document.getElementById('fullscreenDisplay').classList.add('ct-alert');
    
    // Play alarm
    playAlarm();
    
    // Show notification
    if (Notification.permission === 'granted') {
      new Notification('Timer Complete!', {
        body: 'Your countdown timer has finished.',
        icon: '/favicon.ico'
      });
    }
    
    // Reset button states
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.querySelectorAll('.ct-time-input').forEach(input => input.disabled = false);
  }
  
  function toggleFullscreen() {
    const fullscreenMode = document.getElementById('fullscreenMode');
    if (fullscreenMode.style.display === 'none') {
      fullscreenMode.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    } else {
      fullscreenMode.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
  
  // Input validation
  document.querySelectorAll('.ct-time-input').forEach(input => {
    input.addEventListener('input', function() {
      const max = parseInt(this.getAttribute('max'));
      const min = parseInt(this.getAttribute('min'));
      let value = parseInt(this.value);
      
      if (value > max) this.value = max;
      if (value < min) this.value = min;
      
      // Update main timer seconds if not running
      if (!isMainTimerRunning) {
        const hours = parseInt(document.getElementById('hoursInput').value) || 0;
        const minutes = parseInt(document.getElementById('minutesInput').value) || 0;
        const seconds = parseInt(document.getElementById('secondsInput').value) || 0;
        mainTimerSeconds = hours * 3600 + minutes * 60 + seconds;
        updateDisplay(mainTimerSeconds);
      }
    });
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    switch(e.key.toLowerCase()) {
      case ' ':
        e.preventDefault();
        if (isMainTimerRunning) {
          pauseTimer();
        } else {
          startTimer();
        }
        break;
      case 'r':
        if (!isMainTimerRunning) {
          resetTimer();
        }
        break;
      case 'f':
        toggleFullscreen();
        break;
      case 'escape':
        if (document.getElementById('fullscreenMode').style.display !== 'none') {
          toggleFullscreen();
        }
        break;
    }
  });
  
  // Request notification permission
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
  
  // Initialize display
  updateDisplay(0);
</script>
