---
layout: default
title: About Us
permalink: /about
---

<style>
  /* Hero Section */
  .hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 80px 0;
    text-align: center;
    margin-bottom: 60px;
  }
  
  .hero-section h1 {
    font-size: 3.5em;
    margin-bottom: 20px;
    animation: fadeInDown 1s ease-out;
  }
  
  .hero-section p {
    font-size: 1.3em;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
  }
  
  /* Container */
  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 20px;
  }
  
  /* Cards */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
  }
  
  .card {
    background: #c1caca;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
  
  .card-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: white;
  }
  
  .card h3 {
    color: #333;
    margin-bottom: 15px;
    font-size: 1.5em;
  }
  
  .card p {
    color: #666;
    line-height: 1.6;
  }
  
  /* Stats Section */
  .stats-section {
    padding: 60px 0;
    margin: 60px 0;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    text-align: center;
  }
  
  .stat-item {
    padding: 20px;
  }
  
  .stat-number {
    font-size: 3em;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 10px;
  }
  
  .stat-label {
    color: #666;
    font-size: 1.1em;
  }
  
  /* Timeline */
  .timeline {
    position: relative;
    padding: 40px 0;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ddd;
    transform: translateX(-50%);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 50px;
    width: 50%;
    padding: 0 40px;
  }
  
  .timeline-item:nth-child(odd) {
    left: 0;
    text-align: right;
  }
  
  .timeline-item:nth-child(even) {
    left: 50%;
    text-align: left;
  }
  
  .timeline-dot {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #667eea;
    border-radius: 50%;
    top: 0;
  }
  
  .timeline-item:nth-child(odd) .timeline-dot {
    right: -10px;
  }
  
  .timeline-item:nth-child(even) .timeline-dot {
    left: -10px;
  }
  
  /* Values Section */
  .values-section {
    padding: 60px 0;
  }
  
  .value-card {
    text-align: center;
    padding: 30px;
    border-radius: 10px;
    transition: background 0.3s ease;
  }
  
  .value-card:hover {
    background: #545a5fff;
    color: white
  }
  
  .value-icon {
    font-size: 3em;
    margin-bottom: 20px;
  }
  
  /* CTA Section */
  .cta-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 80px 0;
    text-align: center;
    border-radius: 20px;
  }
  
  .cta-button {
    display: inline-block;
    background: white;
    color: #667eea;
    padding: 15px 40px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.3s ease;
    margin-top: 20px;
  }
  
  .cta-button:hover {
    transform: scale(1.05);
  }
  
  /* Animations */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fade-in {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .hero-section h1 {
      font-size: 2.5em;
    }
    
    .timeline::before {
      left: 20px;
    }
    
    .timeline-item {
      width: 100%;
      left: 0 !important;
      padding-left: 60px;
      text-align: left !important;
    }
    
    .timeline-dot {
      left: 10px !important;
    }
    
    .card-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Hero Section -->
<div class="hero-section">
  <div class="about-container">
    <h1>About ToolClouds</h1>
    <p>Your Global Destination for Professional Calculators, Converters, and Generators</p>
  </div>
</div>

<!-- Main Content -->
<div class="about-container">
  
  <!-- What We Offer -->
  <section class="fade-in" style="animation-delay: 0.2s;">
    <h2 style="text-align: center; font-size: 2.5em; margin-bottom: 50px;">What We Offer</h2>
    <div class="card-grid">
      <div class="card">
        <div class="card-icon">📊</div>
        <h3>Professional Calculators</h3>
        <p>From simple arithmetic to complex financial calculations, our tools cover everything you need for both Indian and US standards.</p>
      </div>
      
      <div class="card">
        <div class="card-icon">🔄</div>
        <h3>Smart Converters</h3>
        <p>Convert between units, currencies, and formats with precision. Supporting both metric and imperial systems globally.</p>
      </div>
      
      <div class="card">
        <div class="card-icon">⚙️</div>
        <h3>Powerful Generators</h3>
        <p>Generate passwords, QR codes, invoices, and more with our suite of generator tools designed for global users.</p>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="stats-section fade-in" style="animation-delay: 0.4s;">
    <div class="about-container">
      <h2 style="text-align: center; font-size: 2.5em; margin-bottom: 50px;">Our Impact</h2>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number" data-count="500">0</div>
          <div class="stat-label">Tools Available</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" data-count="50">0</div>
          <div class="stat-label">Countries Served</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" data-count="1000000">0</div>
          <div class="stat-label">Monthly Users</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" data-count="99">0</div>
          <div class="stat-label">% Accuracy Rate</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Story Timeline -->
  <section class="fade-in" style="animation-delay: 0.6s;">
    <h2 style="text-align: center; font-size: 2.5em; margin-bottom: 50px;">Our Journey</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <h3>2020 - The Beginning</h3>
        <p>Started with a simple vision: making calculations accessible to everyone, everywhere.</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <h3>2021 - Going Global</h3>
        <p>Expanded our tools to support both Indian and US standards, serving users worldwide.</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <h3>2022 - Major Milestone</h3>
        <p>Reached 100+ tools and introduced advanced generators and converters.</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <h3>2024 - Continuous Innovation</h3>
        <p>Now serving millions of users with 500+ tools and counting.</p>
      </div>
    </div>
  </section>

  <!-- Our Values -->
  <section class="values-section fade-in" style="animation-delay: 0.8s;">
    <h2 style="text-align: center; font-size: 2.5em; margin-bottom: 50px;">Our Core Values</h2>
    <div class="card-grid">
      <div class="value-card">
        <div class="value-icon">🎯</div>
        <h3>Accuracy First</h3>
        <p>Every calculation is thoroughly tested to ensure precise results you can trust.</p>
      </div>
      <div class="value-card">
        <div class="value-icon">🌍</div>
        <h3>Global Accessibility</h3>
        <p>Tools designed to work seamlessly across different regions and standards.</p>
      </div>
      <div class="value-card">
        <div class="value-icon">🔒</div>
        <h3>Privacy Protected</h3>
        <p>Your data stays with you. We never store or share your calculations.</p>
      </div>
      <div class="value-card">
        <div class="value-icon">💡</div>
        <h3>Innovation Driven</h3>
        <p>Continuously adding new tools based on user feedback and emerging needs.</p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section fade-in" style="animation-delay: 1s;">
    <h2 style="font-size: 2.5em; margin-bottom: 20px;">Ready to Experience Our Tools?</h2>
    <p style="font-size: 1.2em; margin-bottom: 30px;">Join millions of users who trust ToolClouds for their daily calculations</p>
    <a href="/" class="cta-button">Explore Our Tools</a>
  </section>

</div>

<script>
  // Counter animation
  document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const countUp = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if(count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(countUp, 10);
        } else {
          if(target === 1000000) {
            counter.innerText = '1M+';
          } else if(target === 99) {
            counter.innerText = target + '%';
          } else {
            counter.innerText = target + '+';
          }
        }
      });
    };
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.style.opacity = '1';
          
          // Trigger counter when stats section is visible
          if(entry.target.classList.contains('stats-section')) {
            countUp();
          }
        }
      });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
    
    // Observe stats section
    const statsSection = document.querySelector('.stats-section');
    if(statsSection) {
      observer.observe(statsSection);
    }
  });
</script>
