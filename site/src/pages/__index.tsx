import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';



function HomepageHeader() {
  const headerFeatures = [
    "Failure & defect monitoring ✨ ",
    "Live video feed 🎥 ",
    "Sync, backup, and version files 📁",
    "Control printers from anywhere in the world 🌴",
    "Compatible with OctoPrint 💚 "
  ];
  const headerList = headerFeatures.map((text) => <p className="hero__subtitle">{text}</p>)
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.tagline}</h1>
        <p className="hero__subtitle">Managing 3D printers is hard work! You deserve a personal assistant.</p>
        <div className="row">
          <div className="col col--8">
            <video className="hero__video" autoplay="" muted={true} loop={true} controls={true}>
              <source src="https://cdn.printnanny.ai/www/demo-video-2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="col col--4">
            <div className="hero__featurelist">
              {headerList}

            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--danger button--lg"
                to="/docs/category/quick-start">
                Install to Raspberry Pi  - 15min ⏱️
              </Link>
            </div>
            <p>Free 30-day trial. Money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Install to Raspberry Pi`}
      description="PrintNanny is your personal assistant for 3D printing.>">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
