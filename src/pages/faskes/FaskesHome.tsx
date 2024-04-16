import FaskesLayout from "@/components/FaskesLayout"
import FaskesSidebar from "@/components/FaskesSidebar"
import Vector from "@/assets/vector.png"
import { Link, useNavigate } from "react-router-dom"
import { Separator } from "@/components/ui/separator"

const FaskesHome = () => {
    const navigate = useNavigate()
  return (
   <FaskesLayout>
        <FaskesSidebar>
        <ul className="flex flex-col justify-center pl-5 h-full gap-2">
            <Link to={"/faskes/antrian/1"}>
                <div className="cursor-pointer p-2 max-w-[90%] rounded-lg">
                    <li className="text-white text-xl">List Antrian</li>
                </div>
            </Link>
            <Link to={"/faskes/jadwal/1"}>
                <div className="cursor-pointer p-2 max-w-[90%] rounded-lg">
                    <li className="text-white text-xl ">Setting Jadwal</li>
                </div>
            </Link>
            <Separator />
            <div className="cursor-pointer p-2 max-w-[90%] rounded-lg" onClick={() => {
                localStorage.clear()
                navigate("/login")
            }}>
                <li className="text-white text-xl hover:text-red-500 duration-500">Logout</li>
            </div>
        </ul>
        </FaskesSidebar>
        <div className="ml-5">
            <h1 className="text-4xl">WELCOME</h1>
            <h3 className="text-xl">02, April 2024</h3>
            <img src={Vector}/>
        </div>
   </FaskesLayout>
  )
}

export default FaskesHome
