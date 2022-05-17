import { createContext } from "react";


interface IAuthContext{
    usuario: string;
    autenticarComIAS(): void;
    logoff(): void;
}

export const AuthContext = createContext({} as IAuthContext);