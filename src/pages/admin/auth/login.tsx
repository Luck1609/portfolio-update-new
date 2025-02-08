 import FormButton from "@/components/form/button";
import Input from "@/components/form/input";
import Password from "@/components/form/password";
import { TypographyH6 } from "@/components/typography";
import { User } from "@/hooks/use-auth";
import { usePostMutation } from "@/lib/feature/api";
import { useDispatch } from "@/lib/feature/hooks";
import { authUser } from "@/lib/feature/reducers/user";
import { Env } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";


const loginSchema = z.object({
  email: z.string().email().min(5).trim(),
  password: z.string().trim().min(6)
})

type AuthData = {
  user: User,
  token: string
}

export default function Login() {
  const form = useForm({
    mode: "all",
    resolver: zodResolver(loginSchema)
  })
  const { handleSubmit } = form;
  const [submitLogin, {isLoading}] = usePostMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const submit: SubmitHandler<FieldValues> = async (payload) => {
    const { data, error } = await submitLogin({ url: "/login", method: "post", payload })
    if (!error) {
      const { user, token } = data as AuthData
      localStorage.setItem(Env.VITE_AUTH_TOKEN, token)
      dispatch(authUser(user))
      navigate("/experience")
    }
  }


  // nathanielobeng0@gmail.com
  // *#FullStackDev_1609#*

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <TypographyH6 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </TypographyH6>

            <FormProvider {...form}>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(submit)}>
                <Input
                  name="email"
                  placeholder="name@company.com"
                  label="Email"
                />
                
                <Password
                  name="password"
                  label="Password"
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <FormButton isSubmitting={isLoading} className="w-60 mx-auto">Sign in</FormButton>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </section>
  )
}
