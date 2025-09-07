---
title: "SRM GPA Calculator - Calculate Your GPA Instantly"
localtitle: "SRM GPA Calculator"
layout: tool
categories: [educationCalc, studentCalc, calculators]
permalink: /calculators/education/srm-gpa-calculator
description: "A accurate GPA calculator for students of SRM University (SRMIST). Calculate your semester GPA or new cumulative GPA based on the 10-point grading system."
faq:
  - q: "How do I calculate my CGPA for SRM University?"
    a: "To calculate your SRM CGPA, you need the SGPA (Semester Grade Point Average) and the total credits for each semester. The formula is the sum of (SGPA × Credits) for all semesters, divided by the total sum of credits. Our SRM CGPA Calculator automates this entire process for you."
  - q: "How do I convert my SRM CGPA to a percentage?"
    a: "SRM University (SRMIST) generally follows a straightforward conversion formula: Percentage (%) = CGPA × 10. For example, if your CGPA is 8.5, your equivalent percentage would be 85%. Always confirm with the official SRM academic guidelines for any updates to this rule."
  - q: "What are the grade points at SRM University?"
    a: "SRM uses a 10-point grading system. The grade points are typically: O (Outstanding) = 10, A+ (Excellent) = 9, A (Very Good) = 8, B+ (Good) = 7, B (Above Average) = 6, C (Average) = 5, P (Pass) = 4, and F (Fail) = 0."
  - q: "What is a good CGPA at SRM for job placements?"
    a: "For placements at SRM, a CGPA of 7.5 or above is generally considered good and meets the criteria for most mass recruiters. For top product-based companies, core engineering roles, or super dream offers, aiming for a CGPA of 8.5 or higher is highly recommended."
  - q: "Is the CGPA calculation method the same across all Indian universities?"
    a: "No, it is not standardized. Every university (like VTU, Anna University, DU, etc.) follows its own UGC/AICTE approved guidelines regarding credits, grading, and calculation formulas. Always refer to your own university's official rulebook."
  - q: "What is the difference between Percentage and Percentile?"
    a: "Percentage is an absolute score (your marks out of 100), which your CGPA represents. Percentile is a relative score used in exams like SRMJEEE/CAT/JEE, indicating the percentage of candidates you scored more than. A 95th percentile means you scored better than 95% of other test-takers."
  - q: "What CGPA is required for government jobs or PSUs in India?"
    a: "Most government jobs and Public Sector Undertakings (PSUs) like NTPC, BHEL, or ONGC require a minimum of 60% aggregate marks. This generally translates to a 6.0-6.5 CGPA on a 10-point scale, but it is essential to check the specific job notification for exact requirements."
---

<style>
    :root {
        --srm-primary: #007bff;
        --srm-secondary: #6c757d;
        --srm-bg-main: #f4f7fc;
        --srm-bg-card: #ffffff;
        --srm-text-primary: #212529;
        --srm-text-secondary: #495057;
        --srm-text-muted: #6c757d;
        --srm-border: #dee2e6;
        --srm-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
        --srm-input-bg: #fff;
    }
    
    html[data-theme="dark"] {
        --srm-primary: #4dabf7;
        --srm-secondary: #868e96;
        --srm-bg-main: #121212;
        --srm-bg-card: #1e1e1e;
        --srm-text-primary: #e9ecef;
        --srm-text-secondary: #adb5bd;
        --srm-text-muted: #868e96;
        --srm-border: #343a40;
        --srm-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        --srm-input-bg: #2c2c2c;
    }

    .srm-gpa-wrapper {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        background-color: var(--srm-bg-main);
        color: var(--srm-text-primary);
        line-height: 1.6;
        transition: background-color 0.3s ease;
    }
    
    .srm-gpa-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 0.5rem;
    }

    .srm-gpa-header {
        text-align: center;
        margin-bottom: 1.5rem;
        position: relative;
    }

    .srm-gpa-header h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--srm-primary);
        margin: 0;
    }

    .srm-gpa-header p {
        font-size: 1.1rem;
        color: var(--srm-text-secondary);
        margin-top: 0.5rem;
    }

    .srm-main-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    @media (min-width: 992px) {
        .srm-main-grid {
            grid-template-columns: 2fr 1fr;
            align-items: flex-start;
        }
    }

    .srm-card {
        background-color: var(--srm-bg-card);
        border-radius: 12px;
        box-shadow: var(--srm-shadow);
        border: 1px solid var(--srm-border);
        transition: background-color 0.3s, border-color 0.3s;
    }

    .srm-card-header {
        padding: 1.5rem;
        border-bottom: 1px solid var(--srm-border);
        font-size: 1.25rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .srm-card-header .icon {
        color: var(--srm-primary);
    }

    .srm-card-body {
        padding: 1.5rem;
    }

    .srm-course-list .srm-course-item {
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--srm-border);
    }
    
    .srm-course-list .srm-course-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .srm-input, .srm-select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid var(--srm-border);
        background-color: var(--srm-input-bg);
        color: var(--srm-text-primary);
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.2s, box-shadow 0.2s;
    }

    .srm-input:focus, .srm-select:focus {
        outline: none;
        border-color: var(--srm-primary);
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
    }

    .srm-btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s, transform 0.2s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .srm-btn-primary {
        background-color: var(--srm-primary);
        color: #fff;
    }

    .srm-btn-primary:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
    }
    
    .srm-btn-secondary {
        background-color: transparent;
        color: var(--srm-text-secondary);
        border: 1px solid var(--srm-border);
    }
    
    .srm-btn-secondary:hover {
        background-color: var(--srm-border);
        color: var(--srm-text-primary);
    }
    
    .srm-remove-btn {
        background: transparent;
        border: none;
        color: #dc3545;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
    }
    
    .srm-remove-btn:hover {
        color: #a71d2a;
    }

    .srm-result-display {
        text-align: center;
    }

    .srm-result-label {
        font-size: 1rem;
        color: var(--srm-text-secondary);
        margin-bottom: 0.5rem;
    }

    .srm-result-value {
        font-size: 3.5rem;
        font-weight: 700;
        color: var(--srm-primary);
        line-height: 1.1;
    }
    
    .srm-result-scale {
        font-size: 1rem;
        color: var(--srm-text-secondary);
        margin-top: 0.25rem;
    }

    .srm-content-section {
        margin-top: 2.5rem;
    }

    .srm-section-header {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--srm-primary);
      display: inline-block;
    }
    
    .srm-tools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .srm-tool-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem;
      background-color: var(--srm-bg-card);
      border: 1px solid var(--srm-border);
      border-radius: 8px;
      text-decoration: none;
      color: var(--srm-text-primary);
      transition: all 0.2s ease;
    }
    
    .srm-tool-link:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        border-color: var(--srm-primary);
    }
    
    .srm-tool-icon {
        font-size: 1.5rem;
        color: var(--srm-primary);
    }
    
    .srm-tool-info h4 {
        margin: 0 0 0.25rem 0;
        font-size: 1.1rem;
    }

    .srm-tool-info p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--srm-text-secondary);
    }
    
    .srm-table-wrapper { overflow-x: auto; }
    .srm-grade-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1.5rem;
    }
    .srm-grade-table th, .srm-grade-table td {
        padding: 0.8rem 1rem;
        border: 1px solid var(--srm-border);
        text-align: left;
    }
    .srm-grade-table thead {
        background-color: rgba(128,128,128,0.1);
        font-weight: 600;
    }

    .srm-gpa-type-selector {
        display: flex;
        background-color: var(--srm-bg-main);
        border-radius: 8px;
        padding: 5px;
        margin-bottom: 1.5rem;
        border: 1px solid var(--srm-border);
    }
    .srm-gpa-type-btn {
        flex: 1;
        background: transparent;
        border: none;
        padding: 0.6rem 1rem;
        border-radius: 6px;
        cursor: pointer;
        color: var(--srm-text-secondary);
        font-weight: 600;
        transition: all 0.3s ease;
    }
    .srm-gpa-type-btn.active {
        background-color: var(--srm-bg-card);
        color: var(--srm-primary);
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    #cumulativeInputs {
        border-bottom: 1px solid var(--srm-border);
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .srm-faq-item {
        border-bottom: 1px solid var(--srm-border);
    }
    .srm-faq-item:last-child {
        border-bottom: none;
    }
    .srm-faq-question {
        padding: 1rem 0;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .srm-faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
        padding-bottom: 0;
        color: var(--srm-text-secondary);
    }
    .srm-faq-item.active .srm-faq-answer {
        max-height: 200px;
        padding-bottom: 1rem;
    }
    .srm-faq-icon {
      transition: transform 0.3s ease;
    }
    .srm-faq-item.active .srm-faq-icon {
      transform: rotate(180deg);
    }
    
    @media (max-width: 576px) {
        .srm-course-list .srm-course-item {
            grid-template-columns: 1fr 1fr;
        }
        .srm-course-list .srm-course-item .srm-course-name {
            grid-column: 1 / 3;
        }
        .srm-remove-btn {
            grid-column: 3;
            grid-row: 1;
            justify-self: end;
        }
    }
</style>

<div class="srm-gpa-wrapper">
    <div class="srm-gpa-container">
        <header class="srm-gpa-header">
            <h1>SRM University GPA Calculator</h1>
        </header>

        <div class="srm-main-grid">
            <!-- Calculator Inputs -->
            <div class="srm-card">
                <div class="srm-card-header">
                    <i class="fas fa-edit icon"></i>
                    <span>Enter Your Grades</span>
                </div>
                <div class="srm-card-body">
                    <div class="srm-gpa-type-selector">
                        <button class="srm-gpa-type-btn active" data-type="semester">Semester GPA</button>
                        <button class="srm-gpa-type-btn" data-type="cumulative">Cumulative GPA</button>
                    </div>

                    <div id="cumulativeInputs" style="display: none;">
                        <h3 style="font-size: 1rem; font-weight: 600; color: var(--srm-text-secondary); margin: 0 0 1rem 0;">Previous Academic Record (Optional)</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label for="prevCredits" style="font-size: 0.9rem; color: var(--srm-text-muted);">Credits Earned</label>
                                <input type="number" id="prevCredits" class="srm-input" placeholder="e.g., 120" min="0">
                            </div>
                             <div>
                                <label for="prevGpa" style="font-size: 0.9rem; color: var(--srm-text-muted);">Current CGPA</label>
                                <input type="number" id="prevGpa" class="srm-input" placeholder="e.g., 8.5" min="0" max="10" step="0.01">
                            </div>
                        </div>
                    </div>
                    
                    <h3 id="currentSemHeader" style="font-size: 1rem; font-weight: 600; color: var(--srm-text-secondary); margin: 0 0 1rem 0;">Current Semester Courses</h3>

                    <div class="srm-course-list" id="courseList">
                        <!-- Course items will be dynamically added here -->
                    </div>
                    <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                        <button class="srm-btn srm-btn-primary" id="addCourseBtn" style="flex: 1;">
                            <i class="fas fa-plus"></i> Add Course
                        </button>
                        <button class="srm-btn srm-btn-secondary" id="resetBtn">
                            <i class="fas fa-redo"></i> Reset
                        </button>
                    </div>
                </div>
            </div>

            <!-- Results Display -->
            <div class="srm-card" id="resultsPanel">
                <div class="srm-card-header">
                     <i class="fas fa-graduation-cap icon"></i>
                    <span>Your Result</span>
                </div>
                <div class="srm-card-body">
                    <div class="srm-result-display">
                        <p class="srm-result-label" id="resultLabel">Semester GPA</p>
                        <h2 class="srm-result-value" id="gpaResult">0.00</h2>
                        <p class="srm-result-scale">on a 10.0 scale</p>
                    </div>
                </div>
            </div>
        </div>

        <section class="srm-content-section">
            <h2 class="srm-section-header">Related Student Tools</h2>
            <div class="srm-tools-grid">
                {% assign related_tools = site.tools | where_exp:"item", "item.categories contains 'studentCalc'" %}
                {% assign counter = 0 %}
                {% for tool in related_tools %}
                {% if counter >= 4 %}{% break %}{% endif %}
                {% unless tool.url == page.url %}
                <a href="{{ tool.url | relative_url }}" class="srm-tool-link">
                    <i class="{{ tool.icon | default: 'fas fa-calculator' }} srm-tool-icon"></i>
                <div class="srm-tool-info">
                <h4>{{ tool.localtitle }}</h4>
                <p>{{ tool.description | truncate: 50, "..." }}</p>
                </div>
                </a>
                {% assign counter = counter | plus: 1 %}
                {% endunless %}
                {% endfor %}
            </div>
        </section>

        <section class="srm-content-section">
            <h2 class="srm-section-header">Understanding the SRM Grading System</h2>
            <div class="srm-card">
                <div class="srm-card-body">
                    <p>SRM Institute of Science and Technology (SRMIST) uses a 10-point grading system to evaluate student performance. Each letter grade you receive corresponds to a grade point. Your Grade Point Average (GPA) is the weighted average of these points based on course credits.</p>
                    <p>The formula is: <strong>GPA = Σ (Course Credits × Grade Points) / Σ (Total Course Credits)</strong></p>
                    <div class="srm-table-wrapper">
                        <table class="srm-grade-table">
                            <thead><tr><th>Letter Grade</th><th>Description</th><th>Grade Points</th></tr></thead>
                            <tbody>
                                <tr><td>O</td><td>Outstanding</td><td>10</td></tr>
                                <tr><td>A+</td><td>Excellent</td><td>9</td></tr>
                                <tr><td>A</td><td>Very Good</td><td>8</td></tr>
                                <tr><td>B+</td><td>Good</td><td>7</td></tr>
                                <tr><td>B</td><td>Above Average</td><td>6</td></tr>
                                <tr><td>C</td><td>Average</td><td>5</td></tr>
                                <tr><td>P</td><td>Pass</td><td>4</td></tr>
                                <tr><td>F</td><td>Fail</td><td>0</td></tr>
                                <tr><td>Ab</td><td>Absent</td><td>0</td></tr>
                                <tr><td>I</td><td>Incomplete</td><td>0</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="srm-content-section">
            <h2 class="srm-section-header">Frequently Asked Questions (FAQ)</h2>
            <div class="srm-card">
                <div class="srm-card-body" id="faqContainer">
                    <!-- FAQs will be injected here by JS -->
                </div>
            </div>
        </section>

    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const srmGradePoints = {
        'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6,
        'C': 5, 'P': 4, 'F': 0, 'Ab': 0, 'I': 0
    };
    let courseIdCounter = 0;
    let calculatorType = 'semester'; // 'semester' or 'cumulative'

    // Element Cache
    const courseList = document.getElementById('courseList');
    const addCourseBtn = document.getElementById('addCourseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const gpaResultEl = document.getElementById('gpaResult');
    const cumulativeInputs = document.getElementById('cumulativeInputs');
    const resultLabel = document.getElementById('resultLabel');
    const prevCreditsInput = document.getElementById('prevCredits');
    const prevGpaInput = document.getElementById('prevGpa');
    const typeButtons = document.querySelectorAll('.srm-gpa-type-btn');

    // --- GPA Calculation Logic ---
    const createCourseItem = () => {
        const courseId = courseIdCounter++;
        const courseItem = document.createElement('div');
        courseItem.className = 'srm-course-item';
        courseItem.id = `course-${courseId}`;
        
        courseItem.innerHTML = `
            <div class="srm-course-name"><input type="text" class="srm-input" placeholder="Course Name (Optional)"></div>
            <div><input type="number" class="srm-input srm-credits" placeholder="Credits" min="0" max="10" step="0.5"></div>
            <div>
                <select class="srm-select srm-grade">
                    <option value="">Grade</option>
                    <option value="O">O</option><option value="A+">A+</option><option value="A">A</option>
                    <option value="B+">B+</option><option value="B">B</option><option value="C">C</option>
                    <option value="P">P</option><option value="F">F</option><option value="Ab">Ab</option>
                    <option value="I">I</option>
                </select>
            </div>
            <button class="srm-remove-btn" onclick="removeCourse(${courseId})"><i class="fas fa-trash-alt"></i></button>
        `;
        courseList.appendChild(courseItem);

        courseItem.querySelectorAll('.srm-credits, .srm-grade').forEach(el => {
            el.addEventListener('input', calculateGPA);
        });
    };
    
    window.removeCourse = (id) => {
        document.getElementById(`course-${id}`)?.remove();
        calculateGPA();
    };

    const calculateGPA = () => {
        let currentQualityPoints = 0;
        let currentCredits = 0;

        courseList.querySelectorAll('.srm-course-item').forEach(item => {
            const credits = parseFloat(item.querySelector('.srm-credits').value);
            const grade = item.querySelector('.srm-grade').value;
            if (!isNaN(credits) && credits > 0 && grade && srmGradePoints.hasOwnProperty(grade)) {
                currentQualityPoints += credits * srmGradePoints[grade];
                currentCredits += credits;
            }
        });

        if (calculatorType === 'semester') {
            const gpa = currentCredits === 0 ? 0 : currentQualityPoints / currentCredits;
            gpaResultEl.textContent = gpa.toFixed(2);
        } else {
            const prevCredits = parseFloat(prevCreditsInput.value) || 0;
            const prevGpa = parseFloat(prevGpaInput.value) || 0;
            
            const prevQualityPoints = prevCredits * prevGpa;
            
            const totalCredits = prevCredits + currentCredits;
            const totalQualityPoints = prevQualityPoints + currentQualityPoints;
            
            const cgpa = totalCredits === 0 ? 0 : totalQualityPoints / totalCredits;
            gpaResultEl.textContent = cgpa.toFixed(2);
        }
    };

    const resetCalculator = () => {
        courseList.innerHTML = '';
        courseIdCounter = 0;
        prevCreditsInput.value = '';
        prevGpaInput.value = '';
        for (let i = 0; i < 4; i++) {
            createCourseItem();
        }
        calculateGPA();
    };

    // --- UI and Event Listeners ---
    typeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            typeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            calculatorType = this.dataset.type;

            if (calculatorType === 'cumulative') {
                cumulativeInputs.style.display = 'block';
                resultLabel.textContent = 'New Cumulative GPA';
            } else {
                cumulativeInputs.style.display = 'none';
                resultLabel.textContent = 'Semester GPA';
            }
            calculateGPA();
        });
    });

    addCourseBtn.addEventListener('click', createCourseItem);
    resetBtn.addEventListener('click', resetCalculator);
    [prevCreditsInput, prevGpaInput].forEach(input => input.addEventListener('input', calculateGPA));

    // --- FAQ Generation ---
    const faqData = [
        { q: "How is GPA different from CGPA at SRM?", a: "GPA (Grade Point Average) is calculated for a single semester. CGPA (Cumulative Grade Point Average) is the average of your GPAs from all completed semesters, giving an overall academic score." },
        { q: "What is a good GPA/CGPA in SRM?", a: "A CGPA of 8.5 or above is generally considered excellent and is often a requirement for placements in top companies and for higher studies. A CGPA above 7.5 is considered good." },
        { q: "Do 'F', 'Ab', or 'I' grades affect my GPA?", a: "Yes. Any course with an 'F' (Fail), 'Ab' (Absent), or 'I' (Incomplete) grade is assigned 0 grade points. These are included in your GPA calculation and will lower your average significantly." },
        { q: "How can I improve my CGPA?", a: "Focus on scoring higher grades in subjects with more credits, as they have a greater impact on your CGPA. If you have failed a course, clearing the arrear with a good grade will replace the 'F' and improve your CGPA." }
    ];
    
    const faqContainer = document.getElementById('faqContainer');
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'srm-faq-item';
        faqItem.innerHTML = `
            <div class="srm-faq-question">
                <span>${item.q}</span>
                <i class="fas fa-chevron-down srm-faq-icon"></i>
            </div>
            <div class="srm-faq-answer"><p>${item.a}</p></div>
        `;
        faqItem.addEventListener('click', () => {
            faqItem.classList.toggle('active');
        });
        faqContainer.appendChild(faqItem);
    });

    // --- Initial Load ---
    resetCalculator();
});
</script>

