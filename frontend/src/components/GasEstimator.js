import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const GasEstimator = () => {
  const [gasPrice, setGasPrice] = useState(null);
  const [estimatedCost, setEstimatedCost] = useState(null);

  useEffect(() => {
    const fetchGasPrice = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const price = await provider.getGasPrice();
        setGasPrice(ethers.formatUnits(price, 'gwei'));
        
        // Estimate cost for minting (approximate gas limit: 150000)
        const estimatedGwei = price * BigInt(150000);
        setEstimatedCost(ethers.formatEther(estimatedGwei));
      } catch (error) {
        console.error('Error fetching gas price:', error);
      }
    };

    fetchGasPrice();
    const interval = setInterval(fetchGasPrice, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gas-estimator">
      <h4>Current Gas Prices</h4>
      {gasPrice && (
        <>
          <p>Gas Price: {parseFloat(gasPrice).toFixed(2)} Gwei</p>
          <p>Estimated Mint Cost: ~{parseFloat(estimatedCost).toFixed(5)} ETH</p>
        </>
      )}
    </div>
  );
};

export default GasEstimator;