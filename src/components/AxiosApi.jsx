import React, { useState } from "react";
import axios from "axios";

  const AxiosApi = () => {
    const [pokemon, setPokemon] = useState();

    //whenever the variable change we need to use State not props!
    
    // const getPoke1 = async()=> {
      //     const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      //     const jsonResponse = await response.json()
      //     setPokemon(jsonResponse)
      // }
      
      const axiosPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(res=>{
          console.log(res)
          setPokemon(res.data.results)
        })
        .catch(err=>console.log(err))
      }; //once u get the json you need to display that info in your page by using 'State' not props



  return (
    <div>
      <h1>Fetching Pokemon</h1>
      {/* <button onClick={getPoke1}>Fetch with await</button> */}
      <button onClick={axiosPokemon}>Fetch with AXIOS</button>
      {pokemon && pokemon.map((poke,id)=>{
        return(
          <div key={id}>
          <p>{poke.name}</p>
          </div>
          )
        
      })}

    </div>
  );
}
export default AxiosApi;
