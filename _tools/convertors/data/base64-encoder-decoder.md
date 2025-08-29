---
title: "Base64 Encoder/Decoder: Convert Text, Files, and Images Instantly"
localtitle: "Base64 Encoder/Decoder"
layout: tool
categories: [converters, data]
permalink: /converters/data/base64-encoder-decoder
description: "Free online Base64 encoder and decoder. Convert text, images, and files to Base64. Supports URL-safe encoding, file uploads, and instant conversion."
tags:
  - "Base64 Encoder"
  - "Base64 Decoder"
  - "Base64 Converter"
  - "Text to Base64"
  - "Base64 to Text"
  - "Image to Base64"
  - "File Encoder"
  - "Data URI Generator"
  - "URL Safe Base64"
  - "Encoding Tool"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<div class="b64-encoder-wrapper">
    <style>
        .b64-encoder-wrapper {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            color: #f1f5f9;
        }

        .b64-encoder-wrapper * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .b64-main-layout {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 1200px;
            gap: 30px;
            padding: 20px 3px;
        }

        /* Mobile-first ordering */
        .b64-encoder-container {
            order: 1;
        }

        .b64-sidebar-panel {
            order: 2;
        }

        .b64-info-section {
            order: 3;
        }

        .b64-sidebar-panel {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .b64-tool-card,
        .b64-ad-space {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .b64-ad-space {
            min-height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #64748b;
            text-align: center;
            font-size: 14px;
        }

        .b64-tool-card h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #e2e8f0;
            text-align: center;
        }

        .b64-tool-card ul {
            list-style: none;
        }

        .b64-tool-card li {
            margin-bottom: 8px;
        }

        .b64-tool-card a {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: #cbd5e1;
            font-weight: 500;
            padding: 10px 15px;
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .b64-tool-card a:hover {
            background-color: rgba(99, 102, 241, 0.2);
            color: #a5b4fc;
            transform: translateX(5px);
        }

        .b64-tool-card .fas {
            font-size: 1.1rem;
            color: #818cf8;
        }

        .b64-encoder-container {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .b64-encoder-header {
            background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
            padding: 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .b64-encoder-header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
            animation: b64-rotate 30s linear infinite;
        }

        @keyframes b64-rotate {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        .b64-encoder-header h1 {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            position: relative;
            z-index: 1;
        }

        .b64-encoder-header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
            position: relative;
            z-index: 1;
        }

        .b64-encoder-body {
            padding: 30px;
        }

        .b64-mode-selector {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 4px;
        }

        .b64-mode-btn {
            flex: 1;
            padding: 12px 24px;
            border: none;
            background: transparent;
            color: #94a3b8;
            font-weight: 600;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .b64-mode-btn.b64-active {
            background: rgba(59, 130, 246, 0.2);
            color: #60a5fa;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
        }

        .b64-tabs-container {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .b64-tab {
            padding: 10px 20px;
            border: none;
            background: transparent;
            color: #94a3b8;
            font-weight: 500;
            cursor: pointer;
            position: relative;
            transition: all 0.3s ease;
        }

        .b64-tab.b64-active {
            color: #60a5fa;
        }

        .b64-tab.b64-active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 2px;
            background: #60a5fa;
        }

        .b64-tab-content {
            display: none;
        }

        .b64-tab-content.b64-active {
            display: block;
            animation: b64-fadeIn 0.3s ease-in-out;
        }

        @keyframes b64-fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .b64-input-area {
            margin-bottom: 20px;
        }

        .b64-textarea {
            width: 100%;
            min-height: 200px;
            padding: 20px;
            background: rgba(30, 41, 59, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: #e2e8f0;
            font-family: 'Fira Code', monospace;
            font-size: 14px;
            resize: vertical;
            transition: all 0.3s ease;
        }

        .b64-textarea:focus {
            outline: none;
            border-color: rgba(59, 130, 246, 0.5);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .b64-file-input-container {
            border: 2px dashed rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 40px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .b64-file-input-container.b64-drag-over {
            border-color: #60a5fa;
            background: rgba(59, 130, 246, 0.1);
        }

        .b64-file-input {
            display: none;
        }

        .b64-file-icon {
            font-size: 3rem;
            color: #64748b;
            margin-bottom: 15px;
        }

        .b64-file-text {
            color: #94a3b8;
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .b64-file-info {
            color: #64748b;
            font-size: 0.875rem;
        }

        .b64-file-preview {
            margin-top: 20px;
            padding: 15px;
            background: rgba(30, 41, 59, 0.5);
            border-radius: 8px;
            display: none;
        }

        .b64-file-preview.b64-active {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .b64-file-preview-icon {
            font-size: 2rem;
            color: #60a5fa;
        }

        .b64-file-details {
            flex: 1;
        }

        .b64-file-name {
            font-weight: 600;
            color: #e2e8f0;
            margin-bottom: 5px;
        }

        .b64-file-size {
            font-size: 0.875rem;
            color: #94a3b8;
        }

        .b64-remove-file {
            background: rgba(239, 68, 68, 0.2);
            border: none;
            color: #f87171;
            padding: 8px 12px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .b64-remove-file:hover {
            background: rgba(239, 68, 68, 0.3);
        }

        .b64-image-preview {
            margin-top: 20px;
            text-align: center;
            display: none;
        }

        .b64-image-preview.b64-active {
            display: block;
        }

        .b64-image-preview img {
            max-width: 100%;
            max-height: 300px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .b64-options {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 20px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
        }

        .b64-option {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .b64-checkbox {
            width: 20px;
            height: 20px;
            accent-color: #60a5fa;
            cursor: pointer;
        }

        .b64-option-label {
            color: #cbd5e1;
            font-size: 0.95rem;
            cursor: pointer;
            user-select: none;
        }

        .b64-output-area {
            position: relative;
        }

        .b64-output-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }

        .b64-output-label {
            font-weight: 600;
            color: #e2e8f0;
        }

        .b64-output-actions {
            display: flex;
            gap: 10px;
        }

        .b64-copy-btn,
        .b64-download-btn {
            background: rgba(99, 102, 241, 0.2);
            border: 1px solid rgba(99, 102, 241, 0.3);
            color: #a5b4fc;
            padding: 6px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .b64-copy-btn:hover,
        .b64-download-btn:hover {
            background: rgba(99, 102, 241, 0.3);
            transform: translateY(-1px);
        }

        .b64-copy-btn.b64-copied {
            background: rgba(34, 197, 94, 0.2);
            border-color: rgba(34, 197, 94, 0.3);
            color: #86efac;
        }

        .b64-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
        }

        .b64-stat {
            text-align: center;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
        }

        .b64-stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: #60a5fa;
            margin-bottom: 5px;
        }

        .b64-stat-label {
            font-size: 0.875rem;
            color: #94a3b8;
        }

        .b64-error {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #fca5a5;
            padding: 12px;
            border-radius: 8px;
            margin-top: 10px;
            display: none;
            align-items: center;
            gap: 10px;
        }

        .b64-error.b64-active {
            display: flex;
        }

        .b64-process-btn {
            width: 100%;
            padding: 15px 30px;
            background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
            border: none;
            color: white;
            font-weight: 600;
            font-size: 1.1rem;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin: 20px 0;
        }

        .b64-process-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }

        .b64-process-btn:active {
            transform: translateY(0);
        }

        .b64-loading {
            animation: b64-spin 1s linear infinite;
        }

        @keyframes b64-spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        .b64-features {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 30px;
        }

        @media (min-width: 768px) {
            .b64-features {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .b64-feature {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .b64-feature:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-2px);
        }

        .b64-feature-icon {
            font-size: 2rem;
            color: #60a5fa;
            margin-bottom: 10px;
        }

        .b64-feature h4 {
            font-size: 1rem;
            margin-bottom: 5px;
            color: #e2e8f0;
        }

        .b64-feature p {
            font-size: 0.875rem;
            color: #94a3b8;
        }

        .b64-info-section {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .b64-info-header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 30px 40px;
        }

        .b64-info-header h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .b64-info-body {
            padding: 30px 40px;
            color: #cbd5e1;
        }

        .b64-info-box {
            background: rgba(59, 130, 246, 0.1);
            border-left: 4px solid #3b82f6;
            padding: 20px;
            margin: 25px 0;
            border-radius: 0 8px 8px 0;
        }

        .b64-code-example {
            background: rgba(30, 41, 59, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            overflow-x: auto;
        }

        .b64-code-example code {
            color: #60a5fa;
            font-family: 'Fira Code', monospace;
            font-size: 0.9rem;
        }

        .b64-info-note {
            background: rgba(16, 185, 129, 0.1);
            border-left: 4px solid #10b981;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
            color: #d1d5db;
        }

        .b64-info-section h3 {
            color: #e2e8f0;
            margin-top: 2em;
            margin-bottom: 1em;
            font-size: 1.5rem;
        }

        .b64-info-section h4 {
            color: #cbd5e1;
            margin-top: 1.5em;
            margin-bottom: 0.8em;
        }

        .b64-info-section p,
        .b64-info-section li {
            line-height: 1.8;
            margin-bottom: 1em;
        }

        .b64-info-section ul {
            list-style: disc;
            padding-left: 25px;
            margin-bottom: 1em;
        }

        .b64-info-section table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        .b64-info-section th,
        .b64-info-section td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .b64-info-section th {
            background: rgba(255, 255, 255, 0.05);
            font-weight: 600;
            color: #e2e8f0;
        }

        /* Desktop Layout */
        @media (min-width: 1200px) {
            .b64-main-layout {
                display: grid;
                grid-template-columns: minmax(0, 1fr) 320px;
                grid-template-areas:
                    "main sidebar"
                    "info info";
                gap: 40px;
                max-width: 1400px;
                padding: 0 40px;
            }

            .b64-encoder-container {
                grid-area: main;
                order: 0;
            }

            .b64-sidebar-panel {
                grid-area: sidebar;
                order: 0;
                align-self: start;
            }

            .b64-info-section {
                grid-area: info;
                order: 0;
            }

            .b64-options {
                justify-content: space-between;
            }
        }
    </style>

    <div class="b64-main-layout">
        <div class="b64-encoder-container">
            <div class="b64-encoder-header">
                <h1><i class="fas fa-lock"></i> Base64 Encoder/Decoder</h1>
                <p>Encode and decode text, files, and images to/from Base64 format</p>
            </div>

            <div class="b64-encoder-body">
                <div class="b64-mode-selector">
                    <button class="b64-mode-btn b64-active" data-mode="encode">
                        <i class="fas fa-lock"></i> Encode
                    </button>
                    <button class="b64-mode-btn" data-mode="decode">
                        <i class="fas fa-lock-open"></i> Decode
                    </button>
                </div>

                <div class="b64-tabs-container">
                    <button class="b64-tab b64-active" data-tab="text">
                        <i class="fas fa-font"></i> Text
                    </button>
                    <button class="b64-tab" data-tab="file">
                        <i class="fas fa-file"></i> File
                    </button>
                    <button class="b64-tab" data-tab="image">
                        <i class="fas fa-image"></i> Image
                    </button>
                </div>

                <div class="b64-tab-content b64-active" id="b64-text-tab">
                    <div class="b64-input-area">
                        <textarea id="b64-text-input" class="b64-textarea" placeholder="Enter text to encode/decode..." spellcheck="false">Hello, World!</textarea>
                    </div>
                </div>

                <div class="b64-tab-content" id="b64-file-tab">
                    <div class="b64-file-input-container" id="b64-file-drop-zone">
                        <input type="file" id="b64-file-input" class="b64-file-input" accept="*/*">
                        <i class="fas fa-cloud-upload-alt b64-file-icon"></i>
                        <p class="b64-file-text">Drop file here or click to browse</p>
                        <p class="b64-file-info">Maximum file size: 10MB</p>
                    </div>
                    <div class="b64-file-preview" id="b64-file-preview">
                        <i class="fas fa-file b64-file-preview-icon"></i>
                        <div class="b64-file-details">
                            <div class="b64-file-name" id="b64-file-name"></div>
                            <div class="b64-file-size" id="b64-file-size"></div>
                        </div>
                        <button class="b64-remove-file" id="b64-remove-file">
                            <i class="fas fa-times"></i> Remove
                        </button>
                    </div>
                </div>

                <div class="b64-tab-content" id="b64-image-tab">
                    <div class="b64-file-input-container" id="b64-image-drop-zone">
                        <input type="file" id="b64-image-input" class="b64-file-input" accept="image/*">
                        <i class="fas fa-image b64-file-icon"></i>
                        <p class="b64-file-text">Drop image here or click to browse</p>
                        <p class="b64-file-info">Supported: JPG, PNG, GIF, WebP, SVG</p>
                    </div>
                    <div class="b64-image-preview" id="b64-image-preview">
                        <img id="b64-image-display" src="" alt="Preview">
                    </div>
                </div>

                <div class="b64-options">
                    <div class="b64-option">
                        <input type="checkbox" id="b64-url-safe" class="b64-checkbox">
                        <label for="b64-url-safe" class="b64-option-label">URL Safe (RFC 4648)</label>
                    </div>
                    <div class="b64-option">
                        <input type="checkbox" id="b64-line-breaks" class="b64-checkbox">
                        <label for="b64-line-breaks" class="b64-option-label">Add line breaks (every 76 chars)</label>
                    </div>
                    <div class="b64-option">
                        <input type="checkbox" id="b64-data-uri" class="b64-checkbox">
                        <label for="b64-data-uri" class="b64-option-label">Generate Data URI</label>
                    </div>
                </div>

                <button id="b64-process-btn" class="b64-process-btn">
                    <i class="fas fa-sync-alt"></i>
                    <span>Encode to Base64</span>
                </button>

                <div class="b64-output-area">
                    <div class="b64-output-header">
                        <span class="b64-output-label">Output</span>
                        <div class="b64-output-actions">
                            <button class="b64-copy-btn" id="b64-copy-output">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                            <button class="b64-download-btn" id="b64-download-output" style="display: none;">
                                <i class="fas fa-download"></i> Download
                            </button>
                        </div>
                    </div>
                    <textarea id="b64-output" class="b64-textarea" placeholder="Output will appear here..." readonly></textarea>
                    <div class="b64-error" id="b64-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span id="b64-error-text"></span>
                    </div>
                </div>

                <div class="b64-stats" id="b64-stats" style="display: none;">
                    <div class="b64-stat">
                        <div class="b64-stat-value" id="b64-input-size">0</div>
                        <div class="b64-stat-label">Input Size</div>
                    </div>
                    <div class="b64-stat">
                        <div class="b64-stat-value" id="b64-output-size">0</div>
                        <div class="b64-stat-label">Output Size</div>
                    </div>
                    <div class="b64-stat">
                        <div class="b64-stat-value" id="b64-size-ratio">0%</div>
                        <div class="b64-stat-label">Size Change</div>
                    </div>
                </div>

                <div class="b64-features">
                    <div class="b64-feature">
                        <i class="fas fa-shield-alt b64-feature-icon"></i>
                        <h4>100% Secure</h4>
                        <p>All processing happens locally in your browser</p>
                    </div>
                    <div class="b64-feature">
                        <i class="fas fa-rocket b64-feature-icon"></i>
                        <h4>Lightning Fast</h4>
                        <p>Instant encoding and decoding</p>
                    </div>
                    <div class="b64-feature">
                        <i class="fas fa-cogs b64-feature-icon"></i>
                        <h4>Multiple Options</h4>
                        <p>URL safe, line breaks, Data URI support</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="b64-sidebar-panel">
            <div class="b64-ad-space">
                <p>Advertisement</p>
            </div>
            <div class="b64-tool-card">
                <h3>Related Tools</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-key"></i>MD5 Generator</a></li>
                    <li><a href="#"><i class="fas fa-fingerprint"></i>SHA256 Hash</a></li>
                    <li><a href="#"><i class="fas fa-link"></i>URL Encoder</a></li>
                    <li><a href="#"><i class="fas fa-code"></i>HTML Encoder</a></li>
                    <li><a href="#"><i class="fas fa-lock"></i>JWT Decoder</a></li>
                </ul>
            </div>
            <div class="b64-ad-space">
                <p>Advertisement</p>
            </div>
        </div>

        <div class="b64-info-section">
            <div class="b64-info-header">
                <h2>The Complete Guide to Base64 Encoding</h2>
            </div>
            <div class="b64-info-body">
                <div class="b64-info-box">
                    <h3>What is Base64?</h3>
                    <p>Okay, so what in the world is Base64 encoding? Ever tried to send a picture in an email and wondered how that actually works? Or seen a super long, crazy-looking string of text in a bit of code and thought, "what is that?". Chances are, you were lookin at Base64. In simple terms, Base64 is like a universal translator. It takes any kind of data you can think of—an image, a PDF, a zip file, whatever—and turns it into a plain text string. It's designed to carry data that's normally stored in a binary (computer-only) format across systems that only really trust plain old text.</p>
                </div>

                <h3>How Base64 Works</h3>
                <p>This part sounds like scary computer science, but its actually not that bad. It's like a secret code with a simple rulebook. Base64 encoding works by grabbing your data in little groups of three bytes. A byte is just a group of 8 bits (1s and 0s). So it takes three of these, making a 24-bit chunk. Then, it does something clever. It takes that 24-bit chunk and chops it up into four smaller, 6-bit chunks. Each of those 6-bit chunks represents a number from 0 to 63. And each of those numbers matches up with a character from the special "Base64 Alphabet". It's just a simple lookup table. So, 3 bytes of your original file become 4 safe text characters.</p>

                <div class="b64-code-example">
                    <code>
                        Let's see it in action with the word "Hi!":<br><br>
                        Text: "Hi!"<br>
                        ASCII Numbers: 72 105 33<br>
                        Binary (3 bytes of 8 bits): 01001000 01101001 00100001<br>
                        Squished together (24 bits): 010010000110100100100001<br>
                        Chopped into 4 groups of 6 bits: 010010 000110 100100 100001<br>
                        The number for each group: 18 6 36 33<br>
                        Look up in the table below...<br>
                        Base64 Result: "SGkh"
                    </code>
                </div>

                <h3>The Base64 Alphabet</h3>
                <p>So what's this magic alphabet? It's just a set of 64 characters that are known to be safe. They exist in almost every character set and won't get messed up when being sent across different systems. It's made of the uppercase letters A-Z, the lowercase letters a-z, the numbers 0-9, and two special characters, '+' and '/'.</p>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Char</th>
                        <th>Value</th>
                        <th>Char</th>
                        <th>Value</th>
                        <th>Char</th>
                        <th>Value</th>
                        <th>Char</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>A</td>
                        <td>16</td>
                        <td>Q</td>
                        <td>32</td>
                        <td>g</td>
                        <td>48</td>
                        <td>w</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B</td>
                        <td>17</td>
                        <td>R</td>
                        <td>33</td>
                        <td>h</td>
                        <td>49</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>62</td>
                        <td>+</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>P</td>
                        <td>31</td>
                        <td>f</td>
                        <td>47</td>
                        <td>v</td>
                        <td>63</td>
                        <td>/</td>
                    </tr>
                </table>

                <div class="b64-info-note">
                    <p><strong>URL Safe Base64:</strong> Ever notice how '+' and '/' can be weird in URLs? The '+' can turn into a space, and the '/' is used for paths. It's a problem. So, clever people made a "URL Safe" version of Base64. It just replaces '+' with '-' (a hyphen) and '/' with '_' (an underscore). This makes the encoded string totally safe to use in URLs and filenames without any extra encoding.</p>
                </div>

                <h3>Common Use Cases</h3>
                <h4>1. Email Attachments (MIME)</h4>
                <p>This is the original, classic use case. The first email systems were designed for plain text only. You couldn't send a picture of your cat. The MIME standard was invented to fix this, and it uses Base64 to turn your cat picture into a long block of text that the email server can handle. When it gets to the other side, the email client decodes it back into a picture.</p>

                <h4>2. Data URIs</h4>
                <p>This is a really cool one for web developers. Instead of linking to a small image, you can embed the image's data directly into your HTML or CSS. It saves the browser from having to make a whole separate request to the server just to get a tiny icon. The downside is it makes your HTML file bigger, so you only want to do it for small images.</p>
                <div class="b64-code-example">
                    <code>&lt;img src="data:image/png;base64,iVBORw0KGgo..." /&gt;</code>
                </div>

                <h4>3. API Communication</h4>
                <p>Sometimes you need to send a file, like a profile picture, inside a JSON payload. You can't just stuff a binary file into a JSON string, it'll break. So what do you do? You Base64 encode the file, turning it into a safe string, and then put that string into your JSON. The server gets the JSON, pulls out the string, and decodes it back into the original file. Problem solved.</p>

                <h4>4. Basic Authentication</h4>
                <p>This is a simple way to protect a webpage with a password. The browser takes your username and password, joins them with a colon like "username:password", and then Base64 encodes that string. It is NOT secure because anyone can easily decode it, but it's a simple way to stop casual snooping.</p>
                <div class="b64-code-example">
                    <code>Authorization: Basic dXNlcjpwYXNz</code>
                </div>

                <h3>Padding in Base64</h3>
                <p>What happens if your input data isn't a perfect multiple of 3 bytes? Base64 is very neat and tidy, it needs its output to always be a multiple of 4 characters. If the original data is a little short, it adds padding characters (=) to the end to make up the difference. It's like a drill sergeant making sure all the soldiers are in perfect rows of four. The padding tells the decoder exactly when the original data stopped.</p>
                <ul>
                    <li>If input length mod 3 = 1: Add "=="</li>
                    <li>If input length mod 3 = 2: Add "="</li>
                    <li>If input length mod 3 = 0: No padding needed</li>
                </ul>

                <h3>Performance Considerations</h3>
                <div class="b64-info-box">
                    <h4>Size Increase</h4>
                    <p>Base64 encoding increases data size by approximately 33% (4 characters for every 3 bytes). This is important when considering bandwidth and storage.</p>
                </div>

                <h3>Security Note</h3>
                <div class="b64-info-note">
                    <p><strong>Warning:</strong> Base64 is NOT encryption! It's simply a different representation of data. Never use Base64 alone for securing sensitive information.</p>
                </div>

                <h3>Best Practices</h3>
                <ul>
                    <li><strong>Line Breaks:</strong> Add line breaks every 76 characters for MIME compliance</li>
                    <li><strong>Character Set:</strong> Always specify character encoding (usually UTF-8) before encoding text</li>
                    <li><strong>Validation:</strong> Validate Base64 strings before decoding to avoid errors</li>
                    <li><strong>Memory Usage:</strong> Be mindful of memory when encoding large files in browsers</li>
                </ul>

                <h3>Browser Support</h3>
                <p>Modern browsers provide native Base64 support through:</p>
                <div class="b64-code-example">
                    <code>
                        // Encoding<br>
                        btoa('Hello World') // "SGVsbG8gV29ybGQ="<br><br>
                        // Decoding<br>
                        atob('SGVsbG8gV29ybGQ=') // "Hello World"
                    </code>
                </div>
            </div>
        </div>
    </div>

    <script>
        (function() {
            const encoder = {
                elements: {
                    modeBtns: document.querySelectorAll('.b64-mode-btn'),
                    tabs: document.querySelectorAll('.b64-tab'),
                    tabContents: document.querySelectorAll('.b64-tab-content'),
                    textInput: document.getElementById('b64-text-input'),
                    fileInput: document.getElementById('b64-file-input'),
                    imageInput: document.getElementById('b64-image-input'),
                    fileDropZone: document.getElementById('b64-file-drop-zone'),
                    imageDropZone: document.getElementById('b64-image-drop-zone'),
                    filePreview: document.getElementById('b64-file-preview'),
                    imagePreview: document.getElementById('b64-image-preview'),
                    imageDisplay: document.getElementById('b64-image-display'),
                    fileName: document.getElementById('b64-file-name'),
                    fileSize: document.getElementById('b64-file-size'),
                    removeFile: document.getElementById('b64-remove-file'),
                    output: document.getElementById('b64-output'),
                    processBtn: document.getElementById('b64-process-btn'),
                    copyBtn: document.getElementById('b64-copy-output'),
                    downloadBtn: document.getElementById('b64-download-output'),
                    urlSafe: document.getElementById('b64-url-safe'),
                    lineBreaks: document.getElementById('b64-line-breaks'),
                    dataUri: document.getElementById('b64-data-uri'),
                    error: document.getElementById('b64-error'),
                    errorText: document.getElementById('b64-error-text'),
                    stats: document.getElementById('b64-stats'),
                    inputSize: document.getElementById('b64-input-size'),
                    outputSize: document.getElementById('b64-output-size'),
                    sizeRatio: document.getElementById('b64-size-ratio')
                },

                state: {
                    mode: 'encode',
                    activeTab: 'text',
                    currentFile: null,
                    currentImage: null
                },

                init() {
                    this.attachEventListeners();
                    this.setupDragAndDrop();
                },

                attachEventListeners() {
                    // Mode selection
                    this.elements.modeBtns.forEach(btn => {
                        btn.addEventListener('click', () => this.setMode(btn.dataset.mode));
                    });

                    // Tab selection
                    this.elements.tabs.forEach(tab => {
                        tab.addEventListener('click', () => this.setActiveTab(tab.dataset.tab));
                    });

                    // File inputs
                    this.elements.fileInput.addEventListener('change', (e) => this.handleFileSelect(e.target.files[0], 'file'));
                    this.elements.imageInput.addEventListener('change', (e) => this.handleFileSelect(e.target.files[0], 'image'));

                    // Remove file
                    this.elements.removeFile.addEventListener('click', () => this.clearFile());

                    // Process button
                    this.elements.processBtn.addEventListener('click', () => this.process());

                    // Copy button
                    this.elements.copyBtn.addEventListener('click', () => this.copyOutput());

                    // Download button
                    this.elements.downloadBtn.addEventListener('click', () => this.downloadOutput());

                    // Auto-process on text input
                    this.elements.textInput.addEventListener('input', () => {
                        if (this.state.activeTab === 'text') {
                            this.process();
                        }
                    });

                    // Options change
                    [this.elements.urlSafe, this.elements.lineBreaks, this.elements.dataUri].forEach(opt => {
                        opt.addEventListener('change', () => this.process());
                    });
                },

                setupDragAndDrop() {
                    [this.elements.fileDropZone, this.elements.imageDropZone].forEach((zone, index) => {
                        const type = index === 0 ? 'file' : 'image';

                        zone.addEventListener('click', () => {
                            const input = type === 'file' ? this.elements.fileInput : this.elements.imageInput;
                            input.click();
                        });

                        zone.addEventListener('dragover', (e) => {
                            e.preventDefault();
                            zone.classList.add('b64-drag-over');
                        });

                        zone.addEventListener('dragleave', () => {
                            zone.classList.remove('b64-drag-over');
                        });

                        zone.addEventListener('drop', (e) => {
                            e.preventDefault();
                            zone.classList.remove('b64-drag-over');

                            const files = e.dataTransfer.files;
                            if (files.length > 0) {
                                this.handleFileSelect(files[0], type);
                            }
                        });
                    });
                },

                setMode(mode) {
                    this.state.mode = mode;
                    this.elements.modeBtns.forEach(btn => {
                        btn.classList.toggle('b64-active', btn.dataset.mode === mode);
                    });

                    const btnText = this.elements.processBtn.querySelector('span');
                    btnText.textContent = mode === 'encode' ? 'Encode to Base64' : 'Decode from Base64';

                    // Update data URI option visibility
                    this.elements.dataUri.parentElement.style.display =
                        mode === 'encode' ? 'flex' : 'none';

                    this.process();
                },

                setActiveTab(tab) {
                    this.state.activeTab = tab;

                    this.elements.tabs.forEach(t => {
                        t.classList.toggle('b64-active', t.dataset.tab === tab);
                    });

                    this.elements.tabContents.forEach(content => {
                        const contentTab = content.id.replace('b64-', '').replace('-tab', '');
                        content.classList.toggle('b64-active', contentTab === tab);
                    });

                    // Clear output when switching tabs
                    this.clearOutput();
                },

                handleFileSelect(file, type) {
                    if (!file) return;

                    // Check file size (10MB limit)
                    const maxSize = 10 * 1024 * 1024;
                    if (file.size > maxSize) {
                        this.showError('File size exceeds 10MB limit');
                        return;
                    }

                    if (type === 'file') {
                        this.state.currentFile = file;
                        this.elements.fileName.textContent = file.name;
                        this.elements.fileSize.textContent = this.formatFileSize(file.size);
                        this.elements.filePreview.classList.add('b64-active');
                    } else {
                        // Validate image type
                        if (!file.type.startsWith('image/')) {
                            this.showError('Please select a valid image file');
                            return;
                        }

                        this.state.currentImage = file;
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            this.elements.imageDisplay.src = e.target.result;
                            this.elements.imagePreview.classList.add('b64-active');
                        };
                        reader.readAsDataURL(file);
                    }

                    this.process();
                },

                clearFile() {
                    this.state.currentFile = null;
                    this.elements.fileInput.value = '';
                    this.elements.filePreview.classList.remove('b64-active');
                    this.clearOutput();
                },

                async process() {
                    try {
                        this.clearError();
                        this.elements.processBtn.querySelector('i').classList.add('b64-loading');

                        let input = '';
                        let mimeType = 'text/plain';

                        // Get input based on active tab
                        if (this.state.activeTab === 'text') {
                            input = this.elements.textInput.value;
                            if (!input) {
                                this.clearOutput();
                                return;
                            }
                        } else if (this.state.activeTab === 'file' && this.state.currentFile) {
                            input = await this.fileToBase64(this.state.currentFile);
                            mimeType = this.state.currentFile.type || 'application/octet-stream';
                        } else if (this.state.activeTab === 'image' && this.state.currentImage) {
                            input = await this.fileToBase64(this.state.currentImage);
                            mimeType = this.state.currentImage.type;
                        } else {
                            this.clearOutput();
                            return;
                        }

                        let output = '';

                        if (this.state.mode === 'encode') {
                            output = this.encode(input);

                            // Apply options
                            if (this.elements.urlSafe.checked) {
                                output = output.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
                            }

                            if (this.elements.lineBreaks.checked) {
                                output = output.match(/.{1,76}/g).join('\n');
                            }

                            if (this.elements.dataUri.checked && this.state.activeTab !== 'text') {
                                output = `data:${mimeType};base64,${output}`;
                            }
                        } else {
                            // Decode
                            if (this.state.activeTab === 'text') {
                                // Remove data URI prefix if present
                                const dataUriMatch = input.match(/^data:.*?;base64,(.*)$/);
                                if (dataUriMatch) {
                                    input = dataUriMatch[1];
                                }

                                // Remove whitespace and newlines
                                input = input.replace(/\s/g, '');

                                // Convert URL-safe back to standard
                                input = input.replace(/-/g, '+').replace(/_/g, '/');

                                // Add padding if needed
                                while (input.length % 4) {
                                    input += '=';
                                }

                                output = this.decode(input);
                            } else {
                                this.showError('File/Image decoding not supported. Use text mode for decoding.');
                                return;
                            }
                        }

                        this.elements.output.value = output;
                        this.updateStats(input, output);

                        // Show download button for file/image encoding
                        this.elements.downloadBtn.style.display =
                            (this.state.mode === 'encode' && this.state.activeTab !== 'text') ? 'flex' : 'none';

                    } catch (error) {
                        this.showError(error.message);
                    } finally {
                        this.elements.processBtn.querySelector('i').classList.remove('b64-loading');
                    }
                },

                encode(input) {
                    if (this.state.activeTab === 'text') {
                        // Convert text to base64
                        return btoa(unescape(encodeURIComponent(input)));
                    } else {
                        // Input is already base64 from fileToBase64
                        return input;
                    }
                },

                decode(input) {
                    try {
                        return decodeURIComponent(escape(atob(input)));
                    } catch (e) {
                        throw new Error('Invalid Base64 string');
                    }
                },

                async fileToBase64(file) {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () => {
                            // Extract base64 from data URL
                            const base64 = reader.result.split(',')[1];
                            resolve(base64);
                        };
                        reader.onerror = reject;
                        reader.readAsDataURL(file);
                    });
                },

                updateStats(input, output) {
                    const inputSize = new Blob([input]).size;
                    const outputSize = new Blob([output]).size;
                    const ratio = ((outputSize - inputSize) / inputSize * 100).toFixed(1);

                    this.elements.inputSize.textContent = this.formatFileSize(inputSize);
                    this.elements.outputSize.textContent = this.formatFileSize(outputSize);
                    this.elements.sizeRatio.textContent = ratio > 0 ? `+${ratio}%` : `${ratio}%`;

                    this.elements.stats.style.display = 'grid';
                },

                formatFileSize(bytes) {
                    if (bytes === 0) return '0 B';
                    const k = 1024;
                    const sizes = ['B', 'KB', 'MB', 'GB'];
                    const i = Math.floor(Math.log(bytes) / Math.log(k));
                    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
                },

                async copyOutput() {
                    const text = this.elements.output.value;
                    if (!text) return;

                    try {
                        await navigator.clipboard.writeText(text);
                        this.elements.copyBtn.classList.add('b64-copied');
                        this.elements.copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';

                        setTimeout(() => {
                            this.elements.copyBtn.classList.remove('b64-copied');
                            this.elements.copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                        }, 2000);
                    } catch (err) {
                        this.showError('Failed to copy to clipboard');
                    }
                },

                downloadOutput() {
                    const output = this.elements.output.value;
                    if (!output) return;

                    const filename = this.state.activeTab === 'file' ?
                        `encoded_${this.state.currentFile.name}.txt` :
                        `encoded_image.txt`;

                    const blob = new Blob([output], {
                        type: 'text/plain'
                    });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                },

                clearOutput() {
                    this.elements.output.value = '';
                    this.elements.stats.style.display = 'none';
                    this.elements.downloadBtn.style.display = 'none';
                    this.clearError();
                },

                showError(message) {
                    this.elements.errorText.textContent = message;
                    this.elements.error.classList.add('b64-active');
                },

                clearError() {
                    this.elements.error.classList.remove('b64-active');
                }
            };

            // Initialize the encoder
            encoder.init();
        })();
    </script>
</div>