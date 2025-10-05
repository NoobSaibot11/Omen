import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ParentWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ChildWrapper: {
    backgroundColor: '#1a1837',
    width: '90%',
    borderRadius: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    padding: 10,
    justifyContent: 'center',
  },
  ImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  CancelTextStyle: {
    color: 'white',
    paddingTop: 15,
    fontSize: 15,
  },
});

export default styles;
