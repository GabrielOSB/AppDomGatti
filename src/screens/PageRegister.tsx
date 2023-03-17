import React from "react";
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { propsStack } from '../routes/Stack/Models'
import { useNavigation } from '@react-navigation/native'

import Header from '../components/header'

const App = () => {

    const [text, setText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const mask = '(11) 00000-0000';
    const navigation = useNavigation<propsStack>()

    return (
        <ScrollView style={style.global}>
        
        {/* Header */}
            <View>
                <Header />
            </View >

            <Text style={style.firstText}>Informe seus dados</Text>

        <View style={style.containerInput}>


            <View>

                <TextInput
                style={style.input}
                mode="outlined"
                label="Nome Completo"
                placeholder=""
                right={<TextInput.Affix/>}
                />

            </View>

            <View>

                <TextInput
                style={style.input}
                mode="outlined"
                label="Numero de Celular"
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
                placeholder={mask}
                right={<TextInput.Affix/>}
                />

            </View>

            <Button  style={style.button} mode="contained" onPress={() => navigation.navigate("Scheduling")} uppercase={true} >
            Continuar
            </Button>

        </View>

        </ScrollView>
    )
}

export default App

const style = StyleSheet.create({
    global: {
        backgroundColor: '#FAEDDF'
    },
    firstText:{
        textAlign: 'center',
        fontSize: 18,
        marginTop: 30,
        fontFamily: 'RussoOne-Regular',
        color: 'black'
    },
    containerInput:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50, 
    },
    input:{
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        fontSize: 18,
        marginTop: 20,
    },
})