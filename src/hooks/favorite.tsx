import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { ReactNode, useContext, useEffect, useState } from 'react';

import { FavoriteContext } from '../contexts/FavoriteContext';
import { FavoritoDTO } from '../dtos/FavoritoDTO';
import { PokemonDTO } from '../dtos/PokemonDTO';
import { UsuarioDTO } from '../dtos/UsuarioDTO';
import { useAuth } from './auth';


interface FavoriteProviderProps{
    children: ReactNode;
}
const FAVORITOS_KEY = '@pokedex:favoritos';


function FavoriteProvider({ children }: FavoriteProviderProps){
    const [favoritos, setFavoritos] = useState<FavoritoDTO[]>([]);
    const {usuario} = useAuth();

    async function getFavoritos(){
        const favoritosStorage = await AsyncStorage.getItem(FAVORITOS_KEY);
        if(favoritosStorage){
            const favoritosParse = JSON.parse(favoritosStorage) as FavoritoDTO[];
            setFavoritos(favoritosParse);
        } 
    }

    async function removeFavorito(id: number){
        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);        
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[];
            const filtrados = favoritosParse.filter(f => f.pokemon.id !== id);
            await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(filtrados));
            getFavoritos();
        }
    }

    async function addFavorito(pokemon: PokemonDTO){


        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[];
            console.log(favoritosParse)
            if(favoritosParse.some(f => f.pokemon.id === pokemon.id)){
                await removeFavorito(pokemon.id);                
            } else {                
                favoritosParse.push({
                    id: Math.random(),
                    pokemon,
                    usuario: usuario as UsuarioDTO
                });
    
                await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritosParse));                     
            }
        } else {
            const novoFavorito = [{
                id: Math.random(),
                pokemon,
                usuario: usuario as UsuarioDTO
            }]

            await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(novoFavorito));

        }
    }

    async function verificaFavoritado(id:number) {
        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[];
            return favoritosParse.some(f => f.pokemon.id === id);
        }
        return false;
    }

    useEffect(() => {
        async function getFavoritos(){
            const favoritosStorage = await AsyncStorage.getItem(FAVORITOS_KEY);
            if(favoritosStorage){
                const favoritosParse = JSON.parse(favoritosStorage) as FavoritoDTO[];
                setFavoritos(favoritosParse);
            } 
        }
        
        getFavoritos();
    },[])

    return (
        <FavoriteContext.Provider value={{
            favoritos,
            getFavoritos,
            removeFavorito,
            addFavorito,
            verificaFavoritado
        }}>
            {children}
        </FavoriteContext.Provider>
    );

}

function useFavorite(){
    const context = useContext(FavoriteContext);
    return context;
}

export {FavoriteProvider, useFavorite};