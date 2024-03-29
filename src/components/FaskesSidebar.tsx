import Logo from "@/assets/logo-medqueue-2.png"
import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

const FaskesSidebar = (props: Props) => {
  const {children} = props
  return (
    <div className="bg-[#089993] h-screen w-[20%]">
        <div className="grid grid-cols-1 justify-items-center mt-10">
            <img src={Logo}/>
            <h1 className="text-white text-3xl">Medqueue</h1>
        </div>
        <nav className="flex flex-cols justify-center items-center h-[70%]">
          {children}
        </nav>
    </div>
  )
}

export default FaskesSidebar
