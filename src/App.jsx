import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient.js'

import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() =>  {
    const fetchUsers = async () => {
      let {data, error} = await supabase
      .from("users")
      .select("*")

      if (error) {
        console.log("Error fetching users:", error)
      } else {
        setUsers(data)
      }
    }

    fetchUsers()
  }, [])


  return (
    <div style={{padding: "2rem"}}>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id} style={{border: "1px solid #ccc", marginBottom: "1rem", padding: "0.5rem"}}>
          <h2>{user.email}</h2>
          <p>{user.password}</p>
        </div>
      ))}
    </div>

    
      // <div>
      //   <a href="https://vite.dev" target="_blank">
      //     <img src={viteLogo} className="logo" alt="Vite logo" />
      //   </a>
      //   <a href="https://react.dev" target="_blank">
      //     <img src={reactLogo} className="logo react" alt="React logo" />
      //   </a>
      // </div>
      // <h1>Vite + React</h1>
      // <div className="card">
      //   <button onClick={() => setCount((count) => count + 1)}>
      //     count is {count}
      //   </button>
      //   <p>
      //     Edit <code>src/App.jsx</code> and save to test HMR
      //   </p>
      // </div>
      // <p className="read-the-docs">
      //   Click on the Vite and React logos to learn more
      // </p>


    // </>
  )
}

export default App
