/* ========================================================
   FILE: src/components/HomepageFeatures/index.js
   PURPOSE: Defines the "Features" section on the homepage, 
            displaying key product/service highlights with icons, 
            titles, and descriptions.
   STRUCTURE:
     - FeatureList: Array of feature objects (title, SVG, description)
     - Feature component: Renders a single feature card
     - HomepageFeatures component: Maps FeatureList into multiple Feature components
   NOTES:
     - Uses Docusaurus @theme/Heading for consistent headings
     - Uses CSS module for local styling
     - SVGs are imported dynamically from the static folder
======================================================== */

import React from 'react';
import clsx from 'clsx'; // utility for conditional classNames
import Heading from '@theme/Heading'; // Docusaurus themed heading component
import styles from './styles.module.css'; // local CSS module for styling

// ========================================================
// Feature definitions
// ========================================================
// Each object represents a feature with a title, icon (SVG), and description
const FeatureList = [
  {
    title: 'Concise Video Tutorials',
    Svg: require('@site/static/img/undraw_video_tutorial.svg').default,
    description: (
      <>
        Short, focused videos that simplify Open Science workflows into practical, actionable steps you can apply right away.
      </>
    ),
  },
  {
    title: 'Tailored for Researchers',
    Svg: require('@site/static/img/undraw_research.svg').default,
    description: (
      <>
        Created with early-career researchers in mind, especially those using quantitative methods in economics and social sciences.
      </>
    ),
  },
  {
    title: 'Interactive & Practical',
    Svg: require('@site/static/img/undraw_code_review.svg').default,
    description: (
      <>
        Learn by doing with real-world examples and workflows using tools like GitHub, R, and Python.
      </>
    ),
  },
];

// ========================================================
// Feature component
// ========================================================
// Renders a single feature card using props:
// - Svg: The feature icon
// - title: Feature title
// - description: Feature description
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* Icon centered */}
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      {/* Title and description centered with horizontal padding */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// ========================================================
// HomepageFeatures component
// ========================================================
// Renders the full "Features" section on the homepage
// Maps through FeatureList to render individual Feature components
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
