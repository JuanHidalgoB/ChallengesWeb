import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MyFirstApp from './MyFirstApp'
import Counter from './Counter'
import { GifExpertApp } from './GifExpertApp'
import { MultipleCustomHooks } from './components/MultipleCustomHooks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <MultipleCustomHooks/>
  </React.StrictMode>,
)
