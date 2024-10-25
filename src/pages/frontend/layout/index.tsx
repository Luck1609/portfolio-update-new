import { Outlet } from 'react-router-dom'
import { Sidenav } from './sidenav'
import { IconHelp, IconHome, IconKeyboard, IconMail, IconPrompt } from '@tabler/icons-react'

export default function Layout() {
  return (
    <div className="">
      <div className="w-full fixed bottom-5 flex items-center z-40">
        <Sidenav
          items={[
            {
              href: "#home",
              icon: <IconHome />,
              title: 'Home'
            },
            {
              href: "#about",
              icon: <IconHelp />,
              title: 'About'
            },
            {
              href: "#skills",
              icon: <IconKeyboard />,
              title: 'Skills'
            },
            {
              href: "#projects",
              icon: <IconPrompt />,
              title: 'Projects'
            },
            {
              href: "#contact",
              icon: <IconMail />,
              title: 'Contact'
            },
          ]}
        />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
