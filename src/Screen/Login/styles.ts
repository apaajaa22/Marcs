import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 20,
  },
});

export default styles;
