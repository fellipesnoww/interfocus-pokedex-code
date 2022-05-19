import React, { ReactNode, useContext, useEffect, useState } from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";
import { UsuarioDTO } from "../dtos/UsuarioDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProviderProps{
    children: ReactNode;
}

const URL_ACESSO_IAS = 'http://192.168.10.40:91';
const CLIENT_ID = '3f3f15d0-7231-4407-ac94-391e7fa33b2b';
const RESPONSE_TYPE = 'code';
const REDIRECT_URI = 'exp://192.168.10.246:19000';
const USUARIO_KEY_STORAGE = '@pokedex:usuario';

function AuthProvider({children}: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioDTO | null >(null);


    async function getDadosCode(code: string){
        const response = await api.post<UsuarioDTO>('/api/token', {
            code,
            grant_type: "authorization_code"
        },
        {
            baseURL: 'http://192.168.10.40:92'
        });

        console.log(response.data);

        return response.data && response.data.usuarioId !== 0 ? response.data : null;
    }

    async function autenticarComIAS(){
        try {
            let result = await WebBrowser.openAuthSessionAsync(
                `${URL_ACESSO_IAS}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`, REDIRECT_URI
            );

            console.log('Resultado Auth', result);

            let redirectData;

            if(result.type === 'success'){
                redirectData = Linking.parse(result.url);
                console.log(redirectData);
                const codePosAuth = redirectData.queryParams["code"];
                const usuarioIas = await getDadosCode(codePosAuth);
                setUsuario(usuarioIas);
                await AsyncStorage.setItem(USUARIO_KEY_STORAGE, JSON.stringify(usuarioIas))
            }

        } catch (error) {
            console.log(error);   
        }
    }

    async function logoff(){
        setUsuario(null);
        await AsyncStorage.removeItem(USUARIO_KEY_STORAGE);
    }


    useEffect(() => {
        async function  consultaUsuarioStorage() {
            const usuarioStorage = await AsyncStorage.getItem(USUARIO_KEY_STORAGE);
            console.log('usuario storage', usuarioStorage)
            if(usuarioStorage){
                const usarioParse = JSON.parse(usuarioStorage) as UsuarioDTO;
                setUsuario(usarioParse);
            }
        }

        consultaUsuarioStorage();
    }, []);

    return (
        <AuthContext.Provider value={{
            usuario,
            autenticarComIAS,
            logoff
        }}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export {AuthProvider, useAuth};