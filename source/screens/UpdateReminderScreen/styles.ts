import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  BackButtonWrapper: {
    position: 'absolute',
  },
  BackButtonStyle: {
    width: 30,
    height: 30,
  },
  ScreenTitleWrapper: {
    alignItems: 'center',
    paddingTop: 20,
  },
  ScreenTitleStyle: {
    color: '#8C76A6',
    fontSize: 32,
    fontWeight: 500,
  },
  TitleFieldWrapper: {
    backgroundColor: '#161821',
    borderRadius: 15,
    marginTop: 60,
    height: 60,
    justifyContent: 'center',
  },
  TitleFieldTextStyle: {
    paddingLeft: 25,
    fontSize: 20,
    color: 'white',
  },
  IconFieldWrapper: {
    alignItems: 'center',
    paddingTop: 40,
  },
  IconFieldInnerWrapper: {
    backgroundColor: '#161821',
    width: 140,
    height: 140,
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 25,
  },
  IconStyle: {
    height: 64,
    width: 64,
  },
  SubTextStyle: {
    color: '#4f4f4f',
    fontSize: 20,
    paddingTop: 6,
  },
  DateTimeFieldWrapper: {
    backgroundColor: '#161821',
    borderRadius: 15,
    marginTop: 40,
    height: 60,
    justifyContent: 'center',
  },
  DateTimeFiedlPlaceholdeStyle: {
    color: '#4f4f4f',
    fontSize: 20,
    alignSelf: 'center',
  },
  DateTimeTextStyle: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  DateFieldWrapper: {
    marginTop: 20,
  },
  SaveButtonWrapper: {
    height: 70,
    backgroundColor: '#9087D5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  SaveTextStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 600,
  },
  DeleteButtonWrapper: {
    marginTop: 30,
    marginBottom: 30,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DeleteTextStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 600,
  },
});

export default styles;
