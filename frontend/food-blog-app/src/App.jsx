import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import MainNavigation from "./components/MainNavigation.jsx";
const router = createBrowserRouter([
  {path:'/',element:<MainNavigation/>,children:[
      {path:'/',element:<Home/>},
  ]}
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
