import React from 'react';
import { Text, TextInput as TextInputRN, View } from 'react-native';
import styles from './styles';

const TextInputEmail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email</Text>
      <TextInputRN
        keyboardType="email-address"
        textContentType="emailAddress"
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Hello@email.id"
      />
    </View>
  );
};

export default TextInputEmail;
