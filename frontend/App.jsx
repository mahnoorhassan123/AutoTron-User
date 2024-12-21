import LoginPage from "./Screens/Login/Login";
import SignupPage from "./Screens/Signup/Signup";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

function App(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Login" component={LoginPage}/>
                <Stack.Screen name="Signup" component={SignupPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;