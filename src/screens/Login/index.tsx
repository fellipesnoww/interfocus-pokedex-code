import React from "react";
import PokebolaLogin from '../../assets/PokebolaLogin.svg';
import { BotaoLogar, Container, Label } from "./styles";


function Login(){
    return (
        <Container
            colors={['#133ABC','#5EBCFC']}
            start={{x: 0, y:0}}
            end={{x:1, y:1}}
        >
            <PokebolaLogin />
            <BotaoLogar>
                <Label>Autenticar com o IAS</Label>
            </BotaoLogar>
        </Container>
    )
}

export default Login;