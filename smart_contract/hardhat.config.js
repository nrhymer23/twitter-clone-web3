require("@nomiclabs/hardhat-waffle");



module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/bI4BKM8BShJGOtyV-Z0LCijy0q-a0l6L',
      accounts:[
        'e59d03fefac06305ddd0c33b058272238e3260859d63d333e01092d6Odidea84',
      ],
    },
  },
};
