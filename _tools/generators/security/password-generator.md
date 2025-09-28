---
title: "Password Generator - Create Strong & Secure Passwords Online"
description: "Generate strong, unique passwords with customizable length and character sets. Features include password strength meter, bulk generation, and secure password tips."
localtitle: "Password Generator"
layout: tool
categories: [securityGen, generators]
permalink: /generators/security/strong-password-generator
faq:
  - q: "How secure are the passwords generated?"
    a: "Our password generator uses cryptographically secure random number generation in your browser. Passwords are generated locally on your device and never transmitted or stored on our servers, ensuring maximum security."
  - q: "What makes a password strong?"
    a: "A strong password typically includes a mix of uppercase and lowercase letters, numbers, and special characters. It should be at least 12 characters long and avoid common words or patterns. Our generator ensures all these criteria are met."
  - q: "Can I generate multiple passwords at once?"
    a: "Yes! You can generate up to 10 passwords simultaneously using the bulk generation feature. This is perfect for creating unique passwords for multiple accounts at once."
  - q: "Should I use special characters in my passwords?"
    a: "Yes, special characters significantly increase password strength. However, some systems have restrictions. Our generator lets you customize which characters to include based on your specific requirements."
  - q: "How often should I change my passwords?"
    a: "Security experts recommend changing passwords every 3-6 months for sensitive accounts, or immediately if you suspect a breach. Regular password rotation combined with unique passwords for each account provides the best security."
  - q: "Is it safe to use an online password generator?"
    a: "Our password generator runs entirely in your browser using JavaScript. No passwords are sent to our servers or stored anywhere. The generation process uses your browser's secure random number generator for maximum safety."
---

<style>
  :root {
    /* Cyber Security Color Scheme */
    --pg-gradient-1: #00d4ff;
    --pg-gradient-2: #090979;
    --pg-gradient-3: #00ff88;
    --pg-gradient-4: #ff0080;
    --pg-bg: #0a0e27;
    --pg-surface: #151935;
    --pg-surface-light: #1e2444;
    --pg-text: #ffffff;
    --pg-text-dim: #8892b0;
    --pg-accent: #00d4ff;
    --pg-border: rgba(255, 255, 255, 0.1);
    --pg-success: #00ff88;
    --pg-warning: #ffd700;
    --pg-danger: #ff0080;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .pg-wrapper {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--pg-bg);
    color: var(--pg-text);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  
  .pg-bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.3;
    pointer-events: none;
  }
  
  .pg-bg-gradient {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(100px);
    animation: float 25s ease-in-out infinite;
  }
  
  .pg-bg-gradient:nth-child(1) {
    background: var(--pg-gradient-1);
    top: -300px;
    right: -300px;
    animation-delay: 0s;
  }
  
  .pg-bg-gradient:nth-child(2) {
    background: var(--pg-gradient-2);
    bottom: -300px;
    left: -300px;
    animation-delay: 8s;
  }
  
  .pg-bg-gradient:nth-child(3) {
    background: var(--pg-gradient-3);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 16s;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -30px) rotate(120deg); }
    66% { transform: translate(-20px, 20px) rotate(240deg); }
  }
  
  .pg-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.2rem 0.5rem;
    position: relative;
    z-index: 1;
  }
  
  .pg-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .pg-title {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--pg-gradient-1), var(--pg-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: glow 4s ease-in-out infinite;
  }
  
  @keyframes glow {
    0%, 100% { filter: brightness(1) drop-shadow(0 0 20px rgba(0, 212, 255, 0.5)); }
    50% { filter: brightness(1.2) drop-shadow(0 0 30px rgba(0, 212, 255, 0.8)); }
  }
  
  .pg-main-section {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .pg-password-section {
    background: var(--pg-surface);
    border-radius: 24px;
    padding: 2.5rem;
    border: 1px solid var(--pg-border);
    position: relative;
    overflow: hidden;
  }
  
  .pg-password-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--pg-gradient-1), var(--pg-gradient-3), var(--pg-gradient-4));
    animation: shimmer 3s linear infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .pg-password-display {
    background: var(--pg-surface-light);
    border-radius: 16px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border: 2px solid var(--pg-border);
  }
  
  .pg-password-text {
    font-size: 1.5rem;
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
    word-break: break-all;
    margin-bottom: 1rem;
    min-height: 2em;
    color: var(--pg-accent);
    letter-spacing: 2px;
  }
  
  .pg-password-actions {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  
  .pg-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .pg-btn-primary {
    background: linear-gradient(135deg, var(--pg-gradient-1), var(--pg-gradient-2));
    color: white;
    flex: 1;
  }
  
  .pg-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.4);
  }
  
  .pg-btn-secondary {
    background: transparent;
    color: var(--pg-text);
    border: 2px solid var(--pg-border);
  }
  
  .pg-btn-secondary:hover {
    border-color: var(--pg-accent);
    background: rgba(0, 212, 255, 0.1);
  }
  
  .pg-strength-meter {
    margin-top: 1.5rem;
  }
  
  .pg-strength-bar {
    height: 8px;
    background: var(--pg-surface-light);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }
  
  .pg-strength-fill {
    height: 100%;
    transition: width 0.3s ease, background 0.3s ease;
    border-radius: 4px;
  }
  
  .pg-strength-text {
    font-size: 0.875rem;
    text-align: center;
    font-weight: 600;
  }
  
  .pg-options-section {
    background: var(--pg-surface);
    border-radius: 24px;
    padding: 2.5rem;
    border: 1px solid var(--pg-border);
  }
  
  .pg-options-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--pg-text);
  }
  
  .pg-length-control {
    margin-bottom: 2rem;
  }
  
  .pg-length-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .pg-length-value {
    color: var(--pg-accent);
    font-size: 1.25rem;
  }
  
  .pg-slider {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: var(--pg-surface-light);
    outline: none;
    -webkit-appearance: none;
  }
  
  .pg-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--pg-gradient-1), var(--pg-gradient-3));
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .pg-slider::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
  }
  
  .pg-checkbox-group {
    display: grid;
    gap: 0.75rem;
  }
  
  .pg-checkbox-item {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    background: var(--pg-surface-light);
    border-radius: 10px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }
  
  .pg-checkbox-item:hover {
    border-color: var(--pg-accent);
  }
  
  .pg-checkbox {
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
    cursor: pointer;
  }
  
  .pg-checkbox-label {
    flex: 1;
    cursor: pointer;
    user-select: none;
    font-size: 0.9rem;
  }
  
  .pg-bulk-section {
    background: var(--pg-surface);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid var(--pg-border);
    margin-bottom: 3rem;
  }
  
  .pg-bulk-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .pg-bulk-title {
    font-size: 1.25rem;
    font-weight: 700;
  }
  
  .pg-bulk-controls {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  
  .pg-bulk-input {
    background: var(--pg-surface-light);
    border: 2px solid var(--pg-border);
    color: var(--pg-text);
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-size: 0.9rem;
    width: 60px;
    text-align: center;
  }
  
  .pg-bulk-results {
    display: grid;
    gap: 0.75rem;
  }
  
  .pg-password-item {
    background: var(--pg-surface-light);
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }
  
  .pg-password-item:hover {
    border-color: var(--pg-accent);
  }
  
  .pg-password-item-text {
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
    color: var(--pg-text-dim);
    word-break: break-all;
    flex: 1;
    margin-right: 1rem;
    font-size: 0.9rem;
  }
  
  .pg-copy-btn {
    background: transparent;
    border: 1px solid var(--pg-border);
    color: var(--pg-text-dim);
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
  }
  
  .pg-copy-btn:hover {
    border-color: var(--pg-accent);
    color: var(--pg-accent);
  }
  
  .pg-copy-btn.copied {
    background: var(--pg-success);
    color: var(--pg-bg);
    border-color: var(--pg-success);
  }
  
  .pg-tips {
    background: var(--pg-surface);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid var(--pg-border);
    margin-bottom: 3rem;
  }
  
  .pg-tips-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .pg-tips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .pg-tip-card {
    background: var(--pg-surface-light);
    padding: 1.5rem;
    border-radius: 12px;
    border: 2px solid var(--pg-border);
    transition: all 0.3s ease;
  }
  
  .pg-tip-card:hover {
    transform: translateY(-2px);
    border-color: var(--pg-accent);
  }
  
  .pg-tip-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .pg-tip-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--pg-accent);
    font-size: 0.95rem;
  }
  
  .pg-tip-text {
    color: var(--pg-text-dim);
    font-size: 0.85rem;
    line-height: 1.5;
  }
  
  .pg-related-tools {
    margin-top: 4rem;
  }
  
  .pg-related-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--pg-text);
  }
  
  .pg-related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .pg-tool-card {
    background: var(--pg-surface);
    border-radius: 20px;
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--pg-border);
  }
  
  .pg-tool-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, rgba(0, 212, 255, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .pg-tool-card:hover::before {
    opacity: 1;
  }
  
  .pg-tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .pg-tool-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--pg-gradient-1), var(--pg-gradient-2));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .pg-tool-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .pg-tool-desc {
    color: var(--pg-text-dim);
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .pg-content {
    background: var(--pg-surface);
    border-radius: 32px;
    padding: 3rem;
    margin-top: 4rem;
    border: 1px solid var(--pg-border);
  }
  
  .pg-content h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0 1.5rem 0;
    background: linear-gradient(135deg, var(--pg-gradient-1), var(--pg-gradient-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .pg-content h2:first-child {
    margin-top: 0;
  }
  
  .pg-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem 0;
    color: var(--pg-accent);
  }
  
  .pg-content p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--pg-text-dim);
  }
  
  .pg-content ul, .pg-content ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }
  
  .pg-content li {
    margin-bottom: 0.75rem;
    color: var(--pg-text-dim);
    line-height: 1.6;
  }
  
  .pg-content strong {
    color: var(--pg-text);
    font-weight: 600;
  }
  
  @media (max-width: 968px) {
    .pg-main-section {
      grid-template-columns: 1fr;
    }
    
    .pg-options-section {
      order: 2;
    }
    
    .pg-password-section {
      order: 1;
    }
  }
  
  @media (max-width: 640px) {
    .pg-container { padding: 1rem; }
    .pg-title { font-size: 2.5rem; }
    .pg-password-section { padding: 1.5rem; }
    .pg-options-section { padding: 1.5rem; }
    .pg-password-text { font-size: 1.2rem; }
    .pg-bulk-header { flex-direction: column; align-items: flex-start; }
    .pg-content { padding: 2rem 1.5rem; }
  }
</style>

<div class="pg-wrapper">
  <div class="pg-bg-animation">
    <div class="pg-bg-gradient"></div>
    <div class="pg-bg-gradient"></div>
    <div class="pg-bg-gradient"></div>
  </div>
  
  <div class="pg-container">
    <header class="pg-header">
      <h1 class="pg-title">Password Generator</h1>
    </header>
    
    <div class="pg-main-section">
      <div class="pg-password-section">
        <div class="pg-password-display">
          <div class="pg-password-text" id="passwordDisplay">Click Generate to create a password</div>
          <div class="pg-password-actions">
            <button class="pg-btn pg-btn-primary" onclick="generatePassword()">Generate Password</button>
            <button class="pg-btn pg-btn-secondary" onclick="copyPassword()">Copy</button>
          </div>
          <div class="pg-strength-meter">
            <div class="pg-strength-bar">
              <div class="pg-strength-fill" id="strengthBar"></div>
            </div>
            <div class="pg-strength-text" id="strengthText">Password Strength</div>
          </div>
        </div>
        
        <div class="pg-bulk-section">
          <div class="pg-bulk-header">
            <h3 class="pg-bulk-title">Bulk Generator</h3>
            <div class="pg-bulk-controls">
              <input type="number" class="pg-bulk-input" id="bulkCount" min="1" max="10" value="5">
              <button class="pg-btn pg-btn-secondary" onclick="generateBulkPasswords()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Generate</button>
            </div>
          </div>
          <div class="pg-bulk-results" id="bulkResults"></div>
        </div>
      </div>
      
      <div class="pg-options-section">
        <h3 class="pg-options-title">Options</h3>
        
        <div class="pg-length-control">
          <div class="pg-length-label">
            <span>Length</span>
            <span class="pg-length-value" id="lengthValue">16</span>
          </div>
          <input type="range" class="pg-slider" id="lengthSlider" min="8" max="32" value="16">
        </div>
        
        <div class="pg-checkbox-group">
          <div class="pg-checkbox-item">
            <input type="checkbox" class="pg-checkbox" id="uppercase" checked>
            <label for="uppercase" class="pg-checkbox-label">
              <strong>Uppercase</strong> (A-Z)
            </label>
          </div>
          
          <div class="pg-checkbox-item">
            <input type="checkbox" class="pg-checkbox" id="lowercase" checked>
            <label for="lowercase" class="pg-checkbox-label">
              <strong>Lowercase</strong> (a-z)
            </label>
          </div>
          
          <div class="pg-checkbox-item">
            <input type="checkbox" class="pg-checkbox" id="numbers" checked>
            <label for="numbers" class="pg-checkbox-label">
              <strong>Numbers</strong> (0-9)
            </label>
          </div>
          
          <div class="pg-checkbox-item">
            <input type="checkbox" class="pg-checkbox" id="symbols" checked>
            <label for="symbols" class="pg-checkbox-label">
              <strong>Symbols</strong> (!@#$%^&*)
            </label>
          </div>
          
          <div class="pg-checkbox-item">
            <input type="checkbox" class="pg-checkbox" id="excludeSimilar">
            <label for="excludeSimilar" class="pg-checkbox-label">
              <strong>Exclude Similar</strong> (0OIl)
            </label>
          </div>
        </div>
      </div>
    </div>
    
    <div class="pg-tips">
      <h3 class="pg-tips-title">
        🔐 Security Tips
      </h3>
      <div class="pg-tips-grid">
        <div class="pg-tip-card">
          <div class="pg-tip-icon">📏</div>
          <div class="pg-tip-title">Length Matters</div>
          <div class="pg-tip-text">Longer passwords are exponentially harder to crack. Use 12+ characters.</div>
        </div>
        
        <div class="pg-tip-card">
          <div class="pg-tip-icon">🔤</div>
          <div class="pg-tip-title">Mix Characters</div>
          <div class="pg-tip-text">Combine uppercase, lowercase, numbers, and symbols.</div>
        </div>
        
        <div class="pg-tip-card">
          <div class="pg-tip-icon">🚫</div>
          <div class="pg-tip-title">Avoid Patterns</div>
          <div class="pg-tip-text">Skip dictionary words, personal info, or keyboard patterns.</div>
        </div>
        
        <div class="pg-tip-card">
          <div class="pg-tip-icon">🔑</div>
          <div class="pg-tip-title">Unique Passwords</div>
          <div class="pg-tip-text">Never reuse passwords. Use a password manager.</div>
        </div>
      </div>
    </div>
    
    <div class="pg-related-tools">
      <h2 class="pg-related-title">Related Tools</h2>
      <div class="pg-related-grid">
        <a href="/generators/text/username-generator-for-social-media" class="pg-tool-card">
          <div class="pg-tool-icon">👤</div>
          <div class="pg-tool-name">Username Generator</div>
          <div class="pg-tool-desc">Create unique usernames for any platform</div>
        </a>
        <a href="#" class="pg-tool-card">
          <div class="pg-tool-icon">🔐</div>
          <div class="pg-tool-name">Base64 Encoder</div>
          <div class="pg-tool-desc">Encode and decode Base64 strings</div>
        </a>
        <a href="#" class="pg-tool-card">
          <div class="pg-tool-icon">🎲</div>
          <div class="pg-tool-name">Random String</div>
          <div class="pg-tool-desc">Generate random text strings</div>
        </a>
        <a href="#" class="pg-tool-card">
          <div class="pg-tool-icon">🔒</div>
          <div class="pg-tool-name">Hash Calculator</div>
          <div class="pg-tool-desc">Calculate MD5, SHA hashes</div>
        </a>
        <a href="#" class="pg-tool-card">
          <div class="pg-tool-icon">🗝️</div>
          <div class="pg-tool-name">API Key Generator</div>
          <div class="pg-tool-desc">Generate secure API keys</div>
        </a>
        <a href="#" class="pg-tool-card">
          <div class="pg-tool-icon">💪</div>
          <div class="pg-tool-name">Password Strength</div>
          <div class="pg-tool-desc">Check password security level</div>
        </a>
      </div>
    </div>
    
    <div class="pg-content">
      <h2>How to Use the Password Generator</h2>
      <p>Our <strong>password generator</strong> creates secure, random passwords instantly. Follow these simple steps to generate strong passwords for all your accounts:</p>
      
      <ol>
        <li><strong>Set Password Length:</strong> Use the slider to choose your desired password length (8-32 characters). We recommend at least 16 characters for maximum security.</li>
        <li><strong>Choose Character Types:</strong> Select which characters to include - uppercase letters, lowercase letters, numbers, and special symbols.</li>
        <li><strong>Generate Password:</strong> Click the "Generate Password" button to create a new secure password.</li>
        <li><strong>Copy to Clipboard:</strong> Click "Copy" to save the password to your clipboard for easy use.</li>
      </ol>
      
      <h2>Why Use a Random Password Generator?</h2>
      <p>A <strong>random password generator</strong> is essential for creating unique, unbreakable passwords. Here's why you should use one:</p>
      
      <ul>
        <li><strong>True Randomness:</strong> Human-created passwords often follow predictable patterns. Our generator uses cryptographic randomness.</li>
        <li><strong>No Personal Information:</strong> Generated passwords don't contain any personal data that could be guessed or discovered.</li>
        <li><strong>Optimal Complexity:</strong> Automatically includes the right mix of characters for maximum security.</li>
        <li><strong>Time-Saving:</strong> Create strong passwords instantly instead of trying to think of them yourself.</li>
      </ul>
      
      <h2>Password Security Best Practices</h2>
      
      <h3>Creating Strong Passwords</h3>
      <p>A <strong>strong password generator</strong> should create passwords with these characteristics:</p>
      <ul>
        <li><strong>Length:</strong> Minimum 12 characters, ideally 16 or more</li>
        <li><strong>Complexity:</strong> Mix of uppercase, lowercase, numbers, and symbols</li>
        <li><strong>Uniqueness:</strong> Different password for every account</li>
        <li><strong>Randomness:</strong> No dictionary words or personal information</li>
      </ul>
      
      <h3>Password Management Tips</h3>
      <p>Using a <strong>secure password generator</strong> is just the first step. Follow these tips for complete password security:</p>
      <ul>
        <li><strong>Use a Password Manager:</strong> Store all your generated passwords securely</li>
        <li><strong>Enable Two-Factor Authentication:</strong> Add an extra security layer to important accounts</li>
        <li><strong>Regular Updates:</strong> Change passwords every 3-6 months for sensitive accounts</li>
        <li><strong>Never Share Passwords:</strong> Keep your passwords completely private</li>
        <li><strong>Avoid Password Reuse:</strong> One breach shouldn't compromise multiple accounts</li>
      </ul>
      
      <h2>Advanced Features</h2>
      
      <h3>Bulk Password Generation</h3>
      <p>Need multiple passwords? Our <strong>bulk password generator</strong> can create up to 10 secure passwords at once. Perfect for:</p>
      <ul>
        <li>Setting up multiple new accounts</li>
        <li>Updating all your passwords at once</li>
        <li>Creating passwords for team members</li>
        <li>Generating backup passwords</li>
      </ul>
      
      <h3>Custom Character Sets</h3>
      <p>Our <strong>custom password generator</strong> lets you control exactly which characters are included:</p>
      <ul>
        <li><strong>Exclude Similar Characters:</strong> Remove confusing characters like 0 and O, I and l</li>
        <li><strong>Special Requirements:</strong> Some sites don't allow certain symbols - customize as needed</li>
        <li><strong>Memorable Options:</strong> Balance security with memorability by adjusting settings</li>
      </ul>
      
      <h2>Password Generator FAQ</h2>
      
      <h3>Is this password generator safe to use?</h3>
      <p>Yes! Our <strong>online password generator</strong> runs entirely in your browser. No passwords are sent to our servers, stored, or logged. We use your browser's built-in cryptographic functions for true randomness.</p>
      
      <h3>How long should my password be?</h3>
      <p>For optimal security, we recommend using our <strong>strong password generator</strong> to create passwords at least 16 characters long. Longer passwords are exponentially harder to crack.</p>
      
      <h3>Can I use generated passwords on all websites?</h3>
      <p>Most websites accept our generated passwords. However, some have specific requirements. Our <strong>password creator</strong> lets you customize the character set to meet any site's requirements.</p>
      
      <h3>Should I write down my passwords?</h3>
      <p>Instead of writing passwords on paper, use a reputable password manager. Generate passwords with our <strong>random password creator</strong> and store them securely in your password manager.</p>
    </div>
  </div>
</div>

<script>
  // Character sets
  const charSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };
  
  const similarChars = '0OIl';
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('lengthSlider');
    const lengthValue = document.getElementById('lengthValue');
    
    slider.addEventListener('input', (e) => {
      lengthValue.textContent = e.target.value;
    });
    
    // Generate initial password
    generatePassword();
  });
  
  function getSelectedCharSet() {
    let chars = '';
    
    if (document.getElementById('uppercase').checked) {
      chars += charSets.uppercase;
    }
    if (document.getElementById('lowercase').checked) {
      chars += charSets.lowercase;
    }
    if (document.getElementById('numbers').checked) {
      chars += charSets.numbers;
    }
    if (document.getElementById('symbols').checked) {
      chars += charSets.symbols;
    }
    
    // Remove similar characters if requested
    if (document.getElementById('excludeSimilar').checked) {
      chars = chars.split('').filter(c => !similarChars.includes(c)).join('');
    }
    
    return chars;
  }
  
  function generateSecureRandomPassword(length) {
    const chars = getSelectedCharSet();
    
    if (chars.length === 0) {
      alert('Please select at least one character type!');
      return '';
    }
    
    let password = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
      password += chars[array[i] % chars.length];
    }
    
    return password;
  }
  
  function generatePassword() {
    const length = parseInt(document.getElementById('lengthSlider').value);
    const password = generateSecureRandomPassword(length);
    
    if (password) {
      document.getElementById('passwordDisplay').textContent = password;
      updateStrengthMeter(password);
    }
  }
  
  function copyPassword() {
    const password = document.getElementById('passwordDisplay').textContent;
    
    if (password && password !== 'Click Generate to create a password') {
      navigator.clipboard.writeText(password).then(() => {
        // Show copied feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }, 2000);
      });
    }
  }
  
  function updateStrengthMeter(password) {
    let strength = 0;
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    
    // Length score
    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 20;
    if (password.length >= 16) strength += 10;
    
    // Character variety score
    if (/[a-z]/.test(password)) strength += 10;
    if (/[A-Z]/.test(password)) strength += 10;
    if (/[0-9]/.test(password)) strength += 10;
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;
    
    // Update visual
    strengthBar.style.width = strength + '%';
    
    if (strength < 30) {
      strengthBar.style.background = 'var(--pg-danger)';
            strengthText.textContent = 'Weak Password';
      strengthText.style.color = 'var(--pg-danger)';
    } else if (strength < 60) {
      strengthBar.style.background = 'var(--pg-warning)';
      strengthText.textContent = 'Fair Password';
      strengthText.style.color = 'var(--pg-warning)';
    } else if (strength < 80) {
      strengthBar.style.background = 'var(--pg-accent)';
      strengthText.textContent = 'Good Password';
      strengthText.style.color = 'var(--pg-accent)';
    } else {
      strengthBar.style.background = 'var(--pg-success)';
      strengthText.textContent = 'Excellent Password';
      strengthText.style.color = 'var(--pg-success)';
    }
  }
  
  function generateBulkPasswords() {
    const count = Math.min(10, Math.max(1, parseInt(document.getElementById('bulkCount').value)));
    const length = parseInt(document.getElementById('lengthSlider').value);
    const bulkResults = document.getElementById('bulkResults');
    
    bulkResults.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
      const password = generateSecureRandomPassword(length);
      if (password) {
        const item = document.createElement('div');
        item.className = 'pg-password-item';
        item.innerHTML = `
          <span class="pg-password-item-text">${password}</span>
          <button class="pg-copy-btn" onclick="copyBulkPassword('${password}', this)">Copy</button>
        `;
        bulkResults.appendChild(item);
      }
    }
  }
  
  function copyBulkPassword(password, btn) {
    navigator.clipboard.writeText(password).then(() => {
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('copied');
      }, 2000);
    });
  }
  
  // Auto-generate on option change
  document.querySelectorAll('.pg-checkbox, .pg-slider').forEach(input => {
    input.addEventListener('change', () => {
      const currentPassword = document.getElementById('passwordDisplay').textContent;
      if (currentPassword && currentPassword !== 'Click Generate to create a password') {
        generatePassword();
      }
    });
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      generatePassword();
    } else if (e.key === 'c' && (e.ctrlKey || e.metaKey)) {
      copyPassword();
    }
  });
</script>
