# Social Identity NFT Project

A decentralized application that allows users to create NFTs based on their social media identities, starting with Facebook integration.

## Overview

This project enables users to:
- Connect their Facebook account
- Mint unique NFTs representing their social identity
- View and manage their minted NFTs
- Interact with the Ethereum blockchain

## Project Structure

```
social-nft/
├── backend/
│   ├── contracts/           # Smart contract source files
│   ├── scripts/            # Deployment and utility scripts
│   ├── test/              # Smart contract tests
│   └── hardhat.config.js   # Hardhat configuration
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── artifacts/      # Contract ABIs
    │   └── App.js         # Main application file
    ├── .env               # Environment variables
    └── package.json       # Frontend dependencies
```

## Prerequisites

- Node.js v14+ and npm
- MetaMask wallet
- Facebook Developer Account
- Git

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/krishnabandewar/Social-NFT.git
cd Social-NFT
```

2. **Setup Backend**
```bash
cd backend
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network <your-network>
```

3. **Setup Frontend**
```bash
cd frontend
npm install
```

4. **Configure Environment Variables**

Create `.env` file in frontend directory:
```env
REACT_APP_FACEBOOK_APP_ID=your_facebook_app_id
REACT_APP_CONTRACT_ADDRESS=your_deployed_contract_address
```

5. **Start Development Server**
```bash
npm start
```

## Smart Contract

The `SocialIdentityNFT` contract is deployed at:
`0x14067702175eA804A3e76C12611719A481ef1dc3`

Features:
- ERC721 compliant
- Metadata storage
- Social identity verification
- Access control

## Testing

Run the test suite:

```bash
cd backend
npx hardhat test
```

## Deployment

Frontend is configured for deployment on Vercel. Backend contracts can be deployed to any EVM-compatible network.

## Technologies Used

- **Frontend**: React.js, ethers.js, Web3
- **Backend**: Solidity, Hardhat
- **Authentication**: Facebook OAuth
- **Blockchain**: Ethereum

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

Krishna Bandewar - [@YourTwitter](https://twitter.com/yourusername)

Project Link: [https://github.com/krishnabandewar/Social-NFT](https://github.com/krishnabandewar/Social-NFT)
Project live demo: https://digipersona-nft.vercel.app/ 
