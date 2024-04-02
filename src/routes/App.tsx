import AddFaskesSchedule from '@/pages/AddFaskesSchedule'
import FaskesHome from '@/pages/FaskesHome'
import FaskesQueue from '@/pages/FaskesQueue'
import FaskesSchedule from '@/pages/FaskesSchedule'
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
  },
  {
    path: "/",
    element: <FaskesHome />
  }, 
  {
    path: "/faskes/antrian/:poli",
    element: <FaskesQueue />
  }, 
  {
    path: "/faskes/jadwal/:poli",
    element: <FaskesSchedule />
  },
  {
    path: "/faskes/jadwal/add",
    element: <AddFaskesSchedule />
  }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
