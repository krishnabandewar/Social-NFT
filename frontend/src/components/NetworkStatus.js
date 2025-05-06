import React, { useState, useEffect } from 'react';

const NetworkStatus = () => {
  const [network, setNetwork] = useState(null);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(true);

  useEffect(() => {
    const checkNetwork = async () => {
      if (window.ethereum) {
        try {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          const networkName = getNetworkName(chainId);
          setNetwork(networkName);
          setIsCorrectNetwork(chainId === '0xaa36a7'); // Sepolia network
        } catch (error) {
          console.error('Error checking network:', error);
        }
      }
    };

    checkNetwork();
    window.ethereum?.on('chainChanged', checkNetwork);

    return () => {
      window.ethereum?.removeListener('chainChanged', checkNetwork);
    };
  }, []);

  const getNetworkName = (chainId) => {
    const networks = {
      '0x1': 'Ethereum Mainnet',
      '0xaa36a7': 'Sepolia',
      '0x5': 'Goerli'
    };
    return networks[chainId] || 'Unknown Network';
  };

  return (
    <div className={`network-status ${isCorrectNetwork ? 'correct' : 'wrong'}`}>
      <span className="network-indicator"></span>
      {network ? 
        `Connected to ${network}` : 
        'Not connected to any network'}
      {!isCorrectNetwork && 
        <p className="network-warning">Please connect to Sepolia network</p>
      }
    </div>
  );
};

export default NetworkStatus;