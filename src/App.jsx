import './App.css'
import { useEffect, useState } from 'react'
import Login from './components/Login';
import Messages from './components/Messages';

import { supabase } from './supabaseClient'

function App() {
  const [secion, setSecion] = useState(null);

  useEffect( () =>{
    getSeccion()
  }, [])

  const getSeccion = async () => {
    const {data} = await supabase.auth.getSession();
    //console.log('secion: ', data);
    setSecion(data.session);
  }

  return (
    <div className="App">
      <h1>Whatsapp Clone</h1>
      <p>ReactJs & Supabase</p>
      <div className="container">
        { secion ? <Messages/> : <Login/> }
      </div>
    </div>
  )
}

export default App
