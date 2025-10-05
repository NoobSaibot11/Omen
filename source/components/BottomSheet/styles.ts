import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ParentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InnerParentWrapper: {
    backgroundColor: 'black',
  },
  InnerParentWrapper2: {
    flex: 1,
  },
  AnimatedSheetWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  ChildWrapper: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  SheetWrapper: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 350,
  },
  SheetInnerWrapper: {
    flex: 1,
  },
  CloseIconWrapper: {
    alignSelf: 'flex-end',
  },
  CloseIconStyle: {
    width: 30,
    height: 30,
  },
  TitleTextStyle: {
    fontSize: 28,
    fontWeight: 500,
  },
  MessageTextStyle: {
    fontSize: 18,
    marginTop: 20,
  },
  CloseButtonStyle: {
    height: 55,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CloseTextStyle: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
