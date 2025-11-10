/**
 * ========================================================
 * FILE: src/pages/contact-thanks.js
 * PURPOSE:
 *   Displays a simple confirmation page shown after the user
 *   successfully submits the contact form.
 *   Provides feedback and a link to return to the homepage.
 *
 * STRUCTURE:
 *   - Imports and setup
 *   - Functional React component (ContactThanksPage)
 *     - Layout wrapper for Docusaurus page metadata
 *     - Container with thank-you message and return link
 *
 * NOTES:
 *   - Uses shared CSS module (`contact.module.css`) for layout styling
 *   - Inline style applies brand color variable for the back link
 * ========================================================
 */

import React from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

/**
 * ContactThanksPage Component
 * - Displays a thank-you message after contact form submission.
 * - Minimal layout consistent with other Docusaurus pages.
 */
export default function ContactThanksPage() {
  return (
    <Layout title="Thank You">
      <div className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Thank you for your message!</h1>
        <p>We’ve received your message and will get back to you as soon as possible.</p>
        <p>
          {/* Inline brand-colored link back to homepage */}
          <a href="/bite-sized/" style={{ color: 'var(--ifm-color-primary)' }}>
            ← Back to homepage
          </a>
        </p>
      </div>
    </Layout>
  );
}
