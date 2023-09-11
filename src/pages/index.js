import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {siteConfig.tagline}
        </h1>
        <p className="hero__subtitle">
          At the Open Language Foundation, we stand united in our mission to revolutionize the localization industry, making global communication across diverse cultures and languages more accessible and seamless.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/manifesto">
            Read the manifesto
          </Link>
        </div>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <section className="padding-vert--xl bg--secondary">
      <div className="container">
        <h2>Join Us in Transforming the World</h2>
        <p>Our commitment to these values guides us as we pave the way for a more interconnected and harmonious global community. At the Open Language Foundation, we celebrate diversity, inclusivity, and the limitless potential of technology to transcend linguistic and cultural boundaries. </p>
        <p>
          Together, we can make global communication accessible to all. Join us on this exciting journey, and let's shape the future of localization and internationalization.
        </p>
        <p>
          Together, we speak the language of the world.
        </p>
        <p>
          Join Us to be a part of the change.
        </p>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { name: "Collaborative Ecosystem", description: "Connect with like-minded individuals, experts, and developers to work on groundbreaking projects." },
    { name: "Cutting-Edge Technology", description: "Access open-source tools and resources that drive innovation in localization and internationalization." },
    { name: "Knowledge Hub", description: "Dive into a wealth of knowledge, insights, and best practices to excel in your localization efforts." },
    { name: "Networking Opportunities", description: "Build valuable connections and partnerships within the localization and internationalization community." },
    { name: "Advocacy and Influence", description: "Join us in advocating for industry standards and best practices that benefit everyone." },
  ]
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <h2>What We Offer</h2>
        <div className="row">
          {features.map(feature =>
            <div className="col col--4">
              <h4>{feature.name}</h4>
              <p className="margin-bottom--lg">{feature.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="padding-vert--xl bg--secondary">
      <div className="container">
        <h2>
          Join the Open Language Foundation Today
        </h2>
        <p>
          Embrace the future of global communication. Be a part of the Open Language Foundation and help us shape a world where language is no longer a barrier.
        </p>
        <p>
          Join Us to make a difference today. Together, we can change the way the world communicates.
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}
    >
      <HomepageHeader />
      <Intro />
      <Features />
      <CallToAction />
    </Layout>
  );
}
