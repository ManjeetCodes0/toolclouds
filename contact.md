---
layout: default
title: Contact Us
permalink: /contact/
---

<style>
  /*
    UPDATED: The styles now use your site's CSS variables to create
    a theme-aware wrapper and to style all form elements for both
    light and dark modes automatically.
  */
  .professional-contact {
    font-family: var(--font-primary, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif);
    max-width: 800px;
    margin: 60px auto;
    
    /* --- ADDED WRAPPER STYLES --- */
    background-color: var(--color-white);
    padding: 40px 50px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--color-border);
    transition: background-color 0.3s, border-color 0.3s;

    color: var(--color-body-text);
    line-height: 1.7;
  }
  .professional-contact h1 {
    font-size: 2.2em;
    font-weight: 600;
    color: var(--color-heading);
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 0.5em;
    margin-bottom: 1em;
    transition: border-color 0.3s;
  }
  .professional-contact p {
    font-size: 1.1em;
    color: var(--color-secondary-text);
    margin-bottom: 2em;
  }
  
  /* --- FORM STYLES (UPDATED WITH VARIABLES) --- */
  .form-group {
    margin-bottom: 1.5em;
  }
  .form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5em;
    color: var(--color-heading);
  }
  .form-group .form-control {
    width: 100%;
    padding: 12px 15px;
    font-size: 1em;
    border: 1px solid var(--color-border);
    border-radius: 8px; /* Slightly smaller radius for inputs */
    box-sizing: border-box;
    background-color: var(--color-background); /* Use page background for inputs */
    color: var(--color-body-text);
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.3s, color 0.3s;
  }
  .form-group .form-control:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-primary-light);
  }
  
  /* --- BUTTON STYLES (UPDATED WITH VARIABLES) --- */
  .submit-btn {
    display: inline-block;
    width: 100%;
    padding: 15px;
    font-size: 1.1em;
    font-weight: 600;
    color: #FFFFFF; /* White text is best on primary color */
    background-color: var(--color-primary);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .submit-btn:hover {
    background-color: var(--color-primary-dark);
  }

  /* --- MESSAGE STYLES --- */
  .form-message {
    padding: 15px;
    margin-top: 1.5em;
    border-radius: 6px;
    text-align: center;
    font-weight: 600;
    display: none;
    border: 1px solid transparent;
  }
  .success {
    background-color: #d4edda;
    color: #155724;
    border-color: #c3e6cb;
  }
  .error {
    background-color: #f8d7da;
    color: #721c24;
    border-color: #f5c6cb;
  }
  /* Dark theme overrides for messages */
  [data-theme="dark"] .success {
    background-color: #155724;
    color: #d4edda;
    border-color: #2b6b3e;
  }
  [data-theme="dark"] .error {
    background-color: #721c24;
    color: #f8d7da;
    border-color: #8c2a32;
  }
  
  /* --- RESPONSIVE STYLES --- */
  @media (max-width: 600px) {
    .professional-contact {
      padding: 30px 25px;
    }
  }
</style>

<div class="professional-contact" markdown="1">

# Contact Us

Have a question, suggestion, or feedback? We'd love to hear from you. Please fill out the form below and we will get back to you as soon as possible.

<form id="contact-form">
    <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="entry.2005620554" class="form-control" required>
    </div>
    <div class="form-group">
        <label for="email">Your Email</label>
        <input type="email" id="email" name="entry.1045781291" class="form-control" required>
    </div>
    <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message" name="entry.839337160" class="form-control" rows="6" required></textarea>
    </div>
    <button type="submit" class="submit-btn">Send Message</button>
</form>

<div id="form-success" class="form-message success">
    Thank you! Your message has been sent successfully.
</div>
<div id="form-error" class="form-message error">
    Oops! Something went wrong. Please try again later.
</div>

</div>

<script>
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop the default form submission

        // The Action URL has been updated with your form ID
        const actionURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfvl4_tqQzap244F61PzOlJiHyztFWf3jh1ibMnjb4DM3wICA/formResponse';
        
        const formData = new FormData(form);

        fetch(actionURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Important to avoid CORS errors
        }).then(response => {
            // Google Forms with 'no-cors' mode will not return a readable response,
            // but we can assume success if the request didn't throw an error.
            form.style.display = 'none'; // Hide the form
            successMessage.style.display = 'block'; // Show success message
        }).catch(error => {
            // This will catch network errors
            errorMessage.style.display = 'block'; // Show error message
        });
    });
</script>