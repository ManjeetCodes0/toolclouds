---
title: "PCB Trace Width Calculator: Calculate Current Capacity & Temperature Rise"
localtitle: "PCB Trace Width Calculator"
layout: tool
categories: [electricalCalc, engineeringCalc, calculators]
permalink: /calculators/electrical/pcb-trace-width-calculator
description: "Free PCB trace width calculator to determine optimal copper trace dimensions for your circuit board design. Calculate current capacity, temperature rise, and resistance with IPC-2221 standards for reliable PCB layouts."
published: false
faq:
  - q: "What is the IPC-2221 formula for trace width?"
    a: "The IPC-2221 formula calculates trace width based on current, temperature rise, and copper thickness. For external layers: Area = (Current / (k × ΔT^0.44))^(1/0.725), where k=0.048 for external traces. The width is then calculated by dividing the area by copper thickness. Our calculator handles all these complex calculations automatically!"
  - q: "How much current can a 10 mil trace carry?"
    a: "A 10 mil (0.254mm) trace with 1 oz copper can typically carry about 0.5-1A for a 10°C temperature rise on external layers. However, this depends heavily on copper thickness, ambient temperature, and whether its an internal or external layer. Always use a calculator for accurate results."
  - q: "Why are internal layer traces wider than external?"
    a: "Internal traces need to be about 2x wider than external traces for the same current because they cant dissipate heat as efficiently. External traces have air cooling, while internal traces are surrounded by FR4 material which is a poor heat conductor. This is why the IPC-2221 standard has different formulas for each."
  - q: "What happens if my trace is too narrow?"
    a: "If a trace is too narrow for the current it carries, it will heat up excessively. This can cause: delamination of the PCB, solder joint failures, trace burnout (acting like a fuse), increased resistance leading to voltage drops, and in extreme cases, fire hazards. Always design with safety margins!"
  - q: "Should I use 1 oz or 2 oz copper for high current?"
    a: "2 oz copper (70 µm) allows narrower traces for the same current capacity compared to 1 oz (35 µm). Use 2 oz when: space is limited, currents exceed 3-5A, thermal management is critical, or cost isn't the primary concern. Most standard PCBs use 1 oz copper, which is sufficient for currents under 3A."
  - q: "How do I calculate trace resistance?"
    a: "Trace resistance = (Resistivity × Length) / (Width × Thickness). For copper at 25°C, resistivity is 1.7 × 10^-8 Ω·m. A 10 mil wide, 1 oz copper trace has about 0.5 mΩ per mm length. Temperature increases resistance by about 0.4% per °C. Our calculator includes resistance calculations!"
  - q: "What's the difference between minimum and recommended trace width?"
    a: "Minimum trace width is the absolute smallest size that can handle your current without exceeding temperature limits. Recommended width includes safety margins (typically 20-50% wider) to account for manufacturing tolerances, environmental factors, and long-term reliability. Always use recommended values in your designs!"
---

<style>
    :root {
        --pcb-primary: #00d4aa;
        --pcb-secondary: #ff6b6b;
        --pcb-accent: #4ecdc4;
        --pcb-warning: #ffe66d;
        --pcb-dark: #1a1a2e;
        --pcb-darker: #0f0f1e;
        --pcb-light: #edf2f7;
        --pcb-copper: #b87333;
        --pcb-solder: #c0c0c0;
        --pcb-substrate: #228b22;
        --pcb-gradient-1: #667eea;
        --pcb-gradient-2: #764ba2;
        --pcb-gradient-3: #f093fb;
        --pcb-shadow: 0 20px 40px rgba(0,0,0,0.3);
        --pcb-glow: 0 0 30px rgba(0,212,170,0.5);
    }

    .pcb-wrapper {
        background: var(--pcb-darker);
        color: var(--pcb-light);
        min-height: 100vh;
        font-family: 'Inter', system-ui, sans-serif;
        position: relative;
        overflow: hidden;
    }

    /* Animated Circuit Background */
    .pcb-circuit-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.1;
        pointer-events: none;
        background-image: 
            repeating-linear-gradient(
                0deg,
                transparent,
                transparent 40px,
                var(--pcb-copper) 40px,
                var(--pcb-copper) 42px
            ),
            repeating-linear-gradient(
                90deg,
                transparent,
                transparent 40px,
                var(--pcb-copper) 40px,
                var(--pcb-copper) 42px
            );
        animation: circuit-flow 20s linear infinite;
    }

    @keyframes circuit-flow {
        0% { transform: translate(0, 0); }
        100% { transform: translate(42px, 42px); }
    }

    /* Floating PCB Elements */
    .pcb-float {
        position: absolute;
        pointer-events: none;
    }

    .pcb-float-1 {
        top: 10%;
        left: 5%;
        width: 150px;
        height: 150px;
        background: linear-gradient(135deg, var(--pcb-primary), var(--pcb-accent));
        border-radius: 20px;
        opacity: 0.1;
        animation: float-pcb 15s ease-in-out infinite;
    }

    .pcb-float-2 {
        bottom: 20%;
        right: 10%;
        width: 200px;
        height: 200px;
        background: linear-gradient(45deg, var(--pcb-secondary), var(--pcb-warning));
        border-radius: 50%;
        opacity: 0.08;
        animation: float-pcb 20s ease-in-out infinite reverse;
    }

    @keyframes float-pcb {
        0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
        33% { transform: translateY(-20px) rotate(120deg) scale(1.1); }
        66% { transform: translateY(10px) rotate(240deg) scale(0.95); }
    }

    .pcb-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        position: relative;
        z-index: 1;
    }

    .pcb-header {
        text-align: center;
        margin-bottom: 3rem;
        animation: slideDown 0.8s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .pcb-title {
        font-size: 3.5rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--pcb-primary), var(--pcb-accent), var(--pcb-secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
    }

    .pcb-subtitle {
        font-size: 1.25rem;
        color: var(--pcb-light);
        opacity: 0.8;
        font-weight: 300;
    }

    /* Main Calculator Card */
    .pcb-calc-card {
        background: rgba(26, 26, 46, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 30px;
        padding: 3rem;
        box-shadow: var(--pcb-shadow);
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
        animation: fadeInScale 0.6s ease-out 0.2s both;
    }

    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .pcb-calc-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--pcb-primary), transparent);
        animation: scan-line 3s linear infinite;
    }

    @keyframes scan-line {
        0% { left: -100%; }
        100% { left: 100%; }
    }

    /* Layer Selector */
    .pcb-layer-selector {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        padding: 0.5rem;
        background: rgba(15, 15, 30, 0.5);
        border-radius: 20px;
    }

    .pcb-layer-btn {
        flex: 1;
        padding: 1rem;
        border: none;
        background: transparent;
        color: var(--pcb-light);
        border-radius: 15px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .pcb-layer-btn:hover {
        transform: translateY(-2px);
    }

    .pcb-layer-btn.active {
        background: linear-gradient(135deg, var(--pcb-primary), var(--pcb-accent));
        color: var(--pcb-dark);
        box-shadow: var(--pcb-glow);
    }

    /* Input Grid */
    .pcb-input-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .pcb-input-group {
        position: relative;
    }

    .pcb-label {
        display: block;
        margin-bottom: 0.75rem;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--pcb-primary);
        font-weight: 600;
    }

    .pcb-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
    }

    .pcb-input {
        width: 100%;
        padding: 1.25rem;
        background: rgba(15, 15, 30, 0.8);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        color: var(--pcb-light);
        font-size: 1.125rem;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .pcb-input:focus {
        outline: none;
        border-color: var(--pcb-primary);
        box-shadow: 0 0 0 3px rgba(0, 212, 170, 0.2);
        transform: translateY(-2px);
    }

    .pcb-unit {
        position: absolute;
        right: 1.25rem;
        color: var(--pcb-light);
        opacity: 0.6;
        font-weight: 600;
        pointer-events: none;
    }

    /* Temperature Selector */
    .pcb-temp-selector {
        display: flex;
        gap: 0.5rem;
        background: rgba(15, 15, 30, 0.8);
        padding: 0.25rem;
        border-radius: 15px;
    }

    .pcb-temp-btn {
        flex: 1;
        padding: 0.75rem;
        border: none;
        background: transparent;
        color: var(--pcb-light);
        border-radius: 10px;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .pcb-temp-btn:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .pcb-temp-btn.active {
        background: var(--pcb-accent);
        color: var(--pcb-dark);
        font-weight: 600;
    }

    /* Calculate Button */
    .pcb-calculate-btn {
        width: 100%;
        padding: 1.5rem;
        margin-top: 2rem;
        background: linear-gradient(135deg, var(--pcb-primary), var(--pcb-accent));
        border: none;
        border-radius: 20px;
        color: var(--pcb-dark);
        font-size: 1.125rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .pcb-calculate-btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
    }

    .pcb-calculate-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0, 212, 170, 0.4);
    }

    .pcb-calculate-btn:active::before {
        width: 300px;
        height: 300px;
    }

    /* Results Section */
    .pcb-results {
        margin-top: 3rem;
        animation: slideUp 0.6s ease-out;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .pcb-result-card {
        background: linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(78, 205, 196, 0.1));
        border: 2px solid var(--pcb-primary);
        border-radius: 25px;
        padding: 2.5rem;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .pcb-result-title {
        font-size: 1.25rem;
        color: var(--pcb-primary);
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    .pcb-result-value {
        font-size: 4rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--pcb-primary), var(--pcb-accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1;
        margin-bottom: 0.5rem;
    }

    .pcb-result-unit {
        font-size: 1.5rem;
        color: var(--pcb-light);
        opacity: 0.8;
    }

    /* Trace Visual */
    .pcb-trace-visual {
        margin: 3rem 0;
        padding: 2rem;
        background: rgba(15, 15, 30, 0.5);
        border-radius: 20px;
        position: relative;
    }

    .pcb-board-svg {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        display: block;
    }

    /* Additional Results Grid */
    .pcb-details-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .pcb-detail-item {
        background: rgba(15, 15, 30, 0.8);
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    .pcb-detail-item:hover {
        transform: translateY(-3px);
        border-color: var(--pcb-primary);
        box-shadow: 0 10px 20px rgba(0, 212, 170, 0.2);
    }

    .pcb-detail-label {
        font-size: 0.875rem;
        color: var(--pcb-light);
        opacity: 0.7;
        margin-bottom: 0.5rem;
    }

    .pcb-detail-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--pcb-accent);
    }

    /* Info Section */
    .pcb-info-content {
        margin-top: 4rem;
        padding: 3rem;
        background: rgba(26, 26, 46, 0.6);
        backdrop-filter: blur(10px);
        border-radius: 25px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .pcb-info-content h2 {
        color: var(--pcb-primary);
        font-size: 2rem;
        margin-bottom: 1.5rem;
        font-weight: 700;
    }

    .pcb-info-content h3 {
        color: var(--pcb-accent);
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }

    .pcb-info-content p {
        color: var(--pcb-light);
        line-height: 1.8;
        margin-bottom: 1rem;
        opacity: 0.9;
    }

    .pcb-info-content ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
    }

    .pcb-info-content li {
        color: var(--pcb-light);
        padding-left: 2rem;
        margin-bottom: 0.75rem;
        position: relative;
        line-height: 1.6;
    }

    .pcb-info-content li::before {
        content: "→";
        position: absolute;
        left: 0;
        color: var(--pcb-primary);
        font-weight: bold;
    }

    /* Quick Reference Table */
    .pcb-reference-table {
        width: 100%;
        margin-top: 2rem;
        border-collapse: collapse;
        background: rgba(15, 15, 30, 0.5);
        border-radius: 15px;
        overflow: hidden;
    }

    .pcb-reference-table th {
        background: linear-gradient(135deg, var(--pcb-primary), var(--pcb-accent));
        color: var(--pcb-dark);
        padding: 1rem;
        text-align: left;
        font-weight: 700;
    }

    .pcb-reference-table td {
        padding: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--pcb-light);
    }

    .pcb-reference-table tr:hover td {
        background: rgba(0, 212, 170, 0.1);
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .pcb-title {
            font-size: 2.5rem;
        }
        
        .pcb-calc-card {
            padding: 2rem;
        }
        
        .pcb-result-value {
            font-size: 3rem;
        }
        
        .pcb-input-grid {
            grid-template-columns: 1fr;
        }
        
        .pcb-layer-selector {
            flex-direction: column;
        }
    }

    /* Loading Animation */
    .pcb-loading {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: var(--pcb-primary);
        animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
</style>

<div class="pcb-wrapper">
    <div class="pcb-circuit-bg"></div>
    <div class="pcb-float pcb-float-1"></div>
    <div class="pcb-float pcb-float-2"></div>
    
    <div class="pcb-container">
        <header class="pcb-header">
            <h1 class="pcb-title">PCB Trace Width Calculator</h1>
            <p class="pcb-subtitle">Design reliable copper traces with IPC-2221 standards</p>
        </header>

        <div class="pcb-calc-card">
            <div class="pcb-layer-selector">
                <button class="pcb-layer-btn active" data-layer="external">
                    <span>⬆️ External Layer</span>
                </button>
                <button class="pcb-layer-btn" data-layer="internal">
                    <span>📦 Internal Layer</span>
                </button>
            </div>

            <div class="pcb-input-grid">
                <div class="pcb-input-group">
                    <label class="pcb-label">Current</label>
                    <div class="pcb-input-wrapper">
                        <input type="number" class="pcb-input" id="current" value="1" step="0.1" min="0.1">
                        <span class="pcb-unit">A</span>
                    </div>
                </div>

                <div class="pcb-input-group">
                    <label class="pcb-label">Temperature Rise</label>
                    <div class="pcb-temp-selector">
                        <button class="pcb-temp-btn active" data-temp="10">10°C</button>
                        <button class="pcb-temp-btn" data-temp="20">20°C</button>
                        <button class="pcb-temp-btn" data-temp="30">30°C</button>
                        <button class="pcb-temp-btn" data-temp="40">40°C</button>
                    </div>
                </div>

                <div class="pcb-input-group">
                    <label class="pcb-label">Copper Thickness</label>
                    <div class="pcb-input-wrapper">
                        <select class="pcb-input" id="copper-thickness">
                            <option value="0.5">0.5 oz (17.5 µm)</option>
                            <option value="1" selected>1 oz (35 µm)</option>
                            <option value="2">2 oz (70 µm)</option>
                            <option value="3">3 oz (105 µm)</option>
                        </select>
                    </div>
                </div>

                <div class="pcb-input-group">
                    <label class="pcb-label">Trace Length</label>
                    <div class="pcb-input-wrapper">
                        <input type="number" class="pcb-input" id="trace-length" value="25" step="1" min="1">
                        <span class="pcb-unit">mm</span>
                    </div>
                </div>
            </div>

            <button class="pcb-calculate-btn" onclick="calculatePCBTrace()">
                Calculate Trace Width
            </button>
        </div>

        <div class="pcb-results" id="results" style="display: none;">
            <div class="pcb-result-card">
                <h3 class="pcb-result-title">Recommended Trace Width</h3>
                <div class="pcb-result-value" id="trace-width">0.254</div>
                <div class="pcb-result-unit">mm</div>
            </div>

            <div class="pcb-trace-visual">
                <svg class="pcb-board-svg" viewBox="0 0 600 300">
                    <!-- PCB Board -->
                    <rect x="50" y="50" width="500" height="200" fill="#228b22" rx="10"/>
                    
                    <!-- Copper Trace -->
                    <rect id="trace-visual" x="100" y="140" width="400" height="20" fill="#b87333" rx="2"/>
                    
                    <!-- Pads -->
                    <circle cx="100" cy="150" r="30" fill="#c0c0c0"/>
                    <circle cx="500" cy="150" r="30" fill="#c0c0c0"/>
                    
                    <!-- Dimension Lines -->
                    <line x1="100" y1="180" x2="500" y2="180" stroke="#fff" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>
                    <text x="300" y="200" text-anchor="middle" fill="#fff" font-size="14">Length: <tspan id="svg-length">25mm</tspan></text>
                    
                    <line x1="80" y1="140" x2="80" y2="160" stroke="#fff" stroke-width="1" opacity="0.5"/>
                    <text x="70" y="155" text-anchor="end" fill="#fff" font-size="12" transform="rotate(-90 70 155)">Width: <tspan id="svg-width">0.254mm</tspan></text>
                </svg>
            </div>

            <div class="pcb-details-grid">
                <div class="pcb-detail-item">
                    <div class="pcb-detail-label">Minimum Width</div>
                    <div class="pcb-detail-value" id="min-width">0.203 mm</div>
                </div>
                <div class="pcb-detail-item">
                    <div class="pcb-detail-label">Trace Resistance</div>
                    <div class="pcb-detail-value" id="resistance">12.5 mΩ</div>
                </div>
                <div class="pcb-detail-item">
                    <div class="pcb-detail-label">Voltage Drop</div>
                    <div class="pcb-detail-value" id="voltage-drop">12.5 mV</div>
                </div>
                <div class="pcb-detail-item">
                    <div class="pcb-detail-label">Power Loss</div>
                    <div class="pcb-detail-value" id="power-loss">12.5 mW</div>
                </div>
            </div>
        </div>

        <div class="pcb-reference-table-wrapper" style="margin-top: 3rem; overflow-x: auto;">
            <h3 style="color: var(--pcb-primary); margin-bottom: 1rem;">Quick Reference - 1oz Copper, 10°C Rise</h3>
            <table class="pcb-reference-table">
                <thead>
                    <tr>
                        <th>Current (A)</th>
                        <th>External Layer (mm)</th>
                        <th>Internal Layer (mm)</th>
                        <th>Typical Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0.5</td>
                        <td>0.15</td>
                        <td>0.30</td>
                        <td>Signal traces, LEDs</td>
                    </tr>
                    <tr>
                        <td>1.0</td>
                        <td>0.25</td>
                        <td>0.50</td>
                        <td>Power to ICs, small motors</td>
                    </tr>
                    <tr>
                        <td>2.0</td>
                        <td>0.50</td>
                        <td>1.00</td>
                        <td>Power distribution</td>
                    </tr>
                    <tr>
                        <td>5.0</td>
                        <td>1.50</td>
                        <td>3.00</td>
                        <td>Main power rails</td>
                    </tr>
                    <tr>
                        <td>10.0</td>
                        <td>3.50</td>
                        <td>7.00</td>
                        <td>High power applications</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="pcb-info-content">
            <h2>Understanding PCB Trace Width & Voltage Drop</h2>
            
            <p>When your designing a PCB, getting the trace width right is absolutely critical. Too narrow? You'll watch your board go up in smoke. Too wide? You waste space and money. This calculator helps you find that sweet spot using the industry-standard IPC-2221 formulas.</p>

            <h3>Why Trace Width Matters</h3>
            <p>Every copper trace on your PCB acts like a tiny resistor. When current flows through it, it generates heat and causes voltage drop. The narrower the trace, the higher the resistance - it's that simple. But here's where it gets tricky: heat builds up, and if you can't dissipate it fast enough, bad things happen.</p>

            <ul>
                <li>Excessive heat can cause PCB delamination (layers separating)</li>
                <li>Solder joints near hot traces become unreliable</li>
                <li>In extreme cases, traces can fuse open like a blown fuse</li>
                <li>Voltage drops affect circuit performance, especially in low-voltage designs</li>
            </ul>

            <h3>The IPC-2221 Standard</h3>
            <p>The formulas we use come from extensive testing by the IPC (Association Connecting Electronics Industries). They've tested thousands of boards to failure, so we don't have to! The key factors they identified are:</p>

            <ul>
                <li><strong>Current capacity:</strong> How many amps your trace needs to carry</li>
                <li><strong>Temperature rise:</strong> How hot you're willing to let things get (10°C is conservative, 20°C is common, 40°C is pushing it)</li>
                <li><strong>Copper weight:</strong> Thicker copper = better current handling (1 oz is standard, 2 oz for power)</li>
                <li><strong>Layer location:</strong> External traces cool better than internal ones</li>
            </ul>

            <h3>Real-World Design Tips</h3>
            <p>After years of designing boards (and yes, smoking a few), here's what I've learned:</p>

            <ul>
                <li><strong>Always add margin:</strong> Use 125% of calculated width minimum. Manufacturing tolerances and environmental factors will thank you</li>
                <li><strong>Consider ambient temperature:</strong> That 10°C rise assumes 25°C ambient. In a hot enclosure? Derate accordingly</li>
                <li><strong>Watch the voltage drop:</strong> For digital circuits, keep drops under 5% of supply voltage</li>
                <li><strong>Multiple vias for layer changes:</strong> Single vias are bottlenecks - use 2-3 for currents over 1A</li>
                <li><strong>Thermal relief on pads:</strong> Makes soldering easier and prevents heat damage</li>
            </ul>

            <h3>Common Mistakes to Avoid</h3>
            <p>I see these errors all the time in design reviews:</p>

            <ul>
                <li>Using minimum trace width everywhere - fine for signals, disaster for power</li>
                <li>Forgetting about via current capacity (vias handle about 0.5-1A each)</li>
                <li>Not accounting for parallel traces heating each other</li>
                <li>Ignoring manufacturer capabilities - can they actually make 0.1mm traces reliably?</li>
            </ul>

            <h3>When to Go Beyond Traces</h3>
            <p>Sometimes a simple trace isn't enough. Consider these alternatives:</p>

            <ul>
                <li><strong>Copper pours:</strong> For currents over 5A, flood fill is your friend</li>
                <li><strong>Multiple parallel traces:</strong> Spreads current and heat</li>
                <li><strong>Heavier copper:</strong> 2 oz or 3 oz for serious power handling</li>
                <li><strong>External bus bars:</strong> For really high currents (>20A)</li>
            </ul>

            <p>Remember: copper is cheap, but failed boards and field returns aren't. When in doubt, go wider!</p>
        </div>
    </div>
</div>

<script>
let currentLayer = 'external';
let currentTemp = 10;

// Layer selector
document.querySelectorAll('.pcb-layer-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.pcb-layer-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentLayer = this.dataset.layer;
    });
});

// Temperature selector
document.querySelectorAll('.pcb-temp-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.pcb-temp-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentTemp = parseInt(this.dataset.temp);
    });
});

function calculatePCBTrace() {
    const current = parseFloat(document.getElementById('current').value);
    const copperWeight = parseFloat(document.getElementById('copper-thickness').value);
    const traceLength = parseFloat(document.getElementById('trace-length').value);
    
    // IPC-2221 constants
    const k = currentLayer === 'external' ? 0.048 : 0.024;
    const b = 0.44;
    const c = 0.725;
    
    // Calculate cross-sectional area (mils²)
    const area = Math.pow((current / (k * Math.pow(currentTemp, b))), (1/c));
    
    // Convert copper weight to thickness in mils
    const thickness = copperWeight * 1.37; // 1 oz = 1.37 mils
    
    // Calculate width in mils then convert to mm
    const widthMils = area / thickness;
    const widthMm = widthMils * 0.0254;
    
    // Add safety margin
    const recommendedWidth = widthMm * 1.25;
    
    // Calculate resistance (milliohms)
    const resistivity = 1.7e-8; // Copper resistivity in ohm-meters
    const crossSectionM2 = (widthMm / 1000) * (thickness * 0.0254 / 1000);
    const resistance = (resistivity * (traceLength / 1000)) / crossSectionM2 * 1000;
    
    // Calculate voltage drop and power loss
    const voltageDrop = current * resistance;
    const powerLoss = current * current * resistance;
    
    // Update results
    document.getElementById('trace-width').textContent = recommendedWidth.toFixed(3);
    document.getElementById('min-width').textContent = widthMm.toFixed(3) + ' mm';
    document.getElementById('resistance').textContent = resistance.toFixed(1) + ' mΩ';
    document.getElementById('voltage-drop').textContent = voltageDrop.toFixed(1) + ' mV';
    document.getElementById('power-loss').textContent = powerLoss.toFixed(1) + ' mW';
    
    // Update SVG
    document.getElementById('svg-width').textContent = recommendedWidth.toFixed(3) + 'mm';
    document.getElementById('svg-length').textContent = traceLength + 'mm';
    
    // Adjust trace visual width (scale for visibility)
    const visualWidth = Math.min(Math.max(recommendedWidth * 20, 10), 40);
    document.getElementById('trace-visual').setAttribute('height', visualWidth);
    document.getElementById('trace-visual').setAttribute('y', 150 - visualWidth/2);
    
    // Show results
    document.getElementById('results').style.display = 'block';
}

// Add input event listeners for real-time calculation
document.querySelectorAll('.pcb-input').forEach(input => {
    input.addEventListener('input', () => {
        if (document.getElementById('results').style.display === 'block') {
            calculatePCBTrace();
        }
    });
});
</script>