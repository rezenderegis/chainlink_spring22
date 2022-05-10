import { ethers } from 'ethers';
import React, {useEffect, useState} from 'react';

import { constractAbi, contractAdress } from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;
const getEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAdress, constractAbi, signer);

    console.log({
        provider,
        signer,
        transactionContract 

    });
}

export const TransactionProvider = ({children}) =>{

    const[currentAccount, setCurrentAccount] = useState("");

    const checkWalletConnection = async () => {
        
        try {
        if (!ethereum) return alert("Check if Metamask is installed");

        const accounts = await ethereum.request({method: 'eth_accounts'});

        if(accounts.length){
            setCurrentAccount(accounts[0]);
        } else{
            console.log('No accounts found');
        }
       

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
            
        }
    }

    useEffect(() => {
        checkWalletConnection();

    }, [])

    //Function connect browser to metamask
    const connectWallet = async () => {
        
        try {
            
            //Check ethereum object exist. Make request to accounts
            if (!ethereum) return alert ("Please, connect Metamask");
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            
            //Get first account selected
            //This method is setState. We will need create state field
            setCurrentAccount(accounts[0]);
            
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        } 
    }

    return (
        <TransactionContext.Provider value={{connectWallet}}>
            {children}
        </TransactionContext.Provider>
    );

};
