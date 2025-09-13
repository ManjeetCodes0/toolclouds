---
title: "Time Zone Converter - Instantly Convert Times"
description: "A simple and free time zone converter. Easily find out what time it is in another part of the world. Handles Daylight Saving Time (DST) automatically."
localtitle: "Time Zone Converter"
layout: tool
categories: [dateTimeConv, converters]
permalink: /converters/date-time/time-zone-converter
faq:
  - q: "Does this tool handle Daylight Saving Time (DST)?"
    a: "Yep, it does automatically. When you pick a date, the tool knows if that place is in DST or not and gives you the correct time. You dont have to worry about it."
  - q: "What is UTC and GMT?"
    a: "UTC (Coordinated Universal Time) is the world's time standard. All other timezones are set as an offset from it (like UTC-5). GMT (Greenwich Mean Time) is an actual timezone used in the UK and other places. It's the same as UTC during winter but different in summer because of DST."
  - q: "Why isn't my city on the list?"
    a: "The list uses standard timezone names (like America/New_York) which can cover many cities. Try picking the major city closest to you in the same timezone, the time will be the same."
  - q: "How does the converter know my local time zone?"
    a: "The tool automatically detects your time zone from your browser settings. The 'Your Local Time' section is already set to your computer's time, so you just need to pick the timezone you want to convert to."
---

<style>
  :root {
    /* Default Light Theme */
    --tzc-bg: #F8FAFC; /* Slate-50 */
    --tzc-card-bg: #FFFFFF;
    --tzc-border: #E2E8F0; /* Slate-200 */
    --tzc-primary: #059669; /* Emerald-600 */
    --tzc-secondary: #0EA5E9; /* Sky-500 */
    --tzc-text-primary: #1E293B; /* Slate-800 */
    --tzc-text-secondary: #64748B; /* Slate-500 */
    --tzc-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07);
    --tzc-glow: 0 0 15px rgba(5, 150, 105, 0.2);
  }
  
  html[data-theme="dark"] {
    --tzc-bg: #0d1117;
    --tzc-card-bg: rgba(22, 27, 34, 0.8);
    --tzc-border: #30363d;
    --tzc-primary: #34D399; /* Emerald-400 */
    --tzc-secondary: #38BDF8; /* Sky-400 */
    --tzc-text-primary: #c9d1d9;
    --tzc-text-secondary: #8b949e;
    --tzc-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    --tzc-glow: 0 0 15px rgba(52, 211, 153, 0.2);
  }
  
  .tzc-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    background-color: var(--tzc-bg);
    color: var(--tzc-text-primary);
    padding: 1rem 0.4rem;
    min-height: 100vh;
  }

  .tzc-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .tzc-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .tzc-header h1 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, var(--tzc-primary), var(--tzc-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tzc-header p {
    font-size: 1.2rem;
    color: var(--tzc-text-secondary);
  }

  .tzc-main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: flex-start;
  }

  .tzc-card {
    background: var(--tzc-card-bg);
    border: 1px solid var(--tzc-border);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: var(--tzc-shadow);
  }
  
  .tzc-input-group { margin-bottom: 1.5rem; }
  .tzc-input-group label { display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--tzc-text-secondary); }
  .tzc-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--tzc-border);
    border-radius: 8px;
    font-size: 1rem;
    background-color: var(--tzc-bg);
    color: var(--tzc-text-primary);
    transition: all 0.2s ease;
  }
  .tzc-input:focus { outline: none; border-color: var(--tzc-primary); box-shadow: var(--tzc-glow); }

  .tzc-btn { width: 100%; padding: 0.8rem 1rem; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease; background-color: var(--tzc-primary); color: #fff; }
  .tzc-btn:hover { opacity: 0.85; }

  .tzc-results-area .tzc-placeholder { padding: 6rem 2rem; text-align: center; color: var(--tzc-text-secondary); }
  .tzc-results-area .tzc-placeholder .icon { font-size: 3rem; margin-bottom: 1rem; }
  .tzc-results-card { opacity: 0; transform: translateY(20px); animation: fadeIn 0.5s forwards; text-align: center; }
  @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }

  .tzc-result-main {
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid var(--tzc-border);
  }
  .tzc-result-time {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--tzc-primary);
    margin: 0;
  }
  .tzc-result-date {
    font-size: 1.2rem;
    color: var(--tzc-text-primary);
    margin-top: 0.5rem;
  }
  .tzc-result-tz-name {
    font-size: 1rem;
    color: var(--tzc-text-secondary);
    margin-top: 0.25rem;
  }
  .tzc-result-details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
  }
  .tzc-result-detail-item .label {
      font-size: 0.9rem;
      color: var(--tzc-text-secondary);
      margin-bottom: 0.25rem;
  }
   .tzc-result-detail-item .value {
      font-size: 1.2rem;
      font-weight: 600;
  }

  .tzc-section { margin-top: 3rem; }
  .tzc-section h2 { font-size: 1.8rem; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--tzc-border); }
  
  .tzc-content p { line-height: 1.7; color: var(--tzc-text-secondary); margin-bottom: 1rem; }

  .tzc-faq-item { border-bottom: 1px solid var(--tzc-border); padding: 1.25rem 0; }
  .tzc-faq-question { font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
  .tzc-faq-question::after { content: '+'; font-size: 1.5rem; transition: transform 0.3s ease; }
  .tzc-faq-item.active .tzc-faq-question::after { transform: rotate(45deg); }
  .tzc-faq-answer { display: none; padding-top: 1rem; color: var(--tzc-text-secondary); }
  .tzc-faq-item.active .tzc-faq-answer { display: block; }
  
  /* --- NEW STYLES FOR RELATED TOOLS --- */
  .tzc-related-tools { 
    display: grid; 
    grid-template-columns: 1fr 1fr; /* Two columns for a cleaner look */
    gap: 1.5rem; 
  }
  .tzc-tool-link { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem; 
    background-color: var(--tzc-card-bg); 
    border: 1px solid var(--tzc-border); 
    border-radius: 12px; 
    text-decoration: none; 
    color: var(--tzc-text-primary); 
    font-weight: 500;
    transition: all 0.2s ease-in-out; 
  }
  .tzc-tool-link:hover { 
    border-color: var(--tzc-primary); 
    transform: translateY(-4px); 
    box-shadow: var(--tzc-shadow);
    color: var(--tzc-primary);
  }
  .tzc-tool-link svg {
    width: 20px;
    height: 20px;
    stroke: var(--tzc-text-secondary);
    transition: all 0.2s ease-in-out;
  }
  .tzc-tool-link:hover svg {
      stroke: var(--tzc-primary);
      transform: translateX(3px);
  }
  @media (max-width: 600px) {
    .tzc-related-tools { grid-template-columns: 1fr; }
  }
  /* --- END NEW STYLES --- */
  
  @media (max-width: 900px) {
    .tzc-main-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="tzc-wrapper">
  <div class="tzc-container">
    <header class="tzc-header">
      <h1>Time Zone Converter</h1>
      <p>Quickly check the time in another part of the world.</p>
    </header>

    <main class="tzc-main-grid">
      <div class="tzc-converter-card tzc-card">
        <div class="tzc-input-group">
          <label for="localTime">Your Local Time</label>
          <input type="datetime-local" id="localTime" class="tzc-input">
        </div>
        <div class="tzc-input-group">
          <label for="targetTimezone">Convert To</label>
          <select id="targetTimezone" class="tzc-input"></select>
        </div>
        <button id="convertBtn" class="tzc-btn">Convert</button>
      </div>
      
      <div id="results-area" class="tzc-results-area">
        <div class="tzc-placeholder tzc-card">
          <div class="icon">🌍</div>
          <h3>Converted time appears here</h3>
          <p>Pick a timezone to get started.</p>
        </div>
      </div>
    </main>

    <section class="tzc-section tzc-content">
      <h2>How This Works</h2>
      <p>Confused with timezones? We all are sometimes. This tool makes it easy. Just put in a time here, pick a place you want to know the time for, and it will figure it out. No more messing up meeting times with people in other countrys. Its super simple.</p>
      <p>People ask if this needs a special API to be accurate. The answer is no! Your own browser is super smart. It has all the official timezone info, including crazy daylight saving rules, built right in. This tool just uses that, so its always up-to-date and gets the time right without needing to call some slow server.</p>
    </section>
    
    <section class="tzc-section tzc-faq">
      <h2>Common Questions</h2>
      <div class="tzc-faq-item">
        <div class="tzc-faq-question">Does this tool handle Daylight Saving Time (DST)?</div>
        <div class="tzc-faq-answer">Yep, it does automatically. When you pick a date, the tool knows if that place is in DST or not and gives you the correct time. You dont have to worry about it.</div>
      </div>
      <div class="tzc-faq-item">
        <div class="tzc-faq-question">What is UTC and GMT?</div>
        <div class="tzc-faq-answer">UTC (Coordinated Universal Time) is the world's time standard. All other timezones are set as an offset from it (like UTC-5). GMT (Greenwich Mean Time) is an actual timezone used in the UK and other places. It's the same as UTC during winter but different in summer because of DST.</div>
      </div>
      <div class="tzc-faq-item">
        <div class="tzc-faq-question">Why isn't my city on the list?</div>
        <div class="tzc-faq-answer">The list uses standard timezone names (like America/New_York) which can cover many cities. Try picking the major city closest to you in the same timezone, the time will be the same.</div>
      </div>
    </section>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const localTimeEl = document.getElementById('localTime');
    const targetTimezoneEl = document.getElementById('targetTimezone');
    const convertBtn = document.getElementById('convertBtn');
    const resultsArea = document.getElementById('results-area');
    const faqItems = document.querySelectorAll('.tzc-faq-item');

    const timezones = [
        'UTC', 'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Moscow',
        'Asia/Dubai', 'Asia/Kolkata', 'Asia/Singapore', 'Asia/Tokyo', 'Asia/Shanghai',
        'Australia/Sydney', 'Australia/Perth', 'Pacific/Auckland',
        'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
        'America/Sao_Paulo', 'America/Toronto', 'Africa/Cairo', 'Africa/Johannesburg'
    ];

    // Populate dropdown
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (userTimezone && !timezones.includes(userTimezone)) {
        timezones.unshift(userTimezone);
    }
    timezones.forEach(tz => {
        const option = document.createElement('option');
        option.value = tz;
        option.textContent = tz.replace(/_/g, ' ');
        targetTimezoneEl.appendChild(option);
    });

    // Set default time to current local time
    const setNow = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        localTimeEl.value = now.toISOString().slice(0, 16);
    };

    const getOffset = (date, timeZone) => {
        const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
        const tzDate = new Date(date.toLocaleString('en-US', { timeZone }));
        return (utcDate.getTime() - tzDate.getTime()) / 60000;
    };
    
    const formatOffset = (offsetMinutes) => {
        const sign = offsetMinutes <= 0 ? '+' : '-';
        const hours = Math.floor(Math.abs(offsetMinutes) / 60).toString().padStart(2, '0');
        const minutes = (Math.abs(offsetMinutes) % 60).toString().padStart(2, '0');
        return `UTC${sign}${hours}:${minutes}`;
    };

    const convertTime = () => {
        if (!localTimeEl.value) {
            alert("Please select a local date and time.");
            return;
        }

        const localDate = new Date(localTimeEl.value);
        const targetTz = targetTimezoneEl.value;

        // Format Date and Time
        const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        const targetTime = localDate.toLocaleTimeString('en-US', { ...timeOptions, timeZone: targetTz });
        const targetDate = localDate.toLocaleDateString('en-US', { ...dateOptions, timeZone: targetTz });
        
        // Calculate Offsets and Difference
        const localOffsetMinutes = getOffset(localDate, userTimezone);
        const targetOffsetMinutes = getOffset(localDate, targetTz);
        const diffMinutes = localOffsetMinutes - targetOffsetMinutes;

        const diffHours = Math.floor(Math.abs(diffMinutes) / 60);
        const diffMins = Math.abs(diffMinutes) % 60;
        let diffText = 'Same as local';
        if(diffMinutes !== 0) {
            const behindOrAhead = diffMinutes > 0 ? 'Ahead' : 'Behind';
            diffText = `${diffHours}h ${diffMins}m ${behindOrAhead}`;
        }
        
        const targetOffsetFormatted = formatOffset(targetOffsetMinutes);

        const resultsHTML = `
            <div class="tzc-results-card tzc-card">
                <div class="tzc-result-main">
                    <p class="tzc-result-time">${targetTime}</p>
                    <p class="tzc-result-date">${targetDate}</p>
                    <p class="tzc-result-tz-name">${targetTz.replace(/_/g, ' ')}</p>
                </div>
                <div class="tzc-result-details-grid">
                    <div class="tzc-result-detail-item">
                        <div class="label">Difference</div>
                        <div class="value">${diffText}</div>
                    </div>
                    <div class="tzc-result-detail-item">
                        <div class="label">UTC Offset</div>
                        <div class="value">${targetOffsetFormatted}</div>
                    </div>
                </div>
            </div>
        `;
        resultsArea.innerHTML = resultsHTML;
    };

    // Event Listeners
    convertBtn.addEventListener('click', convertTime);
    faqItems.forEach(item => {
        item.querySelector('.tzc-faq-question').addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Initial State
    setNow();
});
</script>