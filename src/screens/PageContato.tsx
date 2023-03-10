import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../routes/Stack/Models'
import Header from '../components/header';

const App = () => {
    const navigation = useNavigation<propsStack>()
    return (

    <ScrollView style={styles.container}> 

        {/* Header */}
            <View>
                <Header /> 
            </View >

        {/* Body */}

            <View>
                <Text>Entrou</Text>
            </View>

    </ScrollView>
    )
    
}

export default App 

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FAEDDF'
    }
})