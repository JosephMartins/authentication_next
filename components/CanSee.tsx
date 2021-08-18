import { ReactNode } from "react";
import { useCan } from "../hooks/useCan";

interface CamProps{
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}

export function CanSee({children, roles, permissions}: CamProps){

  const useCanSeeComponent = useCan({
    permissions, roles
  })

  if(!useCanSeeComponent){
    return null;
  }

  return (
    <>
      {children}
    </>
  ) 
}