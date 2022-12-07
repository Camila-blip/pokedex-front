import {useContext} from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {ContainerPag, Pagatual} from  "./pagination";
import { PokemonContent } from "../../contexts/pokemon";

export default function Pagination(){
    const {
        totalPages,
        page,
        setPage,
        totalPokemon,
    } = useContext(PokemonContent);

    const handlePrevPage = () => {
        if(page - 1 < 0) return;
        setPage(page - 1);
    };

    const handleNextPage = () =>{
        if(page + 1  > totalPages - 1) return;
        setPage(page + 1);
    };

    const isFirstPage = page === 0;
    const isLastPage = page === totalPages - 1;

    return(
        <ContainerPag>
            <div>
                <span>{page + 1} - {totalPages} de {totalPokemon} itens</span>
            </div>
            <Pagatual>
                <button disabled={isFirstPage} onClick={() => handlePrevPage()}>
                    <BsChevronLeft size={15} />
                </button>
                <div>
                    <span>{page + 1}</span>
                </div>
                <button disabled={isLastPage} onClick={() => handleNextPage()}>
                    <BsChevronRight size={15}/>
                </button>
            </Pagatual>
        </ContainerPag>
    );
}
