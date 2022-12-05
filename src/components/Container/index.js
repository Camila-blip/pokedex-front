import {Painel, Login, LogoArea, LogoImagem} from "./container";

export default function Container({children}) {
    return(
        <Painel>
            <Login>
                <LogoArea>
                    <LogoImagem />
                </LogoArea>
                {children}
            </Login>
        </Painel>
    );
}
