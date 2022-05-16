import styled, {css} from "styled-components/native";

interface Props{
    naoExibirBorda?: boolean;
}

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
`;


const borda = css`
    border-right-width: 1px;
    border-right-color: ${({theme}) => theme.ligth_gray}
`;

export const Dados = styled.View<Props>`
    align-items: center;
    justify-content: center;
    padding: 10px 24px;
    ${({naoExibirBorda = false}) => !naoExibirBorda && borda};
`;

export const Medidas = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Valor = styled.Text`
    font-size: 10px;
    color: ${({theme}) => theme.dark_gray};    
`;

export const Acoes = styled.View`
    align-items: flex-start;
    justify-content: center;
`;

export const Nome = styled.Text`
    font-size: 8px;
    color: ${({theme}) => theme.medium_gray}; 
    margin-top: 10px;
`;