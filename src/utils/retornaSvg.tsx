import React  from "react";
import Aron from '../assets/pokemons/Aron.svg';
import Bulbasaur from '../assets/pokemons/Bulbasaur.svg';
import Butterfree from '../assets/pokemons/Butterfree.svg';
import Charmander from '../assets/pokemons/Charmander.svg';
import Ditto from '../assets/pokemons/Ditto.svg';
import Gastly from '../assets/pokemons/Gastly.svg';
import Mew from '../assets/pokemons/Mew.svg';
import Pikachu from '../assets/pokemons/Pikachu.svg';
import Silhouette from '../assets/pokemons/Silhouette.svg';
import Squirtle from '../assets/pokemons/Squirtle.svg';


export default function retornaSvg(nome: string, largura = 72, altura = 72){
    switch(nome){
        case 'Aron':
            return <Aron width={largura} height={altura} />
        
        case 'Bulbasaur':
            return <Bulbasaur width={largura} height={altura} />

        case 'Butterfree':
            return <Butterfree width={largura} height={altura} />

        case 'Charmander':
            return <Charmander width={largura} height={altura} />
        
        case 'Ditto':
            return <Ditto width={largura} height={altura} />

        case 'Gastly':
            return <Gastly width={largura} height={altura} />
        
        case 'Mew':
            return <Mew width={largura} height={altura} />
        
        case 'Pikachu':
            return <Pikachu width={largura} height={altura} />
        
        case 'Squirtle':
            return <Squirtle width={largura} height={altura} />
        
        default:
            return <Silhouette width={largura} height={altura}/>
    }
}