import { ReactNode } from 'react'
import { Card, CardContent } from './ui/card'
import Vector from "@/assets/vector.png"

interface Props {
  children : ReactNode
}

const AuthLayout = (props : Props) => {
  const {children} = props
  return (
    <div className='flex bg-[#92DBD8] items-center justify-center'>
      <Card className='max-w-[80%] bg-opacity-30 shadow-lg backdrop-blur-xl bg-white border-none'>
        <CardContent className='grid grid-cols-2 gap-3 h-full w-full p-0'>
          <div className="p-5 h-full w-full flex items-center">
           <img src={Vector}/>
          </div>
          <div className='bg-white h-full w-full flex flex-col justify-center items-center'>
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthLayout
