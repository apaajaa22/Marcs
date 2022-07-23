import React from 'react';
import { View } from 'react-native';
import ButtonSection from './components/ButtonSection';
import SwiperTitle from './components/SwiperTitle';
import styles from './styles';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <SwiperTitle />
      <ButtonSection />
    </View>
  );
};

export default OnboardingScreen;
