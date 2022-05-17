import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components';
import { PokemonDTO } from '../../dtos/PokemonDTO';
import retornaSvg from '../../utils/retornaSvg';
import TypeCard from '../TypeCard';
import { Botao, Container, ConteudoSvg, ConteudoTexto, Descricao, LabelBold, Opcao, Tipos } from './styles';

interface FavoriteCardProps{
    pokemon: PokemonDTO;
}

function FavoriteCard({pokemon} : FavoriteCardProps){

    const tema = useTheme();

    return (
        <Container>
            <ConteudoSvg>
                {retornaSvg(pokemon.name, 95, 97)}
            </ConteudoSvg>
            <ConteudoTexto>
                <Descricao>
                    <LabelBold 
                        type={pokemon.types[0].name}
                    >
                        {pokemon.name}
                    </LabelBold>
                    <LabelBold 
                        type={pokemon.types[0].name}
                        style={{
                            marginLeft: 30
                        }}
                    >
                        {pokemon.code}
                    </LabelBold>
                </Descricao>
                <Tipos>
                    {
                        pokemon.types.map(t => (
                            <TypeCard 
                                tipoPokemon={t}
                                key={t.id}
                            />
                        ))
                    }
                    
                </Tipos>
            </ConteudoTexto>
            <Opcao>
                <Botao>
                    <MaterialCommunityIcons 
                        name='heart-broken' 
                        size={20}
                        color={tema.primary}
                    />
                </Botao>
            </Opcao>
        </Container>
    )
}

export default FavoriteCard;