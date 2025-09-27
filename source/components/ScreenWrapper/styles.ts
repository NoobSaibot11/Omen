import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ParentWrapper: {
    flex: 1,
    backgroundColor: '#090815',
    marginTop: 20,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  ChildWrapper: {
    paddingHorizontal: 40,
    paddingTop: 30,
    flex: 1,
  },
});

export default styles;
