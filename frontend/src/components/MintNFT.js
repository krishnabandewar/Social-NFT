import React, { useState } from 'react';
import { ethers } from 'ethers';
import SocialIdentityNFT from '../artifacts/contracts/SocialIdentityNFT.sol/SocialIdentityNFT.json';

const MintNFT = ({ userData }) => {
  const [minted, setMinted] = useState(false);
  const [minting, setMinting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const contractAddress = '0x14067702175eA804A3e76C12611719A481ef1dc3';

  const mintNFT = async () => {
    try {
      setMinting(true);
      if (!window.ethereum) return alert('MetaMask is not installed');
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, SocialIdentityNFT.abi, signer);

      const metadata = {
        name: userData.name,
        description: userData.description,
        image: userData.image,
      };

      const tokenURI = 'data:application/json;base64,' + btoa(JSON.stringify(metadata));
      const tx = await contract.mintNFT(await signer.getAddress(), tokenURI);
      await tx.wait();
      setMinted(true);
    } catch (error) {
      console.error('Error minting NFT:', error);
      alert('Failed to mint NFT. See console for details.');
    } finally {
      setMinting(false);
    }
  };

  return (
    <div className="mint-container">
      {!minted ? (
        <>
          <button 
            className="preview-button"
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? (
              <>
                <span>👁️ Hide Preview</span>
              </>
            ) : (
              <>
                <span>👁️ Preview NFT</span>
              </>
            )}
          </button>
          
          {showPreview && (
            <div className="nft-preview">
              <img src={userData.image} alt="NFT Preview" />
              <div className="preview-details">
                <h3>{userData.name}</h3>
                <p>Unique Social Identity Token</p>
                <div className="preview-stats">
                  <span>Platform: Facebook</span>
                  <span>Created: {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          )}
          
          <button 
            className="cta-button mint-button" 
            onClick={mintNFT}
            disabled={minting}
          >
            {minting ? (
              <>
                <span className="spinner"></span>
                Minting...
              </>
            ) : (
              'Create Your NFT'
            )}
          </button>
        </>
      ) : (
        <div className="success-message">
          <span className="success-icon">✨</span>
          <p>NFT Minted Successfully!</p>
        </div>
      )}
    </div>
  );
};

export default MintNFT;