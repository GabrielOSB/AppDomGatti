import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../routes/Stack/Models'

import Header from '../components/header';
import { Card } from 'react-native-paper';

const App = () => {
    const navigation = useNavigation<propsStack>()
    return (

    <ScrollView style={styles.global}> 

        {/* Header */}
            <View>
                <Header /> 
            </View >

        {/* Body */}

            <View>
                <Text style={styles.text}>Localização</Text>
            </View>

            <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.textCard}>Local: </Text>
                    <Text style={styles.textSecondary}>Ponto de Referencia:</Text>
                    <Text style={styles.textSecondary}>Cep:</Text>
                </Card.Content>
            </Card>

    </ScrollView>
    )
    
}

export default App 

const styles = StyleSheet.create({
    global:{
        backgroundColor: '#FAEDDF'
    },
    text:{
        fontFamily: 'RussoOne-Regular',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50, 
        marginBottom: 20,
        color: 'black'
    },
    textCard:{
        fontFamily: 'RussoOne-Regular',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        color: '#F7A29E'
    },
    card:{
        backgroundColor: '#3B3F49',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    textSecondary:{
        color: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        fontSize: 13,
        marginBottom: 10
    }
})