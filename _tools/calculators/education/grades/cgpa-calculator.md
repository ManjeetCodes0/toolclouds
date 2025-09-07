---
title: "CGPA Calculator: Calculate Your Cumulative GPA Instantly"
localtitle: "CGPA Calculator"
layout: tool
categories: [educationCalc, studentCalc, calculators]
permalink: /calculators/education/cgpa-calculator
description: "Free CGPA calculator to calculate your Cumulative Grade Point Average instantly. Perfect for college and university students."
faq:
  - q: "How do I convert my CGPA to a percentage in India?"
    a: "The conversion formula varies. The most common methods are multiplying by 10 (e.g., 8.2 CGPA = 82%) or by 9.5. However, some universities have their own specific formulas (e.g., Mumbai University). Always check your official university guidelines for the correct conversion method."
  - q: "What is a good CGPA for job placements in Indian companies?"
    a: "For most mass recruiters (TCS, Infosys), 7.0+ CGPA is the minimum. For product-based companies and core engineering roles, 7.5 to 8.0+ is considered good. For top-tier companies and finance roles, aim for 8.5+ CGPA."
  - q: "Is my CGPA important for competitive exams like GATE or CAT?"
    a: "Yes. For M.Tech admissions via GATE, most IITs/NITs require a 6.5-7.0+ CGPA. For CAT, a low CGPA (below 8.0) is a disadvantage for IIM admissions and may require a very high percentile to compensate."
  - q: "Do backlogs or re-appears affect my final CGPA?"
    a: "Once you clear a backlog, the new passing grade is typically used for the final CGPA calculation. However, your transcript will still show the re-appear attempt, which can be a consideration for some recruiters or universities."
  - q: "Is the CGPA calculation method the same across all Indian universities?"
    a: "No, it is not standardized. Every university (like VTU, Anna University, DU, etc.) follows its own UGC/AICTE approved guidelines regarding credits, grading, and calculation formulas. Always refer to your own university's official rulebook."
  - q: "What is the difference between Percentage and Percentile?"
    a: "Percentage is an absolute score (your marks out of 100), which your CGPA represents. Percentile is a relative score used in exams like CAT/JEE, indicating the percentage of candidates you scored more than. A 95th percentile means you scored better than 95% of other test-takers."
  - q: "What CGPA is required for government jobs or PSUs in India?"
    a: "Most government jobs and Public Sector Undertakings (PSUs) like NTPC, BHEL, or ONGC require a minimum of 60% aggregate marks. This generally translates to a 6.0-6.5 CGPA on a 10-point scale, but it is essential to check the specific job notification for exact requirements."
---

<style>
    :root {
        --cgpa-primary: #8b5cf6;
        --cgpa-primary-dark: #7c3aed;
        --cgpa-secondary: #06b6d4;
        --cgpa-secondary-dark: #0891b2;
        --cgpa-accent: #f59e0b;
        --cgpa-success: #22c55e;
        --cgpa-danger: #ef4444;
        --cgpa-warning: #f97316;
        --cgpa-bg-main: #ffffff;
        --cgpa-bg-card: #f9fafb;
        --cgpa-bg-hover: #f3f4f6;
        --cgpa-text-primary: #111827;
        --cgpa-text-secondary: #4b5563;
        --cgpa-text-muted: #9ca3af;
        --cgpa-border: #e5e7eb;
        --cgpa-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
        --cgpa-shadow-md: 0 4px 6px rgba(0,0,0,0.07);
        --cgpa-shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
    }

    /* --- Dark Theme --- */
    /* This will apply when the <html> tag has the class "dark-theme" */
    html[data-theme="dark"] .cgpa-wrapper {
        --cgpa-primary: #a78bfa;
        --cgpa-primary-dark: #8b5cf6;
        --cgpa-secondary: #22d3ee;
        --cgpa-secondary-dark: #06b6d4;
        --cgpa-accent: #fbbf24;
        --cgpa-success: #34d399;
        --cgpa-danger: #f87171;
        --cgpa-warning: #fb923c;
        --cgpa-bg-main: #0f172a;
        --cgpa-bg-card: #1e293b;
        --cgpa-bg-hover: #334155;
        --cgpa-text-primary: #f1f5f9;
        --cgpa-text-secondary: #cbd5e1;
        --cgpa-text-muted: #64748b;
        --cgpa-border: #334155;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .cgpa-wrapper {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: var(--cgpa-bg-main);
        color: var(--cgpa-text-primary);
        line-height: 1.6;
        transition: background-color 0.3s, color 0.3s;
    }

    .cgpa-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    }

    .cgpa-header {
        text-align: center;
        padding: 2rem 0;
        margin-bottom: 2rem;
    }

    .cgpa-header h1 {
        font-size: 2.5rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--cgpa-primary) 0%, var(--cgpa-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;
    }

    .cgpa-header p {
        font-size: 1.125rem;
        color: var(--cgpa-text-secondary);
    }

    .cgpa-main-grid {
        display: grid;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    @media (min-width: 1024px) {
        .cgpa-main-grid {
            grid-template-columns: 1fr 380px;
        }
    }

    .cgpa-card {
        background: var(--cgpa-bg-card);
        border-radius: 12px;
        border: 1px solid var(--cgpa-border);
        overflow: hidden;
        transition: background-color 0.3s, border-color 0.3s;
    }

    .cgpa-card-header {
        padding: 1.25rem;
        border-bottom: 1px solid var(--cgpa-border);
    }

    .cgpa-card-header h2 {
        font-size: 1.25rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .cgpa-icon {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, var(--cgpa-primary), var(--cgpa-secondary));
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1rem;
    }

    .cgpa-card-body {
        padding: 1.25rem;
    }

    .cgpa-scale-selector {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        padding: 0.25rem;
        background: var(--cgpa-bg-hover);
        border-radius: 8px;
    }

    .cgpa-scale-btn {
        flex: 1;
        padding: 0.625rem;
        border: none;
        background: transparent;
        color: var(--cgpa-text-secondary);
        font-weight: 600;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 0.875rem;
    }

    .cgpa-scale-btn.active {
        background: var(--cgpa-bg-main);
        color: var(--cgpa-primary);
        box-shadow: var(--cgpa-shadow-sm);
    }

    .cgpa-semester-list {
        margin-bottom: 1rem;
        max-height: 400px;
        overflow-y: auto;
        padding-right: 8px;
    }

    .cgpa-semester-item {
        background: var(--cgpa-bg-main);
        border: 1px solid var(--cgpa-border);
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 0.75rem;
        transition: all 0.3s;
    }

    .cgpa-semester-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    .cgpa-semester-label {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--cgpa-primary);
        background: rgba(139, 92, 246, 0.1);
        padding: 0.25rem 0.625rem;
        border-radius: 20px;
    }

    .cgpa-remove-btn {
        background: none;
        border: none;
        color: var(--cgpa-danger);
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
    }

    .cgpa-semester-inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
    }

    .cgpa-input-group label {
        font-size: 0.75rem;
        color: var(--cgpa-text-muted);
    }
    
    .cgpa-input, .cgpa-input select {
        padding: 0.5rem 0.75rem;
        background: var(--cgpa-bg-card);
        border: 1px solid var(--cgpa-border);
        border-radius: 6px;
        font-size: 0.875rem;
        color: var(--cgpa-text-primary);
        width: 100%;
    }

    .cgpa-btn {
        padding: 0.625rem 1.25rem;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .cgpa-btn-primary {
        background: linear-gradient(135deg, var(--cgpa-primary) 0%, var(--cgpa-primary-dark) 100%);
        color: white;
        border: none;
    }

    .cgpa-btn-secondary {
        background: var(--cgpa-bg-hover);
        color: var(--cgpa-text-secondary);
        border: 1px solid var(--cgpa-border);
    }

    .cgpa-btn-add {
        width: 100%;
        border: 2px dashed var(--cgpa-border);
        background: transparent;
        color: var(--cgpa-primary);
        margin-bottom: 1rem;
    }

    .cgpa-results-panel {
        background: var(--cgpa-bg-card);
        border-radius: 12px;
        border: 1px solid var(--cgpa-border);
        padding: 1.5rem;
        height: fit-content;
    }

    @media (min-width: 1024px) {
        .cgpa-results-panel {
            position: sticky;
            top: 1rem;
        }
    }
    
    .cgpa-result-display {
        text-align: center;
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--cgpa-border);
        margin-bottom: 1.5rem;
    }

    .cgpa-result-value {
        font-size: 3rem;
        font-weight: 900;
        background: linear-gradient(135deg, var(--cgpa-primary) 0%, var(--cgpa-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .cgpa-stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
        margin-top: 1.5rem;
    }
    
    .cgpa-stat-card {
        background: var(--cgpa-bg-main);
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
    }

    .cgpa-stat-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--cgpa-primary);
    }

    .cgpa-stat-label {
        font-size: 0.625rem;
        color: var(--cgpa-text-muted);
        text-transform: uppercase;
    }
    
    .cgpa-info-section {
        background: var(--cgpa-bg-card);
        border-radius: 12px;
        border: 1px solid var(--cgpa-border);
        margin-bottom: 2rem;
    }

    .cgpa-info-header {
        padding: 2rem;
        text-align: center;
        border-bottom: 1px solid var(--cgpa-border);
    }
    
    .cgpa-info-body {
        padding: 1.5rem 2rem;
    }

    .cgpa-info-body h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 2rem 0 1rem;
        padding-left: 1rem;
        border-left: 4px solid var(--cgpa-primary);
    }

    .cgpa-info-body p, .cgpa-info-body li {
        color: var(--cgpa-text-secondary);
        line-height: 1.7;
    }
    
    .cgpa-faq-item {
        background: var(--cgpa-bg-main);
        border: 1px solid var(--cgpa-border);
        border-radius: 8px;
        margin-bottom: 0.75rem;
        cursor: pointer;
        overflow: hidden;
    }

    .cgpa-faq-question {
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }

    .cgpa-faq-question .fas {
        transition: transform 0.3s;
    }

    .cgpa-faq-item.active .cgpa-faq-question .fas {
        transform: rotate(180deg);
    }
    
    .cgpa-faq-answer {
        max-height: 0;
        opacity: 0;
        transition: all 0.3s ease-in-out;
        padding: 0 1rem;
    }
    
    .cgpa-faq-item.active .cgpa-faq-answer {
        max-height: 200px;
        opacity: 1;
        padding: 0 1rem 1rem;
    }

    .cgpa-notification {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        background: var(--cgpa-bg-card);
        border: 1px solid var(--cgpa-border);
        border-radius: 8px;
        padding: 0.75rem 1rem;
        box-shadow: var(--cgpa-shadow-lg);
        transform: translateY(150%);
        opacity: 0;
        transition: all 0.3s;
        z-index: 1000;
    }

    .cgpa-notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    /* NEW: Related Tools Section */
    .cgpa-related-tools {
        background: var(--cgpa-bg-card);
        border-radius: 12px;
        border: 1px solid var(--cgpa-border);
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .cgpa-related-header {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .cgpa-tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 0.75rem;
    }

    .cgpa-tool-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem;
        background: var(--cgpa-bg-main);
        border: 1px solid var(--cgpa-border);
        border-radius: 8px;
        text-decoration: none;
        color: var(--cgpa-text-primary);
        transition: all 0.2s;
    }

    .cgpa-tool-link:hover {
        border-color: var(--cgpa-primary);
        transform: translateY(-2px);
    }
    
    .cgpa-tool-info h4 {
        font-size: 0.875rem;
        font-weight: 600;
    }

    .cgpa-tool-info p {
        font-size: 0.75rem;
        color: var(--cgpa-text-muted);
        margin: 0;
    }
</style>

<div class="cgpa-wrapper">
    <div class="cgpa-container">
        <div class="cgpa-header">
            <h1>CGPA Calculator</h1>
            <p>Track, plan, and master your academic journey with our easy-to-use CGPA tool.</p>
        </div>

        <div class="cgpa-main-grid">
            <!-- Calculator -->
            <div class="cgpa-card">
                <div class="cgpa-card-header"><h2><span class="cgpa-icon"><i class="fas fa-calculator"></i></span> Calculate Your CGPA</h2></div>
                <div class="cgpa-card-body">
                    <div class="cgpa-scale-selector">
                        <button class="cgpa-scale-btn active" data-scale="4">4.0 Scale</button>
                        <button class="cgpa-scale-btn" data-scale="10">10 Point</button>
                        <button class="cgpa-scale-btn" data-scale="percentage">Percentage</button>
                    </div>
                    <div class="cgpa-semester-list" id="semesterList"></div>
                    <button class="cgpa-btn cgpa-btn-add" id="addSemesterBtn"><i class="fas fa-plus"></i> Add Semester</button>
                    <div style="display: flex; gap: 0.75rem;">
                        <button class="cgpa-btn cgpa-btn-primary" id="calculateBtn" style="flex: 1;"><i class="fas fa-chart-line"></i> Calculate</button>
                        <button class="cgpa-btn cgpa-btn-secondary" id="resetBtn"><i class="fas fa-redo"></i> Reset</button>
                    </div>
                </div>
            </div>

            <!-- Results Panel -->
            <div class="cgpa-results-panel">
                <div class="cgpa-result-display">
                    <div class="cgpa-result-label">Your CGPA</div>
                    <div class="cgpa-result-value" id="cgpaResult">0.00</div>
                    <div id="scaleLabel" style="color: var(--cgpa-text-secondary);">out of 4.0</div>
                </div>
                <div style="text-align: center; padding: 1rem; background: var(--cgpa-bg-main); border-radius: 8px; margin-bottom: 1rem;">
                    <div style="font-size: 0.75rem; color: var(--cgpa-text-muted);">EQUIVALENT PERCENTAGE</div>
                    <div style="font-size: 1.75rem; font-weight: 700; color: var(--cgpa-secondary);" id="percentageResult">0.0%</div>
                </div>
                <div class="cgpa-stats-grid">
                    <div class="cgpa-stat-card"><div class="cgpa-stat-value" id="totalSemesters">0</div><div class="cgpa-stat-label">Semesters</div></div>
                    <div class="cgpa-stat-card"><div class="cgpa-stat-value" id="totalCredits">0</div><div class="cgpa-stat-label">Total Credits</div></div>
                    <div class="cgpa-stat-card"><div class="cgpa-stat-value" id="avgSGPA">0.00</div><div class="cgpa-stat-label">Avg SGPA</div></div>
                    <div class="cgpa-stat-card"><div class="cgpa-stat-value" id="gradeClass">-</div><div class="cgpa-stat-label">Classification</div></div>
                </div>
                <div style="margin-top: 1.5rem;">
                    <h3 style="font-size: 1rem; margin-bottom: 0.75rem;">Semester Progress</h3>
                    <div id="progressChart" style="background: var(--cgpa-bg-main); border-radius: 8px; padding: 1rem; min-height: 120px;"><p style="text-align: center; color: var(--cgpa-text-muted);">Calculate to see progress</p></div>
                </div>
            </div>
        </div>

        <!-- Related Tools Section -->
        <div class="cgpa-related-tools">
            <h3 class="cgpa-related-header"><i class="fas fa-tools"></i> Related Student Tools</h3>
            <div class="cgpa-tools-grid">
                {% assign related_tools = site.tools | where_exp:"item", "item.categories contains 'studentCalc'" %}
                {% assign counter = 0 %}
                {% for tool in related_tools %}
                {% if counter >= 3 %}{% break %}{% endif %}
                {% unless tool.url == page.url %}
                <a href="{{ tool.url | relative_url }}" class="cgpa-tool-link">
                <div class="cgpa-tool-icon"><i class="{{ tool.icon | default: 'fas fa-calculator' }}"></i></div>
                <div class="cgpa-tool-info">
                <h4>{{ tool.localtitle }}</h4>
                <p>{{ tool.description | truncate: 50, "..." }}</p>
                </div>
                </a>
                {% assign counter = counter | plus: 1 %}
                {% endunless %}
                {% endfor %}
            </div>
        </div>

        <!-- Information Section -->
        <div class="cgpa-info-section">
            <div class="cgpa-info-header"><h2>Your Guide to Understanding and Mastering CGPA</h2></div>
            <div class="cgpa-info-body">
                <p>Let's be honest, hearing the term "CGPA" can bring a mix of feelings—ambition, curiosity, and maybe a little bit of anxiety. It feels like this single number defines your entire academic life. But it doesn't have to be a source of stress. In fact, when you understand it, your CGPA becomes one of the most powerful tools you have for shaping your future. This guide, along with our calculator, is designed to turn that anxiety into confidence.</p>

                <h3>What is CGPA, Really? The Full Story of Your Grades</h3>
                <p>Think of your academic journey as a movie. Your SGPA (Semester Grade Point Average) is like a single, powerful scene—it tells you how you did in one specific semester. It’s important, but it’s just one part of the story. Your CGPA (Cumulative Grade Point Average), on the other hand, is the entire film. It’s the average of all your semester performances, woven together to give a complete picture of your academic standing from your first day of class to your most recent exam.</p>
                <p>It’s a weighted average, which means courses with more credit hours have a bigger impact on the final number. Think of it this way: a 4-credit core course is like a main character in your movie—its performance has a much bigger effect on the plot than a 1-credit elective, which is more like a supporting role.</p>

                <h3>Why Your CGPA is More Than Just a Number</h3>
                <p>In a competitive world, your CGPA acts as a key that can unlock incredible opportunities. It’s often the very first thing that recruiters, admission committees, and scholarship boards look at. It’s a standardized measure of your consistency, dedication, and ability to handle an academic workload.</p>
                <ul>
                    <li><strong>Your Dream Job:</strong> Many top companies have a minimum CGPA requirement as a screening filter. A strong CGPA gets your resume past the first hurdle and into the hands of a human recruiter.</li>
                    <li><strong>Higher Education:</strong> Planning for a Master's or PhD? Your CGPA is one of the most critical components of your application. It demonstrates you have the academic foundation needed for advanced study.</li>
                    <li><strong>Scholarships and Grants:</strong> A good CGPA can literally save you money. Most merit-based scholarships are awarded to students who have demonstrated consistent academic excellence.</li>
                    <li><strong>Personal Confidence:</strong> Beyond the external validation, tracking and improving your CGPA is a powerful way to build confidence. It’s tangible proof of your hard work and progress.</li>
                </ul>

                <h3>From Calculator to Strategic Planner: How to Use This Tool Wisely</h3>
                <p>This tool is more than just a number cruncher; it's a strategic planner. Don’t just use it to see where you are—use it to map out where you want to go.</p>
                <p><strong>1. Run "What-If" Scenarios:</strong> Feeling nervous about a tough upcoming semester? Add a new semester to the calculator and plug in some potential grades. See how a lower grade in a heavy-credit course affects your overall CGPA. Then, see how getting an A in an easier course can help balance it out. This removes the fear of the unknown and empowers you to make informed decisions.</p>
                <p><strong>2. Set Achievable Goals:</strong> Is your goal to raise your CGPA from a 7.8 to an 8.5 by next year? Add the next two semesters and play with the numbers. You might find that you don't need a perfect 10 SGPA in every semester. Maybe a consistent 8.8 will get you there. This breaks down a big goal into smaller, manageable steps.</p>
                <p><strong>3. Plan Your Comeback:</strong> We've all had that one semester that didn't go as planned. It’s easy to feel discouraged, but a rough start doesn't define your entire journey. Use this calculator to see how strong performances in future semesters can steadily pull your CGPA up. It can be incredibly motivating to see a clear, mathematical path to recovery.</p>

                <h3>A Final Thought: You Are More Than Your CGPA</h3>
                <p>While your CGPA is an important metric, never forget that it is just one part of your story. The skills you learn, the projects you build, the internships you complete, and the connections you make are all equally, if not more, important. Use this calculator not as a tool for judgment, but as a tool for empowerment. Let it guide your efforts, help you set realistic goals, and celebrate your progress along the way. Your academic journey is a marathon, not a sprint. Keep learning, keep growing, and keep moving forward.</p>

                <h3 id="faq">Frequently Asked Questions</h3>
                        <div class="cgpa-faq">

            <!-- Question 1 -->
            <div class="cgpa-faq-item" onclick="toggleFAQ(this)">
                <div class="cgpa-faq-question">
                    How do I convert my CGPA to a percentage in India?
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="cgpa-faq-answer">
                    <p>The conversion formula varies significantly. Common methods include multiplying by <strong>10</strong> or <strong>9.5</strong>. However, some universities have unique formulas. <strong>Always</strong> check your official university guidelines for the correct method for official applications.</p>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="cgpa-faq-item" onclick="toggleFAQ(this)">
                <div class="cgpa-faq-question">
                    What is a good CGPA for job placements in Indian companies?
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="cgpa-faq-answer">
                    <p>It depends on the company. Generally, a <strong>7.0+ CGPA</strong> is the minimum for mass recruiters (like TCS, Infosys). For product-based companies, <strong>7.5 to 8.0+</strong> is good. For top-tier companies and finance roles, aim for <strong>8.5+ CGPA</strong>.</p>
                </div>
            </div>
            
            <!-- Question 3 -->
            <div class="cgpa-faq-item" onclick="toggleFAQ(this)">
                <div class="cgpa-faq-question">
                    Is my CGPA important for competitive exams like GATE or CAT?
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="cgpa-faq-answer">
                     <p>Yes. For M.Tech admissions via <strong>GATE</strong>, most IITs/NITs require a <strong>6.5-7.0+ CGPA</strong>. For <strong>CAT</strong>, a low CGPA (below 8.0) is a disadvantage for IIM admissions and may require a very high percentile to compensate.</p>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="cgpa-faq-item" onclick="toggleFAQ(this)">
                <div class="cgpa-faq-question">
                    Do backlogs or re-appears affect my final CGPA?
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="cgpa-faq-answer">
                    <p>Once you clear a backlog, the new passing grade is typically used for the final CGPA calculation. However, your transcript will still show the re-appear attempt, which can be a consideration for some recruiters or universities.</p>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="cgpa-faq-item" onclick="toggleFAQ(this)">
                <div class="cgpa-faq-question">
                    Is the CGPA calculation method the same across all Indian universities?
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="cgpa-faq-answer">
                    <p>No, it is not standardized. Every university (like VTU, Anna University, DU, etc.) follows its own UGC/AICTE approved guidelines regarding credits, grading, and calculation formulas. Always refer to your own university's official rulebook.</p>
                </div>
            </div>
            
            <!-- NEW Question 6 -->
            <div class="cgpa-faq-item" onclick="toggleFAQ(this)">
                <div class="cgpa-faq-question">
                    What is the difference between Percentage and Percentile?
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="cgpa-faq-answer">
                    <p><strong>Percentage</strong> is an absolute score (your marks out of 100), which your CGPA represents. <strong>Percentile</strong> is a relative score used in exams like CAT/JEE, indicating the percentage of candidates you scored more than. A 95th percentile means you scored better than 95% of other test-takers.</p>
                </div>
            </div>

            <!-- NEW Question 7 -->
            <div class="cgpa-faq-item" onclick="toggleFAQ(this)">
                <div class="cgpa-faq-question">
                    What CGPA is required for government jobs or PSUs in India?
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="cgpa-faq-answer">
                    <p>Most government jobs and Public Sector Undertakings (PSUs) like NTPC, BHEL, or ONGC require a minimum of <strong>60% aggregate marks</strong>. This generally translates to a <strong>6.0-6.5 CGPA</strong> on a 10-point scale, but it is essential to check the specific job notification for exact requirements.</p>
                </div>
                </div>
                </div>
             </div>
        </div>
    </div>
</div>

<script>
    // This function is globally accessible for the onclick attribute
    function toggleFAQ(element) {
        element.classList.toggle('active');
    }

    document.addEventListener('DOMContentLoaded', function() {
        // State, scales, and DOM elements
        let semesters = [];
        let semesterIdCounter = 0;
        let currentScale = '4';
        
        const scales = {
            '4': { max: 4.0, text: 'out of 4.0', placeholder: '3.5' },
            '10': { max: 10.0, text: 'out of 10', placeholder: '8.5' },
            'percentage': { max: 100, text: 'out of 100%', placeholder: '85' }
        };
        scales['4'].toPercentage = (cgpa) => (cgpa / scales['4'].max) * 100;
        scales['10'].toPercentage = (cgpa) => (cgpa / scales['10'].max) * 100;
        scales['percentage'].toPercentage = (cgpa) => cgpa;

        const semesterList = document.getElementById('semesterList');
        const addSemesterBtn = document.getElementById('addSemesterBtn');
        const calculateBtn = document.getElementById('calculateBtn');
        const resetBtn = document.getElementById('resetBtn');
        const scaleButtons = document.querySelectorAll('.cgpa-scale-btn');

        // --- Core Functions ---
        function addSemester() {
            const semesterId = semesterIdCounter++;
            const semesterDiv = document.createElement('div');
            semesterDiv.className = 'cgpa-semester-item';
            semesterDiv.id = `semester-${semesterId}`;
            semesterDiv.innerHTML = `
                <div class="cgpa-semester-header">
                    <span class="cgpa-semester-label">Semester ${semesters.length + 1}</span>
                    <button class="cgpa-remove-btn" onclick="removeSemester(${semesterId})"><i class="fas fa-times"></i></button>
                </div>
                <div class="cgpa-semester-inputs">
                    <div class="cgpa-input-group">
                        <label>SGPA/GPA</label>
                        <input type="number" class="cgpa-input" placeholder="${scales[currentScale].placeholder}" step="0.01" data-field="sgpa" max="${scales[currentScale].max}">
                    </div>
                    <div class="cgpa-input-group">
                        <label>Credits</label>
                        <input type="number" class="cgpa-input" placeholder="24" min="0" data-field="credits">
                    </div>
                </div>`;
            
            semesterList.appendChild(semesterDiv);
            const newSemester = { id: semesterId, sgpa: '', credits: '', element: semesterDiv };
            semesters.push(newSemester);

            semesterDiv.querySelectorAll('input').forEach(input => {
                input.addEventListener('input', function() {
                    const field = this.dataset.field;
                    newSemester[field] = this.value;
                });
            });
            updateSemesterNumbers();
        }

        window.removeSemester = function(semesterId) {
            const semesterToRemove = semesters.find(s => s.id === semesterId);
            if (semesterToRemove) {
                semesterToRemove.element.style.transform = 'translateX(-120%)';
                semesterToRemove.element.style.opacity = '0';
                setTimeout(() => {
                    semesterToRemove.element.remove();
                    semesters = semesters.filter(s => s.id !== semesterId);
                    updateSemesterNumbers();
                    showNotification('Semester removed', 'info');
                }, 300);
            }
        }

        function calculateCGPA() {
            let totalWeightedPoints = 0, totalCredits = 0, validSemesters = 0, sgpaSum = 0;
            const progressData = [];

            semesters.forEach((semester, index) => {
                const sgpa = parseFloat(semester.sgpa);
                const credits = parseFloat(semester.credits);
                if (!isNaN(sgpa) && !isNaN(credits) && sgpa >= 0 && sgpa <= scales[currentScale].max && credits > 0) {
                    totalWeightedPoints += sgpa * credits;
                    totalCredits += credits;
                    sgpaSum += sgpa;
                    validSemesters++;
                    progressData.push({ semester: index + 1, sgpa });
                }
            });

            if (totalCredits === 0) {
                showNotification('Please enter valid data for at least one semester.', 'warning');
                return;
            }

            const cgpa = totalWeightedPoints / totalCredits;
            const avgSGPA = sgpaSum / validSemesters;
            const percentage = scales[currentScale].toPercentage(cgpa);

            updateResultsUI(cgpa, percentage, validSemesters, totalCredits, avgSGPA);
            updateProgressChart(progressData);
            showNotification(`Calculation complete! Your CGPA is ${cgpa.toFixed(2)}.`, 'success');
        }

        function resetCalculator() {
            semesters = [];
            semesterIdCounter = 0;
            semesterList.innerHTML = '';
            for (let i = 0; i < 2; i++) addSemester();
            updateResultsUI(0, 0, 0, 0, 0);
            updateProgressChart([]);
            showNotification('Calculator has been reset.', 'info');
        }

        // --- UI Update Functions ---
        function updateSemesterNumbers() {
            semesterList.querySelectorAll('.cgpa-semester-label').forEach((label, index) => {
                label.textContent = `Semester ${index + 1}`;
            });
        }
        
        function updateScaleUI() {
            document.getElementById('scaleLabel').textContent = scales[currentScale].text;
            document.querySelectorAll('input[data-field="sgpa"]').forEach(input => {
                input.placeholder = scales[currentScale].placeholder;
                input.max = scales[currentScale].max;
            });
        }

        function updateResultsUI(cgpa, percentage, semesters, credits, avgSGPA) {
            document.getElementById('cgpaResult').textContent = cgpa.toFixed(2);
            document.getElementById('percentageResult').textContent = percentage.toFixed(1) + '%';
            document.getElementById('totalSemesters').textContent = semesters;
            document.getElementById('totalCredits').textContent = credits;
            document.getElementById('avgSGPA').textContent = avgSGPA.toFixed(2);
            
            const normalizedCGPA = (percentage / 100) * 4.0;
            let classification = 'Below Avg';
            if (normalizedCGPA >= 3.7) classification = 'Outstanding';
            else if (normalizedCGPA >= 3.3) classification = 'Excellent';
            else if (normalizedCGPA >= 3.0) classification = 'Very Good';
            else if (normalizedCGPA >= 2.5) classification = 'Good';
            else if (normalizedCGPA >= 2.0) classification = 'Average';
            document.getElementById('gradeClass').textContent = classification;
        }

        function updateProgressChart(data) {
            const chart = document.getElementById('progressChart');
            if (!data || data.length === 0) {
                chart.innerHTML = '<p style="text-align: center; color: var(--cgpa-text-muted);">Calculate to see progress</p>';
                return;
            }
            const maxValue = scales[currentScale].max;
            let chartHTML = '<div style="display: flex; align-items: flex-end; height: 100px; gap: 4px;">';
            data.forEach(item => {
                const height = Math.max((item.sgpa / maxValue) * 100, 2); // min height of 2px
                chartHTML += `<div style="flex: 1; display: flex; flex-direction: column; align-items: center;" title="Sem ${item.semester}: ${item.sgpa.toFixed(2)}"><div style="width: 100%; background: linear-gradient(to top, var(--cgpa-primary), var(--cgpa-secondary)); height: ${height}px; border-radius: 4px 4px 0 0;"></div><span style="font-size: 0.625rem; color: var(--cgpa-text-muted); margin-top: 4px;">S${item.semester}</span></div>`;
            });
            chart.innerHTML = chartHTML + '</div>';
        }

        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `cgpa-notification cgpa-notification-${type}`;
            notification.textContent = message;
            document.body.appendChild(notification);
            setTimeout(() => notification.classList.add('show'), 10);
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        // --- Event Listeners ---
        addSemesterBtn.addEventListener('click', addSemester);
        calculateBtn.addEventListener('click', calculateCGPA);
        resetBtn.addEventListener('click', resetCalculator);

        scaleButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                scaleButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentScale = this.dataset.scale;
                updateScaleUI();
                showNotification(`Switched to ${this.textContent} scale`, 'info');
            });
        });

        // Initial setup
        for (let i = 0; i < 2; i++) addSemester();
    });
</script>
