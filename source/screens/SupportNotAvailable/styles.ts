import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ParentWrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  ChildWrapper: {
    backgroundColor: '#ff8d28',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  ImageWrapper: {
    height: 100,
    width: 100,
    marginBottom: 60,
  },
  TextWrapper: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
});

export default styles;
