import { Outlet } from 'react-router-dom'
import { Sidenav } from './sidenav'
import { CircleHelp, Home, Keyboard, Mail, MonitorCog } from 'lucide-react'

export default function Layout() {
  return (
    <div className="">
      <div className="w-full fixed bottom-5 flex items-center z-40">
        <Sidenav
          items={[
            {
              href: "#home",
              icon: <Home />,
              title: 'Home'
            },
            {
              href: "#about",
              icon: <CircleHelp />,
              title: 'About'
            },
            {
              href: "#skills",
              icon: <Keyboard />,
              title: 'Skills'
            },
            {
              href: "#projects",
              icon: <MonitorCog />,
              title: 'Projects'
            },
            {
              href: "#contact",
              icon: <Mail />,
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
