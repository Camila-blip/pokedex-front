import {useContext} from "react";
import Header from "../../components/Header";
import { Container,ListaPokemon, PainelPokemon } from "./home";
import Pagination from "../Pagination";
import { PokemonContent } from "../../contexts/pokemon";
import ReactLoading from "react-loading";

export default function Home(){

    const {pokemons,loadingPokemon}= useContext(PokemonContent);
    return(
        <>
            <Header />
            <Container>
                <ListaPokemon>
                    {((pokemons === null )|| (loadingPokemon))  ?
                        <ReactLoading type="spin" color="#181c2e" height={"15%"} width={"15%"} />
                        :
                        pokemons.map((item,index)=>{
                            return(
                                <PainelPokemon key={index}>
                                    <img src={item.Imagem} alt={item.Name}/>
                                    <h3>{item.Name}</h3>
                                    <span>{item.Tipo}</span>
                                </PainelPokemon>
                            );
                        })
                    }
                </ListaPokemon>
                <Pagination/>
            </Container>

        </>
    );
}
