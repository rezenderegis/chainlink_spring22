
import React from 'react';
import NFTCard from './NFTCard';

export const NFTContainer = ({nfts}) => {

    
  return (
<div className="grid gap-20 grid-cols-3 grid-rows-3">

    {
        nfts.map((nft,index) => {
                return <NFTCard nft={nft} key={index}/>
            })}
        
    

    </div>
  )
}
export default NFTContainer;

