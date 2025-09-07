import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator/types';

export type SplashScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SplashScreen'
>;
