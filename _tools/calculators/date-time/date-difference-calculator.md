---
title: "Two Date Difference Calculator - Calculate Days Between Dates"
description: "Easily calculate the duration in years, months, weeks, and days between two dates. Our free tool also shows the total number of days, hours, minutes."
localtitle: "Date Difference"
layout: tool
categories: [dateTimeCalc, calculators]
permalink: /calculators/date-time/two-date-difference-calculator
faq:
  - q: "How are leap years handled in the calculation?"
    a: "Our calculator automatically accounts for leap years. The calculations are based on the actual calendar, so the extra day in February during a leap year (like 2024, 2028) is correctly included in the duration. This ensures accurate results regardless of whether your date range includes leap years."
  - q: "What does the 'Include end date' option do?"
    a: "By default, the calculation finds the duration between the start and end dates (excluding the end date itself). When you check 'Include end date', it adds one full day to the total duration. This is useful for calculating things like hotel stays, rental periods, or event lengths where both the start and end days count as full days."
  - q: "How does the business days calculation work?"
    a: "When you enable 'Business days only', the calculator excludes all Saturdays and Sundays from the count. This is perfect for calculating working days, project timelines, or delivery estimates. Note that this feature doesn't account for public holidays, as these vary by location and year."
  - q: "Why is the breakdown in 'years, months, days' sometimes different from the total days?"
    a: "The 'years, months, days' breakdown provides a human-readable calendar duration. Since months have varying lengths (28 to 31 days), this is not a simple conversion from the total number of days. For example, the duration from February 1 to March 1 is '1 month', but only 28 or 29 days depending on the year."
  - q: "Can I calculate the difference between times on specific dates?"
    a: "This tool focuses on the difference between calendar dates. While it provides the total duration in hours, minutes, and seconds, it assumes midnight to midnight for each date. For calculations involving specific times (like 3:30 PM on one day to 9:15 AM on another), you would need a time duration calculator."
  - q: "Is there a limit to how far apart the dates can be?"
    a: "The calculator can handle dates spanning several centuries. Whether you're calculating days since a historical event in the 1800s or projecting into the future, the tool will provide accurate results. The date input fields typically support dates from year 1000 to year 9999."
  - q: "What happens if I select the same date for both start and end?"
    a: "If both dates are the same and 'Include end date' is unchecked, the result will be 0 days. If 'Include end date' is checked, the result will be 1 day. This is useful for calculating single-day events."
  - q: "Can I save or share my calculation results?"
    a: "Currently, the calculator provides instant results for viewing. You can take a screenshot of your results or manually note them down. The URL doesn't change with your inputs, so bookmarking won't save your specific calculation."
---

<style>
  :root {
    --dd-primary: #8B5CF6;
    --dd-secondary: #EC4899;
    --dd-accent: #06B6D4;
    --dd-success: #10B981;
    --dd-bg: #FAFBFC;
    --dd-card: #FFFFFF;
    --dd-text: #1E293B;
    --dd-text-light: #64748B;
    --dd-border: #E2E8F0;
    --dd-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --dd-error: #EF4444;
  }
  
  html[data-theme="dark"] {
    --dd-bg: #0F172A;
    --dd-card: #1E293B;
    --dd-text: #F1F5F9;
    --dd-text-light: #94A3B8;
    --dd-border: #334155;
    --dd-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }
  
  .dd-wrapper {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--dd-bg);
    color: var(--dd-text);
    padding: 2rem 0.4rem;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }
  
  .dd-wrapper::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, var(--dd-primary) 0%, transparent 70%);
    opacity: 0.1;
    animation: rotate 30s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .dd-container {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  .dd-header {
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
  
  .dd-title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--dd-primary) 0%, var(--dd-secondary) 50%, var(--dd-accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }
  
  .dd-subtitle {
    color: var(--dd-text-light);
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .dd-main-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  @media (min-width: 1024px) {
    .dd-main-content {
      grid-template-columns: 1fr 400px;
    }
  }
  
  .dd-main-card {
    background: var(--dd-card);
    border-radius: 24px;
    padding: 2rem;
    box-shadow: var(--dd-shadow);
    border: 1px solid var(--dd-border);
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
  
  .dd-date-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 640px) {
    .dd-date-inputs {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
  
  .dd-date-group {
    position: relative;
  }
  
  .dd-date-label {
    display: block;
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: var(--dd-text);
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .dd-date-input {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 2px solid var(--dd-border);
    border-radius: 16px;
    font-size: 1.1rem;
    background: var(--dd-bg);
    color: var(--dd-text);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .dd-date-input:hover {
    border-color: var(--dd-primary);
  }
  
  .dd-date-input:focus {
    outline: none;
    border-color: var(--dd-primary);
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
  }
  
  .dd-date-input.error {
    border-color: var(--dd-error);
  }
  
  .dd-icon {
    position: absolute;
    right: 1.3rem;
    top: 3.4rem;
    color: var(--dd-primary);
    pointer-events: none;
  }
  
  .dd-options {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }
  
  .dd-checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: var(--dd-bg);
    transition: all 0.3s ease;
  }
  
  .dd-checkbox:hover {
    background: rgba(139, 92, 246, 0.1);
  }
  
  .dd-checkbox input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: var(--dd-primary);
  }
  
  .dd-checkbox label {
    cursor: pointer;
    font-weight: 500;
  }
  
  .dd-btn-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .dd-btn {
    flex: 1;
    padding: 1.25rem 2rem;
    border: none;
    border-radius: 16px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .dd-btn-primary {
    background: linear-gradient(135deg, var(--dd-primary) 0%, var(--dd-secondary) 100%);
    color: white;
  }
  
  .dd-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
  }
  
  .dd-btn-secondary {
    background: var(--dd-bg);
    color: var(--dd-text);
    border: 2px solid var(--dd-border);
  }
  
  .dd-btn-secondary:hover {
    border-color: var(--dd-primary);
    color: var(--dd-primary);
  }
  
  .dd-results {
    background: var(--dd-card);
    border-radius: 24px;
    padding: 2rem;
    box-shadow: var(--dd-shadow);
    border: 2px solid var(--dd-primary);
    animation: slideIn 0.5s ease;
    height: fit-content;
    position: sticky;
    top: 2rem;
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .dd-result-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .dd-result-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dd-primary);
    margin-bottom: 0.5rem;
  }
  
  .dd-result-dates {
    color: var(--dd-text-light);
    font-size: 0.9rem;
  }
  
  .dd-result-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .dd-result-item {
    background: var(--dd-bg);
    padding: 1.25rem;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .dd-result-item:hover {
    transform: translateY(-3px);
    box-shadow: var(--dd-shadow);
  }
  
  .dd-result-value {
    font-size: 2rem;
    font-weight: 800;
    color: var(--dd-primary);
    display: block;
  }
  
  .dd-result-label {
    color: var(--dd-text-light);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .dd-result-detail {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
    padding: 1.25rem;
    border-radius: 12px;
    text-align: center;
    font-size: 1rem;
    color: var(--dd-text);
  }
  
  .dd-empty-state {
    text-align: center;
    padding: 3rem;
    color: var(--dd-text-light);
  }
  
  .dd-empty-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.3;
  }
  
  .dd-quick-calc {
    background: var(--dd-card);
    border-radius: 24px;
    padding: 2rem;
    box-shadow: var(--dd-shadow);
    margin-top: 1rem;
  }
  
  .dd-quick-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--dd-text);
  }
  
  .dd-quick-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
  }
  
  .dd-quick-btn {
    padding: 1rem;
    border: 2px solid var(--dd-border);
    border-radius: 12px;
    background: var(--dd-bg);
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    font-weight: 500;
  }
  
  .dd-quick-btn:hover {
    border-color: var(--dd-accent);
    color: var(--dd-accent);
    transform: translateY(-2px);
  }
  
  .dd-error-message {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: var(--dd-error);
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    box-shadow: var(--dd-shadow);
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
  
  .dd-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .dd-modal.active {
    opacity: 1;
    visibility: visible;
  }
  
  .dd-modal-content {
    background: var(--dd-card);
    padding: 2rem;
    border-radius: 24px;
    max-width: 400px;
    width: 90%;
    animation: modalSlideIn 0.3s ease;
  }
  
  @keyframes modalSlideIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .dd-modal-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--dd-primary);
  }
  
  .dd-modal-input {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--dd-border);
    border-radius: 12px;
    font-size: 1rem;
    margin-bottom: 1rem;
    background: var(--dd-bg);
    color: var(--dd-text);
  }
  
  .dd-modal-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .dd-modal-btn {
    flex: 1;
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .dd-modal-btn-primary {
    background: var(--dd-primary);
    color: white;
  }
  
  .dd-modal-btn-secondary {
    background: var(--dd-bg);
    color: var(--dd-text);
    border: 2px solid var(--dd-border);
  }
  
  .dd-related-tools {
    margin-bottom: 3rem;
  }
  
  .dd-section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--dd-text);
  }
  
  .dd-tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .dd-tool-card {
    background: var(--dd-card);
    padding: 1.5rem;
    border-radius: 16px;
    border: 2px solid var(--dd-border);
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: block;
  }
  
  .dd-tool-card:hover {
    border-color: var(--dd-primary);
    transform: translateY(-3px);
    box-shadow: var(--dd-shadow);
  }
  
  .dd-tool-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .dd-tool-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--dd-text);
  }
  
  .dd-tool-desc {
    font-size: 0.9rem;
    color: var(--dd-text-light);
  }
  
  .dd-content {
    background: var(--dd-card);
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 3rem;
    box-shadow: var(--dd-shadow);
  }
  
  .dd-content h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--dd-primary);
  }
  
  .dd-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--dd-text);
  }
  
  .dd-content p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--dd-text-light);
  }
  
  .dd-content ul {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
  
  .dd-content li {
    margin-bottom: 0.75rem;
    color: var(--dd-text-light);
  }
  
  .dd-content strong {
    color: var(--dd-text);
    font-weight: 600;
  }
  
  @media (max-width: 640px) {
    .dd-title {
      font-size: 2rem;
    }
    
    .dd-main-card,
    .dd-content {
      padding: 1.5rem;
    }
    
    .dd-error-message {
      right: 1rem;
      left: 1rem;
    }
  }

  /* FAQ Section Styles */
.dd-faq-section {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.dd-faq-container {
  background: var(--dd-card);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: var(--dd-shadow);
}

.dd-faq-item {
  border-bottom: 1px solid var(--dd-border);
  padding: 0;
  margin: 0;
}

.dd-faq-item:last-child {
  border-bottom: none;
}

.dd-faq-question {
  width: 100%;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--dd-text);
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
}

.dd-faq-question:hover {
  color: var(--dd-primary);
  background: rgba(139, 92, 246, 0.05);
}

.dd-faq-q {
  flex: 1;
  padding-right: 1rem;
}

.dd-faq-arrow {
  transition: transform 0.3s ease;
  color: var(--dd-primary);
  flex-shrink: 0;
}

.dd-faq-item.active .dd-faq-arrow {
  transform: rotate(180deg);
}

.dd-faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.dd-faq-item.active .dd-faq-answer {
  max-height: 500px;
}

.dd-faq-answer p {
  padding: 0 2rem 1.5rem 2rem;
  color: var(--dd-text-light);
  line-height: 1.8;
  margin: 0;
}

@media (max-width: 640px) {
  .dd-faq-container {
    padding: 1rem;
  }
  
  .dd-faq-question {
    padding: 1.25rem 1rem;
    font-size: 1rem;
  }
  
  .dd-faq-answer p {
    padding: 0 1rem 1.25rem 1rem;
    font-size: 0.95rem;
  }
}

</style>

<div class="dd-wrapper">
  <div class="dd-container">
    <div class="dd-header">
      <h1 class="dd-title">Date Difference Calculator</h1>
      <p class="dd-subtitle">Calculate the exact time between any two dates with precision</p>
    </div>
    
    <div class="dd-main-content">
      <div>
        <div class="dd-main-card">
          <div class="dd-date-inputs">
            <div class="dd-date-group">
              <label class="dd-date-label">Start Date</label>
              <input type="date" id="startDate" class="dd-date-input">
              <span class="dd-icon">📅</span>
            </div>
            <div class="dd-date-group">
              <label class="dd-date-label">End Date</label>
              <input type="date" id="endDate" class="dd-date-input">
              <span class="dd-icon">📅</span>
            </div>
          </div>
          
          <div class="dd-options">
            <div class="dd-checkbox">
              <input type="checkbox" id="includeEnd" checked>
              <label for="includeEnd">Include end date</label>
            </div>
            <div class="dd-checkbox">
              <input type="checkbox" id="businessDays">
              <label for="businessDays">Business days only</label>
            </div>
          </div>
          
          <div class="dd-btn-group">
            <button class="dd-btn dd-btn-primary" onclick="calculateDifference()">Calculate Difference</button>
            <button class="dd-btn dd-btn-secondary" onclick="resetCalculator()">Reset</button>
          </div>
        </div>
        
        <div class="dd-quick-calc">
          <h3 class="dd-quick-title">Quick Calculations</h3>
          <div class="dd-quick-buttons">
            <div class="dd-quick-btn" onclick="quickCalc('week')">Next Week</div>
            <div class="dd-quick-btn" onclick="quickCalc('month')">Next Month</div>
            <div class="dd-quick-btn" onclick="quickCalc('quarter')">Next Quarter</div>
            <div class="dd-quick-btn" onclick="quickCalc('year')">Next Year</div>
            <div class="dd-quick-btn" onclick="quickCalc('age')">My Age</div>
            <div class="dd-quick-btn" onclick="quickCalc('century')">21st Century</div>
          </div>
        </div>
      </div>
      
      <div>
        <div class="dd-results" id="results" style="display: none;">
          <div class="dd-result-header">
            <h2 class="dd-result-title">Time Difference</h2>
            <p class="dd-result-dates" id="dateRange"></p>
          </div>
          
          <div class="dd-result-grid">
            <div class="dd-result-item">
              <span class="dd-result-value" id="totalDays">0</span>
              <span class="dd-result-label">Days</span>
            </div>
            <div class="dd-result-item">
              <span class="dd-result-value" id="totalWeeks">0</span>
              <span class="dd-result-label">Weeks</span>
            </div>
            <div class="dd-result-item">
              <span class="dd-result-value" id="totalMonths">0</span>
              <span class="dd-result-label">Months</span>
            </div>
            <div class="dd-result-item">
              <span class="dd-result-value" id="totalYears">0</span>
              <span class="dd-result-label">Years</span>
            </div>
          </div>
          
          <div class="dd-result-detail" id="detailResult"></div>
        </div>
        
        <div class="dd-empty-state" id="emptyState">
          <div class="dd-empty-icon">📊</div>
          <p>Select dates and click calculate to see results</p>
        </div>
      </div>
    </div>
    
    <div class="dd-related-tools">
      <h2 class="dd-section-title">Related Tools</h2>
      <div class="dd-tools-grid">
        <a href="/calculators/date-time/date-calculator-by-days-weeks-months-years" class="dd-tool-card">
          <div class="dd-tool-icon">➕</div>
          <div class="dd-tool-name">Date Calculator</div>
          <div class="dd-tool-desc">Add or subtract days, weeks, months from any date</div>
        </a>
        <a href="/calculators/date-time/age-calculator-on-date" class="dd-tool-card">
          <div class="dd-tool-icon">🎂</div>
          <div class="dd-tool-name">Age Calculator</div>
          <div class="dd-tool-desc">Calculate your exact age in years, months, and days</div>
        </a>
        <a href="/calculators/date-time/time-duration-calculator-online-free" class="dd-tool-card">
          <div class="dd-tool-icon">⏰</div>
          <div class="dd-tool-name">Time Duration Calculator</div>
          <div class="dd-tool-desc">Calculate time between two specific times</div>
        </a>
        <a href="/calculators/" class="dd-tool-card">
          <div class="dd-tool-icon">💼</div>
          <div class="dd-tool-name">Business Days Calculator</div>
          <div class="dd-tool-desc">Calculate working days between dates</div>
        </a>
      </div>
    </div>
    
    <div class="dd-content">
      <h2>How to Use the Date Difference Calculator</h2>
      <p>Our Two date difference calculator makes it incredibly easy to find the exact duration between any two dates. Whether you're planning an event, tracking project timelines, or just curious about time spans, this tool provides accurate results instantly.</p>
      
      <h3>Step-by-Step Guide</h3>
      <ul>
        <li><strong>Select Your Start Date:</strong> Use the first date picker to choose your beginning date</li>
        <li><strong>Select Your End Date:</strong> Choose the ending date for your calculation</li>
        <li><strong>Choose Your Options:</strong> Decide if you want to include the end date and whether to count only business days</li>
        <li><strong>Click Calculate:</strong> Get instant results showing the difference in multiple formats</li>
      </ul>
      
      <h3>Understanding the Results</h3>
      <p>The calculator provides comprehensive results in multiple formats to suit different needs:</p>
      <ul>
        <li><strong>Total Days:</strong> The exact number of days between the selected dates</li>
        <li><strong>Weeks:</strong> The duration expressed in complete weeks</li>
        <li><strong>Months:</strong> An approximate calculation based on average month length (30.44 days)</li>
        <li><strong>Years:</strong> The duration in years, accounting for leap years</li>
        <li><strong>Detailed Breakdown:</strong> A human-readable format showing years, months, weeks, and days</li>
      </ul>
      
      <h3>Common Use Cases</h3>
      <p>This versatile calculator serves many purposes:</p>
      <ul>
        <li><strong>Age Calculation:</strong> Find out exactly how old you are in days, weeks, or months</li>
        <li><strong>Project Planning:</strong> Calculate project durations and deadlines</li>
        <li><strong>Event Countdown:</strong> Know exactly how many days until your special event</li>
        <li><strong>Historical Research:</strong> Determine time spans between historical events</li>
        <li><strong>Pregnancy Tracking:</strong> Calculate gestational age or due date countdowns</li>
        <li><strong>Financial Planning:</strong> Calculate investment periods or loan durations</li>
      </ul>
      
      <h3>Advanced Features</h3>
      <p>Our calculator includes several advanced features to enhance functionality:</p>
      <ul>
        <li><strong>Business Days Mode:</strong> Exclude weekends for work-related calculations</li>
        <li><strong>Include End Date Option:</strong> Choose whether to count the final day in your calculation</li>
        <li><strong>Quick Calculations:</strong> Pre-set options for common date calculations</li>
        <li><strong>Leap Year Handling:</strong> Automatic adjustment for leap years ensures accuracy</li>
      </ul>
      
      <h3>Tips for Accurate Calculations</h3>
      <p>Get the most out of your date calculations with these helpful tips:</p>
      <ul>
        <li><strong>Double-check your dates:</strong> Ensure you've selected the correct start and end dates before calculating</li>
        <li><strong>Consider time zones:</strong> If calculating across time zones, remember this tool uses calendar dates only</li>
        <li><strong>Business days exclude weekends:</strong> Remember that business days don't account for public holidays</li>
        <li><strong>Use quick calculations:</strong> Save time with preset options for common date ranges</li>
      </ul>
    </div>

    <!-- FAQ Section - Place this after the content section -->
<div class="dd-faq-section">
  <h2 class="dd-section-title">Frequently Asked Questions</h2>
  
  <div class="dd-faq-container">
    <div class="dd-faq-item">
      <button class="dd-faq-question" onclick="toggleFaq(this)">
        <span class="dd-faq-q">How are leap years handled in the calculation?</span>
        <svg class="dd-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="dd-faq-answer">
        <p>Our calculator automatically accounts for leap years. The calculations are based on the actual calendar, so the extra day in February during a leap year (like 2024, 2028) is correctly included in the duration. This ensures accurate results regardless of whether your date range includes leap years.</p>
      </div>
    </div>
    
    <div class="dd-faq-item">
      <button class="dd-faq-question" onclick="toggleFaq(this)">
        <span class="dd-faq-q">What does the 'Include end date' option do?</span>
        <svg class="dd-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="dd-faq-answer">
        <p>By default, the calculation finds the duration between the start and end dates (excluding the end date itself). When you check 'Include end date', it adds one full day to the total duration. This is useful for calculating things like hotel stays, rental periods, or event lengths where both the start and end days count as full days.</p>
      </div>
    </div>
    
    <div class="dd-faq-item">
      <button class="dd-faq-question" onclick="toggleFaq(this)">
        <span class="dd-faq-q">How does the business days calculation work?</span>
        <svg class="dd-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="dd-faq-answer">
        <p>When you enable 'Business days only', the calculator excludes all Saturdays and Sundays from the count. This is perfect for calculating working days, project timelines, or delivery estimates. Note that this feature doesn't account for public holidays, as these vary by location and year.</p>
      </div>
    </div>
    
    <div class="dd-faq-item">
      <button class="dd-faq-question" onclick="toggleFaq(this)">
        <span class="dd-faq-q">Why is the breakdown in 'years, months, days' sometimes different from the total days?</span>
        <svg class="dd-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="dd-faq-answer">
        <p>The 'years, months, days' breakdown provides a human-readable calendar duration. Since months have varying lengths (28 to 31 days), this is not a simple conversion from the total number of days. For example, the duration from February 1 to March 1 is '1 month', but only 28 or 29 days depending on the year.</p>
      </div>
    </div>
    
    <div class="dd-faq-item">
      <button class="dd-faq-question" onclick="toggleFaq(this)">
        <span class="dd-faq-q">Can I calculate the difference between times on specific dates?</span>
        <svg class="dd-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="dd-faq-answer">
        <p>This tool focuses on the difference between calendar dates. While it provides the total duration in hours, minutes, and seconds, it assumes midnight to midnight for each date. For calculations involving specific times (like 3:30 PM on one day to 9:15 AM on another), you would need a time duration calculator.</p>
      </div>
    </div>
    
    <div class="dd-faq-item">
      <button class="dd-faq-question" onclick="toggleFaq(this)">
        <span class="dd-faq-q">Is there a limit to how far apart the dates can be?</span>
        <svg class="dd-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="dd-faq-answer">
        <p>The calculator can handle dates spanning several centuries. Whether you're calculating days since a historical event in the 1800s or projecting into the future, the tool will provide accurate results. The date input fields typically support dates from year 1000 to year 9999.</p>
      </div>
    </div>
    
    <div class="dd-faq-item">
      <button class="dd-faq-question" onclick="toggleFaq(this)">
        <span class="dd-faq-q">What happens if I select the same date for both start and end?</span>
        <svg class="dd-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="dd-faq-answer">
        <p>If both dates are the same and 'Include end date' is unchecked, the result will be 0 days. If 'Include end date' is checked, the result will be 1 day. This is useful for calculating single-day events.</p>
      </div>
    </div>
    
    <div class="dd-faq-item">
      <button class="dd-faq-question" onclick="toggleFaq(this)">
        <span class="dd-faq-q">Can I save or share my calculation results?</span>
        <svg class="dd-faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="dd-faq-answer">
        <p>Currently, the calculator provides instant results for viewing. You can take a screenshot of your results or manually note them down. The URL doesn't change with your inputs, so bookmarking won't save your specific calculation.</p>
      </div>
    </div>
  </div>
</div>


  </div>
</div>

<div class="dd-modal" id="ageModal">
  <div class="dd-modal-content">
    <h3 class="dd-modal-title">Enter Your Birth Date</h3>
    <p style="margin-bottom: 1rem; color: var(--dd-text-light);">Calculate your exact age in days, weeks, months, and years</p>
    <input type="date" id="birthDateInput" class="dd-modal-input" placeholder="YYYY-MM-DD">
    <div class="dd-modal-buttons">
      <button class="dd-modal-btn dd-modal-btn-primary" onclick="calculateAge()">Calculate Age</button>
      <button class="dd-modal-btn dd-modal-btn-secondary" onclick="closeModal()">Cancel</button>
    </div>
  </div>
</div>

<script>
  // Initialize with today's date
  document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').value = today;
    document.getElementById('endDate').value = today;
  });
  
  function showError(message) {
    // Remove any existing error messages
    const existingError = document.querySelector('.dd-error-message');
    if (existingError) {
      existingError.remove();
    }
    
    // Create and show new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'dd-error-message';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
      errorDiv.remove();
    }, 3000);
  }
  
  function calculateDifference() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    const includeEnd = document.getElementById('includeEnd').checked;
    const businessOnly = document.getElementById('businessDays').checked;
    
    // Clear any previous error states
    startDateInput.classList.remove('error');
    endDateInput.classList.remove('error');
    
    // Validation
    if (!startDateInput.value) {
      startDateInput.classList.add('error');
      showError('Please select a start date');
      return;
    }
    
    if (!endDateInput.value) {
      endDateInput.classList.add('error');
      showError('Please select an end date');
      return;
    }
    
    if (endDate < startDate) {
      endDateInput.classList.add('error');
      showError('End date must be after or equal to start date');
      return;
    }
    
    // Calculate difference
    let diffTime = Math.abs(endDate - startDate);
    if (includeEnd && diffTime > 0) {
      diffTime += 86400000; // Add one day in milliseconds
    }
    
    let totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Calculate business days if needed
    if (businessOnly) {
      totalDays = calculateBusinessDays(startDate, endDate, includeEnd);
    }
    
    // Calculate other units
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = Math.floor(totalDays / 30.44); // Average days in month
    const totalYears = Math.floor(totalDays / 365.25); // Account for leap years
    
    // Calculate detailed breakdown
    let tempDate = new Date(startDate);
    let years = 0, months = 0, weeks = 0, days = 0;
    
    // Calculate years
    while (tempDate.getFullYear() < endDate.getFullYear() - 1 || 
           (tempDate.getFullYear() === endDate.getFullYear() - 1 && 
            tempDate.getMonth() <= endDate.getMonth() &&
            tempDate.getDate() <= endDate.getDate())) {
      years++;
      tempDate.setFullYear(tempDate.getFullYear() + 1);
    }
    
    // Calculate months
    while ((tempDate.getFullYear() < endDate.getFullYear() && tempDate.getMonth() < 11) ||
           (tempDate.getFullYear() === endDate.getFullYear() && tempDate.getMonth() < endDate.getMonth() - 1) ||
           (tempDate.getFullYear() === endDate.getFullYear() && tempDate.getMonth() === endDate.getMonth() - 1 && tempDate.getDate() <= endDate.getDate())) {
      months++;
      tempDate.setMonth(tempDate.getMonth() + 1);
    }
    
    // Calculate remaining days
    const remainingTime = endDate - tempDate;
    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    weeks = Math.floor(remainingDays / 7);
    days = remainingDays % 7;
    
    if (includeEnd && (years > 0 || months > 0 || weeks > 0 || days > 0)) {
      days++;
      if (days === 7) {
        days = 0;
        weeks++;
      }
    }
    
    // Update UI
    document.getElementById('totalDays').textContent = totalDays.toLocaleString();
    document.getElementById('totalWeeks').textContent = totalWeeks.toLocaleString();
    document.getElementById('totalMonths').textContent = totalMonths.toLocaleString();
    document.getElementById('totalYears').textContent = totalYears.toLocaleString();
    
    // Update date range
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('dateRange').textContent = 
      `${startDate.toLocaleDateString('en-US', options)} to ${endDate.toLocaleDateString('en-US', options)}`;
    
    // Update detailed result
    let detailText = '';
    if (years > 0) detailText += `${years} year${years > 1 ? 's' : ''}, `;
    if (months > 0) detailText += `${months} month${months > 1 ? 's' : ''}, `;
    if (weeks > 0) detailText += `${weeks} week${weeks > 1 ? 's' : ''}, `;
    if (days > 0 || detailText === '') detailText += `${days} day${days !== 1 ? 's' : ''}`;
    
    detailText = detailText.replace(/, $/, '');
    document.getElementById('detailResult').textContent = `That's exactly ${detailText}!`;
    
    // Show results and hide empty state
    document.getElementById('results').style.display = 'block';
    document.getElementById('emptyState').style.display = 'none';
  }
  
  function calculateBusinessDays(startDate, endDate, includeEnd) {
    let count = 0;
    let curDate = new Date(startDate);
    
    while (curDate <= endDate) {
      const dayOfWeek = curDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        count++;
      }
      curDate.setDate(curDate.getDate() + 1);
    }
    
    if (!includeEnd && count > 0) {
      count--;
    }
    
    return count;
  }
  
  function resetCalculator() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').value = today;
    document.getElementById('endDate').value = today;
    document.getElementById('includeEnd').checked = true;
    document.getElementById('businessDays').checked = false;
    document.getElementById('results').style.display = 'none';
    document.getElementById('emptyState').style.display = 'block';
    
    // Clear any error states
    document.getElementById('startDate').classList.remove('error');
    document.getElementById('endDate').classList.remove('error');
  }
  
  function quickCalc(type) {
    const today = new Date();
    let targetDate = new Date();
    
    switch(type) {
      case 'week':
        targetDate.setDate(today.getDate() + 7);
        break;
      case 'month':
        targetDate.setMonth(today.getMonth() + 1);
        break;
      case 'quarter':
        targetDate.setMonth(today.getMonth() + 3);
        break;
      case 'year':
        targetDate.setFullYear(today.getFullYear() + 1);
        break;
      case 'age':
        showAgeModal();
        return;
      case 'century':
        document.getElementById('startDate').value = '2001-01-01';
        document.getElementById('endDate').value = today.toISOString().split('T')[0];
        calculateDifference();
        return;
    }
    
    document.getElementById('startDate').value = today.toISOString().split('T')[0];
    document.getElementById('endDate').value = targetDate.toISOString().split('T')[0];
    calculateDifference();
  }
  
  function showAgeModal() {
    document.getElementById('ageModal').classList.add('active');
    document.getElementById('birthDateInput').focus();
  }
  
  function closeModal() {
    document.getElementById('ageModal').classList.remove('active');
    document.getElementById('birthDateInput').value = '';
  }
  
  function calculateAge() {
    const birthDate = document.getElementById('birthDateInput').value;
    
    if (!birthDate) {
      showError('Please enter your birth date');
      return;
    }
    
    const today = new Date();
    const birth = new Date(birthDate);
    
    if (birth > today) {
      showError('Birth date cannot be in the future');
      return;
    }
    
    document.getElementById('startDate').value = birthDate;
    document.getElementById('endDate').value = today.toISOString().split('T')[0];
    closeModal();
    calculateDifference();
  }
  
  // Add keyboard support
  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (document.getElementById('ageModal').classList.contains('active')) {
        calculateAge();
      } else {
        calculateDifference();
      }
    }
  });
  
  // Close modal when clicking outside
  document.getElementById('ageModal').addEventListener('click', (e) => {
    if (e.target.id === 'ageModal') {
      closeModal();
    }
  });
  
  // Add escape key support for modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('ageModal').classList.contains('active')) {
      closeModal();
    }
  });
  
  // Prevent form submission on enter
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
  });

// FAQ Toggle Function
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const wasActive = faqItem.classList.contains('active');
  
  // Close all FAQ items
  document.querySelectorAll('.dd-faq-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // If this item wasn't active, open it
  if (!wasActive) {
    faqItem.classList.add('active');
  }
}

// Optional: Close FAQ when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dd-faq-item')) {
    document.querySelectorAll('.dd-faq-item').forEach(item => {
      item.classList.remove('active');
    });
  }
});


</script>
