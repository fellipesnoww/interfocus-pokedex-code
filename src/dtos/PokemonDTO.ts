export interface PokemonAbout{
    weight: string;
    height: string;
    description: string;
}

export interface PokemonMove{
    id: number;
    name: string;
}

export interface PokemonStats{
    hp: string;
    atk: string;
    def: string;
    satk: string;
    sdef: string;
    spd: string;
}

export interface PokemonType{
    id: number;
    name: string;
}

export interface PokemonDTO{
    id: number;
    code: string;
    name: string;
    about: PokemonAbout;
    moves: PokemonMove[];
    base_stats: PokemonStats;
    types: PokemonType[];
}