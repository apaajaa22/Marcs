import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';
import { OnboardingScreen, SplashScreen } from '../Screen';

const Router = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
