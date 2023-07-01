//eth-sepolia.g.alchemy.com/v2/TgUllzpMlkmWjOZaURSDvxEBr9A_-kWn
require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
const { config: dotEnvConfig } = require("dotenv");
dotEnvConfig();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/TgUllzpMlkmWjOZaURSDvxEBr9A_-kWn",
      accounts: [`0x${process.env.SEPOLIA_PRIVATE_KEY}`],
    },
  },
};
