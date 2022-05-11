
import {useState} from 'react';
import {AiFillPlayCircle} from "react-icons/ai";
import {SiEthereum} from "react-icons/si";
import React, {useContext} from "react";
import { TransactionContext } from "../context/TransactionContext";
import {Loader} from './';

const Welcome = () => {
    
    //We receive the connectWallet from TransactionContext
    const {currentAccount, connectWallet, formData, setFormData, handleChange} = useContext(TransactionContext);

    /*const connectWallet = () => {
        alert('Clicou');
    }*/

    const handleSubmit = ()=> {

    }
    

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
                     
                    {!currentAccount &&
                     ( <button 
                     type='button'
                     onClick={connectWallet}
                     className='flex flex-row justify-center items-center my-5 bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-500'
                     >

                         <p className='text-white text-base font-semibold'>Connect Wallet</p>
                         </button>})

                </div>
                
                </div>
                </div>
    );
}

export default Welcome;