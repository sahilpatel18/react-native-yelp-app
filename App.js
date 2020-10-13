import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import FoodDetailScreen from './src/screens/FoodDetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Yelp Search" component={SearchScreen} />
        <Stack.Screen name="Details" component={FoodDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;