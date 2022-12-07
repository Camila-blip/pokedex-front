import styled from "styled-components";

export const ContainerPag = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 10px grey;
    padding: 10px ;
    border-radius: 7px;
    border: solid 1px #181c2e;
    span{
        font-weight: 700;
    }
`;

export const Pagatual = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    button{
        color: #fff;
        border: solid 3px #181c2e;
        border-radius: 50px;
        background-color: #181c2e;
        padding: 2px;
    }
`;

