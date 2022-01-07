import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./Components/SocialCard";

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        userData = (await response.json()).results; //parses json to js
        //The Response interface of the Fetch API represents the response to a request.
      } catch (errors) {
        console.log(errors);
        userData = [];
      }
      setUsers(userData);
      setAllUsers(userData)
    })();
  }, []);

  const filterCards = (e) =>{
    console.log(e.target.value)
    const value = e.target.value.toLowerCase()
    
    const filteredUsers = allUsers.filter( user => (
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(value)
    ))
    setUsers(filteredUsers)
  }

  return (
    <div className="App">
      <h1>Social Cards</h1>
      <input className='search-box' placeholder='Search...' onInput={filterCards} />
      {/* <Button variant='contained'>Hello world</Button> */}
      <div className="cards-container">
        {users.map((user, index) => (
          <SocialCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
