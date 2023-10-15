import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from '@/router'
import '@/assets/style/App.css'

const App: React.FC = () => {
  console.log('App 被加载')
  return (
    <RouterProvider 
      router={routes} 
    />
  )
}
export default App;