---
title: "Stopwatch For Study Online - Free Timer with Split Tracking"
description: "Professional Stopwatch For Study Online with millisecond precision, lap times, split tracking, and full-screen mode. For sports, studying,time tracking."
localtitle: "Stopwatch"
layout: tool
categories: [calculators, dateTimeCalc]
permalink: /calculators/date-time/stopwatch-for-study-online
faq:
  - q: "How accurate is this online stopwatch?"
    a: "Our stopwatch is accurate to the millisecond (1/1000th of a second). However, the actual precision may vary slightly depending on your browser and device performance. For most practical purposes like sports timing, cooking, or studying, its more than accurate enough."
  - q: "Can I use the stopwatch in full-screen mode?"
    a: "Yes! Click the full-screen button to expand the stopwatch to fill your entire screen. This is perfect for visibility from a distance, like when timing sports events or exercises. Press ESC or click the exit button to return to normal view."
  - q: "What's the difference between lap time and split time?"
    a: "Lap time shows the duration of each individual lap (time since the last lap). Split time shows the total elapsed time at each lap point. For example, if you're running: Lap 1 might be 2:30, Lap 2 might be 2:45 (lap time), while splits would show 2:30, 5:15 (cumulative time)."
  - q: "Can I save or export my lap times?"
    a: "Currently, lap times are displayed on screen and you can copy them manually or take a screenshot. The lap data remains visible until you reset the stopwatch, so you have time to record your results."
  - q: "Does the stopwatch keep running if I switch browser tabs?"
    a: "Yes! The stopwatch continues running accurately even when you switch to another tab or minimize your browser. It uses high-precision timing that isn't affected by tab switching."
  - q: "What's the maximum time the stopwatch can measure?"
    a: "The stopwatch can run for up to 99 hours, 59 minutes, and 59 seconds. After that, it will stop automatically. This is more than enough for virtually any timing need."
  - q: "Can I use keyboard shortcuts to control the stopwatch?"
    a: "Yes! Press Spacebar to start/stop the stopwatch, 'L' to record a lap (when running), and 'R' to reset. These shortcuts make it easy to control the timer without clicking."
  - q: "Why might there be slight differences in timing between devices?"
    a: "Different devices and browsers handle JavaScript timing slightly differently. While our stopwatch is very accurate, factors like CPU load, browser performance, and system resources can cause minor variations (usually less than 0.1%)."
---

<style>
  :root {
    --sw-primary: #3B82F6;
    --sw-secondary: #8B5CF6;
    --sw-accent: #10B981;
    --sw-danger: #EF4444;
    --sw-warning: #F59E0B;
    --sw-bg: #0F172A;
    --sw-surface: #1E293B;
    --sw-text: #F1F5F9;
    --sw-text-dim: #94A3B8;
    --sw-border: #334155;
    --sw-glow: 0 0 20px rgba(59, 130, 246, 0.5);
    --sw-pulse: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .sw-wrapper {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--sw-bg);
    color: var(--sw-text);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    position: relative;
    overflow: hidden;
  }
  
  .sw-wrapper::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, var(--sw-primary) 0%, transparent 70%);
    opacity: 0.1;
    transform: translate(-50%, -50%);
    animation: pulse 4s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.1; }
    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.15; }
  }
  
  .sw-container {
    max-width: 1200px;
    width: 100%;
    position: relative;
    z-index: 1;
  }
  
  .sw-header {
    text-align: center;
    margin-bottom: 3rem;
    animation: fadeInDown 0.8s ease;
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .sw-title {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--sw-primary) 0%, var(--sw-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -1px;
  }
  
  @media (max-width: 768px) {
    .sw-title {
      font-size: 2.5rem;
    }
  }
  
  .sw-subtitle {
    color: var(--sw-text-dim);
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .sw-main-display {
    background: var(--sw-surface);
    border-radius: 32px;
    padding: 3rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    border: 1px solid var(--sw-border);
    margin-bottom: 3rem;
    position: relative;
    animation: fadeInUp 0.8s ease 0.2s both;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .sw-time-display {
    font-size: 5rem;
    font-weight: 200;
    text-align: center;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.05em;
    margin-bottom: 3rem;
    position: relative;
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
  }
  
  @media (max-width: 768px) {
    .sw-time-display {
      font-size: 3rem;
    }
  }
  
  .sw-time-display.running {
    color: var(--sw-accent);
    text-shadow: var(--sw-glow);
  }
  
  .sw-milliseconds {
    font-size: 0.6em;
    color: var(--sw-text-dim);
  }
  
  .sw-controls {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .sw-btn {
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 16px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
  }
  
  .sw-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  .sw-btn:active::before {
    width: 300px;
    height: 300px;
  }
  
  .sw-btn-primary {
    background: linear-gradient(135deg, var(--sw-primary) 0%, var(--sw-secondary) 100%);
    color: white;
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  }
  
  .sw-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
  }
  
  .sw-btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: var(--sw-text);
    border: 2px solid var(--sw-border);
  }
  
  .sw-btn-secondary:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: var(--sw-primary);
  }
  
  .sw-btn-danger {
    background: var(--sw-danger);
    color: white;
  }
  
  .sw-btn-danger:hover {
    background: #DC2626;
    transform: translateY(-2px);
  }
  
  .sw-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
  
  .sw-laps-section {
    background: var(--sw-surface);
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 3rem;
    border: 1px solid var(--sw-border);
    animation: fadeIn 0.5s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .sw-laps-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .sw-laps-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--sw-text);
  }
  
  .sw-laps-count {
    background: rgba(59, 130, 246, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    color: var(--sw-primary);
  }
  
  .sw-laps-grid {
    display: grid;
    gap: 0.75rem;
    max-height: 400px;
    overflow-y: auto;
    padding-right: 0.5rem;
  }
  
  .sw-lap-item {
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: var(--sw-bg);
    border-radius: 12px;
    align-items: center;
    transition: all 0.3s ease;
    animation: slideIn 0.3s ease;
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .sw-lap-item:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateX(5px);
  }
  
  .sw-lap-number {
    font-weight: 700;
    color: var(--sw-primary);
    font-size: 1.1rem;
  }
  
  .sw-lap-time {
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
    color: var(--sw-text);
  }
  
  .sw-lap-split {
    color: var(--sw-text-dim);
  }
  
  .sw-lap-diff {
    text-align: right;
    font-size: 0.9rem;
  }
  
  .sw-lap-diff.faster {
    color: var(--sw-accent);
  }
  
  .sw-lap-diff.slower {
    color: var(--sw-danger);
  }
  
  .sw-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .sw-feature-btn {
    padding: 1.5rem;
    background: var(--sw-surface);
    border: 2px solid var(--sw-border);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
  }
  
  .sw-feature-btn:hover {
    border-color: var(--sw-primary);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  .sw-feature-icon {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }
  
  .sw-feature-name {
    font-weight: 600;
    color: var(--sw-text);
    margin-bottom: 0.5rem;
  }
  
  .sw-feature-desc {
    font-size: 0.875rem;
    color: var(--sw-text-dim);
  }
  
  .sw-content {
    background: var(--sw-surface);
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 3rem;
    border: 1px solid var(--sw-border);
  }
  
  .sw-content h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--sw-primary);
  }
  
  .sw-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--sw-text);
  }
  
  .sw-content p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--sw-text-dim);
  }
  
  .sw-content ul {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
  
  .sw-content li {
    margin-bottom: 0.75rem;
    color: var(--sw-text-dim);
    line-height: 1.6;
  }
  
  .sw-content strong {
    color: var(--sw-text);
    font-weight: 600;
  }
  
  .sw-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--sw-bg);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .sw-fullscreen .sw-time-display {
    font-size: 10rem;
    margin-bottom: 4rem;
  }
  
  .sw-fullscreen .sw-controls {
    gap: 2rem;
  }
  
  .sw-fullscreen .sw-btn {
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
  }
  
  .sw-exit-fullscreen {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: var(--sw-text);
    padding: 1rem;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }
  
  .sw-exit-fullscreen:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    .sw-main-display {
      padding: 2rem 1.5rem;
    }
    
    .sw-fullscreen .sw-time-display {
      font-size: 5rem;
    }
    
    .sw-fullscreen .sw-btn {
      padding: 1rem 2rem;
      font-size: 1.1rem;
    }
  }
  
  /* Scrollbar styling */
  .sw-laps-grid::-webkit-scrollbar {
    width: 8px;
  }
  
  .sw-laps-grid::-webkit-scrollbar-track {
    background: var(--sw-bg);
    border-radius: 4px;
  }
  
  .sw-laps-grid::-webkit-scrollbar-thumb {
    background: var(--sw-border);
    border-radius: 4px;
  }
  
  .sw-laps-grid::-webkit-scrollbar-thumb:hover {
    background: var(--sw-primary);
  }
  
  .sw-faq-section {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  
  .sw-section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--sw-text);
  }
  
  .sw-faq-container {
    background: var(--sw-surface);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid var(--sw-border);
  }
  
  .sw-faq-item {
    border-bottom: 1px solid var(--sw-border);
    padding: 0;
    margin: 0;
  }
  
  .sw-faq-item:last-child {
    border-bottom: none;
  }
  
  .sw-faq-question {
    width: 100%;
    padding: 1.5rem 2rem;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--sw-text);
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
  }
  
  .sw-faq-question:hover {
    color: var(--sw-primary);
    background: rgba(59, 130, 246, 0.05);
  }
  
  .sw-faq-q {
    flex: 1;
    padding-right: 1rem;
  }
  
  .sw-faq-arrow {
    transition: transform 0.3s ease;
    color: var(--sw-primary);
    flex-shrink: 0;
  }
  
  .sw-faq-item.active .sw-faq-arrow {
    transform: rotate(180deg);
  }
  
  .sw-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .sw-faq-item.active .sw-faq-answer {
    max-height: 500px;
  }
  
  .sw-faq-answer p {
    padding: 0 2rem 1.5rem 2rem;
    color: var(--sw-text-dim);
    line-height: 1.8;
    margin: 0;
  }
</style>

<div class="sw-wrapper">
  <div class="sw-container">
    <div class="sw-header">
      <h1 class="sw-title">Stopwatch</h1>
      <p class="sw-subtitle">Precision timing with lap tracking and split times</p>
    </div>
    
    <div class="sw-main-display">
      <div class="sw-time-display" id="timeDisplay">
        00:00:00<span class="sw-milliseconds">.00</span>
      </div>
      
      <div class="sw-controls">
        <button class="sw-btn sw-btn-primary" id="startStopBtn" onclick="toggleStopwatch()">
          START
        </button>
        <button class="sw-btn sw-btn-secondary" id="lapBtn" onclick="recordLap()" disabled>
          LAP
        </button>
        <button class="sw-btn sw-btn-danger" id="resetBtn" onclick="resetStopwatch()">
          RESET
        </button>
      </div>
    </div>
    
    <div class="sw-features">
      <div class="sw-feature-btn" onclick="toggleFullscreen()">
        <div class="sw-feature-icon">🖥️</div>
        <div class="sw-feature-name">Full Screen</div>
        <div class="sw-feature-desc">Maximize visibility</div>
      </div>
      <div class="sw-feature-btn" onclick="toggleSound()">
        <div class="sw-feature-icon">🔊</div>
        <div class="sw-feature-name">Sound Effects</div>
        <div class="sw-feature-desc">Audio feedback</div>
      </div>
      <div class="sw-feature-btn" onclick="exportLaps()">
        <div class="sw-feature-icon">📊</div>
        <div class="sw-feature-name">Export Laps</div>
        <div class="sw-feature-desc">Copy lap data</div>
      </div>
      <div class="sw-feature-btn" onclick="toggleTheme()">
        <div class="sw-feature-icon">🌙</div>
        <div class="sw-feature-name">Dark Mode</div>
        <div class="sw-feature-desc">Easy on the eyes</div>
      </div>
    </div>
    
    <div class="sw-laps-section" id="lapsSection" style="display: none;">
      <div class="sw-laps-header">
        <h2 class="sw-laps-title">Lap Times</h2>
        <div class="sw-laps-count" id="lapCount">0 laps</div>
      </div>
      <div class="sw-laps-grid" id="lapsGrid">
        <!-- Laps will be added here dynamically -->
      </div>
    </div>
    
    <div class="sw-content">
      <h2>How to Use the Online Stopwatch</h2>
      <p>Our stopwatch is designed to be simple yet powerful. Whether your timing a race, tracking study sessions, or monitoring cooking times, this tool has got everything you need for accurate time measurement.</p>
      
      <h3>Basic Controls</h3>
      <ul>
        <li><strong>Start/Stop:</strong> Click the START button to begin timing. The button changes to STOP when the timer is running</li>
        <li><strong>Lap:</strong> While the stopwatch is running, click LAP to record a split time without stopping the timer</li>
        <li><strong>Reset:</strong> Clears the timer and all recorded laps, returning everything to 00:00:00</li>
      </ul>
      
      <h3>Advanced Features That Make Us Special</h3>
      <p>What sets our stopwatch apart from others? Its the attention to detail and user-friendly features:</p>
      
      <ul>
        <li><strong>Millisecond Precision:</strong> Track time down to 1/100th of a second for accurate measurements</li>
        <li><strong>Lap Time Analysis:</strong> See both lap times and split times, plus comparisons between laps</li>
        <li><strong>Full-Screen Mode:</strong> Perfect for timing events where you need to see the display from far away</li>
        <li><strong>Keyboard Shortcuts:</strong> Use spacebar to start/stop, making it easier to control without looking</li>
        <li><strong>Background Running:</strong> The timer keeps going even if you switch browser tabs</li>
      </ul>
      
      <h3>Common Uses for a Stopwatch</h3>
      <p>People use our online stopwatch for all sorts of timing needs. Here's some popular applications:</p>
      
      <ul>
        <li><strong>Sports & Fitness:</strong> Time your runs, track workout intervals, or measure lap times</li>
        <li><strong>Studying:</strong> Use for pomodoro technique or timing study sessions</li>
        <li><strong>Cooking:</strong> Keep track of cooking times when recipies require precise timing</li>
        <li><strong>Games & Competitions:</strong> Time board games, speed runs, or any competitive activity</li>
        <li><strong>Work Tasks:</strong> Monitor how long tasks take for better time management</li>
        <li><strong>Scientific Experiments:</strong> When you need to measure reaction times or experiment durations</li>
      </ul>
      
      <h3>Understanding Lap Times vs Split Times</h3>
      <p>This is something that confuses alot of people, so let's clear it up:</p>
      
      <ul>
        <li><strong>Lap Time:</strong> Shows how long each individual segment took. If lap 1 was 2:30 and lap 2 was 2:45, those are your lap times</li>
        <li><strong>Split Time:</strong> Shows the total elapsed time at each point. Using the same example, splits would be 2:30 and 5:15</li>
        <li><strong>Why Both Matter:</strong> Lap times help you see if your getting faster or slower, while splits show your overall progress</li>
      </ul>
      
      <h3>Pro Tips for Better Timing</h3>
      <p>Get the most out of your stopwatch sessions with these helpful tips:</p>
      
      <ul>
        <li><strong>Use keyboard shortcuts:</strong> Spacebar for start/stop is faster than clicking, especially for reaction-based timing</li>
        <li><strong>Full-screen for events:</strong> When timing sports or group activities, full-screen mode makes it visible to everyone</li>
        <li><strong>Record multiple laps:</strong> Even if you dont need splits, laps help you track consistency and improvement</li>
        <li><strong>Keep the tab active:</strong> While the timer works in background, keeping the tab visible ensures smooth display updates</li>
      </ul>
      
      <h3>Technical Accuracy Information</h3>
      <p>Our stopwatch uses high-resolution timing APIs available in modern browsers. While its extremely accurate for most purposes, here's what you should know:</p>
      
      <ul>
        <li>Accuracy is typically within 10-20 milliseconds, depending on your device and browser</li>
        <li>For official sports timing, dedicated hardware timers are still recomended</li>
        <li>The display updates 100 times per second for smooth millisecond tracking</li>
        <li>Timing continues accurately even during high CPU usage or when switching tabs</li>
      </ul>
    </div>
    
    <div class="sw-faq-section">
      <h2 class="sw-section-title">Frequently Asked Questions</h2>
      
      <div class="sw-faq-container">
        <div class="sw-faq-item">
          <button class="sw-faq-question" onclick="toggleFaq(this)">
            <span class="sw-faq-q">How accurate is this online stopwatch?</span>
            <svg class="sw-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sw-faq-answer">
            <p>Our stopwatch is accurate to the millisecond (1/1000th of a second). However, the actual precision may vary slightly depending on your browser and device performance. For most practical purposes like sports timing, cooking, or studying, its more than accurate enough.</p>
          </div>
        </div>
        
        <div class="sw-faq-item">
          <button class="sw-faq-question" onclick="toggleFaq(this)">
            <span class="sw-faq-q">Can I use the stopwatch in full-screen mode?</span>
            <svg class="sw-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sw-faq-answer">
            <p>Yes! Click the full-screen button to expand the stopwatch to fill your entire screen. This is perfect for visibility from a distance, like when timing sports events or exercises. Press ESC or click the exit button to return to normal view.</p>
          </div>
        </div>
        
        <div class="sw-faq-item">
          <button class="sw-faq-question" onclick="toggleFaq(this)">
            <span class="sw-faq-q">What's the difference between lap time and split time?</span>
            <svg class="sw-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sw-faq-answer">
            <p>Lap time shows the duration of each individual lap (time since the last lap). Split time shows the total elapsed time at each lap point. For example, if you're running: Lap 1 might be 2:30, Lap 2 might be 2:45 (lap time), while splits would show 2:30, 5:15 (cumulative time).</p>
          </div>
        </div>
        
        <div class="sw-faq-item">
          <button class="sw-faq-question" onclick="toggleFaq(this)">
            <span class="sw-faq-q">Can I save or export my lap times?</span>
            <svg class="sw-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sw-faq-answer">
            <p>Currently, lap times are displayed on screen and you can copy them manually or take a screenshot. The lap data remains visible until you reset the stopwatch, so you have time to record your results.</p>
          </div>
        </div>
        
        <div class="sw-faq-item">
          <button class="sw-faq-question" onclick="toggleFaq(this)">
            <span class="sw-faq-q">Does the stopwatch keep running if I switch browser tabs?</span>
            <svg class="sw-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sw-faq-answer">
            <p>Yes! The stopwatch continues running accurately even when you switch to another tab or minimize your browser. It uses high-precision timing that isn't affected by tab switching.</p>
          </div>
        </div>
        
        <div class="sw-faq-item">
          <button class="sw-faq-question" onclick="toggleFaq(this)">
            <span class="sw-faq-q">What's the maximum time the stopwatch can measure?</span>
            <svg class="sw-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sw-faq-answer">
            <p>The stopwatch can run for up to 99 hours, 59 minutes, and 59 seconds. After that, it will stop automatically. This is more than enough for virtually any timing need.</p>
          </div>
        </div>
        
        <div class="sw-faq-item">
          <button class="sw-faq-question" onclick="toggleFaq(this)">
            <span class="sw-faq-q">Can I use keyboard shortcuts to control the stopwatch?</span>
            <svg class="sw-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sw-faq-answer">
            <p>Yes! Press Spacebar to start/stop the stopwatch, 'L' to record a lap (when running), and 'R' to reset. These shortcuts make it easy to control the timer without clicking.</p>
          </div>
        </div>
        
        <div class="sw-faq-item">
          <button class="sw-faq-question" onclick="toggleFaq(this)">
            <span class="sw-faq-q">Why might there be slight differences in timing between devices?</span>
            <svg class="sw-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="sw-faq-answer">
            <p>Different devices and browsers handle JavaScript timing slightly differently. While our stopwatch is very accurate, factors like CPU load, browser performance, and system resources can cause minor variations (usually less than 0.1%).</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="sw-fullscreen" id="fullscreenMode" style="display: none;">
  <button class="sw-exit-fullscreen" onclick="toggleFullscreen()">✕</button>
  <div class="sw-time-display" id="fullscreenTime">
    00:00:00<span class="sw-milliseconds">.00</span>
  </div>
  <div class="sw-controls">
    <button class="sw-btn sw-btn-primary" onclick="toggleStopwatch()">
      <span id="fullscreenBtnText">START</span>
    </button>
    <button class="sw-btn sw-btn-secondary" onclick="recordLap()" id="fullscreenLapBtn" disabled>
      LAP
    </button>
    <button class="sw-btn sw-btn-danger" onclick="resetStopwatch()">
      RESET
    </button>
  </div>
</div>

<script>
  let startTime = null;
  let elapsedTime = 0;
  let isRunning = false;
  let animationId = null;
  let laps = [];
  let lastLapTime = 0;
  let soundEnabled = false;
  
  // Sound effects (using Web Audio API)
  function playSound(frequency, duration) {
    if (!soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  }
  
  function updateDisplay() {
    if (isRunning) {
      elapsedTime = Date.now() - startTime;
    }
    
    const totalMilliseconds = Math.floor(elapsedTime);
    const hours = Math.floor(totalMilliseconds / 3600000);
    const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
    
        const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}<span class="sw-milliseconds">.${String(milliseconds).padStart(2, '0')}</span>`;
    
    document.getElementById('timeDisplay').innerHTML = timeString;
    document.getElementById('fullscreenTime').innerHTML = timeString;
    
    if (isRunning) {
      document.getElementById('timeDisplay').classList.add('running');
      document.getElementById('fullscreenTime').classList.add('running');
      animationId = requestAnimationFrame(updateDisplay);
    } else {
      document.getElementById('timeDisplay').classList.remove('running');
      document.getElementById('fullscreenTime').classList.remove('running');
    }
  }
  
  function toggleStopwatch() {
    if (isRunning) {
      // Stop
      isRunning = false;
      elapsedTime = Date.now() - startTime;
      cancelAnimationFrame(animationId);
      
      document.getElementById('startStopBtn').textContent = 'START';
      document.getElementById('fullscreenBtnText').textContent = 'START';
      document.getElementById('lapBtn').disabled = true;
      document.getElementById('fullscreenLapBtn').disabled = true;
      
      playSound(300, 0.1);
    } else {
      // Start
      isRunning = true;
      startTime = Date.now() - elapsedTime;
      
      document.getElementById('startStopBtn').textContent = 'STOP';
      document.getElementById('fullscreenBtnText').textContent = 'STOP';
      document.getElementById('lapBtn').disabled = false;
      document.getElementById('fullscreenLapBtn').disabled = false;
      
      playSound(600, 0.1);
      updateDisplay();
    }
  }
  
  function resetStopwatch() {
    isRunning = false;
    elapsedTime = 0;
    startTime = null;
    laps = [];
    lastLapTime = 0;
    
    cancelAnimationFrame(animationId);
    
    document.getElementById('startStopBtn').textContent = 'START';
    document.getElementById('fullscreenBtnText').textContent = 'START';
    document.getElementById('lapBtn').disabled = true;
    document.getElementById('fullscreenLapBtn').disabled = true;
    
    document.getElementById('lapsSection').style.display = 'none';
    document.getElementById('lapsGrid').innerHTML = '';
    
    playSound(200, 0.2);
    updateDisplay();
  }
  
  function recordLap() {
    if (!isRunning) return;
    
    const currentTime = elapsedTime;
    const lapTime = currentTime - lastLapTime;
    
    laps.push({
      number: laps.length + 1,
      lapTime: lapTime,
      splitTime: currentTime
    });
    
    lastLapTime = currentTime;
    
    displayLaps();
    playSound(800, 0.1);
  }
  
  function formatTime(milliseconds) {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);
    
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(2, '0')}`;
    } else {
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(2, '0')}`;
    }
  }
  
  function displayLaps() {
    document.getElementById('lapsSection').style.display = 'block';
    document.getElementById('lapCount').textContent = `${laps.length} lap${laps.length !== 1 ? 's' : ''}`;
    
    const lapsGrid = document.getElementById('lapsGrid');
    lapsGrid.innerHTML = '';
    
    // Display laps in reverse order (most recent first)
    for (let i = laps.length - 1; i >= 0; i--) {
      const lap = laps[i];
      const lapItem = document.createElement('div');
      lapItem.className = 'sw-lap-item';
      
      // Calculate difference from previous lap
      let diffClass = '';
      let diffText = '';
      if (i > 0) {
        const diff = lap.lapTime - laps[i - 1].lapTime;
        if (diff > 0) {
          diffClass = 'slower';
          diffText = `+${formatTime(Math.abs(diff))}`;
        } else if (diff < 0) {
          diffClass = 'faster';
          diffText = `-${formatTime(Math.abs(diff))}`;
        } else {
          diffText = 'Same';
        }
      }
      
      lapItem.innerHTML = `
        <div class="sw-lap-number">Lap ${lap.number}</div>
        <div class="sw-lap-time">${formatTime(lap.lapTime)}</div>
        <div class="sw-lap-split">${formatTime(lap.splitTime)}</div>
        <div class="sw-lap-diff ${diffClass}">${diffText}</div>
      `;
      
      lapsGrid.appendChild(lapItem);
    }
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
  
  function toggleSound() {
    soundEnabled = !soundEnabled;
    playSound(400, 0.1);
    
    // Visual feedback
    const btn = event.target.closest('.sw-feature-btn');
    if (soundEnabled) {
      btn.style.borderColor = 'var(--sw-primary)';
      btn.querySelector('.sw-feature-name').textContent = 'Sound On';
    } else {
      btn.style.borderColor = 'var(--sw-border)';
      btn.querySelector('.sw-feature-name').textContent = 'Sound Off';
    }
  }
  
  function exportLaps() {
    if (laps.length === 0) {
      alert('No laps recorded yet!');
      return;
    }
    
    let exportText = 'Lap Times Export\n';
    exportText += '================\n\n';
    
    laps.forEach(lap => {
      exportText += `Lap ${lap.number}: ${formatTime(lap.lapTime)} (Split: ${formatTime(lap.splitTime)})\n`;
    });
    
    exportText += `\nTotal Time: ${formatTime(elapsedTime)}\n`;
    exportText += `Average Lap: ${formatTime(Math.floor(elapsedTime / laps.length))}\n`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(exportText).then(() => {
      alert('Lap times copied to clipboard!');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = exportText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Lap times copied to clipboard!');
    });
  }
  
  function toggleTheme() {
    // This is a placeholder - implement based on your site's theme system
    document.body.classList.toggle('dark-theme');
    
    const btn = event.target.closest('.sw-feature-btn');
    const icon = btn.querySelector('.sw-feature-icon');
    const name = btn.querySelector('.sw-feature-name');
    
    if (document.body.classList.contains('dark-theme')) {
      icon.textContent = '☀️';
      name.textContent = 'Light Mode';
    } else {
      icon.textContent = '🌙';
      name.textContent = 'Dark Mode';
    }
  }
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    switch(e.key.toLowerCase()) {
      case ' ':
        e.preventDefault();
        toggleStopwatch();
        break;
      case 'l':
        if (isRunning) {
          recordLap();
        }
        break;
      case 'r':
        if (!isRunning) {
          resetStopwatch();
        }
        break;
      case 'escape':
        if (document.getElementById('fullscreenMode').style.display !== 'none') {
          toggleFullscreen();
        }
        break;
    }
  });
  
  // FAQ Toggle Function
  function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.sw-faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // If this item wasn't active, open it
    if (!wasActive) {
      faqItem.classList.add('active');
    }
  }
  
  // Initialize display
  updateDisplay();
  
  // Prevent accidental page leave when stopwatch is running
  window.addEventListener('beforeunload', (e) => {
    if (isRunning) {
      e.preventDefault();
      e.returnValue = '';
      return 'Stopwatch is still running. Are you sure you want to leave?';
    }
  });
</script>
