import React, { Component } from 'react'

import Route from './routes'

export default function(){
  return(
    <Route />
  )
}



// import React, { Component } from 'react'
// import { View, Text, StyleSheet, Image, Alert} from 'react-native'
// import  Button  from '../src/components/button'

// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import PageHome from './screens/PageHome'
// import PageOptions from './screens/PageOptions'

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="PageHome" component={PageHome} />
//       <Stack.Screen name="PageOptions" component={PageOptions} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return(
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   )
// }
