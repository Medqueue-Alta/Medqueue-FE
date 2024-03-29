import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
