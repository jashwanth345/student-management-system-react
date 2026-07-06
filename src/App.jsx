import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routing } from './routing/routing'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
        <div><Toaster/></div>
        <RouterProvider router={routing}/>
    </>
  )
}
export default App