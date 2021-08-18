import { setupAPIClient } from "../services/api";
import { WithSSRGAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  return (
    <> 
      <h1>Metrics:</h1>
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