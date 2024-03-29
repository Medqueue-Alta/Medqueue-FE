import { ReactNode } from "react"
import Logo from "@/assets/logo-medqueue-2.png"

interface Props {
    children : ReactNode
}

const FaskesLayout = (props: Props) => {
    const {children} = props
  return (
    <div className="flex items-center">
      <div className="bg-[#089993] h-screen w-[20%]">
        <div className="grid grid-cols-1  justify-items-center mt-10">
          <img src={Logo}/>
          <h1 className="text-white text-3xl">Medqueue</h1>
        </div>
      </div>
      <div>
      {children}
      </div>
    </div>
  )
}

export default FaskesLayout
