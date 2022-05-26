import React from 'react';
import './App.css';

//To create the bases just write raf and will complete automaticly

export const NFTCard = ({nft}) => {
  return (
    <div className='card nft-card'>
      <img src={nft.meta.content[0].url} class="max-w-full h-auto" alt="..." />

      <div className='card content-item'>
        {nft.meta.name}
      </div>
      <div className='card content-item'>
       Address:
      </div>
      <div className='card content-item'>
        {nft.collection}
      </div>
      <div className='card content-item'>
        Contract:
      </div>
      <div className='card content-item'>
        {nft.contract}
      </div>
      <div className='card content-item'>
        ID:
      </div>
      <div className='card content-item'>
        {nft.meta.id}
      </div>
    </div>
  )
}

export default NFTCard;