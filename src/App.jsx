import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
