import React from "react";

import Charmander from '../../assets/pokemons/Charmander.svg'

import { Codigo, Container, ConteudoCodigo, ConteudoNome, ConteudoSvg, Nome } from "./styles";

function SmallCard(){
    return (
        <Container>
            <ConteudoCodigo>
                <Codigo>#001</Codigo>
            </ConteudoCodigo>
            <ConteudoSvg>
                <Charmander width={72} height={72}/>
            </ConteudoSvg>
            <ConteudoNome>
                <Nome>Charmander</Nome>
            </ConteudoNome>
        </Container>
    )
}

export default SmallCard;