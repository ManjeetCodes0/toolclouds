---
title: "Daily Water Intake Calculator - How Much Should You Drink?"
localtitle: "Daily Water Intake Calculator"
layout: tool
categories: [calculators, healthCalc]
permalink: /calculators/health/hydration-calculator
description: "How much water should you drink daily? Our free Hydration Calculator (2025) determines your ideal water intake based on your weight, age, and activity level."
tags:
  - "Hydration Calculator"
  - "Daily Water Intake Calculator"
  - "Water Calculator"
  - "How Much Water to Drink"
  - "Calculate Water Intake"
  - "Hydration Needs"
  - "Daily Hydration Goal"
  - "Health Calculator"
  - "Fitness Tool"
  - "Dehydration"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
    /* Scoped styles for the Hydration Calculator with unique `hc-` prefix */
    .hc-wrapper,
    .hc-wrapper * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .hc-wrapper i.fas {
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
    }

    .hc-wrapper {
        background: linear-gradient(135deg, #1a2980, #26d0ce);
        color: #333;
        padding: 40px 0;
        width: 100vw;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        overflow-x: hidden;
    }

    /* Mobile-first: Center everything by default */
    .hc-container, .hc-post-content {
        width: calc(100% - 20px);
        max-width: 900px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .hc-post-content {
        margin-top: 30px;
    }
    
    /* Ad and related content area - visible on desktop, hidden on mobile by default */
    .hc-ad-area {
        display: none;
    }

    .hc-error-message {
        color: #e74c3c;
        font-size: 0.875rem;
        margin-top: 5px;
        display: none;
    }

    .hc-wrapper header {
        background: linear-gradient(to right, #3498db, #2ecc71);
        color: white;
        padding: 25px;
        text-align: center;
    }

    .hc-wrapper h1, .hc-wrapper h2, .hc-wrapper h3, .hc-wrapper h4 {
        margin-top: 1em;
        margin-bottom: 0.5em;
    }

    .hc-wrapper h1 { font-size: 2.5rem; margin-bottom: 10px; margin-top: 0;}
    
    .hc-wrapper .hc-tagline {
        font-size: 1.1rem;
        opacity: 0.9;
    }

    .hc-wrapper .hc-calculator-container {
        display: flex;
        flex-wrap: wrap;
        padding: 30px;
    }

    .hc-wrapper .hc-input-section {
        flex: 1;
        min-width: 300px;
        padding-right: 20px;
    }

     @media (max-width: 768px) {
        .hc-wrapper .hc-input-section {
            padding-right: 0;
        }
        .hc-wrapper .hc-calculator-container {
            flex-direction: column;
        }
         .hc-wrapper .hc-result-section {
            margin-top: 30px;
        }
    }

    .hc-wrapper .hc-result-section {
        flex: 1;
        min-width: 300px;
        padding: 20px;
        background: #f8f9fa;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .hc-wrapper .hc-form-group {
        margin-bottom: 20px;
    }

    .hc-wrapper label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
        color: #2c3e50;
    }

    .hc-wrapper input,
    .hc-wrapper select {
        width: 100%;
        padding: 14px;
        border: 2px solid #ddd;
        border-radius: 10px;
        font-size: 16px;
        transition: border-color 0.3s;
    }

    .hc-wrapper input:focus,
    .hc-wrapper select:focus {
        border-color: #3498db;
        outline: none;
    }

    .hc-wrapper .hc-calculate-btn {
        background: linear-gradient(to right, #3498db, #2ecc71);
        color: white;
        border: none;
        padding: 16px;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        transition: transform 0.3s, box-shadow 0.3s;
        margin-top: 10px;
    }

    .hc-wrapper .hc-calculate-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .hc-wrapper .hc-water-icon {
        font-size: 5rem;
        color: #3498db;
        margin-bottom: 20px;
    }

    .hc-wrapper .hc-result-amount {
        font-size: 3.5rem;
        font-weight: 700;
        color: #2c3e50;
        margin: 10px 0;
    }

    .hc-wrapper .hc-result-unit {
        font-size: 1.5rem;
        color: #7f8c8d;
        margin-bottom: 20px;
    }

    .hc-wrapper .hc-result-details {
        background: white;
        padding: 20px;
        border-radius: 10px;
        margin-top: 20px;
        width: 100%;
    }

    .hc-wrapper .hc-result-details h3 {
        color: #2c3e50;
        margin-bottom: 15px;
        text-align: center;
    }

    .hc-wrapper .hc-detail-item {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid #eee;
    }

    .hc-wrapper .hc-tips {
        background: #e8f9fa;
        padding: 25px;
        margin: 0 30px 30px;
        border-radius: 15px;
    }

    .hc-wrapper .hc-tips h2 {
        color: #3498db;
        margin-bottom: 15px;
        text-align: center;
    }

    .hc-wrapper .hc-tip {
        display: flex;
        align-items: center;
        margin: 15px 0;
    }

    .hc-wrapper .hc-tip-icon {
        background: #3498db;
        color: white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        flex-shrink: 0;
    }

    .hc-wrapper .hc-glass-size-selector {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 15px;
    }

    .hc-wrapper .hc-glass-option {
        flex: 1;
        min-width: 80px;
        text-align: center;
        padding: 12px;
        background: #f1f8ff;
        border: 2px solid #bde0ff;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .hc-wrapper .hc-glass-option.selected {
        background: #3498db;
        color: white;
        border-color: #3498db;
    }

    .hc-footer {
        text-align: center;
        margin-top: 30px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
    }
    
    .hc-post-content {
        padding: 30px;
        color: #333;
    }
    .hc-post-content h2 { font-size: 2rem; color: #3498db; }
    .hc-post-content h3 { font-size: 1.5rem; color: #2c3e50; }
    .hc-post-content h4 { font-size: 1.2rem; color: #333; }
    .hc-post-content ul { padding-left: 20px; list-style: disc; }
    .hc-post-content li { margin-bottom: 0.75em; line-height: 1.6; }
    .hc-post-content p { line-height: 1.6; margin-bottom: 1em; }

    /* New styles for the related tools card */
    .hc-related-card {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    .hc-related-card h3 {
        font-size: 1.25rem;
        margin-bottom: 15px;
        color: #3498db;
        text-align: center;
    }

    .hc-related-card ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .hc-related-card li {
        margin-bottom: 10px;
    }

    .hc-related-card a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #2c3e50;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.2s, color 0.2s;
    }

    .hc-related-card a:hover {
        background-color: #f1f8ff;
        color: #3498db;
    }

    .hc-related-card .fas {
        margin-right: 12px;
        font-size: 1.2em;
        color: #3498db;
    }

    /* Ad Placeholder styles */
    .hc-ad-placeholder {
        background: #e9ecef;
        border-radius: 10px;
        height: 250px; /* Standard ad size */
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #6c757d;
    }

    /* New layout for mobile where content stacks */
    @media (max-width: 1199px) {
        .hc-top-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 0;
        }

        .hc-ad-area {
            display: flex;
            flex-direction: column;
            width: calc(100% - 20px);
            max-width: 900px;
            margin: 30px auto;
            gap: 20px;
        }

        .hc-container {
            margin-top: 30px;
        }
    }
    
    @media (min-width: 1200px) {
        .hc-top-section {
            display: flex;
            justify-content: flex-start; /* Aligned to left for ad space */
            align-items: flex-start;
            gap: 40px;
            width: 100%;
            padding: 0 40px; 
        }

        .hc-container {
            flex: 0 0 900px;
            margin: 0;
        }
        
        /* Show and position the ad area on desktop */
        .hc-ad-area {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            max-width: 350px; /* Gives the ad area a fixed max width */
            gap: 20px;
            position: sticky;
            top: 20px;
        }

        .hc-post-content {
            width: calc(100% - 80px);
            max-width: 1800px;
            margin-top: 50px;
            padding: 60px 80px;
        }
        
        .hc-post-content h2,
        .hc-post-content h3,
        .hc-post-content h4,
        .hc-post-content p,
        .hc-post-content ul {
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }

        .hc-post-content p, .hc-post-content li {
            font-size: 18px;
            line-height: 1.7;
        }
    }
</style>

<div class="hc-wrapper">
    <div class="hc-top-section">
        <div class="hc-container">
            <header>
                <h1><i class="fas fa-tint"></i> Hydration Calculator</h1>
                <p class="hc-tagline">Calculate your optimal daily water intake for better health</p>
            </header>
            <div class="hc-calculator-container">
                <div class="hc-input-section">
                    <div class="hc-form-group">
                        <label for="weight"><i class="fas fa-weight"></i> Weight</label>
                        <input type="number" id="weight" placeholder="Enter your weight" min="0">
                        <p class="hc-error-message" id="weight-error"></p>
                    </div>
                    <div class="hc-form-group">
                        <label for="unit"><i class="fas fa-balance-scale"></i> Unit</label>
                        <select id="unit">
                            <option value="kg">Kilograms (kg)</option>
                            <option value="lbs">Pounds (lbs)</option>
                        </select>
                    </div>
                    <div class="hc-form-group">
                        <label for="activity"><i class="fas fa-running"></i> Daily Activity Level</label>
                        <select id="activity">
                            <option value="1.2">Sedentary (little or no exercise)</option>
                            <option value="1.375">Lightly active (light exercise 1-3 days/week)</option>
                            <option value="1.55" selected>Moderately active (moderate exercise 3-5 days/week)</option>
                            <option value="1.725">Very active (hard exercise 6-7 days/week)</option>
                            <option value="1.9">Extremely active (very hard exercise, physical job)</option>
                        </select>
                    </div>
                    <div class="hc-form-group">
                        <label><i class="fas fa-glass-whiskey"></i> Common Glass Sizes</label>
                        <div class="hc-glass-size-selector">
                            <div class="hc-glass-option" data-size="250">Small (8oz)</div>
                            <div class="hc-glass-option selected" data-size="350">Medium (12oz)</div>
                            <div class="hc-glass-option" data-size="500">Large (17oz)</div>
                        </div>
                    </div>
                    <button class="hc-calculate-btn" id="calculate">
                        Calculate My Water Intake <i class="fas fa-calculator"></i>
                    </button>
                </div>
                <div class="hc-result-section">
                    <i class="fas fa-tint hc-water-icon"></i>
                    <div class="hc-result-amount" id="result-amount">--</div>
                    <div class="hc-result-unit">liters per day</div>
                    <div class="hc-result-details">
                        <h3>Your Hydration Plan</h3>
                        <div class="hc-detail-item">
                            <span>Total water intake:</span>
                            <span id="total-water">-- L</span>
                        </div>
                        <div class="hc-detail-item">
                            <span>Glasses to drink (<span id="glass-size">350</span>ml):</span>
                            <span id="glasses">--</span>
                        </div>
                        <div class="hc-detail-item">
                            <span>Recommended intake per hour:</span>
                            <span id="hourly">-- mL</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hc-tips">
                <h2><i class="fas fa-lightbulb"></i> Hydration Tips</h2>
                <div class="hc-tip">
                    <div class="hc-tip-icon"><i class="fas fa-check"></i></div>
                    <div>Start your day with a glass of water to kickstart hydration</div>
                </div>
                <div class="hc-tip">
                    <div class="hc-tip-icon"><i class="fas fa-check"></i></div>
                    <div>Keep a water bottle with you throughout the day as a reminder</div>
                </div>
                <div class="hc-tip">
                    <div class="hc-tip-icon"><i class="fas fa-check"></i></div>
                    <div>Drink before, during, and after physical activity</div>
                </div>
                <div class="hc-tip">
                    <div class="hc-tip-icon"><i class="fas fa-check"></i></div>
                    <div>Eat water-rich foods like cucumbers, watermelon, and oranges</div>
                </div>
            </div>
        </div>

        <div class="hc-ad-area">
            <div class="hc-related-card">
                <h3>Explore More Tools</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-balance-scale"></i>BMI Calculator</a></li>
                    <li><a href="#"><i class="fas fa-running"></i>Calorie Counter</a></li>
                    <li><a href="#"><i class="fas fa-heartbeat"></i>Heart Rate Zones</a></li>
                    <li><a href="#"><i class="fas fa-utensils"></i>Macro Calculator</a></li>
                </ul>
            </div>
            <div class="hc-ad-placeholder">
                <p>Advertisement</p>
            </div>
        </div>
    </div>
    
    <div class="hc-post-content">
        <h2>The Ultimate Guide to Hydration: Are You Really Drinking Enough Water?</h2>
        <p>We're instructed from childhood to "drink more water." It's a nugget of advice so ubiquitous it threatens to become background static. We mouth the words, take a sip every now and then, and figure we're doing just that – fine. But are we? For something so basic to our humanity, the terrain of hydration is unexpectedly foggy. How much is enough? Does coffee qualify? And what's our body actually saying to us when we are experiencing that midday slump?</p>
        <p>This's not all about thirst. Proper hydration is one of the strongest, yet underrated, keys to rewiring your physical and mental health. It's the secret to improved energy, sharper thinking, healthier-looking skin, and a body that just gets the job done.</p>
        <p>In this book, we'll go inside the science and art of water and expose the myths. We'll examine the incredible effect that water has on every system in your body and provide you with the real-world tools—such as our Daily Water Intake Calculator—to at last gain mastery over your hydration and tap into a healthier you.</p>

        <h3>Chapter 1: Why Water is Your Body's Unsung Hero</h3>
        <p>Before we discuss how much to consume, let's see why it's so important. Imagine your body as a crowded, intricate city. Water is not just a tenant; it's the utilities. It's the electrical grid, the road system, and the sewage department all in one. Your body is approximately 60% water, and each cell, tissue, and organ relies on it to operate.</p>
        
        <h4>The Cellular Powerhouse</h4>
        <p>At its most fundamental level, water is responsible for cellular integrity. Water occupies our cells, allowing them to keep their shape and function. It's the solvent in which all of the body's chemical reactions—ranging from generating energy to fixing tissue—occur. Without sufficient water, cellular equipment comes to a screeching halt.</p>
        
        <h4>Your Brain's Best Friend 🧠</h4>
        <p>Your brain consists of approximately 75% water, and it suffers from dehydration first. Mild dehydration (the loss of only 1-2% of your body's water) can already affect cognitive performance. This may appear as:</p>
        <ul>
            <li>Difficulty concentrating or "brain fog."</li>
            <li>Short-term memory issues.</li>
            <li>More feelings of anxiety and tiredness.</li>
            <li>Headaches (dehydration is one of the major causes of tension headaches and migraines).</li>
        </ul>
        <p>Hydration maintains the connections firing, your mood consistent, and your mind clear.</p>

        <h4>Fuel for Physical Performance 💪</h4>
        <p>Whether you're a professional athlete or just climbing the stairs, your muscles require water. Water transports oxygen to your muscles, lubricates your joints, and plays a key role in dissipating heat through sweat. If you become dehydrated, blood volume decreases, making your heart work harder. This translates into fatigue, muscle cramps, and a huge decrease in endurance and strength.</p>
        
        <h4>The Secret to Glowing Skin ✨</h4>
        <p>Put pricey creams aside for now. Drinking one of the best ways to achieve healthy, luminous skin is to hydrate from within. Water flushes toxins out of your system and brings necessary nutrients to your skin cells, tightening elasticity and keeping premature wrinkles at bay.</p>

        <h4>A Well-Oiled Digestive System</h4>
        <p>Water is the secret to making your digestive system run smoothly. It breaks down soluble fiber so it can create a gel-like substance that keeps everything moving and stays away from constipation. It also facilitates your body in absorbing nutrients better from the foods you consume.</p>

        <h3>Chapter 2: The Big Question: How Much Do You Really Need?</h3>
        <p>For years, the "8 glasses a day" (approximately 2 liters) mantra has been the conventional wisdom. But this blanket directive is a huge overgeneralization. The reality is that your optimal water consumption is as individual as you are. It's a fluid number that fluctuates depending on a few important variables.</p>
        
        <h4>The Factors That Determine Your Needs:</h4>
        <ul>
            <li><strong>Body Weight:</strong> A bigger individual has more body weight to hydrate. They also possess a greater metabolic rate and require more water to sustain their body functions. This is the most basic factor in determining water requirement.</li>
            <li><strong>Activity Level:</strong> This is a big one. If you're sitting at a desk job, your requirements will be much lower than for someone working in construction or who goes to the gym for a hard-core workout every day. Exercise produces heat, and your body dissipates the heat by sweating. That lost fluid has to be replenished to prevent performance from dropping and prevent overheating.</li>
            <li><strong>Climate and Environment:</strong> You live in a hot, humid area such as Punjab, so you are going to sweat more even if you're not working out. Your body is doing its thing to control its temperature, and that takes water. Being at high altitudes also boosts your fluid intake.</li>
            <li><strong>Overall Health:</strong> When you're ill with fever, vomiting, or diarrhea, your body is losing fluids at an alarming rate. It's important to drink more water to avoid dehydration. Bladder infections and kidney stones are also conditions that need drinking more water to flush out your system.</li>
            <li><strong>Pregnancy and Breastfeeding:</strong> Pregnant and breastfeeding women have drastically increased water needs to nourish the baby and, subsequently, to support milk production.</li>
        </ul>
        
        <h3>Chapter 3: Your Personal Hydration Plan: Putting the Calculator to Work</h3>
        <p>So, how do you convert all of these considerations into a plain, usable number? That's where our Daily Water Intake Calculator is useful. It does the math for you.</p>
        
        <h4>Here's how to use it—it's really easy:</h4>
        <ul>
            <li><strong>Enter Your Weight:</strong> Plug in your current weight and choose either kilograms (kg) or pounds (lbs). Be truthful—this is the basis of your calculation.</li>
            <li><strong>Choose Your Activity Level:</strong> Select the choice that best represents your average day, from sedentary (largely sitting) to very active (heavy exercise or physically demanding job).</li>
            <li><strong>Click "Calculate!":</strong> Instantly, the calculator will show you your own daily water intake recommendation in liters. It will also convert this into a more user-friendly figure, such as how many average glasses of water you should be drinking.</li>
        </ul>
        <p>This is your baseline—your point of departure for peak health.</p>

        <h3>Chapter 4: Hearing Your Body: The Telltale Signs of Dehydration</h3>
        <p>Your body possesses an advanced warning system to inform you when it's low on water. Paying attention to these signs can keep you a step ahead of dehydration.</p>
        
        <h4>Early Warning Signs (Your Body's Gentle Nudges):</h4>
        <ul>
            <li><strong>Thirst:</strong> The most obvious warning, but by the time you're thirsty, you're already dehydrated.</li>
            <li><strong>Dark Yellow Urine:</strong> It's one of the best signs. Proper hydration produces pale, straw-colored pee. Dark yellow or amber-colored pee indicates your body is holding onto water and your pee is too concentrated.</li>
            <li><strong>Dry Mouth and Bad Breath:</strong> Saliva is an antibacterial agent. When dehydrated, saliva secretion lowers, and you get a dry, sticky mouth with more bacteria that create bad breath.</li>
            <li><strong>Fatigue and Sluggishness:</strong> Tired for no reason? Before grabbing a caffeine, grab a big glass of water.</li>
        </ul>

        <h4>More Serious Signs (Your Body's Alarm Bells):</h4>
        <ul>
            <li>Dizziness or lightheadedness</li>
            <li>Confusion or irritability</li>
            <li>Rapid heartbeat</li>
            <li>Sunken eyes</li>
            <li>Inability to sweat or produce tears</li>
        </ul>
        <p>If you do have these more serious symptoms, it is a sign of severe dehydration and you should rehydrate slowly and see a doctor if needed.</p>

        <h3>Chapter 5: Hydration Hacks: Easy Ways to Make Water a Habit</h3>
        <p>To know that you must drink more water is one thing, but actually doing it is another. For some tried-and-true ways to make hydration a breeze in your life, try these:</p>
        <ul>
            <li><strong>Invest in a Bottle You Love:</strong> This may seem ridiculous, but it is effective. If you have a good, refillable water bottle that you like using, then you're much more likely to carry it around and sip all day long.</li>
            <li><strong>Flavor Your Water:</strong> If plain water bores you, flavor it! Add lemon and lime slices, cucumber, mint, or a handful of berries. It provides a refreshing flavor without sugar or calories.</li>
            <li><strong>"Bookend" Your Day with Water:</strong> It should be a non-negotiable routine to drink an entire glass of water as soon as you wake up and another glass roughly an hour or so before you sleep. This begins and concludes your day with hydration.</li>
            <li><strong>Eat Your Water:</strong> Most fruits and vegetables contain extremely high water content. Add more of these to your diet: watermelon, cucumber, strawberries, celery, oranges, and lettuce are all great choices.</li>
            <li><strong>Set Tech Reminders:</strong> Remind yourself with your phone or smartwatch every hour to have a sip of water. There are even specialized apps that monitor your consumption and remind you through the day.</li>
        </ul>
        
        <h3>Chapter 6: The Other Side: Can You Drink Too Much?</h3>
        <p>Most of us don't have to worry about this. But it is technically possible to drink too much water. It results in a condition known as hyponatremia or "water intoxication," where you take in so much water over such a short time that you dilute your blood sodium levels to dangerous levels.</p>
        <p>This is very rare in the general population. It occurs most often in endurance athletes (such as marathon runners) who ingest excessive quantities of plain water without replenishing lost electrolytes from sweat. The secret is balance. Pay attention to your body's need for water and remain with the suggested amount from the calculator, dividing your volume throughout the day.</p>
        
        <h3>Conclusion: Your First Step to a Healthier Life</h3>
        <p>Hydration is not a task; it's self-love. It's the easiest and best action you can take towards a body that feels energized, a mind that feels sharp, and a life with more spark. Ditch the guessing with old standards and tune in to your body's individual needs.</p>
        <p>Plug in the calculator, get your number, and start the journey. Your body will reward you with every single glass.</p>
    </div>
    
    <footer class="hc-footer">
        <p>Note: This is an estimate. Individual needs may vary. Consult a healthcare provider for specific advice.</p>
    </footer>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const calculateBtn = document.getElementById('calculate');
        const glassOptions = document.querySelectorAll('.hc-glass-option');
        let selectedGlassSize = 350;

        glassOptions.forEach(option => {
            option.addEventListener('click', function() {
                glassOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                selectedGlassSize = parseInt(this.dataset.size);
                document.getElementById('glass-size').textContent = selectedGlassSize;

                if (document.getElementById('result-amount').textContent !== '--') {
                    calculateWaterIntake();
                }
            });
        });

        calculateBtn.addEventListener('click', calculateWaterIntake);

        document.getElementById('weight').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateWaterIntake();
            }
        });

        function calculateWaterIntake() {
            const weightInput = document.getElementById('weight');
            const weightError = document.getElementById('weight-error');
            const weight = parseFloat(weightInput.value);
            const unit = document.getElementById('unit').value;
            const activityFactor = parseFloat(document.getElementById('activity').value);

            weightError.style.display = 'none';
            weightInput.style.borderColor = '#ddd';

            if (!weight || weight <= 0) {
                weightError.textContent = 'Please enter a valid weight.';
                weightError.style.display = 'block';
                weightInput.style.borderColor = '#e74c3c';
                return;
            }

            const weightKg = unit === 'kg' ? weight : weight * 0.453592;
            let waterIntakeML = weightKg * 35 * activityFactor;

            if (activityFactor > 1.7) {
                waterIntakeML *= 1.1;
            }

            const waterIntakeLiters = (waterIntakeML / 1000).toFixed(1);
            const glasses = Math.round(waterIntakeML / selectedGlassSize);
            const hourlyIntake = Math.round(waterIntakeML / 16);

            document.getElementById('result-amount').textContent = waterIntakeLiters;
            document.getElementById('total-water').textContent = waterIntakeLiters + ' L';
            document.getElementById('glasses').textContent = glasses + ' glasses';
            document.getElementById('hourly').textContent = hourlyIntake + ' mL';
        }

        document.getElementById('glass-size').textContent = selectedGlassSize;
    });
</script>