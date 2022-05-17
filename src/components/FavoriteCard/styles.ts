import styled from "styled-components/native";
import { PokemonName } from "../../dtos/PokemonDTO";

interface Props {
    type: PokemonName
}

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    background-color: ${({theme}) => theme.white};
    border-radius: 8px;
    align-items: center;
    margin-bottom: 41px;
    justify-content: space-between;
    elevation: 4;
    shadow-color: ${({theme}) => theme.dark_gray};
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;

`;

export const ConteudoSvg = styled.View`
    margin-left: -24px;
    justify-content: center;
    align-items: center;

    position: absolute;
`;

export const ConteudoTexto = styled.View`
    align-items: flex-start;
    justify-content: center;
    margin-left: 87px;
    padding-top: 8px;
    padding-bottom: 8px;
`;


export const Descricao = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LabelBold = styled.Text<Props>`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme, type}) => theme[type]};
`;

export const Tipos = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 8px;
`;

export const Opcao = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Botao = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: flex-start;
    justify-content: flex-start;
`;