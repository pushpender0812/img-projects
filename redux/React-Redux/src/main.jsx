import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Accountreducer } from './reducers/account.js'
import { Bonusreducer } from './reducers/bonus.js'
import logger from 'redux-logger'
import  {thunk}  from 'redux-thunk'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/accountSlice.js'
import bonusReducer from './slices/bonusSlice.js'
import rewardReducer from './reducers/reward.js'
import { adminApi } from './api/adminSlice.js'


// const store = createStore(
//   combineReducers({
//     account:Accountreducer,
//     bonus:Bonusreducer
//   }),
//   applyMiddleware(logger,thunk)
// )

const store = configureStore({
  reducer:{
    account:accountReducer,
    bonus:bonusReducer,
    reward:rewardReducer,
    [adminApi.reducerPath]:adminApi.reducer
  },
  middleware:(getDefaultMiddleware) => 
      getDefaultMiddleware().concat(adminApi.middleware),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
)
