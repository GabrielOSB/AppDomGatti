import React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native'

import  Header  from '../components/header'
import {Calendar} from 'react-native-calendars';
import { Card, Button } from 'react-native-paper';

const App = () => {
    return(
    <ScrollView> 

        {/* Header */}
        <View>
            <Header /> 
        </View >
        {/* Calendario */}
        <View style={styles.container}>
            < Calendar
                 onDayPress={date => {console.log(date)}}  
                 hideExtraDays={true}
                 hideArrows={true}
            />
        </View>

        {/* Horarios */}
        <View style={styles.viewCard}>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Text style={styles.textCards}>
                        09:00
                    </Text>
                </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Text style={styles.textCards}>
                        10:00
                    </Text>
                </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Text style={styles.textCards}>
                        11:00
                    </Text>
                </TouchableOpacity>
            </Card>
        </View>

        <View style={styles.viewCard}>
            
            <Card style={styles.card}>
                <TouchableOpacity>
                    <Text style={styles.textCards}>
                        12:00
                    </Text>
                </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Text style={styles.textCards}>
                        14:00
                    </Text>
                </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Text style={styles.textCards}>
                        15:00
                    </Text>
                </TouchableOpacity>
            </Card>
        </View>

        <View style={styles.viewCard}>
        <Button  style={styles.button} mode="contained" onPress={() => console.log('Pressed')} uppercase={true} >
            Confirmar
        </Button>
        </View>

    </ScrollView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginBottom: 35
    },
    viewCard: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        backgroundColor: '#3B3F49',
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10
    },
    textCards: {
        color: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        textAlign: 'center',
        paddingTop: 8,
        paddingBottom: 8,
    },
    button: {
        backgroundColor: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        fontSize: 18,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'RussoOne-Regular',
    }
  });