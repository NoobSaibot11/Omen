import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParams } from '../../navigation/AppNavigator/types';

export type SplashScreenProps = NativeStackScreenProps<
  AppStackParams,
  'SplashScreen'
>;
