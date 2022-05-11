import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import {TransactionProvider} from './context/TransactionContext';
/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
)


/*
ReactDOM.render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
)*/