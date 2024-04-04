import MainButton from '@/components/MainButton'
import AuthLayout from '@/components/authLayout'
import { Input } from '@/components/ui/input'
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginSchema, loginSchema } from "@/utils/api/auth/type"
import { Form } from "@/components/ui/form"
import { toast } from "sonner"
import { userLogin } from "@/utils/api/auth/api"
import { useNavigate } from "react-router-dom"
import { CustomFormField } from "@/components/CustomFormField"

const Login = () => {
  const navigate = useNavigate()
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
        email: "",
        password: "",
    }
  })
  const login = async (body: LoginSchema) => {
    try {
        const response = await userLogin(body)
        toast(response.message)
        localStorage.setItem("token",response.data.token)
        navigate("/")
    } catch (error) {
        toast((error as Error).message)
    }
  }
  return (
    <AuthLayout className='h-screen'>
        <h1 className="text-2xl mt-2">Login</h1>
        <div className="w-full p-10">
            <Form {...form}>
              <form action="" onSubmit={form.handleSubmit(login)}>
                <div className="mb-3">
                    <CustomFormField
                        control={form.control}
                        label="Email"
                        name="email"
                    >
                        {(field) => (
                            <Input
                                {...field} 
                                placeholder="Email"
                                aria-disabled={form.formState.isSubmitting}
                                disabled={form.formState.isSubmitting}
                                value={field.value as string}
                                type='email'
                            />
                        )}
                    </CustomFormField>
                </div>
                <div className="mb-3">
                    <CustomFormField
                        control={form.control}
                        label="Password"
                        name="password"
                    >
                        {(field) => (
                            <Input
                            {...field} 
                              placeholder="Password"
                              aria-disabled={form.formState.isSubmitting}
                              disabled={form.formState.isSubmitting}
                              value={field.value as string}
                              type='password'
                            />
                        )}
                    </CustomFormField>
                </div>
                <div className='text-center'>
                    <MainButton text='Login' type='submit'/>
                </div>
              </form>
            </Form>
        </div>
    </AuthLayout>
  )
}

export default Login