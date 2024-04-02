import FaskesLayout from "@/components/FaskesLayout"
import FaskesSidebar from "@/components/FaskesSidebar"
import Vector from "@/assets/vector.png"

const FaskesHome = () => {
  return (
   <FaskesLayout>
        <FaskesSidebar>
        <ul className="flex flex-col justify-center pl-5 h-full gap-2">
            <div className="cursor-pointer p-2 max-w-[90%] rounded-lg">
                <li className="text-white text-2xl">List Antrian</li>
            </div>
            <div className="cursor-pointer p-2 max-w-[90%] rounded-lg">
                <li className="text-white text-2xl ">Setting Jadwal</li>
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
