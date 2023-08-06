import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './src/screens/first';
import AccountScreen from './src/screens/accounts';
import MyTabs from "./src/screens/tabs";
import ListScreen from './src/screens/list';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Accounts" component={AccountScreen} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;