import { ethers } from 'ethers';
import React, {useEffect, useState} from 'react';

export const TransactionContext = React.createContext();

export const TransactionProvider = ({children}) =>{

    return (
       
        <TransactionContext.Provider value={{ }}>
            
            {children}
        </TransactionContext.Provider>
    );

};
