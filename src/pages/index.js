import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const registerLink = "https://forms.gle/PGwuWFgxv6KgszC46"

function Hero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title margin-bottom--lg">
          <span>Welcome to the</span><br />Open Language Foundation
        </h1>
        <p className="hero__subtitle margin-bottom--xl">
          At the Open Language Foundation, we're on a mission to revolutionize the localization industry through innovation, collaboration, and a commitment to breaking down language barriers.
        </p>
        <div className="buttons">
          <Link
            className="button button--primary button--lg margin-right--md"
            to="/manifesto">
            Read the manifesto
          </Link> 
          <Link
            className="button button--secondary button--lg"
            to={registerLink}>
            Register your interest
          </Link>
        </div>
      </div>
    </header>
  );
}

function SocialProof() {
  const logos = [
    {name: "CISCO", path: "cisco.svg"},
    {name: "Locale", path: "locale.png"},
    {name: "Alpha CRC", path: "alpha.svg"},
    {name: "Acolad", path: "acolad.png"},
    {name: "Argos Multilingual", path: "argos.png"},
    {name: "Atlassian", path: "atlassian.svg"},
  ]
  return(
    <section className="padding-vert--xl">
      <div className="container text--center">
        <h2>Our Visionary Partners</h2>
        <p className="margin-bottom--lg">We are honored to have the following visionary companies committed to signing our manifesto and supporting our mission</p>
        <div className={clsx(styles.logoGrid)}>
          {logos.map(logo =>
            <img src={`/img/logos/${logo.path}`} alt={logo.name} className="partner-logo" />
          )}
        </div>
      </div>
    </section>
  )
}

function Event() {
  return(
    <section className="padding-vert--xl bg--secondary text--center">
      <div className="container">
        <h1>Live Manifesto Signing Event</h1>
        <h2>October 10, 2023 - San Jose, CA</h2>
        <p>We're excited to announce our Manifesto Signing Event, taking place on October 10th 2023, in beautiful San Jose, California. This event will bring together key figures from prominent companies who share our vision and are committed to driving change in the localization industry.</p>
        <hr className="margin-vert--lg" />
        <div className="row text--left">
          <div class="col margin-bottom--lg">
            <h3>Network with Industry Leaders</h3>
            Connect with visionaries who are shaping the future of localization and internationalization.
          </div>
          <div class="col margin-bottom--lg">
            <h3>Learn About Our Initiatives</h3>
            Discover how you can actively contribute to our mission and be a part of something big.
          </div>
          <div class="col margin-bottom--lg">
            <h3>Sign the Manifesto</h3>
            Join us in making a public commitment to our principles and drive positive change.
          </div>
        </div>
        <hr className="margin-vert--lg" />
        <p>Be a part of this groundbreaking event. Register your interest in the Open Language Foundation and the Manifesto Signing Event now.</p>
        <div className="buttons">
          <a href={registerLink} className="button button--primary button--lg">Register Now</a>
        </div>
      </div>
    </section>
  )
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
    <section className="padding-vert--xl bg--primary text--center">
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
        <div className="buttons">
          <a href={registerLink} className="button button--primary button--lg">Join us to be part of the change</a> </div>
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
      <Hero />
      <SocialProof />
      <Event />
      <Features />
      <CallToAction />
    </Layout>
  );
}
