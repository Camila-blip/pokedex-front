import {useState, useContext} from "react";
import Container from "../../components/Container";
import BtnSubmit from "../../components/Button";
import Titulo from "../../components/Title";
import Link from "../../components/Link";
import {Form, Input} from "./login";
import { AuthContent } from "../../contexts/auth";


export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn, loadingAuth } = useContext(AuthContent);

    function handleSubmit(e){
        e.preventDefault();
        if(email !== "" && password!== ""){
            signIn(email, password);
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Titulo>Entrar</Titulo>
                <Input type="text" placeholder="email@email.com" value={email}  onChange={ (e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <BtnSubmit>{loadingAuth ? "Carregando..." : "Acessar"}</BtnSubmit>
            </Form>
            <Link  to="/register">Criar uma conta</Link>
        </Container>
    );
}
