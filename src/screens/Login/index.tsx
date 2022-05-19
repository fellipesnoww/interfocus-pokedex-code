import React from "react";
import PokebolaLogin from '../../assets/PokebolaLogin.svg';
import { useAuth } from "../../hooks/auth";
import { BotaoLogar, Container, Label } from "./styles";


function Login(){

    const { autenticarComIAS } = useAuth();

    return (
        <Container
            colors={['#133ABC','#5EBCFC']}
            start={{x: 0, y:0}}
            end={{x:1, y:1}}
        >
            <PokebolaLogin />
            <BotaoLogar
                onPress={autenticarComIAS}
            >
                <Label>Autenticar com o IAS</Label>
            </BotaoLogar>
        </Container>
    )
}

export default Login;