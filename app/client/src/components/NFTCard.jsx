import React from 'react';
//import './App.css';
import {useState} from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
//To create the bases just write raf and will complete automaticly .

export const NFTCard = ({nft}) => {
  return (
<section class="overflow-hidden text-gray-600">
 
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src={nft.meta.content[0].url} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{nft.meta.name}</h5>
      <p class="text-gray-700 text-base mb-4">
       Collection: {nft.collection}
      </p>
    </div>
  </div>
</div>

</section>



  )
}

export default NFTCard;