---
title: "Ideal Body Weight Calculator"
layout: tool
categories: [calculators, health]
permalink: /calculators/health/ideal-body-weight-calculator
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<div class="ideal-weight-tool-wrapper">
    <style>
        .ideal-weight-tool-wrapper {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #f0f4f8 0%, #e5e7eb 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: #1f2937;
        }

        .ideal-weight-tool-wrapper * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .ideal-weight-tool-wrapper .calculator-container {
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e2e8f0;
            max-width: 1000px;
            width: 100%;
            display: flex;
            flex-direction: column;
            color: #1f2937;
        }
        
        @media (min-width: 768px) {
            .ideal-weight-tool-wrapper .calculator-container {
                flex-direction: row;
            }
        }
        
        .ideal-weight-tool-wrapper .input-panel {
            background-color: #f8fafc;
            position: relative;
            overflow: hidden;
            padding: 30px;
            flex: 1;
        }
        
        .ideal-weight-tool-wrapper .input-panel::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #6366f1, #10b981);
        }
        
        .ideal-weight-tool-wrapper .result-panel {
            background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
            position: relative;
            overflow: hidden;
            padding: 30px;
            flex: 1;
            color: white;
        }
        
        .ideal-weight-tool-wrapper .result-panel::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 100%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
        }
        
        .ideal-weight-tool-wrapper .panel-title {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 10px;
            color: #1f2937;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .ideal-weight-tool-wrapper .panel-subtitle {
            color: #9ca3af;
            margin-bottom: 30px;
        }
        
        .ideal-weight-tool-wrapper .input-section {
            margin-bottom: 25px;
        }
        
        .ideal-weight-tool-wrapper .input-label {
            display: block;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #1f2937;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .ideal-weight-tool-wrapper .gender-toggle {
            position: relative;
            display: inline-flex;
            background-color: #e2e8f0;
            border-radius: 9999px;
            padding: 4px;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .ideal-weight-tool-wrapper .gender-toggle button {
            position: relative;
            z-index: 10;
            border: none;
            background: transparent;
            color: #475569;
            padding: 10px 28px;
            border-radius: 9999px;
            font-weight: 600;
            cursor: pointer;
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .ideal-weight-tool-wrapper .gender-toggle button.active {
            color: #6366f1;
        }
        
        .ideal-weight-tool-wrapper .gender-toggle .glider {
            position: absolute;
            top: 4px;
            height: calc(100% - 8px);
            width: 50%;
            background-color: white;
            border-radius: 9999px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .ideal-weight-tool-wrapper .slider-container {
            margin-bottom: 10px;
        }
        
        .ideal-weight-tool-wrapper .slider-value {
            font-size: 20px;
            font-weight: 700;
            color: #6366f1;
            text-align: right;
            margin-bottom: 10px;
        }
        
        .ideal-weight-tool-wrapper input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 10px;
            background: #cbd5e1;
            border-radius: 10px;
            outline: none;
            transition: all 0.3s ease;
        }
        
        .ideal-weight-tool-wrapper input[type="range"]:hover {
            opacity: 1;
            background: #a3bffa;
        }
        
        .ideal-weight-tool-wrapper input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 28px;
            height: 28px;
            background: #6366f1;
            cursor: pointer;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .ideal-weight-tool-wrapper input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            background: #4f46e5;
        }
        
        .ideal-weight-tool-wrapper input[type="range"]::-moz-range-thumb {
            width: 28px;
            height: 28px;
            background: #6366f1;
            cursor: pointer;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
        }
        
        .ideal-weight-tool-wrapper .slider-labels {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #9ca3af;
            margin-top: 5px;
        }
        
        .ideal-weight-tool-wrapper .frame-size-buttons {
            display: flex;
            gap: 12px;
        }
        
        .ideal-weight-tool-wrapper .frame-btn {
            flex: 1;
            padding: 12px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            background: white;
            cursor: pointer;
            text-align: center;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .ideal-weight-tool-wrapper .frame-btn.active {
            border-color: #6366f1;
            background-color: #eff6ff;
            color: #6366f1;
            box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.1);
        }
        
        .ideal-weight-tool-wrapper .frame-btn:hover:not(.active) {
            border-color: #a3bffa;
        }
        
        .ideal-weight-tool-wrapper .units-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
        }
        
        .ideal-weight-tool-wrapper .toggle-switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 26px;
        }
        
        .ideal-weight-tool-wrapper .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        .ideal-weight-tool-wrapper .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #e2e8f0;
            transition: .4s;
            border-radius: 34px;
        }
        
        .ideal-weight-tool-wrapper .toggle-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
        
        .ideal-weight-tool-wrapper input:checked + .toggle-slider {
            background-color: #6366f1;
        }
        
        .ideal-weight-tool-wrapper input:checked + .toggle-slider:before {
            transform: translateX(24px);
        }
        
        .ideal-weight-tool-wrapper .result-content {
            text-align: center;
            position: relative;
            z-index: 10;
        }
        
        .ideal-weight-tool-wrapper .result-title {
            font-size: 18px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 15px;
        }
        
        .ideal-weight-tool-wrapper .result-value {
            font-size: 60px;
            font-weight: 800;
            margin: 10px 0;
        }
        
        .ideal-weight-tool-wrapper .result-range {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 12px 20px;
            display: inline-block;
            margin: 15px 0;
            font-weight: 600;
        }
        
        .ideal-weight-tool-wrapper .formula-results {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
            margin-top: 25px;
            text-align: left;
            backdrop-filter: blur(10px);
        }
        
        .ideal-weight-tool-wrapper .formula-title {
            text-align: center;
            font-weight: 600;
            margin-bottom: 15px;
            color: rgba(255, 255, 255, 0.8);
        }
        
        .ideal-weight-tool-wrapper .formula-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 14px;
        }
        
        .ideal-weight-tool-wrapper .formula-item span:last-child {
            font-weight: 700;
        }
        
        .ideal-weight-tool-wrapper .bmi-meter-container {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
            margin-top: 25px;
            backdrop-filter: blur(10px);
        }
        
        .ideal-weight-tool-wrapper .bmi-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .ideal-weight-tool-wrapper .bmi-title {
            font-weight: 600;
            color: rgba(255, 255, 255, 0.8);
        }
        
        .ideal-weight-tool-wrapper .bmi-value {
            font-weight: 700;
            font-size: 20px;
        }
        
        .ideal-weight-tool-wrapper .bmi-meter {
            width: 100%;
            height: 12px;
            background: linear-gradient(90deg, #3b82f6 0%, #10b981 40%, #f59e0b 60%, #ef4444 100%);
            border-radius: 10px;
            margin: 10px 0;
            position: relative;
        }
        
        .ideal-weight-tool-wrapper .bmi-indicator {
            position: absolute;
            top: -5px;
            width: 22px;
            height: 22px;
            background: white;
            border: 3px solid #4f46e5;
            border-radius: 50%;
            transform: translateX(-50%);
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .ideal-weight-tool-wrapper .bmi-labels {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 5px;
        }
        
        .ideal-weight-tool-wrapper .bmi-category {
            text-align: center;
            font-weight: 600;
            margin-top: 10px;
            color: rgba(255, 255, 255, 0.9);
        }
        
        .ideal-weight-tool-wrapper .fade-in {
            animation: ideal-weight-fade-in 0.5s ease-in-out forwards;
        }
        
        @keyframes ideal-weight-fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .ideal-weight-tool-wrapper .pulse {
            animation: ideal-weight-pulse 2s infinite;
        }
        
        @keyframes ideal-weight-pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .ideal-weight-tool-wrapper .calculator-footer {
            text-align: center;
            font-size: 12px;
            color: #9ca3af;
            margin-top: 30px;
        }
        
        .ideal-weight-tool-wrapper .calculator-footer i {
            margin-right: 5px;
        }
        
        @media (max-width: 767px) {
            .ideal-weight-tool-wrapper .panel-title {
                font-size: 24px;
            }
            
            .ideal-weight-tool-wrapper .result-value {
                font-size: 50px;
            }
            
            .ideal-weight-tool-wrapper .input-panel, 
            .ideal-weight-tool-wrapper .result-panel {
                padding: 20px;
            }
        }
    </style>
    <div class="calculator-container">
        <div class="input-panel">
            <div>
                <h1 class="panel-title">
                    <i class="fas fa-weight-scale"></i> Ideal Weight Calculator
                </h1>
                <p class="panel-subtitle">Calculate your ideal body weight based on multiple formulas and factors.</p>
            </div>
            <div class="input-section">
                <label class="input-label">
                    <i class="fas fa-venus-mars"></i> Biological Sex
                </label>
                <div id="gender" class="gender-toggle">
                    <span class="glider"></span>
                    <button id="btn-male" class="active">
                        <i class="fas fa-mars"></i> Male
                    </button>
                    <button id="btn-female">
                        <i class="fas fa-venus"></i> Female
                    </button>
                </div>
            </div>
            <div class="input-section">
                <label class="input-label">
                    <i class="fas fa-ruler-vertical"></i> Height
                </label>
                <div class="slider-container">
                    <div id="height-display" class="slider-value">170 cm / 5'7"</div>
                    <input type="range" id="height" min="140" max="220" value="170">
                    <div class="slider-labels">
                        <span>140 cm</span>
                        <span>180 cm</span>
                        <span>220 cm</span>
                    </div>
                </div>
            </div>
            <div class="input-section">
                <label class="input-label">
                    <i class="fas fa-birthday-cake"></i> Age
                </label>
                <div class="slider-container">
                    <div id="age-display" class="slider-value">30 years</div>
                    <input type="range" id="age" min="18" max="80" value="30">
                    <div class="slider-labels">
                        <span>18 yrs</span>
                        <span>40 yrs</span>
                        <span>80 yrs</span>
                    </div>
                </div>
            </div>
            <div class="input-section">
                <label class="input-label">
                    <i class="fas fa-body"></i> Body Frame Size
                </label>
                <div class="frame-size-buttons">
                    <button class="frame-btn" data-frame="small">Small</button>
                    <button class="frame-btn active" data-frame="medium">Medium</button>
                    <button class="frame-btn" data-frame="large">Large</button>
                </div>
            </div>
            <div class="units-toggle">
                <label class="input-label">
                    <i class="fas fa-gear"></i> Units
                </label>
                <div class="toggle-container" style="display: flex; align-items: center; gap: 8px;">
                    <span>Metric</span>
                    <label class="toggle-switch">
                        <input type="checkbox" id="units-toggle">
                        <span class="toggle-slider"></span>
                    </label>
                    <span>Imperial</span>
                </div>
            </div>
            <p class="calculator-footer">
                <i class="fas fa-info-circle"></i> This calculator provides an estimate and is not a substitute for professional medical advice.
            </p>
        </div>
        <div class="result-panel">
            <div id="initial-message" class="result-content">
                <div class="pulse">
                    <i class="fas fa-weight-scale fa-3x" style="opacity: 0.7; margin-bottom: 20px;"></i>
                </div>
                <p class="result-title">Adjust the sliders to calculate your ideal weight</p>
            </div>
            <div id="result-content" class="result-content hidden">
                <h3 class="result-title">Your Ideal Weight Is About</h3>
                <p class="result-value"><span id="avg-weight">65.3</span> <span style="font-size: 0.5em;">kg</span></p>
                <div class="result-range">
                    <p>Healthy Range: <span id="weight-range">61.5 - 69.1 kg</span></p>
                </div>
                <div class="bmi-meter-container">
                    <div class="bmi-header">
                        <span class="bmi-title">Your BMI:</span>
                        <span id="bmi-value" class="bmi-value">22.1</span>
                    </div>
                    <div class="bmi-meter">
                        <div id="bmi-indicator" class="bmi-indicator" style="left: 45%;"></div>
                    </div>
                    <div class="bmi-labels">
                        <span>Underweight</span>
                        <span>Normal</span>
                        <span>Overweight</span>
                        <span>Obese</span>
                    </div>
                    <p id="bmi-category" class="bmi-category">Normal weight</p>
                </div>
                <div class="formula-results">
                    <p class="formula-title">Based on common formulas:</p>
                    <div class="formula-item"><span>Robinson Formula:</span> <span id="robinson-val">65.3 kg</span></div>
                    <div class="formula-item"><span>Miller Formula:</span> <span id="miller-val">64.2 kg</span></div>
                    <div class="formula-item"><span>Devine Formula:</span> <span id="devine-val">66.5 kg</span></div>
                    <div class="formula-item"><span>Hamwi Formula:</span> <span id="hamwi-val">65.9 kg</span></div>
                </div>
            </div>
        </div>
    </div>
    <script>
        (function() {
            const toolRoot = document.querySelector('.ideal-weight-tool-wrapper');
            if (!toolRoot) return;
            const btnMale = toolRoot.querySelector('#btn-male');
            const btnFemale = toolRoot.querySelector('#btn-female');
            const glider = toolRoot.querySelector('.glider');
            const heightSlider = toolRoot.querySelector('#height');
            const heightDisplay = toolRoot.querySelector('#height-display');
            const ageSlider = toolRoot.querySelector('#age');
            const ageDisplay = toolRoot.querySelector('#age-display');
            const frameButtons = toolRoot.querySelectorAll('.frame-btn');
            const unitsToggle = toolRoot.querySelector('#units-toggle');
            const initialMessage = toolRoot.querySelector('#initial-message');
            const resultContent = toolRoot.querySelector('#result-content');
            const avgWeightEl = toolRoot.querySelector('#avg-weight');
            const unitDisplayAvg = toolRoot.querySelector('#unit-display-avg');
            const weightRangeEl = toolRoot.querySelector('#weight-range');
            const bmiValueEl = toolRoot.querySelector('#bmi-value');
            const bmiIndicator = toolRoot.querySelector('#bmi-indicator');
            const bmiCategoryEl = toolRoot.querySelector('#bmi-category');
            const robinsonEl = toolRoot.querySelector('#robinson-val');
            const millerEl = toolRoot.querySelector('#miller-val');
            const devineEl = toolRoot.querySelector('#devine-val');
            const hamwiEl = toolRoot.querySelector('#hamwi-val');
            let state = {
                gender: 'male',
                height: 170, // cm
                age: 30,
                frame: 'medium',
                units: 'metric',
                calculated: false
            };
            const allInputs = [heightSlider, ageSlider, unitsToggle, ...frameButtons, btnMale, btnFemale];
            allInputs.forEach(input => {
                input.addEventListener('input', updateCalculations);
                input.addEventListener('click', updateCalculations);
                input.addEventListener('change', updateCalculations);
            });
            function setGender(gender) {
                state.gender = gender;
                btnMale.classList.toggle('active', gender === 'male');
                btnFemale.classList.toggle('active', gender === 'female');
                glider.style.transform = `translateX(${gender === 'male' ? '0' : '100%'})`;
            }
            btnMale.addEventListener('click', () => setGender('male'));
            btnFemale.addEventListener('click', () => setGender('female'));
            function setFrameSize(frame) {
                state.frame = frame;
                frameButtons.forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.frame === frame);
                });
            }
            frameButtons.forEach(btn => btn.addEventListener('click', () => setFrameSize(btn.dataset.frame)));
            function updateStateFromUI() {
                state.height = parseInt(heightSlider.value);
                state.age = parseInt(ageSlider.value);
                state.units = unitsToggle.checked ? 'imperial' : 'metric';
            }
            function updateDisplay() {
                ageDisplay.textContent = `${state.age} years`;
                const feet = Math.floor(state.height / 30.48);
                const inches = Math.round((state.height / 2.54) % 12);
                heightDisplay.textContent = `${state.height} cm / ${feet}'${inches}"`;
            }
            function calculateIBW() {
                let heightInInches = state.height / 2.54;
                let frameMultiplier = 1;
                if (state.frame === 'small') frameMultiplier = 0.9;
                if (state.frame === 'large') frameMultiplier = 1.1;
                const inchesOver5Feet = heightInInches > 60 ? heightInInches - 60 : 0;
                let results = {};
                if (state.gender === 'male') {
                    results.robinson = (52 + 1.9 * inchesOver5Feet);
                    results.miller = (56.2 + 1.41 * inchesOver5Feet);
                    results.devine = (50 + 2.3 * inchesOver5Feet);
                    results.hamwi = (48 + 2.7 * inchesOver5Feet);
                } else {
                    results.robinson = (49 + 1.7 * inchesOver5Feet);
                    results.miller = (53.1 + 1.36 * inchesOver5Feet);
                    results.devine = (45.5 + 2.3 * inchesOver5Feet);
                    results.hamwi = (45.5 + 2.2 * inchesOver5Feet);
                }
                for (let key in results) { results[key] *= frameMultiplier; }
                if (state.age > 35) {
                    const ageAdjustment = (state.age - 35) * 0.05;
                    for (let key in results) { results[key] += ageAdjustment; }
                }
                return results;
            }
            function calculateBMI(weightKg) {
                const heightInMeters = state.height / 100;
                return weightKg / (heightInMeters * heightInMeters);
            }
            function updateCalculations() {
                if (!state.calculated) {
                    initialMessage.style.display = 'none';
                    resultContent.classList.remove('hidden');
                    resultContent.classList.add('fade-in');
                    state.calculated = true;
                }
                updateStateFromUI();
                updateDisplay();
                const ibwResultsKg = calculateIBW();
                const toLbs = 2.20462;
                const ibwResults = state.units === 'metric' ? ibwResultsKg : Object.keys(ibwResultsKg).reduce((acc, key) => { acc[key] = ibwResultsKg[key] * toLbs; return acc; }, {});
                const weights = Object.values(ibwResults);
                const avgWeight = weights.reduce((sum, val) => sum + val, 0) / weights.length;
                const minWeight = Math.min(...weights);
                const maxWeight = Math.max(...weights);
                const unitLabel = state.units === 'metric' ? 'kg' : 'lbs';
                const bmi = calculateBMI(ibwResultsKg.robinson);
                avgWeightEl.textContent = avgWeight.toFixed(1);
                weightRangeEl.textContent = `${minWeight.toFixed(1)} - ${maxWeight.toFixed(1)} ${unitLabel}`;
                bmiValueEl.textContent = bmi.toFixed(1);
                const bmiPosition = Math.min(Math.max((bmi - 16) / (40 - 16) * 100, 0), 100);
                bmiIndicator.style.left = `${bmiPosition}%`;
                let bmiCategory = '';
                if (bmi < 18.5) bmiCategory = 'Underweight';
                else if (bmi < 25) bmiCategory = 'Normal weight';
                else if (bmi < 30) bmiCategory = 'Overweight';
                else bmiCategory = 'Obese';
                bmiCategoryEl.textContent = bmiCategory;
                robinsonEl.textContent = `${ibwResults.robinson.toFixed(1)} ${unitLabel}`;
                millerEl.textContent = `${ibwResults.miller.toFixed(1)} ${unitLabel}`;
                devineEl.textContent = `${ibwResults.devine.toFixed(1)} ${unitLabel}`;
                hamwiEl.textContent = `${ibwResults.hamwi.toFixed(1)} ${unitLabel}`;
            }
            updateDisplay();
        })();
    </script>
</div>
