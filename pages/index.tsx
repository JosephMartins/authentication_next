import { FormEvent, useContext, useState } from 'react';
import styles from '../styles/Home.module.css'
import {AuthContext} from '../contexts/AuthContext'
import { WithSSRGuest } from '../utils/withSSRGuest';

export default function Home() {
  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    const data = {
      email,
      password
    }

    await signIn(data);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button>Submit</button>
    </form>
  )
}


export const getServerSideProps = WithSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})