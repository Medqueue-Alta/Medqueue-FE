import MainButton from '@/components/MainButton'
import AuthLayout from '@/components/authLayout'
import { Input } from '@/components/ui/input'
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginSchema, loginSchema } from "@/utils/api/auth/type"
import { Form } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { userLogin } from "@/utils/api/auth/api"
import { CustomFormField } from "@/components/CustomFormField"

const Login = () => {
  const { toast } = useToast()
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
        toast({
            title: "Success",
            description: response.message
        })
        const payload = JSON.parse(atob(response.data.token.split(".")[1]))
        payload.id === 1 ? localStorage.setItem("role","admin") : localStorage.setItem("role","pasien")
        localStorage.setItem("token",response.data.token)
    } catch (error) {
        toast({
            title: "Error",
            description: (error as Error).message,
            variant: "destructive"
        })
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
