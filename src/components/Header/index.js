import {useContext} from "react";
import {Head, Div} from "./header";
import Logo from "../../Assets/logo.svg";
import { AuthContent } from "../../contexts/auth";
import { PokemonContent } from "../../contexts/pokemon";

export default function Header(){
    const { signOut } = useContext(AuthContent);
    const { setPage, setPokemons } = useContext(PokemonContent);

    function Logout(){
        signOut();
        setPokemons(null);
        setPage(0);
    }

    return(
        <Head>
            <Div>
                <img src={Logo} alt="FastProBR" />
            </Div>
            <Div>
                <button type="button" onClick={Logout}>Sign out</button>
            </Div>
        </Head>
    );
}
