import React from "react";
import { AuthProvider } from "./auth";
import { FavoriteProvider } from "./favorite";

interface CombineProviders {    
    children: React.ReactNode;
}

export default function CombineProviders({children}: CombineProviders){
    return (
        <AuthProvider>
            <FavoriteProvider>
                {children}
            </FavoriteProvider>
        </AuthProvider>
    );
};