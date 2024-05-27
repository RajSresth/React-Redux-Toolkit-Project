import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import accountSlice from './slices/accountSlice.js'
import bonusSlice from './slices/bonusSlice.js'
import { Provider } from 'react-redux'


const store = configureStore({
  reducer: {
    account: accountSlice,
    bonus:bonusSlice
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
  </React.StrictMode>,
)
