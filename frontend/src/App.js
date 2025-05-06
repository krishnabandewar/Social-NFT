import React, { useState, useEffect, useCallback } from 'react';
import IntroPage from './components/IntroPage';
import FacebookLoginButton from './components/FacebookLoginButton';
import MintNFT from './components/MintNFT';
import NFTDisplay from './components/NFTDisplay';
import './components/styles.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [currentPage, setCurrentPage] = useState('intro');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance for navigation
  const minSwipeDistance = 50;

  const handleBack = useCallback(() => {
    if (currentPage === 'mint') {
      setCurrentPage('connect');
      setUserData(null);
    } else if (currentPage === 'connect') {
      setCurrentPage('intro');
    }
  }, [currentPage]);

  const handleTitleClick = () => {
    setCurrentPage('intro');
    setUserData(null);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isRightSwipe) {
      handleBack();
    }
  };

  return (
    <div 
      className="app-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <header className="app-header">
        <h1 onClick={handleTitleClick}>DigiPersona</h1>
      </header>

      <main className="app-main">
        {currentPage === 'intro' ? (
          <IntroPage onGetStarted={() => setCurrentPage('connect')} />
        ) : currentPage === 'connect' ? (
          <div className="hero-section">
            <h2>Create Your Social NFT</h2>
            <p className="hero-text">Connect your social media account to mint your unique digital identity</p>
            <FacebookLoginButton setUserData={(data) => {
              setUserData(data);
              setCurrentPage('mint');
            }} />
          </div>
        ) : (
          <div className="content-wrapper">
            <div className="mint-section">
              <h2>Create Your NFT</h2>
              <MintNFT userData={userData} />
            </div>
            <div className="nft-display-section">
              <NFTDisplay />
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>© 2025 DigiPersona</p>
      </footer>
    </div>
  );
}

export default App;