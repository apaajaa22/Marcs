import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, View } from 'react-native';
import Login from '../Login';
import ButtonSection from './components/ButtonSection';
import SwiperTitle from './components/SwiperTitle';
import styles from './styles';

const OnboardingScreen = () => {
  const loginRef = useRef<LoginRef>(null);
  const [mountLogin, setMountLogin] = useState(false);

  useEffect(function backHandlerListener() {
    const backHandler = () => {
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backHandler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    };
  }, []);

  function onPressLogin() {
    setMountLogin(true);
    loginRef.current?.openLogin();
  }
  return (
    <View style={styles.container}>
      <SwiperTitle />
      <ButtonSection onPressLogin={onPressLogin} />
      {mountLogin && <Login ref={loginRef} />}
    </View>
  );
};

export default OnboardingScreen;
