import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ParentWrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  SplashLogoImage: {
    width: '100%',
    height: '94%',
    position: 'absolute',
  },
  SplashAnimationWrapper: {
    top: '43%',
    marginHorizontal: '10%',
    alignItems: 'center',
  },
  SplashAnimation: {
    width: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
