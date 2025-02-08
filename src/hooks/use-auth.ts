import { useGetQuery } from "@/lib/feature/api"
import { useDispatch, useSelector } from "@/lib/feature/hooks";
import { authUser, userLoading } from "@/lib/feature/reducers/user";
import { useEffect } from "react";


export type User = {
  firstname: string;
  lastname: string;
  email: string;
}

export default function useAuth() {
  const { user } = useSelector(state => state.user)
  const { data } = useGetQuery({ url: "/api/me", method: "get" })
  
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user && data) {
      const userData = data as {user: User | null}
      
      if (userData.user) {
        dispatch(authUser(userData.user))
      }
      dispatch(userLoading(false))
    }
  }, [user, data, dispatch])
  
  return
}