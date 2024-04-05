import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'

import AddFaskesSchedule from '@/pages/faskes/AddFaskesSchedule'
import FaskesHome from '@/pages/faskes/FaskesHome'
import FaskesQueue from '@/pages/faskes/FaskesQueue'
import FaskesSchedule from '@/pages/faskes/FaskesSchedule'

import PatientHome from '@/pages/Patient'
import PatientReservation from '@/pages/Patient/reservasi'
import UpdateProfile from '@/pages/Patient/update-profile'
import ProtectedRoutes from './ProtectedRoutes'

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <FaskesHome />,
      },
      {
        path: "/faskes/antrian/:poli",
        element: <FaskesQueue />,
      },
      {
        path: "/faskes/jadwal/:poli",
        element: <FaskesSchedule />,
      },
      {
        path: "/faskes/jadwal/add",
        element: <AddFaskesSchedule />,
      },
      {
        path: "/pasien/home",
        element: <PatientHome />,
      },
      {
        path: "/pasien/reservasi",
        element: <PatientReservation />,
      },
      {
        path: "/pasien/update-profile",
        element: <UpdateProfile />,
      },
    ]
  }
]);

function App() {

  return <RouterProvider router={router}/>
}

export default App
