import React from "react";

import Charmander from '../../assets/pokemons/Charmander.svg'
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";

import { Codigo, Container, ConteudoCodigo, ConteudoNome, ConteudoSvg, Nome } from "./styles";

interface SmallCardProps{
    pokemon: PokemonDTO;
}

function SmallCard({pokemon}: SmallCardProps){
    return (
        <Container
            type={pokemon.types[0].name}
        >
            <ConteudoCodigo>
                <Codigo
                    type={pokemon.types[0].name}
                >{pokemon.code}</Codigo>
            </ConteudoCodigo>
            <ConteudoSvg>
                {
                    retornaSvg(pokemon.name)
                }
            </ConteudoSvg>
            <ConteudoNome
                type={pokemon.types[0].name}
            >
                <Nome>{pokemon.name}</Nome>
            </ConteudoNome>
        </Container>
    )
}

export default SmallCard;