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

    /*const connectWallet = () => {
        alert('Clicou');
    }*/


    const connectWallet = async () => {

        //Exactly the code of Metamask Documentation 
        //https://docs.metamask.io/guide/getting-started.html#basic-considerations
        if (typeof window.ethereum !== 'undefined') {
    
          /*1 - We have the accounts. Now we need to save.
          Using use State
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
       // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0xB7f9E960b89a7a96f41A7555Ec57aaB4bc3b85ca`);
    
       // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x60f80121c31a0d46b5279700f9df786054aa5ee5`);
    
        const data = await response.json();
    
        setNfts(data.items)
    
        //debugger
         
      }
   
      useEffect(() => {
        getNftData()
      }, [getWalletAddress])
    
    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex md:flex-row flex-col items-star justify-between me:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col md:mr-10'>
                    <h1 className='text=3x1 sm:text-5x1 text-white text-gradient py-1'>
                    Show all your reeipts <br/> 
                    same place!
                        </h1>
                     <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>

                        Have all your rerceits in the same place! 
                        Reliable receips.

                     </p>

                     <button 
                     type='button'
                     onClick={connectWallet}
                     className='flex flex-row justify-center items-center my-5 bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-500'
                     >

                         <p className='text-white text-base font-semibold'>Connect Wallet</p>
                         </button>

                         <button 
                     type='button'
                     onClick={getNftData}
                     className='flex flex-row justify-center items-center my-5 bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-500'
                     >

                         <p className='text-white text-base font-semibold'>My Receipts</p>
                         </button>
                         <NFTContainer nfts={nfts} />


                </div>
                
                </div>
                </div>
    );
}

export default Welcome;