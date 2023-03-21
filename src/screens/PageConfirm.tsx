import React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../routes/Stack/Models'

import Header from '../components/header'
import { Card, Button } from 'react-native-paper';

const App = () => {
    const navigation = useNavigation<propsStack>()
    return (

        <ScrollView style={style.global}>

            <View>
                <Header />
            </View>

            <View>

                <View>
                    <Card style={style.card}>
                        <Card.Content>
                            <View style={style.containerCards}>
                                <Text style={style.textCard}>Agendamento Confirmado !!</Text>
                            </View>
                            
                            <Text style={style.textCardSecondary}>Dia:</Text>
                            <Text style={style.textCardSecondary}>Horario:</Text>

                        </Card.Content>

                        <Button style={style.button} mode="contained" onPress={() => navigation.navigate("Home")} uppercase={true} >
                            Fechar
                        </Button>
                    </Card>
                </View>

            </View>
        </ScrollView>

    )
}

export default App

const style = StyleSheet.create({
    global: {
        backgroundColor: '#FAEDDF'
    },
    containerCards: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    card:{
        backgroundColor: '#3B3F49',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 50,
    },
    textCard:{
        fontFamily: 'RussoOne-Regular',
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 10,
        fontSize: 15,
        color: '#F7A29E'
    },
    textCardSecondary:{
        fontFamily: 'RussoOne-Regular',
        marginBottom: 15,
        fontSize: 15,
        color: '#F7A29E'
    },
    button:{
        backgroundColor: '#F7A29E',
        marginEnd: 50,
        marginStart: 50,
        marginBottom: 30,
    }
})