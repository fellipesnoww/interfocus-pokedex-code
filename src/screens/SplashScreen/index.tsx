import LottieView from "lottie-react-native";
import React from "react";
import animacao from '../../assets/animations/pokeball-load.json'
import { Container } from "./styles";

function SplashScreen(){
    return (
        <Container>
            <LottieView
                autoPlay
                loop
                resizeMode="contain"
                source={animacao}
                style={{
                    width: 100,
                    height: 100
                }}

            />
        </Container>
    )
}

export default SplashScreen;