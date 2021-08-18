import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"


type  UseCamParams = {
  permissions?: string[] | undefined;
  roles?: string[];

}


export function useCan({permissions, roles}: UseCamParams){
  const {user, isAuthenticated} = useContext(AuthContext);

  console.log(roles)

  if(!isAuthenticated){
    return false;
  }

  if(permissions?.length > 0){
    const  hasAllPermissions = permissions?.every(permission => {
      return user?.permissions?.includes(permission)
    })

    if(!hasAllPermissions){
      return false;
    }
  }

  if(roles?.length > 0){
    const  hasAllroles = roles?.some(role => {
      return user?.roles?.includes(role)
    })

    if(!hasAllroles){
      return false;
    }
  }

  return true;
}