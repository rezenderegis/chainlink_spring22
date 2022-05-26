import React from 'react';
import './App.css';
import {useState} from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
//To create the bases just write raf and will complete automaticly

export const NFTCard = ({nft}) => {
  return (
<section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={nft.meta.content[0].url}/>
        </div>
      </div>
      
    </div>
  </div>
</section>



  )
}

export default NFTCard;