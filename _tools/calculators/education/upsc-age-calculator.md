---
title: "UPSC CSE 2025 Age Calculator - Check Your Eligibility & Attempts"
localtitle: "UPSC Age Calculator"
layout: tool
categories: [calculators, educationCalc, examsCalc]
permalink: /calculators/education/upsc-age-calculator
description: "The best age calculator for UPSC CSE 2025. Instantly check your age eligibility, valid date of birth range, and maximum attempts based on the official cutoff date."
tags:
  - "UPSC Age Calculator"
  - "UPSC Age Limit 2025"
  - "UPSC Eligibility"
  - "IAS Age Calculator"
  - "UPSC CSE 2025 Age"
  - "Civil Services Exam Attempts"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<div class="upsc-ac4-wrapper">
    <style>
        :root {
            /* Light Mode (Default) */
            --upsc-bg: #f9fafb;
            --upsc-surface: #ffffff;
            --upsc-primary: #4f46e5;
            --upsc-primary-light: #eef2ff;
            --upsc-text-primary: #111827;
            --upsc-text-secondary: #6b7280;
            --upsc-border: #e5e7eb;
            --upsc-success-bg: #dcfce7;
            --upsc-success-text: #166534;
            --upsc-danger-bg: #fee2e2;
            --upsc-danger-text: #991b1b;
            --upsc-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }

        .dark-mode {
            /* Dark Mode Overrides */
            --upsc-bg: #030712;
            --upsc-surface: #111827;
            --upsc-primary: #818cf8;
            --upsc-primary-light: #3730a3;
            --upsc-text-primary: #f9fafb;
            --upsc-text-secondary: #9ca3af;
            --upsc-border: #374151;
            --upsc-success-bg: #14532d;
            --upsc-success-text: #dcfce7;
            --upsc-danger-bg: #7f1d1d;
            --upsc-danger-text: #fee2e2;
            --upsc-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4);
        }

        /* --- BASE STYLES --- */
        .upsc-ac4-wrapper {
            font-family: 'Inter', sans-serif;
            background-color: var(--upsc-bg);
            color: var(--upsc-text-primary);
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .upsc-ac4-container {
            max-width: 1300px;
            margin: 0 auto;
            padding: 2rem 0.5rem;
        }

        /* --- LAYOUT GRID --- */
        .upsc-ac4-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 2rem; /* Space between layout and content */
        }
        @media (min-width: 1024px) {
            .upsc-ac4-layout {
                grid-template-columns: minmax(0, 2fr) 1fr;
                align-items: start;
            }
        }
        .upsc-ac4-main { display: flex; flex-direction: column; gap: 2rem; }
        .upsc-ac4-sidebar { display: flex; flex-direction: column; gap: 2rem; }
        @media (min-width: 1024px) {
            .upsc-ac4-sidebar { position: sticky; top: 2rem; }
        }

        /* --- HEADER --- */
        .upsc-ac4-header { text-align: center; margin-bottom: 2rem; }
        .upsc-ac4-header h1 {
            font-size: 2.75rem;
            font-weight: 800;
            letter-spacing: -1.5px;
            color: var(--upsc-text-primary);
        }
        .upsc-ac4-header p {
            font-size: 1.15rem;
            color: var(--upsc-text-secondary);
            margin-top: 0.5rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        /* --- CARD STYLES --- */
        .upsc-ac4-card {
            background-color: var(--upsc-surface);
            border: 1px solid var(--upsc-border);
            border-radius: 12px;
            box-shadow: var(--upsc-shadow);
            transition: all 0.3s ease;
            padding: 1rem;
        }
        .upsc-ac4-card-padded { padding: 2rem; }

        /* --- CALCULATOR TOOL --- */
        .upsc-ac4-form-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        @media (min-width: 600px) {
            .upsc-ac4-form-grid { grid-template-columns: 1fr 1fr; }
        }
        .upsc-ac4-input-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }
        .upsc-ac4-input {
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            font-family: inherit;
            background-color: var(--upsc-bg);
            border: 1px solid var(--upsc-border);
            border-radius: 8px;
            color: var(--upsc-text-primary);
            transition: all 0.3s ease;
        }
        .upsc-ac4-input:focus {
            outline: none;
            border-color: var(--upsc-primary);
            box-shadow: 0 0 0 3px var(--upsc-primary-light);
        }
        .upsc-ac4-submit-btn {
            width: 100%;
            padding: 1rem;
            margin-top: 1.5rem;
            font-size: 1.1rem;
            font-weight: 700;
            color: #fff;
            background-color: var(--upsc-primary);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .upsc-ac4-submit-btn:hover {
            opacity: 0.9;
        }
        
        /* --- CUSTOM ERROR BOX --- */
        #upsc-error-box {
            display: none;
            margin-top: 1.5rem;
            padding: 1rem;
            background-color: var(--upsc-danger-bg);
            color: var(--upsc-danger-text);
            border: 1px solid var(--upsc-danger-text);
            border-radius: 8px;
            font-weight: 500;
        }
        
        /* --- RESULTS --- */
        .upsc-ac4-results { display: none; margin-top: 2rem; }
        .upsc-ac4-status {
            padding: 1.5rem;
            text-align: center;
            border-radius: 8px;
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }
        .upsc-ac4-status.eligible {
            background-color: var(--upsc-success-bg);
            color: var(--upsc-success-text);
        }
        .upsc-ac4-status.not-eligible {
            background-color: var(--upsc-danger-bg);
            color: var(--upsc-danger-text);
        }
        .upsc-ac4-details-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        @media (min-width: 600px) {
            .upsc-ac4-details-grid { grid-template-columns: 1fr 1fr; }
        }
        .upsc-ac4-details-grid .item {
            padding: 1rem;
            background-color: var(--upsc-bg);
            border-radius: 8px;
        }
        .upsc-ac4-details-grid .label {
            display: block;
            color: var(--upsc-text-secondary);
            font-size: 0.9rem;
        }
        .upsc-ac4-details-grid .value {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--upsc-text-primary);
        }
        .upsc-ac4-details-grid .item.highlight .value {
            color: var(--upsc-primary);
            font-size: 1.5rem;
        }

        /* --- SIDEBAR & CONTENT --- */
        .upsc-ac4-sidebar-card h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--upsc-text-primary);
        }
        .upsc-ad-placeholder {
            min-height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px dashed var(--upsc-border);
            border-radius: 8px;
            color: var(--upsc-text-secondary);
        }
        .related-tools-list { list-style: none; padding: 0; margin: 0; }
        .related-tools-list li a {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 0.5rem;
            text-decoration: none;
            color: var(--upsc-text-secondary);
            font-weight: 500;
            border-radius: 6px;
            transition: all 0.2s ease;
        }
        .related-tools-list li a:hover {
            background-color: var(--upsc-bg);
            color: var(--upsc-primary);
        }
        .upsc-ac4-content { overflow-wrap: break-word; }
        .upsc-ac4-content h2 {
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--upsc-text-primary);
        }
        .upsc-ac4-content p, .upsc-ac4-content ul, .upsc-ac4-content ol {
            font-size: 1.1rem;
            color: var(--upsc-text-secondary);
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }
        .upsc-ac4-content ul, .upsc-ac4-content ol { padding-left: 20px; }
    </style>

    <div class="upsc-ac4-container">
        <header class="upsc-ac4-header">
            <h1>UPSC CSE 2025 Age Eligibility Calculator</h1>
            <p>Don't let confusion stop your dream. Instantly check your age, attempts, and eligibility based on the official 2025 cutoff date.</p>
        </header>

        <div class="upsc-ac4-layout">
            <main class="upsc-ac4-main">
                <div class="upsc-ac4-card upsc-ac4-card-padded">
                    <div class="upsc-ac4-form-grid">
                        <div class="upsc-ac4-input-group">
                            <label for="upsc-dob">Your Date of Birth</label>
                            <input type="date" id="upsc-dob" class="upsc-ac4-input">
                        </div>
                        <div class="upsc-ac4-input-group">
                            <label for="upsc-category">Your Category</label>
                            <select id="upsc-category" class="upsc-ac4-input">
                                <option value="General/EWS">General / EWS</option>
                                <option value="OBC">OBC</option>
                                <option value="SC/ST">SC / ST</option>
                                <option value="PwBD (General)">PwBD (General)</option>
                                <option value="PwBD (OBC)">PwBD (OBC)</option>
                                <option value="PwBD (SC/ST)">PwBD (SC/ST)</option>
                            </select>
                        </div>
                    </div>
                    <button id="upsc-submit-btn" class="upsc-ac4-submit-btn">Check Eligibility</button>
                    <div id="upsc-error-box"></div>
                    <div id="upsc-results" class="upsc-ac4-results">
                        <div id="upsc-result-status" class="upsc-ac4-status"></div>
                        <div class="upsc-ac4-details-grid">
                            <div class="item">
                                <span class="label">Age on 1st Aug 2025</span>
                                <p class="value" id="res-age">--</p>
                            </div>
                            <div class="item highlight">
                                <span class="label">Max. Attempts</span>
                                <p class="value" id="res-attempts">--</p>
                            </div>
                            <div class="item">
                                <span class="label">Required Age</span>
                                <p class="value" id="res-age-limit">--</p>
                            </div>
                            <div class="item">
                                <span class="label">Valid DOB Range</span>
                                <p class="value" id="res-dob-range">--</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <aside class="upsc-ac4-sidebar">
                <div class="upsc-ac4-card upsc-ac4-sidebar-card">
                    <div class="upsc-ad-placeholder">Advertisement</div>
                </div>
                <div class="upsc-ac4-card upsc-ac4-sidebar-card">
                    <h3>Related Tools</h3>
                <ul class = "related-tools-list">
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
            
            <div class="upsc-ac4-main upsc-ac4-content upsc-ac4-card upsc-ac4-card-padded">
                <h2>The First Hurdle on the Path to LBSNAA</h2>
                <p>
                    The dream to become an IAS or IPS officer is a big one. But the first step is always the smallest: checking if you are even eligible. The official UPSC notification is like a huge book, and finding the right age rule for your category can feel like a test itself. Many good students get confused here.
                </p>
                <p>
                    This tool is build to stop that confusion. We use the official UPSC rules for the 2025 exam, so what you see here is what you will get. No more doubts, no more wasting time. Just a clear answer so you can focus on what is really important - your preparation.
                </p>
                <h2>Understanding The UPSC Rules</h2>
                <p>
                    Its not just about your age. UPSC is very strict about one date: <strong>August 1, 2025</strong>. If you are 20 years and 11 months old on this date, you are not eligible. If you are one day older than the maximum age for your category, you are not eligible. The minimum age for every single person is 21. No relaxation on that. The relaxation is only for the upper age limit.
                </p>
                <h2>Attempts are More Precious Than Gold</h2>
                <p>
                    Unlike age, attempts are something you can count. For General category, you only get 6 chances in your life. For OBC, it is 9. For SC/ST, you can give exam until your age limit is finished. So every attempt is important. Dont waste an attempt if you are not prepared. And always be sure of your eligibility before you fill the form, which this tool helps you to do.
                </p>
                <h2>What is Preliminary, Mains and Interview?</h2>
                <p>
                    Just to be sure, you know the exam has three stages. First is Prelims, it is two papers of objective questions. It is only for filtering the students for the next stage. After you clear prelims, you write Mains. This is the big one, with nine papers where you have to write long answers. Your real rank depends on Mains and the Interview. The Interview is the final stage, they call it a Personality Test. Here they see if you have the qualities of a officer.
                </p>
                <h2>A Final Word of Advice</h2>
                <p>
                    Look, this journey is long and needs a lot of hard work. Small things like worrying about eligibility can take up your mental energy. Use this tool, clear your doubt one time, and then forget about it. Put all your focus on study. That is the only way to clear this exam. We wish you all the very best!
                </p>
            </div>
        </div>
    </div>

    <script>
        (function() {
            const dobInput = document.getElementById('upsc-dob');
            const categorySelect = document.getElementById('upsc-category');
            const submitBtn = document.getElementById('upsc-submit-btn');
            const resultsDiv = document.getElementById('upsc-results');
            const errorBox = document.getElementById('upsc-error-box');

            if (!submitBtn) return; 

            const res = {
                status: document.getElementById('upsc-result-status'),
                age: document.getElementById('res-age'),
                ageLimit: document.getElementById('res-age-limit'),
                attempts: document.getElementById('res-attempts'),
                dobRange: document.getElementById('res-dob-range')
            };
            
            const CALCULATION_DATE = new Date('2025-08-01T00:00:00');
            const MIN_AGE = 21;

            const CATEGORY_DATA = {
                'General/EWS': { maxAge: 32, attempts: 6 },
                'OBC': { maxAge: 35, attempts: 9 },
                'SC/ST': { maxAge: 37, attempts: 'Unlimited' },
                'PwBD (General)': { maxAge: 42, attempts: '9 (General)' },
                'PwBD (OBC)': { maxAge: 45, attempts: '9 (OBC)' },
                'PwBD (SC/ST)': { maxAge: 47, attempts: 'Unlimited' }
            };

            function calculateAge(dob) {
                const birthDate = new Date(dob);
                let ageYears = CALCULATION_DATE.getFullYear() - birthDate.getFullYear();
                const monthDiff = CALCULATION_DATE.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && CALCULATION_DATE.getDate() < birthDate.getDate())) {
                    ageYears--;
                }
                return ageYears;
            }

            function formatDate(date) {
                const d = new Date(date);
                const day = String(d.getDate()).padStart(2, '0');
                const month = String(d.getMonth() + 1).padStart(2, '0');
                const year = d.getFullYear();
                return `${day}-${month}-${year}`;
            }
            
            function checkEligibility() {
                // Hide previous results and errors
                resultsDiv.style.display = 'none';
                errorBox.style.display = 'none';

                if (!dobInput.value) {
                    errorBox.textContent = 'Please select your Date of Birth to check eligibility.';
                    errorBox.style.display = 'block';
                    return;
                }

                const selectedCategory = categorySelect.value;
                const userAge = calculateAge(dobInput.value);
                const categoryInfo = CATEGORY_DATA[selectedCategory];
                const maxAgeForCategory = categoryInfo.maxAge;
                const isEligible = userAge >= MIN_AGE && userAge <= maxAgeForCategory;

                const notBornAfter = new Date(CALCULATION_DATE);
                notBornAfter.setFullYear(notBornAfter.getFullYear() - MIN_AGE);
                
                const notBornBefore = new Date(CALCULATION_DATE);
                notBornBefore.setFullYear(notBornBefore.getFullYear() - (maxAgeForCategory + 1));
                notBornBefore.setDate(notBornBefore.getDate() + 1);
                
                resultsDiv.style.display = 'block';
                
                if (isEligible) {
                    res.status.textContent = `✅ Congratulations! You are Eligible.`;
                    res.status.className = 'upsc-ac4-status eligible';
                } else {
                    let reason = userAge < MIN_AGE ? `(Below minimum age of 21)` : `(Above maximum age of ${maxAgeForCategory})`;
                    res.status.textContent = `❌ Sorry, You are Not Eligible ${reason}`;
                    res.status.className = 'upsc-ac4-status not-eligible';
                }

                res.age.textContent = `${userAge} Years`;
                res.attempts.textContent = categoryInfo.attempts;
                res.ageLimit.textContent = `21 - ${maxAgeForCategory} Years`;
                res.dobRange.textContent = `${formatDate(notBornBefore)} to ${formatDate(notBornAfter)}`;
            }

            submitBtn.addEventListener('click', checkEligibility);
        })();
    </script>
</div>