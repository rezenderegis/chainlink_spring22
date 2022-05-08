/*
import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

//import {contractAbi, contractAdress} from '../utils/constants'; 

//Export this contant. Same filename
export const TransactionContext = React.createContext();

//To access the wallet we need ethereum object. Delegate him a window
const {ethereum} = window;

//Create this const. We'll need a provider
const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
   // const transactionContract = new ethers.Contract(contractAdress,contractAbi,signer);
    console.log(
        provider,
        signer
        //,transactionContract
    );
}

//This information could be use in other components. In this case we will use on Welcome component.
export const TransactionProvider = ({children}) => {
    return (
        <TransactionContext.Provider value={{value: 'test'}}>
            {children}
            </TransactionContext.Provider>
    )
}
*/

import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers';

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
    return (
        <TransactionContext.Provider value={{value: 'test'}}>
            {children}
        </TransactionContext.Provider>
    )

}