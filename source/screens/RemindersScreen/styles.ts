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
    fontWeight: '600',
  },
  ChildWrapper: {
    paddingBottom: 50,
  },
});

export default styles;
