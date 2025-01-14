import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import LoginPage from './Screens/Login/Login';
import SignupPage from './Screens/Signup/Signup';

function App() {
    const [isSplashVisible, setSplashVisible] = useState(true);
    const Stack = createNativeStackNavigator();

    useEffect(() => {
        SplashScreen.hide();
        const timer = setTimeout(() => {
            setSplashVisible(false);
        }, 2000); // 2 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    if (isSplashVisible) {
        return null; // Render nothing while splash screen is visible
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Signup" component={SignupPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
