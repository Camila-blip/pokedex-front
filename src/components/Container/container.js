import styled from "styled-components";
import logo from "../../Assets/logo.png";

export const Painel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Login = styled.div`
    background-color: #EAEAEC;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 0px 10px grey;
    @media(max-width: 700px) {
        max-width: 400px;
        width: 100%
    }
`;


export const LogoArea = styled.div`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #181c2e;
    width: 100%;
`;

export const LogoImagem = styled.img.attrs({
    src: `${logo}`,
    alt: "Sistema"
})`
    padding: 20px;
    max-width: 170px;
    max-height: 130px;
  `;
