import MainButton from '@/components/MainButton'
import AuthLayout from '@/components/authLayout'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Login = () => {
  return (
    <AuthLayout className='h-screen'>
        <h1 className="text-2xl mt-2">Login</h1>
        <div className="w-full p-10">
            <div className="mb-3">
                <Label htmlFor='email'>Email</Label>
                <Input placeholder='Email' type='email'/>
            </div>
            <div className="mb-3">
                <Label htmlFor='password'>Password</Label>
                <Input placeholder='Password' type='password'/>
            </div>
            <div className='text-center'>
                <MainButton text='Login'/>
            </div>
        </div>
    </AuthLayout>
  )
}

export default Login
