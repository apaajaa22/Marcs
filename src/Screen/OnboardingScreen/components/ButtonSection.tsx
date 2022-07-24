import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../../Components/Button';
import { BtnTextLogin, BtnTextRegister, or } from '../constant';
import styles from '../styles';

const ButtonSection = ({ onPressLogin, onPressRegister }: ButtonFuncProps) => {
  return (
    <View style={styles.containerButtonSection}>
      <View style={styles.buttonWrapper}>
        <Button title={BtnTextLogin} onPress={onPressLogin} />
        <Text style={styles.or}>{or}</Text>
        <Button
          type="secondary"
          title={BtnTextRegister}
          onPress={onPressRegister}
        />
      </View>
    </View>
  );
};

export default ButtonSection;
