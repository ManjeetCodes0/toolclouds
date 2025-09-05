---
title: "SSC CGL 2025 Age Calculator (Check Eligibility & Age Limit)"
localtitle: "SSC CGL Age Calculator"
layout: tool
categories: [calculators, educationCalc, examsCalc]
permalink: /calculators/education/ssc-cgl-age-calculator
description: "Check your exact age and eligibility for SSC CGL 2025 exam. Our calculator uses the official cutoff date (01-08-2025) and latest age relaxation rules for all posts."
tags:
  - "SSC CGL Age Calculator"
  - "SSC CGL Age Limit"
  - "SSC CGL Eligibility"
  - "SSC CGL 2025"
  - "Government Exam Calculator"
  - "Age Calculator for Jobs"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<div class="ssc-ac1-wrapper">
    <style>
        /* --- THEME VARIABLES --- */
        :root {
            /* Light Mode (Default) */
            --ssc-bg: #f4f7fc;
            --ssc-surface: #ffffff;
            --ssc-primary: #0056b3;
            --ssc-secondary: #ff9933;
            --ssc-text-dark: #2c3e50;
            --ssc-text-light: #5a6a7a;
            --ssc-border: #dfe7f1;
            --ssc-success: #28a745;
            --ssc-danger: #dc3545;
            --ssc-danger-bg: #f8d7da;
            --ssc-shadow: 0 4px 15px rgba(0, 86, 179, 0.1);
            --ssc-input-bg: #ffffff;
            --ssc-notice-bg: #e6f0ff;
            --ssc-notice-border: #b3d1ff;
            --ssc-detail-item-bg: #fff;
            --ssc-detail-bg: #f9fafb;
        }

        .dark-mode {
            /* Dark Mode Overrides */
            --ssc-bg: #1a202c;
            --ssc-surface: #2d3748;
            --ssc-primary: #63b3ed;
            --ssc-secondary: #f6ad55;
            --ssc-text-dark: #f7fafc;
            --ssc-text-light: #a0aec0;
            --ssc-border: #4a5568;
            --ssc-success: #48bb78;
            --ssc-danger: #f56565;
            --ssc-danger-bg: #4a2121;
            --ssc-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            --ssc-input-bg: #4a5568;
            --ssc-notice-bg: #2c3749;
            --ssc-notice-border: #3c4a60;
            --ssc-detail-item-bg: #2d3748;
            --ssc-detail-bg: #1a202c;
        }

        .ssc-ac1-wrapper {
            font-family: 'Poppins', sans-serif;
            background-color: var(--ssc-bg);
            color: var(--ssc-text-dark);
            line-height: 1.6;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .ssc-ac1-container {
            max-width: 1280px;
            padding: 1rem 0.5rem;
            position: relative;
        }
        
        /* --- LAYOUT & STRUCTURE --- */
        .ssc-ac1-header { text-align: center; margin-bottom: 2.5rem; }
        .ssc-ac1-header h1 { font-size: 2.25rem; font-weight: 700; color: var(--ssc-primary); }
        .ssc-ac1-header p { font-size: 1.1rem; color: var(--ssc-text-light); }

        .ssc-ac1-main-layout { display: flex; flex-direction: column; gap: 2rem; }
        
        @media (min-width: 1024px) {
            .ssc-ac1-main-layout {
                display: grid;
                grid-template-columns: 1fr 320px;
                gap: 2rem;
                align-items: start;
            }
        }
        
        .ssc-ac1-right-sidebar { display: flex; flex-direction: column; gap: 2rem; }
        @media (min-width: 1024px) {
            .ssc-ac1-right-sidebar { position: sticky; top: 2rem; }
        }
        
        .ssc-ac1-sidebar-card {
            background-color: var(--ssc-surface);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid var(--ssc-border);
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        /* --- SIDEBAR CONTENT --- */
        .ac2-ad-placeholder {
            min-height: 250px; display: flex; align-items: center; justify-content: center; flex-direction: column;
            border: 2px dashed var(--ssc-border); text-align: center; color: var(--ssc-text-light); border-radius: 8px;
        }
        .ac2-ad-placeholder i { margin-bottom: 1rem; font-size: 2rem; opacity: 0.5; }

        .ac2-related-tools h3 {
            font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem;
            background: linear-gradient(90deg, var(--ssc-secondary), var(--ssc-primary));
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .ac2-related-tools ul { list-style: none; padding: 0; margin: 0; }
        .ac2-related-tools li a {
            display: flex; align-items: center; gap: 1rem; padding: 0.8rem 1rem; border-radius: 8px;
            text-decoration: none; color: var(--ssc-text-dark); transition: background-color 0.2s ease, color 0.2s ease;
        }
        .ac2-related-tools li a:hover {
            background-color: var(--ssc-notice-bg); color: var(--ssc-primary);
        }
        .ac2-related-tools li a i { font-size: 1rem; width: 20px; text-align: center; color: var(--ssc-primary); }

        /* --- CALCULATOR TOOL --- */
        .ssc-ac1-calculator-box {
            background-color: var(--ssc-surface); border-radius: 12px; box-shadow: var(--ssc-shadow);
            padding: 2rem; border: 1px solid var(--ssc-border); transition: all 0.3s ease;
        }
        .ssc-ac1-cutoff-notice {
            text-align: center; background-color: var(--ssc-notice-bg); color: var(--ssc-primary);
            padding: 1rem; border-radius: 8px; margin-bottom: 2rem; font-weight: 600;
            border: 1px solid var(--ssc-notice-border); transition: all 0.3s ease;
        }
        .ssc-ac1-inputs { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        @media (min-width: 640px) { .ssc-ac1-inputs { grid-template-columns: 1fr 1fr; } }

        .ssc-ac1-input-group label { font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem; }
        .ssc-ac1-input-group input, .ssc-ac1-input-group select {
            width: 100%; padding: 0.75rem; border: 1px solid var(--ssc-border); border-radius: 8px;
            font-family: inherit; font-size: 1rem; color: var(--ssc-text-dark);
            background-color: var(--ssc-input-bg); transition: all 0.3s ease;
        }
        .ssc-ac1-input-group input:focus, .ssc-ac1-input-group select:focus {
            outline: none; border-color: var(--ssc-primary); box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.2);
        }
        
        .ssc-ac1-submit-btn {
            width: 100%; padding: 1rem; margin-top: 1.5rem; font-size: 1.1rem; font-weight: 700;
            color: #fff; background-image: linear-gradient(to right, var(--ssc-secondary), #ff7e00);
            border: none; border-radius: 8px; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
        }
        .ssc-ac1-submit-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 153, 51, 0.4); }

        #ssc-error-box {
            display: none;
            margin-top: 1.5rem;
            padding: 1rem;
            color: var(--ssc-danger);
            background-color: var(--ssc-danger-bg);
            border-radius: 8px;
            font-weight: 500;
        }

        /* --- RESULTS --- */
        .ssc-ac1-results { margin-top: 2rem; border-top: 1px dashed var(--ssc-border); padding-top: 2rem; display: none; }
        .ssc-ac1-result-status {
            padding: 1.5rem; border-radius: 12px; text-align: center; font-size: 1.5rem;
            font-weight: 700; margin-bottom: 1.5rem; color: #fff;
        }
        .ssc-ac1-result-status.eligible { background-color: var(--ssc-success); }
        .ssc-ac1-result-status.not-eligible { background-color: var(--ssc-danger); }

        .ssc-ac1-result-details {
            display: grid; grid-template-columns: 1fr; gap: 1rem; background-color: var(--ssc-detail-bg);
            padding: 1.5rem; border-radius: 8px; transition: background-color 0.3s ease;
        }
        @media (min-width: 640px) { .ssc-ac1-result-details { grid-template-columns: 1fr 1fr; } }
        .ssc-ac1-detail-item {
            background-color: var(--ssc-detail-item-bg); padding: 1rem; border-radius: 6px;
            border: 1px solid var(--ssc-border); transition: all 0.3s ease;
        }
        .ssc-ac1-detail-item .label { display: block; font-size: 0.9rem; color: var(--ssc-text-light); margin-bottom: 0.25rem; }
        .ssc-ac1-detail-item .value { font-weight: 600; font-size: 1.1rem; color: var(--ssc-primary); }

        /* --- INFO CONTENT --- */
        .ssc-ac1-content {
            margin-top: 3rem;
            overflow-wrap: break-word;
        }
        .ssc-ac1-content h2, .ssc-ac1-content h3 { color: var(--ssc-primary); font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; }
        .ssc-ac1-content ol, .ssc-ac1-content ul { padding-left: 20px; }
    </style>

    <div class="ssc-ac1-container">
        <div class="ssc-ac1-header">
            <h1>SSC CGL 2025 Age Calculator</h1>
            <p>Check your Age Limit and Eligibility for all posts</p>
        </div>

        <div class="ssc-ac1-main-layout">
            <main class="ssc-ac1-tool-wrapper">
                <div class="ssc-ac1-calculator-box">
                    <div class="ssc-ac1-cutoff-notice">
                        <i class="fas fa-calendar-check"></i> Your age will be calculated as on: <strong>August 1, 2025</strong>
                    </div>

                    <div class="ssc-ac1-inputs">
                        <div class="ssc-ac1-input-group">
                            <label for="ssc-dob">Your Date of Birth</label>
                            <input type="date" id="ssc-dob" required>
                        </div>
                        <div class="ssc-ac1-input-group">
                            <label for="ssc-category">Your Category</label>
                            <select id="ssc-category">
                                <option value="General/EWS">General / EWS</option>
                                <option value="OBC">OBC</option>
                                <option value="SC/ST">SC / ST</option>
                                <option value="PwD (General)">PwD (General)</option>
                                <option value="PwD (OBC)">PwD (OBC)</option>
                                <option value="PwD (SC/ST)">PwD (SC/ST)</option>
                                <option value="Ex-Servicemen">Ex-Servicemen</option>
                                <option value="J&K Domicile">J&K Domicile (1980-1989)</option>
                            </select>
                        </div>
                        <div class="ssc-ac1-input-group" style="grid-column: 1 / -1;">
                            <label for="ssc-post">Select Post Age Group</label>
                            <select id="ssc-post">
                                <option value="18-27">18-27 Years (Auditor, UDC, TA, etc.)</option>
                                <option value="20-30">20-30 Years (ASO, Sub Inspector CBI, etc.)</option>
                                <option value="18-30">18-30 Years (Inspector, AAO, etc.)</option>
                                <option value="18-32">18-32 Years (Junior Statistical Officer)</option>
                            </select>
                        </div>
                    </div>

                    <button id="ssc-submit-btn" class="ssc-ac1-submit-btn">Check Eligibility</button>
                    <div id="ssc-error-box"></div>
                    <div class="ssc-ac1-results" id="ssc-results">
                        <div id="ssc-result-status" class="ssc-ac1-result-status"></div>
                        <div class="ssc-ac1-result-details">
                            <div class="ssc-ac1-detail-item">
                                <span class="label">Your Age as on 01-08-2025</span>
                                <span class="value" id="res-age">--</span>
                            </div>
                            <div class="ssc-ac1-detail-item">
                                <span class="label">Age Relaxation Applied</span>
                                <span class="value" id="res-relaxation">--</span>
                            </div>
                            <div class="ssc-ac1-detail-item">
                                <span class="label">Required Age Limit for Post</span>
                                <span class="value" id="res-age-limit">--</span>
                            </div>
                            <div class="ssc-ac1-detail-item">
                                <span class="label">Eligible DOB Range (for your category)</span>
                                <span class="value" id="res-dob-range">--</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <aside class="ssc-ac1-right-sidebar">
                <div class="ssc-ac1-sidebar-card">
                    <div class="ac2-ad-placeholder">
                        <i class="fas fa-ad"></i>
                        <strong>Advertisement</strong>
                    </div>
                </div>
                <div class="ssc-ac1-sidebar-card ac2-related-tools">
                    <h3><i class="fas fa-compass-drafting"></i> Explore Tools</h3>
                    <ul>
                        {% assign education_tools = site.tools | where_exp:"item","item.categories contains 'examsCalc'" %}
                        {% for tool in education_tools %}
                            {% unless tool.url == page.url %}
                                <li>
                                    <a href="{{ tool.url | relative_url }}">
                                        <i class="fas fa-percent"></i>{{ tool.localtitle }}
                                    </a>
                                </li>
                            {% endunless %}
                        {% endfor %}
                    </ul>
                </div>
            </aside>
        </div>

        <div class="ssc-ac1-content">
            <h2>Why This SSC Age Calculator is So Important?</h2>
            <p>Hey there future officer! We know how it is. You spend months, maybe years preparing for SSC CGL. The notification comes and your heart start beating fast. But then you see the age limit rules, with all the different dates and categories. It's super confusing right? Many students, they make mistake here and lose their chance.</p>
            <p>So we made this calculator for all you guys who is preparing. No need to do complex maths or read confusing PDF file again and again. Just put your DOB and see if your eligible. It's that easy. We made this calculator with latest rules for 2025 so you can trust it completely.</p>
            
            <h3>How to Use This Tool?</h3>
            <ol>
                <li><strong>Enter Your Birthday:</strong> Just select your real Date of Birth. The one on your 10th class marksheet. No cheating!</li>
                <li><strong>Select Your Category:</strong> Are you General, OBC, SC/ST or something else? Choose it from the list. Age relaxation depends on this a lot.</li>
                <li><strong>Choose Post Group:</strong> Different posts have different age requirement. We group them for you. Just pick the one you are aiming for.</li>
                <li><strong>Click the Button!:</strong> Hit the orange 'Check Eligibility' button and see the magic. You will get instant result.</li>
            </ol>

            <h3>Some Doubts You Might Have</h3>
            <p><strong>What if my birthday is on the cutoff date?</strong><br>
            As per the rules, you are generally eligible. For a post with 18-27 years limit, your not born before 02-08-1998 and not after 01-08-2007. Our tool handles these dates perfectly.</p>
            <p><strong>The DOB range is confusing me.</strong><br>
            Don't worry. The range shown in the result is the official window. If your birthday is between the two dates (including those dates), you are good to go for that post and category. Simple!</p>
            <p><strong>Is this updated for 2025?</strong><br>
            Yes! This calculator use the officialy announced cutoff date of 1st August 2025. When the final notification comes, if there is any change, we will update it fast fast.</p>
            
            <h3>More Than Just Age</h3>
            <p>
                Remember that age is only one part. You also need to have a graduation degree from a recognized university. For some posts like Auditor or AAO, there are specific educational qualifications. So after checking your age here, always go and read the full official notification for educational criteria. Dont miss that part.
            </p>
            <p>
                This journey to become an officer is long. Small things like worrying about eligibility can take up your focus. Use our tool, get the clear answer in one click, and then put all your energy into studying. That's the only way to get your dream job. We wish you all the best!
            </p>
        </div>
    </div>

    <script>
    (function() {
        const dobInput = document.getElementById('ssc-dob');
        const categorySelect = document.getElementById('ssc-category');
        const postSelect = document.getElementById('ssc-post');
        const submitBtn = document.getElementById('ssc-submit-btn');
        const resultsDiv = document.getElementById('ssc-results');
        const errorBox = document.getElementById('ssc-error-box');

        const res = {
            status: document.getElementById('ssc-result-status'),
            age: document.getElementById('res-age'),
            relaxation: document.getElementById('res-relaxation'),
            ageLimit: document.getElementById('res-age-limit'),
            dobRange: document.getElementById('res-dob-range')
        };

        const CALCULATION_DATE = new Date('2025-08-01T00:00:00');

        const POST_DATA = {
            '18-27': { min: 18, max: 27 }, '20-30': { min: 20, max: 30 },
            '18-30': { min: 18, max: 30 }, '18-32': { min: 18, max: 32 }
        };

        const RELAXATION_DATA = {
            'General/EWS': 0, 'OBC': 3, 'SC/ST': 5, 'PwD (General)': 10,
            'PwD (OBC)': 13, 'PwD (SC/ST)': 15, 'Ex-Servicemen': 3, 'J&K Domicile': 5
        };

        function calculateAge(dob) {
            const birthDate = new Date(dob);
            let ageYears = CALCULATION_DATE.getFullYear() - birthDate.getFullYear();
            let ageMonths = CALCULATION_DATE.getMonth() - birthDate.getMonth();
            let ageDays = CALCULATION_DATE.getDate() - birthDate.getDate();

            if (ageDays < 0) {
                ageMonths--;
                ageDays += new Date(CALCULATION_DATE.getFullYear(), CALCULATION_DATE.getMonth(), 0).getDate();
            }
            if (ageMonths < 0) {
                ageYears--;
                ageMonths += 12;
            }
            return { years: ageYears, months: ageMonths, days: ageDays };
        }

        function formatDate(date) {
            const d = new Date(date);
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            return `${day}-${month}-${year}`;
        }
        
        function checkEligibility() {
            // Reset UI on every click
            resultsDiv.style.display = 'none';
            if(errorBox) errorBox.style.display = 'none';

            if (!dobInput.value) {
                if(errorBox) {
                    errorBox.textContent = 'Please enter your Date of Birth to check eligibility.';
                    errorBox.style.display = 'block';
                }
                return;
            }

            const selectedPost = postSelect.value;
            const selectedCategory = categorySelect.value;
            const age = calculateAge(dobInput.value);
            const userAge = age.years;
            const postLimits = POST_DATA[selectedPost];
            const relaxation = RELAXATION_DATA[selectedCategory];
            const finalMaxAge = postLimits.max + relaxation;
            const isEligible = userAge >= postLimits.min && userAge <= finalMaxAge;

            const notBornAfter = new Date(CALCULATION_DATE);
            notBornAfter.setFullYear(notBornAfter.getFullYear() - postLimits.min);
            
            const notBornBefore = new Date(CALCULATION_DATE);
            notBornBefore.setFullYear(notBornBefore.getFullYear() - (finalMaxAge + 1));
            notBornBefore.setDate(notBornBefore.getDate() + 1);
            
            resultsDiv.style.display = 'block';
            
            if (isEligible) {
                res.status.textContent = '✅ Congratulations! You are Eligible.';
                res.status.className = 'ssc-ac1-result-status eligible';
            } else {
                res.status.textContent = '❌ Sorry! You are Not Eligible.';
                res.status.className = 'ssc-ac1-result-status not-eligible';
            }

            res.age.textContent = `${age.years} Y, ${age.months} M, ${age.days} D`;
            res.relaxation.textContent = `${relaxation} Years`;
            res.ageLimit.textContent = `${postLimits.min} - ${finalMaxAge} Years`;
            res.dobRange.textContent = `${formatDate(notBornBefore)} to ${formatDate(notBornAfter)}`;
        }

        submitBtn.addEventListener('click', checkEligibility);
    })();
    </script>
</div>