
import React from 'react';
import NFTCard from './NFTCard';
import './App.css';

export const NFTContainer = ({nfts}) => {

    
  return (
<div class="grid gap-20 grid-cols-3 grid-rows-3">

    {
        nfts.map((nft,index) => {
                return <NFTCard nft={nft} key={index}/>
            })}
        
    

    </div>
  )
}
export default NFTContainer;

