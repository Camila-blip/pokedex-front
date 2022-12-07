import {useContext} from "react";
import {Head, Div} from "./header";
import Logo from "../../Assets/logo.svg";
import { AuthContent } from "../../contexts/auth";

export default function Header(){
    const { signOut } = useContext(AuthContent);
    return(
        <Head>
            <Div>
                <img src={Logo} alt="FastProBR" />
            </Div>
            <Div>
                <button type="submit" onClick={()=> signOut()}>Sign out</button>
            </Div>
        </Head>
    );
}
