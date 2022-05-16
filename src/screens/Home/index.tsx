import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";

import Pokebola from '../../assets/icons/pokeball.svg';
import SortAsc from '../../assets/icons/sortasc.svg';
import SortDesc from '../../assets/icons/sortdesc.svg';
import SmallCard from "../../components/SmallCard";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import api from "../../services/api";

import {
    Container,
    Header,
    Titulo,
    ConteudoTitulo,
    BotaoOrdenacao,
    InputTexto
} from './styles';

function Home(){

    const [decrescente, setDecrescente] = useState(false);
    const [nomeFiltro, setNomeFiltro] = useState('');
    const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);
    const [pokemonsFiltro, setPokemonsFiltro] = useState<PokemonDTO[]>([]);

   

    function alteraTipoFiltro(){
        setDecrescente(estadoAnterior => !estadoAnterior);
    }

    function alteraNomeFiltro(nome: string){
        console.log(nome);
        setNomeFiltro(nome);
        const filtrados = pokemons.filter(p => p.name.toLowerCase().includes(nome.toLowerCase()));
        setPokemonsFiltro(filtrados);
    }

    async function getPokemons(){
        try {
            
            const filtro = decrescente ? '?_sort=name&_order=desc' : '?_sort=name&_order=asc';
    
            const resposta = await api.get<PokemonDTO[]>(`/pokemons${filtro}`);
            console.log(resposta.data);
            if(resposta.data && resposta.data.length > 0){
                setPokemons(resposta.data);
                setPokemonsFiltro(resposta.data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPokemons();
    }, [decrescente]);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <Header>
                    <ConteudoTitulo>
                        <Pokebola width={24} height={24}/>
                        <Titulo>Pokemon</Titulo>
                    </ConteudoTitulo>
                    <BotaoOrdenacao
                        onPress={() => alteraTipoFiltro()}
                    >
                        {
                            decrescente ? <SortAsc /> : <SortDesc />
                        }
                    </BotaoOrdenacao>
                </Header>
                <InputTexto
                    placeholder="Procurar"
                    onChangeText={(texto) => alteraNomeFiltro(texto)}
                    keyboardAppearance="dark"
                    value={nomeFiltro}
                />
                <FlatList
                    data={pokemonsFiltro}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    contentContainerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    style={{
                        width: '100%'
                    }}
                    renderItem={({item}) => (
                        <SmallCard 
                            pokemon={item}
                            
                        />
                    )}
                />

            </Container>
        </TouchableWithoutFeedback>
    )
}   

export default Home;