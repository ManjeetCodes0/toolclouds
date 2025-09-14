---
title: "Battery Backup Calculator - How Long Will Your Battery Last?"
localtitle: "Battery Backup Calculator"
layout: tool
categories: [electricalCalc, powerCalc, calculators]
permalink: /calculators/electrical/battery-backup-calculator
description: "Free battery backup calculator to find out how long your battery will power your devices. Calculate runtime for UPS, solar batteries, power banks with efficiency losses. Perfect for emergency planning!"
published: false
faq:
  - q: "How do I calculate battery backup time?"
    a: "Battery backup time is calculated using: Runtime (hours) = Battery Capacity (Ah) × Battery Voltage (V) × Efficiency (%) ÷ Device Power (W). For example, a 100Ah 12V battery with 85% efficiency powering a 50W device will last about 20.4 hours."
  - q: "What is battery efficiency and why does it matter?"
    a: "Battery efficiency refers to how much of the stored energy can actually be used. Typical efficiencies are: Lead-acid (80-85%), Lithium-ion (90-95%), with inverter losses (85-90%). A 85% efficiency means you can only use 85% of the battery's rated capacity."
  - q: "How accurate is this battery backup calculator?"
    a: "This calculator provides estimates based on constant power draw. Real-world runtime may vary due to: temperature effects, battery age, variable loads, and depth of discharge limits. For critical applications, add 20-30% safety margin."
  - q: "What's the difference between Ah and Wh?"
    a: "Ah (Ampere-hours) measures charge capacity, while Wh (Watt-hours) measures energy capacity. To convert: Wh = Ah × Voltage. A 100Ah 12V battery stores 1200Wh of energy. Wh is better for comparing batteries with different voltages."
  - q: "How do I size a battery for my needs?"
    a: "To size a battery: 1) Calculate total device power in watts, 2) Determine required runtime in hours, 3) Apply formula: Battery Ah = (Power × Hours) ÷ (Voltage × Efficiency), 4) Add 20-30% safety margin, 5) Consider depth of discharge limits."
  - q: "Why does my battery not last as long as calculated?"
    a: "Common reasons include: battery aging (loses 20% capacity after 2-3 years), temperature extremes (cold reduces capacity), high discharge rates (Peukert effect), parasitic loads, and poor connections causing voltage drops."
  - q: "What is depth of discharge (DoD) and why is it important?"
    a: "DoD is how much battery capacity you use before recharging. Using only 50% DoD can double battery lifespan compared to 80% DoD. Recommended DoD: Lead-acid (50%), AGM (80%), Lithium (80-90%). Factor this into your calculations."
---

<style>
    :root {
        /* Neon Energy Theme */
        --gradient-1: #00ff88;  /* Electric green */
        --gradient-2: #00ccff;  /* Cyan blue */
        --gradient-3: #ff00ff;  /* Magenta */
        --gradient-4: #ffaa00;  /* Amber */
        
        /* Base Colors */
        --bg: #050512;
        --surface: #0a0a1f;
        --surface-light: #131333;
        --text: #ffffff;
        --text-dim: #8892b0;
        --accent: #00ff88;
        --border: rgba(255, 255, 255, 0.1);
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background: var(--bg);
        color: var(--text);
        min-height: 100vh;
        overflow-x: hidden;
        line-height: 1.6;
    }
    
    /* Floating Background Animation */
    .bg-animation {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 0;
    }
    
    .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.3;
        animation: float 20s infinite ease-in-out;
    }
    
    .orb-1 {
        width: 600px;
        height: 600px;
        background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
        top: -200px;
        right: -200px;
    }
    
    .orb-2 {
        width: 500px;
        height: 500px;
        background: linear-gradient(135deg, var(--gradient-3), var(--gradient-4));
        bottom: -150px;
        left: -150px;
        animation-delay: 7s;
    }
    
    .orb-3 {
        width: 400px;
        height: 400px;
        background: linear-gradient(135deg, var(--gradient-2), var(--gradient-3));
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-delay: 14s;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
        }
        33% {
            transform: translate(30px, -30px) scale(1.1);
        }
        66% {
            transform: translate(-20px, 20px) scale(0.9);
        }
    }
    
    /* Main Container */
    .container {
        position: relative;
        z-index: 1;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }
    
    /* Header */
    .header {
        text-align: center;
        margin-bottom: 3rem;
    }
    
    .title {
        font-size: 4rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2), var(--gradient-3));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
        animation: glow 3s ease-in-out infinite;
    }
    
    @keyframes glow {
        0%, 100% {
            filter: brightness(1);
        }
        50% {
            filter: brightness(1.2);
        }
    }
    
    .subtitle {
        font-size: 1.25rem;
        color: var(--text-dim);
        max-width: 600px;
        margin: 0 auto;
    }
    
    /* Main Card */
    .main-card {
        background: var(--surface);
        border-radius: 32px;
        padding: 3rem;
        border: 1px solid var(--border);
        backdrop-filter: blur(10px);
        position: relative;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    }
    
    .main-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--gradient-1), var(--gradient-2), transparent);
        animation: shimmer 3s infinite;
    }
    
    @keyframes shimmer {
        0% {
            left: -100%;
        }
        100% {
            left: 100%;
        }
    }
    
    /* Battery Visual */
    .battery-visual {
        width: 100%;
        max-width: 300px;
        margin: 0 auto 3rem;
        position: relative;
    }
    
    .battery-container {
        position: relative;
        width: 100%;
        height: 150px;
        background: var(--surface-light);
        border-radius: 20px;
        border: 2px solid var(--border);
        overflow: hidden;
    }
    
    .battery-level {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
        transition: height 0.5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .battery-percentage {
        font-size: 2rem;
        font-weight: 700;
        color: var(--bg);
        mix-blend-mode: difference;
    }
    
    .battery-terminal {
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 10px;
        background: var(--surface-light);
        border: 2px solid var(--border);
        border-bottom: none;
        border-radius: 5px 5px 0 0;
    }
    
    /* Input Grid */
    .input-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
    }
    
    .input-group {
        position: relative;
    }
    
    .input-label {
        display: block;
        font-size: 0.875rem;
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 0.5rem;
    }
    
    .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        background: var(--surface-light);
        border-radius: 16px;
        border: 1px solid var(--border);
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .input-wrapper:hover {
        border-color: var(--accent);
        box-shadow: 0 0 20px rgba(0, 255, 136, 0.2);
    }
    
    .input-wrapper:focus-within {
        border-color: var(--gradient-2);
        box-shadow: 0 0 30px rgba(0, 204, 255, 0.3);
    }
    
    input[type="number"] {
        flex: 1;
        background: transparent;
        border: none;
        padding: 1rem 1.5rem;
        font-size: 1.25rem;
        color: var(--text);
        font-family: 'JetBrains Mono', monospace;
        outline: none;
    }
    
    .input-unit {
        padding: 0 1.5rem;
        color: var(--text-dim);
        font-weight: 500;
        background: rgba(255, 255, 255, 0.05);
        border-left: 1px solid var(--border);
    }
    
    /* Device Type Selector */
    .device-selector {
        margin-bottom: 2rem;
    }
    
    .device-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .device-card {
        background: var(--surface-light);
        border: 2px solid var(--border);
        border-radius: 16px;
        padding: 1.5rem 1rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .device-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .device-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
    }
    
    .device-card.active {
        border-color: var(--accent);
    }
    
    .device-card.active::before {
        opacity: 0.1;
    }
    
    .device-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    
    .device-name {
        font-size: 0.875rem;
        position: relative;
        z-index: 1;
    }
    
    .device-power {
        font-size: 0.75rem;
        color: var(--text-dim);
        position: relative;
        z-index: 1;
    }
    
    /* Calculate Button */
    .calculate-btn {
        width: 100%;
        padding: 1.5rem;
        background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
        border: none;
        border-radius: 16px;
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--bg);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .calculate-btn::before {
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
    
    .calculate-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0, 255, 136, 0.4);
    }
    
    .calculate-btn:active::before {
        width: 300px;
        height: 300px;
    }
    
    /* Results Section */
    .results-section {
        display: none;
        margin-top: 3rem;
        animation: slideUp 0.5s ease;
    }
    
    .results-section.show {
        display: block;
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
    
    .result-card {
        background: var(--surface);
        border-radius: 24px;
        padding: 2.5rem;
        border: 1px solid var(--border);
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    
    .result-card::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, var(--gradient-1), var(--gradient-2), var(--gradient-3), var(--gradient-4));
        border-radius: 24px;
        opacity: 0.5;
        z-index: -1;
        animation: rotate 3s linear infinite;
    }
    
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    .result-main {
        font-size: 4rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
    }
    
    .result-detail {
        font-size: 1.25rem;
        color: var(--text-dim);
        margin-bottom: 2rem;
    }
    
    /* Timeline Visual */
    .timeline-visual {
        margin: 3rem 0;
        padding: 2rem;
        background: var(--surface-light);
        border-radius: 20px;
        position: relative;
    }
    
    .timeline-bar {
        height: 60px;
        background: var(--surface);
        border-radius: 30px;
        position: relative;
        overflow: hidden;
        margin-bottom: 2rem;
    }
    
    .timeline-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--gradient-1), var(--gradient-2));
        border-radius: 30px;
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 2rem;
        animation: fillProgress 2s ease;
    }
    
    @keyframes fillProgress {
        from {
            width: 0;
        }
    }
    
    .timeline-markers {
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    
    .timeline-marker {
        text-align: center;
    }
    
    .marker-time {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.875rem;
        color: var(--text-dim);
    }
    
    .marker-label {
        font-size: 0.75rem;
        color: var(--accent);
        margin-top: 0.25rem;
    }
    
    /* Breakdown Grid */
    .breakdown-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }
    
    .breakdown-item {
        background: var(--surface-light);
        padding: 1.5rem;
        border-radius: 16px;
        text-align: center;
        border: 1px solid var(--border);
        transition: all 0.3s ease;
    }
    
    .breakdown-item:hover {
        transform: translateY(-5px);
        border-color: var(--accent);
        box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
    }
    
    .breakdown-label {
        font-size: 0.875rem;
        color: var(--text-dim);
        margin-bottom: 0.5rem;
    }
    
    .breakdown-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--accent);
        font-family: 'JetBrains Mono', monospace;
    }
    
    /* Tips Section */
    .tips-section {
        margin-top: 3rem;
        padding: 2rem;
        background: var(--surface);
        border-radius: 24px;
        border: 1px solid var(--border);
    }
    
    .tips-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .tips-icon {
        font-size: 2rem;
    }
    
    .tips-grid {
        display: grid;
        gap: 1rem;
    }
    
    .tip-item {
        display: flex;
        align-items: start;
        gap: 1rem;
        padding: 1rem;
        background: var(--surface-light);
        border-radius: 12px;
        transition: all 0.3s ease;
    }
    
    .tip-item:hover {
        transform: translateX(10px);
        box-shadow: 0 5px 20px rgba(0, 255, 136, 0.1);
    }
    
    .tip-number {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        color: var(--bg);
        flex-shrink: 0;
    }
    
    .tip-text {
        color: var(--text-dim);
        line-height: 1.6;
    }
    
    /* Quick Presets */
    .presets-section {
        margin-top: 2rem;
    }
    
    .presets-title {
        font-size: 1.125rem;
        margin-bottom: 1rem;
        color: var(--text-dim);
    }
    
    .presets-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1rem;
    }
    
    .preset-btn {
        background: var(--surface-light);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 1rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .preset-btn:hover {
        background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 204, 255, 0.1));
        border-color: var(--accent);
        transform: scale(1.05);
    }
    
    .preset-name {
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
    }
    
    .preset-value {
        font-size: 0.75rem;
        color: var(--text-dim);
    }
    
    /* Related Tools */
    .related-tools {
        margin-top: 4rem;
    }
    
    .related-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
        text-align: center;
    }
    
    .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
    
    .tool-card {
        background: var(--surface);
        border-radius: 20px;
        padding: 2rem;
        border: 1px solid var(--border);
        transition: all 0.3s ease;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    
    .tool-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .tool-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
    }
    
    .tool-card:hover::before {
        opacity: 0.05;
    }
    
    .tool-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
    }
    
    .tool-name {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        position: relative;
        z-index: 1;
    }
    
    .tool-description {
        color: var(--text-dim);
        font-size: 0.875rem;
        position: relative;
        z-index: 1;
    }
    
    /* Info Section */
    .info-section {
        margin-top: 4rem;
        text-align: center;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .info-content {
        color: var(--text-dim);
        line-height: 1.8;
    }
    
    .info-list {
        list-style: none;
        margin-top: 2rem;
        display: grid;
        gap: 1rem;
    }
    
    .info-list li {
        padding: 1rem;
        background: var(--surface);
        border-radius: 12px;
        border: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .info-list li::before {
        content: '⚡';
        font-size: 1.5rem;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
        .title {
            font-size: 2.5rem;
        }
        
        .main-card {
            padding: 2rem;
        }
        
        .input-grid {
            grid-template-columns: 1fr;
        }
        
        .device-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .result-main {
            font-size: 3rem;
        }
        
        .breakdown-grid {
            grid-template-columns: 1fr;
        }
        
        .tools-grid {
            grid-template-columns: 1fr;
        }
    }
</style>

<div class="bg-animation">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
</div>

<div class="container">
    <header class="header">
        <h1 class="title">Battery Backup Calculator</h1>
        <p class="subtitle">Find out exactly how long your battery gonna last with your devices. No more guessing!</p>
    </header>
    
    <div class="main-card">
        <div class="battery-visual">
            <div class="battery-container">
                <div class="battery-terminal"></div>
                <div class="battery-level" id="batteryLevel" style="height: 75%;">
                    <span class="battery-percentage">75%</span>
                </div>
            </div>
        </div>
        
        <div class="input-grid">
            <div class="input-group">
                <label class="input-label">Battery Capacity</label>
                <div class="input-wrapper">
                    <input type="number" id="capacity" placeholder="5000" value="5000">
                    <span class="input-unit">mAh</span>
                </div>
            </div>
            
            <div class="input-group">
                <label class="input-label">Battery Voltage</label>
                <div class="input-wrapper">
                    <input type="number" id="voltage" placeholder="12" value="12" step="0.1">
                    <span class="input-unit">V</span>
                </div>
            </div>
            
            <div class="input-group">
                <label class="input-label">Device Power</label>
                <div class="input-wrapper">
                    <input type="number" id="power" placeholder="50" value="50">
                    <span class="input-unit">W</span>
                </div>
            </div>
            
            <div class="input-group">
                <label class="input-label">Efficiency</label>
                <div class="input-wrapper">
                    <input type="number" id="efficiency" placeholder="85" value="85" max="100">
                    <span class="input-unit">%</span>
                </div>
            </div>
        </div>
        
        <div class="device-selector">
            <label class="input-label">Quick Device Selection</label>
            <div class="device-grid">
                <div class="device-card" data-power="5">
                    <div class="device-icon">📱</div>
                    <div class="device-name">Smartphone</div>
                    <div class="device-power">5W</div>
                </div>
                <div class="device-card" data-power="45">
                    <div class="device-icon">💻</div>
                    <div class="device-name">Laptop</div>
                    <div class="device-power">45W</div>
                </div>
                <div class="device-card" data-power="10">
                    <div class="device-icon">💡</div>
                    <div class="device-name">LED Bulb</div>
                    <div class="device-power">10W</div>
                </div>
                <div class="device-card" data-power="100">
                    <div class="device-icon">📺</div>
                    <div class="device-name">TV</div>
                    <div class="device-power">100W</div>
                </div>
                <div class="device-card" data-power="30">
                    <div class="device-icon">🎮</div>
                    <div class="device-name">Game Console</div>
                    <div class="device-power">30W</div>
                </div>
                <div class="device-card" data-power="1500">
                    <div class="device-icon">🔥</div>
                    <div class="device-name">Heater</div>
                    <div class="device-power">1500W</div>
                </div>
            </div>
        </div>
        
        <div class="presets-section">
            <h3 class="presets-title">Common Battery Types</h3>
            <div class="presets-grid">
                <div class="preset-btn" data-capacity="2000" data-voltage="3.7">
                    <div class="preset-name">Phone Battery</div>
                    <div class="preset-value">2000mAh @ 3.7V</div>
                </div>
                <div class="preset-btn" data-capacity="10000" data-voltage="3.7">
                    <div class="preset-name">Power Bank</div>
                    <div class="preset-value">10000mAh @ 3.7V</div>
                </div>
                <div class="preset-btn" data-capacity="50000" data-voltage="12">
                    <div class="preset-name">Car Battery</div>
                    <div class="preset-value">50Ah @ 12V</div>
                </div>
                <div class="preset-btn" data-capacity="100000" data-voltage="12">
                    <div class="preset-name">Deep Cycle</div>
                    <div class="preset-value">100Ah @ 12V</div>
                </div>
                <div class="preset-btn" data-capacity="7000" data-voltage="12">
                    <div class="preset-name">UPS Battery</div>
                    <div class="preset-value">7Ah @ 12V</div>
                </div>
            </div>
        </div>
        
        <button class="calculate-btn" onclick="calculateBackup()">
            Calculate Backup Time ⚡
        </button>
    </div>
    
    <div class="results-section" id="results">
        <div class="result-card">
            <div class="result-main" id="mainResult">8h 45m</div>
            <div class="result-detail">Your battery will keep your device running</div>
            
            <div class="timeline-visual">
                <div class="timeline-bar">
                    <div class="timeline-fill" id="timelineFill" style="width: 75%;">
                        <span style="color: var(--bg); font-weight: 600;">Runtime</span>
                    </div>
                </div>
                <div class="timeline-markers">
                    <div class="timeline-marker">
                        <div class="marker-time">0h</div>
                        <div class="marker-label">Start</div>
                    </div>
                    <div class="timeline-marker">
                        <div class="marker-time" id="halfTime">4h 22m</div>
                        <div class="marker-label">Half</div>
                    </div>
                    <div class="timeline-marker">
                        <div class="marker-time" id="endTime">8h 45m</div>
                        <div class="marker-label">Empty</div>
                    </div>
                </div>
            </div>
            
            <div class="breakdown-grid">
                <div class="breakdown-item">
                    <div class="breakdown-label">Total Energy</div>
                    <div class="breakdown-value" id="totalEnergy">60 Wh</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Usable Energy</div>
                    <div class="breakdown-value" id="usableEnergy">51 Wh</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Current Draw</div>
                    <div class="breakdown-value" id="currentDraw">4.17 A</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Runtime Days</div>
                    <div class="breakdown-value" id="runtimeDays">0.36 days</div>
                </div>
            </div>
        </div>
        
        <div class="tips-section">
            <h3 class="tips-title">
                <span class="tips-icon">💡</span>
                Tips to Maximize Battery Life
            </h3>
            <div class="tips-grid">
                <div class="tip-item">
                    <div class="tip-number">1</div>
                    <div class="tip-text">Keep your battery between 20-80% charge for longes lifespan. Deep discharge can damage it!</div>
                </div>
                <div class="tip-item">
                    <div class="tip-number">2</div>
                    <div class="tip-text">Temperature matters alot! Batteries work best at room temperature (20-25°C)</div>
                </div>
                <div class="tip-item">
                    <div class="tip-number">3</div>
                    <div class="tip-text">Use a proper charger - cheap chargers can reduce battery life significently</div>
                </div>
                <div class="tip-item">
                    <div class="tip-number">4</div>
                    <div class="tip-text">Consider getting a battery with 20-30% more capacity then you need for safety margin</div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="related-tools">
        <h2 class="related-title">Related Power Tools</h2>
        <div class="tools-grid">
            <div class="tool-card">
                <div class="tool-icon">⚡</div>
                <div class="tool-name">Solar Panel Calculator</div>
                <div class="tool-description">Calculate how many solar panels you need for your power requirements</div>
            </div>
            <div class="tool-card">
                <div class="tool-icon">🔌</div>
                <div class="tool-name">Power Consumption</div>
                <div class="tool-description">Find out how much electricity your devices are using</div>
            </div>
            <div class="tool-card">
                <div class="tool-icon">💰</div>
                <div class="tool-name">Electricity Cost</div>
                <div class="tool-description">Calculate your monthly electricity bill based on usage</div>
            </div>
            <div class="tool-card">
                <div class="tool-icon">🔋</div>
                <div class="tool-name">Battery Bank Size</div>
                <div class="tool-description">Design the perfect battery bank for your off-grid system</div>
            </div>
            <div class="tool-card">
                <div class="tool-icon">📊</div>
                <div class="tool-name">Load Calculator</div>
                <div class="tool-description">Calculate total load and circuit breaker requirements</div>
            </div>
            <div class="tool-card">
                <div class="tool-icon">🌡️</div>
                <div class="tool-name">Wire Size Calculator</div>
                <div class="tool-description">Find the right wire gauge for your electrical project</div>
            </div>
        </div>
    </div>
    
    <div class="info-section">
        <p class="info-content">
            This battery backup calculator helps you figure out how long your battery will last powering your devices. Just enter your battery specs and device power consumption to get instant results. Perfect for planning UPS systems, camping trips, or emergency power backup!
        </p>
        <ul class="info-list">
            <li>Works with all battery types - lead acid, lithium, NiMH</li>
            <li>Accounts for inverter efficiency losses</li>
            <li>Shows detailed breakdown of power calculations</li>
            <li>Includes common device presets for quick calculations</li>
        </ul>
    </div>
</div>

<script>
    // Device card selection
    document.querySelectorAll('.device-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.device-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('power').value = this.dataset.power;
            updateBatteryVisual();
        });
    });
    
        // Preset buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const capacity = parseInt(this.dataset.capacity);
            const voltage = parseFloat(this.dataset.voltage);
            
            // Convert Ah to mAh if needed
            if (capacity >= 1000) {
                document.getElementById('capacity').value = capacity;
            } else {
                document.getElementById('capacity').value = capacity * 1000;
            }
            
            document.getElementById('voltage').value = voltage;
            updateBatteryVisual();
        });
    });
    
    // Update battery visual on input change
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', updateBatteryVisual);
    });
    
    function updateBatteryVisual() {
        const capacity = parseFloat(document.getElementById('capacity').value) || 0;
        const maxCapacity = 100000; // 100Ah max for visual
        const percentage = Math.min((capacity / maxCapacity) * 100, 100);
        const batteryLevel = document.getElementById('batteryLevel');
        batteryLevel.style.height = percentage + '%';
        batteryLevel.querySelector('.battery-percentage').textContent = Math.round(percentage) + '%';
    }
    
    function calculateBackup() {
        // Get input values
        const capacity = parseFloat(document.getElementById('capacity').value);
        const voltage = parseFloat(document.getElementById('voltage').value);
        const power = parseFloat(document.getElementById('power').value);
        const efficiency = parseFloat(document.getElementById('efficiency').value) / 100;
        
        // Validate inputs
        if (!capacity || !voltage || !power || !efficiency) {
            alert('Please fill in all fields!');
            return;
        }
        
        // Calculate battery energy in Wh
        const totalEnergyWh = (capacity / 1000) * voltage; // Convert mAh to Ah
        const usableEnergyWh = totalEnergyWh * efficiency;
        
        // Calculate runtime in hours
        const runtimeHours = usableEnergyWh / power;
        
        // Calculate current draw
        const currentDraw = power / voltage;
        
        // Format time
        const hours = Math.floor(runtimeHours);
        const minutes = Math.round((runtimeHours - hours) * 60);
        
        // Update results
        document.getElementById('mainResult').textContent = `${hours}h ${minutes}m`;
        document.getElementById('halfTime').textContent = `${Math.floor(hours/2)}h ${Math.round(minutes/2)}m`;
        document.getElementById('endTime').textContent = `${hours}h ${minutes}m`;
        
        // Update breakdown
        document.getElementById('totalEnergy').textContent = `${totalEnergyWh.toFixed(1)} Wh`;
        document.getElementById('usableEnergy').textContent = `${usableEnergyWh.toFixed(1)} Wh`;
        document.getElementById('currentDraw').textContent = `${currentDraw.toFixed(2)} A`;
        document.getElementById('runtimeDays').textContent = `${(runtimeHours / 24).toFixed(2)} days`;
        
        // Update timeline fill
        const timelineFill = document.getElementById('timelineFill');
        timelineFill.style.width = '100%';
        
        // Show results with animation
        const resultsSection = document.getElementById('results');
        resultsSection.classList.add('show');
        
        // Smooth scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Initialize battery visual
    updateBatteryVisual();
    
    // Add enter key support for inputs
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateBackup();
            }
        });
    });
    
    // Add ripple effect to calculate button
    const calculateBtn = document.querySelector('.calculate-btn');
    calculateBtn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Add hover effects to tool cards
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // Animate numbers on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe breakdown items
    document.querySelectorAll('.breakdown-item').forEach(item => {
        observer.observe(item);
    });
    
    // Add parallax effect to gradient orbs
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
    });
    
    function animateOrbs() {
        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.05;
            const x = mouseX * speed * 100;
            const y = mouseY * speed * 100;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
        requestAnimationFrame(animateOrbs);
    }
    
    animateOrbs();
    
    // Add loading animation when calculating
    function showLoading() {
        const btn = document.querySelector('.calculate-btn');
        btn.innerHTML = '<span class="spinner"></span> Calculating...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = 'Calculate Backup Time ⚡';
            btn.disabled = false;
        }, 500);
    }
    
    // Modify calculate function to include loading
    const originalCalculate = calculateBackup;
    calculateBackup = function() {
        showLoading();
        setTimeout(() => {
            originalCalculate();
        }, 500);
    };
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter to calculate
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            calculateBackup();
        }
        
        // Escape to clear results
        if (e.key === 'Escape') {
            const resultsSection = document.getElementById('results');
            resultsSection.classList.remove('show');
        }
    });
    
    // Save and load last calculation
    function saveCalculation() {
        const data = {
            capacity: document.getElementById('capacity').value,
            voltage: document.getElementById('voltage').value,
            power: document.getElementById('power').value,
            efficiency: document.getElementById('efficiency').value
        };
        localStorage.setItem('batteryCalcData', JSON.stringify(data));
    }
    
    function loadCalculation() {
        const saved = localStorage.getItem('batteryCalcData');
        if (saved) {
            const data = JSON.parse(saved);
            document.getElementById('capacity').value = data.capacity || '';
            document.getElementById('voltage').value = data.voltage || '';
            document.getElementById('power').value = data.power || '';
            document.getElementById('efficiency').value = data.efficiency || '85';
            updateBatteryVisual();
        }
    }
    
    // Load saved data on page load
    loadCalculation();
    
    // Save data on input change
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', saveCalculation);
    });
    
    // Add share functionality
    function shareResults() {
        const hours = document.getElementById('mainResult').textContent;
        const text = `My battery will last ${hours} with current settings! Calculate yours at ${window.location.href}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Battery Backup Calculator Results',
                text: text,
                url: window.location.href
            });
        } else {
            // Fallback to clipboard
            navigator.clipboard.writeText(text);
            alert('Results copied to clipboard!');
        }
    }
    
    // Add print functionality
    function printResults() {
        window.print();
    }
    
    // Mobile touch support for hover effects
    if ('ontouchstart' in window) {
        document.querySelectorAll('.device-card, .preset-btn, .tool-card').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 300);
            });
        });
    }
    
    // Performance optimization - debounce input updates
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    const debouncedUpdate = debounce(updateBatteryVisual, 100);
    document.querySelectorAll('input').forEach(input => {
        input.removeEventListener('input', updateBatteryVisual);
        input.addEventListener('input', debouncedUpdate);
    });
</script>

<style>
    /* Additional styles for ripple effect */
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Loading spinner */
    .spinner {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        border-top-color: var(--bg);
        animation: spin 0.6s ease-in-out infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    /* Touch active states */
    .touch-active {
        transform: scale(0.98);
        opacity: 0.8;
    }
    
    /* Print styles */
    @media print {
        .bg-animation,
        .device-selector,
        .presets-section,
        .calculate-btn,
        .related-tools,
        .tips-section {
            display: none !important;
        }
        
        .main-card {
            box-shadow: none;
            border: 1px solid #000;
        }
        
        .results-section {
            page-break-inside: avoid;
        }
    }
    
    /* Animate class for intersection observer */
    .breakdown-item.animate .breakdown-value {
        animation: countUp 1s ease-out;
    }
    
    @keyframes countUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Share button styles */
    .share-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
        transition: all 0.3s ease;
        z-index: 100;
    }
    
    .share-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 15px 40px rgba(0, 255, 136, 0.5);
    }
    
    /* Accessibility improvements */
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
    
    /* Focus styles */
    input:focus,
    button:focus,
    .device-card:focus,
    .preset-btn:focus {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
    }
    
    /* High contrast mode support */
    @media (prefers-contrast: high) {
        .gradient-orb {
            opacity: 0.1;
        }
        
        .main-card,
        .result-card {
            border-width: 2px;
        }
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
</style>
