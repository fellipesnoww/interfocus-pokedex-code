import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

function AuthRoutes(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthRoutes;