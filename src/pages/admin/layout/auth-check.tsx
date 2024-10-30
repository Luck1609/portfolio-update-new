import useAuth from "@/hooks/use-auth"
import { useSelector } from "@/lib/feature/hooks"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const login = "/auth", home = "/experience"

export default function AuthCheck() {
  useAuth()
  const { user, isLoading } = useSelector(state => state.user)
  const {pathname} = useLocation()

  if (isLoading) return (<>Loading</>)
  if (!user && pathname !== login) return <Navigate to={login} />
  if (user && pathname === login) return <Navigate to={home} />

  return <Outlet />
}
