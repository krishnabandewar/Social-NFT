<<<<<<< HEAD
# Social-NFT
=======
# auto-social-nft

This project is a decentralized application (dApp) that allows users to create and manage social identity NFTs. It consists of a backend built with Solidity and Hardhat for smart contract development, and a frontend developed with React.

## Project Structure

- **backend/**: Contains the smart contract and deployment scripts.
  - **contracts/**: Holds the Solidity smart contract files.
  - **scripts/**: Contains deployment scripts for the smart contracts.
  - **test/**: Includes test files for the smart contracts.
  - **hardhat.config.js**: Configuration file for Hardhat.
  - **package.json**: Lists backend dependencies.

- **frontend/**: Contains the React application.
  - **src/**: Source files for the React application.
    - **components/**: Contains React components for the application.
  - **.env**: Environment variables for the frontend application.
  - **tsconfig.json**: TypeScript configuration file.
  - **package.json**: Lists frontend dependencies.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd auto-social-nft
   ```

2. **Set up the backend**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Deploy the smart contract:
     ```bash
     npx hardhat run scripts/deploy.js
     ```

3. **Set up the frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
>>>>>>> faa6863 (Initial commit)
