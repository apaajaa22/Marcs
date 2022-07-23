import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const SplashScreen = ({ navigation }: SplashScreenNavigationProp) => {
  useEffect(function shouldNavigate() {
    setTimeout(function timeOut() {
      navigation.navigate('OnboardingScreen');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcs</Text>
      <Text style={styles.createdBy}>Created by Rahadian Reza R</Text>
    </View>
  );
};

export default SplashScreen;
