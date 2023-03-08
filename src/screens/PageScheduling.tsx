import React from "react";
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import  Header  from '../components/header'

const App = () => {
    const navigation = useNavigation()
    return(
        <View>
                <Header />
        </View>
    )
}

export default App