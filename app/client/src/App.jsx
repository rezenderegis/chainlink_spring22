import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Loader, Welcome, Footer, Transactions, Services,Navbar} from './components';
const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome"> 
      <Navbar/>
      <Welcome/>
      </div>
      
    </div>
  )
}
/**
 * 
 
<Services/>
      <Transactions/>
      <Footer/>
 */

export default App
