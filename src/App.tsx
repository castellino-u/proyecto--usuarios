import { useState } from "react"
import { SearchBar } from "./components/SearchBar/SearchBar"
import { IUserGithub } from "./types/userGithub";



function App() {
  //ahora vamos a hacer un estado
  const [userName, setUserName] = useState(""); //acá está el primer estado 

  //ahora hacemos otro estado para obtener ya los datos, el objeto

  const [user, setUser] = useState<IUserGithub>({
    
    //simepre le damos un estado incial al objeto
    login : "",
    name:"",
    avatar_url : "",
    bio : "",
    public_repos : 0,
    html_url : ""  
  })  

  //ahora falta hacer la consulta, hacerla un json y la vamos a tipar
  //hay que hacer el fetch

  
  const API_URL = `https://api.github.com/users/${userName}`
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>  ) =>{
    setUserName(e.target.value)
  }
  
  const handleClick = ( ) => {
    //el evento de este click es hacer el fetch
    //Hasta acá esto me devuelve una promesa|| agregamos otro then para transformarlo
    fetch(API_URL).then((res) => res.json()).then((respuesta)=> setUser(respuesta)).catch((error) => console.log(error));

  }

  return (
    <>
    <div>
      <SearchBar handleChange={handleChange} placeholder="Nombre de usuario" handleClick={handleClick} ></SearchBar>
      <p>nombre: {user.name}</p>
    </div>
    </>
  )
}

export default App
