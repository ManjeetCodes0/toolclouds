---
title: "Date Calculator - Add or Subtract Days, Weeks, Months & Years"
description: "Free online date calculator to add or subtract days, weeks, months, and years from any date. Calculate future or past dates with our easy-to-use tool."
localtitle: "Date Calculator"
layout: tool
categories: [calculators, dateTimeCalc]
permalink: /calculators/date-time/date-calculator-by-days-weeks-months-years
faq:
  - q: "What's the difference between 'Add' and 'Subtract' operations?"
    a: "When you select 'Add', the calculator moves forward in time from your starting date. For example, adding 30 days to January 1st gives you January 31st. When you select 'Subtract', it moves backward in time. Subtracting 30 days from January 31st would give you January 1st."
  - q: "How does the calculator handle months with different lengths?"
    a: "The calculator intelligently handles varying month lengths. If you add 1 month to January 31st, you'll get February 28th (or 29th in a leap year) since February doesn't have 31 days. The calculator always gives you the last valid day of the month when necessary."
  - q: "Can I combine different time units in one calculation?"
    a: "Yes! You can add or subtract multiple units at once. For example, you can add 2 years, 3 months, 1 week, and 5 days all in a single calculation. Just enter values in the fields you want to use."
  - q: "What happens if I subtract more days than the date allows?"
    a: "The calculator will correctly handle this by going back to previous months or years as needed. For instance, subtracting 40 days from February 10th will take you back into January of the same year, or even December of the previous year if necessary."
  - q: "Does the calculator account for leap years?"
    a: "Absolutely! The calculator knows which years are leap years and adjusts February accordingly. When you're adding or subtracting time periods that cross February 29th in a leap year, the calculation will be accurate."
  - q: "Can I use this calculator for business planning?"
    a: "Yes, but note that this calculator works with calendar days, not business days. If you need to calculate business days only (excluding weekends), you might want to use our Business Days Calculator instead."
  - q: "Is there a limit to how far in the future or past I can calculate?"
    a: "The calculator can handle dates from year 1000 to year 9999. Whether you're calculating historical dates or planning far into the future, the tool will work accurately within this range."
  - q: "Why does adding 1 month sometimes give different day counts?"
    a: "Because months have different numbers of days (28-31), adding '1 month' isn't always the same as adding a fixed number of days. The calculator adds calendar months, so January 15 + 1 month = February 15, even though that's only 31 days, while February 15 + 1 month = March 15, which is 28 days (or 29 in a leap year)."
---

<style>
  :root {
    --dc-primary: #8B5CF6;
    --dc-secondary: #EC4899;
    --dc-accent: #06B6D4;
    --dc-success: #10B981;
    --dc-error: #EF4444;
    --dc-warning: #F59E0B;
    --dc-bg: #FAFBFC;
    --dc-card: #FFFFFF;
    --dc-text: #1E293B;
    --dc-text-light: #64748B;
    --dc-border: #E2E8F0;
    --dc-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --dc-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  html[data-theme="dark"] {
    --dc-bg: #0F172A;
    --dc-card: #1E293B;
    --dc-text: #F1F5F9;
    --dc-text-light: #94A3B8;
    --dc-border: #334155;
    --dc-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }
  
  .dc-wrapper {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--dc-bg);
    color: var(--dc-text);
    min-height: 100vh;
    padding: 1rem 0.4rem;
  }
  
  .dc-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .dc-header {
    text-align: center;
    margin-bottom: 3rem;
    animation: fadeIn 0.8s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .dc-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--dc-primary) 0%, var(--dc-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (min-width: 768px) {
    .dc-title {
      font-size: 3.5rem;
    }
  }
  
  .dc-subtitle {
    color: var(--dc-text-light);
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .dc-main-grid {
    display: grid;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  @media (min-width: 1024px) {
    .dc-main-grid {
      grid-template-columns: 1fr 380px;
    }
  }
  
  .dc-calculator-card {
    background: var(--dc-card);
    border-radius: 24px;
    padding: 2rem;
    box-shadow: var(--dc-shadow);
    border: 1px solid var(--dc-border);
  }
  
  .dc-input-section {
    margin-bottom: 2rem;
  }
  
  .dc-label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: var(--dc-text);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .dc-date-input {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--dc-border);
    border-radius: 12px;
    font-size: 1.1rem;
    background: var(--dc-bg);
    color: var(--dc-text);
    transition: all 0.3s ease;
  }
  
  .dc-date-input:focus {
    outline: none;
    border-color: var(--dc-primary);
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
  }
  
  .dc-operation-toggle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .dc-toggle-btn {
    padding: 1rem;
    border: 2px solid var(--dc-border);
    background: var(--dc-bg);
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
  }
  
  .dc-toggle-btn:hover {
    border-color: var(--dc-primary);
  }
  
  .dc-toggle-btn.active {
    background: var(--dc-primary);
    color: white;
    border-color: var(--dc-primary);
  }
  
  .dc-time-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .dc-time-input-group {
    position: relative;
  }
  
  .dc-time-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid var(--dc-border);
    border-radius: 8px;
    font-size: 1rem;
    background: var(--dc-bg);
    color: var(--dc-text);
    transition: all 0.3s ease;
    text-align: center;
  }
  
  .dc-time-input:focus {
    outline: none;
    border-color: var(--dc-primary);
  }
  
  .dc-time-label {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: var(--dc-text-light);
    text-align: center;
  }
  
  .dc-calculate-btn {
    width: 100%;
    padding: 1.25rem;
    background: linear-gradient(135deg, var(--dc-primary) 0%, var(--dc-secondary) 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .dc-calculate-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
  }
  
  .dc-result-card {
    background: var(--dc-card);
    border-radius: 24px;
    padding: 2rem;
    box-shadow: var(--dc-shadow);
    border: 2px solid var(--dc-primary);
    height: fit-content;
    position: sticky;
    top: 2rem;
  }
  
  @media (max-width: 1023px) {
    .dc-result-card {
      position: static;
      margin-top: 2rem;
    }
  }
  
  .dc-result-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .dc-result-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dc-primary);
    margin-bottom: 0.5rem;
  }
  
  .dc-result-date {
    font-size: 2rem;
    font-weight: 800;
    color: var(--dc-text);
    margin-bottom: 0.5rem;
  }
  
  .dc-result-day {
    color: var(--dc-text-light);
    font-size: 1.1rem;
  }
  
  .dc-result-details {
    background: var(--dc-bg);
    border-radius: 12px;
    padding: 1.5rem;
    margin-top: 1.5rem;
  }
  
  .dc-detail-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  
  .dc-detail-row:last-child {
    margin-bottom: 0;
  }
  
  .dc-detail-label {
    color: var(--dc-text-light);
    font-size: 0.9rem;
  }
  
  .dc-detail-value {
    font-weight: 600;
    color: var(--dc-text);
  }
  
  .dc-empty-state {
    text-align: center;
    padding: 3rem;
    color: var(--dc-text-light);
  }
  
  .dc-empty-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.3;
  }
  
  .dc-quick-options {
    background: var(--dc-card);
    border-radius: 24px;
    padding: 2rem;
    box-shadow: var(--dc-shadow);
    margin-top: 1rem;
  }
  
  .dc-quick-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--dc-text);
  }
  
  .dc-quick-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }
  
  .dc-quick-btn {
    padding: 0.75rem 1rem;
    border: 2px solid var(--dc-border);
    border-radius: 8px;
    background: var(--dc-bg);
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    font-weight: 500;
    font-size: 0.9rem;
  }
  
  .dc-quick-btn:hover {
    border-color: var(--dc-accent);
    color: var(--dc-accent);
    transform: translateY(-2px);
  }
  
  .dc-related-tools {
    margin-bottom: 3rem;
  }
  
  .dc-section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--dc-text);
  }
  
  .dc-tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .dc-tool-card {
    background: var(--dc-card);
    padding: 1.5rem;
    border-radius: 16px;
    border: 2px solid var(--dc-border);
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: block;
  }
  
  .dc-tool-card:hover {
    border-color: var(--dc-primary);
    transform: translateY(-3px);
    box-shadow: var(--dc-shadow);
  }
  
  .dc-tool-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .dc-tool-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--dc-text);
  }
  
  .dc-tool-desc {
    font-size: 0.9rem;
    color: var(--dc-text-light);
  }
  
  .dc-content {
    background: var(--dc-card);
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 3rem;
    box-shadow: var(--dc-shadow);
  }
  
  .dc-content h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--dc-primary);
  }
  
  .dc-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--dc-text);
  }
  
  .dc-content p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--dc-text-light);
  }
  
  .dc-content ul {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
  
  .dc-content li {
    margin-bottom: 0.75rem;
    color: var(--dc-text-light);
    line-height: 1.6;
  }
  
  .dc-content strong {
    color: var(--dc-text);
    font-weight: 600;
  }
  
  .dc-error-toast {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: var(--dc-error);
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    box-shadow: var(--dc-shadow-lg);
    animation: slideInRight 0.3s ease;
    z-index: 1000;
  }
  
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  
  .dc-faq-section {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .dc-faq-container {
    background: var(--dc-card);
    border-radius: 24px;
    padding: 2rem;
    box-shadow: var(--dc-shadow);
  }

  .dc-faq-item {
    border-bottom: 1px solid var(--dc-border);
    padding: 0;
    margin: 0;
  }

  .dc-faq-item:last-child {
    border-bottom: none;
  }

  .dc-faq-question {
    width: 100%;
    padding: 1.5rem 2rem;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--dc-text);
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
  }

  .dc-faq-question:hover {
    color: var(--dc-primary);
    background: rgba(139, 92, 246, 0.05);
  }

  .dc-faq-q {
    flex: 1;
    padding-right: 1rem;
  }

  .dc-faq-arrow {
    transition: transform 0.3s ease;
    color: var(--dc-primary);
    flex-shrink: 0;
  }

  .dc-faq-item.active .dc-faq-arrow {
    transform: rotate(180deg);
  }

  .dc-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .dc-faq-item.active .dc-faq-answer {
    max-height: 500px;
  }

  .dc-faq-answer p {
    padding: 0 2rem 1.5rem 2rem;
    color: var(--dc-text-light);
    line-height: 1.8;
    margin: 0;
  }

  @media (max-width: 640px) {
    .dc-content {
      padding: 1.5rem;
    }
    
    .dc-faq-container {
      padding: 1rem;
    }
    
    .dc-faq-question {
      padding: 1.25rem 1rem;
      font-size: 1rem;
    }
    
    .dc-faq-answer p {
      padding: 0 1rem 1.25rem 1rem;
      font-size: 0.95rem;
    }
  }
</style>

<div class="dc-wrapper">
  <div class="dc-container">
    <div class="dc-header">
      <h1 class="dc-title">Date Calculator</h1>
      <p class="dc-subtitle">Add or subtract days, weeks, months, and years from any date. Perfect for project planning, scheduling, and finding important dates.</p>
    </div>
    
    <div class="dc-main-grid">
      <div>
        <div class="dc-calculator-card">
          <div class="dc-input-section">
            <label class="dc-label" for="startDate">Start Date</label>
            <input type="date" id="startDate" class="dc-date-input">
          </div>
          
          <div class="dc-operation-toggle">
            <button class="dc-toggle-btn active" onclick="setOperation('add')">➕ Add</button>
            <button class="dc-toggle-btn" onclick="setOperation('subtract')">➖ Subtract</button>
          </div>
          
          <div class="dc-time-inputs">
            <div class="dc-time-input-group">
              <input type="number" id="years" class="dc-time-input" placeholder="0" min="0">
              <label class="dc-time-label">Years</label>
            </div>
            <div class="dc-time-input-group">
              <input type="number" id="months" class="dc-time-input" placeholder="0" min="0">
              <label class="dc-time-label">Months</label>
            </div>
            <div class="dc-time-input-group">
              <input type="number" id="weeks" class="dc-time-input" placeholder="0" min="0">
              <label class="dc-time-label">Weeks</label>
            </div>
            <div class="dc-time-input-group">
              <input type="number" id="days" class="dc-time-input" placeholder="0" min="0">
              <label class="dc-time-label">Days</label>
            </div>
          </div>
          
          <button class="dc-calculate-btn" onclick="calculateDate()">Calculate Date</button>
        </div>
        
        <div class="dc-quick-options">
          <h3 class="dc-quick-title">Quick Calculations</h3>
          <div class="dc-quick-grid">
            <div class="dc-quick-btn" onclick="quickCalc(7, 'days')">+1 Week</div>
            <div class="dc-quick-btn" onclick="quickCalc(14, 'days')">+2 Weeks</div>
            <div class="dc-quick-btn" onclick="quickCalc(30, 'days')">+30 Days</div>
            <div class="dc-quick-btn" onclick="quickCalc(90, 'days')">+90 Days</div>
            <div class="dc-quick-btn" onclick="quickCalc(6, 'months')">+6 Months</div>
            <div class="dc-quick-btn" onclick="quickCalc(1, 'years')">+1 Year</div>
            <div class="dc-quick-btn" onclick="quickCalc(-7, 'days')">-1 Week</div>
            <div class="dc-quick-btn" onclick="quickCalc(-30, 'days')">-30 Days</div>
          </div>
        </div>
      </div>
      
      <div>
        <div class="dc-result-card" id="resultCard" style="display: none;">
          <div class="dc-result-header">
            <h2 class="dc-result-title">Result Date</h2>
            <div class="dc-result-date" id="resultDate">-</div>
            <div class="dc-result-day" id="resultDay">-</div>
          </div>
          
          <div class="dc-result-details">
            <div class="dc-detail-row">
              <span class="dc-detail-label">Operation:</span>
              <span class="dc-detail-value" id="operationType">-</span>
            </div>
            <div class="dc-detail-row">
              <span class="dc-detail-label">Time Added/Subtracted:</span>
              <span class="dc-detail-value" id="timePeriod">-</span>
            </div>
            <div class="dc-detail-row">
              <span class="dc-detail-label">Total Days:</span>
              <span class="dc-detail-value" id="totalDays">-</span>
            </div>
            <div class="dc-detail-row">
              <span class="dc-detail-label">From Today:</span>
              <span class="dc-detail-value" id="fromToday">-</span>
            </div>
          </div>
        </div>
        
        <div class="dc-empty-state" id="emptyState">
          <div class="dc-empty-icon">📅</div>
          <p>Enter a date and time period to see the result</p>
        </div>
      </div>
    </div>
    
    <div class="dc-related-tools">
      <h2 class="dc-section-title">Related Tools</h2>
      <div class="dc-tools-grid">
        <a href="/calculators/date-time/two-date-difference-calculator" class="dc-tool-card">
          <div class="dc-tool-icon">📊</div>
          <div class="dc-tool-name">Date Difference Calculator</div>
          <div class="dc-tool-desc">Calculate the time between two dates</div>
        </a>
        <a href="/calculators/date-time/age-calculator-on-date" class="dc-tool-card">
          <div class="dc-tool-icon">🎂</div>
          <div class="dc-tool-name">Age Calculator</div>
          <div class="dc-tool-desc">Find your exact age in years, months & days</div>
        </a>
        <a href="/calculators/" class="dc-tool-card">
          <div class="dc-tool-icon">📆</div>
          <div class="dc-tool-name">Weekday Calculator</div>
          <div class="dc-tool-desc">Find what day of the week any date falls on</div>
        </a>
        <a href="/calculators/date-time/countdown-timer-online" class="dc-tool-card">
          <div class="dc-tool-icon">⏱️</div>
          <div class="dc-tool-name">Countdown Timer</div>
          <div class="dc-tool-desc">Count down to important dates and events</div>
        </a>
      </div>
    </div>
    
    <div class="dc-content">
      <h2>How to Use the Date Calculator</h2>
      <p>Our date calculator is super easy to use and helps you quickly find dates in the future or past. Whether your planning an event, calculating deadlines, or just curious about what date it will be after a certain time period - this tool has got you covered!</p>
      
      <h3>Simple Steps to Calculate Dates</h3>
      <ul>
        <li><strong>Pick your starting date:</strong> Use the date picker to select any date as your starting point. It defaults to today's date for convienience.</li>
        <li><strong>Choose Add or Subtract:</strong> Decide whether you want to go forward in time (Add) or backward (Subtract)</li>
        <li><strong>Enter the time period:</strong> Type in how many years, months, weeks, or days you want to add or subtract. You can use any combination!</li>
        <li><strong>Hit Calculate:</strong> Click the calculate button and instantly see your result date along with helpful details</li>
      </ul>
      
      <h3>What Makes This Calculator Special</h3>
      <p>Unlike basic calculators, ours handles all the complex stuff automatically. It knows about leap years, different month lengths, and even tells you what day of the week your result falls on. Pretty neat, right?</p>
      
      <h3>Common Uses for Date Calculations</h3>
      <p>People use this tool for all sorts of things:</p>
      <ul>
        <li><strong>Project deadlines:</strong> If a project takes 90 days, when will it be done?</li>
        <li><strong>Payment due dates:</strong> When is that 30-day invoice really due?</li>
        <li><strong>Event planning:</strong> What date is 6 months before your wedding for sending invitations?</li>
        <li><strong>Medical appointments:</strong> When should you schedule that 3-month follow-up?</li>
        <li><strong>Contract dates:</strong> When does a 1-year contract expire?</li>
        <li><strong>Historical research:</strong> What date was it 100 years ago?</li>
      </ul>
      
      <h3>Understanding Month Calculations</h3>
      <p>One thing thats important to understand is how month calculations work. When you add or subtract months, the calculator tries to keep the same day of the month. But what happens when that day doesn't exist? For example, if you add 1 month to January 31st, there's no February 31st! In these cases, the calculator gives you the last valid day of the month - so you'd get February 28th (or 29th in a leap year).</p>
      
      <h3>Quick Tips for Better Results</h3>
      <ul>
        <li><strong>Use the quick buttons:</strong> For common calculations, just click one of the quick options to save time</li>
        <li><strong>Combine different units:</strong> You can add 1 year, 2 months, and 15 days all at once</li>
        <li><strong>Check the day of week:</strong> The result shows you what day of the week it falls on, handy for planning</li>
        <li><strong>Note the "from today" info:</strong> This tells you how far the result date is from right now</li>
      </ul>
      
      <h3>Why Date Calculations Can Be Tricky</h3>
      <p>You might think date math is simple, but its actually pretty complex! Months have different numbers of days, leap years add extra days, and different cultures even have different calendars. Our calculator handles all these complications behind the scenes, so you don't have to worry about them.</p>
    </div>
    
    <div class="dc-faq-section">
      <h2 class="dc-section-title">Frequently Asked Questions</h2>
      
      <div class="dc-faq-container">
        <div class="dc-faq-item">
          <button class="dc-faq-question" onclick="toggleFaq(this)">
            <span class="dc-faq-q">What's the difference between 'Add' and 'Subtract' operations?</span>
            <svg class="dc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="dc-faq-answer">
            <p>When you select 'Add', the calculator moves forward in time from your starting date. For example, adding 30 days to January 1st gives you January 31st. When you select 'Subtract', it moves backward in time. Subtracting 30 days from January 31st would give you January 1st.</p>
          </div>
        </div>
        
        <div class="dc-faq-item">
          <button class="dc-faq-question" onclick="toggleFaq(this)">
            <span class="dc-faq-q">How does the calculator handle months with different lengths?</span>
            <svg class="dc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="dc-faq-answer">
            <p>The calculator intelligently handles varying month lengths. If you add 1 month to January 31st, you'll get February 28th (or 29th in a leap year) since February doesn't have 31 days. The calculator always gives you the last valid day of the month when necessary.</p>
          </div>
        </div>
        
        <div class="dc-faq-item">
          <button class="dc-faq-question" onclick="toggleFaq(this)">
            <span class="dc-faq-q">Can I combine different time units in one calculation?</span>
            <svg class="dc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="dc-faq-answer">
            <p>Yes! You can add or subtract multiple units at once. For example, you can add 2 years, 3 months, 1 week, and 5 days all in a single calculation. Just enter values in the fields you want to use.</p>
          </div>
        </div>
        
        <div class="dc-faq-item">
          <button class="dc-faq-question" onclick="toggleFaq(this)">
            <span class="dc-faq-q">What happens if I subtract more days than the date allows?</span>
            <svg class="dc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="dc-faq-answer">
            <p>The calculator will correctly handle this by going back to previous months or years as needed. For instance, subtracting 40 days from February 10th will take you back into January of the same year, or even December of the previous year if necessary.</p>
          </div>
        </div>
        
        <div class="dc-faq-item">
          <button class="dc-faq-question" onclick="toggleFaq(this)">
            <span class="dc-faq-q">Does the calculator account for leap years?</span>
            <svg class="dc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="dc-faq-answer">
            <p>Absolutely! The calculator knows which years are leap years and adjusts February accordingly. When you're adding or subtracting time periods that cross February 29th in a leap year, the calculation will be accurate.</p>
          </div>
        </div>
        
        <div class="dc-faq-item">
          <button class="dc-faq-question" onclick="toggleFaq(this)">
            <span class="dc-faq-q">Can I use this calculator for business planning?</span>
            <svg class="dc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="dc-faq-answer">
            <p>Yes, but note that this calculator works with calendar days, not business days. If you need to calculate business days only (excluding weekends), you might want to use our Business Days Calculator instead.</p>
          </div>
        </div>
        
        <div class="dc-faq-item">
          <button class="dc-faq-question" onclick="toggleFaq(this)">
            <span class="dc-faq-q">Is there a limit to how far in the future or past I can calculate?</span>
            <svg class="dc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="dc-faq-answer">
            <p>The calculator can handle dates from year 1000 to year 9999. Whether you're calculating historical dates or planning far into the future, the tool will work accurately within this range.</p>
          </div>
        </div>
        
        <div class="dc-faq-item">
          <button class="dc-faq-question" onclick="toggleFaq(this)">
            <span class="dc-faq-q">Why does adding 1 month sometimes give different day counts?</span>
            <svg class="dc-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="dc-faq-answer">
            <p>Because months have different numbers of days (28-31), adding '1 month' isn't always the same as adding a fixed number of days. The calculator adds calendar months, so January 15 + 1 month = February 15, even though that's only 31 days, while February 15 + 1 month = March 15, which is 28 days (or 29 in a leap year).</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  let currentOperation = 'add';
  
  // Initialize with today's date
    document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').value = today;
  });
  
  function setOperation(operation) {
    currentOperation = operation;
    document.querySelectorAll('.dc-toggle-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    event.target.classList.add('active');
  }
  
  function showError(message) {
    // Remove any existing error messages
    const existingError = document.querySelector('.dc-error-toast');
    if (existingError) {
      existingError.remove();
    }
    
    // Create and show new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'dc-error-toast';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
      errorDiv.remove();
    }, 3000);
  }
  
  function calculateDate() {
    const startDateInput = document.getElementById('startDate');
    const startDate = new Date(startDateInput.value);
    
    if (!startDateInput.value) {
      showError('Please select a start date');
      return;
    }
    
    const years = parseInt(document.getElementById('years').value) || 0;
    const months = parseInt(document.getElementById('months').value) || 0;
    const weeks = parseInt(document.getElementById('weeks').value) || 0;
    const days = parseInt(document.getElementById('days').value) || 0;
    
    // Check if at least one value is entered
    if (years === 0 && months === 0 && weeks === 0 && days === 0) {
      showError('Please enter at least one time value');
      return;
    }
    
    // Create a new date for calculation
    let resultDate = new Date(startDate);
    
    // Apply the operation
    const multiplier = currentOperation === 'add' ? 1 : -1;
    
    // Add/subtract years
    resultDate.setFullYear(resultDate.getFullYear() + (years * multiplier));
    
    // Add/subtract months
    resultDate.setMonth(resultDate.getMonth() + (months * multiplier));
    
    // Add/subtract weeks and days
    const totalDays = (weeks * 7) + days;
    resultDate.setDate(resultDate.getDate() + (totalDays * multiplier));
    
    // Calculate total days difference
    const diffTime = Math.abs(resultDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Calculate days from today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const fromTodayTime = resultDate - today;
    const fromTodayDays = Math.ceil(fromTodayTime / (1000 * 60 * 60 * 24));
    
    // Update the result display
    updateResult(resultDate, {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      totalDays: diffDays,
      fromToday: fromTodayDays
    });
  }
  
  function updateResult(date, details) {
    // Show result card, hide empty state
    document.getElementById('resultCard').style.display = 'block';
    document.getElementById('emptyState').style.display = 'none';
    
    // Format the date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    // Get day of week
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    
    // Update result display
    document.getElementById('resultDate').textContent = formattedDate;
    document.getElementById('resultDay').textContent = dayOfWeek;
    
    // Update operation type
    document.getElementById('operationType').textContent = currentOperation === 'add' ? 'Added' : 'Subtracted';
    
    // Build time period string
    let timePeriodParts = [];
    if (details.years > 0) timePeriodParts.push(`${details.years} year${details.years > 1 ? 's' : ''}`);
    if (details.months > 0) timePeriodParts.push(`${details.months} month${details.months > 1 ? 's' : ''}`);
    if (details.weeks > 0) timePeriodParts.push(`${details.weeks} week${details.weeks > 1 ? 's' : ''}`);
    if (details.days > 0) timePeriodParts.push(`${details.days} day${details.days > 1 ? 's' : ''}`);
    
    document.getElementById('timePeriod').textContent = timePeriodParts.join(', ');
    
    // Update total days
    document.getElementById('totalDays').textContent = `${details.totalDays} day${details.totalDays !== 1 ? 's' : ''}`;
    
    // Update from today
    let fromTodayText;
    if (details.fromToday === 0) {
      fromTodayText = 'Today';
    } else if (details.fromToday > 0) {
      fromTodayText = `${details.fromToday} day${details.fromToday !== 1 ? 's' : ''} from now`;
    } else {
      fromTodayText = `${Math.abs(details.fromToday)} day${Math.abs(details.fromToday) !== 1 ? 's' : ''} ago`;
    }
    document.getElementById('fromToday').textContent = fromTodayText;
    
    // Scroll to result on mobile
    if (window.innerWidth < 1024) {
      document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  
  function quickCalc(value, unit) {
    // Set the operation based on value sign
    if (value < 0) {
      setOperation('subtract');
      document.querySelectorAll('.dc-toggle-btn')[1].classList.add('active');
      document.querySelectorAll('.dc-toggle-btn')[0].classList.remove('active');
      value = Math.abs(value);
    } else {
      setOperation('add');
      document.querySelectorAll('.dc-toggle-btn')[0].classList.add('active');
      document.querySelectorAll('.dc-toggle-btn')[1].classList.remove('active');
    }
    
    // Clear all inputs
    document.getElementById('years').value = '';
    document.getElementById('months').value = '';
    document.getElementById('weeks').value = '';
    document.getElementById('days').value = '';
    
    // Set the appropriate input
    switch(unit) {
      case 'days':
        document.getElementById('days').value = value;
        break;
      case 'weeks':
        document.getElementById('weeks').value = value;
        break;
      case 'months':
        document.getElementById('months').value = value;
        break;
      case 'years':
        document.getElementById('years').value = value;
        break;
    }
    
    // Calculate
    calculateDate();
  }
  
  // FAQ Toggle Function
  function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.dc-faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // If this item wasn't active, open it
    if (!wasActive) {
      faqItem.classList.add('active');
    }
  }
  
  // Add keyboard support
  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.target.matches('input[type="number"]')) {
      calculateDate();
    }
  });
  
  // Allow Enter key in number inputs to calculate
  document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        calculateDate();
      }
    });
  });
  
  // Prevent negative numbers in inputs
  document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', (e) => {
      if (e.target.value < 0) {
        e.target.value = 0;
      }
    });
  });
</script>
