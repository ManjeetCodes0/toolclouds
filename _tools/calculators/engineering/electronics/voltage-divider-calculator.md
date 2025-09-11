---
title: "Voltage Divider Calculator Online: Calculate Vout and Resistor"
localtitle: "Voltage Divider Calculator"
layout: tool
categories: [electricalCalc, engineeringCalc, calculators]
permalink: /calculators/electrical/voltage-divider-calculator
description: "Free voltage divider calculator to calculate output voltage, resistor values, and voltage ratios. Features interactive circuit diagrams, load effects analysis, and practical design tips for electronics projects."
faq:
  - q: "What is a voltage divider and how does it work?"
    a: "A voltage divider is a simple circuit that reduces a higher voltage to a lower voltage using two resistors in series. It works on the principle that voltage drops across resistors in proportion to their resistance values. The output voltage is taken from the connection between the two resistors."
  - q: "What is the voltage divider formula?"
    a: "The voltage divider formula is: Vout = Vin × (R2 / (R1 + R2)), where Vout is the output voltage, Vin is the input voltage, R1 is the resistor connected to the positive terminal, and R2 is the resistor connected to ground."
  - q: "What is the 10:1 rule for voltage dividers?"
    a: "The 10:1 rule states that the current through the voltage divider should be at least 10 times greater than the current drawn by the load. This ensures the load doesn't significantly affect the output voltage. The divider resistance should be less than 1/10th of the load resistance."
  - q: "Why can't I use a voltage divider as a power supply?"
    a: "Voltage dividers are not suitable as power supplies because: 1) The output voltage changes when a load is connected, 2) They waste power as heat in the resistors, 3) They provide no voltage regulation, and 4) They have high output impedance. Use voltage regulators for power supply applications."
  - q: "How do I calculate resistor values for a specific output voltage?"
    a: "To calculate resistor values: 1) Choose a total resistance based on power consumption needs, 2) Use the ratio R2/R1 = Vout/(Vin-Vout), 3) Select standard resistor values close to your calculations. Our calculator can automatically suggest optimal resistor values."
  - q: "What happens when I connect a load to a voltage divider?"
    a: "When a load is connected, it appears in parallel with R2, reducing the effective resistance and lowering the output voltage. This effect is called 'loading'. The loaded output voltage can be calculated using: Vout = Vin × (Rparallel / (R1 + Rparallel)), where Rparallel = (R2 × Rload) / (R2 + Rload)."
  - q: "What are common applications of voltage dividers?"
    a: "Common applications include: sensor interfaces (reading potentiometers, photoresistors), level shifting for microcontrollers, creating reference voltages, audio volume controls, and measuring high voltages with ADCs. They're essential in many analog circuits."
---

<style>
    :root {
        --vdiv-primary: #8b5cf6;
        --vdiv-primary-dark: #7c3aed;
        --vdiv-secondary: #06b6d4;
        --vdiv-secondary-dark: #0891b2;
        --vdiv-accent: #10b981;
        --vdiv-danger: #ef4444;
        --vdiv-warning: #f59e0b;
        --vdiv-success: #22c55e;
        --vdiv-bg-main: #ffffff;
        --vdiv-bg-card: #f9fafb;
        --vdiv-bg-hover: #f3f4f6;
        --vdiv-text-primary: #111827;
        --vdiv-text-secondary: #4b5563;
        --vdiv-text-muted: #9ca3af;
        --vdiv-border: #e5e7eb;
        --vdiv-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
        --vdiv-shadow-md: 0 4px 6px rgba(0,0,0,0.07);
        --vdiv-shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
    }

    html[data-theme="dark"] .vdiv-wrapper {
        --vdiv-primary: #a78bfa;
        --vdiv-primary-dark: #8b5cf6;
        --vdiv-secondary: #22d3ee;
        --vdiv-secondary-dark: #06b6d4;
        --vdiv-accent: #34d399;
        --vdiv-danger: #f87171;
        --vdiv-warning: #fbbf24;
        --vdiv-success: #4ade80;
        --vdiv-bg-main: #0f172a;
        --vdiv-bg-card: #1e293b;
        --vdiv-bg-hover: #334155;
        --vdiv-text-primary: #f1f5f9;
        --vdiv-text-secondary: #cbd5e1;
        --vdiv-text-muted: #64748b;
        --vdiv-border: #334155;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .vdiv-wrapper {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: var(--vdiv-bg-main);
        color: var(--vdiv-text-primary);
        line-height: 1.6;
        transition: background-color 0.3s, color 0.3s;
    }

    .vdiv-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 0.2rem;
    }

    .vdiv-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .vdiv-header h1 {
        font-size: 2.5rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--vdiv-primary) 0%, var(--vdiv-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;
    }

    .vdiv-header p {
        font-size: 1.125rem;
        color: var(--vdiv-text-secondary);
    }

    .vdiv-main-grid {
        display: grid;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
        .vdiv-main-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 1024px) {
        .vdiv-main-grid {
            grid-template-columns: 3fr 2fr;
        }
    }

    .vdiv-card {
        background: var(--vdiv-bg-card);
        border-radius: 12px;
        border: 1px solid var(--vdiv-border);
        overflow: hidden;
        transition: all 0.3s;
    }

    .vdiv-card-header {
        padding: 1.25rem;
        border-bottom: 1px solid var(--vdiv-border);
    }

    .vdiv-card-header h2 {
        font-size: 1.25rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .vdiv-icon {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, var(--vdiv-primary), var(--vdiv-secondary));
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1rem;
    }

    .vdiv-card-body {
        padding: 1.25rem;
    }

    .vdiv-mode-tabs {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        padding: 0.25rem;
        background: var(--vdiv-bg-hover);
        border-radius: 8px;
    }

    .vdiv-mode-tab {
        flex: 1;
        padding: 0.625rem;
        border: none;
        background: transparent;
        color: var(--vdiv-text-secondary);
        font-weight: 600;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 0.875rem;
    }

    .vdiv-mode-tab.active {
        background: var(--vdiv-bg-main);
        color: var(--vdiv-primary);
        box-shadow: var(--vdiv-shadow-sm);
    }

    .vdiv-input-group {
        margin-bottom: 1rem;
    }

    .vdiv-input-group label {
        display: block;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--vdiv-text-secondary);
        margin-bottom: 0.5rem;
    }

    .vdiv-input-wrapper {
        display: flex;
        gap: 0.5rem;
    }

    .vdiv-input {
        flex: 1;
        padding: 0.75rem;
        background: var(--vdiv-bg-main);
        border: 1px solid var(--vdiv-border);
        border-radius: 6px;
        font-size: 1rem;
        color: var(--vdiv-text-primary);
        transition: all 0.2s;
    }

    .vdiv-input:focus {
        outline: none;
        border-color: var(--vdiv-primary);
        box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }

    .vdiv-input:disabled {
        background: var(--vdiv-bg-hover);
        cursor: not-allowed;
        opacity: 0.6;
    }

    .vdiv-unit-select {
        padding: 0.75rem;
        background: var(--vdiv-bg-main);
        border: 1px solid var(--vdiv-border);
        border-radius: 6px;
        font-size: 0.875rem;
        color: var(--vdiv-text-primary);
        cursor: pointer;
    }

    .vdiv-checkbox-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 1rem 0;
    }

    .vdiv-checkbox {
        width: 1.25rem;
        height: 1.25rem;
        cursor: pointer;
    }

    .vdiv-checkbox-label {
        font-size: 0.875rem;
        color: var(--vdiv-text-secondary);
        cursor: pointer;
    }

    .vdiv-btn {
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

    .vdiv-btn-primary {
        background: linear-gradient(135deg, var(--vdiv-primary) 0%, var(--vdiv-primary-dark) 100%);
        color: white;
        border: none;
    }

    .vdiv-btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: var(--vdiv-shadow-md);
    }

    .vdiv-btn-secondary {
        background: var(--vdiv-bg-hover);
        color: var(--vdiv-text-secondary);
        border: 1px solid var(--vdiv-border);
    }

    .vdiv-circuit-display {
        background: var(--vdiv-bg-main);
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 250px;
    }

    .vdiv-circuit-svg {
        max-width: 100%;
        height: auto;
    }

    .vdiv-results-section {
        display: grid;
        gap: 1rem;
    }

    .vdiv-result-card {
        background: var(--vdiv-bg-main);
        border: 1px solid var(--vdiv-border);
        border-radius: 8px;
        padding: 1rem;
    }

    .vdiv-result-label {
        font-size: 0.75rem;
        color: var(--vdiv-text-muted);
        text-transform: uppercase;
        margin-bottom: 0.25rem;
    }

    .vdiv-result-value {
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--vdiv-primary);
    }

    .vdiv-result-unit {
        font-size: 1.125rem;
        color: var(--vdiv-text-secondary);
        font-weight: 400;
    }

    .vdiv-result-formula {
        font-size: 0.875rem;
        color: var(--vdiv-text-secondary);
        margin-top: 0.5rem;
        font-family: 'Courier New', monospace;
    }

    .vdiv-info-grid {
        display: grid;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
        .vdiv-info-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .vdiv-info-card {
        background: var(--vdiv-bg-card);
        border-radius: 12px;
        border: 1px solid var(--vdiv-border);
        padding: 1.5rem;
    }

    .vdiv-info-card h3 {
        font-size: 1.125rem;
        font-weight: 700;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .vdiv-preset-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 0.5rem;
        margin-top: 0.75rem;
    }

    .vdiv-preset-btn {
        padding: 0.5rem;
        background: var(--vdiv-bg-main);
        border: 1px solid var(--vdiv-border);
        border-radius: 6px;
        font-size: 0.75rem;
        cursor: pointer;
        transition: all 0.2s;
        text-align: center;
    }

    .vdiv-preset-btn:hover {
        border-color: var(--vdiv-primary);
        background: var(--vdiv-bg-hover);
    }

    .vdiv-preset-title {
        font-weight: 600;
        color: var(--vdiv-text-primary);
    }

    .vdiv-preset-value {
        color: var(--vdiv-text-muted);
        font-size: 0.625rem;
    }

    .vdiv-design-tips {
        background: var(--vdiv-bg-card);
        border-radius: 12px;
        border: 1px solid var(--vdiv-border);
        padding: 2rem;
        margin-bottom: 2rem;
    }

    .vdiv-tip-item {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1rem;
        padding: 0.75rem;
        background: var(--vdiv-bg-main);
        border-radius: 8px;
    }

    .vdiv-tip-icon {
        width: 24px;
        height: 24px;
        background: var(--vdiv-accent);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 0.875rem;
        flex-shrink: 0;
    }

    .vdiv-tip-content {
        flex: 1;
    }

    .vdiv-tip-title {
        font-weight: 600;
        margin-bottom: 0.25rem;
    }

    .vdiv-tip-text {
        font-size: 0.875rem;
        color: var(--vdiv-text-secondary);
    }

    .vdiv-examples-section {
        background: var(--vdiv-bg-card);
        border-radius: 12px;
        border: 1px solid var(--vdiv-border);
        padding: 2rem;
        margin-bottom: 2rem;
    }

    .vdiv-example-grid {
        display: grid;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    @media (min-width: 768px) {
        .vdiv-example-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .vdiv-example-card {
        background: var(--vdiv-bg-main);
        border: 1px solid var(--vdiv-border);
        border-radius: 8px;
        padding: 1rem;
        transition: all 0.2s;
        cursor: pointer;
    }

    .vdiv-example-card:hover {
        border-color: var(--vdiv-primary);
        transform: translateY(-2px);
    }

    .vdiv-example-title {
        font-weight: 600;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .vdiv-example-desc {
        font-size: 0.875rem;
        color: var(--vdiv-text-secondary);
    }

    .vdiv-related-tools {
        background: var(--vdiv-bg-card);
        border-radius: 12px;
        border: 1px solid var(--vdiv-border);
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .vdiv-related-header {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .vdiv-tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 0.75rem;
    }

    .vdiv-tool-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem;
        background: var(--vdiv-bg-main);
        border: 1px solid var(--vdiv-border);
        border-radius: 8px;
        text-decoration: none;
        color: var(--vdiv-text-primary);
        transition: all 0.2s;
    }

    .vdiv-tool-link:hover {
        border-color: var(--vdiv-primary);
        transform: translateY(-2px);
    }

    .vdiv-tool-info h4 {
        font-size: 0.875rem;
        font-weight: 600;
    }

    .vdiv-tool-info p {
        font-size: 0.75rem;
        color: var(--vdiv-text-muted);
        margin: 0;
    }

    .vdiv-content-section {
        background: var(--vdiv-bg-card);
        border-radius: 12px;
        border: 1px solid var(--vdiv-border);
        padding: 2rem;
        margin-bottom: 2rem;
    }

    .vdiv-content-section h2 {
        font-size: 1.875rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .vdiv-content-section h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 2rem 0 1rem;
        padding-left: 1rem;
        border-left: 4px solid var(--vdiv-primary);
    }

    .vdiv-content-section p {
        color: var(--vdiv-text-secondary);
        line-height: 1.7;
        margin-bottom: 1rem;
    }

    .vdiv-content-section ul {
        margin: 0 0 1rem 2rem;
    }

    .vdiv-content-section li {
        color: var(--vdiv-text-secondary);
        line-height: 1.7;
        margin-bottom: 0.5rem;
    }

    .vdiv-faq-section {
        background: var(--vdiv-bg-card);
        border-radius: 12px;
        border: 1px solid var(--vdiv-border);
        padding: 2rem;
    }

    .vdiv-faq-item {
        margin-bottom: 1rem;
        border: 1px solid var(--vdiv-border);
        border-radius: 8px;
        overflow: hidden;
    }

    .vdiv-faq-question {
        padding: 1rem;
        background: var(--vdiv-bg-main);
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .vdiv-faq-question:hover {
        background: var(--vdiv-bg-hover);
    }

    .vdiv-faq-question i {
        transition: transform 0.3s;
    }

    .vdiv-faq-item.active .vdiv-faq-question i {
        transform: rotate(180deg);
    }

    .vdiv-faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
    }

    .vdiv-faq-item.active .vdiv-faq-answer {
        max-height: 300px;
    }

    .vdiv-faq-answer p {
        padding: 1rem;
        color: var(--vdiv-text-secondary);
    }

    .vdiv-notification {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        background: var(--vdiv-bg-card);
        border: 1px solid var(--vdiv-border);
        border-radius: 8px;
        padding: 1rem 1.5rem;
        box-shadow: var(--vdiv-shadow-lg);
        transform: translateX(400px);
        opacity: 0;
        transition: all 0.3s;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .vdiv-notification.show {
        transform: translateX(0);
        opacity: 1;
    }

    .vdiv-notification-success {
        border-color: var(--vdiv-success);
    }

    .vdiv-notification-error {
        border-color: var(--vdiv-danger);
    }

    .vdiv-notification-warning {
        border-color: var(--vdiv-warning);
    }

    @media (max-width: 768px) {
        .vdiv-header h1 {
            font-size: 2rem;
        }
        
        .vdiv-main-grid {
            grid-template-columns: 1fr;
        }
        
        .vdiv-notification {
            left: 1rem;
            right: 1rem;
            transform: translateY(100px);
        }
        
        .vdiv-notification.show {
            transform: translateY(0);
        }
    }
</style>

<div class="vdiv-wrapper">
    <div class="vdiv-container">
        <div class="vdiv-header">
            <h1>Voltage Divider Calculator Online</h1>
            <p>Calculate output voltage, resistor values, and analyze load effects for your voltage divider circuits</p>
        </div>

        <div class="vdiv-main-grid">
            <div class="vdiv-card">
                <div class="vdiv-card-header">
                    <h2><span class="vdiv-icon">⚡</span> Calculator</h2>
                </div>
                <div class="vdiv-card-body">
                    <div class="vdiv-mode-tabs">
                        <button class="vdiv-mode-tab active" data-mode="output">Find Output Voltage</button>
                        <button class="vdiv-mode-tab" data-mode="r1">Find R1</button>
                        <button class="vdiv-mode-tab" data-mode="r2">Find R2</button>
                        <button class="vdiv-mode-tab" data-mode="design">Design Divider</button>
                    </div>
                    
                    <div id="outputMode" class="vdiv-calc-section">
                        <div class="vdiv-input-group">
                            <label>Input Voltage (Vin)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="vinOutput" placeholder="Enter input voltage">
                                <select class="vdiv-unit-select vdiv-live-input" id="vinOutputUnit">
                                    <option value="V">V</option>
                                    <option value="mV">mV</option>
                                    <option value="kV">kV</option>
                                </select>
                            </div>
                        </div>
                        <div class="vdiv-input-group">
                            <label>Resistor R1 (Top)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="r1Output" placeholder="Enter R1 value">
                                <select class="vdiv-unit-select vdiv-live-input" id="r1OutputUnit">
                                    <option value="Ω">Ω</option>
                                    <option value="kΩ" selected>kΩ</option>
                                    <option value="MΩ">MΩ</option>
                                </select>
                            </div>
                        </div>
                        <div class="vdiv-input-group">
                            <label>Resistor R2 (Bottom)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="r2Output" placeholder="Enter R2 value">
                                <select class="vdiv-unit-select vdiv-live-input" id="r2OutputUnit">
                                    <option value="Ω">Ω</option>
                                    <option value="kΩ" selected>kΩ</option>
                                    <option value="MΩ">MΩ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div id="r1Mode" class="vdiv-calc-section" style="display: none;">
                        <div class="vdiv-input-group">
                            <label>Input Voltage (Vin)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="vinR1" placeholder="Enter input voltage">
                                <select class="vdiv-unit-select vdiv-live-input" id="vinR1Unit">
                                    <option value="V">V</option>
                                    <option value="mV">mV</option>
                                    <option value="kV">kV</option>
                                </select>
                            </div>
                        </div>
                        <div class="vdiv-input-group">
                            <label>Output Voltage (Vout)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="voutR1" placeholder="Enter desired output">
                                <select class="vdiv-unit-select vdiv-live-input" id="voutR1Unit">
                                    <option value="V">V</option>
                                    <option value="mV">mV</option>
                                    <option value="kV">kV</option>
                                </select>
                            </div>
                        </div>
                        <div class="vdiv-input-group">
                            <label>Resistor R2 (Bottom)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="r2R1" placeholder="Enter R2 value">
                                <select class="vdiv-unit-select vdiv-live-input" id="r2R1Unit">
                                    <option value="Ω">Ω</option>
                                    <option value="kΩ" selected>kΩ</option>
                                    <option value="MΩ">MΩ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div id="r2Mode" class="vdiv-calc-section" style="display: none;">
                        <div class="vdiv-input-group">
                            <label>Input Voltage (Vin)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="vinR2" placeholder="Enter input voltage">
                                <select class="vdiv-unit-select vdiv-live-input" id="vinR2Unit">
                                    <option value="V">V</option>
                                    <option value="mV">mV</option>
                                    <option value="kV">kV</option>
                                </select>
                            </div>
                        </div>
                        <div class="vdiv-input-group">
                            <label>Output Voltage (Vout)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="voutR2" placeholder="Enter desired output">
                                <select class="vdiv-unit-select vdiv-live-input" id="voutR2Unit">
                                    <option value="V">V</option>
                                    <option value="mV">mV</option>
                                    <option value="kV">kV</option>
                                </select>
                            </div>
                        </div>
                        <div class="vdiv-input-group">
                            <label>Resistor R1 (Top)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="r1R2" placeholder="Enter R1 value">
                                <select class="vdiv-unit-select vdiv-live-input" id="r1R2Unit">
                                    <option value="Ω">Ω</option>
                                    <option value="kΩ" selected>kΩ</option>
                                    <option value="MΩ">MΩ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div id="designMode" class="vdiv-calc-section" style="display: none;">
                        <div class="vdiv-input-group">
                            <label>Input Voltage (Vin)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="vinDesign" placeholder="Enter input voltage">
                                <select class="vdiv-unit-select vdiv-live-input" id="vinDesignUnit">
                                    <option value="V">V</option>
                                    <option value="mV">mV</option>
                                    <option value="kV">kV</option>
                                </select>
                            </div>
                        </div>
                        <div class="vdiv-input-group">
                            <label>Output Voltage (Vout)</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="voutDesign" placeholder="Enter desired output">
                                <select class="vdiv-unit-select vdiv-live-input" id="voutDesignUnit">
                                    <option value="V">V</option>
                                    <option value="mV">mV</option>
                                    <option value="kV">kV</option>
                                </select>
                            </div>
                        </div>
                        <div class="vdiv-input-group">
                            <label>Maximum Current Draw</label>
                            <div class="vdiv-input-wrapper">
                                <input type="number" class="vdiv-input vdiv-live-input" id="currentDesign" placeholder="Enter max current">
                                <select class="vdiv-unit-select vdiv-live-input" id="currentDesignUnit">
                                    <option value="A">A</option>
                                    <option value="mA" selected>mA</option>
                                    <option value="μA">μA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="vdiv-checkbox-group">
                        <input type="checkbox" class="vdiv-checkbox" id="includeLoad">
                        <label for="includeLoad" class="vdiv-checkbox-label">Include Load Resistance (RL)</label>
                    </div>
                    
                    <div class="vdiv-input-group" id="loadGroup" style="display: none;">
                        <label>Load Resistance (RL)</label>
                        <div class="vdiv-input-wrapper">
                            <input type="number" class="vdiv-input vdiv-live-input" id="rLoad" placeholder="Enter load resistance">
                            <select class="vdiv-unit-select vdiv-live-input" id="rLoadUnit">
                                <option value="Ω">Ω</option>
                                <option value="kΩ" selected>kΩ</option>
                                <option value="MΩ">MΩ</option>
                            </select>
                        </div>
                    </div>
                    
                    <button class="vdiv-btn vdiv-btn-secondary" id="resetBtn">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                </div>
            </div>

            <div class="vdiv-card">
                <div class="vdiv-circuit-display">
                    <svg class="vdiv-circuit-svg" width="280" height="320" viewBox="0 0 280 320">
                        <!-- Input voltage source -->
                        <line x1="40" y1="50" x2="40" y2="80" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <line x1="40" y1="240" x2="40" y2="270" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <line x1="25" y1="80" x2="55" y2="80" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <line x1="30" y1="240" x2="50" y2="240" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <text x="60" y="165" fill="var(--vdiv-text-primary)" font-size="14">Vin</text>
                        
                        <!-- Top connection line -->
                        <line x1="40" y1="50" x2="140" y2="50" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        
                        <!-- R1 resistor -->
                        <line x1="140" y1="50" x2="140" y2="80" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                                                <rect x="120" y="80" width="40" height="80" fill="none" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <line x1="140" y1="160" x2="140" y2="190" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <text x="165" y="125" fill="var(--vdiv-text-primary)" font-size="14">R1</text>
                        <text x="165" y="145" fill="var(--vdiv-text-secondary)" font-size="12" id="r1Value">-</text>
                        
                        <!-- Middle connection (Vout) -->
                        <line x1="140" y1="190" x2="220" y2="190" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <circle cx="140" cy="190" r="4" fill="var(--vdiv-primary)"/>
                        <text x="180" y="180" fill="var(--vdiv-primary)" font-size="14" font-weight="bold">Vout</text>
                        <text x="180" y="200" fill="var(--vdiv-text-secondary)" font-size="12" id="voutValue">-</text>
                        
                        <!-- R2 resistor -->
                        <line x1="140" y1="190" x2="140" y2="220" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <rect x="120" y="220" width="40" height="80" fill="none" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <line x1="140" y1="300" x2="140" y2="330" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <text x="165" y="265" fill="var(--vdiv-text-primary)" font-size="14">R2</text>
                        <text x="165" y="285" fill="var(--vdiv-text-secondary)" font-size="12" id="r2Value">-</text>
                        
                        <!-- Ground -->
                        <line x1="40" y1="330" x2="140" y2="330" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <line x1="40" y1="270" x2="40" y2="330" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <line x1="100" y1="340" x2="140" y2="340" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <line x1="110" y1="347" x2="130" y2="347" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        <line x1="120" y1="354" x2="120" y2="354" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                        
                        <!-- Load resistor (initially hidden) -->
                        <g id="loadResistor" style="display: none;">
                            <line x1="220" y1="190" x2="220" y2="220" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                            <rect x="200" y="220" width="40" height="80" fill="none" stroke="var(--vdiv-text-primary)" stroke-width="2" stroke-dasharray="5,5"/>
                            <line x1="220" y1="300" x2="220" y2="330" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                            <line x1="220" y1="330" x2="140" y2="330" stroke="var(--vdiv-text-primary)" stroke-width="2"/>
                            <text x="245" y="265" fill="var(--vdiv-text-primary)" font-size="14">RL</text>
                            <text x="245" y="285" fill="var(--vdiv-text-secondary)" font-size="12" id="rlValue">-</text>
                        </g>
                    </svg>
                </div>
                <div class="vdiv-results-section">
                    <div class="vdiv-result-card">
                        <div class="vdiv-result-label">Output Voltage</div>
                        <div class="vdiv-result-value"><span id="voutResult">0</span> <span class="vdiv-result-unit" id="voutResultUnit">V</span></div>
                        <div class="vdiv-result-formula" id="voutFormula">Vout = Vin × (R2 / (R1 + R2))</div>
                    </div>
                    <div class="vdiv-result-card" id="additionalResult" style="display: none;">
                        <div class="vdiv-result-label" id="additionalLabel">-</div>
                        <div class="vdiv-result-value"><span id="additionalValue">0</span> <span class="vdiv-result-unit" id="additionalUnit">-</span></div>
                        <div class="vdiv-result-formula" id="additionalFormula">-</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="vdiv-info-grid">
            <div class="vdiv-info-card">
                <h3><span class="vdiv-icon">📐</span> Common Voltage Ratios</h3>
                <div class="vdiv-preset-grid">
                    <button class="vdiv-preset-btn" onclick="loadPreset('half')">
                        <div class="vdiv-preset-title">1/2</div>
                        <div class="vdiv-preset-value">R1 = R2</div>
                    </button>
                    <button class="vdiv-preset-btn" onclick="loadPreset('third')">
                        <div class="vdiv-preset-title">1/3</div>
                        <div class="vdiv-preset-value">R1 = 2×R2</div>
                    </button>
                    <button class="vdiv-preset-btn" onclick="loadPreset('quarter')">
                        <div class="vdiv-preset-title">1/4</div>
                        <div class="vdiv-preset-value">R1 = 3×R2</div>
                    </button>
                    <button class="vdiv-preset-btn" onclick="loadPreset('fifth')">
                        <div class="vdiv-preset-title">1/5</div>
                        <div class="vdiv-preset-value">R1 = 4×R2</div>
                    </button>
                    <button class="vdiv-preset-btn" onclick="loadPreset('tenth')">
                        <div class="vdiv-preset-title">1/10</div>
                        <div class="vdiv-preset-value">R1 = 9×R2</div>
                    </button>
                    <button class="vdiv-preset-btn" onclick="loadPreset('twothird')">
                        <div class="vdiv-preset-title">2/3</div>
                        <div class="vdiv-preset-value">R1 = R2/2</div>
                    </button>
                </div>
            </div>
            <div class="vdiv-info-card">
                <h3><span class="vdiv-icon">🔧</span> Standard Resistor Values</h3>
                <div style="font-size: 0.875rem; color: var(--vdiv-text-secondary);">
                    <p><strong>E12 Series (10%):</strong> 1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2</p>
                    <p style="margin-top: 0.5rem;"><strong>E24 Series (5%):</strong> Also includes 1.1, 1.3, 1.6, 2.0, 2.4, 3.0, 3.6, 4.3, 5.1, 6.2, 7.5, 9.1</p>
                </div>
            </div>
        </div>

        <div class="vdiv-design-tips">
            <h3 style="margin-bottom: 1.5rem;">Design Best Practices</h3>
            <div class="vdiv-tip-item">
                <div class="vdiv-tip-icon">💡</div>
                <div class="vdiv-tip-content">
                    <div class="vdiv-tip-title">Apply the 10:1 Rule</div>
                    <div class="vdiv-tip-text">Keep the divider current at least 10× higher than the load current to minimize loading effects.</div>
                </div>
            </div>
            <div class="vdiv-tip-item">
                <div class="vdiv-tip-icon">⚡</div>
                <div class="vdiv-tip-content">
                    <div class="vdiv-tip-title">Power Dissipation</div>
                    <div class="vdiv-tip-text">Calculate power: P = V²/R. Use resistors rated at least 2× the calculated power for safety.</div>
                </div>
            </div>
            <div class="vdiv-tip-item">
                <div class="vdiv-tip-icon">🎯</div>
                <div class="vdiv-tip-content">
                    <div class="vdiv-tip-title">Precision Matters</div>
                    <div class="vdiv-tip-text">For accurate voltage division, use 1% tolerance resistors or better. Temperature coefficient also affects stability.</div>
                </div>
            </div>
            <div class="vdiv-tip-item">
                <div class="vdiv-tip-icon">🛡️</div>
                <div class="vdiv-tip-content">
                    <div class="vdiv-tip-title">Buffer Your Output</div>
                    <div class="vdiv-tip-text">For driving loads, follow the divider with a voltage follower (op-amp buffer) to prevent loading effects.</div>
                </div>
            </div>
        </div>

        <div class="vdiv-examples-section">
            <h3>Common Applications</h3>
            <div class="vdiv-example-grid">
                <div class="vdiv-example-card" onclick="loadExample('arduino')">
                    <div class="vdiv-example-title">🔌 Arduino 5V→3.3V</div>
                    <div class="vdiv-example-desc">Level shifting for 3.3V logic from 5V Arduino</div>
                </div>
                <div class="vdiv-example-card" onclick="loadExample('battery')">
                    <div class="vdiv-example-title">🔋 Battery Monitor</div>
                    <div class="vdiv-example-desc">12V battery monitoring with 5V ADC</div>
                </div>
                <div class="vdiv-example-card" onclick="loadExample('sensor')">
                    <div class="vdiv-example-title">🌡️ Sensor Reference</div>
                    <div class="vdiv-example-desc">2.5V reference from 5V supply</div>
                </div>
            </div>
        </div>

        <div class="vdiv-related-tools">
            <h3 class="vdiv-related-header"><i class="fas fa-tools"></i> Related Electrical Tools</h3>
            <div class="vdiv-tools-grid">
                {% assign related_tools = site.tools | where_exp:"item", "item.categories contains 'electricalCalc'" | limit: 4 %}
                {% for tool in related_tools %}
                {% unless tool.url == page.url %}
                <a href="{{ tool.url | relative_url }}" class="vdiv-tool-link">
                    <div class="vdiv-tool-icon"><i class="{{ tool.icon | default: 'fas fa-calculator' }}"></i></div>
                    <div class="vdiv-tool-info">
                        <h4>{{ tool.localtitle }}</h4>
                        <p>{{ tool.description | truncate: 50, "..." }}</p>
                    </div>
                </a>
                {% endunless %}
                {% endfor %}
            </div>
        </div>

        <div class="vdiv-content-section">
            <h2>Understanding Voltage Dividers: A Complete Guide</h2>
            
            <p>If you've ever worked with electronics, chances are you've needed to reduce a voltage from one level to another. That's where voltage dividers come in – they're one of the most fundamental circuits in electronics, yet many people struggle with understanding how they really work. Let me walk you through everything you need to know about voltage dividers, from the basic theory to practical applications.</p>

            <h3>What Exactly is a Voltage Divider?</h3>
            
            <p>A voltage divider is basically two resistors connected in series that split an input voltage into a smaller output voltage. Think of it like a water pipe that branches off – the main pipe carries all the water (voltage), but you can tap off a smaller amount at the junction. The beauty of voltage dividers lies in there simplicity: just two resistors and you've got a way to scale down any voltage.</p>

            <p>The circuit couldn't be simpler: you connect R1 from your positive voltage to a middle point, then R2 from that middle point to ground. Your output voltage appears at that middle junction. What determines how much voltage you get? The ratio of the resistors!</p>

            <h3>The Math Behind Voltage Dividers (It's Not That Scary!)</h3>
            
            <p>The fundamental formula for a voltage divider is surprisingly simple:</p>
            
            <p style="text-align: center; font-weight: bold; font-size: 1.1rem;">Vout = Vin × (R2 / (R1 + R2))</p>
            
            <p>Let's break this down with a real example. Say you've got a 9V battery and you need 3V for your circuit. If you use R1 = 6kΩ and R2 = 3kΩ, your output would be: 9V × (3kΩ / (6kΩ + 3kΩ)) = 9V × (3/9) = 3V. Perfect!</p>

            <p>But here's where it gets interesting – and where many beginners make there first mistake. This formula only works perfectly when nothing is connected to the output. As soon as you connect a load, things change...</p>

            <h3>The Loading Effect: Why Your Calculations Might Be Wrong</h3>
            
            <p>This is probably the most common pitfall when using voltage dividers. When you connect a load (like an LED, microcontroller input, or another circuit), it appears in parallel with R2. This effectively reduces the resistance of the bottom part of your divider, which drops your output voltage.</p>

            <p>Let's say you have that same 9V to 3V divider, but now you connect a 3kΩ load. Your R2 (3kΩ) in parallel with the load (3kΩ) gives you an effective resistance of only 1.5kΩ. Now your output is: 9V × (1.5kΩ / (6kΩ + 1.5kΩ)) = 1.8V. That's way less than the 3V you wanted!</p>

            <p>This is why the "10:1 rule" exists – your load resistance should be at least 10 times larger than R2 to minimize this effect. In practice, this means keeping your divider resistances relatively low compared to what you're driving.</p>

            <h3>Real-World Applications You've Probably Used</h3>
            
            <p>Voltage dividers are everywhere in electronics. Here's some common applications you might have encountered:</p>

            <ul>
                <li><strong>Volume Controls:</strong> That volume knob on your stereo? It's likely a potentiometer acting as an adjustable voltage divider, scaling your audio signal up or down.</li>
                <li><strong>Sensor Reading:</strong> Many sensors (like photoresistors or thermistors) work by changing resistance. Pair them with a fixed resistor in a voltage divider, and you can read their changing values with a microcontroller.</li>
                <li><strong>Level Shifting:</strong> Need to interface 5V logic with 3.3V? A voltage divider can safely drop those signal levels (though only in one direction – you'd need a proper level shifter for bidirectional communication).</li>
                <li><strong>Battery Monitoring:</strong> Want to monitor a 12V car battery with a 5V Arduino? A voltage divider brings that voltage down to a safe, readable level.</li>
            </ul>

            <h3>When NOT to Use a Voltage Divider</h3>
            
            <p>Here's where I see alot of beginners go wrong – trying to use voltage dividers as power supplies. Don't do it! Here's why:</p>

            <ul>
                <li><strong>No Regulation:</strong> The output voltage changes with load, temperature, and input voltage variations.</li>
                <li><strong>Power Waste:</strong> The resistors constantly burn power as heat, even with no load connected.</li>
                <li><strong>High Output Impedance:</strong> They can't supply much current without the voltage dropping significantly.</li>
            </ul>

            <p>For power supply applications, use a proper voltage regulator instead. They're designed for the job and will give you stable, efficient power delivery.</p>

            <h3>Practical Design Tips from Experience</h3>
            
            <p>After years of working with voltage dividers, here's some practical wisdom I've picked up:</p>

            <p><strong>1. Choose Your Resistor Values Wisely:</strong> Lower values mean less loading effect but more power consumption. Higher values save power but are more susceptible to noise and loading. I usually start with values in the 1kΩ to 10kΩ range for general purpose use.</p>

            <p><strong>2. Consider Power Ratings:</strong> Don't forget to check power dissipation! Use P = V²/R for each resistor. A common mistake is using 1/4W resistors when you need 1/2W or higher.</p>

            <p><strong>3. Add Capacitor Filtering:</strong> For noisy environments or when reading sensors, add a small capacitor (0.1µF to 1µF) across R2. This filters out high-frequency noise but will slow down response to changing inputs.</p>

            <p><strong>4. Use Precision Resistors When It Matters:</strong> Standard resistors have 5% tolerance. If you need accurate division ratios, spring for 1% or better tolerance resistors. Temperature coefficient matters too for critical applications.</p>

            <h3>Advanced Techniques and Variations</h3>
            
            <p>Once you've mastered basic voltage dividers, there's several advanced techniques you can explore:</p>

            <ul>
                <li><strong>Multi-tap Dividers:</strong> Use multiple resistors in series to create several different output voltages from one input.</li>
                <li><strong>AC Voltage Dividers:</strong> They work for AC signals too, but watch out for reactive components at high frequencies.</li>
                <li><strong>Compensated Dividers:</strong> For high-frequency work, add capacitors in parallel with resistors to maintain division ratio across frequency.</li>
                <li><strong>Active Dividers:</strong> Follow your divider with an op-amp buffer for zero loading effect and low output impedance.</li>
            </ul>

            <h3>Common Troubleshooting Issues</h3>
            
            <p>When your Voltage Divider Calculator Online isn't working as expected, check these common issues:</p>

            <p><strong>Output voltage too low?</strong> You probably have a loading effect. Measure the actual load resistance and recalculate, or use lower value resistors in your divider.</p>

            <p><strong>Output voltage unstable?</strong> Could be noise pickup (add filtering), poor connections (check your breadboard!), or temperature effects (use better resistors).</p>

            <p><strong>Getting weird readings?</strong> Make sure your meter isn't loading the circuit. DMMs typically have 10MΩ input impedance, but this can still affect high-impedance dividers.</p>

            <h3>Final Thoughts</h3>
            
            <p>Voltage Divider Calculator Online might seem trivial, but understanding them properly is crucial for any electronics work. They teach fundamental concepts like Ohm's law, loading effects, and impedance matching that apply throughout electronics. Master the humble voltage divider, and you've got a solid foundation for more complex circuits.</p>

            <p>Remember: they're perfect for signal scaling and creating reference voltages, but terrible for power supplies. Use our calculator above to experiment with different values and see the effects of loading in real-time. And most importantly, build some circuits! Theory is great, but nothing beats hands-on experience with real components.</p>
        </div>

        <div class="vdiv-faq-section">
            <h3>Frequently Asked Questions</h3>
            {% for item in page.faq %}
            <div class="vdiv-faq-item" onclick="toggleVdivFAQ(this)">
                <div class="vdiv-faq-question">
                    {{ item.q }}
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="vdiv-faq-answer">
                    <p>{{ item.a }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>

<div class="vdiv-notification" id="vdivNotification">
    <i class="fas fa-check-circle"></i>
    <span id="vdivNotificationText"></span>
</div>

<script>
    // Global functions
    function toggleVdivFAQ(element) {
        element.classList.toggle('active');
    }

    function loadPreset(type) {
        const presets = {
            'half': { r1: 10, r2: 10 },
            'third': { r1: 20, r2: 10 },
            'quarter': { r1: 30, r2: 10 },
            'fifth': { r1: 40, r2: 10 },
            'tenth': { r1: 90, r2: 10 },
            'twothird': { r1: 10, r2: 20 }
        };

        const preset = presets[type];
        if (preset) {
            // Switch to output mode
            document.querySelector('[data-mode="output"]').click();
            
            setTimeout(() => {
                document.getElementById('r1Output').value = preset.r1;
                document.getElementById('r1OutputUnit').value = 'kΩ';
                document.getElementById('r2Output').value = preset.r2;
                document.getElementById('r2OutputUnit').value = 'kΩ';
                
                // Trigger live calculation
                const event = new Event('input', { bubbles: true });
                document.getElementById('r1Output').dispatchEvent(event);
                
                showNotification('Preset loaded! Enter input voltage to see results.', 'success');
            }, 100);
        }
    }

    function loadExample(type) {
        const examples = {
            'arduino': {
                mode: 'output',
                vin: { value: 5, unit: 'V' },
                r1: { value: 1.8, unit: 'kΩ' },
                r2: { value: 3.3, unit: 'kΩ' }
            },
            'battery': {
                mode: 'design',
                vin: { value: 12, unit: 'V' },
                vout: { value: 5, unit: 'V' },
                current: { value: 1, unit: 'mA' }
            },
            'sensor': {
                mode: 'output',
                vin: { value: 5, unit: 'V' },
                r1: { value: 10, unit: 'kΩ' },
                r2: { value: 10, unit: 'kΩ' }
            }
        };

        const example = examples[type];
        if (example) {
            // Switch to appropriate mode
            document.querySelector(`[data-mode="${example.mode}"]`).click();
            
            setTimeout(() => {
                if (example.vin) {
                    const vinInput = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) input[id*="vin"]`);
                    const vinUnit = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) select[id*="vin"]`);
                    if (vinInput && vinUnit) {
                        vinInput.value = example.vin.value;
                        vinUnit.value = example.vin.unit;
                    }
                }
                if (example.vout) {
                    const voutInput = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) input[id*="vout"]`);
                    const voutUnit = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) select[id*="vout"]`);
                    if (voutInput && voutUnit) {
                        voutInput.value = example.vout.value;
                        voutUnit.value = example.vout.unit;
                    }
                }
                if (example.r1) {
                    const r1Input = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) input[id*="r1"]`);
                    const r1Unit = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) select[id*="r1"]`);
                    if (r1Input && r1Unit) {
                        r1Input.value = example.r1.value;
                        r1Unit.value = example.r1.unit;
                    }
                }
                if (example.r2) {
                    const r2Input = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) input[id*="r2"]`);
                    const r2Unit = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) select[id*="r2"]`);
                    if (r2Input && r2Unit) {
                        r2Input.value = example.r2.value;
                        r2Unit.value = example.r2.unit;
                    }
                }
                if (example.current) {
                    const currentInput = document.getElementById('currentDesign');
                    const currentUnit = document.getElementById('currentDesignUnit');
                    if (currentInput && currentUnit) {
                        currentInput.value = example.current.value;
                        currentUnit.value = example.current.unit;
                    }
                }
                
                // Trigger live calculation
                const event = new Event('input', { bubbles: true });
                const firstInput = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) .vdiv-live-input`);
                if (firstInput) {
                    firstInput.dispatchEvent(event);
                }
                
                showNotification('Example loaded with live results!', 'success');
            }, 100);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Variables
        let currentMode = 'output';
        let calculateTimeout = null;
        const modeButtons = document.querySelectorAll('.vdiv-mode-tab');
        const resetBtn = document.getElementById('resetBtn');
        const includeLoadCheckbox = document.getElementById('includeLoad');
        const loadGroup = document.getElementById('loadGroup');
        const loadResistorSvg = document.getElementById('loadResistor');
        
        const calcSections = {
            'output': document.getElementById('outputMode'),
            'r1': document.getElementById('r1Mode'),
            'r2': document.getElementById('r2Mode'),
            'design': document.getElementById('designMode')
        };

        // Unit conversions
        const unitConversions = {
            voltage: {
                'V': 1,
                'mV': 0.001,
                'kV': 1000
            },
            resistance: {
                'Ω': 1,
                'kΩ': 1000,
                'MΩ': 1000000
            },
            current: {
                'A': 1,
                'mA': 0.001,
                'μA': 0.000001
            }
        };

        // Mode switching
        modeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                modeButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentMode = this.dataset.mode;
                
                // Hide all sections
                Object.values(calcSections).forEach(section => {
                    section.style.display = 'none';
                });
                
                // Show current section
                calcSections[currentMode].style.display = 'block';
                
                // Update additional result card visibility
                updateResultDisplay();
                
                // Trigger live calculation for new mode
                setTimeout(() => {
                    const event = new Event('input', { bubbles: true });
                    const firstInput = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) .vdiv-live-input`);
                    if (firstInput) {
                        firstInput.dispatchEvent(event);
                    }
                }, 100);
            });
        });

        // Load resistance toggle
        includeLoadCheckbox.addEventListener('change', function() {
            loadGroup.style.display = this.checked ? 'block' : 'none';
            loadResistorSvg.style.display = this.checked ? 'block' : 'none';
            
            // Trigger live calculation
            const event = new Event('input', { bubbles: true });
            const activeInput = document.querySelector(`.vdiv-calc-section:not([style*="display: none"]) .vdiv-live-input`);
            if (activeInput) {
                activeInput.dispatchEvent(event);
            }
        });

        // Live calculation on input
        document.querySelectorAll('.vdiv-live-input').forEach(input => {
            input.addEventListener('input', function() {
                // Clear previous timeout
                if (calculateTimeout) {
                    clearTimeout(calculateTimeout);
                }
                
                // Set new timeout for debouncing
                calculateTimeout = setTimeout(() => {
                    calculate(true); // true = live calculation
                }, 300);
            });
            
            input.addEventListener('change', function() {
                // Immediate calculation on change (select, blur)
                calculate(true);
            });
        });
        
        // Reset button
        resetBtn.addEventListener('click', reset);

        // Input validation
        document.querySelectorAll('.vdiv-input').forEach(input => {
            input.addEventListener('input', function() {
                if (this.value < 0) {
                    this.value = '';
                }
            });
        });

        function convertToBaseUnit(value, unitType, unit) {
            return value * unitConversions[unitType][unit];
        }

        function formatValue(value, unitType) {
            if (value === 0) return { value: '0', unit: unitType === 'resistance' ? 'Ω' : 'V' };
            
            const units = {
                voltage: ['mV', 'V', 'kV'],
                resistance: ['Ω', 'kΩ', 'MΩ']
            };
            
            const factors = {
                voltage: [0.001, 1, 1000],
                resistance: [1, 1000, 1000000]
            };
            
            const unitList = units[unitType];
            const factorList = factors[unitType];
            
            let selectedUnit = unitList[1];
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
            
            formattedValue = parseFloat(formattedValue).toString();
            
            return { value: formattedValue, unit: selectedUnit };
        }

        function updateCircuitDiagram(vin, r1, r2, vout, rLoad = null) {
            // Format values for display
            const r1Formatted = formatValue(r1, 'resistance');
            const r2Formatted = formatValue(r2, 'resistance');
            const voutFormatted = formatValue(vout, 'voltage');
            
            document.getElementById('r1Value').textContent = `${r1Formatted.value} ${r1Formatted.unit}`;
            document.getElementById('r2Value').textContent = `${r2Formatted.value} ${r2Formatted.unit}`;
            document.getElementById('voutValue').textContent = `${voutFormatted.value} ${voutFormatted.unit}`;
            
            if (rLoad !== null) {
                const rlFormatted = formatValue(rLoad, 'resistance');
                document.getElementById('rlValue').textContent = `${rlFormatted.value} ${rlFormatted.unit}`;
            }
        }

        function calculateVoltageDivider(vin, r1, r2, rLoad = null) {
            let vout;
            if (rLoad === null || rLoad === 0) {
                // No load
                vout = vin * (r2 / (r1 + r2));
            } else {
                // With load
                const r2Parallel = (r2 * rLoad) / (r2 + rLoad);
                vout = vin * (r2Parallel / (r1 + r2Parallel));
            }
            return vout;
        }

        function findStandardResistor(targetValue, tolerance = 0.05) {
            // E12 series (10% tolerance)
            const e12 = [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2];
            
            // Find the decade multiplier
            let multiplier = 1;
            while (targetValue / multiplier >= 10) {
                multiplier *= 10;
            }
            while (targetValue / multiplier < 1) {
                multiplier /= 10;
            }
            
            // Find closest E12 value
            let closestValue = e12[0] * multiplier;
            let minDiff = Math.abs(targetValue - closestValue);
            
            for (const baseValue of e12) {
                const value = baseValue * multiplier;
                const diff = Math.abs(targetValue - value);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestValue = value;
                }
            }
            
            return closestValue;
        }

        function calculate(isLive = false) {
            try {
                let result = {};
                const includeLoad = includeLoadCheckbox.checked;
                let rLoad = null;
                
                if (includeLoad) {
                    const rLoadValue = parseFloat(document.getElementById('rLoad').value);
                    const rLoadUnit = document.getElementById('rLoadUnit').value;
                    if (!isNaN(rLoadValue) && rLoadValue > 0) {
                        rLoad = convertToBaseUnit(rLoadValue, 'resistance', rLoadUnit);
                    }
                }
                
                switch(currentMode) {
                    case 'output':
                        const vinOutput = parseFloat(document.getElementById('vinOutput').value);
                        const vinOutputUnit = document.getElementById('vinOutputUnit').value;
                        const r1Output = parseFloat(document.getElementById('r1Output').value);
                        const r1OutputUnit = document.getElementById('r1OutputUnit').value;
                        const r2Output = parseFloat(document.getElementById('r2Output').value);
                        const r2OutputUnit = document.getElementById('r2OutputUnit').value;
                        
                        if (isNaN(vinOutput) || isNaN(r1Output) || isNaN(r2Output)) {
                            if (!isLive) showNotification('Please enter valid values for all inputs.', 'error');
                            return;
                        }
                        
                        const vin = convertToBaseUnit(vinOutput, 'voltage', vinOutputUnit);
                        const r1 = convertToBaseUnit(r1Output, 'resistance', r1OutputUnit);
                        const r2 = convertToBaseUnit(r2Output, 'resistance', r2OutputUnit);
                        
                        result.vout = calculateVoltageDivider(vin, r1, r2, rLoad);
                        result.ratio = r2 / (r1 + r2);
                        result.current = vin / (r1 + r2);
                        result.power = vin * result.current;
                        
                        updateCircuitDiagram(vin, r1, r2, result.vout, rLoad);
                        displayResults(result, 'output');
                        break;
                        
                    case 'r1':
                        const vinR1 = parseFloat(document.getElementById('vinR1').value);
                        const vinR1Unit = document.getElementById('vinR1Unit').value;
                        const voutR1 = parseFloat(document.getElementById('voutR1').value);
                                                const voutR1Unit = document.getElementById('voutR1Unit').value;
                        const r2R1 = parseFloat(document.getElementById('r2R1').value);
                        const r2R1Unit = document.getElementById('r2R1Unit').value;
                        
                        if (isNaN(vinR1) || isNaN(voutR1) || isNaN(r2R1)) {
                            if (!isLive) showNotification('Please enter valid values for all inputs.', 'error');
                            return;
                        }
                        
                        const vinR1Base = convertToBaseUnit(vinR1, 'voltage', vinR1Unit);
                        const voutR1Base = convertToBaseUnit(voutR1, 'voltage', voutR1Unit);
                        const r2R1Base = convertToBaseUnit(r2R1, 'resistance', r2R1Unit);
                        
                        if (voutR1Base >= vinR1Base) {
                            if (!isLive) showNotification('Output voltage must be less than input voltage.', 'error');
                            return;
                        }
                        
                        result.r1 = r2R1Base * ((vinR1Base / voutR1Base) - 1);
                        result.r1Standard = findStandardResistor(result.r1);
                        result.voutActual = calculateVoltageDivider(vinR1Base, result.r1Standard, r2R1Base, rLoad);
                        
                        updateCircuitDiagram(vinR1Base, result.r1, r2R1Base, voutR1Base, rLoad);
                        displayResults(result, 'r1');
                        break;
                        
                    case 'r2':
                        const vinR2 = parseFloat(document.getElementById('vinR2').value);
                        const vinR2Unit = document.getElementById('vinR2Unit').value;
                        const voutR2 = parseFloat(document.getElementById('voutR2').value);
                        const voutR2Unit = document.getElementById('voutR2Unit').value;
                        const r1R2 = parseFloat(document.getElementById('r1R2').value);
                        const r1R2Unit = document.getElementById('r1R2Unit').value;
                        
                        if (isNaN(vinR2) || isNaN(voutR2) || isNaN(r1R2)) {
                            if (!isLive) showNotification('Please enter valid values for all inputs.', 'error');
                            return;
                        }
                        
                        const vinR2Base = convertToBaseUnit(vinR2, 'voltage', vinR2Unit);
                        const voutR2Base = convertToBaseUnit(voutR2, 'voltage', voutR2Unit);
                        const r1R2Base = convertToBaseUnit(r1R2, 'resistance', r1R2Unit);
                        
                        if (voutR2Base >= vinR2Base) {
                            if (!isLive) showNotification('Output voltage must be less than input voltage.', 'error');
                            return;
                        }
                        
                        result.r2 = (voutR2Base * r1R2Base) / (vinR2Base - voutR2Base);
                        result.r2Standard = findStandardResistor(result.r2);
                        result.voutActual = calculateVoltageDivider(vinR2Base, r1R2Base, result.r2Standard, rLoad);
                        
                        updateCircuitDiagram(vinR2Base, r1R2Base, result.r2, voutR2Base, rLoad);
                        displayResults(result, 'r2');
                        break;
                        
                    case 'design':
                        const vinDesign = parseFloat(document.getElementById('vinDesign').value);
                        const vinDesignUnit = document.getElementById('vinDesignUnit').value;
                        const voutDesign = parseFloat(document.getElementById('voutDesign').value);
                        const voutDesignUnit = document.getElementById('voutDesignUnit').value;
                        const currentDesign = parseFloat(document.getElementById('currentDesign').value);
                        const currentDesignUnit = document.getElementById('currentDesignUnit').value;
                        
                        if (isNaN(vinDesign) || isNaN(voutDesign) || isNaN(currentDesign)) {
                            if (!isLive) showNotification('Please enter valid values for all inputs.', 'error');
                            return;
                        }
                        
                        const vinDesignBase = convertToBaseUnit(vinDesign, 'voltage', vinDesignUnit);
                        const voutDesignBase = convertToBaseUnit(voutDesign, 'voltage', voutDesignUnit);
                        const currentDesignBase = convertToBaseUnit(currentDesign, 'current', currentDesignUnit);
                        
                        if (voutDesignBase >= vinDesignBase) {
                            if (!isLive) showNotification('Output voltage must be less than input voltage.', 'error');
                            return;
                        }
                        
                        // Calculate total resistance based on current
                        const totalR = vinDesignBase / currentDesignBase;
                        const ratio = voutDesignBase / vinDesignBase;
                        
                        result.r2 = totalR * ratio;
                        result.r1 = totalR - result.r2;
                        result.r1Standard = findStandardResistor(result.r1);
                        result.r2Standard = findStandardResistor(result.r2);
                        result.voutActual = calculateVoltageDivider(vinDesignBase, result.r1Standard, result.r2Standard, rLoad);
                        result.powerDissipation = vinDesignBase * currentDesignBase;
                        
                        updateCircuitDiagram(vinDesignBase, result.r1, result.r2, voutDesignBase, rLoad);
                        displayResults(result, 'design');
                        break;
                }
                
                if (!isLive) {
                    showNotification('Calculation complete!', 'success');
                }
                
            } catch (error) {
                if (!isLive) {
                    showNotification('An error occurred during calculation.', 'error');
                }
                console.error(error);
            }
        }

        function displayResults(result, mode) {
            const voutResultElement = document.getElementById('voutResult');
            const voutResultUnitElement = document.getElementById('voutResultUnit');
            const voutFormulaElement = document.getElementById('voutFormula');
            const additionalResultCard = document.getElementById('additionalResult');
            const additionalLabel = document.getElementById('additionalLabel');
            const additionalValue = document.getElementById('additionalValue');
            const additionalUnit = document.getElementById('additionalUnit');
            const additionalFormula = document.getElementById('additionalFormula');
            
            switch(mode) {
                case 'output':
                    const voutFormatted = formatValue(result.vout, 'voltage');
                    voutResultElement.textContent = voutFormatted.value;
                    voutResultUnitElement.textContent = voutFormatted.unit;
                    voutFormulaElement.textContent = `Ratio: ${(result.ratio * 100).toFixed(1)}% | Current: ${(result.current * 1000).toFixed(2)} mA`;
                    
                    additionalResultCard.style.display = 'block';
                    additionalLabel.textContent = 'Power Dissipation';
                    additionalValue.textContent = (result.power * 1000).toFixed(2);
                    additionalUnit.textContent = 'mW';
                    additionalFormula.textContent = 'P = V × I';
                    break;
                    
                case 'r1':
                    const r1Formatted = formatValue(result.r1, 'resistance');
                    voutResultElement.textContent = r1Formatted.value;
                    voutResultUnitElement.textContent = r1Formatted.unit;
                    voutFormulaElement.textContent = 'R1 = R2 × ((Vin/Vout) - 1)';
                    
                    additionalResultCard.style.display = 'block';
                    additionalLabel.textContent = 'Standard R1 Value';
                    const r1StandardFormatted = formatValue(result.r1Standard, 'resistance');
                    additionalValue.textContent = r1StandardFormatted.value;
                    additionalUnit.textContent = r1StandardFormatted.unit;
                    const voutActualFormatted = formatValue(result.voutActual, 'voltage');
                    additionalFormula.textContent = `Actual Vout: ${voutActualFormatted.value} ${voutActualFormatted.unit}`;
                    break;
                    
                case 'r2':
                    const r2Formatted = formatValue(result.r2, 'resistance');
                    voutResultElement.textContent = r2Formatted.value;
                    voutResultUnitElement.textContent = r2Formatted.unit;
                    voutFormulaElement.textContent = 'R2 = (Vout × R1) / (Vin - Vout)';
                    
                    additionalResultCard.style.display = 'block';
                    additionalLabel.textContent = 'Standard R2 Value';
                    const r2StandardFormatted = formatValue(result.r2Standard, 'resistance');
                    additionalValue.textContent = r2StandardFormatted.value;
                    additionalUnit.textContent = r2StandardFormatted.unit;
                    const voutActual2Formatted = formatValue(result.voutActual, 'voltage');
                    additionalFormula.textContent = `Actual Vout: ${voutActual2Formatted.value} ${voutActual2Formatted.unit}`;
                    break;
                    
                case 'design':
                    const r1DesignFormatted = formatValue(result.r1Standard, 'resistance');
                    const r2DesignFormatted = formatValue(result.r2Standard, 'resistance');
                    voutResultElement.textContent = `R1: ${r1DesignFormatted.value} ${r1DesignFormatted.unit}`;
                    voutResultUnitElement.textContent = '';
                    voutFormulaElement.textContent = `R2: ${r2DesignFormatted.value} ${r2DesignFormatted.unit}`;
                    
                    additionalResultCard.style.display = 'block';
                    additionalLabel.textContent = 'Actual Output';
                    const voutDesignFormatted = formatValue(result.voutActual, 'voltage');
                    additionalValue.textContent = voutDesignFormatted.value;
                    additionalUnit.textContent = voutDesignFormatted.unit;
                    additionalFormula.textContent = `Power: ${(result.powerDissipation * 1000).toFixed(2)} mW`;
                    break;
            }
        }

        function updateResultDisplay() {
            const additionalResultCard = document.getElementById('additionalResult');
            additionalResultCard.style.display = 'none';
        }

        function reset() {
            // Clear all inputs
            document.querySelectorAll('.vdiv-input').forEach(input => {
                input.value = '';
            });
            
            // Reset checkboxes
            includeLoadCheckbox.checked = false;
            loadGroup.style.display = 'none';
            loadResistorSvg.style.display = 'none';
            
            // Reset results
            document.getElementById('voutResult').textContent = '0';
            document.getElementById('voutResultUnit').textContent = 'V';
            document.getElementById('voutFormula').textContent = 'Vout = Vin × (R2 / (R1 + R2))';
            document.getElementById('additionalResult').style.display = 'none';
            
            // Reset circuit diagram
            document.getElementById('r1Value').textContent = '-';
            document.getElementById('r2Value').textContent = '-';
            document.getElementById('voutValue').textContent = '-';
            document.getElementById('rlValue').textContent = '-';
            
            showNotification('Calculator reset.', 'success');
        }

        function showNotification(message, type = 'success') {
            const notification = document.getElementById('vdivNotification');
            const notificationText = document.getElementById('vdivNotificationText');
            const icon = notification.querySelector('i');
            
            notificationText.textContent = message;
            notification.className = `vdiv-notification vdiv-notification-${type}`;
            
            // Update icon
            if (type === 'error') {
                icon.className = 'fas fa-exclamation-circle';
            } else if (type === 'warning') {
                icon.className = 'fas fa-exclamation-triangle';
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
        updateResultDisplay();
        
        // Trigger initial calculation if any values are pre-filled
        setTimeout(() => {
            const firstInput = document.querySelector('.vdiv-calc-section:not([style*="display: none"]) .vdiv-live-input');
            if (firstInput && firstInput.value) {
                const event = new Event('input', { bubbles: true });
                firstInput.dispatchEvent(event);
            }
        }, 100);
    });
</script>
