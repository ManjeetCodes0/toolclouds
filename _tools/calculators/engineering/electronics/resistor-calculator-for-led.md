---
title: "LED Resistor Calculator: Calculate Current Limiting Resistor Values"
localtitle: "LED Resistor Calculator"
layout: tool
categories: [calculators, electronics]
permalink: /calculators/electronics/resistor-calculator-for-led
description: "Free LED resistor calculator to find the perfect current limiting resistor for your LED circuit. Calculate resistor values, power ratings, and see circuit diagrams instantly."
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<div class="lrc-wrapper">
    <style>
        :root {
            --lrc-primary: #ef4444;
            --lrc-primary-dark: #dc2626;
            --lrc-secondary: #3b82f6;
            --lrc-secondary-dark: #2563eb;
            --lrc-accent: #10b981;
            --lrc-warning: #f59e0b;
            --lrc-bg-main: #0a0a0a;
            --lrc-bg-card: #18181b;
            --lrc-bg-hover: #27272a;
            --lrc-border: rgba(255, 255, 255, 0.1);
            --lrc-text-primary: #fafafa;
            --lrc-text-secondary: #a1a1aa;
            --lrc-text-muted: #71717a;
            --lrc-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
            --lrc-glow-red: 0 0 30px rgba(239, 68, 68, 0.5);
            --lrc-glow-green: 0 0 30px rgba(16, 185, 129, 0.5);
            --lrc-glow-blue: 0 0 30px rgba(59, 130, 246, 0.5);
        }

        .lrc-wrapper {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--lrc-bg-main);
            min-height: 100vh;
            color: var(--lrc-text-primary);
            position: relative;
            overflow-x: hidden;
        }

        /* Circuit board pattern background */
        .lrc-wrapper::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 90%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }

        .lrc-wrapper::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255, 255, 255, 0.03) 50px, rgba(255, 255, 255, 0.03) 51px),
                repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 255, 255, 0.03) 50px, rgba(255, 255, 255, 0.03) 51px);
            pointer-events: none;
            opacity: 0.5;
        }

        .lrc-wrapper * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .lrc-layout {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            gap: 40px;
            padding: 30px 5px;
            position: relative;
            z-index: 1;
        }

        /* Main calculator section */
        .lrc-main-section {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .lrc-calculator-card {
            background: var(--lrc-bg-card);
            border: 1px solid var(--lrc-border);
            border-radius: 24px;
            overflow: hidden;
            box-shadow: var(--lrc-shadow);
            backdrop-filter: blur(10px);
        }

        .lrc-header {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            border-bottom: 1px solid var(--lrc-border);
        }

        .lrc-header::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--lrc-primary), transparent);
            animation: lrc-scan 3s linear infinite;
        }

        @keyframes lrc-scan {
            from { transform: translateX(-100%); }
            to { transform: translateX(100%); }
        }

        .lrc-header h1 {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 10px;
            background: linear-gradient(135deg, var(--lrc-primary) 0%, var(--lrc-secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .lrc-header p {
            color: var(--lrc-text-secondary);
            font-size: 1.1rem;
        }

        /* Circuit diagram section */
        .lrc-circuit-diagram {
            background: var(--lrc-bg-main);
            border: 1px solid var(--lrc-border);
            border-radius: 16px;
            padding: 30px;
            margin: 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .lrc-circuit-svg {
            max-width: 100%;
            height: auto;
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.1));
        }

        /* Input controls section */
        .lrc-controls {
            padding: 30px;
            display: grid;
            gap: 30px;
        }

        .lrc-input-group {
            display: grid;
            gap: 20px;
        }

        @media (min-width: 768px) {
            .lrc-input-group {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .lrc-field {
            position: relative;
        }

        .lrc-field-label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            margin-bottom: 10px;
            color: var(--lrc-text-primary);
        }

        .lrc-field-label i {
            color: var(--lrc-primary);
        }

        .lrc-input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            background: var(--lrc-bg-main);
            border: 2px solid var(--lrc-border);
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .lrc-input-wrapper:hover {
            border-color: rgba(239, 68, 68, 0.3);
        }

        .lrc-input-wrapper:focus-within {
            border-color: var(--lrc-primary);
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);
        }

        .lrc-input {
            flex: 1;
            padding: 14px 18px;
            background: transparent;
            border: none;
            color: var(--lrc-text-primary);
            font-size: 16px;
            font-weight: 600;
            outline: none;
        }

        .lrc-input::placeholder {
            color: var(--lrc-text-muted);
        }

        .lrc-unit {
            padding: 0 18px;
            color: var(--lrc-text-secondary);
            font-weight: 600;
            background: var(--lrc-bg-hover);
            border-left: 1px solid var(--lrc-border);
        }

        /* LED color selector */
        .lrc-led-colors {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 10px;
            margin-top: 10px;
        }

        .lrc-led-color {
            padding: 10px;
            border: 2px solid var(--lrc-border);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
            background: var(--lrc-bg-main);
        }

        .lrc-led-color:hover {
            transform: translateY(-2px);
        }

        .lrc-led-color.lrc-active {
            border-color: currentColor;
        }

        .lrc-led-color[data-color="red"] { color: #ef4444; }
        .lrc-led-color[data-color="green"] { color: #10b981; }
        .lrc-led-color[data-color="blue"] { color: #3b82f6; }
        .lrc-led-color[data-color="yellow"] { color: #f59e0b; }
        .lrc-led-color[data-color="white"] { color: #fafafa; }
        .lrc-led-color[data-color="orange"] { color: #fb923c; }

        .lrc-led-color.lrc-active[data-color="red"] { 
            box-shadow: var(--lrc-glow-red);
            background: rgba(239, 68, 68, 0.1);
        }
        .lrc-led-color.lrc-active[data-color="green"] { 
            box-shadow: var(--lrc-glow-green);
            background: rgba(16, 185, 129, 0.1);
        }
        .lrc-led-color.lrc-active[data-color="blue"] { 
            box-shadow: var(--lrc-glow-blue);
            background: rgba(59, 130, 246, 0.1);
        }

        .lrc-led-icon {
            font-size: 2rem;
            margin-bottom: 5px;
        }

        .lrc-led-voltage {
            font-size: 0.875rem;
            color: var(--lrc-text-secondary);
        }

        /* Calculate button */
        .lrc-calculate-btn {
            width: 100%;
            padding: 18px;
            background: linear-gradient(135deg, var(--lrc-primary) 0%, var(--lrc-primary-dark) 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            box-shadow: 0 4px 20px rgba(239, 68, 68, 0.3);
        }

        .lrc-calculate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 30px rgba(239, 68, 68, 0.4);
        }

        .lrc-calculate-btn:active {
            transform: translateY(0);
        }

        /* Results section */
        .lrc-results {
            padding: 30px;
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
            border-top: 1px solid var(--lrc-border);
            display: none;
        }

        .lrc-results.lrc-show {
            display: block;
            animation: lrc-slideIn 0.4s ease;
        }

        @keyframes lrc-slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .lrc-result-grid {
            display: grid;
            gap: 20px;
        }

        @media (min-width: 768px) {
            .lrc-result-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .lrc-result-card {
            background: var(--lrc-bg-card);
            border: 1px solid var(--lrc-border);
            border-radius: 12px;
            padding: 20px;
            position: relative;
            overflow: hidden;
        }

        .lrc-result-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--lrc-primary), var(--lrc-secondary));
        }

        .lrc-result-title {
            font-size: 0.875rem;
            color: var(--lrc-text-secondary);
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .lrc-result-value {
            font-size: 2rem;
            font-weight: 800;
            color: var(--lrc-text-primary);
            margin-bottom: 4px;
        }

        .lrc-result-info {
            font-size: 0.875rem;
            color: var(--lrc-text-muted);
        }

        /* Warning messages */
        .lrc-warning {
            background: rgba(245, 158, 11, 0.1);
            border: 1px solid rgba(245, 158, 11, 0.3);
            border-radius: 12px;
            padding: 16px;
            margin-top: 20px;
            display: flex;
            align-items: start;
            gap: 12px;
        }

        .lrc-warning i {
            color: var(--lrc-warning);
            margin-top: 2px;
        }

        /* Sidebar */
        .lrc-sidebar {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .lrc-ad-container {
            background: var(--lrc-bg-card);
            border: 2px dashed var(--lrc-border);
            border-radius: 20px;
            min-height: 350px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--lrc-text-muted);
            padding: 30px;
        }

        .lrc-related-tools {
            background: var(--lrc-bg-card);
            border: 1px solid var(--lrc-border);
            border-radius: 20px;
            padding: 30px;
            position: relative;
            overflow: hidden;
        }

        .lrc-related-tools::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--lrc-primary), var(--lrc-secondary), var(--lrc-accent));
        }

        .lrc-related-tools h3 {
            font-size: 1.5rem;
            font-weight: 800;
            margin-bottom: 20px;
            text-align: center;
            color: var(--lrc-text-primary);
        }

        .lrc-tool-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .lrc-tool-link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 18px;
            background: var(--lrc-bg-main);
            border: 1px solid var(--lrc-border);
            border-radius: 12px;
            text-decoration: none;
            color: var(--lrc-text-secondary);
            transition: all 0.3s ease;
        }

        .lrc-tool-link:hover {
            background: var(--lrc-bg-hover);
            border-color: var(--lrc-primary);
            color: var(--lrc-text-primary);
            transform: translateX(5px);
        }

        .lrc-tool-link i {
            color: var(--lrc-primary);
            font-size: 1.2rem;
        }

        /* Information section */
        .lrc-info-section {
            background: var(--lrc-bg-card);
            border: 1px solid var(--lrc-border);
            border-radius: 24px;
            overflow: hidden;
            margin-top: 40px;
        }

        .lrc-info-header {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
            padding: 40px;
            text-align: center;
            border-bottom: 1px solid var(--lrc-border);
        }

        .lrc-info-header h2 {
            font-size: 2rem;
            font-weight: 800;
            color: var(--lrc-text-primary);
            margin-bottom: 10px;
        }

        .lrc-info-body {
            padding: 40px;
        }

        .lrc-info-box {
            background: rgba(59, 130, 246, 0.1);
            border-left: 4px solid var(--lrc-secondary);
            padding: 20px;
            margin: 30px 0;
            border-radius: 0 12px 12px 0;
        }

        .lrc-formula-box {
            background: var(--lrc-bg-main);
            border: 1px solid var(--lrc-border);
            border-radius: 12px;
            padding: 24px;
            margin: 30px 0;
            text-align: center;
        }

        .lrc-formula {
            font-size: 1.5rem;
            font-family: 'Courier New', monospace;
            color: var(--lrc-primary);
            margin: 10px 0;
        }

        .lrc-info-section h3 {
            color: var(--lrc-text-primary);
            font-size: 1.5rem;
            margin: 2em 0 1em;
            font-weight: 700;
        }

        .lrc-info-section p {
            line-height: 1.8;
            color: var(--lrc-text-secondary);
            margin-bottom: 1.2em;
        }

        .lrc-info-section ul {
            list-style: none;
            margin: 1em 0;
        }

        .lrc-info-section li {
            position: relative;
            padding-left: 28px;
            margin-bottom: 12px;
            color: var(--lrc-text-secondary);
        }

        .lrc-info-section li::before {
            content: '⚡';
            position: absolute;
            left: 0;
            color: var(--lrc-primary);
        }

        /* Desktop layout */
        @media (min-width: 1200px) {
            .lrc-layout {
                display: grid;
                grid-template-columns: 1fr 380px;
                gap: 40px;
                padding: 40px;
            }

            .lrc-sidebar {
                position: sticky;
                top: 40px;
                align-self: start;
            }

            .lrc-info-section {
                grid-column: 1 / -1;
                margin-top: 0;
            }
        }

        /* Component library styles */
        .lrc-series-parallel {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        .lrc-config-btn {
            flex: 1;
            padding: 12px;
            background: var(--lrc-bg-main);
            border: 2px solid var(--lrc-border);
            border-radius: 10px;
            color: var(--lrc-text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }

        .lrc-config-btn:hover {
            border-color: var(--lrc-primary);
        }

        .lrc-config-btn.lrc-active {
            background: rgba(239, 68, 68, 0.1);
            border-color: var(--lrc-primary);
            color: var(--lrc-primary);
        }

        /* Resistor bands preview */
        .lrc-resistor-preview {
            background: var(--lrc-bg-main);
            border: 1px solid var(--lrc-border);
            border-radius: 12px;
            padding: 20px;
            margin-top: 20px;
            text-align: center;
        }

        .lrc-resistor-svg {
            max-width: 200px;
            margin: 0 auto;
        }
    </style>

    <div class="lrc-layout">
        <div class="lrc-main-section">
            <div class="lrc-calculator-card">
                <div class="lrc-header">
                    <h1>LED Resistor Calculator</h1>
                    <p>Calculate the perfect resistor for your LED circuit</p>
                </div>

                <div class="lrc-circuit-diagram">
                    <svg class="lrc-circuit-svg" width="400" height="150" viewBox="0 0 400 150">
                        <!-- Circuit diagram will be drawn here -->
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        <!-- Battery -->
                        <line x1="50" y1="30" x2="50" y2="60" stroke="#ef4444" stroke-width="3"/>
                        <line x1="35" y1="60" x2="65" y2="60" stroke="#ef4444" stroke-width="3"/>
                        <line x1="40" y1="90" x2="60" y2="90" stroke="#3b82f6" stroke-width="3"/>
                        <line x1="50" y1="90" x2="50" y2="120" stroke="#3b82f6" stroke-width="3"/>
                        <text x="70" y="75" fill="#a1a1aa" font-family="Arial" font-size="14">+V</text>
                        
                        <!-- Top wire -->
                        <line x1="50" y1="30" x2="150" y2="30" stroke="#71717a" stroke-width="2"/>
                        
                        <!-- Resistor -->
                        <rect x="150" y="20" width="60" height="20" fill="none" stroke="#f59e0b" stroke-width="2"/>
                        <text x="170" y="55" fill="#a1a1aa" font-family="Arial" font-size="12" text-anchor="middle">R</text>
                        
                        <!-- Wire to LED -->
                        <line x1="210" y1="30" x2="280" y2="30" stroke="#71717a" stroke-width="2"/>
                        
                        <!-- LED -->
                        <polygon points="280,15 280,45 310,30" fill="none" stroke="#10b981" stroke-width="2" filter="url(#glow)"/>
                        <line x1="310" y1="15" x2="310" y2="45" stroke="#10b981" stroke-width="2"/>
                        
                        <!-- LED glow/arrows -->
                        <line x1="320" y1="20" x2="330" y2="10" stroke="#10b981" stroke-width="1" opacity="0.5"/>
                        <polygon points="328,10 330,10 330,12" fill="#10b981" opacity="0.5"/>
                        <line x1="320" y1="40" x2="330" y2="30" stroke="#10b981" stroke-width="1" opacity="0.5"/>
                        <polygon points="328,30 330,30 330,32" fill="#10b981" opacity="0.5"/>
                        
                        <!-- Bottom wire -->
                        <line x1="310" y1="30" x2="350" y2="30" stroke="#71717a" stroke-width="2"/>
                        <line x1="350" y1="30" x2="350" y2="120" stroke="#71717a" stroke-width="2"/>
                        <line x1="350" y1="120" x2="50" y2="120" stroke="#71717a" stroke-width="2"/>
                        
                        <text x="200" y="140" fill="#fafafa" font-family="Arial" font-size="16" text-anchor="middle">Simple LED Circuit</text>
                    </svg>
                </div>

                <div class="lrc-controls">
                    <div class="lrc-input-group">
                        <div class="lrc-field">
                            <label class="lrc-field-label">
                                <i class="fas fa-battery-full"></i>
                                Source Voltage
                            </label>
                            <div class="lrc-input-wrapper">
                                <input type="number" 
                                       id="lrc-source-voltage" 
                                       class="lrc-input" 
                                       placeholder="9" 
                                       value="9"
                                       min="1"
                                       max="48"
                                       step="0.1">
                                <span class="lrc-unit">V</span>
                            </div>
                        </div>

                        <div class="lrc-field">
                            <label class="lrc-field-label">
                                <i class="fas fa-lightbulb"></i>
                                LED Forward Voltage
                            </label>
                            <div class="lrc-input-wrapper">
                                <input type="number" 
                                       id="lrc-led-voltage" 
                                       class="lrc-input" 
                                       placeholder="2.0" 
                                       value="2.0"
                                       min="1"
                                       max="5"
                                       step="0.1">
                                <span class="lrc-unit">V</span>
                            </div>
                        </div>

                        <div class="lrc-field">
                            <label class="lrc-field-label">
                                <i class="fas fa-bolt"></i>
                                LED Current
                            </label>
                            <div class="lrc-input-wrapper">
                                <input type="number" 
                                       id="lrc-led-current" 
                                       class="lrc-input" 
                                       placeholder="20" 
                                       value="20"
                                       min="1"
                                       max="100"
                                       step="1">
                                <span class="lrc-unit">mA</span>
                            </div>
                        </div>

                        <div class="lrc-field">
                            <label class="lrc-field-label">
                                <i class="fas fa-calculator"></i>
                                Number of LEDs
                            </label>
                            <div class="lrc-input-wrapper">
                                <input type="number" 
                                       id="lrc-led-count" 
                                       class="lrc-input" 
                                       placeholder="1" 
                                       value="1"
                                       min="1"
                                       max="20"
                                       step="1">
                                <span class="lrc-unit">pcs</span>
                            </div>
                        </div>
                    </div>

                    <div class="lrc-field">
                        <label class="lrc-field-label">
                            <i class="fas fa-palette"></i>
                            Select LED Color (Common Types)
                        </label>
                        <div class="lrc-led-colors">
                            <div class="lrc-led-color" data-color="red" data-voltage="2.0">
                                <i class="fas fa-circle lrc-led-icon"></i>
                                <div>Red</div>
                                <div class="lrc-led-voltage">~2.0V</div>
                            </div>
                            <div class="lrc-led-color lrc-active" data-color="green" data-voltage="2.2">
                                <i class="fas fa-circle lrc-led-icon"></i>
                                <div>Green</div>
                                <div class="lrc-led-voltage">~2.2V</div>
                            </div>
                            <div class="lrc-led-color" data-color="blue" data-voltage="3.3">
                                <i class="fas fa-circle lrc-led-icon"></i>
                                <div>Blue</div>
                                <div class="lrc-led-voltage">~3.3V</div>
                            </div>
                            <div class="lrc-led-color" data-color="yellow" data-voltage="2.1">
                                <i class="fas fa-circle lrc-led-icon"></i>
                                <div>Yellow</div>
                                <div class="lrc-led-voltage">~2.1V</div>
                            </div>
                            <div class="lrc-led-color" data-color="white" data-voltage="3.3">
                                <i class="fas fa-circle lrc-led-icon"></i>
                                <div>White</div>
                                <div class="lrc-led-voltage">~3.3V</div>
                            </div>
                            <div class="lrc-led-color" data-color="orange" data-voltage="2.0">
                                <i class="fas fa-circle lrc-led-icon"></i>
                                <div>Orange</div>
                                <div class="lrc-led-voltage">~2.0V</div>
                            </div>
                        </div>
                    </div>

                    <div class="lrc-series-parallel">
                        <button class="lrc-config-btn lrc-active" data-config="series">
                            <i class="fas fa-arrows-alt-h"></i> Series
                        </button>
                        <button class="lrc-config-btn" data-config="parallel">
                            <i class="fas fa-arrows-alt-v"></i> Parallel
                        </button>
                    </div>

                    <button id="lrc-calculate" class="lrc-calculate-btn">
                        <i class="fas fa-calculator"></i>
                        Calculate Resistor Value
                    </button>
                </div>

                <div class="lrc-results" id="lrc-results">
                    <div class="lrc-result-grid">
                        <div class="lrc-result-card">
                            <div class="lrc-result-title">Resistor Value</div>
                            <div class="lrc-result-value" id="lrc-resistor-value">330 Ω</div>
                            <div class="lrc-result-info">Standard value: <span id="lrc-standard-value">330 Ω</span></div>
                        </div>
                        
                        <div class="lrc-result-card">
                            <div class="lrc-result-title">Power Rating</div>
                            <div class="lrc-result-value" id="lrc-power-rating">0.14 W</div>
                            <div class="lrc-result-info">Minimum: <span id="lrc-min-power">1/4 W</span></div>
                        </div>
                        
                        <div class="lrc-result-card">
                            <div class="lrc-result-title">Actual Current</div>
                            <div class="lrc-result-value" id="lrc-actual-current">21.2 mA</div>
                            <div class="lrc-result-info">With standard resistor</div>
                        </div>
                        
                        <div class="lrc-result-card">
                            <div class="lrc-result-title">Voltage Drop</div>
                            <div class="lrc-result-value" id="lrc-voltage-drop">7.0 V</div>
                            <div class="lrc-result-info">Across resistor</div>
                        </div>
                    </div>

                    <div class="lrc-resistor-preview">
                        <h4 style="margin-bottom: 15px; color: var(--lrc-text-secondary);">Resistor Color Code</h4>
                        <svg class="lrc-resistor-svg" viewBox="0 0 200 80">
                            <rect x="20" y="35" width="160" height="10" fill="#d4a373" stroke="#8b6239" stroke-width="1"/>
                            <rect x="40" y="30" width="10" height="20" fill="#ff0000" id="band1"/>
                            <rect x="60" y="30" width="10" height="20" fill="#ff0000" id="band2"/>
                            <rect x="80" y="30" width="10" height="20" fill="#ff7f00" id="band3"/>
                            <rect x="140" y="30" width="10" height="20" fill="#ffd700" id="band4"/>
                            <line x1="0" y1="40" x2="20" y2="40" stroke="#71717a" stroke-width="2"/>
                            <line x1="180" y1="40" x2="200" y2="40" stroke="#71717a" stroke-width="2"/>
                        </svg>
                        <div style="margin-top: 10px; color: var(--lrc-text-muted); font-size: 0.875rem;">
                            <span id="lrc-color-code">Orange-Orange-Brown-Gold</span>
                        </div>
                    </div>

                    <div class="lrc-warning" id="lrc-warning" style="display: none;">
                        <i class="fas fa-exclamation-triangle"></i>
                        <div>
                            <strong>Warning:</strong> <span id="lrc-warning-text"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lrc-sidebar">
            <div class="lrc-ad-container">
                <div>
                    <i class="fas fa-ad fa-3x" style="margin-bottom: 15px; opacity: 0.3;"></i>
                    <p style="font-size: 1.1rem; font-weight: 600;">Advertisement</p>
                    <p style="font-size: 0.875rem; margin-top: 10px;">Your ad could be here</p>
                </div>
            </div>

            <div class="lrc-related-tools">
                <h3>Related Tools</h3>
                <ul class="lrc-tool-list">
                    <li><a href="#" class="lrc-tool-link">
                        <i class="fas fa-microchip"></i>
                        <span>Ohm's Law Calculator</span>
                    </a></li>
                    <li><a href="#" class="lrc-tool-link">
                        <i class="fas fa-bolt"></i>
                        <span>Power Calculator</span>
                    </a></li>
                    <li><a href="#" class="lrc-tool-link">
                        <i class="fas fa-wave-square"></i>
                        <span>555 Timer Calculator</span>
                    </a></li>
                    <li><a href="#" class="lrc-tool-link">
                        <i class="fas fa-battery-three-quarters"></i>
                        <span>Voltage Divider</span>
                    </a></li>
                    <li><a href="#" class="lrc-tool-link">
                        <i class="fas fa-code-branch"></i>
                        <span>Parallel Resistor</span>
                    </a></li>
                </ul>
            </div>
        </div>

        <div class="lrc-info-section">
            <div class="lrc-info-header">
                <h2>Complete Guide: Resistor Calculator for LED Circuits</h2>
                <p style="color: var(--lrc-text-secondary);">Everything you need to know about calculating LED resistors</p>
            </div>
            <div class="lrc-info-body">
                <div class="lrc-info-box">
                    <h3 style="margin-top: 0;">Quick Summary</h3>
                    <p>A resistor calculator for LED circuits helps you find the correct current-limiting resistor value to protect your LED from burning out. This essential tool uses Ohm's Law to calculate the resistance needed based on your power supply voltage, LED forward voltage, and desired current.</p>
                </div>

                <h3>Why Do LEDs Need Resistors?</h3>
                <p>LEDs (Light Emitting Diodes) are current-driven devices that can be damaged by excessive current. Unlike regular bulbs, LEDs have very low resistance when conducting, which means connecting them directly to a power source would cause too much current to flow, instantly destroying the LED.</p>
                
                <p>A current-limiting resistor acts as a safety device, dropping the excess voltage and controlling the current flow to safe levels. Without it, your LED would experience thermal runaway and burn out in milliseconds.</p>

                <h3>The Basic Formula: How the Resistor Calculator for LED Works</h3>
                <div class="lrc-formula-box">
                    <p style="margin: 0; color: var(--lrc-text-secondary);">The fundamental equation:</p>
                    <div class="lrc-formula">R = (Vs - Vf) / I</div>
                    <p style="margin: 10px 0 0; font-size: 0.9rem; color: var(--lrc-text-muted);">
                        Where: R = Resistance (Ω), Vs = Source Voltage (V), Vf = LED Forward Voltage (V), I = LED Current (A)
                    </p>
                </div>

                <h3>Understanding LED Forward Voltage</h3>
                <p>Forward voltage (Vf) is the voltage drop across an LED when it's conducting. This value varies by LED color because different semiconductor materials are used:</p>
                
                <ul style="list-style: none; padding: 0;">
                    <li>🔴 <strong>Red LEDs:</strong> 1.8-2.2V (AlGaInP semiconductor)</li>
                    <li>🟢 <strong>Green LEDs:</strong> 2.0-3.0V (GaP or InGaN)</li>
                    <li>🔵 <strong>Blue LEDs:</strong> 3.0-3.6V (InGaN)</li>
                    <li>⚪ <strong>White LEDs:</strong> 3.0-3.6V (Blue LED + phosphor)</li>
                    <li>🟡 <strong>Yellow LEDs:</strong> 2.0-2.2V (AlGaInP)</li>
                    <li>🟠 <strong>Orange LEDs:</strong> 2.0-2.1V (GaAsP)</li>
                </ul>

                <h3>LED Current Requirements</h3>
                <p>Standard LEDs typically operate at 20mA (0.02A), but this can vary:</p>
                <ul>
                    <li><strong>Standard 5mm LEDs:</strong> 20mA typical, 30mA maximum</li>
                    <li><strong>High-brightness LEDs:</strong> 20-50mA</li>
                    <li><strong>Power LEDs:</strong> 350mA, 700mA, or higher</li>
                    <li><strong>SMD LEDs:</strong> 2-20mA depending on size</li>
                </ul>

                <div class="lrc-info-box">
                    <h4 style="margin-top: 0;">💡 Pro Tip: The 80% Rule</h4>
                    <p style="margin-bottom: 0;">For longer LED life, run them at 80% of their maximum rated current. If an LED is rated for 25mA max, use 20mA in your calculations.</p>
                </div>

                <h3>Calculating Resistor Power Rating</h3>
                <p>Your resistor must dissipate power as heat. Calculate the minimum power rating using:</p>
                <div class="lrc-formula-box">
                    <div class="lrc-formula">P = I² × R</div>
                    <p style="margin: 10px 0 0; font-size: 0.9rem; color: var(--lrc-text-muted);">
                        Power (Watts) = Current² (Amps) × Resistance (Ohms)
                    </p>
                </div>
                
                <p>Always choose a resistor with at least 2x the calculated power rating for safety. Common resistor power ratings are:</p>
                <ul>
                    <li>1/8W (0.125W) - For low current LEDs</li>
                    <li>1/4W (0.25W) - Most common for standard LEDs</li>
                    <li>1/2W (0.5W) - Higher current applications</li>
                    <li>1W or higher - Power LED applications</li>
                </ul>

                <h3>Series vs Parallel LED Configurations</h3>
                
                <h4>Series Configuration</h4>
                <p>When connecting LEDs in series:</p>
                <ul>
                    <li>Forward voltages add up: Total Vf = Vf1 + Vf2 + Vf3...</li>
                    <li>Same current flows through all LEDs</li>
                    <li>One resistor for the entire string</li>
                    <li>More efficient but requires higher voltage</li>
                </ul>

                <h4>Parallel Configuration</h4>
                <p>When connecting LEDs in parallel:</p>
                <ul>
                    <li>Each LED needs its own resistor</li>
                    <li>Current adds up: Total I = I1 + I2 + I3...</li>
                    <li>Same voltage across all LEDs</li>
                    <li>Less efficient but works with lower voltages</li>
                </ul>

                <div class="lrc-info-box" style="background: rgba(239, 68, 68, 0.1); border-color: var(--lrc-primary);">
                    <h4 style="margin-top: 0;">⚠️ Never Connect LEDs in Parallel Without Individual Resistors!</h4>
                    <p style="margin-bottom: 0;">Due to manufacturing variations, LEDs have slightly different forward voltages. Without individual resistors, one LED will hog all the current and burn out.</p>
                </div>

                <h3>Standard Resistor Values (E12 Series)</h3>
                <p>Resistors come in standard values. After calculating, round up to the nearest standard value:</p>
                <p style="font-family: monospace; color: var(--lrc-text-primary);">
                    10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 (×10ⁿ)
                </p>
                <p>For example: 324Ω rounds up to 330Ω, 2.7kΩ, 27kΩ, etc.</p>

                <h3>Real-World Example Calculations</h3>
                
                <h4>Example 1: Single Red LED with 9V Battery</h4>
                <ul style="list-style: none;">
                    <li>Source voltage (Vs) = 9V</li>
                    <li>LED forward voltage (Vf) = 2.0V</li>
                    <li>LED current (I) = 20mA = 0.02A</li>
                    <li><strong>Calculation:</strong> R = (9 - 2.0) / 0.02 = 350Ω</li>
                    <li><strong>Standard value:</strong> 390Ω (next highest)</li>
                    <li><strong>Power:</strong> P = 0.02² × 390 = 0.156W (use 1/4W)</li>
                </ul>

                <h4>Example 2: Three White LEDs in Series with 12V</h4>
                <ul style="list-style: none;">
                    <li>Source voltage (Vs) = 12V</li>
                    <li>Total LED voltage (Vf) = 3.3V × 3 = 9.9V</li>
                    <li>LED current (I) = 20mA = 0.02A</li>
                    <li><strong>Calculation:</strong> R = (12 - 9.9) / 0.02 = 105Ω</li>
                    <li><strong>Standard value:</strong> 120Ω</li>
                </ul>

                <h3>Common Mistakes to Avoid</h3>
                <ul>
                    <li><strong>Using resistors that are too small:</strong> This allows too much current and damages the LED</li>
                    <li><strong>Forgetting about power dissipation:</strong> Undersized resistors can overheat and fail</li>
                    <li><strong>Mixing LED colors in series:</strong> Different forward voltages cause uneven brightness</li>
                    <li><strong>Ignoring voltage headroom:</strong> Need at least 2-3V difference between supply and LED voltage</li>
                    <li><strong>Using one resistor for parallel LEDs:</strong> Always use individual resistors</li>
                </ul>

                <h3>Advanced Considerations</h3>
                
                <h4>Temperature Effects</h4>
                <p>LED forward voltage decreases with temperature (typically -2mV/°C). In high-temperature environments, this can cause increased current flow. Consider using a slightly higher resistor value for hot conditions.</p>

                <h4>Pulse Width Modulation (PWM)</h4>
                <p>For dimming LEDs, PWM is better than reducing current. Calculate the resistor for full brightness, then use PWM to control apparent brightness by rapidly switching the LED on/off.</p>

                <h4>Constant Current Sources</h4>
                <p>For critical applications or power LEDs, consider using a constant current driver instead of a simple resistor. These maintain precise current regardless of voltage or temperature variations.</p>

                <h3>Troubleshooting LED Circuits</h3>
                <ul>
                    <li><strong>LED doesn't light:</strong> Check polarity (long leg = positive), verify voltage is sufficient</li>
                    <li><strong>LED is dim:</strong> Resistor value too high, insufficient voltage, or wrong LED specs</li>
                    <li><strong>LED burns out quickly:</strong> Resistor value too low or missing entirely</li>
                    <li><strong>LED flickers:</strong> Poor connection, inadequate power supply, or voltage fluctuations</li>
                </ul>

                <div class="lrc-info-box">
                    <h3 style="margin-top: 0;">Quick Reference: Resistor Calculator for LED</h3>
                    <p><strong>Formula:</strong> R = (Vs - Vf) / I</p>
                    <p><strong>Typical Values:</strong></p>
                    <ul style="margin-bottom: 0;">
                        <li>5V supply, Red LED (2V): 150Ω resistor</li>
                        <li>9V supply, Red LED (2V): 350Ω resistor</li>
                        <li>12V supply, White LED (3.3V): 440Ω resistor</li>
                        <li>5V supply, Blue LED (3.3V): 85Ω resistor</li>
                    </ul>
                </div>

                <h3>Conclusion</h3>
                <p>Using a resistor calculator for LED circuits is essential for anyone working with electronics. It ensures your LEDs operate safely within their specifications, maximizing both brightness and lifespan. Remember to always verify your calculations with real-world testing and use standard resistor values.</p>
                
                <p>Whether you're building a simple indicator light or a complex LED array, understanding how to calculate the proper current-limiting resistor is fundamental to successful LED circuit design. This calculator takes the guesswork out of the process, helping you create reliable, long-lasting LED projects.</p>
            </div>
        </div>
    </div>

    <script>
        (function() {
            const calculator = {
                elements: {
                    sourceVoltage: document.getElementById('lrc-source-voltage'),
                    ledVoltage: document.getElementById('lrc-led-voltage'),
                    ledCurrent: document.getElementById('lrc-led-current'),
                    ledCount: document.getElementById('lrc-led-count'),
                    calculateBtn: document.getElementById('lrc-calculate'),
                    results: document.getElementById('lrc-results'),
                    ledColors: document.querySelectorAll('.lrc-led-color'),
                    configBtns: document.querySelectorAll('.lrc-config-btn'),
                    
                    // Result elements
                    resistorValue: document.getElementById('lrc-resistor-value'),
                    standardValue: document.getElementById('lrc-standard-value'),
                    powerRating: document.getElementById('lrc-power-rating'),
                    minPower: document.getElementById('lrc-min-power'),
                    actualCurrent: document.getElementById('lrc-actual-current'),
                    voltageDrop: document.getElementById('lrc-voltage-drop'),
                    warning: document.getElementById('lrc-warning'),
                    warningText: document.getElementById('lrc-warning-text'),
                    colorCode: document.getElementById('lrc-color-code')
                },

                state: {
                    configuration: 'series'
                },

                // E12 standard resistor values
                e12Values: [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82],

                init() {
                    this.attachEventListeners();
                    this.setDefaultLedColor();
                },

                attachEventListeners() {
                    this.elements.calculateBtn.addEventListener('click', () => this.calculate());
                    
                    // LED color selection
                    this.elements.ledColors.forEach(color => {
                        color.addEventListener('click', () => this.selectLedColor(color));
                    });

                    // Configuration buttons
                    this.elements.configBtns.forEach(btn => {
                        btn.addEventListener('click', () => this.setConfiguration(btn.dataset.config));
                    });

                    // Enter key to calculate
                    const inputs = [
                        this.elements.sourceVoltage,
                        this.elements.ledVoltage,
                        this.elements.ledCurrent,
                        this.elements.ledCount
                    ];

                    inputs.forEach(input => {
                        input.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') this.calculate();
                        });
                    });
                },

                setDefaultLedColor() {
                    const greenLed = document.querySelector('.lrc-led-color[data-color="green"]');
                    if (greenLed) {
                        this.selectLedColor(greenLed);
                    }
                },

                selectLedColor(colorElement) {
                    // Remove active from all
                    this.elements.ledColors.forEach(color => color.classList.remove('lrc-active'));
                    
                    // Add active to selected
                    colorElement.classList.add('lrc-active');
                    
                    // Update LED voltage input
                    const voltage = colorElement.dataset.voltage;
                    this.elements.ledVoltage.value = voltage;
                    
                    // Update circuit diagram LED color
                    this.updateCircuitLedColor(colorElement.dataset.color);
                },

                updateCircuitLedColor(color) {
                    const ledElement = document.querySelector('.lrc-circuit-svg polygon[fill="none"]');
                    const ledLine = document.querySelector('.lrc-circuit-svg line[x1="310"]');
                    const glowLines = document.querySelectorAll('.lrc-circuit-svg line[opacity="0.5"]');
                    const glowArrows = document.querySelectorAll('.lrc-circuit-svg polygon[opacity="0.5"]');
                    
                    const colorMap = {
                        red: '#ef4444',
                        green: '#10b981',
                        blue: '#3b82f6',
                        yellow: '#f59e0b',
                        white: '#fafafa',
                        orange: '#fb923c'
                    };
                    
                    const ledColor = colorMap[color] || '#10b981';
                    
                    if (ledElement) ledElement.setAttribute('stroke', ledColor);
                    if (ledLine) ledLine.setAttribute('stroke', ledColor);
                    glowLines.forEach(line => line.setAttribute('stroke', ledColor));
                    glowArrows.forEach(arrow => arrow.setAttribute('fill', ledColor));
                },

                setConfiguration(config) {
                    this.state.configuration = config;
                    this.elements.configBtns.forEach(btn => {
                        btn.classList.toggle('lrc-active', btn.dataset.config === config);
                    });
                },

                calculate() {
                    // Get input values
                    const sourceVoltage = parseFloat(this.elements.sourceVoltage.value) || 0;
                    const ledVoltage = parseFloat(this.elements.ledVoltage.value) || 0;
                    const ledCurrent = parseFloat(this.elements.ledCurrent.value) || 0;
                    const ledCount = parseInt(this.elements.ledCount.value) || 1;
                    
                    // Reset warnings
                    this.elements.warning.style.display = 'none';
                    
                    // Validate inputs
                    if (sourceVoltage <= 0 || ledVoltage <= 0 || ledCurrent <= 0) {
                        this.showWarning('Please enter valid positive values for all fields.');
                        return;
                    }
                    
                    let resistance, power, actualCurrent, voltageDrop;
                    
                    if (this.state.configuration === 'series') {
                        // Series calculation
                        const totalLedVoltage = ledVoltage * ledCount;
                        
                        if (totalLedVoltage >= sourceVoltage) {
                            this.showWarning(`Total LED voltage (${totalLedVoltage.toFixed(1)}V) exceeds source voltage. Use fewer LEDs or higher voltage.`);
                            return;
                        }
                        
                        voltageDrop = sourceVoltage - totalLedVoltage;
                        resistance = voltageDrop / (ledCurrent / 1000); // Convert mA to A
                        
                    } else {
                        // Parallel calculation
                        voltageDrop = sourceVoltage - ledVoltage;
                        resistance = voltageDrop / (ledCurrent / 1000); // Single LED calculation
                        
                        if (ledVoltage >= sourceVoltage) {
                            this.showWarning('LED voltage exceeds source voltage. Use a higher supply voltage.');
                            return;
                        }
                    }
                    
                    // Find nearest standard value
                    const standardResistor = this.findStandardValue(resistance);
                    
                    // Calculate actual current with standard resistor
                    actualCurrent = (voltageDrop / standardResistor) * 1000; // Convert to mA
                    
                    // Calculate power dissipation
                    if (this.state.configuration === 'series') {
                        power = Math.pow(actualCurrent / 1000, 2) * standardResistor;
                    } else {
                        // For parallel, total power is sum of all resistors
                        power = Math.pow(actualCurrent / 1000, 2) * standardResistor * ledCount;
                    }
                    
                    // Determine minimum power rating
                    const minPowerRating = this.getMinimumPowerRating(power);
                    
                    // Update results
                    this.displayResults({
                        resistance,
                        standardResistor,
                        power,
                        minPowerRating,
                        actualCurrent,
                        voltageDrop
                    });
                    
                    // Show results
                    this.elements.results.classList.add('lrc-show');
                    
                    // Add warning for parallel configuration
                    if (this.state.configuration === 'parallel' && ledCount > 1) {
                        this.showWarning(`For parallel LEDs, you need ${ledCount} resistors of ${this.formatResistance(standardResistor)} each.`);
                    }
                },

                findStandardValue(resistance) {
                    // Find the multiplier (10^n)
                    let multiplier = 1;
                    let normalizedValue = resistance;
                    
                    while (normalizedValue >= 100) {
                        normalizedValue /= 10;
                        multiplier *= 10;
                    }
                    
                    while (normalizedValue < 10) {
                        normalizedValue *= 10;
                        multiplier /= 10;
                    }
                    
                    // Find closest E12 value
                    let closest = this.e12Values[0];
                    let minDiff = Math.abs(normalizedValue - closest);
                    
                    for (const value of this.e12Values) {
                        const diff = Math.abs(normalizedValue - value);
                        if (diff < minDiff) {
                            minDiff = diff;
                            closest = value;
                        }
                    }
                    
                    // If calculated value is higher than closest, use next higher value
                    if (normalizedValue > closest) {
                        const index = this.e12Values.indexOf(closest);
                        if (index < this.e12Values.length - 1) {
                            closest = this.e12Values[index + 1];
                        } else {
                            closest = this.e12Values[0];
                            multiplier *= 10;
                        }
                    }
                    
                    return closest * multiplier;
                },

                getMinimumPowerRating(power) {
                    const standardPowerRatings = [0.125, 0.25, 0.5, 1, 2, 5];
                    const safetyFactor = 2; // Use 2x safety factor
                    const requiredPower = power * safetyFactor;
                    
                    for (const rating of standardPowerRatings) {
                        if (rating >= requiredPower) {
                            return rating;
                        }
                    }
                    
                    return 5; // Maximum standard rating
                },

                formatResistance(ohms) {
                    if (ohms >= 1000000) {
                        return (ohms / 1000000).toFixed(1).replace(/\.0$/, '') + ' MΩ';
                    } else if (ohms >= 1000) {
                        return (ohms / 1000).toFixed(1).replace(/\.0$/, '') + ' kΩ';
                    } else {
                        return ohms.toFixed(0) + ' Ω';
                    }
                },

                formatPower(watts) {
                    if (watts < 0.125) return '1/8 W';
                    if (watts < 0.25) return '1/4 W';
                    if (watts < 0.5) return '1/2 W';
                    return watts.toFixed(0) + ' W';
                },

                displayResults(results) {
                    this.elements.resistorValue.textContent = this.formatResistance(results.resistance);
                    this.elements.standardValue.textContent = this.formatResistance(results.standardResistor);
                    this.elements.powerRating.textContent = results.power.toFixed(2) + ' W';
                    this.elements.minPower.textContent = this.formatPower(results.minPowerRating);
                    this.elements.actualCurrent.textContent = results.actualCurrent.toFixed(1) + ' mA';
                    this.elements.voltageDrop.textContent = results.voltageDrop.toFixed(1) + ' V';
                    
                    // Update color code
                    const colorCode = this.getColorCode(results.standardResistor);
                    this.elements.colorCode.textContent = colorCode;
                    this.updateResistorBands(results.standardResistor);
                },

                getColorCode(resistance) {
                    const colors = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White'];
                    
                    // Normalize to get first two significant digits
                    let value = resistance;
                    let multiplier = 0;
                    
                    while (value >= 100) {
                        value /= 10;
                        multiplier++;
                    }
                    
                    while (value < 10) {
                        value *= 10;
                        multiplier--;
                    }
                    
                    const firstDigit = Math.floor(value / 10);
                    const secondDigit = Math.floor(value % 10);
                    
                    return `${colors[firstDigit]}-${colors[secondDigit]}-${colors[multiplier]}-Gold`;
                },

                updateResistorBands(resistance) {
                    const colorMap = {
                        0: '#000000', 1: '#8B4513', 2: '#FF0000', 3: '#FFA500',
                        4: '#FFFF00', 5: '#00FF00', 6: '#0000FF', 7: '#8B008B',
                        8: '#808080', 9: '#FFFFFF'
                    };
                    
                    let value = resistance;
                    let multiplier = 0;
                    
                    while (value >= 100) {
                        value /= 10;
                        multiplier++;
                    }
                    
                    while (value < 10) {
                        value *= 10;
                        multiplier--;
                    }
                    
                    const firstDigit = Math.floor(value / 10);
                    const secondDigit = Math.floor(value % 10);
                    
                    document.getElementById('band1').setAttribute('fill', colorMap[firstDigit]);
                    document.getElementById('band2').setAttribute('fill', colorMap[secondDigit]);
                    document.getElementById('band3').setAttribute('fill', colorMap[multiplier]);
                },

                showWarning(message) {
                    this.elements.warningText.textContent = message;
                    this.elements.warning.style.display = 'flex';
                }
            };

            // Initialize calculator
            calculator.init();
        })();
    </script>
</div>
