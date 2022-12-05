import {useState} from "react";
import Container from "../../components/Container";
import InputTx from "../../components/Input";
import BtnSubmit from "../../components/Button";
import Titulo from "../../components/Title";
import Link from "../../components/Link";
import {Form} from "./login";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loadingAuth, setLoadingAuth] = useState(false);
    console.log(setLoadingAuth);

    return (
        <Container>
            <Form>
                <Titulo>Entrar</Titulo>
                <InputTx type="text" placeholder="email@email.com" value={email}  onChange={ (e) => setEmail(e.target.value)}/>
                <InputTx type="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <BtnSubmit>{loadingAuth ? "Carregando..." : "Acessar"}</BtnSubmit>
            </Form>
            <Link  to="/register">Criar uma conta</Link>
        </Container>
    );
}
