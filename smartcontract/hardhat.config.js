require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
/*
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
*/
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//
module.exports = {
  solidity: "0.8.13",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/DDF4FSnu_ZbCUsFEIIknZc9G5JD8tNvB',
      accounts: ['439856f98c5e94bc491ac25fa0395a2d65a4730beaa077e80f9c629450904248']
    }
  }
};
