---
title: "XML to JSON Converter: Transform Data Formats Instantly"
localtitle: "XML to JSON"
layout: tool
categories: [converters, data]
permalink: /converters/data/xml-to-json-converter
description: "Convert XML to JSON online instantly. Free XML to JSON converter with syntax highlighting, validation, and formatting. Transform your data."
tags:
  - "XML to JSON Converter"
  - "XML JSON Transform"
  - "Data Converter"
  - "XML Parser"
  - "JSON Generator"
  - "Data Format Tool"
  - "Developer Tools"
  - "API Data Converter"
  - "XML Validator"
  - "JSON Formatter"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<div class="x2j-converter-wrapper">
    <style>
        .x2j-converter-wrapper {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            color: #f1f5f9;
        }

        .x2j-converter-wrapper * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .x2j-main-layout {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 1200px;
            gap: 30px;
            padding: 20px 3px;
        }

        /* Mobile-first ordering */
        .x2j-converter-container { order: 1; }
        .x2j-sidebar-panel { order: 2; }
        .x2j-info-section { order: 3; }

        .x2j-sidebar-panel {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .x2j-tool-card,
        .x2j-ad-space {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .x2j-ad-space {
            min-height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #64748b;
            text-align: center;
            font-size: 14px;
        }

        .x2j-tool-card h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #e2e8f0;
            text-align: center;
        }

        .x2j-tool-card ul {
            list-style: none;
        }

        .x2j-tool-card li {
            margin-bottom: 8px;
        }

        .x2j-tool-card a {
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

        .x2j-tool-card a:hover {
            background-color: rgba(99, 102, 241, 0.2);
            color: #a5b4fc;
            transform: translateX(5px);
        }

        .x2j-tool-card .fas {
            font-size: 1.1rem;
            color: #818cf8;
        }

        .x2j-converter-container {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .x2j-converter-header {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            padding: 30px;
            text-align: center;
        }

        .x2j-converter-header h1 {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }

        .x2j-converter-header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
        }

        .x2j-converter-body {
            padding: 30px;
        }

        .x2j-controls {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 25px;
            justify-content: center;
        }

        .x2j-control-group {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .x2j-control-label {
            font-size: 14px;
            color: #cbd5e1;
            font-weight: 500;
        }

        .x2j-toggle {
            position: relative;
            width: 50px;
            height: 26px;
        }

        .x2j-toggle input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .x2j-toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #475569;
            transition: .4s;
            border-radius: 34px;
        }

        .x2j-toggle-slider:before {
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

        .x2j-toggle input:checked + .x2j-toggle-slider {
            background-color: #6366f1;
        }

        .x2j-toggle input:checked + .x2j-toggle-slider:before {
            transform: translateX(24px);
        }

        .x2j-editor-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 25px;
        }

        @media (min-width: 768px) {
            .x2j-editor-container {
                grid-template-columns: 1fr 1fr;
            }
        }

        .x2j-editor-panel {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(30, 41, 59, 0.5);
        }

        .x2j-editor-header {
            background: rgba(255, 255, 255, 0.05);
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .x2j-editor-title {
            font-weight: 600;
            color: #e2e8f0;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .x2j-copy-btn {
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

        .x2j-copy-btn:hover {
            background: rgba(99, 102, 241, 0.3);
            transform: translateY(-1px);
        }

        .x2j-copy-btn.x2j-copied {
            background: rgba(34, 197, 94, 0.2);
            border-color: rgba(34, 197, 94, 0.3);
            color: #86efac;
        }

        .x2j-editor-content {
            position: relative;
            height: 400px;
            overflow: hidden;
        }

        .x2j-textarea,
        .x2j-code-output {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 20px;
            background: transparent;
            border: none;
            color: #e2e8f0;
            font-family: 'Fira Code', 'Consolas', monospace;
            font-size: 14px;
            line-height: 1.6;
            resize: none;
            outline: none;
            overflow-y: auto;
        }

        .x2j-textarea::placeholder {
            color: #64748b;
        }

        .x2j-code-output {
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .x2j-error-message {
            position: absolute;
            bottom: 20px;
            left: 20px;
            right: 20px;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #fca5a5;
            padding: 12px;
            border-radius: 8px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .x2j-action-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .x2j-btn {
            padding: 12px 30px;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
        }

        .x2j-btn-primary {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .x2j-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .x2j-btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: #e2e8f0;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .x2j-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-1px);
        }

        .x2j-features {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 30px;
        }

        @media (min-width: 768px) {
            .x2j-features {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .x2j-feature {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .x2j-feature:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-2px);
        }

        .x2j-feature-icon {
            font-size: 2rem;
            color: #818cf8;
            margin-bottom: 10px;
        }

        .x2j-feature h4 {
            font-size: 1rem;
            margin-bottom: 5px;
            color: #e2e8f0;
        }

        .x2j-feature p {
            font-size: 0.875rem;
            color: #94a3b8;
        }

        .x2j-info-section {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .x2j-info-header {
            background: linear-gradient(135deg, #3730a3 0%, #6366f1 100%);
            color: white;
            padding: 30px 40px;
        }

        .x2j-info-header h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .x2j-info-body {
            padding: 30px 40px;
            color: #cbd5e1;
        }

        .x2j-info-box {
            background: rgba(99, 102, 241, 0.1);
            border-left: 4px solid #6366f1;
            padding: 20px;
            margin: 25px 0;
            border-radius: 0 8px 8px 0;
        }

        .x2j-info-note {
            background: rgba(16, 185, 129, 0.1);
            border-left: 4px solid #10b981;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
            color: #d1d5db;
        }

        .x2j-info-section h3 {
            color: #e2e8f0;
            margin-top: 2em;
            margin-bottom: 1em;
            font-size: 1.5rem;
        }

        .x2j-info-section h4 {
            color: #cbd5e1;
            margin-top: 1.5em;
            margin-bottom: 0.8em;
        }

        .x2j-info-section p,
        .x2j-info-section li {
            line-height: 1.8;
            margin-bottom: 1em;
        }

        .x2j-info-section ul {
            list-style: disc;
            padding-left: 25px;
            margin-bottom: 1em;
        }

        .x2j-info-section code {
            background: rgba(99, 102, 241, 0.2);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Fira Code', monospace;
            font-size: 0.9em;
        }

        .x2j-info-section pre {
            background: rgba(30, 41, 59, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 15px;
            overflow-x: auto;
            margin: 20px 0;
        }

        /* Desktop Layout */
        @media (min-width: 1200px) {
            .x2j-main-layout {
                display: grid;
                grid-template-columns: minmax(0, 1fr) 320px;
                grid-template-areas:
                    "main sidebar"
                    "info info";
                gap: 40px;
                max-width: 1400px;
                padding: 0 40px;
            }

            .x2j-converter-container { 
                grid-area: main; 
                order: 0; 
            }

            .x2j-sidebar-panel { 
                grid-area: sidebar; 
                order: 0; 
                align-self: start;
            }

            .x2j-info-section { 
                grid-area: info; 
                order: 0; 
            }
        }

        /* Loading animation */
        @keyframes x2j-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .x2j-loading {
            animation: x2j-spin 1s linear infinite;
        }

        /* Syntax highlighting */
        .x2j-syntax-xml { color: #fbbf24; }
        .x2j-syntax-tag { color: #60a5fa; }
        .x2j-syntax-attr { color: #a78bfa; }
        .x2j-syntax-value { color: #34d399; }
        .x2j-syntax-json-key { color: #60a5fa; }
        .x2j-syntax-json-value { color: #34d399; }
        .x2j-syntax-json-string { color: #fbbf24; }
        .x2j-syntax-json-number { color: #f87171; }
        .x2j-syntax-json-boolean { color: #c084fc; }
        .x2j-syntax-json-null { color: #94a3b8; }
    </style>

    <div class="x2j-main-layout">
        <div class="x2j-converter-container">
            <div class="x2j-converter-header">
                <h1><i class="fas fa-exchange-alt"></i> XML to JSON Converter</h1>
                <p>Transform XML data into JSON format with syntax highlighting and validation</p>
            </div>

            <div class="x2j-converter-body">
                <div class="x2j-controls">
                    <div class="x2j-control-group">
                        <label class="x2j-control-label">Compact Output</label>
                        <label class="x2j-toggle">
                            <input type="checkbox" id="x2j-compact-mode">
                            <span class="x2j-toggle-slider"></span>
                        </label>
                    </div>
                    <div class="x2j-control-group">
                        <label class="x2j-control-label">Preserve Attributes</label>
                        <label class="x2j-toggle">
                            <input type="checkbox" id="x2j-preserve-attrs" checked>
                            <span class="x2j-toggle-slider"></span>
                        </label>
                    </div>
                    <div class="x2j-control-group">
                        <label class="x2j-control-label">Include Root</label>
                        <label class="x2j-toggle">
                            <input type="checkbox" id="x2j-include-root" checked>
                            <span class="x2j-toggle-slider"></span>
                        </label>
                    </div>
                </div>

                <div class="x2j-editor-container">
                    <div class="x2j-editor-panel">
                        <div class="x2j-editor-header">
                            <span class="x2j-editor-title"><i class="fas fa-code"></i> XML Input</span>
                            <button class="x2j-copy-btn" data-target="x2j-xml-input">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                        </div>
                        <div class="x2j-editor-content">
                            <textarea 
                                id="x2j-xml-input" 
                                class="x2j-textarea" 
                                placeholder="Paste your XML here..."
                                spellcheck="false"
                            ><?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book id="1" category="fiction">
        <title>The Great Gatsby</title>
        <author>F. Scott Fitzgerald</author>
        <price currency="USD">12.99</price>
        <year>1925</year>
    </book>
    <book id="2" category="tech">
        <title>Clean Code</title>
        <author>Robert C. Martin</author>
        <price currency="USD">39.95</price>
        <year>2008</year>
    </book>
</bookstore></textarea>
                        </div>
                    </div>

                    <div class="x2j-editor-panel">
                        <div class="x2j-editor-header">
                            <span class="x2j-editor-title"><i class="fas fa-brackets-curly"></i> JSON Output</span>
                            <button class="x2j-copy-btn" data-target="x2j-json-output">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                        </div>
                        <div class="x2j-editor-content">
                            <pre id="x2j-json-output" class="x2j-code-output"></pre>
                        </div>
                    </div>
                </div>

                <div class="x2j-action-buttons">
                    <button id="x2j-convert-btn" class="x2j-btn x2j-btn-primary">
                        <i class="fas fa-sync-alt"></i> Convert to JSON
                    </button>
                    <button id="x2j-clear-btn" class="x2j-btn x2j-btn-secondary">
                        <i class="fas fa-eraser"></i> Clear All
                    </button>
                    <button id="x2j-sample-btn" class="x2j-btn x2j-btn-secondary">
                        <i class="fas fa-file-code"></i> Load Sample
                    </button>
                </div>

                <div class="x2j-features">
                    <div class="x2j-feature">
                        <i class="fas fa-bolt x2j-feature-icon"></i>
                        <h4>Lightning Fast</h4>
                        <p>Instant conversion with real-time validation</p>
                    </div>
                    <div class="x2j-feature">
                        <i class="fas fa-shield-check x2j-feature-icon"></i>
                        <h4>100% Secure</h4>
                        <p>All processing happens in your browser</p>
                    </div>
                    <div class="x2j-feature">
                        <i class="fas fa-paint-brush x2j-feature-icon"></i>
                        <h4>Syntax Highlighting</h4>
                        <p>Easy to read with color-coded output</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="x2j-sidebar-panel">
            <div class="x2j-ad-space">
                <p>Advertisement</p>
            </div>

            <div class="x2j-tool-card">
                <h3>Related Tools</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-exchange-alt"></i>JSON to XML</a></li>
                    <li><a href="#"><i class="fas fa-check-circle"></i>JSON Validator</a></li>
                    <li><a href="#"><i class="fas fa-compress"></i>JSON Minifier</a></li>
                    <li><a href="#"><i class="fas fa-code"></i>XML Formatter</a></li>
                    <li><a href="#"><i class="fas fa-file-csv"></i>CSV to JSON</a></li>
                </ul>
            </div>

            <div class="x2j-ad-space">
                <p>Advertisement</p>
            </div>
        </div>

<div class="x2j-info-section">
    <div class="x2j-info-header">
        <h2>Complete Guide to XML to JSON Conversion</h2>
    </div>
    <div class="x2j-info-body">
        <div class="x2j-info-box">
            <h3>Quick Overview</h3>
            <p>So you're starin at a wall of XML and you just wish it was that clean, simple JSON you know and love. You're in the right place. The simple lowdown is this, both XML and JSON are ways to organize data so computers can read it. But JSON is way lighter and easier for modern websites and apps to handle. When you convert from XML to JSON, you're not losing your data's meaning. You're just translating it, keeping all the important bits like structure and those tricky attributes, but in a much friendlier format that wont give you a headache.</p>
        </div>

        <p>Converting between XML and JSON is a super common task in modern web development, and let's be real, it can be a real pain sometimes. For a long, long time, XML was the king of data. It was the standard for everything, from web services to configuration files. But as the web grew up and got faster, developers needed something lighter and quicker. That's when JSON showed up. It's simpler, cleaner, and because it's literally part of JavaScript's language, it's incredibly easy for web browsers to work with. Think of it like this, XML is like a formal, multi-page document written in a fancy old language, while JSON is like a quick, efficient text message. Both get the point across, but one is a heck of a lot faster to read and write.</p>

        <h3>Understanding XML Structure</h3>
        <p>XML (which stands for eXtensible Markup Language) uses a tree-like structure that’s very powerful but also very wordy. If you're gonna tame it, you gotta understand its parts. Here's what makes XML unique:</p>
        <ul>
            <li><strong>Elements:</strong> These are the main building blocks of XML. You can think of them like labeled folders. Everything is wrapped in an opening and closing tag, like <code>&lt;book&gt;...&lt;/book&gt;</code>. The tag tells you what kind of data is inside the "folder."</li>
            <li><strong>Attributes:</strong> These are little extra pieces of information that live inside the opening tag of an element. I like to think of them as sticky notes on the folder. For example, in <code>&lt;book id="123"&gt;</code>, the <code>id="123"</code> is an attribute. It gives you metadata about the element itself, not the content inside it.</li>
            <li><strong>Text Content:</strong> This one's easy. It's just the actual data, the stuff you wrote on the paper you put inside the folder. It's the text between the opening and closing tags.</li>
            <li><strong>Namespaces:</strong> This sounds complicated but its not really. Imagine you have two friends named Dave. To avoid confusion, you might say "Dave from work" or "Dave from college." Namespaces do the same for XML tags. They're a way to make sure there's no confusion when you're mixing elements from different sources that might have the same name.</li>
        </ul>

        <h3>JSON Structure Basics</h3>
        <p>JSON (JavaScript Object Notation) is beautiful because of its simplicity. It has only two main ways of structuring data: objects (key-value pairs) and arrays (lists). That's it.</p>
        <p>An object is just a collection of key-value pairs, like a dictionary. The "key" has to be a string, and the "value" can be a string, a number, true, false, or even another object or array.</p>
        <pre><code>{
  "book": {
    "title": "Example Book",
    "author": "John Doe",
    "year": 2024,
    "in_stock": true
  }
}</code></pre>
        <p>An array is simply a list of values, enclosed in square brackets. This is perfect for when you have multiple items of the same type, like a list of authors or tags.</p>

        <div class="x2j-info-note">
            <p><strong>Pro Tip:</strong> Okay, so what happens to those XML attributes when they become JSON? They don't have a natural home, right? So, most good converters, including this one, have a clever trick. They usually stick a special character, like an '@' symbol, in front of the attribute's name. This way, you know <code>"@id": "123"</code> was an attribute in the original XML, and not just another element named "id". It keeps everything clear and stops data from getting mixed up.</p>
        </div>

        <h3>Common Conversion Challenges</h3>
        <p>Translating between these two formats isnt always a straight line. There are a few tricky situations that can trip you up if you're not careful. A good converter knows how to handle these.</p>
        <h4>1. Attribute Handling</h4>
        <p>Like we mentioned, this is the big one. Since JSON doesnt have "attributes," you have to decide what to do with them. Common ways to handle it include:</p>
        <ul>
            <li><strong>Prefix attributes with '@' symbol:</strong> This is our favorite way. It keeps the attribute at the same level as other properties but makes it obvious what it is. It's clean and easy to parse.</li>
            <li><strong>Group attributes in an '_attributes' object:</strong> Some tools will create a special object inside your main object just for the attributes. This is also a good solution, it keeps things tidy, but it does add an extra layer of nesting to your JSON.</li>
            <li><strong>Flatten attributes as regular properties:</strong> This can be risky. If you have an attribute and an element with the same name (like <code>&lt;book pages="250"&gt;&lt;pages&gt;...&lt;/pages&gt;&lt;/book&gt;</code>), one of them will get overwritten. We dont recommend this unless you know your data very well.</li>
        </ul>

        <h4>2. Multiple Elements with Same Name</h4>
        <p>This is another classic problem. In XML, it's totally normal to have a list of items like this: <code>&lt;books&gt;&lt;book&gt;A&lt;/book&gt;&lt;book&gt;B&lt;/book&gt;&lt;/books&gt;</code>. How does that become JSON? A smart converter will automatically turn this into a JSON array. So you'd get <code>"books": { "book": [ "A", "B" ] }</code>. This is super important because it lets you easily loop through the items in your code.</p>

        <h4>3. Text Content with Attributes</h4>
        <p>What if an element has both a value inside it and an attribute on it? Like <code>&lt;price currency="USD"&gt;29.99&lt;/price&gt;</code>. You need to store both "USD" and "29.99". The common solution here is to create an object where you store the attribute with the '@' prefix and the text content with a special key, like "_text" or "#text". It keeps all the data without any loss.</p>

        <h3>Best Practices for Conversion</h3>
        <ul>
            <li><strong>Validate First:</strong> Garbage in, garbage out. It's an old saying but its true. If your XML is broken or not "well-formed," any converter is going to struggle. Before you convert, run your XML through a validator to make sure there are no syntax errors. It'll save you a ton of frustration.</li>
            <li><strong>Preserve Structure:</strong> The whole point of these formats is the data structure. Don't just flatten everything into a simple list unless you really mean to. The nested relationships between elements in your XML should be preserved as nested objects in your JSON.</li>
            <li><strong>Handle Edge Cases:</strong> Real-world data is messy. You might have empty tags, or special CDATA sections for code, or even comments. A good conversion process should have a plan for these. Most simple converters will just ignore comments and CDATA, which is usually fine.</li>
            <li><strong>Test Thoroughly:</strong> Dont just look at the JSON output and assume it's perfect. Copy it and actually use it in your application or script. Does your code read the data correctly? Are the arrays what you expected? A quick 30-second test can save you hours of debugging later on.</li>
        </ul>

        <h3>When to Use XML vs JSON</h3>
        <p>Even though JSON is more popular now, XML still has its place. Here's a quick guide on when to use each.</p>
        <h4>Choose XML when:</h4>
        <ul>
            <li><strong>Working with legacy systems:</strong> A lot of old enterprise and government systems were built on XML and SOAP. Sometimes you just dont have a choice.</li>
            <li><strong>Need document validation (XSD, DTD):</strong> XML has powerful tools for creating a strict "rulebook" (a schema) for your data, which is great for ensuring data quality in complex systems.</li>
            <li><strong>Require namespaces or complex metadata:</strong> If you need to mix different data types and be very explicit about it, XML's namespace feature is very powerful.</li>
        </ul>

        <h4>Choose JSON when:</h4>
        <ul>
            <li><strong>Building RESTful APIs:</strong> It's the modern standard for APIs. It's lightweight, fast, and what every developer expects to work with.</li>
            <li><strong>Working with JavaScript applications:</strong> JSON is native to JavaScript. Turning it into a usable object is one simple command. It's a no-brainer for web apps.</li>
            <li><strong>Need lightweight data format:</strong> For mobile apps or anything where performance and bandwidth matter, JSON's smaller size is a huge advantage.</li>
            <li><strong>Prioritizing human readability:</strong> Let's be honest, JSON is just easier for people to look at and understand without their eyes glazing over.</li>
        </ul>
        
        <div class="x2j-info-box">
            <h3>Security Considerations</h3>
            <p>Whenever you're handling data from an unknown source, you gotta be careful. Here are a few things to keep in mind:</p>
            <ul>
                <li><strong>Sanitize input data to prevent injection attacks:</strong> This is especially true if you're running the converter on a server. Nasty code can sometimes be hidden in data. Our tool runs in your browser, which makes it much safer.</li>
                <li><strong>Validate against schemas when possible:</strong> If you have a rulebook for what the data should look like, use it! It can prevent malformed or malicious data from breaking your application.</li>
                <li><strong>Be cautious with external entity references in XML:</strong> This is a type of attack where a malicious XML file can try to make your server access external files. Again, a client-side tool avoids a lot of this risk.</li>
                <li><strong>Implement proper error handling:</strong> Your code should never crash just because it got some bad data. It should gracefully handle errors and tell you what went wrong.</li>
            </ul>
        </div>
    </div>
    </div>    
</div>
    <script>
        (function() {
            const converter = {
                elements: {
                    xmlInput: document.getElementById('x2j-xml-input'),
                    jsonOutput: document.getElementById('x2j-json-output'),
                    convertBtn: document.getElementById('x2j-convert-btn'),
                    clearBtn: document.getElementById('x2j-clear-btn'),
                    sampleBtn: document.getElementById('x2j-sample-btn'),
                    compactMode: document.getElementById('x2j-compact-mode'),
                    preserveAttrs: document.getElementById('x2j-preserve-attrs'),
                    includeRoot: document.getElementById('x2j-include-root'),
                    copyBtns: document.querySelectorAll('.x2j-copy-btn')
                },

                sampleXML: `<?xml version="1.0" encoding="UTF-8"?>
<company>
    <name>Tech Innovators Inc.</name>
    <founded>2010</founded>
    <employees count="150">
        <employee id="001" department="Engineering">
            <name>Alice Johnson</name>
            <position>Senior Developer</position>
            <skills>
                <skill>JavaScript</skill>
                <skill>Python</skill>
                <skill>React</skill>
            </skills>
        </employee>
        <employee id="002" department="Design">
            <name>Bob Smith</name>
            <position>UI/UX Designer</position>
            <skills>
                <skill>Figma</skill>
                <skill>Adobe XD</skill>
            </skills>
        </employee>
    </employees>
    <products>
        <product>
            <name>CloudSync</name>
            <category>SaaS</category>
            <price currency="USD">29.99</price>
        </product>
        <product>
            <name>DataViz Pro</name>
            <category>Analytics</category>
            <price currency="USD">49.99</price>
        </product>
    </products>
</company>`,

                init() {
                    this.attachEventListeners();
                    this.convert(); // Initial conversion
                },

                attachEventListeners() {
                    this.elements.convertBtn.addEventListener('click', () => this.convert());
                    this.elements.clearBtn.addEventListener('click', () => this.clear());
                    this.elements.sampleBtn.addEventListener('click', () => this.loadSample());
                    
                    // Copy functionality
                    this.elements.copyBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => this.copyToClipboard(e.target.closest('.x2j-copy-btn')));
                    });

                    // Convert on option change
                    [this.elements.compactMode, this.elements.preserveAttrs, this.elements.includeRoot].forEach(el => {
                        el.addEventListener('change', () => this.convert());
                    });

                    // Convert on input with debounce
                    let timeout;
                    this.elements.xmlInput.addEventListener('input', () => {
                        clearTimeout(timeout);
                        timeout = setTimeout(() => this.convert(), 500);
                    });
                },

                parseXML(xmlString) {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
                    
                    const parserError = xmlDoc.querySelector('parsererror');
                    if (parserError) {
                        throw new Error('Invalid XML: ' + parserError.textContent);
                    }
                    
                    return xmlDoc;
                },

                xmlToJson(xml) {
                    const obj = {};
                    
                    if (xml.nodeType === 1) { // Element
                        // Handle attributes
                        if (this.elements.preserveAttrs.checked && xml.attributes.length > 0) {
                            for (let j = 0; j < xml.attributes.length; j++) {
                                const attribute = xml.attributes.item(j);
                                obj['@' + attribute.nodeName] = attribute.nodeValue;
                            }
                        }
                    } else if (xml.nodeType === 3) { // Text
                        return xml.nodeValue.trim();
                    }

                    // Handle children
                    if (xml.hasChildNodes()) {
                        for (let i = 0; i < xml.childNodes.length; i++) {
                            const item = xml.childNodes.item(i);
                            const nodeName = item.nodeName;
                            
                            if (nodeName === '#text') {
                                const text = item.nodeValue.trim();
                                if (text) {
                                    if (Object.keys(obj).length === 0) {
                                        return text;
                                    } else {
                                        obj['#text'] = text;
                                    }
                                }
                            } else {
                                const child = this.xmlToJson(item);
                                if (obj[nodeName] === undefined) {
                                    obj[nodeName] = child;
                                } else {
                                    if (!Array.isArray(obj[nodeName])) {
                                        obj[nodeName] = [obj[nodeName]];
                                    }
                                    obj[nodeName].push(child);
                                }
                            }
                        }
                    }
                    
                    return obj;
                },

                convert() {
                    try {
                        // Add loading state
                        this.elements.convertBtn.querySelector('i').classList.add('x2j-loading');
                        
                        const xmlString = this.elements.xmlInput.value.trim();
                        if (!xmlString) {
                            this.displayOutput('');
                            return;
                        }

                        const xmlDoc = this.parseXML(xmlString);
                        let json = this.xmlToJson(xmlDoc.documentElement);
                        
                        // Include root element if checked
                        if (this.elements.includeRoot.checked) {
                            const rootName = xmlDoc.documentElement.nodeName;
                            json = { [rootName]: json };
                        }

                        const jsonString = JSON.stringify(
                            json, 
                            null, 
                            this.elements.compactMode.checked ? 0 : 2
                        );
                        
                        this.displayOutput(jsonString);
                        this.clearError();
                        
                    } catch (error) {
                        this.displayError(error.message);
                    } finally {
                        this.elements.convertBtn.querySelector('i').classList.remove('x2j-loading');
                    }
                },

                displayOutput(jsonString) {
                    if (!jsonString) {
                        this.elements.jsonOutput.textContent = '';
                        return;
                    }
                    
                    // Apply syntax highlighting
                    const highlighted = this.syntaxHighlightJSON(jsonString);
                    this.elements.jsonOutput.innerHTML = highlighted;
                },

                syntaxHighlightJSON(json) {
                    return json
                        .replace(/("(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)/g, (match, p1, p2, p3) => {
                            const cls = p3 ? 'x2j-syntax-json-key' : 'x2j-syntax-json-string';
                            return `<span class="${cls}">${match}</span>`;
                        })
                        .replace(/\b(true|false)\b/g, '<span class="x2j-syntax-json-boolean">$1</span>')
                        .replace(/\b(null)\b/g, '<span class="x2j-syntax-json-null">$1</span>')
                        .replace(/\b(\d+)\b/g, '<span class="x2j-syntax-json-number">$1</span>');
                },

                displayError(message) {
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'x2j-error-message';
                    errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${message}`;
                    
                    const outputPanel = this.elements.jsonOutput.closest('.x2j-editor-content');
                    outputPanel.appendChild(errorDiv);
                    
                    this.elements.jsonOutput.textContent = '';
                },

                clearError() {
                    const errors = document.querySelectorAll('.x2j-error-message');
                    errors.forEach(error => error.remove());
                },

                clear() {
                    this.elements.xmlInput.value = '';
                    this.elements.jsonOutput.textContent = '';
                    this.clearError();
                },

                loadSample() {
                    this.elements.xmlInput.value = this.sampleXML;
                    this.convert();
                },

                async copyToClipboard(btn) {
                    const targetId = btn.getAttribute('data-target');
                    const target = document.getElementById(targetId);
                    const text = target.tagName === 'TEXTAREA' ? target.value : target.textContent;
                    
                    try {
                        await navigator.clipboard.writeText(text);
                        btn.classList.add('x2j-copied');
                        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        
                        setTimeout(() => {
                            btn.classList.remove('x2j-copied');
                            btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                        }, 2000);
                    } catch (err) {
                        console.error('Failed to copy:', err);
                    }
                }
            };

            // Initialize the converter
            converter.init();
        })();
    </script>
</div>
