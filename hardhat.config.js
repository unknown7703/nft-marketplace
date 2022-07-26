require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "60ce19731d27397fb123f286aabbc1b5ce2df46d";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/v1/${projectId}",
      accounts: [privateKey],
    },
    mainnet: {
      url: "https://rpc-mainnet.maticvigil.com/v1/${projectId}",
      accounts: [privateKey],
    },
  },
  solidity: "0.8.9",
};
