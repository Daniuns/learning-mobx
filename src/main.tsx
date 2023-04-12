import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StoreContext, store } from './Mobx/store'

console.log(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
)
