/* ========================================================
   FILE: src/pages/about.js
   PURPOSE: Defines the "About" page of the Docusaurus site.
            Provides information about the project, team, mission,
            target audience, teaching format, and how to get involved.
   STRUCTURE:
     - Hero Section: Page title, subtitle, and project description
     - Team Section: Profiles of core contributors with images and descriptions
     - Mission Section: Project goals and tutorial approach
     - Target Audience Section: Who benefits from the tutorials
     - Format Section: How tutorials are structured and delivered
     - Get Involved / Contact Section: Encourages user interaction
   NOTES:
     - Uses Docusaurus Layout component for consistent site styling
     - Uses local CSS module for page-specific styles
     - Team images are statically imported
======================================================== */

import React from 'react';
import Layout from '@theme/Layout';           // Docusaurus page layout wrapper
import Link from '@docusaurus/Link';          // Docusaurus link component
import styles from './about.module.css';      // Local CSS module
import timnahImg from '@site/static/img/timnah.jpg';  // Team member images
import fabianImg from '@site/static/img/fabian.jpeg';

/* ========================================================
   AboutPage Component
======================================================== */
export default function AboutPage() {
  return (
    <Layout title="About">

      {/* ========================================================
          Hero Section
          - Page title, subtitle, and description of Bite-Sized Open Science
      ======================================================== */}
      <section className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>About Bite-Sized Open Science</h1>
          <p className={styles.heroSubtitle}>
            Bite‑Sized Open Science is a project by C02 – Open Science Data Center under TRR 266.
          </p>
          <p className={styles.heroDescription}>
            We create short, practical tutorials that guide researchers through open science workflows — from documenting data to reproducible analyses — in a concise and actionable way.
          </p>
        </div>
      </section>

      {/* ========================================================
          Team Section
          - Displays core team members with images, names, and roles
      ======================================================== */}
      <section className={styles.structureSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <img src={timnahImg} alt="Timnah Weckner" />
              <h3>Timnah Weckner</h3>
              <p>
                BSc Business Administration, Humboldt University Berlin (5th semester). 
                Working on the C02 Project since January 2024. Timnah focuses on tutorial 
                content creation, structuring the learning paths, and ensuring the material 
                is concise and actionable.
              </p>
            </div>
            <div className={styles.teamMember}>
              <img src={fabianImg} alt="Fabian Kalife" />
              <h3>Fabian Kalife</h3>
              <p>
                BSc Business Administration, Humboldt University Berlin (7th semester). 
                Working on the C02 Project since January 2024. Fabian contributes to the 
                technical setup, video production, and overall project coordination, making 
                sure tutorials run smoothly and are easy to follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          Mission Section
          - Explains the purpose and goals of the project
      ======================================================== */}
      <section className={styles.structureSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p>
            We aim to make open science workflows accessible to early-career researchers. 
            By creating short, clear tutorials, we help researchers adopt transparent, 
            reproducible practices that can be integrated directly into their everyday work.
          </p>
          <p>
            Our tutorials cover key aspects of research — from data collection, 
            analysis, and documentation, to using tools like GitHub, VSCode, and virtual 
            environments — all explained step by step with examples.
          </p>
        </div>
      </section>

      {/* ========================================================
          Target Audience Section
          - Specifies who the tutorials are designed for
      ======================================================== */}
      <section className={styles.structureSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Who We Help</h2>
          <p>
            Our tutorials are primarily designed for early-career researchers in 
            economics and social sciences using quantitative methods. 
            However, anyone interested in making their research more transparent, 
            reproducible, and open can benefit from our content.
          </p>
        </div>
      </section>

      {/* ========================================================
          Format Section
          - Describes the tutorial format (video + written summary)
      ======================================================== */}
      <section className={styles.structureSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How We Teach</h2>
          <p>
            Each tutorial is 3–5 minutes long and demonstrates processes live on screen. 
            We combine short video demonstrations with written summaries on our website, 
            so you can follow along or revisit steps whenever needed.
          </p>
          <p>
            Our goal is clarity: focus on actionable steps, avoid unnecessary complexity, 
            and make open science approachable for everyone.
          </p>
        </div>
      </section>

      {/* ========================================================
          Get Involved / Contact Section
          - Encourages users to engage via contact form or video comments
      ======================================================== */}
      <section className={styles.structureSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Get Involved</h2>
          <p>
            Have questions, feedback, or ideas for new tutorials? 
            Use the <Link to="/contact">contact form</Link> or leave comments on our videos. 
            We’re excited to hear from you and collaborate with the community!
          </p>
        </div>
      </section>

    </Layout>
  );
}
