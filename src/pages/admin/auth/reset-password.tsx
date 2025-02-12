import FormButton from "@/components/form/button";
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
              Reset password
            </TypographyH6>

            <FormProvider {...form}>
              <form className="space-y-4 md:space-y-6" action="#">
                <Password
                  name="password"
                  label="Password"
                />

                <Password
                  name="passwordConfirmation"
                  label="Password"
                />
                <FormButton className="w-60 mx-auto">Reset password</FormButton>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </section>
  )
}
