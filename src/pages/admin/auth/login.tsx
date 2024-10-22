import FormButton from "@/components/form/button";
import Input from "@/components/form/input";
import Password from "@/components/form/password";
import { TypographyH6 } from "@/components/typography";
import { FormProvider, useForm } from "react-hook-form";

export default function Login() {
  const form = useForm()

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <TypographyH6 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </TypographyH6>

            <FormProvider {...form}>
              <form className="space-y-4 md:space-y-6" action="#">
                <Input
                  name="email"
                  placeholder="name@company.com"
                  label="Email"
                />
                
                <Password
                  name="email"
                  label="Email"
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
                <FormButton isSubmitting={false} className="w-60 mx-auto">Sign in</FormButton>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </section>
  )
}
