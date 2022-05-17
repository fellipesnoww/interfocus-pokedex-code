import React from "react";
import FavoriteCard from "../../components/FavoriteCard";
import { PokemonDTO } from "../../dtos/PokemonDTO";

import {
    Container,
    Header,
    Titulo,
} from './styles';

function Favoritos(){

    
const pokemon = {
    id: 1,
    code: "#001",
    name: "Bulbasaur",
    about: {
        weight: "6,9 kg",
        height: "0,7 m",
        description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
    },
    moves: [{
        id: 1,
        name: "Chlorophyll"
        },
        {
            id: 2,
            name: "Overgrow"
        }
    ],
    base_stats:{
        hp: "045",
        atk: "049",
        def: "049",
        satk: "065",
        sdef: "065",
        spd: "045"
    },
    types: [
        {
            id: 1,
            name: "grass"
        },
        {
            id: 2,
            name: "poison"
        }
    ]
} as PokemonDTO;


    return (
        <Container>
            <Header>
                <Titulo>Favoritos</Titulo>
            </Header>

            <FavoriteCard pokemon={pokemon}/>
        </Container>
    )
}

export default Favoritos