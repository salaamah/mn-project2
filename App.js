import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import UseServices from './Screens/UseServices';
import Admin from './Screens/Admin';
import ServiceProvider from './Screens/ServiceProvider';

const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="UseServices" component={UseServices}/>
        <Stack.Screen name="Admin" component={Admin}/>
        <Stack.Screen name="ServiceProvider" component={ServiceProvider}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

