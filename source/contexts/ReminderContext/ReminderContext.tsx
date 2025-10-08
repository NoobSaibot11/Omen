import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reminder } from './types';
import { REMINDERS_KEY } from '../../config';
import { BottomSheet } from '../../components';

export type ReminderState = {
  reminders: Reminder[];
};

export type ReminderAction =
  | { type: 'ADD_REMINDER'; payload: Reminder }
  | { type: 'UPDATE_REMINDER'; payload: Reminder }
  | { type: 'DELETE_REMINDER'; payload: number }
  | { type: 'FETCH_REMINDERS'; payload: Reminder[] };

export type ReminderContextType = {
  state: ReminderState;
  dispatch: Dispatch<ReminderAction>;
  addReminder: (reminder: Reminder) => Promise<void>;
  updateReminder: (reminder: Reminder) => Promise<void>;
  deleteReminder: (id: number) => Promise<void>;
};

const initialState: ReminderState = {
  reminders: [],
};

const reminderReducer = (
  state: ReminderState,
  action: ReminderAction,
): ReminderState => {
  switch (action.type) {
    case 'ADD_REMINDER':
      return { ...state, reminders: [...state.reminders, action.payload] };
    case 'UPDATE_REMINDER':
      return {
        ...state,
        reminders: state.reminders.map(r =>
          r.id === action.payload.id ? action.payload : r,
        ),
      };
    case 'DELETE_REMINDER':
      return {
        ...state,
        reminders: state.reminders.filter(r => r.id !== action.payload),
      };
    case 'FETCH_REMINDERS':
      return { ...state, reminders: action.payload };
    default:
      return state;
  }
};

export const ReminderContext = createContext<ReminderContextType>({
  state: initialState,
  dispatch: () => null,
  addReminder: async () => {},
  updateReminder: async () => {},
  deleteReminder: async () => {},
});

export const ReminderProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reminderReducer, initialState);
  const [showErrorSheet, setShowErrorSheet] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const stored = await AsyncStorage.getItem(REMINDERS_KEY);
        if (stored) {
          const reminders: Reminder[] = JSON.parse(stored);
          dispatch({ type: 'FETCH_REMINDERS', payload: reminders });
        }
      } catch (error) {
        setShowErrorSheet(true);
        setErrorMessage('Failed to fetch reminders.' + error);
        console.error('Failed to fetch reminders:', error);
      }
    };
    fetchReminders();
  }, []);

  const saveToStorage = async (reminders: Reminder[]) => {
    try {
      await AsyncStorage.setItem(REMINDERS_KEY, JSON.stringify(reminders));
    } catch (error) {
      setShowErrorSheet(true);
      setErrorMessage('Failed to save reminders.' + error);
      console.error('Failed to save reminders:', error);
    }
  };

  const addReminder = async (reminder: Reminder) => {
    const updated = [...state.reminders, reminder];
    dispatch({ type: 'ADD_REMINDER', payload: reminder });
    await saveToStorage(updated);
  };

  const updateReminder = async (reminder: Reminder) => {
    const updated = state.reminders.map(r =>
      r.id === reminder.id ? reminder : r,
    );
    dispatch({ type: 'UPDATE_REMINDER', payload: reminder });
    await saveToStorage(updated);
  };

  const deleteReminder = async (id: number) => {
    const updated = state.reminders.filter(r => r.id !== id);
    dispatch({ type: 'DELETE_REMINDER', payload: id });
    await saveToStorage(updated);
  };

  return (
    <ReminderContext.Provider
      value={{ state, dispatch, addReminder, updateReminder, deleteReminder }}
    >
      {children}
      <BottomSheet
        isVisible={showErrorSheet}
        title="Please try again later"
        message={`Error: ${errorMessage || 'An unexpected error occurred.'}`}
        closeSheet={() => setShowErrorSheet(false)}
      />
    </ReminderContext.Provider>
  );
};
