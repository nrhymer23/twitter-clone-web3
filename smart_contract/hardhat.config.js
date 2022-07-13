require("@nomiclabs/hardhat-waffle");



module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/bI4BKM8BShJGOtyV-Z0LCijy0q-a0l6L',
      accounts:[
        '999ba494df0a5fd6011da6490915360c47b81054c92cd257e47ddabfe9c08aca',
      ],
    },
  },
};
