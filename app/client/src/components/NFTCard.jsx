import React from 'react';
import './App.css';
import {useState} from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
//To create the bases just write raf and will complete automaticly

export const NFTCard = ({nft}) => {
  return (
<section class="overflow-hidden text-gray-700">
    <div class="flex flex-wrap -m-e md:-m-2">
      
      <div class="flex flex-wrap w-3/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src={nft.meta.content[0].url}/>
       
        </div>
      </div>
      
      
    </div>

</section>



  )
}

export default NFTCard;