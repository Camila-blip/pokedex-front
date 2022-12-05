import { useState, useContext  } from "react";
import Container from "../../components/Container";
import BtnSubmit from "../../components/Button";
import Titulo from "../../components/Title";
import Link from "../../components/Link";
import {Form, Input} from "./register";
import { AuthContent } from "../../contexts/auth";

export default function SignUp() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [password, setPassword] = useState("");

    const { signUp, loadingAuth } = useContext(AuthContent);

    function handleSubmit(e){
        e.preventDefault();
        if(nome && email  && telefone  && password ){
            console.log(nome,email,telefone,password);
            signUp(nome,email,telefone,password);
        }
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Titulo>Cadastrar uma conta</Titulo>
                <Input type="text" placeholder='Seu nome'  onChange={(e) => setNome(e.target.value)}/>
                <Input type="text" placeholder='Telefone'   onChange={ (e) => setTelefone(e.target.value)}/>
                <Input type="text" placeholder='email@email.com'   onChange={ (e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder='*********'  onChange={(e) => setPassword(e.target.value)}/>
                <BtnSubmit>{loadingAuth ? "Carregando..." : "Acessar"}</BtnSubmit>
            </Form>
            <Link  to="/">Já tem uma conta? Entre</Link>
        </Container>
    );
}
