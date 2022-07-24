import React from 'react';
import { Text, TextInput as TextInputRN, View } from 'react-native';
import styles from './styles';

const TextInputPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password</Text>
      <TextInputRN
        keyboardType="default"
        textContentType="password"
        style={styles.textInput}
        secureTextEntry
        placeholder="********"
      />
    </View>
  );
};

export default TextInputPassword;
