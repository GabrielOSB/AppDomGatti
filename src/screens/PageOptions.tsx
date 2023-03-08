import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card } from 'react-native-paper';

const App = () => {
    const navigation = useNavigation()
    return (

    <ScrollView style={styles.containerBody}> 

        {/* Header */}
            <View style={styles.containerHeader}> 

                <TouchableOpacity  onPress={() => navigation.goBack()}>
                    <Image style={{width: 30, height: 30, marginTop: 15}} source={require('../assets/voltar.png')} />
                </TouchableOpacity>

                    <Image style={{width: 60, height: 55, marginTop: 7,}} source={require('../assets/barba.png')} />

                <TouchableOpacity  onPress={() => navigation.goBack()}>
                    <Image style={{width: 30, height: 30, marginTop: 15,}} source={require('../assets/proximo.png')} />
                </TouchableOpacity>

            </View >

        {/* Body */}
            <View style={styles.containerOptionsColumn}>

                    <Text style={{marginTop: 50, marginBottom: 20, fontFamily: 'RussoOne-Regular', color: 'black', fontSize: 20}}>Serviços</Text>

                <View style={styles.containerOptionsFlex}>

                    <View>
                        <TouchableOpacity style={styles.containerOptions}>
                        <Image style={{width: 35, height: 35, marginRight: 20, marginBottom: 20, marginTop: 20}} source={require('../assets/calendario.png')} />
                        <Text style={styles.fontText}>Agendamento</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.containerOptions}>
                        <Image style={{width: 35, height: 35, marginRight: 20, marginBottom: 20, marginTop: 20}} source={require('../assets/calendario-no-color.png')} />
                        <Text style={styles.fontText}>Cancelamento</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.containerOptions}>
                        <Image style={{width: 30, height: 30, marginRight: 20, marginBottom: 20, marginTop: 20}} source={require('../assets/contato.png')} />
                        <Text style={styles.fontText}>Contato</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.containerOptions}>
                        <Image style={{width: 30, height: 30, marginRight: 20, marginBottom: 20, marginTop: 20}} source={require('../assets/maps.png')} />
                        <Text style={styles.fontText}>Maps</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
    
        {/* Proximo Agendamento */}

        <View>
            <Card style={styles.containerAgendamento}>
                <Card.Content>
                <Text style={{color: '#F7A29E', fontFamily: 'RussoOne-Regular', textAlign: 'center', marginBottom: 20}}>Proximo Agendamento</Text>
                <Text style={{color: '#F7A29E', fontFamily: 'RussoOne-Regular', marginBottom: 10}}>Dia:</Text>
                <Text style={{color: '#F7A29E', fontFamily: 'RussoOne-Regular',}}>Horário:</Text>
                </Card.Content>
            </Card>
        </View>
    </ScrollView>
    )
    
}

export default App 

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#3B3F49'
    },
    containerBody: {
        backgroundColor: '#FAEDDF',
    },
    containerOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerOptionsFlex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    containerOptionsColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontText: {
        marginBottom: 20, 
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'RussoOne-Regular',
        color: 'black',
    },
    containerAgendamento: {
        backgroundColor: '#3B3F49',
        marginBottom: 60,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30
    }
})