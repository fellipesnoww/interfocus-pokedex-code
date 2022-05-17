import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../screens/Home";
import Detalhes from "../screens/Detalhes";
import Perfil from "../screens/Perfil";
import Login from "../screens/Login";
import Favoritos from "../screens/Favoritos";
import { useTheme } from "styled-components";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// <Stack.Navigator 
        //     screenOptions={{
        //         headerShown: false
        //     }}
        //     >
        //     <Stack.Screen name="Favoritos" component={Favoritos} />
        //     <Stack.Screen name="Login" component={Login} />
        //     <Stack.Screen name="Perfil" component={Perfil} />
        //     <Stack.Screen name="Home" component={Home} />
        //     <Stack.Screen name="Detalhes" component={Detalhes} />
        // </Stack.Navigator>



function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
    )
}

function FavoritosStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FavoritosScreen" component={Favoritos} />
        </Stack.Navigator>
    )
}

function PerfilStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="PerfilScreen" component={Perfil} />
        </Stack.Navigator>
    )
}

function AppRoutes() {

    const tema = useTheme();

    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: tema.primary,
            tabBarInactiveTintColor: tema.ligth_gray 
         }}>
            <Tab.Screen 
                name="Home" 
                component={HomeStack}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialCommunityIcons 
                            name="home"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Tab.Screen 
                name="Favoritos" 
                component={FavoritosStack}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons 
                            name="star"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Tab.Screen 
                name="Perfil" 
                component={PerfilStack}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons 
                            name="person"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Tab.Navigator>
    );
  }

  export default AppRoutes;