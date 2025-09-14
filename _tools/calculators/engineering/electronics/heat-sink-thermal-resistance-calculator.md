---
title: "Heat Sink Thermal Resistance Calculator: Calculate Junction Temperature & Power Dissipation"
localtitle: "Heat Sink Thermal Resistance Calculator"
layout: tool
categories: [thermalCalc, engineeringCalc, calculators]
permalink: /calculators/thermal/heat-sink-thermal-resistance-calculator
description: "Free heat sink thermal resistance calculator to determine junction temperature, required heat sink size, and thermal performance. Features interactive thermal diagrams, real-time calculations, and practical cooling design tips."
published: false
faq:
  - q: "What is thermal resistance and why does it matter?"
    a: "Thermal resistance (measured in °C/W or K/W) indicates how much temperature rise occurs per watt of power dissipated. It's like electrical resistance but for heat flow. Lower thermal resistance means better heat transfer. For example, a heat sink with 2°C/W will cause a 20°C temperature rise with 10W of power."
  - q: "How do I calculate the total thermal resistance of my system?"
    a: "Total thermal resistance is the sum of all thermal resistances in the heat path: Rtotal = Rjunction-case + Rcase-heatsink + Rheatsink-ambient. Each interface adds resistance. Don't forget thermal interface material (TIM) which typically adds 0.1-0.5°C/W depending on quality and application."
  - q: "What's the difference between natural and forced convection?"
    a: "Natural convection relies on air density differences from heating (hot air rises), typically achieving 5-25 W/m²K heat transfer coefficient. Forced convection uses fans to move air, achieving 25-250 W/m²K. Forced air cooling can reduce heat sink size by 3-10x compared to natural convection."
  - q: "How do I know what size heat sink I need?"
    a: "Calculate required thermal resistance: Rth = (Tjmax - Tambient - margin) / Power. Subtract junction-to-case resistance to get needed heat sink resistance. For example: 85°C max junction, 40°C ambient, 15W power, 0.5°C/W Rjc = (85-40-10)/15 - 0.5 = 1.83°C/W maximum heat sink resistance."
  - q: "Why does my heat sink get hotter than calculated?"
    a: "Common reasons include: poor thermal interface (air gaps), mounting pressure issues, restricted airflow, heat sink orientation (fins should be vertical for natural convection), nearby heat sources, or underestimating power dissipation. Also, manufacturer ratings often assume ideal conditions (25°C ambient, perfect mounting)."
  - q: "What's the best thermal interface material (TIM)?"
    a: "It depends on your application: Thermal pads (0.5-5 W/mK) are convenient but less effective. Thermal paste (1-10 W/mK) offers better performance but can be messy. Phase change materials (1-5 W/mK) combine benefits of both. For best performance, use high-quality paste with proper application (thin, even layer)."
  - q: "How does altitude affect heat sink performance?"
    a: "Air density decreases with altitude, reducing convection efficiency. At 3000m (10,000ft), air density is about 70% of sea level, requiring roughly 40% larger heat sinks or increased airflow. The effect is more pronounced with natural convection than forced air cooling."
---

<style>
    :root {
        --thermal-primary: #ff6b6b;
        --thermal-secondary: #4ecdc4;
        --thermal-accent: #ffe66d;
        --thermal-hot: #ff4757;
        --thermal-warm: #ff9f43;
        --thermal-cool: #00d2d3;
        --thermal-cold: #5f27cd;
        --thermal-dark: #1a1a2e;
        --thermal-darker: #0f0f1e;
        --thermal-light: #f8f9fa;
        --thermal-gradient-hot: linear-gradient(135deg, #ff4757, #ff6b6b, #ff9f43);
        --thermal-gradient-cool: linear-gradient(135deg, #5f27cd, #00d2d3, #4ecdc4);
        --thermal-shadow: 0 20px 40px rgba(0,0,0,0.3);
        --thermal-glow: 0 0 30px rgba(255,107,107,0.5);
    }

    .thermal-wrapper {
        background: var(--thermal-darker);
        color: var(--thermal-light);
        min-height: 100vh;
        font-family: 'Inter', system-ui, sans-serif;
        position: relative;
        overflow: hidden;
    }

    /* Animated Heat Wave Background */
    .thermal-heat-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.1;
        pointer-events: none;
        background: 
            radial-gradient(circle at 20% 50%, var(--thermal-hot) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, var(--thermal-cool) 0%, transparent 50%);
        animation: heat-wave 15s ease-in-out infinite;
    }

    @keyframes heat-wave {
        0%, 100% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.1) rotate(180deg); }
    }

    /* Floating Temperature Particles */
    .thermal-particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--thermal-hot);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.6;
    }

    .thermal-particle-1 {
        top: 20%;
        left: 10%;
        animation: float-up 10s linear infinite;
    }

    .thermal-particle-2 {
        top: 50%;
        left: 30%;
        animation: float-up 12s linear infinite 2s;
    }

    .thermal-particle-3 {
        top: 70%;
        left: 70%;
        animation: float-up 15s linear infinite 4s;
    }

    @keyframes float-up {
        0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
        }
    }

    .thermal-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        position: relative;
        z-index: 1;
    }

    .thermal-header {
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

    .thermal-title {
        font-size: 3.5rem;
        font-weight: 800;
        background: var(--thermal-gradient-hot);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
        filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.5));
    }

    .thermal-subtitle {
        font-size: 1.25rem;
        color: var(--thermal-light);
        opacity: 0.8;
        font-weight: 300;
    }

    /* Main Calculator Card */
    .thermal-calc-card {
        background: rgba(26, 26, 46, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 30px;
        padding: 3rem;
        box-shadow: var(--thermal-shadow);
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

    .thermal-calc-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: var(--thermal-gradient-hot);
        animation: scan-line 3s linear infinite;
    }

    @keyframes scan-line {
        0% { left: -100%; }
        100% { left: 100%; }
    }

    /* Input Grid */
    .thermal-input-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .thermal-input-group {
        position: relative;
    }

    .thermal-label {
        display: block;
        margin-bottom: 0.75rem;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--thermal-primary);
        font-weight: 600;
    }

    .thermal-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
    }

    .thermal-input {
        width: 100%;
        padding: 1.25rem;
        background: rgba(15, 15, 30, 0.8);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        color: var(--thermal-light);
        font-size: 1.125rem;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .thermal-input:focus {
        outline: none;
        border-color: var(--thermal-primary);
        box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2);
        transform: translateY(-2px);
    }

    .thermal-unit {
        position: absolute;
        right: 1.25rem;
        color: var(--thermal-light);
        opacity: 0.6;
        font-weight: 600;
        pointer-events: none;
    }

    /* Calculate Button */
    .thermal-calculate-btn {
        width: 100%;
        padding: 1.5rem;
        margin-top: 2rem;
        background: var(--thermal-gradient-hot);
        border: none;
        border-radius: 20px;
        color: var(--thermal-dark);
        font-size: 1.125rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .thermal-calculate-btn::before {
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

    .thermal-calculate-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
    }

    .thermal-calculate-btn:active::before {
        width: 300px;
        height: 300px;
    }

    /* Results Section */
    .thermal-results {
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

    /* Temperature Visualization */
    .thermal-visualization {
        background: rgba(15, 15, 30, 0.8);
        border-radius: 25px;
        padding: 2rem;
        margin-bottom: 2rem;
        position: relative;
        overflow: hidden;
    }

    .thermal-diagram-svg {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        display: block;
    }

    /* Temperature Scale */
    .thermal-temp-scale {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.5rem;
        padding: 1rem;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 15px;
    }

    .thermal-temp-marker {
        text-align: center;
        flex: 1;
    }

    .thermal-temp-color {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 auto 0.5rem;
        box-shadow: 0 0 20px currentColor;
    }

    .thermal-temp-label {
        font-size: 0.875rem;
        opacity: 0.8;
    }

    /* Results Grid */
    .thermal-results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    .thermal-result-card {
        background: rgba(26, 26, 46, 0.8);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .thermal-result-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: var(--thermal-gradient-hot);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    .thermal-result-card:hover {
        transform: translateY(-5px);
        border-color: var(--thermal-primary);
        box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
    }

    .thermal-result-card:hover::before {
        transform: scaleX(1);
    }

    .thermal-result-icon {
        width: 60px;
        height: 60px;
        margin: 0 auto 1rem;
        background: var(--thermal-gradient-hot);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }

    .thermal-result-label {
        font-size: 0.875rem;
        color: var(--thermal-light);
        opacity: 0.7;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    .thermal-result-value {
        font-size: 2.5rem;
        font-weight: 800;
        background: var(--thermal-gradient-hot);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1;
    }

    .thermal-result-unit {
        font-size: 1rem;
        color: var(--thermal-light);
        opacity: 0.6;
        margin-left: 0.25rem;
    }

    /* Heat Sink Selector */
    .thermal-heatsink-selector {
        margin-top: 3rem;
        padding: 2rem;
        background: rgba(26, 26, 46, 0.6);
        border-radius: 25px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .thermal-heatsink-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .thermal-heatsink-option {
        padding: 1.5rem;
        background: rgba(15, 15, 30, 0.8);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
    }

    .thermal-heatsink-option:hover {
        border-color: var(--thermal-primary);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(255, 107, 107, 0.2);
    }

    .thermal-heatsink-option.selected {
        background: rgba(255, 107, 107, 0.1);
        border-color: var(--thermal-primary);
    }

    /* Info Cards */
    .thermal-info-section {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .thermal-info-card {
        background: rgba(26, 26, 46, 0.6);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 2rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    .thermal-info-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(255, 107, 107, 0.2);
        border-color: var(--thermal-primary);
    }

    .thermal-info-icon {
        width: 60px;
        height: 60px;
        background: var(--thermal-gradient-hot);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .thermal-info-title {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--thermal-light);
    }

    .thermal-info-text {
        color: var(--thermal-light);
        opacity: 0.8;
        line-height: 1.6;
    }

    /* Content Section */
    .thermal-content {
        margin-top: 4rem;
        padding: 3rem;
        background: rgba(26, 26, 46, 0.6);
        backdrop-filter: blur(10px);
        border-radius: 25px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .thermal-content h2 {
        color: var(--thermal-primary);
        font-size: 2rem;
        margin-bottom: 1.5rem;
        font-weight: 700;
    }

    .thermal-content h3 {
        color: var(--thermal-secondary);
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }

    .thermal-content p {
        color: var(--thermal-light);
        line-height: 1.8;
        margin-bottom: 1rem;
        opacity: 0.9;
    }

    .thermal-content ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
    }

    .thermal-content li {
        color: var(--thermal-light);
        padding-left: 2rem;
        margin-bottom: 0.75rem;
        position: relative;
        line-height: 1.6;
    }

    .thermal-content li::before {
        content: "🔥";
        position: absolute;
        left: 0;
    }

    /* Related Tools */
    .thermal-related-tools {
        margin-top: 3rem;
        padding: 2rem;
        background: rgba(15, 15, 30, 0.5);
        border-radius: 20px;
    }

    .thermal-related-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-top: 1.5rem;
    }

    .thermal-related-item {
        padding: 1.5rem;
        background: rgba(26, 26, 46, 0.8);
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .thermal-related-item:hover {
        transform: translateY(-3px);
        border-color: var(--thermal-primary);
        box-shadow: 0 10px 20px rgba(255, 107, 107, 0.2);
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .thermal-title {
            font-size: 2.5rem;
        }
        
        .thermal-calc-card {
            padding: 2rem;
        }
        
        .thermal-result-value {
            font-size: 2rem;
        }
        
        .thermal-input-grid {
            grid-template-columns: 1fr;
        }
    }

    /* Loading Animation */
    .thermal-loading {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: var(--thermal-primary);
        animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    /* Temperature Gradient Animation */
    .temp-gradient-hot {
        animation: pulse-hot 2s ease-in-out infinite;
    }

    @keyframes pulse-hot {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; }
    }

    /* FAQ Section Styles */
.thermal-faq-section {
    margin-top: 4rem;
    padding: 3rem;
    background: rgba(26, 26, 46, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.thermal-faq-title {
    color: var(--thermal-primary);
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
    text-align: center;
    background: var(--thermal-gradient-hot);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.thermal-faq-container {
    max-width: 900px;
    margin: 0 auto;
}

.thermal-faq-item {
    margin-bottom: 1rem;
    background: rgba(15, 15, 30, 0.5);
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.thermal-faq-item:hover {
    border-color: var(--thermal-primary);
    box-shadow: 0 5px 20px rgba(255, 107, 107, 0.2);
}

.thermal-faq-question {
    padding: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    color: var(--thermal-light);
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.thermal-faq-question:hover {
    background: rgba(255, 107, 107, 0.1);
}

.thermal-faq-question.active {
    background: rgba(255, 107, 107, 0.2);
    color: var(--thermal-primary);
}

.thermal-faq-icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    color: var(--thermal-primary);
}

.thermal-faq-question.active .thermal-faq-icon {
    transform: rotate(45deg);
}

.thermal-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    padding: 0 1.5rem;
    color: var(--thermal-light);
    opacity: 0.9;
    line-height: 1.8;
}

.thermal-faq-answer.active {
    max-height: 500px;
    padding: 1.5rem;
}

.thermal-faq-answer p {
    margin-bottom: 1rem;
}

.thermal-faq-answer ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.thermal-faq-answer li {
    padding-left: 2rem;
    margin-bottom: 0.5rem;
    position: relative;
}

.thermal-faq-answer li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--thermal-primary);
    font-weight: bold;
}

/* Mobile responsive */
@media (max-width: 768px) {
    .thermal-faq-section {
        padding: 2rem 1rem;
    }
    
    .thermal-faq-question {
        padding: 1rem;
        font-size: 0.95rem;
    }
    
    .thermal-faq-answer {
        font-size: 0.9rem;
    }
}

</style>

<div class="thermal-wrapper">
    <div class="thermal-heat-bg"></div>
    <div class="thermal-particle thermal-particle-1"></div>
    <div class="thermal-particle thermal-particle-2"></div>
    <div class="thermal-particle thermal-particle-3"></div>
    
    <div class="thermal-container">
        <header class="thermal-header">
            <h1 class="thermal-title">Heat Sink Thermal Resistance Calculator</h1>
            <p class="thermal-subtitle">Design optimal cooling solutions for your electronics</p>
        </header>

        <div class="thermal-calc-card">
            <div class="thermal-input-grid">
                <div class="thermal-input-group">
                    <label class="thermal-label">Power Dissipation</label>
                    <div class="thermal-input-wrapper">
                        <input type="number" class="thermal-input" id="power" value="10" step="0.1" min="0.1">
                        <span class="thermal-unit">W</span>
                    </div>
                </div>

                <div class="thermal-input-group">
                    <label class="thermal-label">Max Junction Temperature</label>
                    <div class="thermal-input-wrapper">
                        <input type="number" class="thermal-input" id="tj-max" value="85" step="1" min="0">
                        <span class="thermal-unit">°C</span>
                    </div>
                </div>

                <div class="thermal-input-group">
                    <label class="thermal-label">Ambient Temperature</label>
                    <div class="thermal-input-wrapper">
                        <input type="number" class="thermal-input" id="t-ambient" value="25" step="1" min="-40">
                        <span class="thermal-unit">°C</span>
                    </div>
                </div>

                <div class="thermal-input-group">
                    <label class="thermal-label">Junction-to-Case Resistance</label>
                    <div class="thermal-input-wrapper">
                        <input type="number" class="thermal-input" id="rjc" value="0.5" step="0.1" min="0">
                        <span class="thermal-unit">°C/W</span>
                    </div>
                </div>

                <div class="thermal-input-group">
                    <label class="thermal-label">Case-to-Sink Resistance (TIM)</label>
                    <div class="thermal-input-wrapper">
                        <input type="number" class="thermal-input" id="rcs" value="0.2" step="0.1" min="0">
                        <span class="thermal-unit">°C/W</span>
                    </div>
                </div>

                <div class="thermal-input-group">
                    <label class="thermal-label">Safety Margin</label>
                    <div class="thermal-input-wrapper">
                        <input type="number" class="thermal-input" id="margin" value="10" step="1" min="0">
                        <span class="thermal-unit">°C</span>
                    </div>
                </div>
            </div>

            <button class="thermal-calculate-btn" onclick="calculateThermal()">
                Calculate Thermal Requirements
            </button>
        </div>

        <div class="thermal-results" id="results" style="display: none;">
            <div class="thermal-visualization">
                <svg class="thermal-diagram-svg" viewBox="0 0 800 400">
                    <!-- Component -->
                    <rect x="350" y="50" width="100" height="30" fill="#ff4757" rx="5">
                        <animate attributeName="fill" values="#ff4757;#ff6b6b;#ff4757" dur="2s" repeatCount="indefinite"/>
                    </rect>
                    <text x="400" y="70" text-anchor="middle" fill="#fff" font-size="12">Junction</text>
                    <text x="400" y="95" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold" id="svg-tj">85°C</text>
                    
                    <!-- Case -->
                    <rect x="325" y="100" width="150" height="40" fill="#ff9f43" rx="5"/>
                    <text x="400" y="125" text-anchor="middle" fill="#fff" font-size="12">Case</text>
                    <text x="400" y="155" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold" id="svg-tc">75°C</text>
                    
                    <!-- Heat Sink -->
                    <g>
                        <!-- Base -->
                        <rect x="250" y="160" width="300" height="20" fill="#00d2d3" rx="3"/>
                        <!-- Fins -->
                        <rect x="270" y="180" width="20" height="60" fill="#00d2d3" rx="3"/>
                        <rect x="310" y="180" width="20" height="60" fill="#00d2d3" rx="3"/>
                        <rect x="350" y="180" width="20" height="60" fill="#00d2d3" rx="3"/>
                        <rect x="390" y="180" width="20" height="60" fill="#00d2d3" rx="3"/>
                        <rect x="430" y="180" width="20" height="60" fill="#00d2d3" rx="3"/>
                        <rect x="470" y="180" width="20" height="60" fill="#00d2d3" rx="3"/>
                        <rect x="510" y="180" width="20" height="60" fill="#00d2d3" rx="3"/>
                    </g>
                    <text x="400" y="200" text-anchor="middle" fill="#fff" font-size="12">Heat Sink</text>
                    <text x="400" y="260" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold" id="svg-ts">55°C</text>
                    
                    <!-- Ambient -->
                    <rect x="0" y="280" width="800" height="120" fill="url(#ambientGradient)" opacity="0.3"/>
                    <text x="400" y="340" text-anchor="middle" fill="#fff" font-size="14">Ambient</text>
                    <text x="400" y="360" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold" id="svg-ta">25°C</text>
                    
                    <!-- Gradients -->
                    <defs>
                        <linearGradient id="ambientGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color:#5f27cd;stop-opacity:0.1" />
                            <stop offset="100%" style="stop-color:#5f27cd;stop-opacity:0.5" />
                        </linearGradient>
                    </defs>
                    
                    <!-- Heat Flow Arrows -->
                    <g opacity="0.6">
                        <path d="M 400 80 L 400 100" stroke="#ffe66d" stroke-width="3" marker-end="url(#arrowhead)"/>
                        <path d="M 400 140 L 400 160" stroke="#ffe66d" stroke-width="3" marker-end="url(#arrowhead)"/>
                        <path d="M 400 240 L 400 280" stroke="#ffe66d" stroke-width="3" marker-end="url(#arrowhead)"/>
                    </g>
                    
                    <!-- Arrow marker -->
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#ffe66d" />
                        </marker>
                    </defs>
                    
                    <!-- Thermal Resistances -->
                    <text x="450" y="95" fill="#ffe66d" font-size="10">R_jc = <tspan id="svg-rjc">0.5</tspan> °C/W</text>
                    <text x="450" y="155" fill="#ffe66d" font-size="10">R_cs = <tspan id="svg-rcs">0.2</tspan> °C/W</text>
                    <text x="450" y="265" fill="#ffe66d" font-size="10">R_sa = <tspan id="svg-rsa">3.0</tspan> °C/W</text>
                </svg>

                <div class="thermal-temp-scale">
                    <div class="thermal-temp-marker">
                        <div class="thermal-temp-color" style="background: #ff4757;"></div>
                        <div class="thermal-temp-label">Hot (>80°C)</div>
                    </div>
                    <div class="thermal-temp-marker">
                        <div class="thermal-temp-color" style="background: #ff9f43;"></div>
                        <div class="thermal-temp-label">Warm (50-80°C)</div>
                    </div>
                    <div class="thermal-temp-marker">
                        <div class="thermal-temp-color" style="background: #00d2d3;"></div>
                        <div class="thermal-temp-label">Cool (25-50°C)</div>
                    </div>
                    <div class="thermal-temp-marker">
                        <div class="thermal-temp-color" style="background: #5f27cd;"></div>
                        <div class="thermal-temp-label">Cold (<25°C)</div>
                    </div>
                </div>
            </div>

            <div class="thermal-results-grid">
                <div class="thermal-result-card">
                    <div class="thermal-result-icon">🎯</div>
                    <div class="thermal-result-label">Required Heat Sink Resistance</div>
                    <div class="thermal-result-value" id="required-rsa">3.0<span class="thermal-result-unit">°C/W</span></div>
                </div>
                <div class="thermal-result-card">
                    <div class="thermal-result-icon">🌡️</div>
                    <div class="thermal-result-label">Junction Temperature</div>
                    <div class="thermal-result-value" id="junction-temp">75<span class="thermal-result-unit">°C</span></div>
                </div>
                <div class="thermal-result-card">
                    <div class="thermal-result-icon">📊</div>
                    <div class="thermal-result-label">Total Thermal Resistance</div>
                    <div class="thermal-result-value" id="total-resistance">3.7<span class="thermal-result-unit">°C/W</span></div>
                </div>
                <div class="thermal-result-card">
                    <div class="thermal-result-icon">⚡</div>
                    <div class="thermal-result-label">Temperature Rise</div>
                    <div class="thermal-result-value" id="temp-rise">50<span class="thermal-result-unit">°C</span></div>
                </div>
            </div>

            <div class="thermal-heatsink-selector">
                <h3 style="color: var(--thermal-primary); margin-bottom: 1rem;">Recommended Heat Sink Types</h3>
                <div class="thermal-heatsink-grid">
                    <div class="thermal-heatsink-option" data-rsa="5">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔸</div>
                        <div style="font-weight: 600;">Small Finned</div>
                        <div style="font-size: 0.875rem; opacity: 0.8;">~5°C/W</div>
                        <div style="font-size: 0.75rem; margin-top: 0.5rem;">Natural convection</div>
                    </div>
                    <div class="thermal-heatsink-option" data-rsa="2.5">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔷</div>
                        <div style="font-weight: 600;">Medium Finned</div>
                        <div style="font-size: 0.875rem; opacity: 0.8;">~2.5°C/W</div>
                        <div style="font-size: 0.75rem; margin-top: 0.5rem;">Natural/forced air</div>
                    </div>
                    <div class="thermal-heatsink-option" data-rsa="1">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔶</div>
                        <div style="font-weight: 600;">Large Finned</div>
                        <div style="font-size: 0.875rem; opacity: 0.8;">~1°C/W</div>
                        <div style="font-size: 0.75rem; margin-top: 0.5rem;">Forced air cooling</div>
                    </div>
                    <div class="thermal-heatsink-option" data-rsa="0.5">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">❄️</div>
                        <div style="font-weight: 600;">Active Cooled</div>
                        <div style="font-size: 0.875rem; opacity: 0.8;">~0.5°C/W</div>
                        <div style="font-size: 0.75rem; margin-top: 0.5rem;">Fan + heat sink</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="thermal-info-section">
            <div class="thermal-info-card">
                <div class="thermal-info-icon">📐</div>
                <h3 class="thermal-info-title">Design Rules</h3>
                <p class="thermal-info-text">Always include a safety margin of 10-15°C below maximum ratings. Derate by 2°C/1000m altitude for natural convection cooling.</p>
            </div>
            <div class="thermal-info-card">
                <div class="thermal-info-icon">🌬️</div>
                <h3 class="thermal-info-title">Airflow Matters</h3>
                <p class="thermal-info-text">Forced air cooling can reduce thermal resistance by 70%. Even 1 m/s airflow makes a significant difference.</p>
            </div>
            <div class="thermal-info-card">
                <div class="thermal-info-icon">🔧</div>
                <h3 class="thermal-info-title">Mounting Tips</h3>
                <p class="thermal-info-text">Use thermal paste or pads to minimize interface resistance. Apply even pressure (30-70 PSI) for optimal heat transfer.</p>
            </div>
        </div>

                <div class="thermal-related-tools">
            <h3 style="color: var(--thermal-primary); margin-bottom: 1rem;">Related Thermal Tools</h3>
            <div class="thermal-related-grid">
                <div class="thermal-related-item">
                    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔌</div>
                    <div style="font-weight: 600;">Power Dissipation Calculator</div>
                    <div style="font-size: 0.875rem; opacity: 0.8; margin-top: 0.5rem;">Calculate IC power consumption</div>
                </div>
                <div class="thermal-related-item">
                    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">💨</div>
                    <div style="font-weight: 600;">Fan CFM Calculator</div>
                    <div style="font-size: 0.875rem; opacity: 0.8; margin-top: 0.5rem;">Determine required airflow</div>
                </div>
                <div class="thermal-related-item">
                    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🌡️</div>
                    <div style="font-weight: 600;">Thermal Via Calculator</div>
                    <div style="font-size: 0.875rem; opacity: 0.8; margin-top: 0.5rem;">PCB thermal via design</div>
                </div>
            </div>
        </div>

        <div class="thermal-content">
            <h2>Understanding Heat Sink Thermal Resistance</h2>
            
            <p>Managing heat is one of the biggest challenges in electronics design. Whether your working with a 10W LED driver or a 100W CPU, understanding thermal resistance is crucial for reliability. This calculator helps you find the right heat sink before your components become expensive paperweights!</p>

            <h3>The Thermal Circuit Analogy</h3>
            <p>Think of heat flow like electrical current - it follows the path of least resistance. Just as voltage drives current through electrical resistance, temperature difference drives heat flow through thermal resistance. The analogy is so perfect that we can use Ohm's law:</p>

            <ul>
                <li>Temperature difference (ΔT) = Power (P) × Thermal Resistance (Rth)</li>
                <li>Just like: Voltage (V) = Current (I) × Resistance (R)</li>
                <li>Lower thermal resistance = better cooling (more heat flow)</li>
                <li>Series resistances add up: Rtotal = Rjc + Rcs + Rsa</li>
            </ul>

            <h3>Breaking Down the Thermal Path</h3>
            <p>Heat generated at the semiconductor junction must travel through several interfaces to reach ambient air. Each step adds resistance:</p>

            <ul>
                <li><strong>Junction to Case (Rjc):</strong> Internal to the component, specified in datasheets. Typically 0.5-5°C/W for power devices</li>
                <li><strong>Case to Heat Sink (Rcs):</strong> Interface resistance, depends on mounting method and thermal interface material (TIM)</li>
                <li><strong>Heat Sink to Ambient (Rsa):</strong> The main variable you control through heat sink selection</li>
                <li><strong>Don't forget:</strong> PCB traces and vias can add significant thermal resistance in SMD packages</li>
            </ul>

            <h3>Selecting the Right Heat Sink</h3>
            <p>After calculating required thermal resistance, you need to choose an actual heat sink. Here's what affects performance:</p>

            <ul>
                <li><strong>Surface area:</strong> More fins = more cooling area = lower resistance</li>
                <li><strong>Material:</strong> Aluminum is common (200 W/mK), copper is better (400 W/mK) but heavier and pricier</li>
                <li><strong>Orientation:</strong> Vertical fins work best for natural convection</li>
                <li><strong>Airflow:</strong> Even slight air movement dramatically improves performance</li>
                <li><strong>Anodizing:</strong> Black anodized surfaces improve radiation (important above 100°C)</li>
            </ul>

            <h3>Common Thermal Interface Materials</h3>
            <p>The interface between component and heat sink is critical. Air is a terrible conductor, so we need to fill any gaps:</p>

            <ul>
                <li><strong>Thermal Paste:</strong> Best performance (0.02-0.2°C/W) but messy and needs reapplication</li>
                <li><strong>Thermal Pads:</strong> Convenient (0.2-0.5°C/W), good for production, slightly thicker</li>
                <li><strong>Phase Change Materials:</strong> Solid at room temp, flows under heat (0.1-0.3°C/W)</li>
                <li><strong>Graphite Sheets:</strong> Reusable, good lateral spreading (0.2-0.4°C/W)</li>
                <li><strong>No TIM:</strong> Direct metal contact only works with perfect surfaces (rare!)</li>
            </ul>

            <h3>Real-World Design Tips</h3>
            <p>Theory is great, but here's what actually matters in practice:</p>

            <ul>
                <li><strong>Derate everything:</strong> If Tjmax is 150°C, design for 125°C maximum</li>
                <li><strong>Consider worst case:</strong> Maximum ambient temp, minimum airflow, component aging</li>
                <li><strong>Measure actual temps:</strong> Thermal cameras or thermocouples verify your calculations</li>
                <li><strong>Watch for hot spots:</strong> Multiple heat sources can create unexpected temperatures</li>
                <li><strong>Plan for manufacturing:</strong> Can assembly apply TIM consistently? Is the heat sink easy to install?</li>
            </ul>

            <h3>When Natural Convection Isn't Enough</h3>
            <p>Sometimes passive cooling just won't cut it. Consider forced air when:</p>

            <ul>
                <li>Required heat sink size is impractical</li>
                <li>Ambient temperature is too high (>40°C)</li>
                <li>Power density exceeds 10W per cubic inch</li>
                <li>Reliability demands lower junction temperatures</li>
                <li>Cost of larger heat sink exceeds fan + smaller heat sink</li>
            </ul>

            <h3>Advanced Cooling Methods</h3>
            <p>For extreme cases, consider these alternatives:</p>

            <ul>
                <li><strong>Heat pipes:</strong> Move heat to remote heat sink locations</li>
                <li><strong>Vapor chambers:</strong> Spread heat over large areas quickly</li>
                <li><strong>Liquid cooling:</strong> For >100W in compact spaces</li>
                <li><strong>Peltier coolers:</strong> Active cooling below ambient (inefficient)</li>
                <li><strong>Direct die cooling:</strong> Remove package thermal resistance entirely</li>
            </ul>

            <p>Remember: Good thermal design early in the project is much easier than fixing overheating problems later. When in doubt, go bigger - your components will last longer running cooler!</p>
        </div>
        
        <!-- FAQ Section - Add this after the thermal-content div -->
    <div class="thermal-faq-section">
        <h2 class="thermal-faq-title">Frequently Asked Questions</h2>
        <div class="thermal-faq-container">
            <!-- FAQ items will be dynamically generated here -->
        </div>
    </div>


    </div>
</div>

<script>
function calculateThermal() {
    // Get input values
    const power = parseFloat(document.getElementById('power').value);
    const tjMax = parseFloat(document.getElementById('tj-max').value);
    const tAmbient = parseFloat(document.getElementById('t-ambient').value);
    const rjc = parseFloat(document.getElementById('rjc').value);
    const rcs = parseFloat(document.getElementById('rcs').value);
    const margin = parseFloat(document.getElementById('margin').value);

    // Calculate required heat sink thermal resistance
    const allowedTempRise = tjMax - tAmbient - margin;
    const requiredRtotal = allowedTempRise / power;
    const requiredRsa = requiredRtotal - rjc - rcs;

    // Calculate actual temperatures with this heat sink
    const totalResistance = rjc + rcs + requiredRsa;
    const tempRise = power * totalResistance;
    const junctionTemp = tAmbient + tempRise;
    const caseTemp = tAmbient + (power * (rcs + requiredRsa));
    const sinkTemp = tAmbient + (power * requiredRsa);

    // Update results
    document.getElementById('required-rsa').innerHTML = requiredRsa.toFixed(2) + '<span class="thermal-result-unit">°C/W</span>';
    document.getElementById('junction-temp').innerHTML = junctionTemp.toFixed(1) + '<span class="thermal-result-unit">°C</span>';
    document.getElementById('total-resistance').innerHTML = totalResistance.toFixed(2) + '<span class="thermal-result-unit">°C/W</span>';
    document.getElementById('temp-rise').innerHTML = tempRise.toFixed(1) + '<span class="thermal-result-unit">°C</span>';

    // Update SVG visualization
    document.getElementById('svg-tj').textContent = junctionTemp.toFixed(1) + '°C';
    document.getElementById('svg-tc').textContent = caseTemp.toFixed(1) + '°C';
    document.getElementById('svg-ts').textContent = sinkTemp.toFixed(1) + '°C';
    document.getElementById('svg-ta').textContent = tAmbient + '°C';
    document.getElementById('svg-rjc').textContent = rjc.toFixed(1);
    document.getElementById('svg-rcs').textContent = rcs.toFixed(1);
    document.getElementById('svg-rsa').textContent = requiredRsa.toFixed(1);

    // Update heat sink recommendations
    document.querySelectorAll('.thermal-heatsink-option').forEach(option => {
        const rsaValue = parseFloat(option.dataset.rsa);
        if (rsaValue >= requiredRsa) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });

    // Show results
    document.getElementById('results').style.display = 'block';

    // Animate temperature colors
    updateTemperatureColors(junctionTemp, caseTemp, sinkTemp);
}

function updateTemperatureColors(tj, tc, ts) {
    // Update component colors based on temperature
    const junctionRect = document.querySelector('rect[fill="#ff4757"]');
    const caseRect = document.querySelector('rect[fill="#ff9f43"]');
    
    if (tj > 80) {
        junctionRect.style.fill = '#ff4757';
    } else if (tj > 60) {
        junctionRect.style.fill = '#ff9f43';
    } else {
        junctionRect.style.fill = '#00d2d3';
    }
}

// Add event listeners for real-time calculation
document.querySelectorAll('.thermal-input').forEach(input => {
    input.addEventListener('input', () => {
        if (document.getElementById('results').style.display === 'block') {
            calculateThermal();
        }
    });
});

// Heat sink selector click handler
document.querySelectorAll('.thermal-heatsink-option').forEach(option => {
    option.addEventListener('click', function() {
        const rsaValue = parseFloat(this.dataset.rsa);
        // Recalculate with selected heat sink
        recalculateWithHeatsink(rsaValue);
    });
});

function recalculateWithHeatsink(rsa) {
    const power = parseFloat(document.getElementById('power').value);
    const tAmbient = parseFloat(document.getElementById('t-ambient').value);
    const rjc = parseFloat(document.getElementById('rjc').value);
    const rcs = parseFloat(document.getElementById('rcs').value);

    const totalResistance = rjc + rcs + rsa;
    const tempRise = power * totalResistance;
    const junctionTemp = tAmbient + tempRise;

    // Update junction temperature display
    document.getElementById('junction-temp').innerHTML = junctionTemp.toFixed(1) + '<span class="thermal-result-unit">°C</span>';
    
    // Alert if temperature is too high
    const tjMax = parseFloat(document.getElementById('tj-max').value);
    const margin = parseFloat(document.getElementById('margin').value);
    
    if (junctionTemp > (tjMax - margin)) {
        alert(`Warning: Junction temperature (${junctionTemp.toFixed(1)}°C) exceeds safe limit! Consider a better heat sink or active cooling.`);
    }
}

// FAQ Data from the YAML frontmatter
const thermalFAQs = [
    {
        q: "What is thermal resistance and why does it matter?",
        a: "Thermal resistance (measured in °C/W or K/W) indicates how much temperature rise occurs per watt of power dissipated. It's like electrical resistance but for heat flow. Lower thermal resistance means better heat transfer. For example, a heat sink with 2°C/W will cause a 20°C temperature rise with 10W of power."
    },
    {
        q: "How do I calculate the total thermal resistance of my system?",
        a: "Total thermal resistance is the sum of all thermal resistances in the heat path: Rtotal = Rjunction-case + Rcase-heatsink + Rheatsink-ambient. Each interface adds resistance. Don't forget thermal interface material (TIM) which typically adds 0.1-0.5°C/W depending on quality and application."
    },
    {
        q: "What's the difference between natural and forced convection?",
        a: "Natural convection relies on air density differences from heating (hot air rises), typically achieving 5-25 W/m²K heat transfer coefficient. Forced convection uses fans to move air, achieving 25-250 W/m²K. Forced air cooling can reduce heat sink size by 3-10x compared to natural convection."
    },
    {
        q: "How do I know what size heat sink I need?",
        a: "Calculate required thermal resistance: Rth = (Tjmax - Tambient - margin) / Power. Subtract junction-to-case resistance to get needed heat sink resistance. For example: 85°C max junction, 40°C ambient, 15W power, 0.5°C/W Rjc = (85-40-10)/15 - 0.5 = 1.83°C/W maximum heat sink resistance."
    },
    {
        q: "Why does my heat sink get hotter than calculated?",
        a: "Common reasons include: poor thermal interface (air gaps), mounting pressure issues, restricted airflow, heat sink orientation (fins should be vertical for natural convection), nearby heat sources, or underestimating power dissipation. Also, manufacturer ratings often assume ideal conditions (25°C ambient, perfect mounting)."
    },
    {
        q: "What's the best thermal interface material (TIM)?",
        a: "It depends on your application: Thermal pads (0.5-5 W/mK) are convenient but less effective. Thermal paste (1-10 W/mK) offers better performance but can be messy. Phase change materials (1-5 W/mK) combine benefits of both. For best performance, use high-quality paste with proper application (thin, even layer)."
    },
    {
        q: "How does altitude affect heat sink performance?",
        a: "Air density decreases with altitude, reducing convection efficiency. At 3000m (10,000ft), air density is about 70% of sea level, requiring roughly 40% larger heat sinks or increased airflow. The effect is more pronounced with natural convection than forced air cooling."
    }
];

// Generate FAQ HTML
function generateFAQs() {
    const faqContainer = document.querySelector('.thermal-faq-container');
    
    thermalFAQs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'thermal-faq-item';
        
        faqItem.innerHTML = `
            <div class="thermal-faq-question" onclick="toggleFAQ(${index})">
                <span>${faq.q}</span>
                <span class="thermal-faq-icon">+</span>
            </div>
            <div class="thermal-faq-answer" id="faq-answer-${index}">
                <p>${faq.a}</p>
            </div>
        `;
        
        faqContainer.appendChild(faqItem);
    });
}

// Toggle FAQ answer
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const question = answer.previousElementSibling;
    const allAnswers = document.querySelectorAll('.thermal-faq-answer');
    const allQuestions = document.querySelectorAll('.thermal-faq-question');
    
    // Close all other FAQs
    allAnswers.forEach((ans, i) => {
        if (i !== index) {
            ans.classList.remove('active');
            allQuestions[i].classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    answer.classList.toggle('active');
    question.classList.toggle('active');
}

// Initialize FAQs when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateFAQs();
});


// Initialize with example calculation on load
window.addEventListener('load', () => {
    setTimeout(() => {
        // You can auto-calculate here if desired
        // calculateThermal();
    }, 500);
});
</script>
