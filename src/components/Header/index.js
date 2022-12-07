import {useContext} from "react";
import {Head, Div} from "./header";
import Logo from "../../Assets/logo.svg";
import { AuthContent } from "../../contexts/auth";
import { PokemonContent } from "../../contexts/pokemon";

export default function Header(){
    const { signOut } = useContext(AuthContent);
    const { setPage } = useContext(PokemonContent);
    return(
        <Head>
            <Div>
                <img src={Logo} alt="FastProBR" />
            </Div>
            <Div>
                <button type="button" onClick={()=> {signOut(), setPage(0);}}>Sign out</button>
            </Div>
        </Head>
    );
}
