import Container from "@/components/container";
import FormButton from "@/components/form/button";
import Input from "@/components/form/input";
import Textarea from "@/components/form/textarea";
import { Typography, TypographyH3, TypographyH6, TypographyLead } from "@/components/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";


const ContactValidationSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  subject: z.string().nonempty(),
  message: z.string().nonempty(),
  token: z.optional(z.string())
})

export default function Contact() {
  const form = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      token: ""
    },
    resolver: zodResolver(ContactValidationSchema)
  })

  const handleSubmit = (_: z.infer<typeof ContactValidationSchema>) => {

  }

  return (
    <footer className="w-full bg-contact bg-cover py-20" id="contact">
      <Container className="">
        <div className="w-2/5 text-center text-white mx-auto mb-12">
          <TypographyH3>Get in touch</TypographyH3>
          <TypographyLead className="text-center">Reach out to me concerning job offers, projects, you name it, am here for you</TypographyLead>
        </div>
        <div className="w-full max-w-4xl mx-auto rounded-xl grid lg:grid-cols-3 p-4 bg-white">
          <div className="w-full p-5 bg-teal-500 rounded-xl text-white space-y-8">
            <div className="">
              <TypographyH6>Contact Information</TypographyH6>
              <Typography>I would love to hear from you.</Typography>
            </div>
            <div className="flex items-center gap-5">
              <IconPhone />

              <div className="">
                <a href="tel:+233249149420" className="block">(024) 914 9420</a>
                <a href="tel:+233503894555" className="block">(050) 389 4555</a>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <IconMail />

              <div className="">
                <a href="mailto:nathanielobeng0+portfolio@gmail.com" className="block">nathanielobeng0@gmail.com</a>
              </div>
            </div>
          </div>

          <FormProvider {...form}>
            <form className="w-full lg:col-span-2 gap-5 grid lg:grid-cols-2 py-8 pl-8" onSubmit={form.handleSubmit(handleSubmit)}>
              <Input
                name="name"
                label="Name"
                placeholder="Type in your name"
              />
              <Input
                name="email"
                label="Email address"
                placeholder="Type in your email address"
              />

              <div className="lg:col-span-2">
                <Input
                  name="subject"
                  label="Subject"
                  placeholder="Type in the subject"
                />
              </div>

              <div className="lg:col-span-2">
                <Textarea
                  name="message"
                  label="Message"
                  placeholder="Type in your message"
                  rows={5}
                />
              </div>

              <div className="lg:col-span-2 flex justify-center">
                <FormButton className="w-3/5 bg-teal-500">Submit</FormButton>
              </div>
            </form>
          </FormProvider>
        </div>
      </Container>
    </footer>
  )
}
