---
title: "Free JSON to CSV Converter (Online Tool)"
layout: tool
categories: [converters, data]
permalink: /converters/data/json-to-csv-converter
description: "Instantly convert your JSON data to CSV format with our free and easy-to-use online tool. Paste your JSON array and get clean, downloadable CSV in seconds."
tags:
  - "JSON to CSV"
  - "Convert JSON to CSV"
  - "JSON Converter"
  - "Online Tool"
  - "Developer Tools"
  - "Data Conversion"
  - "CSV Generator"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<div class="jc-wrapper">
    <style>
        :root {
            --jc-primary: #6366f1;
            --jc-primary-dark: #4f46e5;
            --jc-secondary: #10b981;
            --jc-secondary-dark: #059669;
            --jc-gray-50: #f9fafb;
            --jc-gray-100: #f3f4f6;
            --jc-gray-200: #e5e7eb;
            --jc-gray-300: #d1d5db;
            --jc-gray-400: #9ca3af;
            --jc-gray-500: #6b7280;
            --jc-gray-600: #4b5563;
            --jc-gray-700: #374151;
            --jc-gray-800: #1f2937;
            --jc-gray-900: #111827;
            --jc-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --jc-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
            --jc-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            --jc-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            --jc-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }

        .jc-wrapper {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            /* NEW: Simple, clean background color */
            background-color: var(--jc-gray-50);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            color: var(--jc-gray-800);
            position: relative;
        }
        
        /* NEW: Removed the ::before pseudo-element for the blue glow */

        .jc-wrapper * {
            margin: 0; padding: 0; box-sizing: border-box;
        }

        .jc-layout {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 1200px;
            gap: 30px;
            padding: 20px;
            position: relative;
            z-index: 1;
        }
        
        .jc-tool-container { order: 1; }
        .jc-right-panel { order: 2; }
        .jc-post-content { order: 3; }

        .jc-right-panel {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .jc-related-card, .jc-ad-placeholder {
            /* NEW: Clean white background for cards */
            background: #ffffff;
            border-radius: 20px;
            box-shadow: var(--jc-shadow-lg);
            padding: 24px;
            border: 1px solid var(--jc-gray-200);
            transition: all 0.3s ease;
        }

        .jc-related-card:hover {
            box-shadow: var(--jc-shadow-xl);
            transform: translateY(-2px);
        }
        
        .jc-ad-placeholder {
            min-height: 300px;
            background: var(--jc-gray-100);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--jc-gray-400);
            text-align: center;
            font-weight: 500;
            border: 2px dashed var(--jc-gray-300);
        }

        .jc-related-card h3 {
            font-size: 1.35rem;
            font-weight: 800;
            margin-bottom: 20px;
            color: var(--jc-gray-800);
            text-align: center;
            position: relative;
        }

        .jc-related-card h3::after {
            content: '';
            position: absolute;
            bottom: -8px; left: 50%;
            transform: translateX(-50%);
            width: 40px; height: 3px;
            background: linear-gradient(90deg, var(--jc-primary), var(--jc-secondary));
            border-radius: 2px;
        }

        .jc-related-card ul { list-style: none; }
        .jc-related-card li { margin-bottom: 12px; }
        .jc-related-card a {
            display: flex; align-items: center; gap: 15px; text-decoration: none;
            color: var(--jc-gray-600); font-weight: 600; padding: 14px 18px;
            border-radius: 16px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .jc-related-card a:hover {
            background: var(--jc-gray-100);
            color: var(--jc-primary);
            transform: translateX(4px);
        }
        
        .jc-related-card .fas { font-size: 1.25rem; color: var(--jc-primary); transition: all 0.3s ease; }
        .jc-related-card a:hover .fas { color: var(--jc-secondary); transform: scale(1.1); }

        /* NEW: Refined Tool UI Styles */
        .jc-tool-container {
            background: white;
            border-radius: 24px;
            box-shadow: var(--jc-shadow-xl);
            border: 1px solid var(--jc-gray-200);
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .jc-tool-container:hover { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); }
        
        .jc-tool-header {
            padding: 25px 35px;
            border-bottom: 1px solid var(--jc-gray-200);
            background: var(--jc-gray-50);
        }
        
        .jc-tool-header h1 {
            font-size: 1.8rem; font-weight: 800; display: flex;
            align-items: center; gap: 16px; color: var(--jc-gray-800);
        }
        
        .jc-tool-header .fas { font-size: 1.5rem; color: var(--jc-primary); }

        .jc-tool-body { padding: 30px; }
        .jc-panels-wrapper { display: flex; flex-direction: column; gap: 24px; }

        @media (min-width: 992px) {
            .jc-panels-wrapper { flex-direction: row; }
        }

        .jc-panel {
            flex: 1; display: flex; flex-direction: column;
            border: 1px solid var(--jc-gray-300); border-radius: 12px; overflow: hidden;
        }

        .jc-panel-header {
            display: flex; justify-content: space-between; align-items: center;
            padding: 12px 15px; background: var(--jc-gray-100);
            border-bottom: 1px solid var(--jc-gray-300);
        }

        .jc-panel-header h2 {
            font-size: 1rem; font-weight: 700; display: flex;
            align-items: center; gap: 8px; color: var(--jc-gray-700);
        }

        .jc-header-controls { display: flex; gap: 8px; }

        textarea.jc-textarea {
            width: 100%; flex-grow: 1; min-height: 400px;
            border: none; padding: 20px; font-family: 'Courier New', monospace;
            font-size: 14px; line-height: 1.6; background: white;
            resize: none; transition: all 0.2s ease;
        }
        
        textarea.jc-textarea:focus { outline: none; box-shadow: inset 0 0 0 2px var(--jc-primary); }
        
        .jc-controls-bar {
            display: flex; flex-wrap: wrap; justify-content: space-between;
            align-items: center; gap: 10px; margin-top: 24px;
            padding: 20px;
            background-color: var(--jc-gray-100);
            border-radius: 16px;
        }

        .jc-btn {
            border: none; padding: 12px 20px; border-radius: 10px; font-size: 14px; font-weight: 600;
            cursor: pointer; transition: all 0.2s ease;
            display: flex; align-items: center; gap: 8px;
        }

        .jc-btn-primary { background: var(--jc-primary); color: white; }
        .jc-btn-primary:hover { background: var(--jc-primary-dark); }
        
        .jc-btn-secondary { background: var(--jc-gray-200); color: var(--jc-gray-700); }
        .jc-btn-secondary:hover { background: var(--jc-gray-300); }
        
        .jc-btn-tertiary { background: transparent; color: var(--jc-gray-500); }
        .jc-btn-tertiary:hover { background: var(--jc-gray-100); }

        .jc-status-message {
            padding: 12px 15px; border-radius: 10px; font-weight: 500;
            text-align: center; margin-top: 15px; display: none;
        }

        .jc-error-message { color: var(--jc-danger); background-color: #fee2e2; border: 1px solid #fca5a5; }
        .jc-success-message { color: var(--jc-secondary-dark); background-color: #d1fae5; border: 1px solid #6ee7b7; }
        .jc-info-message { color: var(--jc-primary-dark); background-color: #dbeafe; border: 1px solid #93c5fd; }
        
        .jc-stats-panel {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 10px; margin-top: 20px; padding: 15px; background: var(--jc-gray-100);
            border-radius: 12px;
        }

        .jc-stat-item { text-align: center; }
        .jc-stat-value { font-size: 1.25rem; font-weight: 800; color: var(--jc-primary); }
        .jc-stat-label { font-size: 0.75rem; color: var(--jc-gray-500); font-weight: 500; }
        
        .jc-post-content {
            background: white; border-radius: 24px;
            box-shadow: var(--jc-shadow-xl); border: 1px solid var(--jc-gray-200);
            overflow: hidden; margin-top: 40px;
        }
        
        .jc-post-header {
            background: linear-gradient(135deg, var(--jc-primary) 0%, var(--jc-secondary) 100%);
            color: white; padding: 40px 50px; position: relative; overflow: hidden;
        }
        .jc-post-header h2 { font-size: 2.25rem; font-weight: 900; position: relative; z-index: 1; }
        .jc-post-body { padding: 50px 60px; }
        .jc-summary-box {
            background: linear-gradient(135deg, var(--jc-gray-50) 0%, rgba(99, 102, 241, 0.05) 100%);
            border-left: 5px solid var(--jc-primary); padding: 30px; margin-bottom: 40px;
            border-radius: 0 16px 16px 0; position: relative;
        }
        .jc-info-note {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, var(--jc-gray-50) 100%);
            border-left: 5px solid var(--jc-secondary); padding: 24px; border-radius: 0 12px 12px 0;
            margin: 32px 0; position: relative;
        }
        .jc-post-content h2, .jc-post-content h3 { color: var(--jc-gray-800); margin-top: 2.5em;margin-bottom: 1.5rem; font-weight: 800; position: relative; }
        .jc-post-content h3::before {
            content: ''; position: absolute; left: -20px; top: 50%; transform: translateY(-50%);
            width: 4px; height: 24px; background: linear-gradient(135deg, var(--jc-primary), var(--jc-secondary));
            border-radius: 2px;
        }
        .jc-post-content h4 { color: var(--jc-gray-700); font-weight: 700; margin-top: 1.5em; }
        .jc-post-content p, .jc-post-content li { font-size: 17px; line-height: 1.75; color: var(--jc-gray-600); margin-bottom: 1em; }
        .jc-post-content ul { list-style: none; padding-left: 0; }
        .jc-post-content ul li { position: relative; padding-left: 28px; margin-bottom: 12px; }
        .jc-post-content ul li::before { content: '▶'; position: absolute; left: 0; color: var(--jc-primary); font-size: 0.8rem; }
        .jc-post-content ol { padding-left: 20px; }
        .jc-post-content ol li { margin-bottom: 12px; padding-left: 8px; }
        @media (min-width: 1400px) {
            .jc-layout {
                display: grid; grid-template-columns: minmax(0, 1fr) 380px; grid-template-areas: "main sidebar" "post post";
                gap: 50px; max-width: 1600px; padding: 40px; align-items: flex-start;
            }
            .jc-tool-container { grid-area: main; order: 0; } .jc-right-panel { grid-area: sidebar; order: 0; }
            .jc-post-content { grid-area: post; order: 0; margin-top: 0; }
            .jc-right-panel { position: relative; top: 30px; align-self: start; }
            .jc-post-content .jc-post-body { padding: 60px 80px; }
            .jc-post-content h2, .jc-post-content h3, .jc-post-content h4,
            .jc-post-content p, .jc-post-content ul, .jc-post-content ol,
            .jc-summary-box, .jc-info-note { max-width: 1000px; margin-left: auto; margin-right: auto; }
            .jc-post-content p, .jc-post-content li { font-size: 18px; line-height: 1.8; }
        }
        @media (max-width: 768px) {
            .jc-tool-header { padding: 24px 20px; } .jc-tool-header h1 { font-size: 1.5rem; }
            .jc-tool-body { padding: 24px 20px; } .jc-post-header { padding: 30px 24px; }
            .jc-post-header h2 { font-size: 1.75rem; } .jc-post-body { padding: 32px 24px; }
            textarea.jc-textarea { min-height: 300px; padding: 16px; font-size: 13px; }
        }
    </style>

    <div class="jc-layout">
        <div class="jc-tool-container">
            <div class="jc-tool-header">
                <h1><i class="fas fa-exchange-alt"></i> JSON to CSV Converter</h1>
            </div>
            
            <div class="jc-tool-body">
                <div class="jc-panels-wrapper">
                    <div class="jc-panel" id="input-panel">
                        <div class="jc-panel-header">
                            <h2><i class="fab fa-js-square"></i> JSON Input</h2>
                        </div>
                        <textarea id="json-input" class="jc-textarea" placeholder="[&#10;  {&#10;    &quot;id&quot;: 1,&#10;    &quot;name&quot;: &quot;Alice Johnson&quot;,&#10;    &quot;email&quot;: &quot;alice@example.com&quot;&#10;  },&#10;  {&#10;    &quot;id&quot;: 2,&#10;    &quot;name&quot;: &quot;Bob Smith&quot;,&#10;    &quot;email&quot;: &quot;bob@example.com&quot;&#10;  }&#10;]"></textarea>
                    </div>
                    
                    <div class="jc-panel" id="output-panel">
                        <div class="jc-panel-header">
                            <h2><i class="fas fa-file-csv"></i> CSV Output</h2>
                        </div>
                        <textarea id="csv-output" class="jc-textarea" readonly placeholder="Your beautifully formatted CSV will appear here...&#10;&#10;✨ Features:&#10;• Automatic header detection&#10;• Proper escaping for commas and quotes&#10;• Ready for Excel, Google Sheets, and more!" aria-label="CSV output area"></textarea>
                    </div>
                </div>
                
                <div class="jc-controls-bar">
                    <button id="convert-btn" class="jc-btn jc-btn-primary"><i class="fas fa-magic"></i> Convert</button>
                    <button id="format-btn" class="jc-btn jc-btn-secondary"><i class="fas fa-code"></i> Format</button>
                    <button id="copy-btn" class="jc-btn jc-btn-secondary"><i class="fas fa-copy"></i> Copy</button>
                    <button id="download-btn" class="jc-btn jc-btn-secondary"><i class="fas fa-download"></i> Download</button>
                    <button id="clear-btn" class="jc-btn jc-btn-secondary"><i class="fas fa-trash-alt"></i> Clear</button>
                </div>
                
                <div id="status-message" class="jc-status-message" role="alert" aria-live="polite"></div>
                
                <div class="jc-stats-panel" id="stats-panel" style="display: none;">
                    <div class="jc-stat-item">
                        <span class="jc-stat-value" id="records-count">0</span>
                        <span class="jc-stat-label">Records</span>
                    </div>
                    <div class="jc-stat-item">
                        <span class="jc-stat-value" id="columns-count">0</span>
                        <span class="jc-stat-label">Columns</span>
                    </div>
                    <div class="jc-stat-item">
                        <span class="jc-stat-value" id="file-size">0 KB</span>
                        <span class="jc-stat-label">Size</span>
                    </div>
                </div>
            </div>
        </div>
        
            <div class="jc-right-panel">
                <div class="jc-ad-placeholder">
                    <div>
                        <i class="fas fa-ad fa-2x" style="margin-bottom: 10px; opacity: 0.5;"></i>
                        <p><strong>Advertisement Space</strong></p>
                        <p style="font-size: 0.9em; margin-top: 8px;">Your ad could be here</p>
                    </div>
                </div>

            <div class="jc-related-card">
                <h3>🚀 Related Tools</h3>
                <ul>
                    <li><a href="/converters/data/csv-to-json-converter"><i class="fas fa-exchange-alt"></i>CSV to JSON Converter</a></li>
                    <li><a href="/converters/data/xml-to-json-converter"><i class="fas fa-file-code"></i>XML to JSON Converter</a></li>
                    <li><a href="/tools/json-formatter"><i class="fas fa-code"></i>JSON Formatter & Validator</a></li>
                    <li><a href="/tools/base64-encoder"><i class="fas fa-lock"></i>Base64 Encoder/Decoder</a></li>
                    <li><a href="/tools/url-encoder"><i class="fas fa-link"></i>URL Encoder/Decoder</a></li>
                </ul>
            </div>
        </div>
        
<div class="jc-post-content">
    <div class="jc-post-header">
        <h2>🎯 Complete JSON to CSV Conversion Guide</h2>
    </div>
    <div class="jc-post-body">
        
        <p><strong>Your New BFF for Data: The Simplest JSON to CSV Converter ????</strong></p>
        <p>Let's get real for a moment. You've done it. I've done it. We've all done it. You receive a wad of data, perhaps from a programmer or some web API, and it's just a mysterious message from another world. It's a sea of curly braces, brackets, and quotes. That, my friend, is JSON. And your boss needs it in a pretty, pretty Excel spreadsheet by the end of the day.</p>
        <p>You sense that little dip in your gut. You imagine the next hour of your life, typing. pasting. proofreading. getting lost. typing over the wrong thing. and then wishing you could toss your computer out the window. The entire process is just demoralizing. It's boring, it's monotonous, and it's so simple to do wrong.</p>
        <p>But what if I told you that whole horror could vanish? What if you were able to transform that cluttered JSON into a pristine, clean spreadsheet table in literally not much more time than it takes to read this sentence? Well, that's precisely why we created this tool. To reclaim that hour of your life.</p>

        <h3>Why This Tool is Seriously Perfect for You</h3>
        <p>We did not construct another converter. We constructed the one we always wanted to have. It's created to fix real problems without generating new ones.</p>
        
        <div class="jc-summary-box">
            <ul>
                <li><strong>It's Lightning Quick:</strong> I mean, really quick. We're not talking "go grab a coffee" quick. We're talking "blink and you'll miss it" quick. You can copy and paste in thousands of records, thousands of lines of data, and it'll be converted in milliseconds. Consider all the time you've ever spent before on tedious work. Just. lost. That time is yours now. You can spend it on actually doing analysis on the data, not wrestling with it.</li>
                <li><strong>It Has Smart Detection:</strong> This is perhaps the most awesome feature. You don't need to instruct the tool on what your columns are. It's smart enough to scan your JSON, identify all the "keys" (such as "firstName", "email", "orderID"), and automatically convert them to the headers for your CSV file. It thinks for you, so you end up with a perfectly formatted table every time without even lifting a finger.</li>
                <li><strong>It's Completely Excel Ready:</strong> The output you receive is formatted exactly right for any spreadsheet software you can imagine. Microsoft Excel, Google Sheets, Apple Numbers, whatever. There's no quirky formatting errors, no mangled rows, no gibberish characters. You can save the .csv file and it just opens up, ready to use. Or you can simply copy the output and paste it in. It just works.</li>
                <li><strong>Your Data is 100% Safe:</strong> This is a big deal. You know that uncomfortable feeling you get when you're about to upload a file to some unknown website? You think, "Where is my data headed? Who gets to see it?". We don't like that feeling either. So, with our tool, it all stays right within your own browser. Your data never gets uploaded onto our server, or any server. It never touches your computer. The conversion magic occurs locally. That way you can use it with sensitive, private, or professional data and have complete peace of mind.</li>
                <li><strong>It's Professional Quality:</strong> This ain't some quick-and-dirty script. It’s built to handle real-world data, which is often messy. What if one of your text fields has a comma in it? Or a quotation mark? A cheap tool would break your CSV file, messing up all your columns. Our tool is smart enough to handle those things, properly escaping everything so your data integrity is perfect.</li>
            </ul>
        </div>

        <h3>So, What's the Big Deal? JSON vs. CSV Explained</h3>

        <p>If you're not a programmer, the whole JSON and CSV thing can be confusing. So let's break it down with a simple story.</p>
        <p>Imagine you're giving a computer a shopping list.</p>
        <p>JSON (JavaScript Object Notation) is like a very detailed, nested list. It’s super organized for a computer to read. See? It has labels ("name," "email") on everything. Fantastic if you're a developer or web application, but paste it into Excel and it's a complete mess.</p>

        <p>CSV (Comma-Separated Values), however, is like a nice, tidy table. Each bit of information is simply divided by a comma. A new row is each new line. It's the language of spreadsheets.</p>

        <div class="jc-info-note">
            <p><strong>So why do you need to convert?</strong> You convert JSON to CSV to convert that developer-friendly data into human-friendly tables. It makes the data ridiculously easy for any person to read, sort, filter, and create charts from in something like Excel or Google Sheets. You're essentially interpreting from "computer language" to "human language."</p>
        </div>

        <h3>How to Use This Thing: A Super Simple Guide</h3>
        <p>We made this as simple as humanly possible. No sign-ups, no weird steps, just results.</p>
        <ol>
            <li><strong>Paste Your JSON:</strong> First, go grab your JSON data. Grab it all. Then come back here and paste it right into the big box on the left that says "JSON Input". Yep.</li>
            <li><strong>Click Convert:</strong> You notice that prominent "Convert" button in the center? Yep, click that. Our tool immediately springs into action, processing all of it right in your browser.</li>
            <li><strong>Copy or Download:</strong> Boom! The box on the right ("CSV Output") is now full of your lovely, clean, nicely formatted data. You can click the "Copy" button to copy it all, or press "Download" to save it directly to your computer as a .csv file.</li>
        </ol>
        <p>That's it. No kidding. You're finished.</p>

        <h3>A Little Heads-Up: Getting the Best Results</h3>
        <p>To get this tool to work its magic just right, your JSON needs to be an "array of objects." That's the techy way of saying a list of things, like our shopping list example here (starts and ends with a [ ] bracket).</p>
        <p>Also, it is most useful when every item in the list shares the same keys (such as "name," "email," etc.). If you have some items lacking a key, don't fret, it won't be harmed. The tool will simply leave that position blank in the spreadsheet, which is generally what you would want anyway.</p>
        <p><strong>And what about super complicated, nested JSON?</strong> Such as {"user": {"name": "John"}}? This little converter is optimized for the most typical kind of data, which is flat, such as {"name": "John"}. It doesn't inherently drill down into nested objects. It's optimized for speed and ease of use for the 99% of instances you'll encounter.</p>

        <h3>Your Data, Your Way. No More Headaches.</h3>
        <p>Ditch the ugly data formats. Ditch your valuable time spent on tedious manual tasks. This JSON to CSV converter was made for you—the developer who needs to rapidly send data to someone else, the data analyst on a tight deadline, the business owner who just wants to view their sales figures in a straightforward list.</p>
        <p>Bookmark this page. Share it with your team. Use it as your go-to tool whenever you're staring at a wall of JSON. Your data shouldn't control you, but vice versa. Now, retrieve that hour of your life!</p>
    </div>
</div>    
</div>
    
    <script>
        (function() {
            const toolRoot = document.querySelector('.jc-wrapper');
            if (!toolRoot) return;

            const jsonInput = toolRoot.querySelector('#json-input');
            const csvOutput = toolRoot.querySelector('#csv-output');
            const convertBtn = toolRoot.querySelector('#convert-btn');
            const copyBtn = toolRoot.querySelector('#copy-btn');
            const clearBtn = toolRoot.querySelector('#clear-btn');
            const downloadBtn = toolRoot.querySelector('#download-btn');
            const statusMessage = toolRoot.querySelector('#status-message');
            const statsPanel = toolRoot.querySelector('#stats-panel');
            const recordsCountEl = toolRoot.querySelector('#records-count');
            const columnsCountEl = toolRoot.querySelector('#columns-count');
            const fileSizeEl = toolRoot.querySelector('#file-size');
            const formatBtn = toolRoot.querySelector('#format-btn');

            function showStatus(message, type = 'info') {
                statusMessage.textContent = message;
                statusMessage.className = `jc-status-message jc-${type}-message`;
                statusMessage.style.display = 'block';
            }

            function hideStatus() {
                statusMessage.style.display = 'none';
            }

            function updateStats(records, columns, size) {
                recordsCountEl.textContent = records;
                columnsCountEl.textContent = columns;
                fileSizeEl.textContent = `${(size / 1024).toFixed(2)} KB`;
                statsPanel.style.display = 'grid';
            }

            function convertJsonToCsv() {
                hideStatus();
                statsPanel.style.display = 'none';
                const jsonText = jsonInput.value.trim();
                if (!jsonText) {
                    showStatus('Input is empty. Please paste some JSON data.', 'error');
                    return;
                }

                let data;
                try {
                    data = JSON.parse(jsonText);
                } catch (error) {
                    showStatus('Invalid JSON format. Please check your data for errors.', 'error');
                    return;
                }

                if (!Array.isArray(data)) {
                    showStatus('Invalid format. The JSON must be an array of objects.', 'error');
                    return;
                }

                if (data.length === 0) {
                    csvOutput.value = '';
                    showStatus('No records found in the JSON array.', 'info');
                    return;
                }

                const headers = Object.keys(data[0]);
                let csv = headers.join(',') + '\n';

                data.forEach(row => {
                    const values = headers.map(header => {
                        let cell = row[header] === null || row[header] === undefined ? '' : row[header];
                        cell = String(cell);
                        if (cell.includes(',') || cell.includes('"') || cell.includes('\n')) {
                            cell = '"' + cell.replace(/"/g, '""') + '"';
                        }
                        return cell;
                    });
                    csv += values.join(',') + '\n';
                });

                csvOutput.value = csv;
                updateStats(data.length, headers.length, csv.length);
                showStatus('Conversion successful!', 'success');
            }

            function copyToClipboard() {
                if (!csvOutput.value) return;
                csvOutput.select();
                document.execCommand('copy');
                showStatus('CSV copied to clipboard!', 'success');
            }

            function downloadCsv() {
                if (!csvOutput.value) return;
                const blob = new Blob([csvOutput.value], { type: 'text/csv;charset=utf-8;' });
                const link = document.createElement("a");
                const url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", "converted_data.csv");
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            function clearFields() {
                jsonInput.value = '';
                csvOutput.value = '';
                hideStatus();
                statsPanel.style.display = 'none';
            }

            function formatJson() {
                const jsonText = jsonInput.value.trim();
                if (!jsonText) {
                    showStatus('Input is empty. Nothing to format.', 'info');
                    return;
                }
                try {
                    const obj = JSON.parse(jsonText);
                    jsonInput.value = JSON.stringify(obj, null, 2);
                    showStatus('JSON formatted successfully!', 'success');
                } catch (error) {
                    showStatus('Invalid JSON. Cannot format.', 'error');
                }
            }

            convertBtn.addEventListener('click', convertJsonToCsv);
            copyBtn.addEventListener('click', copyToClipboard);
            clearBtn.addEventListener('click', clearFields);
            downloadBtn.addEventListener('click', downloadCsv);
            formatBtn.addEventListener('click', formatJson);
        })();
    </script>
</div>
