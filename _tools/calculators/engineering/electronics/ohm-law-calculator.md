---
title: "Ohm's Law Calculator: Calculate Voltage, Current, and Resistance"
localtitle: "Ohm's Law Calculator"
layout: tool
categories: [electricalCalc, engineeringCalc, calculators]
permalink: /calculators/electrical/ohms-law-calculator
description: "Free Ohm's Law calculator to instantly calculate voltage (V), current (I), resistance (R), and power (P). Features circuit diagrams, real-world examples, and comprehensive electrical formulas. Perfect for students, engineers, and electronics hobbyists."
faq:
  - q: "What is Ohm's Law and its formula?"
    a: "Ohm's Law states that the current through a conductor between two points is directly proportional to the voltage across the two points. The formula is V = I × R, where V is voltage (volts), I is current (amperes), and R is resistance (ohms)."
  - q: "How do I calculate power using Ohm's Law?"
    a: "Power can be calculated using three formulas: P = V × I (voltage times current), P = I² × R (current squared times resistance), or P = V² / R (voltage squared divided by resistance). Our calculator automatically computes power along with other values."
  - q: "What are the units used in Ohm's Law calculations?"
    a: "The standard units are: Voltage (V) in Volts, Current (I) in Amperes (Amps), Resistance (R) in Ohms (Ω), and Power (P) in Watts (W). Our calculator supports metric prefixes like milli, kilo, and mega."
  - q: "Can Ohm's Law be applied to AC circuits?"
    a: "Basic Ohm's Law applies directly to DC circuits and purely resistive AC circuits. For AC circuits with inductance or capacitance, you need to consider impedance (Z) instead of resistance (R), and the calculations become more complex."
  - q: "What is the relationship between watts, volts, and amps?"
    a: "The relationship is defined by the power formula: Watts = Volts × Amps (P = V × I). For example, a device using 2 amps at 120 volts consumes 240 watts of power."
  - q: "Why is my calculated value showing as infinity or NaN?"
    a: "This typically happens when you enter zero for resistance while calculating current (I = V/R), which would result in division by zero. Make sure all values are greater than zero and within reasonable ranges."
  - q: "What safety considerations should I keep in mind when working with electricity?"
    a: "Always prioritize safety: turn off power before working on circuits, use appropriate protective equipment, verify calculations before applying them, never exceed component ratings, and consult qualified electricians for high-voltage or complex installations."
---

<style>
    :root {
        --ohm-primary: #3b82f6;
        --ohm-primary-dark: #2563eb;
        --ohm-secondary: #10b981;
        --ohm-secondary-dark: #059669;
        --ohm-accent: #f59e0b;
        --ohm-danger: #ef4444;
        --ohm-warning: #f97316;
        --ohm-info: #06b6d4;
        --ohm-bg-main: #ffffff;
        --ohm-bg-card: #f9fafb;
        --ohm-bg-hover: #f3f4f6;
        --ohm-text-primary: #111827;
        --ohm-text-secondary: #4b5563;
        --ohm-text-muted: #9ca3af;
        --ohm-border: #e5e7eb;
        --ohm-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
        --ohm-shadow-md: 0 4px 6px rgba(0,0,0,0.07);
        --ohm-shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
    }

    html[data-theme="dark"] .ohm-wrapper {
        --ohm-primary: #60a5fa;
        --ohm-primary-dark: #3b82f6;
        --ohm-secondary: #34d399;
        --ohm-secondary-dark: #10b981;
        --ohm-accent: #fbbf24;
        --ohm-danger: #f87171;
        --ohm-warning: #fb923c;
        --ohm-info: #22d3ee;
        --ohm-bg-main: #0f172a;
        --ohm-bg-card: #1e293b;
        --ohm-bg-hover: #334155;
        --ohm-text-primary: #f1f5f9;
        --ohm-text-secondary: #cbd5e1;
        --ohm-text-muted: #64748b;
        --ohm-border: #334155;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .ohm-wrapper {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: var(--ohm-bg-main);
        color: var(--ohm-text-primary);
        line-height: 1.6;
        transition: background-color 0.3s, color 0.3s;
    }

    .ohm-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    }

    .ohm-header {
        text-align: center;
        padding: 2rem 0;
        margin-bottom: 2rem;
    }

    .ohm-header h1 {
        font-size: 2.5rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--ohm-primary) 0%, var(--ohm-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;
    }

    .ohm-header p {
        font-size: 1.125rem;
        color: var(--ohm-text-secondary);
    }

    .ohm-main-grid {
        display: grid;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
        .ohm-main-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 1024px) {
        .ohm-main-grid {
            grid-template-columns: 1.2fr 1fr;
        }
    }

    .ohm-card {
        background: var(--ohm-bg-card);
        border-radius: 12px;
        border: 1px solid var(--ohm-border);
        overflow: hidden;
        transition: all 0.3s;
    }

    .ohm-card-header {
        padding: 1.25rem;
        border-bottom: 1px solid var(--ohm-border);
    }

    .ohm-card-header h2 {
        font-size: 1.25rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .ohm-icon {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, var(--ohm-primary), var(--ohm-secondary));
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1rem;
    }

    .ohm-card-body {
        padding: 1.25rem;
    }

    .ohm-calculator-mode {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        padding: 0.25rem;
        background: var(--ohm-bg-hover);
        border-radius: 8px;
    }

    .ohm-mode-btn {
        flex: 1;
        padding: 0.5rem;
        border: none;
        background: transparent;
        color: var(--ohm-text-secondary);
        font-weight: 600;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 0.875rem;
    }

    .ohm-mode-btn.active {
        background: var(--ohm-bg-main);
        color: var(--ohm-primary);
        box-shadow: var(--ohm-shadow-sm);
    }

    .ohm-input-group {
        margin-bottom: 1rem;
    }

    .ohm-input-group label {
        display: block;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--ohm-text-secondary);
        margin-bottom: 0.5rem;
    }

    .ohm-input-wrapper {
        display: flex;
        gap: 0.5rem;
    }

    .ohm-input {
        flex: 1;
        padding: 0.75rem;
        background: var(--ohm-bg-main);
        border: 1px solid var(--ohm-border);
        border-radius: 6px;
        font-size: 1rem;
        color: var(--ohm-text-primary);
        transition: all 0.2s;
    }

    .ohm-input:focus {
        outline: none;
        border-color: var(--ohm-primary);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .ohm-input:disabled {
        background: var(--ohm-bg-hover);
        cursor: not-allowed;
        opacity: 0.6;
    }

    .ohm-unit-select {
        padding: 0.75rem;
        background: var(--ohm-bg-main);
        border: 1px solid var(--ohm-border);
        border-radius: 6px;
        font-size: 0.875rem;
        color: var(--ohm-text-primary);
        cursor: pointer;
    }

    .ohm-btn {
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        margin-top: 1rem;
    }

    .ohm-btn-primary {
        background: linear-gradient(135deg, var(--ohm-primary) 0%, var(--ohm-primary-dark) 100%);
        color: white;
        border: none;
    }

    .ohm-btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: var(--ohm-shadow-md);
    }

    .ohm-btn-secondary {
        background: var(--ohm-bg-hover);
        color: var(--ohm-text-secondary);
        border: 1px solid var(--ohm-border);
    }

    .ohm-results-card {
        background: var(--ohm-bg-card);
        border-radius: 12px;
        border: 1px solid var(--ohm-border);
        overflow: hidden;
    }

    .ohm-circuit-diagram {
        padding: 2rem;
        background: var(--ohm-bg-main);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
        border-bottom: 1px solid var(--ohm-border);
    }

    .ohm-circuit-svg {
        max-width: 100%;
        height: auto;
    }

    .ohm-results-display {
        padding: 1.5rem;
    }

    .ohm-result-item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;
        background: var(--ohm-bg-main);
        border-radius: 8px;
    }

    .ohm-result-label {
        font-size: 0.875rem;
        color: var(--ohm-text-muted);
        margin-bottom: 0.25rem;
    }

    .ohm-result-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--ohm-primary);
    }

    .ohm-result-unit {
        font-size: 1rem;
        color: var(--ohm-text-secondary);
        font-weight: 400;
    }

    .ohm-formula-display {
        margin-top: 1.5rem;
        padding: 1rem;
        background: var(--ohm-bg-hover);
        border-radius: 8px;
        text-align: center;
    }

    .ohm-formula-text {
        font-size: 1.125rem;
        font-family: 'Courier New', monospace;
        color: var(--ohm-text-primary);
    }

    .ohm-info-section {
        margin-bottom: 2rem;
    }

    .ohm-info-grid {
        display: grid;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
        .ohm-info-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .ohm-info-card {
        background: var(--ohm-bg-card);
        border-radius: 12px;
        border: 1px solid var(--ohm-border);
        padding: 1.5rem;
    }

    .ohm-info-card h3 {
        font-size: 1.125rem;
        font-weight: 700;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .ohm-info-icon {
        width: 24px;
        height: 24px;
        background: var(--ohm-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 0.75rem;
    }

    .ohm-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 0.5rem;
    }

    .ohm-table th,
    .ohm-table td {
        padding: 0.5rem;
        text-align: left;
        border-bottom: 1px solid var(--ohm-border);
    }

    .ohm-table th {
        font-weight: 600;
        color: var(--ohm-text-secondary);
        font-size: 0.875rem;
    }

    .ohm-table td {
        color: var(--ohm-text-primary);
    }

    .ohm-examples-section {
        background: var(--ohm-bg-card);
        border-radius: 12px;
        border: 1px solid var(--ohm-border);
        padding: 2rem;
        margin-bottom: 2rem;
    }

    .ohm-example-grid {
        display: grid;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    @media (min-width: 768px) {
        .ohm-example-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .ohm-example-card {
        background: var(--ohm-bg-main);
        border: 1px solid var(--ohm-border);
        border-radius: 8px;
        padding: 1rem;
        transition: all 0.2s;
        cursor: pointer;
    }

    .ohm-example-card:hover {
        border-color: var(--ohm-primary);
        transform: translateY(-2px);
    }

    .ohm-example-title {
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .ohm-example-values {
        font-size: 0.875rem;
        color: var(--ohm-text-secondary);
    }

    .ohm-related-tools-section {
        margin: 2rem 0;
        padding: 1.5rem;
        background: var(--ohm-bg-card);
        border-radius: 12px;
        border: 1px solid var(--ohm-border);
    }

    .ohm-related-tools-section h3 {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .ohm-related-tools-grid {
        display: grid;
        gap: 1rem;
        margin-top: 1rem;
    }

    @media (min-width: 768px) {
        .ohm-related-tools-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .ohm-tool-card {
        background: var(--ohm-bg-main);
        border: 1px solid var(--ohm-border);
        border-radius: 8px;
        padding: 1rem;
        transition: all 0.2s;
        cursor: pointer;
    }

    .ohm-tool-card:hover {
        border-color: var(--ohm-primary);
        transform: translateY(-2px);
    }

    .ohm-tool-title {
        font-weight: 600;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .ohm-tool-description {
        font-size: 0.875rem;
        color: var(--ohm-text-secondary);
    }

    .ohm-faq-section {
        background: var(--ohm-bg-card);
        border-radius: 12px;
        border: 1px solid var(--ohm-border);
        padding: 2rem;
    }

    .ohm-faq-item {
        margin-bottom: 1rem;
        border: 1px solid var(--ohm-border);
        border-radius: 8px;
        overflow: hidden;
    }

    .ohm-faq-question {
        padding: 1rem;
        background: var(--ohm-bg-main);
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ohm-faq-question:hover {
        background: var(--ohm-bg-hover);
    }

    .ohm-faq-question i {
        transition: transform 0.3s;
    }

    .ohm-faq-item.active .ohm-faq-question i {
        transform: rotate(180deg);
    }

    .ohm-faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
    }

    .ohm-faq-item.active .ohm-faq-answer {
        max-height: 300px;
    }

    .ohm-faq-answer p {
        padding: 1rem;
        color: var(--ohm-text-secondary);
    }

    .ohm-notification {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        background: var(--ohm-bg-card);
        border: 1px solid var(--ohm-border);
        border-radius: 8px;
        padding: 1rem 1.5rem;
        box-shadow: var(--ohm-shadow-lg);
        transform: translateX(400px);
        opacity: 0;
        transition: all 0.3s;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .ohm-notification.show {
        transform: translateX(0);
        opacity: 1;
    }

    .ohm-notification-success {
        border-color: var(--ohm-secondary);
    }

    .ohm-notification-error {
        border-color: var(--ohm-danger);
    }

    @media (max-width: 768px) {
        .ohm-header h1 {
            font-size: 2rem;
        }
        
        .ohm-main-grid {
            grid-template-columns: 1fr;
        }
        
        .ohm-notification {
            left: 1rem;
            right: 1rem;
            transform: translateY(100px);
        }
        
        .ohm-notification.show {
            transform: translateY(0);
        }
    }
</style>

<div class="ohm-wrapper">
    <div class="ohm-container">
        <div class="ohm-header">
            <h1>Ohm's Law Calculator</h1>
            <p>Calculate voltage, current, resistance, and power with our comprehensive electrical calculator</p>
        </div>

        <div class="ohm-main-grid">
            <div class="ohm-card">
                <div class="ohm-card-header">
                    <h2><span class="ohm-icon">⚡</span> Calculator</h2>
                </div>
                <div class="ohm-card-body">
                    <div class="ohm-calculator-mode">
                        <button class="ohm-mode-btn active" data-mode="voltage">Calculate Voltage</button>
                        <button class="ohm-mode-btn" data-mode="current">Calculate Current</button>
                        <button class="ohm-mode-btn" data-mode="resistance">Calculate Resistance</button>
                        <button class="ohm-mode-btn" data-mode="power">Calculate Power</button>
                    </div>
                    
                    <div id="voltageInputs" class="ohm-input-section">
                        <div class="ohm-input-group">
                            <label>Current (I)</label>
                            <div class="ohm-input-wrapper">
                                <input type="number" class="ohm-input" id="currentInput" placeholder="Enter current">
                                <select class="ohm-unit-select" id="currentUnit">
                                    <option value="A">A (Amps)</option>
                                    <option value="mA">mA</option>
                                    <option value="μA">μA</option>
                                </select>
                            </div>
                        </div>
                        <div class="ohm-input-group">
                            <label>Resistance (R)</label>
                            <div class="ohm-input-wrapper">
                                <input type="number" class="ohm-input" id="resistanceInput" placeholder="Enter resistance">
                                <select class="ohm-unit-select" id="resistanceUnit">
                                    <option value="Ω">Ω (Ohms)</option>
                                    <option value="kΩ">kΩ</option>
                                    <option value="MΩ">MΩ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div id="currentInputs" class="ohm-input-section" style="display: none;">
                        <div class="ohm-input-group">
                            <label>Voltage (V)</label>
                            <div class="ohm-input-wrapper">
                                <input type="number" class="ohm-input" id="voltageInput2" placeholder="Enter voltage">
                                <select class="ohm-unit-select" id="voltageUnit2">
                                    <option value="V">V (Volts)</option>
                                    <option value="mV">mV</option>
                                    <option value="kV">kV</option>
                                </select>
                            </div>
                        </div>
                        <div class="ohm-input-group">
                            <label>Resistance (R)</label>
                            <div class="ohm-input-wrapper">
                                <input type="number" class="ohm-input" id="resistanceInput2" placeholder="Enter resistance">
                                <select class="ohm-unit-select" id="resistanceUnit2">
                                    <option value="Ω">Ω (Ohms)</option>
                                    <option value="kΩ">kΩ</option>
                                    <option value="MΩ">MΩ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div id="resistanceInputs" class="ohm-input-section" style="display: none;">
                        <div class="ohm-input-group">
                            <label>Voltage (V)</label>
                            <div class="ohm-input-wrapper">
                                <input type="number" class="ohm-input" id="voltageInput3" placeholder="Enter voltage">
                                <select class="ohm-unit-select" id="voltageUnit3">
                                    <option value="V">V (Volts)</option>
                                    <option value="mV">mV</option>
                                    <option value="kV">kV</option>
                                </select>
                            </div>
                        </div>
                        <div class="ohm-input-group">
                            <label>Current (I)</label>
                            <div class="ohm-input-wrapper">
                                <input type="number" class="ohm-input" id="currentInput3" placeholder="Enter current">
                                <select class="ohm-unit-select" id="currentUnit3">
                                    <option value="A">A (Amps)</option>
                                    <option value="mA">mA</option>
                                    <option value="μA">μA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div id="powerInputs" class="ohm-input-section" style="display: none;">
                        <div class="ohm-input-group">
                            <label>Voltage (V)</label>
                            <div class="ohm-input-wrapper">
                                <input type="number" class="ohm-input" id="voltageInput4" placeholder="Enter voltage">
                                <select class="ohm-unit-select" id="voltageUnit4">
                                    <option value="V">V (Volts)</option>
                                    <option value="mV">mV</option>
                                    <option value="kV">kV</option>
                                </select>
                            </div>
                        </div>
                        <div class="ohm-input-group">
                            <label>Current (I)</label>
                            <div class="ohm-input-wrapper">
                                <input type="number" class="ohm-input" id="currentInput4" placeholder="Enter current">
                                <select class="ohm-unit-select" id="currentUnit4">
                                    <option value="A">A (Amps)</option>
                                    <option value="mA">mA</option>
                                    <option value="μA">μA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <button class="ohm-btn ohm-btn-primary" id="calculateBtn">
                        <i class="fas fa-calculator"></i> Calculate
                    </button>
                    <button class="ohm-btn ohm-btn-secondary" id="resetBtn">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                </div>
            </div>

            <div class="ohm-results-card">
                <div class="ohm-circuit-diagram">
                    <svg class="ohm-circuit-svg" width="300" height="200" viewBox="0 0 300 200">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                             refX="10" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="var(--ohm-primary)" />
                            </marker>
                        </defs>
                        <!-- Circuit -->
                        <line x1="50" y1="50" x2="250" y2="50" stroke="var(--ohm-text-primary)" stroke-width="2"/>
                        <line x1="250" y1="50" x2="250" y2="150" stroke="var(--ohm-text-primary)" stroke-width="2"/>
                        <line x1="250" y1="150" x2="50" y2="150" stroke="var(--ohm-text-primary)" stroke-width="2"/>
                        <line x1="50" y1="150" x2="50" y2="120" stroke="var(--ohm-text-primary)" stroke-width="2"/>
                        <line x1="50" y1="80" x2="50" y2="50" stroke="var(--ohm-text-primary)" stroke-width="2"/>
                        
                        <!-- Battery -->
                        <line x1="35" y1="80" x2="65" y2="80" stroke="var(--ohm-text-primary)" stroke-width="2"/>
                        <line x1="40" y1="120" x2="60" y2="120" stroke="var(--ohm-text-primary)" stroke-width="2"/>
                        <text x="70" y="105" fill="var(--ohm-text-primary)" font-size="14">V</text>
                        
                        <!-- Resistor -->
                        <rect x="130" y="40" width="40" height="20" fill="none" stroke="var(--ohm-text-primary)" stroke-width="2"/>
                        <text x="145" y="30" fill="var(--ohm-text-primary)" font-size="14" text-anchor="middle">R</text>
                        
                        <!-- Current Arrow -->
                        <line x1="100" y1="30" x2="130" y2="30" stroke="var(--ohm-primary)" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <text x="115" y="20" fill="var(--ohm-primary)" font-size="14" text-anchor="middle">I</text>
                    </svg>
                </div>
                <div class="ohm-results-display">
                    <div class="ohm-result-item">
                        <div>
                            <div class="ohm-result-label">Voltage</div>
                            <div class="ohm-result-value"><span id="voltageResult">0</span> <span class="ohm-result-unit">V</span></div>
                        </div>
                        <div>
                            <div class="ohm-result-label">Current</div>
                            <div class="ohm-result-value"><span id="currentResult">0</span> <span class="ohm-result-unit">A</span></div>
                        </div>
                    </div>
                    <div class="ohm-result-item">
                        <div>
                            <div class="ohm-result-label">Resistance</div>
                            <div class="ohm-result-value"><span id="resistanceResult">0</span> <span class="ohm-result-unit">Ω</span></div>
                        </div>
                        <div>
                            <div class="ohm-result-label">Power</div>
                            <div class="ohm-result-value"><span id="powerResult">0</span> <span class="ohm-result-unit">W</span></div>
                        </div>
                    </div>
                    <div class="ohm-formula-display">
                        <div class="ohm-formula-text" id="formulaDisplay">V = I × R</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="ohm-info-section">
            <div class="ohm-info-grid">
                <div class="ohm-info-card">
                    <h3><span class="ohm-info-icon">📊</span> Common Electrical Values</h3>
                    <table class="ohm-table">
                        <thead>
                            <tr>
                                <th>Component</th>
                                <th>Typical Values</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>LED</td>
                                <td>1.8-3.3V, 10-20mA</td>
                            </tr>
                            <tr>
                                <td>USB Port</td>
                                <td>5V, 0.5-2.4A</td>
                            </tr>
                            <tr>
                                <td>Wall Outlet (US)</td>
                                <td>120V, 15-20A</td>
                            </tr>
                            <tr>
                                <td>Car Battery</td>
                                <td>12V, 40-100A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="ohm-info-card">
                    <h3><span class="ohm-info-icon">🔌</span> Unit Conversions</h3>
                    <table class="ohm-table">
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Conversion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1 kV</td>
                                <td>1,000 V</td>
                            </tr>
                            <tr>
                                <td>1 A</td>
                                <td>1,000 mA</td>
                            </tr>
                            <tr>
                                <td>1 mA</td>
                                <td>1,000 μA</td>
                            </tr>
                            <tr>
                                <td>1 MΩ</td>
                                <td>1,000,000 Ω</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="ohm-examples-section">
            <h3>Common Examples</h3>
            <div class="ohm-example-grid">
                <div class="ohm-example-card" onclick="loadExample('led')">
                    <div class="ohm-example-title">💡 LED Circuit</div>
                    <div class="ohm-example-values">9V battery, 470Ω resistor</div>
                </div>
                <div class="ohm-example-card" onclick="loadExample('usb')">
                    <div class="ohm-example-title">🔌 USB Charging</div>
                    <div class="ohm-example-values">5V, 2A output</div>
                </div>
                <div class="ohm-example-card" onclick="loadExample('household')">
                    <div class="ohm-example-title">🏠 Household Bulb</div>
                    <div class="ohm-example-values">120V, 60W bulb</div>
                </div>
            </div>
        </div>

        <div class="ohm-related-tools-section">
            <h3><span style="width: 24px; height: 24px; background: var(--ohm-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.75rem;">🔧</span> Other Helpful Electrical Calculators You Might Need</h3>
            <p style="color: var(--ohm-text-secondary); margin-bottom: 1rem;">Hey there! If you're working with electronics or electrical stuff, these other tools might come in handy for your projects - I use them myself sometimes when the ohm law ain't enough for what I'm trying to figure out.</p>
            
            <div class="ohm-related-tools-grid">
                <div class="ohm-tool-card" onclick="window.location.href='/calculators/electrical/wire-size-calculator'">
                    <div class="ohm-tool-title">📏 Wire Size Calculator</div>
                    <div class="ohm-tool-description">Figuring out what gauge wire you need for your project can be tricky, this helps make sure you don't overload anything</div>
                </div>
                <div class="ohm-tool-card" onclick="window.location.href='/calculators/electrical/voltage-divider'">
                    <div class="ohm-tool-title">🔋 Voltage Divider Calculator</div>
                    <div class="ohm-tool-description">Super useful when you need to get a specific voltage from two resistors, saves you from doing the math manually</div>
                </div>
                <div class="ohm-tool-card" onclick="window.location.href='/calculators/electrical/battery-life'">
                    <div class="ohm-tool-title">🔋 Battery Life Calculator</div>
                    <div class="ohm-tool-description">Wanna know how long your battery will last? This tells you based on the current draw and capacity</div>
                </div>
                <div class="ohm-tool-card" onclick="window.location.href='/calculators/electrical/led-resistor'">
                    <div class="ohm-tool-title">💡 LED Resistor Calculator</div>
                    <div class="ohm-tool-description">Takes the guesswork out of picking the right resistor for your LEDs so you don't burn them out accidentally</div>
                </div>
            </div>
        </div>

        <div class="ohm-faq-section">
            <h3>Frequently Asked Questions</h3>
            {% for item in page.faq %}
            <div class="ohm-faq-item" onclick="toggleOhmFAQ(this)">
                <div class="ohm-faq-question">
                    {{ item.q }}
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="ohm-faq-answer">
                    <p>{{ item.a }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>

<div class="ohm-notification" id="ohmNotification">
    <i class="fas fa-check-circle"></i>
    <span id="ohmNotificationText"></span>
</div>

<script>
    // Global functions
    function toggleOhmFAQ(element) {
        element.classList.toggle('active');
    }

    function loadExample(type) {
        const examples = {
            'led': {
                mode: 'current',
                voltage: { value: 9, unit: 'V' },
                resistance: { value: 470, unit: 'Ω' }
            },
            'usb': {
                mode: 'power',
                voltage: { value: 5, unit: 'V' },
                current: { value: 2, unit: 'A' }
            },
            'household': {
                mode: 'current',
                voltage: { value: 120, unit: 'V' },
                power: { value: 60, unit: 'W' }
            }
        };

        const example = examples[type];
        if (example) {
            // Switch to appropriate mode
            document.querySelector(`[data-mode="${example.mode}"]`).click();
            
            // Set values based on example
            setTimeout(() => {
                if (example.voltage) {
                    const voltageInput = document.querySelector('.ohm-input-section:not([style*="display: none"]) input[id*="voltage"]');
                    const voltageUnit = document.querySelector('.ohm-input-section:not([style*="display: none"]) select[id*="voltage"]');
                    if (voltageInput && voltageUnit) {
                        voltageInput.value = example.voltage.value;
                        voltageUnit.value = example.voltage.unit;
                    }
                }
                if (example.current) {
                    const currentInput = document.querySelector('.ohm-input-section:not([style*="display: none"]) input[id*="current"]');
                    const currentUnit = document.querySelector('.ohm-input-section:not([style*="display: none"]) select[id*="current"]');
                    if (currentInput && currentUnit) {
                        currentInput.value = example.current.value;
                        currentUnit.value = example.current.unit;
                    }
                }
                if (example.resistance) {
                    const resistanceInput = document.querySelector('.ohm-input-section:not([style*="display: none"]) input[id*="resistance"]');
                    const resistanceUnit = document.querySelector('.ohm-input-section:not([style*="display: none"]) select[id*="resistance"]');
                    if (resistanceInput && resistanceUnit) {
                        resistanceInput.value = example.resistance.value;
                        resistanceUnit.value = example.resistance.unit;
                    }
                }
                
                showNotification('Example loaded! Click Calculate to see results.', 'success');
            }, 100);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Variables
        let currentMode = 'voltage';
        const modeButtons = document.querySelectorAll('.ohm-mode-btn');
        const calculateBtn = document.getElementById('calculateBtn');
        const resetBtn = document.getElementById('resetBtn');
        const inputSections = {
            'voltage': document.getElementById('voltageInputs'),
            'current': document.getElementById('currentInputs'),
                        'resistance': document.getElementById('resistanceInputs'),
            'power': document.getElementById('powerInputs')
        };

        // Unit conversion factors
        const unitConversions = {
            voltage: {
                'V': 1,
                'mV': 0.001,
                'kV': 1000
            },
            current: {
                'A': 1,
                'mA': 0.001,
                'μA': 0.000001
            },
            resistance: {
                'Ω': 1,
                'kΩ': 1000,
                'MΩ': 1000000
            },
            power: {
                'W': 1,
                'mW': 0.001,
                'kW': 1000
            }
        };

        // Mode switching
        modeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                modeButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentMode = this.dataset.mode;
                
                // Hide all input sections
                Object.values(inputSections).forEach(section => {
                    section.style.display = 'none';
                });
                
                // Show relevant input section
                inputSections[currentMode].style.display = 'block';
                
                updateFormula();
            });
        });

        // Calculate button
        calculateBtn.addEventListener('click', calculate);
        
        // Reset button
        resetBtn.addEventListener('click', reset);

        // Input validation
        document.querySelectorAll('.ohm-input').forEach(input => {
            input.addEventListener('input', function() {
                if (this.value < 0) {
                    this.value = '';
                }
            });
        });

        function updateFormula() {
            const formulas = {
                'voltage': 'V = I × R',
                'current': 'I = V / R',
                'resistance': 'R = V / I',
                'power': 'P = V × I'
            };
            document.getElementById('formulaDisplay').textContent = formulas[currentMode];
        }

        function convertToBaseUnit(value, unitType, unit) {
            return value * unitConversions[unitType][unit];
        }

        function formatResult(value, unitType) {
            if (value === 0) return { value: '0', unit: unitType === 'resistance' ? 'Ω' : unitType === 'current' ? 'A' : unitType === 'voltage' ? 'V' : 'W' };
            
            const units = {
                voltage: ['mV', 'V', 'kV'],
                current: ['μA', 'mA', 'A'],
                resistance: ['Ω', 'kΩ', 'MΩ'],
                power: ['mW', 'W', 'kW']
            };
            
            const factors = {
                voltage: [0.001, 1, 1000],
                current: [0.000001, 0.001, 1],
                resistance: [1, 1000, 1000000],
                power: [0.001, 1, 1000]
            };
            
            const unitList = units[unitType];
            const factorList = factors[unitType];
            
            // Find appropriate unit
            let selectedUnit = unitList[1]; // Default to middle unit
            let selectedValue = value;
            
            if (value < 1) {
                for (let i = 0; i < factorList.length; i++) {
                    if (value >= factorList[i] * 0.001) {
                        selectedValue = value / factorList[i];
                        selectedUnit = unitList[i];
                        break;
                    }
                }
            } else if (value >= 1000) {
                for (let i = factorList.length - 1; i >= 0; i--) {
                    if (value <= factorList[i] * 1000) {
                        selectedValue = value / factorList[i];
                        selectedUnit = unitList[i];
                        break;
                    }
                }
            }
            
            // Format value
            let formattedValue;
            if (selectedValue >= 100) {
                formattedValue = selectedValue.toFixed(1);
            } else if (selectedValue >= 10) {
                formattedValue = selectedValue.toFixed(2);
            } else {
                formattedValue = selectedValue.toFixed(3);
            }
            
            // Remove trailing zeros
            formattedValue = parseFloat(formattedValue).toString();
            
            return { value: formattedValue, unit: selectedUnit };
        }

        function calculate() {
            try {
                let voltage, current, resistance, power;
                
                switch(currentMode) {
                    case 'voltage':
                        // Get inputs
                        const currentInput = parseFloat(document.getElementById('currentInput').value);
                        const currentUnit = document.getElementById('currentUnit').value;
                        const resistanceInput = parseFloat(document.getElementById('resistanceInput').value);
                        const resistanceUnit = document.getElementById('resistanceUnit').value;
                        
                        if (isNaN(currentInput) || isNaN(resistanceInput)) {
                            showNotification('Please enter valid values for current and resistance.', 'error');
                            return;
                        }
                        
                        // Convert to base units
                        current = convertToBaseUnit(currentInput, 'current', currentUnit);
                        resistance = convertToBaseUnit(resistanceInput, 'resistance', resistanceUnit);
                        
                        // Calculate
                        voltage = current * resistance;
                        power = voltage * current;
                        break;
                        
                    case 'current':
                        // Get inputs
                        const voltageInput2 = parseFloat(document.getElementById('voltageInput2').value);
                        const voltageUnit2 = document.getElementById('voltageUnit2').value;
                        const resistanceInput2 = parseFloat(document.getElementById('resistanceInput2').value);
                        const resistanceUnit2 = document.getElementById('resistanceUnit2').value;
                        
                        if (isNaN(voltageInput2) || isNaN(resistanceInput2)) {
                            showNotification('Please enter valid values for voltage and resistance.', 'error');
                            return;
                        }
                        
                        if (resistanceInput2 === 0) {
                            showNotification('Resistance cannot be zero.', 'error');
                            return;
                        }
                        
                        // Convert to base units
                        voltage = convertToBaseUnit(voltageInput2, 'voltage', voltageUnit2);
                        resistance = convertToBaseUnit(resistanceInput2, 'resistance', resistanceUnit2);
                        
                        // Calculate
                        current = voltage / resistance;
                        power = voltage * current;
                        break;
                        
                    case 'resistance':
                        // Get inputs
                        const voltageInput3 = parseFloat(document.getElementById('voltageInput3').value);
                        const voltageUnit3 = document.getElementById('voltageUnit3').value;
                        const currentInput3 = parseFloat(document.getElementById('currentInput3').value);
                        const currentUnit3 = document.getElementById('currentUnit3').value;
                        
                        if (isNaN(voltageInput3) || isNaN(currentInput3)) {
                            showNotification('Please enter valid values for voltage and current.', 'error');
                            return;
                        }
                        
                        if (currentInput3 === 0) {
                            showNotification('Current cannot be zero.', 'error');
                            return;
                        }
                        
                        // Convert to base units
                        voltage = convertToBaseUnit(voltageInput3, 'voltage', voltageUnit3);
                        current = convertToBaseUnit(currentInput3, 'current', currentUnit3);
                        
                        // Calculate
                        resistance = voltage / current;
                        power = voltage * current;
                        break;
                        
                    case 'power':
                        // Get inputs
                        const voltageInput4 = parseFloat(document.getElementById('voltageInput4').value);
                        const voltageUnit4 = document.getElementById('voltageUnit4').value;
                        const currentInput4 = parseFloat(document.getElementById('currentInput4').value);
                        const currentUnit4 = document.getElementById('currentUnit4').value;
                        
                        if (isNaN(voltageInput4) || isNaN(currentInput4)) {
                            showNotification('Please enter valid values for voltage and current.', 'error');
                            return;
                        }
                        
                        // Convert to base units
                        voltage = convertToBaseUnit(voltageInput4, 'voltage', voltageUnit4);
                        current = convertToBaseUnit(currentInput4, 'current', currentUnit4);
                        
                        // Calculate
                        power = voltage * current;
                        resistance = voltage / current;
                        break;
                }
                
                // Update results
                const voltageFormatted = formatResult(voltage, 'voltage');
                const currentFormatted = formatResult(current, 'current');
                const resistanceFormatted = formatResult(resistance, 'resistance');
                const powerFormatted = formatResult(power, 'power');
                
                document.getElementById('voltageResult').textContent = voltageFormatted.value;
                document.getElementById('voltageResult').nextElementSibling.textContent = voltageFormatted.unit;
                
                document.getElementById('currentResult').textContent = currentFormatted.value;
                document.getElementById('currentResult').nextElementSibling.textContent = currentFormatted.unit;
                
                document.getElementById('resistanceResult').textContent = resistanceFormatted.value;
                document.getElementById('resistanceResult').nextElementSibling.textContent = resistanceFormatted.unit;
                
                document.getElementById('powerResult').textContent = powerFormatted.value;
                document.getElementById('powerResult').nextElementSibling.textContent = powerFormatted.unit;
                
                // Highlight calculated value
                highlightResult(currentMode);
                
                showNotification('Calculation complete!', 'success');
                
            } catch (error) {
                showNotification('An error occurred during calculation.', 'error');
                console.error(error);
            }
        }

        function highlightResult(mode) {
            // Remove all highlights
            document.querySelectorAll('.ohm-result-value').forEach(el => {
                el.style.color = 'var(--ohm-primary)';
            });
            
            // Add highlight to calculated value
            const highlightMap = {
                'voltage': 'voltageResult',
                'current': 'currentResult',
                'resistance': 'resistanceResult',
                'power': 'powerResult'
            };
            
            const targetElement = document.getElementById(highlightMap[mode]);
            if (targetElement) {
                targetElement.parentElement.style.color = 'var(--ohm-secondary)';
                targetElement.parentElement.style.fontWeight = '900';
            }
        }

        function reset() {
            // Clear all inputs
            document.querySelectorAll('.ohm-input').forEach(input => {
                input.value = '';
            });
            
            // Reset results
            document.getElementById('voltageResult').textContent = '0';
            document.getElementById('currentResult').textContent = '0';
            document.getElementById('resistanceResult').textContent = '0';
            document.getElementById('powerResult').textContent = '0';
            
            // Reset units to default
            document.getElementById('voltageResult').nextElementSibling.textContent = 'V';
            document.getElementById('currentResult').nextElementSibling.textContent = 'A';
            document.getElementById('resistanceResult').nextElementSibling.textContent = 'Ω';
            document.getElementById('powerResult').nextElementSibling.textContent = 'W';
            
            // Remove highlights
            document.querySelectorAll('.ohm-result-value').forEach(el => {
                el.style.color = 'var(--ohm-primary)';
                el.style.fontWeight = '700';
            });
            
            showNotification('Calculator reset.', 'success');
        }

        function showNotification(message, type = 'success') {
            const notification = document.getElementById('ohmNotification');
            const notificationText = document.getElementById('ohmNotificationText');
            const icon = notification.querySelector('i');
            
            notificationText.textContent = message;
            notification.className = `ohm-notification ohm-notification-${type}`;
            
            // Update icon
            if (type === 'error') {
                icon.className = 'fas fa-exclamation-circle';
            } else {
                icon.className = 'fas fa-check-circle';
            }
            
            // Show notification
            notification.classList.add('show');
            
            // Hide after 3 seconds
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Initialize
        updateFormula();
    });
</script>