import styled from "styled-components/native";
import { PokemonName } from "../../dtos/PokemonDTO";

interface Props {
    type: PokemonName;
}


export const Container = styled.View<Props>`
    flex: 1;
    padding: 4px 4px;
    background-color: ${({theme, type}) => theme[type]};
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 44px;
    padding-bottom: 140px;  
`;

export const ConteudoTitulo = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const BotaoHeader = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

export const Nome = styled.Text`
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme}) => theme.white};
    font-size: 24px;
    margin-left: 19px;
    margin-right: 16px;
`;

export const Codigo = styled.Text`
    font-family: ${({theme}) => theme.fonts.REGULAR};
    color: ${({theme}) => theme.white};
    font-size: 12px;
`;

export const Conteudo = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.white};
    border-radius: 8px;
    padding: 0 20px;
    align-items: center;
`;

export const ConteudoSvg = styled.View`
    margin-top: -130px;
    position: absolute;
`;
