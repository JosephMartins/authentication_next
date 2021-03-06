import { useContext, useEffect } from "react"
import { CanSee } from "../components/CanSee";
import { AuthContext } from "../contexts/AuthContext"
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { WithSSRGAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const {user} = useContext(AuthContext);

  

  useEffect(() => {
    api.get('/me')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }, [])

  return (
    <> 
      
      <h1>Dashboard: {user?.email}</h1>
      <CanSee permissions={['metrics.list']} roles={['administrator']}>
      <div>Metricas: </div>
      </CanSee>
    </>
  )
}

export const getServerSideProps = WithSSRGAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');

  
  

  return {
    props: {
    }
  }
})