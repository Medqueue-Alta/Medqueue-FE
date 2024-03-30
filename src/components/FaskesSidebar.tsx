import Logo from "@/assets/logo-medqueue-2.png"

interface Props {
    nav: string[]
}

const FaskesSidebar = (props: Props) => {
  const {nav} = props
  return (
    <div className="bg-[#089993] h-screen w-[20%]">
        <div className="grid grid-cols-1 justify-items-center mt-10">
            <img src={Logo}/>
            <h1 className="text-white text-3xl">Medqueue</h1>
        </div>
        <nav className="flex flex-cols justify-center items-center h-[60%]">
          <ul>
            {nav.map((item) => (
              <li className="text-2xl text-white mb-8 cursor-pointer">{item}</li>
            ))}
          </ul>
        </nav>
    </div>
  )
}

export default FaskesSidebar
