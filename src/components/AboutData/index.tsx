import React from "react";

import Peso from '../../assets/icons/weight.svg';
import Altura from '../../assets/icons/height.svg';
import { Acoes, Container, Dados, Medidas, Nome, Valor } from "./styles";
import { PokemonMove } from "../../dtos/PokemonDTO";

interface AboutDataProps{
    weight: string;
    height: string;
    moves: PokemonMove[];
}

function AboutData({ weight, height, moves }: AboutDataProps){
    return(
        <Container>
            <Dados>
                <Medidas>
                    <Peso width={16} height={16} style={{marginRight: 8}}/>
                    <Valor>{weight}</Valor>
                </Medidas>
                <Nome>Weight</Nome>
            </Dados>
            <Dados>
                <Medidas>
                    <Altura width={8} height={16} style={{marginRight: 8}}/>
                    <Valor>{height}</Valor>
                </Medidas>
                <Nome>Height</Nome>
            </Dados>
            <Dados
                naoExibirBorda
            >
                <Acoes>
                    {moves.map(m => (
                        <Valor key={m.id}>{m.name}</Valor>
                    ))}
                </Acoes>
                <Nome>Moves</Nome>
            </Dados>
        </Container>
    )
}

export default AboutData;