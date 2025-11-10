/**
 * ========================================================
 * FILE: src/pages/index.js
 * PURPOSE:
 *   Defines the main homepage layout and structure for the
 *   Bite-Sized Open Science website.
 *
 * STRUCTURE:
 *   1. Hero Section — main landing banner with key call-to-actions
 *   2. TRR 266 Section — highlights project affiliation and funding
 *   3. About / Learn Section — outlines user learning outcomes
 *   4. Featured Video Section — embeds latest YouTube playlist
 *   5. CTA Section — invites users to explore the tutorials library
 *
 * NOTES:
 *   - Uses Docusaurus Layout and Theme components for structure.
 *   - Follows consistent color and button styling from global CSS.
 *   - Responsive layout with inline flex controls for adaptive design.
 * ========================================================
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

/* ========================================================
 * 1. HERO SECTION
 * --------------------------------------------------------
 * Main entry point for visitors.
 * Includes project name, subtitle, brief intro, and quick links.
 * ======================================================== */
function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {/* Text Column */}
        <div style={{ flex: '1 1 60%', minWidth: '300px' }}>
          <h1 className={styles.heroTitle}>Bite Sized</h1>
          <p className={styles.heroSubtitle}>Open Science Tutorials</p>
          <p className={styles.heroDescription}>
            Bite-sized video tutorials that guide researchers through{' '}
            <strong>practical Open Science workflows</strong> — concise, actionable,
            and easy to integrate into your research.
          </p>

          {/* Call-to-Action Buttons */}
          <div className={styles.heroButtons}>
            <Link
              className="button button--secondary button--lg"
              to="/tutorials"
            >
              Browse Tutorials &rarr;
            </Link>
            <Link
              className="button button--primary button--lg"
              to="#latest-tutorial"
            >
              Watch Latest Tutorial &rarr;
            </Link>
          </div>
        </div>

        {/* Logo Column */}
        <div
          style={{
            flex: '0 0 35%',
            minWidth: '200px',
            textAlign: 'center',
          }}
        >
          <img
            src="/img/logo_muffin_white.png"
            alt="Bite Sized Logo"
            className={styles.heroLogo}
          />
        </div>
      </div>
    </header>
  );
}

/* ========================================================
 * 2. TRR 266 SECTION
 * --------------------------------------------------------
 * Introduces the research framework and funding source.
 * Highlights affiliation with the DFG and TRR 266 project.
 * ======================================================== */
function TRRSection() {
  return (
    <section className={styles.trrSection}>
      <div
        className="container"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}
      >
        {/* Text Column */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <Heading as="h2" className={styles.sectionTitle}>
            Part of TRR 266 “Accounting for Transparency”
            <span className={styles.accentLine}></span>
          </Heading>
          <p>
            Bite Sized Open Science Tutorials is part of{' '}
            <strong>TRR 266 “Accounting for Transparency”</strong>, a Collaborative
            Research Center funded by the <strong>German Research Foundation (DFG)</strong>.
          </p>
          <p>
            TRR 266 brings together researchers to examine how accounting and taxation
            affect transparency and how transparency impacts our economy and society.
          </p>
          <Link
            className="button button--secondary button--lg"
            to="https://www.accounting-for-transparency.de"
          >
            Learn more about TRR 266 &rarr;
          </Link>
        </div>

        {/* Logo Column */}
        <div
          style={{
            flex: 1,
            minWidth: '200px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src="img/trr266_logo.png"
            alt="TRR 266 Logo"
            className={styles.trrLogo}
          />
        </div>
      </div>
    </section>
  );
}

/* ========================================================
 * 3. HOMEPAGE COMPONENT (MAIN)
 * --------------------------------------------------------
 * Wraps all sections inside the global Docusaurus Layout.
 * Includes HomepageFeatures, About, Video, TRR, and CTA sections.
 * ======================================================== */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Bite-Sized Open Science video tutorials that empower researchers with practical, easy-to-follow guidance."
    >
      {/* Hero Section */}
      <HomepageHeader />

      <main>
        {/* Feature Overview Section */}
        <HomepageFeatures />

        {/* What You’ll Learn Section */}
        <section className={styles.aboutSection}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <Heading as="h2" className={styles.sectionTitle}>
              What You’ll Learn
              <span className={styles.accentLine}></span>
            </Heading>

            <div
              style={{
                display: 'flex',
                gap: '40px',
                flexWrap: 'wrap',
                marginTop: '20px',
              }}
            >
              {/* Learning Points List */}
              <div style={{ flex: 1, minWidth: '250px' }}>
                <ul className={styles.learnList}>
                  <li>
                    <strong>Version control:</strong> Track and share your work confidently
                  </li>
                  <li>
                    <strong>Reproducible workflows:</strong> Apply{' '}
                    <span className={styles.highlight}>R</span> or{' '}
                    <span className={styles.highlight}>Python</span> for consistent results
                  </li>
                  <li>
                    <strong>Collaboration:</strong> Work transparently with your team
                  </li>
                </ul>
              </div>

              {/* Description Column */}
              <div style={{ flex: 1, minWidth: '250px' }}>
                <p>
                  Bite Sized tutorials help researchers adopt transparent, reproducible,
                  and impactful practices, whether you're a student, academic, or industry
                  professional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Tutorial Section */}
        <section id="latest-tutorial" className={styles.videoSection}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <Heading as="h2" className={styles.sectionTitle}>
              Watch Our Latest Tutorial
              <span className={styles.accentLine}></span>
            </Heading>

            <div className={styles.videoGrid}>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUkDX_2s3DXRzew9X8WzbH3Q"
                title="Latest YouTube Uploads"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div style={{ marginTop: '20px' }}>
              <Link
                className="button button--secondary button--lg"
                to="/tutorials"
              >
                View All Tutorials &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* TRR 266 Info Section */}
        <TRRSection />

        {/* Final Call-To-Action Section */}
        <section className={styles.ctaSection}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className={styles.aboutTitle}>Ready to Dive Deeper?</h2>
            <p>Start learning by exploring our full tutorial library.</p>
            <Link
              className="button button--secondary button--lg"
              to="/tutorials"
            >
              Go to Tutorials &rarr;
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
