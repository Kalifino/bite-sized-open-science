/* ========================================================
   FILE: src/pages/tutorials/index.js
   PURPOSE: Defines the "Tutorials" page of the Docusaurus site.
            Provides an overview of video tutorials, categories, 
            and full tutorial structure for users to navigate.
   STRUCTURE:
     - Hero Section: Page heading, description, and start button
     - Categories Grid: Overview of tutorial categories, including disabled/coming soon
     - Full Tutorial Structure: 3-column layout listing detailed tutorials and links
   NOTES:
     - Uses Docusaurus Layout component for consistent site styling
     - Uses react-icons for illustrative icons
     - Uses local CSS module for page-specific styles
     - 'Coming Soon' sections are styled with a dedicated CSS class
======================================================== */

import React from 'react';
import Link from '@docusaurus/Link'; // Docusaurus link component for navigation
import Layout from '@theme/Layout';   // Docusaurus page layout wrapper
import styles from './tutorials.module.css'; // Local CSS module
import { FaTools, FaFlask, FaProjectDiagram } from 'react-icons/fa'; // Category icons

/* ========================================================
   Tutorials Page Component
======================================================== */
export default function Tutorials() {
  return (
    <Layout
      title="Bite Sized Tutorials"
      description="Bite-Sized Open Science video tutorials that guide you through the workflow."
    >
      {/* ========================================================
          Hero Section
          - Main heading and introductory paragraph
          - "Start Learning" call-to-action button
      ======================================================== */}
      <div className={styles.heroSection}>
        <h1>Bite Sized Video Tutorials</h1>
        <p>
          Explore concise, practical tutorials that guide you through the Open Science workflow — 
          from setup to reproducible analyses.
        </p>
        <Link
          className="button button--secondary button--lg"
          to="/tutorials/intro-setup/workflow-setup-overview"
        >
          Start Learning →
        </Link>
      </div>

      {/* ========================================================
          Categories Grid
          - Displays tutorial categories with icons
          - Active and "coming soon" categories distinguished
      ======================================================== */}
      <section className={styles.categoryGrid}>
        {/* Category 1 - Intro & Setup */}
        <div className={styles.categoryCard}>
          <FaTools className={styles.icon} />
          <h2>Intro & Setup</h2>
          <p>Essential tools to get your research workflow running.</p>
          <Link
            className="button button--secondary button--lg"
            to="/tutorials/intro-setup/workflow-setup-overview"
          >
            View Tutorials →
          </Link>
        </div>

        {/* Category 2 - Open Science Process (Coming Soon) */}
        <div className={`${styles.categoryCard} ${styles.disabled}`}>
          <FaFlask className={styles.icon} />
          <h2>
            Open Science Process <span className={styles.comingSoonText}>Coming Soon</span>
          </h2>
          <p>Master the full research cycle: preregistration, data, analysis, reproducibility.</p>
        </div>

        {/* Category 3 - Mini-Project Walkthrough (Coming Soon) */}
        <div className={`${styles.categoryCard} ${styles.disabled}`}>
          <FaProjectDiagram className={styles.icon} />
          <h2>
            Mini-Project Walkthrough <span className={styles.comingSoonText}>Coming Soon</span>
          </h2>
          <p>Put everything into practice with a guided, hands-on project.</p>
        </div>
      </section>

      {/* ========================================================
          Full Tutorial Structure Section
          - 3-column layout detailing all tutorials
          - Column 1: Intro & Setup with nested links
          - Column 2: Open Science Process (Coming Soon)
          - Column 3: Mini-Project Walkthrough (Coming Soon)
      ======================================================== */}
      <section className={styles.structureSection}>
        <h2>Full Tutorial Structure</h2>
        <div className={styles.structureGrid}>

          {/* Column 1 - Intro & Setup */}
          <div>
            <h3>Intro & Setup</h3>
            <ul>
              {/* Intro to GitHub Tutorials */}
              <li>Intro to GitHub
                <ul>
                  <li>
                    <Link to="/tutorials/intro-setup/github/creating-an-account">
                      Creating an Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorials/intro-setup/github/intro-to-github-repos">
                      Intro to GitHub Repos
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorials/intro-setup/github/github-branches">
                      GitHub Branches
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorials/intro-setup/github/commits-and-pull-requests">
                      Commits & Pull Requests
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorials/intro-setup/github/github-issues">
                      GitHub Issues
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorials/intro-setup/github/coding-in-github">
                      Coding in GitHub
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Intro to VSCode Tutorials */}
              <li>Intro to VSCode
                <ul>
                  <li>
                    <Link to="/tutorials/intro-setup/vscode/installing-vscode-and-python">
                      Installing VSCode and Python
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorials/intro-setup/vscode/installing-git">
                      Installing Git
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorials/intro-setup/vscode/virtual-environment-basics">
                      Virtual Environment Basics
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorials/intro-setup/vscode/git-integration-in-vscode">
                      Git Integration in VSCode
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorials/intro-setup/vscode/github-copilot-basics">
                      GitHub Copilot Basics
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Column 2 - Open Science Process */}
          <div>
            <h3>Open Science Process <span className={styles.comingSoonText}>Coming Soon</span></h3>
            <ul>
              <li>Pre-Registration</li>
              <li>Working with Data</li>
              <li>Communicating Results</li>
            </ul>
          </div>

          {/* Column 3 - Mini-Project Walkthrough */}
          <div>
            <h3>Mini-Project Walkthrough <span className={styles.comingSoonText}>Coming Soon</span></h3>
          </div>

        </div>
      </section>
    </Layout>
  );
}
