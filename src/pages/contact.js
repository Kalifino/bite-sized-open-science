/**
 * ========================================================
 * FILE: src/pages/contact.js
 * PURPOSE:
 *   Displays the main Contact page for Bite-Sized Open Science.
 *   Provides a form for visitors to send messages directly
 *   via FormSubmit (no backend required).
 *
 * STRUCTURE:
 *   - Imports and setup
 *   - Hero section: intro text and fallback email link
 *   - Form section: contact form wrapped in styled card
 *
 * NOTES:
 *   - FormSubmit handles email delivery and redirects to
 *     the contact-thanks page upon success.
 *   - Uses shared CSS module (contact.module.css) for layout.
 *   - Inline fields match consistent site-wide input styling.
 * ========================================================
 */

import React from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

/**
 * ContactPage Component
 * - Renders the "Contact Bite Sized" form and intro text.
 * - Uses external FormSubmit endpoint for simple form handling.
 */
export default function ContactPage() {
  return (
    <Layout title="Contact">
      {/* ================= HERO SECTION ================= */}
      <section className={styles.heroSection}>
        <h1>Contact Bite Sized</h1>
        <p>
          Have a question, idea, or feedback? We’d love to hear from you!
          <br />
          If the form doesn’t work, email us directly at{' '}
          <a href="mailto:bitesizedopenscience@gmail.com">bitesizedopenscience@gmail.com</a>.
        </p>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className={styles.formSection}>
        <div className={styles.formCard}>
          <form
            action="https://formsubmit.co/bitesizedopenscience@gmail.com"
            method="POST"
            className={styles.contactForm}
          >
            {/* Hidden metadata for FormSubmit */}
            <input type="hidden" name="_subject" value="New contact form message from Bite-Sized!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="Website" value="Bite-Sized Open Science" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://trr266.github.io/bite-sized-open-science/contact-thanks"
            />

            {/* Visible form fields */}
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} required />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
