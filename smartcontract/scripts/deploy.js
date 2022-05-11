const main = async () => {
  
  const trnsactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await trnsactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions deployed to:", transactionsContract.address);
}
const runMain = async() =>{

  try {

    await main();
    process.exit(0);
    
  } catch (error) {
    console.log(error)
    process.exit(1);
    
  }

}

runMain();

