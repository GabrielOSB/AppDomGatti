import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/PageHome"
import Options from "../../screens/PageOptions"
import Scheduling from "../../screens/PageScheduling"

import { propsNavigationStack } from "./Models";

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} /> 
            <Screen name="Option" component={Options} /> 
            <Screen name="Scheduling" component={Scheduling} /> 
        </Navigator>
    )
}