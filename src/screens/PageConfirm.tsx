import React from 'react'
import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../routes/Stack/Models'

import Header from '../components/header'

const App = () => {
    const navigation = useNavigation<propsStack>()
    return(

    <ScrollView>
        
        <View>
            <Header />
        </View>

    </ScrollView>

    )
}

export default App