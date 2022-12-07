import { createContext, useState, useEffect} from "react";
import api from "../services/api";
export const PokemonContent = createContext({});

function PokemonProvider({ children }){
    const [totalPages, setTotalPages] = useState(15);
    const [page, setPage] = useState(0);
    const [totalPokemon, setTotalPokemon] = useState(150);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [pokemons, setPokemons] = useState(null);
    const [loadingPokemon, setLoadingPokemon] = useState(false);

    useEffect(()=>{
        (async()=>{
            try{
                console.log("page",page);
                setLoadingPokemon(true);
                const pokemon = await api.get(`pokemon/${page}/${itemsPerPage}`);
                console.log("pokemon",pokemon.data);
                setPokemons(pokemon.data);
            }catch(err){
                console.log("err",err);
            }
            finally{
                setLoadingPokemon(false);
            }
        })();
    }, [page]);

    return(
        <PokemonContent.Provider value={{totalPages,loadingPokemon,page,pokemons,setPage,totalPokemon,setTotalPokemon,setTotalPages,setItemsPerPage}}>
            {children}
        </PokemonContent.Provider>
    );
}

export default PokemonProvider;
