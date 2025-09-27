import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ParentWrapper: {
    borderRadius: 20,
    marginRight: 5,
    marginBottom: 25,
    backgroundColor: '#0d0b1b',
    height: 150,
    paddingHorizontal: 10,
    paddingVertical: 22,
    boxShadow: '5px 5px 5px 0px #000000',
  },
  ChildWrapper: {
    flexDirection: 'row',
  },
  ImageStyle: {
    width: 110,
    height: 110,
  },
  TextWrapper: {
    flex: 1,
  },
  TitleStyle: {
    color: 'white',
    fontSize: 20,
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
  },
  TimeWrapper: {
    flexDirection: 'row-reverse',
    paddingRight: 15,
  },
  TimeStyle: {
    color: 'grey',
    fontSize: 16,
  },
});

export default styles;
