import styled from "styled-components/native";
import { PokemonName } from "../../dtos/PokemonDTO";

interface MedidorBackgroundProps{
    type: PokemonName;
}

interface MedidorProps{
    percentual: string;
    type: PokemonName;
}

export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`;

export const Atributos = styled.View`
    align-items: flex-end;
    justify-content: center;
    padding: 5px 12px 5px 0px;
    border-right-width: 1px;
    border-right-color: ${({theme}) => theme.ligth_gray};
`;

export const Atributo = styled.Text<MedidorBackgroundProps>`
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme, type}) => theme[type]};
    font-size: 12px;
`;

export const Valores = styled.View`
    align-items: flex-end;
    justify-content: center;
    padding: 5px 8px 5px 12px;
`;

export const Valor = styled.Text`
    font-family: ${({theme}) => theme.fonts.REGULAR};
    color: ${({theme}) => theme.dark_gray};
    font-size: 12px;
`;

export const Medidores = styled.View`
    flex: 1;
`;

export const MedidorBackground = styled.View<MedidorBackgroundProps>`
    width: 100%;
    background-color: ${({theme,type}) => theme[type]}20;
    height: 4px;
    margin-bottom: 5px;
    margin-top: 8px;
    border-radius: 4px;
`;


export const MedidorValor = styled.View<MedidorProps>`
    width: ${({percentual}) => percentual}%;
    background-color: ${({theme, type}) => theme[type]};
    height: 4px;
    border-radius: 4px;

`;