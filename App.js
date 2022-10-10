import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/Login'
import HomeScreen from './Screens/Home'
import DogemScreen from './Screens/Dogem'
import ContactScreen from './Screens/Contact'
import RegisterScreen from './Screens/Register'
const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{headerShown:false}}
                    />
                <Stack.Screen name="Register" component={RegisterScreen} options={{title:'Register'} }/>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen name="Dogem" component={DogemScreen} options={{title:'Dogem'} }/>
                <Stack.Screen name="Contact" component={ContactScreen} options={{title:'Contact'} }/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyStack;