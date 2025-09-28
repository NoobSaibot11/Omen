import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ParentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  TitleTextStyle: {
    color: '#504065',
    fontSize: 32,
    fontWeight: 600,
  },
  ExitIconStyle: {
    height: 33,
    width: 33,
  },
  ChildWrapper: {
    alignItems: 'center',
  },
  ProfileImageStyle: {
    height: 220,
    width: 220,
  },
  NameTextStyle: {
    color: '#504065',
    fontSize: 32,
    fontWeight: 600,
  },
  TimeTextStyle: {
    color: 'white',
    fontSize: 48,
    paddingTop: 15,
  },
  DateTextStyle: {
    color: 'white',
    fontSize: 20,
  },
  CardWrapper: {
    paddingTop: 40,
  },
  UsernameCardStyle: {
    backgroundColor: '#020103ff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    height: 75,
    flexDirection: 'row',
    paddingLeft: 40,
  },
  UserNameImageStyle: {
    height: 65,
    width: 65,
    marginRight: 20,
  },
  UserNameTextStyle: {
    color: 'white',
    fontSize: 20,
  },
  SettingCardStyle: {
    backgroundColor: '#020103',
    alignItems: 'center',
    height: 75,
    borderColor: '#1E1E1E',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  SettingImageStyle: {
    height: 130,
    width: 130,
    left: 6,
  },
  SettingTextStyle: {
    color: 'white',
    fontSize: 20,
    left: -5,
  },
  AboutUsCardStyle: {
    backgroundColor: '#020103',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    height: 75,
    flexDirection: 'row',
    paddingLeft: 40,
  },
  AboutUsImageStyle: {
    height: 65,
    width: 65,
    marginRight: 20,
  },
  AboutUsTextStyle: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
