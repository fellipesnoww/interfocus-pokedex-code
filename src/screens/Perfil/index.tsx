import React from "react";
import { Image } from "react-native";
import { BackgroundImage, BotaoSair, Container, Conteudo, Header, Sair, Titulo } from "./styles";

function Perfil (){
    return (
        <Container>
            <Header>
                <Titulo>Perfil</Titulo>
            </Header>
            <Conteudo>
                <BackgroundImage>
                    <Image
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/48105194?v=4'
                        }}
                        style={{
                            width: 130,
                            height: 130,
                            borderRadius: 65
                        }} 
                    />
                </BackgroundImage>
                <Titulo>Fellipe</Titulo>
                <BotaoSair>
                    <Sair>Sair</Sair>
                </BotaoSair>
            </Conteudo>
        </Container>
    )
}

export default Perfil;