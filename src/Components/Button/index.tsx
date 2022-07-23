import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ title, type, onPress }: ButtonProps) => {
  if (type === 'primary') {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}>
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'secondary') {
    return (
      <TouchableOpacity
        style={styles.containerSecondary}
        onPress={onPress}
        activeOpacity={0.7}>
        <Text style={styles.textButtonSecondary}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
