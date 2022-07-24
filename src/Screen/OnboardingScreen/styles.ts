import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6363',
    position: 'relative',
  },
  containerSwiperTitle: {
    flex: 0.7,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  containerButtonSection: {
    flex: 0.3,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginTop: 25,
    lineHeight: 30,
    textAlign: 'center',
    padding: 20,
  },
  wrapperItemTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    width: '100%',
    height: '50%',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  or: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 10,
  },
});

export default styles;
