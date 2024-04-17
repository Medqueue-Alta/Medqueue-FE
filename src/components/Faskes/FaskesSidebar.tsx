import Logo from "@/assets/logo-medqueue-2.png"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface Props {
    children: ReactNode
}

const FaskesSidebar = (props: Props) => {
  const {children} = props
  return (
    <div className="bg-[#089993] h-screen w-[20%]">
      <Link to={"/"}>
        <div className="grid grid-cols-1 justify-items-center mt-10 cursor-pointer">
            <img src={Logo}/>
            <h1 className="text-white text-3xl">Medqueue</h1>
        </div>
      </Link>
        <nav className="h-[50%] mt-5">
            {children}
        </nav>
    </div>
  )
}

export default FaskesSidebar
