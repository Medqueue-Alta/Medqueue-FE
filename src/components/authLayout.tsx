import { ReactNode} from 'react'
import { Card, CardContent } from './ui/card'
import Vector from "@/assets/vector.png"
import Logo from "@/assets/medqueue-logo-1.png"

interface Props {
  children : ReactNode
}

const AuthLayout = (props : Props) => {
  const {children} = props
  return (
    <div className='flex bg-[#92DBD8] items-center justify-center'>
      <Card className='max-w-[80%] bg-opacity-30 shadow-lg backdrop-blur-xl bg-white border-none'>
        <CardContent className='grid md:grid-cols-2 sm:grid-cols-1 gap-3 h-full w-full p-0'>
          <div className="p-5 h-full w-full flex items-center justify-center">
            <div className='visible block md:hidden md:invisible'>
              <img src={Logo} className='mb-2'/>
              <h1 className='text-center text-xl text-white drop-shadow'>Medqueue</h1>
            </div>
           <img src={Vector} className='invisible hidden md:block md:visible'/>
          </div>
          <div className='bg-white rounded-md h-full w-full flex flex-col justify-center items-center'>
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthLayout
