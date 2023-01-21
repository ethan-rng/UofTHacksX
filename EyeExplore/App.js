// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import WelcomeLoading from './app/screens/WelcomeLoading';
import SignUpLogin from './app/screens/SignUpLogin';
import SignUp from './app/screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First Loading"
          component={WelcomeLoading}
        />
        <Stack.Screen name="SignUpLogin" component={SignUpLogin} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
