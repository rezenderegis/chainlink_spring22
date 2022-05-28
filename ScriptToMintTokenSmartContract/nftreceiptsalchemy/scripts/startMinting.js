//it needs a project created from alchemy to get the url - we use goerli test network https://dashboard.alchemyapi.io/
const API_URL = "https://eth-goerli.alchemyapi.io/v2/3XaocfhAigntwuUyaYW36Q_vQoX-kvwR";

//It needs to have the public key of the wallet to mint the token
const PUBLIC_KEY = ""
//It needs to have the private key of the wallet to mint the token
const PRIVATE_KEY = ""

const fs = require('fs');
const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const contract = fs.readFileSync('../xabi.json', 'utf8');
const abi = JSON.parse(contract);
const contractAddress = "0x9af243da3e765cad50ca132472a0faad87b73b01";
const nftContract = new web3.eth.Contract(abi, contractAddress);

exports.startMinting = async (walletAddress, tokenURI) => {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

  //the transaction
  const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'gas' : 5000000,
    'maxPriorityFeePerGas': 9999999987,
    'nonce' : nonce,
    'data': nftContract.methods.mintToken(walletAddress, tokenURI).encodeABI()
  };

  const signedTx =  web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signedTx.then((signedTx) => {
      web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
        if (!err) {
          console.log("The hash of your transaction is: ", hash, "\nCheck goerli etherscan the status of your transaction!"); 
          console.log(`https://goerli.etherscan.io/tx/${hash}`);
        } else {
          console.log("Something went wrong when submitting your transaction:", err)
        }
      });
    }).catch((err) => {
      console.log("Promise failed:", err);
    });
}