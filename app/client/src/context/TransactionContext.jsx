import { ethers } from 'ethers';
import React, {useEffect, useState} from 'react';

import { constractAbi, contractAdress } from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;

//Ethereum contract
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

    //Get data from Form
    const [formData, setFormData] = useState({addresTo: '', amount: '', keyword: '', message: ''});

    //Become easyer update data.
    const handleChange = (e, name)=> {

        /*update form data
        ...prevState - Spread operator
        Send this to context object on TransactionContext.Provider
        */
        setFormData((prevState)=> ({...prevState, [name]: e.target.value}));
    }

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

    const sendTransaction = async ()=> {
        console.log('call send transaction');
        try {
            if (!ethereum) return alert("Check if Metamask is installed");

            //Getting const from formData
            const {addressTo, amount, keyword, message} = formData;

            getEthereumContract();

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
        //Sending data to screem
        //We did Welcome handleSubmit and put the sendTransaction here to receive the data. 
        <TransactionContext.Provider value={{connectWallet,  currentAccount, formData, setFormData, handleChange, sendTransaction}}>
            
            {children}
        </TransactionContext.Provider>
    );

};
