import React from "react";
import { PokemonType } from "../../dtos/PokemonDTO";
import { Container, Tipo } from "./styles";

interface TypeCardProps{
    tipoPokemon: PokemonType;
}

function TypeCard({tipoPokemon, ...rest}: TypeCardProps){
    return(
        <Container 
            type={tipoPokemon.name} 
            {...rest}
        >
            <Tipo>{tipoPokemon.name}</Tipo>
        </Container>
    )
}

export default TypeCard;