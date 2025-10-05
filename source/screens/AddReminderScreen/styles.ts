import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ParentWrapper: {
    flex: 1,
  },
  BackButtonWrapper: {
    position: 'absolute',
  },
  BackButtonStyle: { width: 30, height: 30 },
  TitleWrapper: {
    alignItems: 'center',
    paddingTop: 20,
  },
  TitleTextStyle: {
    color: '#8C76A6',
    fontSize: 32,
    fontWeight: 500,
  },
  TitleFieldWrapper: {
    backgroundColor: '#161821',
    borderRadius: 15,
    marginTop: 40,
    height: 60,
    justifyContent: 'center',
  },
  TitleInput: {
    paddingLeft: 25,
    fontSize: 20,
    color: 'white',
  },
  IconFieldWrapper: {
    alignItems: 'center',
    paddingTop: 90,
  },
  IconWrapper: {
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
    marginTop: 90,
    height: 60,
    justifyContent: 'center',
  },
  DateFieldWrapper: {
    marginTop: 20,
  },
  DateTimePlaceHolderText: {
    color: '#4f4f4f',
    fontSize: 20,
    alignSelf: 'center',
  },
  DateTimeTextStyle: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  FooterButtonWrapper: {
    marginBottom: 30,
    height: 70,
    backgroundColor: '#9087D5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  FooterButtonTextStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 600,
  },
  CheckBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DailyTextStyle: { color: 'white' },
});

export default styles;
