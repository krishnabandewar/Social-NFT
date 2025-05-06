import React, { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import SocialIdentityNFT from '../artifacts/contracts/SocialIdentityNFT.sol/SocialIdentityNFT.json';

const NFTDisplay = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const contractAddress = '0x14067702175eA804A3e76C12611719A481ef1dc3';

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('MetaMask is not installed');
        return false;
      }

      // Prevent multiple simultaneous connection attempts
      if (connecting) return false;
      setConnecting(true);

      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        
        if (accounts.length > 0) {
          setConnected(true);
          return true;
        }
        return false;
      } catch (error) {
        if (error.code === 4001) {
          // User rejected request
          alert('Please connect your wallet to continue');
        } else if (error.code === -32002) {
          // Request already pending
          alert('Please check MetaMask to complete connection');
        } else {
          console.error('Error connecting wallet:', error);
          alert('Failed to connect wallet');
        }
        return false;
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      return false;
    } finally {
      setConnecting(false);
    }
  };

  const fetchNFTs = useCallback(async () => {
    try {
      const isConnected = await connectWallet();
      if (!isConnected) return;

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, SocialIdentityNFT.abi, signer);
      
      const address = await signer.getAddress();
      const balance = await contract.balanceOf(address);
      const nftArray = [];

      if (balance > 0) {
        const filter = contract.filters.Transfer(null, address);
        const events = await contract.queryFilter(filter);
        
        for (const event of events) {
          const tokenId = event.args.tokenId;
          try {
            const currentOwner = await contract.ownerOf(tokenId);
            if (currentOwner.toLowerCase() === address.toLowerCase()) {
              const tokenURI = await contract.tokenURI(tokenId);
              const metadata = JSON.parse(atob(tokenURI.split(',')[1]));
              nftArray.push({
                id: tokenId,
                ...metadata
              });
            }
          } catch (error) {
            console.error(`Error processing token ${tokenId}:`, error);
          }
        }
      }

      setNfts(nftArray);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    } finally {
      setLoading(false);
    }
  }, [contractAddress]);

  const shareNFT = async (nft) => {
    try {
      const shareData = {
        title: 'Check out my Social Identity NFT!',
        text: `I just minted my social identity as an NFT on DigiPersona - ${nft.name}`,
        url: window.location.href
      };
      
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
        window.open(shareUrl, '_blank');
      }
    } catch (error) {
      console.error('Error sharing NFT:', error);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, [fetchNFTs]);

  if (!connected) {
    return (
      <div className="connect-container">
        <h2 className="connect-title">Connect Your Wallet</h2>
        <p className="connect-desc">Connect your wallet to view and manage your NFTs</p>
        <button 
          className="cta-button connect-button"
          onClick={connectWallet} 
          disabled={connecting}
        >
          {connecting ? (
            <>
              <span className="spinner"></span>
              Connecting...
            </>
          ) : (
            <>
              <span className="wallet-icon">🦊</span>
              Connect MetaMask
            </>
          )}
        </button>
      </div>
    );
  }

  if (loading) {
    return <div>Loading your NFTs...</div>;
  }

  return (
    <div>
      <h2>Your NFTs</h2>
      {nfts.length === 0 ? (
        <p>No NFTs found. Mint one to get started!</p>
      ) : (
        <div className="nft-grid">
          {nfts.map((nft) => (
            <div key={nft.id} className="nft-card">
              <img src={nft.image} alt={nft.name} />
              <h3>{nft.name}</h3>
              <p>{nft.description}</p>
              <button 
                className="share-button"
                onClick={() => shareNFT(nft)}
              >
                <span>Share NFT</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NFTDisplay;