import styled from "styled-components";

export const Head = styled.header`
    background-color: #181c2e;
    height: 4em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
`;

export const Div = styled.div`
padding: 10px 30px;
img{
    height: 30px;
}
button{
    padding: 8px;
    border-radius: 6px;
    border: 2px solid #176fc1;
    background: transparent;
    color: #fff;
    transition: ease-in-out 0.5s;
    &:hover{
        background: #fff;
        color: #176fc1;
    }
}
`;
