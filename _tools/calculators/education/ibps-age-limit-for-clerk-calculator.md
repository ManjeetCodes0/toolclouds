---
title: "IBPS Clerk 2025 Age Calculator - Check Your Eligibility Instantly"
localtitle: "IBPS Clerk Age Calculator"
layout: tool
categories: [calculators, educationCalc, examsCalc]
permalink: /calculators/education/ibps-clerk-age-calculator
description: "The most advanced IBPS Clerk 2025 age calculator. Instantly verify your age eligibility, find your valid DOB range, and get a checklist of required documents."
tags:
  - "IBPS Clerk Age Calculator"
  - "IBPS Clerk Age Limit"
  - "IBPS Clerk Eligibility 2025"
  - "Bank Exam Age Calculator"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<div class="ibps-ac1-wrapper">
    <style>
        :root {
            /* Light Mode */
            --ibps-bg: #f0f2f5;
            --ibps-surface: rgba(255, 255, 255, 0.7);
            --ibps-primary: #002366; /* Deep Navy */
            --ibps-accent: #00A99D;  /* Teal */
            --ibps-text-primary: #121212;
            --ibps-text-secondary: #5a6a7a;
            --ibps-border: rgba(255, 255, 255, 0.3);
            --ibps-border-strong: #d9e2ec;
            --ibps-success: #00A99D;
            --ibps-danger: #d94c4c;
            --ibps-danger-bg: #fde8e8;
        }

        .dark-mode {
            /* Dark Mode */
            --ibps-bg: #0d1117;
            --ibps-surface: rgba(22, 27, 34, 0.7);
            --ibps-primary: #58a6ff;
            --ibps-accent: #39d3c8;
            --ibps-text-primary: #c9d1d9;
            --ibps-text-secondary: #8b949e;
            --ibps-border: rgba(139, 148, 158, 0.3);
            --ibps-border-strong: #30363d;
            --ibps-success: #39d3c8;
            --ibps-danger: #ff7b72;
            --ibps-danger-bg: #4a2121;
        }

        /* --- BASE & BACKGROUND --- */
        .ibps-ac1-wrapper {
            font-family: 'Poppins', sans-serif;
            background-color: var(--ibps-bg);
            color: var(--ibps-text-primary);
            transition: background-color 0.3s ease;
            overflow-x: hidden;
            position: relative;
        }
        .ibps-ac1-wrapper::before { /* Animated Gradient Blobs */
            content: ''; position: absolute; top: -10%; right: -10%; width: 400px; height: 400px;
            background: radial-gradient(circle, var(--ibps-accent) 0%, transparent 70%);
            border-radius: 50%; opacity: 0.15; filter: blur(100px); animation: blob-move-1 20s infinite alternate;
        }
        .ibps-ac1-wrapper::after {
            content: ''; position: absolute; bottom: -10%; left: -10%; width: 400px; height: 400px;
            background: radial-gradient(circle, var(--ibps-primary) 0%, transparent 70%);
            border-radius: 50%; opacity: 0.15; filter: blur(100px); animation: blob-move-2 25s infinite alternate;
        }
        @keyframes blob-move-1 { from { transform: translate(0, 0) scale(1); } to { transform: translate(100px, 50px) scale(1.2); } }
        @keyframes blob-move-2 { from { transform: translate(0, 0) scale(1.2); } to { transform: translate(-50px, -100px) scale(1); } }

        .ibps-ac1-container { max-width: 1200px; margin: 0 auto; padding: 2rem 0.5rem; position: relative; z-index: 2; }

        /* --- LAYOUT --- */
        .ibps-ac1-layout {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        .ibps-ac1-main { order: 1; }
        .ibps-ac1-sidebar { order: 2; }
        .ibps-ac1-content { order: 3; }

        @media (min-width: 1024px) {
            .ibps-ac1-layout {
                display: grid;
                grid-template-columns: minmax(0, 2fr) 1fr;
                grid-template-areas:
                    "main sidebar"
                    "content sidebar";
                gap: 2rem;
                align-items: start;
            }
            .ibps-ac1-main { grid-area: main; }
            .ibps-ac1-sidebar { grid-area: sidebar; position: sticky; top: 2rem; }
            .ibps-ac1-content { grid-area: content; }
        }

        .ibps-ac1-main, .ibps-ac1-sidebar, .ibps-ac1-content {
            display: flex; flex-direction: column; gap: 2rem;
        }

        /* --- HEADER --- */
        .ibps-ac1-header { text-align: center; margin-bottom: 2rem; }
        .ibps-ac1-header h1 { font-size: 2.75rem; font-weight: 800; color: var(--ibps-text-primary); }
        .ibps-ac1-header p { font-size: 1.1rem; color: var(--ibps-text-secondary); max-width: 600px; margin: 0.5rem auto 0; }
        
        /* --- CARD & GLASSMORPHISM --- */
        .ibps-ac1-card {
            background-color: var(--ibps-surface);
            border: 1px solid var(--ibps-border);
            border-radius: 16px;
            box-shadow: 0 8px 32px 0 rgba(0,0,0,0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            padding: 1rem;
        }
        .ibps-ac1-card-padded { padding: 2.5rem; }

        /* --- CALCULATOR --- */
        .ibps-ac1-form-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin: 1.5rem 0; }
        @media (min-width: 600px) { .ibps-ac1-form-grid { grid-template-columns: 1fr 1fr; } }
        .ibps-ac1-input-group label { display: block; font-weight: 600; margin-bottom: 0.5rem; }
        .ibps-ac1-input {
            width: 100%; padding: 0.8rem 1rem; font-size: 1rem; font-family: inherit;
            background-color: transparent; border: 1px solid var(--ibps-border-strong);
            border-radius: 8px; color: var(--ibps-text-primary); transition: all 0.3s ease;
        }
        .ibps-ac1-input:focus {
            outline: none; border-color: var(--ibps-accent);
        }
        
        .ibps-ac1-submit-btn {
            width: 100%; padding: 1rem; font-size: 1.1rem; font-weight: 700; color: #fff;
            background: linear-gradient(90deg, var(--ibps-accent), var(--ibps-primary));
            border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s ease;
        }
        .ibps-ac1-submit-btn:hover { box-shadow: 0 6px 20px -5px var(--ibps-accent); transform: translateY(-2px); }
        
        #ibps-error-box {
            display: none;
            margin-top: 1.5rem;
            padding: 1rem;
            background-color: var(--ibps-danger-bg);
            color: var(--ibps-danger);
            border-radius: 8px;
            font-weight: 500;
        }
        
        /* --- RESULTS --- */
        .ibps-ac1-results { display: none; margin-top: 2rem; }
        .ibps-ac1-status { padding: 1.5rem; text-align: center; border-radius: 8px; font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; }
        .ibps-ac1-status.eligible { background-color: var(--ibps-success); color: #fff; }
        .ibps-ac1-status.not-eligible { background-color: var(--ibps-danger); color: #fff; }
        
        .ibps-ac1-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
        .ibps-ac1-details-grid .item { padding: 1rem; background-color: var(--ibps-bg); border-radius: 8px; }
        .ibps-ac1-details-grid .label { display: block; color: var(--ibps-text-secondary); font-size: 0.9rem; }
        .ibps-ac1-details-grid .value { font-size: 1.1rem; font-weight: 600; color: var(--ibps-text-primary); }

        /* --- DOCUMENT CHECKLIST --- */
        #doc-checklist h4 { font-size: 1.1rem; margin-bottom: 1rem; color: var(--ibps-text-primary); }
        #doc-checklist ul { list-style: none; padding: 0; margin: 0; }
        #doc-checklist li {
            display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem;
            background-color: var(--ibps-bg); border-radius: 8px; margin-bottom: 0.5rem;
            color: var(--ibps-text-secondary);
        }
        #doc-checklist li .fa-check-circle { color: var(--ibps-success); }
        
        /* --- SIDEBAR & CONTENT --- */
        .ibps-ac1-sidebar-card h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: var(--ibps-text-primary); }
        .ibps-ad-placeholder { min-height: 250px; display: flex; align-items: center; justify-content: center; border: 1px dashed var(--ibps-border-strong); border-radius: 8px; color: var(--ibps-text-secondary); }
        
        .related-tools-list { list-style: none; padding: 0.5rem; margin: 0; }
        .related-tools-list a {
            display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem;
            text-decoration: none; color: var(--ibps-text-secondary); font-weight: 500;
            border-radius: 8px; transition: all 0.2s ease;
        }
        .related-tools-list a:hover { background-color: var(--ibps-bg); color: var(--ibps-accent); }
        
        .ibps-ac1-content h2, .ibps-ac1-content h3 { font-size: 1.75rem; font-weight: 700; margin-bottom: 1rem; color: var(--ibps-text-primary); }
        .ibps-ac1-content p, .ibps-ac1-content ul { font-size: 1.1rem; color: var(--ibps-text-secondary); line-height: 1.8; margin-bottom: 1.5rem; }
        .ibps-ac1-content ul, .ibps-ac1-content ol { padding-left: 20px; }
    </style>

    <div class="ibps-ac1-container">
        <header class="ibps-ac1-header">
            <h1>IBPS Clerk 2025 Age Calculator</h1>
            <p>Instantly check your eligibility for CRP Clerk-XV and get your required documents list.</p>
        </header>

        <div class="ibps-ac1-layout">
            <main class="ibps-ac1-main">
                <div class="ibps-ac1-card ibps-ac1-card-padded">
                    <div class="ibps-ac1-form-grid">
                        <div class="ibps-ac1-input-group">
                            <label for="ibps-dob">Your Date of Birth</label>
                            <input type="date" id="ibps-dob" class="ibps-ac1-input">
                        </div>
                        <div class="ibps-ac1-input-group">
                            <label for="ibps-category">Your Category</label>
                            <select id="ibps-category" class="ibps-ac1-input">
                                <option value="General/EWS">General / EWS</option>
                                <option value="OBC">OBC (Non-Creamy Layer)</option>
                                <option value="SC/ST">SC / ST</option>
                                <option value="PwBD">PwBD (General)</option>
                                <option value="PwBD+OBC">PwBD + OBC</option>
                                <option value="PwBD+SC/ST">PwBD + SC/ST</option>
                                <option value="Widow/Divorced">Widow/Divorced Women</option>
                            </select>
                        </div>
                    </div>
                    <button id="ibps-submit-btn" class="ibps-ac1-submit-btn">Check My Eligibility</button>
                    <div id="ibps-error-box"></div>
                    <div id="ibps-results" class="ibps-ac1-results">
                        <div id="ibps-result-status" class="ibps-ac1-status"></div>
                        <div class="ibps-ac1-details-grid">
                            <div class="item">
                                <span class="label">Age on 01-08-2025</span>
                                <p class="value" id="res-age">--</p>
                            </div>
                            <div class="item">
                                <span class="label">Valid DOB Range</span>
                                <p class="value" id="res-dob-range">--</p>
                            </div>
                        </div>
                        <div id="doc-checklist"></div>
                    </div>
                </div>
            </main>

            <aside class="ibps-ac1-sidebar">
                <div class="ibps-ac1-card">
                    <div class="ibps-ad-placeholder">Advertisement</div>
                </div>
                <div class="ibps-ac1-card">
                    <h3>Related Tools</h3>
                <ul class= "related-tools-list">
                        {% assign education_tools = site.tools | where_exp:"item","item.categories contains 'educationCalc'" %}
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
            
            <div class="ibps-ac1-content ibps-ac1-card ibps-ac1-card-padded">
                <h3>A Complete Guide to IBPS Clerk Age Limit 2025: All You Need to Know</h3>
                <p>
                    So you want to apply for IBPS Clerk? The first thing to worry about is the age limit, right? So many students get confused with all the rules and different categories. In this guide, we will break down everything about IBPS Clerk age limit, so you have no confusion.
                </p>
                <h3>Understanding the Basic Age Limit for IBPS Clerk 2025</h3>
                <p>
                    The IBPS people have set some rules for the Clerk job. For the 2025 exam, you must be between 20 to 28 years old. And the main date for this is August 1, 2025. This means if you want to apply for the job, your age should be in this range on that one date.
                </p>
                <p>
                    To make it more simple - if you was born on August 2, 1997, or after that, but before August 1, 2005, then you can apply for the job. They only check your age on that single cut-off date, August 1st, 2025. No other date matters.
                </p>
                <h3>So, Let's Get the Dates Straight</h3>
                <p>
                    Many candidates get confused about the dates, so here it is simply:
                </p>
                <ul>
                    <li>Minimum age: 20 years (You must be born on or before August 1, 2005)</li>
                    <li>Maximum age: 28 years (You must be born on or after August 2, 1997)</li>
                </ul>
                <p>
                    This is for General category. But if you are from a reserved category, there are more benefits. We will discuss below.
                </p>
                <h3>Category Relaxations: Know Your Benefits</h3>
                <p>
                    One of the best part about government jobs is the age relaxation. IBPS Clerk exam also gives good relaxations.
                </p>
                <h4>Scheduled Caste (SC) and Scheduled Tribe (ST) Candidates</h4>
                <p>
                    If you are from SC or ST category, you get a big benefit. You get 5 extra years. So for you, the maximum age is not 28, it is 33 years. That's a good thing, no?
                </p>
                <h4>Other Backward Classes (OBC) - Non Creamy Layer</h4>
                <p>
                    For OBC candidates, you get 3 years relaxation. But remember, this is only for 'Non-Creamy Layer'. So your maximum age is 31 years. You will need a valid OBC-NCL certificate for this.
                </p>
                <h4>Persons with Benchmark Disabilities (PwBD)</h4>
                <p>
                    If you are a Person with Benchmark Disability, you get a huge 10 years relaxation. That means you can apply till 38 years old. And if you are PwBD and also from SC/ST or OBC, you get even more benefits.
                </p>
                <h4>Ex-Servicemen</h4>
                <p>
                    This one is little complex. Basically, you get relaxation for the number of years you served in the army, plus 3 more years. But the final age can't be more than 50. For disabled ex-servicemen from SC/ST, the extra relaxation is 8 years instead of 3.
                </p>
                <h4>Special Rules for Women</h4>
                <p>
                    IBPS also have special rules for some women. If you are a widow, or divorced, or legally separated and not remarried, you can apply till you are 35 (for General), 38 (for OBC), and 40 (for SC/ST).
                </p>
                <h3>Don't Forget These Important Things!</h3>
                <h4>Documents are Most Important</h4>
                <p>
                    When you apply for age relaxation, you need to show proper documents. The certificates must be original and valid. So many students get rejected at the document verification stage just because of this. Don't be that person.
                </p>
                <h4>No Experience Needed</h4>
                <p>
                    Good news for freshers! You don't need any work experience for IBPS Clerk. So if you just finished your graduation, you can apply directly.
                </p>
                <h4>Computer Knowledge is a Must</h4>
                <p>
                    But you must know basic computers. They need a certificate or degree, or you should have studied computer as a subject in school or college. This is mandatory.
                </p>
                <h3>Silly Mistakes That Can Cost You Your Dream Job</h3>
                <p>
                    Many aspirants make silly mistakes. Here are some common errors you should avoid:
                </p>
                <ol>
                    <li><strong>Mistake 1: Wrong Date</strong><br>
                    Some people calculate there age from the date they fill the form. This is totally wrong. Always, always remember the date is August 1, 2025. Only this date.</li>
                    <li><strong>Mistake 2: Confused About Dates</strong><br>
                    The notification will say 'both dates inclusive'. This means if your birthday is on the first or the last date, you are still eligible. Don't get confused.</li>
                    <li><strong>Mistake 3: Ignoring Your Category Benefit</strong><br>
                    Many reserved category students don't even know they are eligible because of relaxation. First check the rules for your category before you decide you are too old for the exam.</li>
                </ol>
                <h3>Some Smart Tips For You</h3>
                <h4>If You Are on the Border of Age</h4>
                <p>
                    If your age is exactly on the line, please check two-three times. It's better to be 100% sure than to be sad later.
                </p>
                <h4>Plan For Many Attempts</h4>
                <p>
                    If you are young, you have a big advantage. You can give many attempts. So dont worry if you fail first time. IBPS Clerk exam is held every year.
                </p>
                <h4>Keep Documents Ready</h4>
                <p>
                    If you need a category certificate, please get it ready now. These things take time to make. Dont wait for the last minute.
                </p>
                <h3>Your Banking Career is Waiting!</h3>
                <p>
                    Look, getting a bank job is a big deal, and IBPS Clerk is a great first step. The age limit is just one small part of the journey. Once you know your eligible, you just need to focus on your studies. The exam has Prelims and Mains. With good preparation, you can definitely crack it. The competition is tough, but so are you. So check your age today, and start your journey to become a banker!
                </p>
            </div>
        </div>
    </div>

    <script>
        (function() {
            const dobInput = document.getElementById('ibps-dob');
            const categorySelect = document.getElementById('ibps-category');
            const submitBtn = document.getElementById('ibps-submit-btn');
            const resultsDiv = document.getElementById('ibps-results');
            const errorBox = document.getElementById('ibps-error-box');

            if (!submitBtn) return;

            const res = {
                status: document.getElementById('ibps-result-status'),
                age: document.getElementById('res-age'),
                dobRange: document.getElementById('res-dob-range'),
                docChecklist: document.getElementById('doc-checklist')
            };

            const CALCULATION_DATE = new Date('2025-08-01T00:00:00');
            const MIN_AGE = 20;
            const BASE_MAX_AGE = 28;

            const DOC_LIST = {
                'OBC': 'OBC-NCL Certificate (issued after 01-04-2025)',
                'SC/ST': 'Valid SC/ST Caste Certificate',
                'PwBD': 'Disability Certificate (min. 40%)',
                'Widow/Divorced': 'Proof of status (Death Certificate of husband/Decree of divorce)',
                'General/EWS': 'Income & Asset Certificate (for EWS)'
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
            
            function checkEligibility() {
                // Reset UI
                resultsDiv.style.display = 'none';
                errorBox.style.display = 'none';

                if (!dobInput.value) {
                    errorBox.textContent = 'Please select your Date of Birth to check eligibility.';
                    errorBox.style.display = 'block';
                    return;
                }

                const selectedCategory = categorySelect.value;
                const age = calculateAge(dobInput.value);
                
                let maxAge = BASE_MAX_AGE;
                
                if (selectedCategory === 'OBC') maxAge = 31;
                if (selectedCategory === 'SC/ST') maxAge = 33;
                if (selectedCategory === 'PwBD') maxAge = 38;
                if (selectedCategory === 'PwBD+OBC') maxAge = 41;
                if (selectedCategory === 'PwBD+SC/ST') maxAge = 43;
                if (selectedCategory === 'Widow/Divorced') maxAge = 35; 

                const isEligible = age.years >= MIN_AGE && age.years <= maxAge;

                const notBornAfter = new Date(CALCULATION_DATE);
                notBornAfter.setFullYear(notBornAfter.getFullYear() - MIN_AGE);
                const notBornBefore = new Date(CALCULATION_DATE);
                notBornBefore.setFullYear(notBornBefore.getFullYear() - (maxAge + 1));
                notBornBefore.setDate(notBornBefore.getDate() + 1);

                resultsDiv.style.display = 'block';

                if(isEligible) {
                    res.status.textContent = '✅ You are Eligible for IBPS Clerk 2025';
                    res.status.className = 'ibps-ac1-status eligible';
                } else {
                    let reason = age.years < MIN_AGE ? `(Below minimum age of 20)` : `(Above maximum age of ${maxAge})`;
                    res.status.textContent = `❌ Sorry, You are Not Eligible ${reason}`;
                    res.status.className = 'ibps-ac1-status not-eligible';
                }
                
                res.age.textContent = `${age.years} Y, ${age.months} M, ${age.days} D`;
                res.dobRange.textContent = `${notBornBefore.toLocaleDateString('en-GB')} to ${notBornAfter.toLocaleDateString('en-GB')}`;
                
                let checklistHTML = '<h4>Required Documents Checklist:</h4><ul>';
                checklistHTML += `<li><i class="fas fa-check-circle"></i> Proof of Date of Birth (10th Marksheet)</li>`;
                
                if(DOC_LIST[selectedCategory]) {
                    checklistHTML += `<li><i class="fas fa-check-circle"></i> ${DOC_LIST[selectedCategory]}</li>`;
                } else if (selectedCategory.includes('OBC')) {
                     checklistHTML += `<li><i class="fas fa-check-circle"></i> ${DOC_LIST['OBC']}</li>`;
                } else if (selectedCategory.includes('SC/ST')) {
                     checklistHTML += `<li><i class="fas fa-check-circle"></i> ${DOC_LIST['SC/ST']}</li>`;
                }
                if (selectedCategory.includes('PwBD')) {
                     checklistHTML += `<li><i class="fas fa-check-circle"></i> ${DOC_LIST['PwBD']}</li>`;
                }

                checklistHTML += '</ul>';
                res.docChecklist.innerHTML = checklistHTML;
            }

            submitBtn.addEventListener('click', checkEligibility);
        })();
    </script>
</div>