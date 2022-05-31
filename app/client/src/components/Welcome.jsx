import {AiFillPlayCircle} from "react-icons/ai";
import {SiEthereum} from "react-icons/si";
import React, {useContext, useState, useEffect} from "react";
import { TransactionContext } from "../context/TransactionContext";
import {Loader} from './';
import NFTContainer from './NFTContainer';

const Welcome = () => {
    
    //We receive the connectWallet from TransactionContext

    const [getWalletAddress, setWalletAddress] = useState(null);

    const [nfts, setNfts] = useState([])

    const connectWallet = async () => {

        //Exactly the code of Metamask Documentation 
        //https://docs.metamask.io/guide/getting-started.html#basic-considerations

        if (typeof window.ethereum !== 'undefined') {
    
          /*
          1 - We have the accounts. Now we need to save.
          */
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    
          //3 - Set the first account
          setWalletAddress(accounts[0]);
          
        }
    
      }

    const getNftData = async () => {

        if (!getWalletAddress) return;
    
        //https://api.rarible.org/v0.1/doc#operation/getItemsByOwnerWithOwnership
    
        const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${getWalletAddress}`);    
    
        const data = await response.json();
    
        setNfts(data.items)
             
      }
   
      useEffect(() => {
        getNftData()
      }, [getWalletAddress])
    
    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex md:flex-row flex-col items-star justify-between me:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col md:mr-10'>
                    <h1 className='text=3x1 sm:text-5x1 text-white text-gradient py-1'>
                    Show all your reeipts and NFTs 
                    in the same place!
                        </h1>
                     <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>

                        The best way to see your wallet!

                     </p>

                     <button 
                     type='button'
                     onClick={connectWallet}
                     className='flex flex-row justify-center items-center my-5 bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-500'
                     >

                         <p className='text-white text-base font-semibold'>Connect Wallet</p>
                         </button>

                        
                         <NFTContainer nfts={nfts} />


                </div>
                
                </div>
                </div>
    );
}

export default Welcome;