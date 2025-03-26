import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameProvider } from './components/GameContext';
import HomeScreen from './components/HomeScreen';
import GameSetupScreen from './components/GameSetupScreen';
import GamePlayScreen from './components/GamePlayScreen';
import ResultsScreen from './components/ResultsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ 
            headerStyle: { backgroundColor: '#007bff' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Civil Engineer Speed Math' }}
          />
          <Stack.Screen 
            name="GameSetup" 
            component={GameSetupScreen} 
            options={{ title: 'Game Setup' }}
          />
          <Stack.Screen 
            name="GamePlay" 
            component={GamePlayScreen} 
            options={{ title: 'Math Challenge' }}
          />
          <Stack.Screen 
            name="Results" 
            component={ResultsScreen} 
            options={{ title: 'Game Results' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}