---
title: "BMI Calculator"
layout: tool
categories: [calculators, health]
permalink: /calculators/health/bmi-calculator/
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
    :root {
        --bg-color: #ffffff;
        --card-bg: #ffffff;
        --text-color: #2d3436;
        --primary-color: #6c5ce7;
        --secondary-color: #a29bfe;
        --input-border: #ddd;
        --shadow-color: rgba(0, 0, 0, 0.08);
        --readable-text: #495057;
        --placeholder-bg: #f8f9fa;
        
        /* Category Colors */
        --underweight: #00cec9;
        --normal: #00b894;
        --overweight: #fdcb6e;
        --obese1: #e17055;
        --obese2: #d63031;
        --obese3: #b71c1c;
    }

    .bmi-calculator, .bmi-calculator * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .bmi-calculator-wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 40px 20px;
        background-color: var(--bg-color);
        min-height: 100vh;
    }

    .bmi-calculator {
        background: var(--card-bg);
        padding: 30px;
        border-radius: 16px;
        box-shadow: 0 12px 40px var(--shadow-color);
        width: 100%;
        max-width: 500px;
        transition: max-width 0.4s ease;
    }

    .calculator-header {
        text-align: center;
        margin-bottom: 25px;
        position: relative;
    }
    
    .calculator-header h2 { color: var(--primary-color); font-size: 28px; margin-bottom: 8px; }
    .calculator-header p { color: #636e72; font-size: 16px; }
    .calculator-header::after {
        content: ''; position: absolute; bottom: -10px; left: 50%;
        transform: translateX(-50%); width: 80px; height: 3px;
        background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        border-radius: 3px;
    }

    .unit-switcher {
        display: flex; justify-content: center; margin-bottom: 25px;
        background: #f1f2f6; border-radius: 10px; padding: 5px;
    }

    .unit-switcher label {
        flex: 1; text-align: center; padding: 10px 15px; cursor: pointer;
        border-radius: 8px; transition: all 0.3s ease; font-weight: 500;
        display: flex; align-items: center; justify-content: center;
        gap: 8px; color: var(--readable-text);
    }

    .unit-switcher input[type="radio"] { display: none; }
    .unit-switcher input[type="radio"]:checked + label {
        background-color: var(--primary-color); color: white;
        box-shadow: 0 3px 8px rgba(108, 92, 231, 0.3);
    }
    
    .input-group { margin-bottom: 20px; }
    .input-group label {
        display: block; margin-bottom: 8px; font-weight: 500;
        font-size: 16px; display: flex; align-items: center;
        gap: 8px; color: var(--text-color);
    }

    .input-field, .imperial-height input {
        width: 100%; padding: 14px; border: 1px solid var(--input-border);
        border-radius: 10px; font-size: 16px;
        transition: all 0.3s ease; color: var(--text-color);
    }

    .input-field:focus, .imperial-height input:focus {
        outline: none; border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
    }
    
    .imperial-height { display: flex; gap: 12px; }
    #imperial-inputs { display: none; }

    .calculate-btn {
        width: 100%; padding: 14px;
        background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        color: white; border: none; border-radius: 10px;
        font-size: 16px; font-weight: 600; cursor: pointer;
        transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(108, 92, 231, 0.3);
    }
    .calculate-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 15px rgba(108, 92, 231, 0.4); }

    #result-container {
        text-align: center; opacity: 0; transform: translateY(10px);
        transition: opacity 0.5s ease, transform 0.5s ease;
        height: 0; overflow: hidden; display: none; /* Hidden by default */
    }

    #result-container.visible {
        display: block; opacity: 1; transform: translateY(0);
        height: auto; overflow: visible;
        margin-top: 30px; padding-top: 25px;
        border-top: 1px solid #eee;
    }

    .bmi-value-display {
        font-size: 48px; font-weight: bold; line-height: 1; margin-bottom: 10px;
        background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text; color: transparent;
    }
    
    .bmi-category-display {
        font-size: 20px; font-weight: 600; margin-top: 5px;
        padding: 8px 20px; border-radius: 20px; display: inline-block;
        color: white; margin-bottom: 20px;
    }

    .bmi-gauge {
        width: 100%; height: 20px;
        background: linear-gradient(to right, 
            var(--underweight), var(--normal) 30%, var(--overweight) 50%,
            var(--obese1) 65%, var(--obese2) 80%, var(--obese3)
        );
        border-radius: 10px; margin: 25px 0; position: relative;
    }

    .bmi-indicator {
        position: absolute; top: 50%; transform: translate(-50%, -50%);
        width: 24px; height: 24px; background: white;
        border: 4px solid var(--text-color); border-radius: 50%;
        transition: left 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
        left: 0%; box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    .healthy-range, .health-tips, footer { margin-top: 20px; text-align: left; }
    .healthy-range { font-size: 16px; color: var(--readable-text); background: #f8f9fa; padding: 12px; border-radius: 10px; }
    .health-tips h3 { margin-bottom: 10px; color: var(--primary-color); display: flex; align-items: center; gap: 8px; }
    .health-tips ul { padding-left: 20px; }
    .health-tips li { margin-bottom: 8px; font-size: 14px; color: var(--readable-text); }
    footer { font-size: 12px; color: #636e72; padding-top: 20px; border-top: 1px solid #eee;}

    #result-placeholder { display: none; } /* Hide placeholder on mobile by default */

    /* ---------------------------------- */
    /* --- DESKTOP LAYOUT STARTS HERE --- */
    /* ---------------------------------- */
    @media (min-width: 992px) {
        .bmi-calculator {
            max-width: 1140px; /* Stretch the container wider */
        }
        
        .calculator-body {
            display: flex;
            gap: 40px;
            align-items: flex-start;
        }
        
        .form-section, .result-section {
            flex: 1;
            min-width: 0;
        }

        .result-section {
            border-left: 1px solid #eee;
            padding-left: 40px;
            min-height: 420px; /* Give it a minimum height to look balanced */
        }
        
        #result-placeholder {
            display: block; /* Show placeholder on desktop */
            padding: 10px;
            background-color: var(--placeholder-bg);
            border-radius: 12px;
            height: 100%;
        }
        #result-placeholder h3 {
             color: var(--primary-color);
             margin-bottom: 15px;
        }
        #result-placeholder p, #result-placeholder li {
            color: var(--readable-text);
            font-size: 15px;
            line-height: 1.6;
        }
        #result-placeholder ul {
            list-style-position: inside;
            padding-left: 0;
        }
        #result-placeholder li {
            margin-bottom: 10px;
        }
        
        #result-container.visible {
            /* Override mobile styles for desktop */
            margin-top: 0;
            padding-top: 0;
            border-top: none;
        }
    }

    @media (max-width: 600px) {
        .bmi-calculator { padding: 20px; }
        .imperial-height { flex-direction: column; gap: 10px; }
        .bmi-value-display { font-size: 36px; }
    }
</style>

<div class="bmi-calculator-wrapper">
    <div class="bmi-calculator">
        <div class="calculator-header">
            <h2><i class="fas fa-weight-scale"></i> BMI Calculator</h2>
            <p>Calculate your Body Mass Index and get health insights</p>
        </div>

        <div class="calculator-body">
            <div class="form-section">
                <div class="unit-switcher">
                    <input type="radio" name="unit" id="metric" value="metric" checked>
                    <label for="metric"><i class="fas fa-ruler"></i> Metric (kg, cm)</label>
                    <input type="radio" name="unit" id="imperial" value="imperial">
                    <label for="imperial"><i class="fas fa-ruler-combined"></i> Imperial (lbs, in)</label>
                </div>
                <div class="inputs">
                    <div id="metric-inputs">
                        <div class="input-group">
                            <label for="weight-kg"><i class="fas fa-weight-hanging"></i> Weight (kg)</label>
                            <input type="number" id="weight-kg" class="input-field" placeholder="e.g., 70" min="1">
                        </div>
                        <div class="input-group">
                            <label for="height-cm"><i class="fas fa-ruler-vertical"></i> Height (cm)</label>
                            <input type="number" id="height-cm" class="input-field" placeholder="e.g., 175" min="50">
                        </div>
                    </div>
                    <div id="imperial-inputs">
                        <div class="input-group">
                            <label for="weight-lbs"><i class="fas fa-weight-hanging"></i> Weight (lbs)</label>
                            <input type="number" id="weight-lbs" class="input-field" placeholder="e.g., 154" min="1">
                        </div>
                        <div class="input-group">
                            <label for="height-ft"><i class="fas fa-ruler-vertical"></i> Height</label>
                            <div class="imperial-height">
                                <input type="number" id="height-ft" placeholder="Feet" min="1">
                                <input type="number" id="height-in" placeholder="Inches" min="0" max="11">
                            </div>
                        </div>
                    </div>
                </div>
                <button class="calculate-btn" id="calculate-btn">
                    <i class="fas fa-calculator"></i> Calculate BMI
                </button>
            </div>

            <div class="result-section">
                <div id="result-placeholder">
                    <h3><i class="fas fa-info-circle"></i> What is BMI?</h3>
                    <p>Body Mass Index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.</p>
                    <p>The result gives you an idea of how your weight compares to common values and is a helpful starting point for further health discussions.</p>
                    <ul>
                        <li><strong style="color: var(--underweight)">Below 18.5:</strong> Underweight</li>
                        <li><strong style="color: var(--normal)">18.5 – 24.9:</strong> Healthy Weight</li>
                        <li><strong style="color: var(--overweight)">25.0 – 29.9:</strong> Overweight</li>
                        <li><strong style="color: var(--obese1)">30.0 & Above:</strong> Obesity</li>
                    </ul>
                </div>

                <div id="result-container">
                    <div id="bmi-value-display" class="bmi-value-display"></div>
                    <div id="bmi-category-display" class="bmi-category-display"></div>
                    <div class="bmi-gauge">
                        <div class="bmi-indicator" id="bmi-indicator"></div>
                    </div>
                    <p class="healthy-range">
                        Healthy weight for your height: <strong id="healthy-range-value"></strong>
                    </p>
                    <div class="health-tips">
                        <h3><i class="fas fa-heartbeat"></i> Health Tips</h3>
                        <ul id="health-tips-list"></ul>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <p>Note: BMI is a screening tool. Consult a healthcare provider for a comprehensive health assessment.</p>
        </footer>
    </div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        // ... JavaScript variables are the same ...
        const resultContainer = document.getElementById('result-container');
        const resultPlaceholder = document.getElementById('result-placeholder');
        
        // --- The rest of the script is the same until the calculateBMI and resetCalculator functions ---
        
        const calculateBtn = document.getElementById('calculate-btn');
        // ... other variable declarations ...

        function calculateBMI() {
            let weight, height;
            // ... calculation logic is the same ...
            
            // NEW LOGIC for showing/hiding placeholder
            if (window.innerWidth >= 992) { // Only apply this logic on desktop
                resultPlaceholder.style.display = 'none';
            }
            // ... the rest of the function is the same, including adding the 'visible' class
            
            // --- This is the original calculateBMI function with the one new line added ---
            const unitSwitchers = document.querySelectorAll('input[name="unit"]');
            const metricInputs = document.getElementById('metric-inputs');
            const imperialInputs = document.getElementById('imperial-inputs');
            const weightKgEl = document.getElementById('weight-kg');
            const heightCmEl = document.getElementById('height-cm');
            const weightLbsEl = document.getElementById('weight-lbs');
            const heightFtEl = document.getElementById('height-ft');
            const heightInEl = document.getElementById('height-in');
            let currentUnit = document.querySelector('input[name="unit"]:checked').value;
            
            if (currentUnit === 'metric') {
                const w = parseFloat(weightKgEl.value);
                const h = parseFloat(heightCmEl.value);
                if (w > 0 && h > 0) { weight = w; height = h / 100; }
            } else {
                const w = parseFloat(weightLbsEl.value);
                const hFt = parseFloat(heightFtEl.value) || 0;
                const hIn = parseFloat(heightInEl.value) || 0;
                const totalHeightInches = (hFt * 12) + hIn;
                if (w > 0 && totalHeightInches > 0) { weight = w * 0.453592; height = totalHeightInches * 0.0254; }
            }
            if (weight > 0 && height > 0) {
                if (window.innerWidth >= 992) {
                    resultPlaceholder.style.display = 'none';
                }
                const bmi = weight / (height * height);
                updateUI(bmi, height);
                resultContainer.classList.add('visible');
            } else {
                alert("Please enter valid weight and height values.");
            }
        }

        function resetCalculator() {
             // NEW LOGIC for resetting placeholder
            if (window.innerWidth >= 992) { // Only apply this logic on desktop
                resultPlaceholder.style.display = 'block';
            }
            document.querySelectorAll('.input-field, .imperial-height input').forEach(input => input.value = '');
            resultContainer.classList.remove('visible');
        }

        // --- All other functions (updateUI, getBMICategory, etc.) and event listeners remain the same ---
        const unitSwitchers = document.querySelectorAll('input[name="unit"]');
        unitSwitchers.forEach(switcher => {
            switcher.addEventListener('change', (e) => {
                resetCalculator();
                // ... rest of the change listener
                const metricInputs = document.getElementById('metric-inputs');
                const imperialInputs = document.getElementById('imperial-inputs');
                let currentUnit = e.target.value;
                metricInputs.style.display = (currentUnit === 'metric') ? 'block' : 'none';
                imperialInputs.style.display = (currentUnit === 'imperial') ? 'block' : 'none';
            });
        });
        calculateBtn.addEventListener('click', calculateBMI);
        document.querySelectorAll('.input-field, .imperial-height input').forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') { calculateBMI(); }
            });
        });

        const bmiValueDisplay = document.getElementById('bmi-value-display');
        const bmiCategoryDisplay = document.getElementById('bmi-category-display');
        const bmiIndicator = document.getElementById('bmi-indicator');
        const healthyRangeValue = document.getElementById('healthy-range-value');
        const healthTipsList = document.getElementById('health-tips-list');
        const tips = {
            underweight: ["Consider nutrient-rich foods to build healthy muscle mass.", "Incorporate healthy fats like avocados, nuts, and seeds.", "Speak with a nutritionist for a balanced weight-gain plan."],
            normal: ["Maintain a balanced diet with plenty of fruits and vegetables.", "Aim for at least 150 minutes of moderate exercise per week.", "Continue your healthy habits to stay in this range."],
            overweight: ["Focus on portion control and mindful eating.", "Increase physical activity; find an exercise you enjoy.", "Reduce intake of processed foods and sugary drinks."],
            obese: ["Consult a healthcare provider for a personalized plan.", "Incorporate regular, low-impact exercise like walking or swimming.", "Focus on whole foods and aim for gradual, sustainable weight loss."]
        };
        function updateUI(bmi, heightInMeters) {
            bmiValueDisplay.textContent = bmi.toFixed(1);
            const categoryInfo = getBMICategory(bmi);
            bmiCategoryDisplay.textContent = categoryInfo.name;
            bmiCategoryDisplay.style.backgroundColor = `var(--${categoryInfo.colorKey})`;
            const minBmi = 15;
            const maxBmi = 40;
            let percentage = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
            percentage = Math.max(0, Math.min(100, percentage));
            bmiIndicator.style.left = `${percentage}%`;
            const lowerBound = (18.5 * (heightInMeters * heightInMeters));
            const upperBound = (24.9 * (heightInMeters * heightInMeters));
            let currentUnit = document.querySelector('input[name="unit"]:checked').value;
            if (currentUnit === 'metric') {
                healthyRangeValue.textContent = `${lowerBound.toFixed(1)} kg - ${upperBound.toFixed(1)} kg`;
            } else {
                const lowerBoundLbs = (lowerBound / 0.453592);
                const upperBoundLbs = (upperBound / 0.453592);
                healthyRangeValue.textContent = `${lowerBoundLbs.toFixed(1)} lbs - ${upperBoundLbs.toFixed(1)} lbs`;
            }
            let relevantTips = [];
            if (bmi < 18.5) relevantTips = tips.underweight;
            else if (bmi < 25) relevantTips = tips.normal;
            else if (bmi < 30) relevantTips = tips.overweight;
            else relevantTips = tips.obese;
            healthTipsList.innerHTML = '';
            relevantTips.forEach(tip => {
                const li = document.createElement('li');
                li.textContent = tip;
                healthTipsList.appendChild(li);
            });
        }
        function getBMICategory(bmi) {
            if (bmi < 18.5) return { name: "Underweight", colorKey: "underweight" };
            if (bmi < 25) return { name: "Normal weight", colorKey: "normal" };
            if (bmi < 30) return { name: "Overweight", colorKey: "overweight" };
            if (bmi < 35) return { name: "Obesity Class I", colorKey: "obese1" };
            if (bmi < 40) return { name: "Obesity Class II", colorKey: "obese2" };
            return { name: "Obesity Class III", colorKey: "obese3" };
        }
    });
</script>