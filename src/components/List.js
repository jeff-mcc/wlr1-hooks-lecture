// import {useState,useEffect} from 'react'
// import axios from 'axios'
import Poke from './Poke'
import useAxios from '../hooks/useAxios'

const List = () => {
  const [pokemon] = useAxios('https://pokeapi.co/api/v2/pokemon/','results')

  // can also destructure array as const [pokemon,setPokemon] if the second variable is needed

  // const [pokemon,setPokemon] = useState([])
  
  // useEffect(()=>{
  //   // console.log('Component Mounted')
  //   axios.get('https://pokeapi.co/api/v2/pokemon/')
  //     .then((res)=>setPokemon(res.data.results))
  //     .catch((err)=>console.log(err))
  // },[])

  return(
    <div>
      <h1>List</h1>
      {pokemon.map((poke)=>{
        return(
          <Poke key={poke.name} poke={poke} />
          // <div key={poke.name}>
          //   {poke.name}
          //   {/* {poke.url} */}
          // </div>
        )
      })}
    </div>
  )
}
export default List