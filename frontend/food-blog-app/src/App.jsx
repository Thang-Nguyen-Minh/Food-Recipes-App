import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
const router = createBrowserRouter([
  {path:'/',element:<Home/>},
])
function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
