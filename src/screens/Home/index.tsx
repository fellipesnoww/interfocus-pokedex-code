import React, { useState } from "react";

import Pokebola from '../../assets/icons/pokeball.svg';
import SortAsc from '../../assets/icons/sortasc.svg';
import SortDesc from '../../assets/icons/sortdesc.svg';
import SmallCard from "../../components/SmallCard";


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

    function alteraTipoFiltro(){
        setDecrescente(estadoAnterior => !estadoAnterior);
    }

    return (
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
            />

            <SmallCard />
        </Container>
    )
}   

export default Home;