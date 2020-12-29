import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// ---- Import Screens 
import { Splash, MainScreen, AllMovies, MyMovies, AddMovie } from '../SCREENS/Index'

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Splash'}
            headerMode={Platform.OS === 'ios' ? 'float' : 'screen'}>
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{
                    title: 'Splash Screen',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    title: 'Main Screen',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="All Movies"
                component={AllMovies}
                options={{
                    title: 'All Movies',
                }}
            />
            <Stack.Screen
                name="My Movies"
                component={MyMovies}
                options={{
                    title: 'My Movies',
                }}
            />
            <Stack.Screen
                name="Add Movie"
                component={AddMovie}
                options={{
                    title: 'Add Movie',
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;