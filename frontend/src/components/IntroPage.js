import React from 'react';
import './styles.css';

const IntroPage = ({ onGetStarted }) => {
  return (
    <div className="intro-container">
      <div className="intro-hero">
        <h1 className="intro-title">
          Transform Your Social Media Presence into
          <span className="gradient-text"> Digital Legacy</span>
        </h1>
        <p className="intro-subtitle">
          DigiPersona turns your social media identity into unique, blockchain-verified digital collectibles. 
          Own your online presence in the form of exclusive NFTs that represent your digital journey.
        </p>
        <button className="cta-button" onClick={onGetStarted}>
          Start Your Digital Journey
        </button>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Unique Digital Identity</h3>
          <p>Each NFT is uniquely generated based on your social media presence, creating a one-of-a-kind digital asset that represents your online personality</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔗</div>
          <h3>Blockchain Security</h3>
          <p>Your digital identity is secured by Ethereum blockchain technology, ensuring permanent and verifiable ownership of your social NFTs</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3>Social Integration</h3>
          <p>Seamless connection with major social platforms, allowing you to transform your social presence into valuable digital assets</p>
        </div>
      </div>

      <div className="benefits-section">
        <h2 className="section-title">Why Choose DigiPersona?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>🔐 True Ownership</h3>
            <p>Take complete control of your digital identity with blockchain-verified ownership</p>
          </div>
          <div className="benefit-card">
            <h3>💎 Future Value</h3>
            <p>Your social presence becomes a unique digital asset with potential future value</p>
          </div>
          <div className="benefit-card">
            <h3>🎯 Easy to Use</h3>
            <p>Simple three-step process to create your digital identity NFT</p>
          </div>
          <div className="benefit-card">
            <h3>🛡️ Privacy First</h3>
            <p>You control what aspects of your social identity to tokenize</p>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Connect Your Wallet</h3>
            <p>Link your MetaMask wallet to get started with the minting process</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Link Social Media</h3>
            <p>Connect your social media accounts to generate your unique digital identity</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Mint Your NFT</h3>
            <p>Create and receive your unique social identity NFT on the blockchain</p>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What is DigiPersona?</h3>
            <p>DigiPersona is a platform that converts your social media presence into unique NFTs, creating a permanent digital representation of your online identity on the blockchain.</p>
          </div>
          <div className="faq-item">
            <h3>How does it work?</h3>
            <p>Simply connect your wallet, link your social media accounts, and mint your NFT. Our smart contracts handle the rest, creating a unique digital asset that represents your social identity.</p>
          </div>
          <div className="faq-item">
            <h3>Is my data secure?</h3>
            <p>Yes! We only access the public information you choose to share, and all transactions are secured by the Ethereum blockchain.</p>
          </div>
          <div className="faq-item">
            <h3>What can I do with my NFT?</h3>
            <p>Your NFT represents your digital identity and can be held as a collectible, traded on NFT marketplaces, or used as proof of your social media presence.</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Create Your Digital Identity?</h2>
        <p>Join the future of digital identity and social presence</p>
        <button className="cta-button" onClick={onGetStarted}>
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default IntroPage;