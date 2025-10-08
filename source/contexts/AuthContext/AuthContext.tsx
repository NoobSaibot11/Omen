import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { REMINDERS_KEY, USER_TOKEN_KEY, USERNAME_KEY } from '../../config';
import { BottomSheet } from '../../components';

export type AuthState = {
  token: string | null;
  username: string;
  isLoading: boolean;
};

export type AuthAction =
  | { type: 'LOGIN'; payload: { token: string; username: string } }
  | { type: 'LOGOUT' }
  | {
      type: 'RESTORE_TOKEN';
      payload: { token: string | null; username: string };
    };

export type AuthContextType = {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
  login: (token: string, username: string) => Promise<void>;
  logout: () => Promise<void>;
};

const initialState: AuthState = {
  token: null,
  username: '',
  isLoading: true,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        token: action.payload.token,
        username: action.payload.username,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        token: null,
        username: '',
        isLoading: false,
      };
    case 'RESTORE_TOKEN':
      return {
        token: action.payload.token,
        username: action.payload.username,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext<AuthContextType>({
  state: initialState,
  dispatch: () => null,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [showErrorSheet, setShowErrorSheet] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const token = await AsyncStorage.getItem(USER_TOKEN_KEY);
        const username = (await AsyncStorage.getItem(USERNAME_KEY)) || '';
        dispatch({ type: 'RESTORE_TOKEN', payload: { token, username } });
      } catch (error) {
        setShowErrorSheet(true);
        setErrorMessage('Failed to load auth data.' + error);
        console.error('Failed to load auth data:', error);
      }
    };
    loadAuth();
  }, []);

  const login = async (token: string, username: string) => {
    try {
      await AsyncStorage.setItem(USER_TOKEN_KEY, token);
      await AsyncStorage.setItem(USERNAME_KEY, username);
      dispatch({ type: 'LOGIN', payload: { token, username } });
    } catch (error) {
      setShowErrorSheet(true);
      setErrorMessage('Failed to save auth data.' + error);
      console.error('Failed to save auth data:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.multiRemove([
        USER_TOKEN_KEY,
        USERNAME_KEY,
        REMINDERS_KEY,
      ]);
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      setShowErrorSheet(true);
      setErrorMessage('Failed to clear auth data.' + error);
      console.error('Failed to clear auth data:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
      <BottomSheet
        isVisible={showErrorSheet}
        closeSheet={() => setShowErrorSheet(false)}
        message={`Error: ${errorMessage || 'An unexpected error occurred.'}`}
        title="Please try again later"
      />
    </AuthContext.Provider>
  );
};
