import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
    padding: 0 16px;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 44px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Titulo = styled.Text`
    font-size:  16px;
    color: ${({theme}) => theme.primary};
    font-family: ${({theme}) => theme.fonts.BOLD};
`;

export const Conteudo = styled.View`
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: center;
  margin-top: 41px;
`;

export const BackgroundImage = styled.View`
  background-color: ${({theme}) => theme.primary};
  width: 140px;
  height: 140px;
  align-items: center;
  justify-content: center;
  border-radius: 70px;
  margin-bottom: 30px;
`;

export const BotaoSair = styled.TouchableOpacity`
    padding: 15px 30px;
    background-color: ${({theme}) => theme.primary};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 41px;
`;

export const Sair = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.white};
  font-family: ${({theme}) => theme.fonts.REGULAR};
`;