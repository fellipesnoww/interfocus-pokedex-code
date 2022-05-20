import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import FavoriteCard from "../../components/FavoriteCard";
import { FavoritoDTO } from "../../dtos/FavoritoDTO";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import { useFavorite } from "../../hooks/favorite";

import {
    Container,
    Header,
    Titulo,
} from './styles';


function Favoritos(){

    const {favoritos, removeFavorito, getFavoritos} = useFavorite();

    const isFocused = useIsFocused();

    useEffect(() => {
        getFavoritos();
    }, [isFocused]);
    
    return (
        <Container>
            <Header>
                <Titulo>Favoritos</Titulo>
            </Header>

            <FlatList
                data={favoritos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <FavoriteCard 
                        pokemon={item.pokemon}
                        funcaoRemover={() => removeFavorito(item.pokemon.id)}
                    />
                )}
                style={{
                    flex: 1,
                    paddingTop: 33,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 24
                }}
            />
        </Container>
    )
}

export default Favoritos