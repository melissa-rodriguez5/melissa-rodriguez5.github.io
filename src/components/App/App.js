import { useState } from 'react'

//Interface for user to input credentials and have roles displayed to them
function App() {
    const [username, setName] = useState("");
    const [password, setPass] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        `http://localhost:5000/user/?username=${username}&password=${password}`, {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result.length > 0) {
            alert(result[0].duties);
            setPass("");
            setName("");
        }
    }
    return (
      <>
          <h1>Zoo Authentication System</h1>
          <form action="">
              <input type="text" placeholder="username" 
              value={username} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="password" 
              value={password} onChange={(e) => setPass(e.target.value)} />
              <button type="submit" 
              onClick={handleOnSubmit}>Log In</button>
          </form>

      </>
  );
}

//Frontend available on http://localhost:3000
export default App;