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
    name: PokemonName;
}

export enum PokemonName {
    rock = "rock",
    ghost = "ghost",
    steel = "steel",
    water = "water",
    grass = "grass",
    psychic = "psychic",
    ice = "ice",
    dark = "dark",
    fairy = "fairy",
    normal = "normal",
    fighthing = "fighthing",
    flying = "flying",
    poison = "poison",
    ground = "ground",
    bug = "bug",
    fire = "fire",
    electric = "electric",
    dragon = "dragon"
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