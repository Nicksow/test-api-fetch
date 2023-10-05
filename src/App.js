import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [person, setPerson] = useState([])
    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=20")
            .then(res => res.json())
            .then(res => {
                console.log(res.results)
                const data = res.results
                setPerson(data)
            })
    },[])
    return (
        <div>
          <header>
              {person.map((user,index)=>(
                  <div key={index}>
                      <p>{user.name.first} {user.name.last}</p>
                  </div>
              ))}
          </header>
        </div>
  )
}

export default App;


