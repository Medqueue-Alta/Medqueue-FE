import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    title?: string;
}

const FaskesContainer = (props: Props) => {
    const {children,title} = props
  return (
    <div className="flex justify-center items-center w-full">
        <div className="bg-[#92DBD8] h-[70%] w-[90%] ">
            <div className="h-[15%] flex items-center justify-center">
                <h1 className="text-2xl">{title}</h1>
            </div>
            <div className="bg-[#BEE8E6] h-full max-h-screen w-full flex justify-center">
                {children}
            </div>
        </div>
    </div>
  )
}

export default FaskesContainer
