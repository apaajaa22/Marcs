import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  },
  containerSecondary: {
    width: '101%',
    backgroundColor: '#FF6363',
    padding: 8,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  textButton: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textButtonSecondary: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
