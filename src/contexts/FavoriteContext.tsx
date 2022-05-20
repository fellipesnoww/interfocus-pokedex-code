import {createContext} from 'react';
import { FavoritoDTO } from '../dtos/FavoritoDTO';
import { PokemonDTO } from '../dtos/PokemonDTO';

interface IFavoriteContext{
    favoritos: FavoritoDTO[];
    getFavoritos(): Promise<void>;
    addFavorito(pokemon: PokemonDTO): Promise<void>;   
    removeFavorito(id: number): Promise<void>
    verificaFavoritado(id: number): Promise<boolean>
}

export const FavoriteContext = createContext({} as IFavoriteContext);
