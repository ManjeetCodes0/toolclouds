---
title: "URL Encoder & Decoder: With Parameters & Special Characters"
localtitle: "URL Encoder/Decoder"
layout: tool
categories: [converters, data]
permalink: /converters/data/url-encoder-decoder
description: "Free online URL encoder and decoder. Encode special characters, decode encoded URLs. Perfect for web development and API testing."
tags:
  - "URL Encoder"
  - "URL Decoder"
  - "Percent Encoding"
  - "URI Encoder"
  - "URL Escape"
  - "Query String Encoder"
  - "Web Development Tool"
  - "API Testing"
  - "Special Characters"
  - "Online Converter"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<div class="ue-wrapper">
    <style>
        :root {
            --ue-primary: #10b981;
            --ue-primary-dark: #059669;
            --ue-secondary: #8b5cf6;
            --ue-secondary-dark: #7c3aed;
            --ue-accent: #f59e0b;
            --ue-bg-dark: #111827;
            --ue-bg-secondary: #1f2937;
            --ue-bg-tertiary: #374151;
            --ue-text-primary: #f9fafb;
            --ue-text-secondary: #e5e7eb;
            --ue-text-muted: #9ca3af;
            --ue-border: rgba(156, 163, 175, 0.2);
            --ue-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
            --ue-shadow-lg: 0 30px 70px rgba(0, 0, 0, 0.6);
        }

        .ue-wrapper {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--ue-bg-dark);
            min-height: 100vh;
            color: var(--ue-text-primary);
            position: relative;
            overflow-x: hidden;
        }

        /* Animated mesh gradient background */
        .ue-wrapper::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 60% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);
            animation: ue-mesh-move 20s ease-in-out infinite;
            pointer-events: none;
        }

        @keyframes ue-mesh-move {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-10px, 10px) rotate(1deg); }
            50% { transform: translate(10px, -10px) rotate(-1deg); }
            75% { transform: translate(-5px, -5px) rotate(0.5deg); }
        }

        .ue-wrapper * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .ue-layout {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            gap: 30px;
            padding: 20px 3px;
            position: relative;
            z-index: 1;
        }

        /* Mobile-first ordering */
        .ue-tool-container { order: 1; }
        .ue-sidebar { order: 2; }
        .ue-info-content { order: 3; }

        .ue-sidebar {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .ue-related-card,
        .ue-ad-space {
            background: linear-gradient(135deg, var(--ue-bg-secondary) 0%, var(--ue-bg-tertiary) 100%);
            border: 1px solid var(--ue-border);
            border-radius: 20px;
            padding: 24px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .ue-related-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--ue-primary), var(--ue-secondary), var(--ue-accent));
            animation: ue-shimmer 3s linear infinite;
        }

        @keyframes ue-shimmer {
            from { transform: translateX(-100%); }
            to { transform: translateX(100%); }
        }

        .ue-related-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 50px rgba(16, 185, 129, 0.2);
        }

        .ue-ad-space {
            min-height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--ue-text-muted);
            border-style: dashed;
        }

        .ue-related-card h3 {
            font-size: 1.35rem;
            font-weight: 800;
            margin-bottom: 20px;
            background: linear-gradient(135deg, var(--ue-primary) 0%, var(--ue-secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
        }

        .ue-related-card ul {
            list-style: none;
        }

        .ue-related-card li {
            margin-bottom: 8px;
        }

        .ue-related-card a {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--ue-text-secondary);
            font-weight: 500;
            padding: 12px 16px;
            border-radius: 12px;
            transition: all 0.3s ease;
            border: 1px solid transparent;
        }

        .ue-related-card a:hover {
            background: rgba(16, 185, 129, 0.1);
            border-color: rgba(16, 185, 129, 0.3);
            color: var(--ue-primary);
            transform: translateX(4px);
        }

        .ue-related-card .fas {
            font-size: 1.1rem;
            color: var(--ue-primary);
        }

        /* Main tool container */
        .ue-tool-container {
            background: rgba(31, 41, 55, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid var(--ue-border);
            border-radius: 24px;
            overflow: hidden;
            box-shadow: var(--ue-shadow-lg);
        }

        .ue-tool-header {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
            padding: 30px;
            text-align: center;
            position: relative;
            border-bottom: 1px solid var(--ue-border);
        }

        .ue-tool-header h1 {
            font-size: 2rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
        }

        .ue-tool-header .fas {
            color: var(--ue-primary);
            font-size: 1.8rem;
        }

        .ue-tool-body {
            padding: 30px;
        }

        /* Mode selector with cool animation */
        .ue-mode-selector {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            position: relative;
            background: rgba(17, 24, 39, 0.6);
            border-radius: 16px;
            padding: 4px;
            border: 1px solid var(--ue-border);
        }

        .ue-mode-btn {
            flex: 1;
            padding: 12px 24px;
            border: none;
            background: transparent;
            color: var(--ue-text-muted);
            font-weight: 600;
            cursor: pointer;
            border-radius: 12px;
            transition: all 0.3s ease;
            position: relative;
            z-index: 2;
        }

        .ue-mode-btn.ue-active {
            color: var(--ue-text-primary);
        }

        .ue-mode-indicator {
            position: absolute;
            top: 4px;
            left: 4px;
            height: calc(100% - 8px);
            width: calc(50% - 4px);
            background: linear-gradient(135deg, var(--ue-primary) 0%, var(--ue-primary-dark) 100%);
            border-radius: 12px;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .ue-mode-indicator.ue-decode {
            transform: translateX(100%);
        }

        /* Input/Output areas */
        .ue-io-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 30px;
        }

        @media (min-width: 768px) {
            .ue-io-container {
                grid-template-columns: 1fr 1fr;
            }
        }

        .ue-panel {
            background: rgba(17, 24, 39, 0.6);
            border: 1px solid var(--ue-border);
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .ue-panel:hover {
            border-color: rgba(16, 185, 129, 0.3);
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.1);
        }

        .ue-panel-header {
            background: rgba(31, 41, 55, 0.8);
            padding: 16px 20px;
            border-bottom: 1px solid var(--ue-border);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .ue-panel-title {
            font-size: 1.1rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .ue-copy-btn {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: var(--ue-primary);
            padding: 6px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 12px;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .ue-copy-btn:hover {
            background: rgba(16, 185, 129, 0.2);
            transform: translateY(-1px);
        }

        .ue-copy-btn.ue-copied {
            background: rgba(16, 185, 129, 0.3);
            color: var(--ue-text-primary);
        }

        .ue-textarea {
            width: 100%;
            min-height: 250px;
            padding: 20px;
            background: transparent;
            border: none;
            color: var(--ue-text-primary);
            font-family: 'Fira Code', monospace;
            font-size: 14px;
            line-height: 1.8;
            resize: vertical;
            outline: none;
        }

        .ue-textarea::placeholder {
            color: var(--ue-text-muted);
        }

        .ue-textarea:focus {
            background: rgba(16, 185, 129, 0.05);
        }

        /* Options section */
        .ue-options {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
            background: rgba(17, 24, 39, 0.6);
            border-radius: 16px;
            margin-bottom: 24px;
            border: 1px solid var(--ue-border);
        }

        .ue-option {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .ue-checkbox {
            width: 20px;
            height: 20px;
            accent-color: var(--ue-primary);
            cursor: pointer;
        }

        .ue-option-label {
            color: var(--ue-text-secondary);
            font-size: 0.95rem;
            cursor: pointer;
            user-select: none;
        }

        /* Action buttons */
        .ue-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            justify-content: center;
        }

        .ue-btn {
            padding: 12px 24px;
            border: none;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            position: relative;
            overflow: hidden;
        }

        .ue-btn-primary {
            background: linear-gradient(135deg, var(--ue-primary) 0%, var(--ue-primary-dark) 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .ue-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(16, 185, 129, 0.4);
        }

        .ue-btn-secondary {
            background: rgba(139, 92, 246, 0.1);
            color: var(--ue-secondary);
            border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .ue-btn-secondary:hover {
            background: rgba(139, 92, 246, 0.2);
            transform: translateY(-1px);
        }

        /* Reference table */
        .ue-reference {
            margin-top: 30px;
            padding: 20px;
            background: rgba(17, 24, 39, 0.6);
            border-radius: 16px;
            border: 1px solid var(--ue-border);
        }

        .ue-reference h3 {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 16px;
            color: var(--ue-primary);
            text-align: center;
        }

        .ue-reference-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 12px;
        }

        .ue-char-item {
            background: rgba(31, 41, 55, 0.8);
            padding: 12px;
            border-radius: 8px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            border: 1px solid transparent;
        }

        .ue-char-item:hover {
            background: rgba(16, 185, 129, 0.1);
            border-color: rgba(16, 185, 129, 0.3);
            transform: scale(1.05);
        }

        .ue-char {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--ue-text-primary);
            margin-bottom: 4px;
            display: block;
        }

        .ue-encoded {
            font-size: 0.875rem;
            color: var(--ue-primary);
            font-family: 'Fira Code', monospace;
        }

        /* Stats display */
        .ue-stats {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 20px;
            padding: 16px;
            background: rgba(16, 185, 129, 0.05);
            border-radius: 12px;
            border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .ue-stat {
            text-align: center;
        }

        .ue-stat-value {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--ue-primary);
            display: block;
        }

        .ue-stat-label {
            font-size: 0.875rem;
            color: var(--ue-text-muted);
        }

        /* Info section */
        .ue-info-content {
            background: linear-gradient(135deg, var(--ue-bg-secondary) 0%, var(--ue-bg-tertiary) 100%);
            border: 1px solid var(--ue-border);
            border-radius: 24px;
            overflow: hidden;
            margin-top: 40px;
            backdrop-filter: blur(10px);
        }

        .ue-info-header {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
            padding: 40px;
            text-align: center;
            border-bottom: 1px solid var(--ue-border);
        }

        .ue-info-header h2 {
            font-size: 2.25rem;
            font-weight: 900;
            background: linear-gradient(135deg, var(--ue-primary) 0%, var(--ue-secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .ue-info-body {
            padding: 50px 40px;
        }

        .ue-info-box {
            background: rgba(16, 185, 129, 0.1);
            border-left: 4px solid var(--ue-primary);
            padding: 24px;
            margin: 30px 0;
            border-radius: 0 12px 12px 0;
        }

        .ue-warning-box {
            background: rgba(245, 158, 11, 0.1);
            border-left: 4px solid var(--ue-accent);
            padding: 24px;
            margin: 30px 0;
            border-radius: 0 12px 12px 0;
        }

        .ue-info-content h3 {
            color: var(--ue-text-primary);
            font-size: 1.75rem;
            margin: 2em 0 1em;
            font-weight: 800;
            position: relative;
            padding-left: 20px;
        }

        .ue-info-content h3::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 24px;
            background: linear-gradient(135deg, var(--ue-primary), var(--ue-secondary));
            border-radius: 2px;
        }

        .ue-info-content h4 {
            color: var(--ue-text-secondary);
            font-size: 1.25rem;
            margin: 1.5em 0 0.8em;
            font-weight: 700;
        }

        .ue-info-content p,
        .ue-info-content li {
            font-size: 17px;
            line-height: 1.8;
            color: var(--ue-text-secondary);
            margin-bottom: 1em;
        }

        .ue-info-content ul {
            list-style: none;
            padding-left: 0;
        }

        .ue-info-content ul li {
            position: relative;
            padding-left: 32px;
            margin-bottom: 16px;
        }

        .ue-info-content ul li::before {
            content: '⚡';
            position: absolute;
            left: 0;
            color: var(--ue-primary);
        }

        .ue-info-content code {
            background: rgba(139, 92, 246, 0.1);
            padding: 2px 8px;
            border-radius: 4px;
            font-family: 'Fira Code', monospace;
            font-size: 0.9em;
            color: var(--ue-secondary);
        }

        .ue-info-content pre {
            background: rgba(17, 24, 39, 0.8);
            border: 1px solid var(--ue-border);
            border-radius: 8px;
            padding: 20px;
            overflow-x: auto;
            margin: 20px 0;
        }

        .ue-info-content pre code {
            background: none;
            padding: 0;
            color: var(--ue-text-primary);
        }

        /* Desktop layout */
        @media (min-width: 1200px) {
            .ue-layout {
                display: grid;
                grid-template-columns: minmax(0, 1fr) 380px;
                grid-template-areas:
                    "main sidebar"
                    "info info";
                gap: 40px;
                max-width: 1400px;
                padding: 40px;
            }

            .ue-tool-container {
                grid-area: main;
                order: 0;
            }

            .ue-sidebar {
                grid-area: sidebar;
                order: 0;
                position: sticky;
                top: 40px;
                align-self: start;
            }

            .ue-info-content {
                grid-area: info;
                order: 0;
                margin-top: 0;
            }

            .ue-info-body {
                padding: 60px 80px;
            }

            .ue-info-content h3,
            .ue-info-content h4,
            .ue-info-content p,
            .ue-info-content ul,
            .ue-info-content ol,
            .ue-info-box,
            .ue-warning-box,
            .ue-info-content pre {
                max-width: 900px;
                margin-left: auto;
                margin-right: auto;
            }

            .ue-info-content p,
            .ue-info-content li {
                font-size: 18px;
                line-height: 1.9;
            }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
            .ue-tool-header h1 {
                font-size: 1.5rem;
            }

            .ue-textarea {
                min-height: 200px;
                font-size: 13px;
            }

            .ue-reference-grid {
                grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            }

            .ue-info-body {
                padding: 30px 20px;
            }
        }

        /* Loading animation */
        .ue-loading {
            animation: ue-spin 1s linear infinite;
        }

        @keyframes ue-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /* Error/Success states */
        .ue-error {
            background: rgba(239, 68, 68, 0.1) !important;
            border-color: rgba(239, 68, 68, 0.3) !important;
        }

        .ue-success {
            background: rgba(16, 185, 129, 0.1) !important;
            border-color: rgba(16, 185, 129, 0.3) !important;
        }
    </style>

    <div class="ue-layout">
        <div class="ue-tool-container">
            <div class="ue-tool-header">
                <h1><i class="fas fa-link"></i> URL Encoder/Decoder</h1>
            </div>
            
            <div class="ue-tool-body">
                <div class="ue-mode-selector">
                    <div class="ue-mode-indicator"></div>
                    <button class="ue-mode-btn ue-active" data-mode="encode">
                        <i class="fas fa-lock"></i> Encode
                    </button>
                    <button class="ue-mode-btn" data-mode="decode">
                        <i class="fas fa-lock-open"></i> Decode
                    </button>
                </div>

                <div class="ue-io-container">
                    <div class="ue-panel">
                        <div class="ue-panel-header">
                            <span class="ue-panel-title">
                                <i class="fas fa-keyboard"></i> Input
                            </span>
                            <button class="ue-copy-btn" data-target="ue-input">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                        </div>
                        <textarea 
                            id="ue-input" 
                            class="ue-textarea" 
                            placeholder="Enter text to encode/decode..."
                            spellcheck="false"
                        >Hello World! Special chars: @#$%^&*()</textarea>
                    </div>
                    
                    <div class="ue-panel">
                        <div class="ue-panel-header">
                            <span class="ue-panel-title">
                                <i class="fas fa-code"></i> Output
                            </span>
                            <button class="ue-copy-btn" data-target="ue-output">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                        </div>
                        <textarea 
                            id="ue-output" 
                            class="ue-textarea" 
                            readonly 
                            placeholder="Encoded/decoded result will appear here..."
                        ></textarea>
                    </div>
                </div>

                <div class="ue-options">
                    <div class="ue-option">
                        <input type="checkbox" id="ue-encode-all" class="ue-checkbox">
                        <label for="ue-encode-all" class="ue-option-label">Encode all characters</label>
                    </div>
                    <div class="ue-option">
                        <input type="checkbox" id="ue-plus-space" class="ue-checkbox">
                        <label for="ue-plus-space" class="ue-option-label">Use + for spaces</label>
                    </div>
                    <div class="ue-option">
                        <input type="checkbox" id="ue-component" class="ue-checkbox" checked>
                        <label for="ue-component" class="ue-option-label">Component encoding</label>
                    </div>
                </div>

                <div class="ue-actions">
                    <button id="ue-process-btn" class="ue-btn ue-btn-primary">
                        <i class="fas fa-sync-alt"></i> 
                        <span>Encode URL</span>
                    </button>
                    <button id="ue-swap-btn" class="ue-btn ue-btn-secondary">
                        <i class="fas fa-exchange-alt"></i> Swap
                    </button>
                    <button id="ue-clear-btn" class="ue-btn ue-btn-secondary">
                        <i class="fas fa-eraser"></i> Clear
                    </button>
                    <button id="ue-sample-btn" class="ue-btn ue-btn-secondary">
                        <i class="fas fa-flask"></i> Sample
                    </button>
                </div>

                <div class="ue-stats" id="ue-stats" style="display: none;">
                    <div class="ue-stat">
                        <span class="ue-stat-value" id="ue-char-count">0</span>
                        <span class="ue-stat-label">Characters</span>
                    </div>
                    <div class="ue-stat">
                        <span class="ue-stat-value" id="ue-encoded-count">0</span>
                        <span class="ue-stat-label">Encoded</span>
                    </div>
                    <div class="ue-stat">
                        <span class="ue-stat-value" id="ue-size-change">0%</span>
                        <span class="ue-stat-label">Size Change</span>
                    </div>
                </div>

                <div class="ue-reference">
                    <h3>Common Character Encodings</h3>
                    <div class="ue-reference-grid">
                        <div class="ue-char-item" data-char=" ">
                            <span class="ue-char">Space</span>
                            <span class="ue-encoded">%20</span>
                        </div>
                        <div class="ue-char-item" data-char="!">
                            <span class="ue-char">!</span>
                            <span class="ue-encoded">%21</span>
                        </div>
                        <div class="ue-char-item" data-char="#">
                            <span class="ue-char">#</span>
                            <span class="ue-encoded">%23</span>
                        </div>
                        <div class="ue-char-item" data-char="$">
                            <span class="ue-char">$</span>
                            <span class="ue-encoded">%24</span>
                        </div>
                        <div class="ue-char-item" data-char="&">
                            <span class="ue-char">&</span>
                            <span class="ue-encoded">%26</span>
                        </div>
                        <div class="ue-char-item" data-char="'">
                            <span class="ue-char">'</span>
                            <span class="ue-encoded">%27</span>
                        </div>
                        <div class="ue-char-item" data-char="=">
                            <span class="ue-char">=</span>
                            <span class="ue-encoded">%3D</span>
                        </div>
                        <div class="ue-char-item" data-char="?">
                            <span class="ue-char">?</span>
                            <span class="ue-encoded">%3F</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="ue-sidebar">
            <div class="ue-ad-space">
                <div>
                    <i class="fas fa-ad fa-2x" style="margin-bottom: 10px; opacity: 0.5;"></i>
                    <p><strong>Advertisement Space</strong></p>
                    <p style="font-size: 0.9em; margin-top: 8px;">Your ad could be here</p>
                </div>
            </div>

            <div class="ue-related-card">
                <h3>🛠️ Related Tools</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-code"></i>HTML Encoder</a></li>
                    <li><a href="#"><i class="fas fa-lock"></i>Base64 Encoder</a></li>
                    <li><a href="#"><i class="fas fa-hashtag"></i>MD5 Generator</a></li>
                    <li><a href="#"><i class="fas fa-shield-alt"></i>JWT Decoder</a></li>
                    <li><a href="#"><i class="fas fa-exchange-alt"></i>JSON Formatter</a></li>
                </ul>
            </div>
        </div>
        
        <div class="ue-info-content">
            <div class="ue-info-header">
                <h2>🔗 The Complete Guide to URL Encoding</h2>
            </div>
            <div class="ue-info-body">
                <div class="ue-info-box">
                    <h3>Quick Summary</h3>
                    <p>URL encoding (also called percent encoding) converts characters into a format that can be safely transmitted over the internet. Special characters are replaced with a percent sign (%) followed by two hexadecimal digits representing the character's ASCII code.</p>
                </div>

                <p>Ever wondered why some URLs look like this: <code>example.com/search?q=hello%20world</code>? That <code>%20</code> is URL encoding in action! It's the internet's way of handling spaces and special characters in web addresses.</p>

                <h3>Why URL Encoding Exists</h3>
                <p>URLs were designed in the early days of the internet with a limited set of characters in mind. The original specification only allowed:</p>
                <ul>
                    <li>Letters (A-Z, a-z)</li>
                    <li>Numbers (0-9)</li>
                    <li>A few special characters: <code>- _ . ~</code></li>
                </ul>

                <p>But what happens when you need to include a space, a question mark, or even emoji in a URL? That's where URL encoding comes in!</p>

                <h3>How URL Encoding Works</h3>
                <p>The encoding process is straightforward:</p>
                <ol>
                    <li>Take the character you want to encode</li>
                    <li>Find its ASCII/Unicode value</li>
                    <li>Convert that value to hexadecimal</li>
                    <li>Prefix it with a percent sign (%)</li>
                </ol>

                <pre><code>Space character → ASCII 32 → Hex 20 → %20
! character → ASCII 33 → Hex 21 → %21
# character → ASCII 35 → Hex 23 → %23</code></pre>

                <h3>Reserved Characters in URLs</h3>
                <p>Some characters have special meanings in URLs and must be encoded when used as data:</p>

                <div class="ue-warning-box">
                    <h4>⚠️ Always Encode These Characters</h4>
                    <ul>
                        <li><code>?</code> - Starts the query string</li>
                        <li><code>&</code> - Separates parameters</li>
                        <li><code>=</code> - Separates keys and values</li>
                        <li><code>#</code> - Starts the fragment identifier</li>
                        <li><code>/</code> - Path separator</li>
                        <li><code>:</code> - Port separator</li>
                    </ul>
                </div>

                <h3>encodeURI vs encodeURIComponent</h3>
                <p>JavaScript provides two built-in functions for URL encoding:</p>

                <h4>encodeURI()</h4>
                <p>Encodes a complete URI, preserving the URL structure:</p>
                <pre><code>encodeURI("https://example.com/my file.html")
// Result: "https://example.com/my%20file.html"</code></pre>

                <h4>encodeURIComponent()</h4>
                <p>Encodes everything, perfect for query parameters:</p>
                <pre><code>const param = "hello & goodbye";
const url = "https://example.com/search?q=" + encodeURIComponent(param);
// Result: "https://example.com/search?q=hello%20%26%20goodbye"</code></pre>

                <h3>The Plus Sign Debate: + vs %20</h3>
                <p>You might see spaces encoded as either <code>+</code> or <code>%20</code>. Both are valid, but used in different contexts:</p>
                <ul>
                    <li><code>%20</code> - Standard percent encoding (works everywhere)</li>
                    <li><code>+</code> - Form data encoding (mainly in query strings)</li>
                </ul>

                <h3>Common Use Cases</h3>

                <h4>1. Search Queries</h4>
                <pre><code>// User searches for: "what's new?"
const search = "what's new?";
const url = "https://example.com/search?q=" + encodeURIComponent(search);
// Result: "https://example.com/search?q=what's%20new%3F"</code></pre>

                <h4>2. API Parameters</h4>
                <pre><code>// Passing JSON data in URL
const data = { name: "John Doe", age: 30 };
const encoded = encodeURIComponent(JSON.stringify(data));
const apiUrl = `https://api.example.com/user?data=${encoded}`;</code></pre>

                <h4>3. File Downloads</h4>
                <pre><code>// Filename with special characters
const filename = "Report (2024) - Final.pdf";
const downloadUrl = "/download/" + encodeURIComponent(filename);</code></pre>

                <h3>International Characters & Unicode</h3>
                <p>Modern URLs support international characters through UTF-8 encoding:</p>
                <pre><code>// Chinese characters
encodeURIComponent("你好") // "%E4%BD%A0%E5%A5%BD"

// Emoji
encodeURIComponent("😀") // "%F0%9F%98%80"</code></pre>

                <div class="ue-info-box">
                    <h4>💡 Pro Tips</h4>
                    <ul>
                        <li>Always encode user input before adding it to URLs</li>
                        <li>Use <code>encodeURIComponent()</code> for query parameters</li>
                        <li>Use <code>encodeURI()</code> only for complete URLs</li>
                        <li>Decode URLs when displaying them to users</li>
                        <li>Be consistent with + vs %20 in your application</li>
                    </ul>
                </div>

                <h3>Security Considerations</h3>
                <p>Proper URL encoding is crucial for security:</p>
                <ul>
                    <li><strong>Prevents Injection Attacks:</strong> Encoding special characters prevents them from being interpreted as URL structure</li>
                    <li><strong>Avoids Breaking URLs:</strong> Unencoded characters can break URL parsing</li>
                    <li><strong>Cross-Site Scripting (XSS):</strong> Always encode user data in URLs to prevent XSS attacks</li>
                </ul>

                <h3>Debugging URL Encoding Issues</h3>
                <p>Common problems and solutions:</p>
                
                <h4>Double Encoding</h4>
                <pre><code>// Wrong: Encoding an already encoded string
let encoded = "%20";
let doubleEncoded = encodeURIComponent(encoded); // "%2520"

// Right: Check if already encoded
if (decodeURIComponent(str) === str) {
    // Not encoded, safe to encode
    encoded = encodeURIComponent(str);
}</code></pre>

                <h4>Incorrect Function Usage</h4>
                <pre><code>// Wrong: Using encodeURI for parameters
const url = "https://example.com/search?q=" + encodeURI("hello & world");
// Result has unencoded & which breaks the query

// Right: Use encodeURIComponent
const url = "https://example.com/search?q=" + encodeURIComponent("hello & world");
// Result properly encodes the &</code></pre>

                <h3>Browser Address Bar vs Actual URL</h3>
                <p>Modern browsers display decoded URLs for readability but send encoded versions:</p>
                <ul>
                    <li><strong>What you see:</strong> <code>example.com/search?q=hello world</code></li>
                    <li><strong>What gets sent:</strong> <code>example.com/search?q=hello%20world</code></li>
                </ul>

                <div class="ue-warning-box">
                    <h4>⚡ Performance Note</h4>
                    <p>URL encoding/decoding is fast, but avoid doing it repeatedly in loops. Cache encoded values when possible, especially for static strings.</p>
                </div>

                <h3>URL Encoding in Different Languages</h3>
                <p>Every programming language has URL encoding functions:</p>
                <pre><code>// JavaScript
encodeURIComponent("hello world")

// Python
urllib.parse.quote("hello world")

// PHP
urlencode("hello world")

// Java
URLEncoder.encode("hello world", "UTF-8")

// C#
HttpUtility.UrlEncode("hello world")</code></pre>

                <h3>Best Practices Summary</h3>
                <ul>
                    <li>Always encode user input before including in URLs</li>
                    <li>Use the appropriate encoding function for your use case</li>
                    <li>Be consistent with space encoding (+ vs %20)</li>
                    <li>Test with special characters and international text</li>
                    <li>Remember that URLs have length limits (around 2048 characters)</li>
                    <li>Document your encoding choices for your team</li>
                </ul>

                <p>URL encoding might seem like a small detail, but it's fundamental to how the web works. Master it, and you'll avoid countless bugs and security issues in your web applications!</p>
            </div>
        </div>
    </div>
    
    <script>
        (function() {
            const encoder = {
                elements: {
                    modeIndicator: document.querySelector('.ue-mode-indicator'),
                    modeBtns: document.querySelectorAll('.ue-mode-btn'),
                    input: document.getElementById('ue-input'),
                    output: document.getElementById('ue-output'),
                    processBtn: document.getElementById('ue-process-btn'),
                    swapBtn: document.getElementById('ue-swap-btn'),
                    clearBtn: document.getElementById('ue-clear-btn'),
                    sampleBtn: document.getElementById('ue-sample-btn'),
                    encodeAll: document.getElementById('ue-encode-all'),
                    plusSpace: document.getElementById('ue-plus-space'),
                    component: document.getElementById('ue-component'),
                    stats: document.getElementById('ue-stats'),
                    charCount: document.getElementById('ue-char-count'),
                    encodedCount: document.getElementById('ue-encoded-count'),
                    sizeChange: document.getElementById('ue-size-change'),
                    copyBtns: document.querySelectorAll('.ue-copy-btn'),
                    charItems: document.querySelectorAll('.ue-char-item')
                },

                state: {
                    mode: 'encode'
                },

                samples: {
                    encode: [
                        'Hello World! Special chars: @#$%^&*()',
                        'https://example.com/search?q=hello world&category=books',
                        'Email me at: user@example.com',
                        'Price: $99.99 (Save 20%!)',
                        '中文字符 and émojis 😀🎉'
                    ],
                    decode: [
                        'Hello%20World%21',
                        'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world',
                        'user%40example.com',
                        'Price%3A%20%2499.99%20%28Save%2020%25%21%29',
                        '%E4%B8%AD%E6%96%87%E5%AD%97%E7%AC%A6'
                    ]
                },

                init() {
                    this.attachEventListeners();
                    this.process(); // Initial processing
                },

                attachEventListeners() {
                    // Mode switching
                    this.elements.modeBtns.forEach(btn => {
                        btn.addEventListener('click', () => this.setMode(btn.dataset.mode));
                    });

                    // Process button
                    this.elements.processBtn.addEventListener('click', () => this.process());

                    // Swap button
                    this.elements.swapBtn.addEventListener('click', () => this.swap());

                    // Clear button
                    this.elements.clearBtn.addEventListener('click', () => this.clear());

                    // Sample button
                    this.elements.sampleBtn.addEventListener('click', () => this.loadSample());

                    // Copy buttons
                    this.elements.copyBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => this.copy(e.currentTarget));
                    });

                    // Character reference clicks
                    this.elements.charItems.forEach(item => {
                        item.addEventListener('click', () => this.insertCharacter(item.dataset.char));
                    });

                    // Auto-process on input
                    this.elements.input.addEventListener('input', () => {
                        clearTimeout(this.processTimeout);
                        this.processTimeout = setTimeout(() => this.process(), 300);
                    });

                    // Options change
                    [this.elements.encodeAll, this.elements.plusSpace, this.elements.component].forEach(opt => {
                        opt.addEventListener('change', () => this.process());
                    });

                    // Keyboard shortcuts
                    document.addEventListener('keydown', (e) => {
                        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                            e.preventDefault();
                            this.process();
                        }
                    });
                },

                setMode(mode) {
                    this.state.mode = mode;
                    
                    // Update UI
                    this.elements.modeBtns.forEach(btn => {
                        btn.classList.toggle('ue-active', btn.dataset.mode === mode);
                    });
                    
                    // Move indicator
                    this.elements.modeIndicator.classList.toggle('ue-decode', mode === 'decode');
                    
                    // Update button text
                    const btnText = this.elements.processBtn.querySelector('span');
                    btnText.textContent = mode === 'encode' ? 'Encode URL' : 'Decode URL';
                    
                    // Update placeholder
                    this.elements.input.placeholder = mode === 'encode' 
                        ? 'Enter text to encode...'
                        : 'Enter URL-encoded text to decode...';
                    
                    this.process();
                },

                process() {
                    const input = this.elements.input.value;
                    if (!input) {
                        this.elements.output.value = '';
                        this.elements.stats.style.display = 'none';
                        return;
                    }

                    let output = '';
                    
                    try {
                        if (this.state.mode === 'encode') {
                            output = this.encode(input);
                        } else {
                            output = this.decode(input);
                        }
                        
                        this.elements.output.value = output;
                        this.elements.output.classList.remove('ue-error');
                        this.updateStats(input, output);
                    } catch (error) {
                        this.elements.output.value = 'Error: Invalid input';
                        this.elements.output.classList.add('ue-error');
                        this.elements.stats.style.display = 'none';
                    }
                },

                encode(input) {
                    const encodeAll = this.elements.encodeAll.checked;
                    const plusSpace = this.elements.plusSpace.checked;
                    const component = this.elements.component.checked;
                    
                    let encoded = '';
                    
                    if (encodeAll) {
                        // Encode every character
                        for (let i = 0; i < input.length; i++) {
                            const char = input[i];
                            encoded += '%' + char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0');
                        }
                    } else if (component) {
                        // Use encodeURIComponent
                        encoded = encodeURIComponent(input);
                    } else {
                        // Use encodeURI
                        encoded = encodeURI(input);
                    }
                    
                    // Handle space encoding preference
                    if (plusSpace && !encodeAll) {
                        encoded = encoded.replace(/%20/g, '+');
                    }
                    
                    return encoded;
                },

                decode(input) {
                    // First replace + with spaces if they're used for spaces
                    let processed = input.replace(/\+/g, ' ');
                    
                    // Decode
                    return decodeURIComponent(processed);
                },

                swap() {
                    const temp = this.elements.input.value;
                    this.elements.input.value = this.elements.output.value;
                    this.elements.output.value = temp;
                    
                    // Visual feedback
                    this.elements.swapBtn.style.transform = 'rotate(180deg)';
                    setTimeout(() => {
                        this.elements.swapBtn.style.transform = '';
                    }, 300);
                    
                    this.updateStats(this.elements.input.value, this.elements.output.value);
                },

                clear() {
                    this.elements.input.value = '';
                    this.elements.output.value = '';
                    this.elements.stats.style.display = 'none';
                    
                    // Visual feedback
                    this.elements.clearBtn.querySelector('i').classList.add('ue-loading');
                    setTimeout(() => {
                        this.elements.clearBtn.querySelector('i').classList.remove('ue-loading');
                    }, 500);
                },

                loadSample() {
                    const samples = this.samples[this.state.mode];
                    const randomSample = samples[Math.floor(Math.random() * samples.length)];
                    
                    // Animate the input
                    this.elements.input.style.opacity = '0';
                    setTimeout(() => {
                        this.elements.input.value = randomSample;
                        this.elements.input.style.opacity = '1';
                        this.process();
                    }, 200);
                },

                insertCharacter(char) {
                    const start = this.elements.input.selectionStart;
                    const end = this.elements.input.selectionEnd;
                    const text = this.elements.input.value;
                    
                    this.elements.input.value = text.slice(0, start) + char + text.slice(end);
                    this.elements.input.focus();
                    this.elements.input.setSelectionRange(start + char.length, start + char.length);
                    
                    this.process();
                },

                updateStats(input, output) {
                    const inputLength = input.length;
                    const outputLength = output.length;
                    const encodedChars = (output.match(/%[0-9A-Fa-f]{2}/g) || []).length;
                    const sizeChange = ((outputLength - inputLength) / inputLength * 100).toFixed(0);
                    
                    this.elements.charCount.textContent = inputLength;
                    this.elements.encodedCount.textContent = encodedChars;
                    this.elements.sizeChange.textContent = sizeChange >= 0 ? `+${sizeChange}%` : `${sizeChange}%`;
                    
                    this.elements.stats.style.display = 'flex';
                },

                async copy(btn) {
                    const targetId = btn.dataset.target;
                    const target = document.getElementById(targetId);
                    const text = target.value;
                    
                    if (!text) return;
                    
                    try {
                        await navigator.clipboard.writeText(text);
                        
                        // Visual feedback
                        btn.classList.add('ue-copied');
                        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        
                        setTimeout(() => {
                            btn.classList.remove('ue-copied');
                            btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                        }, 2000);
                    } catch (err) {
                        console.error('Failed to copy:', err);
                    }
                }
            };

            // Initialize the encoder
            encoder.init();
        })();
    </script>
</div>
