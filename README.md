# Boilerplate Smart Contract Solidity + Ganache

Install all packages
`npm install` or `yarn`

Launch ganache using 
launch command `ganache`

default port is 8545
select some private key generate
and update hardhat.config.js

```ts
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
      accounts: [''] //private wallet key use to deploie
    }
  }
};

export default config;
```

Deploie your smartcontract on your local chain:
`bash deploy.sh ganache` or `bash deploy.sh hardhat`
Note: deploy.sh check your contract test before deploie the contract. If you have some error with your test the contract could not be deployed.


Deploie without test:
`npx hardhat run deploy.ts --network [ganache | hardhat]`






