import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: 'http://127.0.0.1:8545',
      accounts: [
        '0xeec57eccd19e26cd6a27fb6c984fefcda19889025133b63be32d5a09871e53cb',
      ]
    }
  }
};

export default config;
