// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const profileImageMinterFactory = await hre.ethers.getContractFactory("profileImageMinterFactory");
  const profileImageContract = await profileImageMinterFactory.deploy("Hello, Hardhat!");

  await profileImageContract.deployed();

  console.log("Profile image Minter deployed to:", profileImageContract.address);
}
;async () => {
  try {
    await main()
  }catch (error) {
    console.error(error)
    process.exit(1)
  }
}