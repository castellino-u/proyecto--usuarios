//acá vamos a crear la barra de busqueda

import { FC } from "react";

interface Props {
    handleChange : (event: React.ChangeEvent<HTMLInputElement>)=> void;
    placeholder : string;
    handleClick : () => void; 

}

export const SearchBar: FC <Props> = ({handleChange, placeholder, handleClick}) => {
    

    return (
    <>
    <p> (●'◡'●)🔍 Buscar usuario de Github: </p>

    <input type="text" onChange={handleChange} placeholder={placeholder} />
    <button onClick={handleClick}>Buscar</button>

    </>
    )
}
