import { cn } from "@/lib/utils";
import { IconArrowLeft, IconBrandTabler, IconKeyboard, IconSchool, IconSettings, IconTool, IconUser } from "@tabler/icons-react";
import { Suspense, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui";
import { Logo, LogoIcon } from "./misc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";
import useAuth from "@/hooks/use-auth";
import { useSelector } from "@/lib/feature/hooks";


const links = [
  {
    label: "Projects",
    href: "/project",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Experience",
    href: "/experience",
    icon: (
      <IconKeyboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Education",
    href: "/education",
    icon: (
      <IconSchool className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Skills",
    href: "/skills",
    icon: (
      <IconTool className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Logout",
    href: "#",
    icon: (
      <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

export default function AuthLayout() {
  useAuth()
  const { user } = useSelector(state => state.user)
  const [open, setOpen] = useState(false);
  
  return (
    <Suspense fallback={<>loading Auth component</>}>
      
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex- mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "h-[100dvh] " // for your use case, use `h-screen` instead of `h-[60vh]`
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: user?.firstname ?? "Guest",
                  href: "#",
                  icon: (
                    <IconUser />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
        
        <main className="flex flex-1">
          <ScrollArea className="w-full bg-white h-[93dvh] relative rounded-tl-2xl top-[7dvh]">
            <Outlet />
          </ScrollArea>
        </main>
      </div>
    </Suspense>
  );
}