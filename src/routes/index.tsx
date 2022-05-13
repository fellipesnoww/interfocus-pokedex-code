import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppRoutes from "./app.routes";


function Routes() {
    return (
      <NavigationContainer>
          <AppRoutes />
      </NavigationContainer>
    );
  }


  export default Routes;