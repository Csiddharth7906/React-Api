import { createContext, useState } from "react"

export const UserContext = createContext();

const Context = (props) => {
    const[user, setUser] = useState([
        {id:0,username :"John Doe", email:"johndoe@example.com",city:"New York"},
        {id:1,username :"Jane Doe", email:"janedoe@example.com", city:"Los Angeles"},
        {id:2,username :"Mike Doe", email:"mikedoe@example.com",city:"Chicago"},
        {id:3,username :"Emily Doe", email:"emilydoe@example.com", city:"Houston"  },
        {id:4,username :"Sarah Doe", email:"sarahdoe@example.com", city:"San Francisco"  },
        {id:5,username :"Michael Doe", email:"michaeldoe@example.com", city:"Seattle"   },
    ]);
  return <UserContext.Provider value={{user,setUser}}>
  {props.children}
  
  </UserContext.Provider>
}

export default Context