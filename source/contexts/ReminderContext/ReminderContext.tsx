import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { Reminder } from './types';

export type ReminderState = {
  reminders: Reminder[];
};

export type ReminderAction =
  | { type: 'ADD_REMINDER'; payload: Reminder }
  | { type: 'UPDATE_REMINDER'; payload: Reminder }
  | { type: 'DELETE_REMINDER'; payload: number }
  | { type: 'FETCH_REMIDNERS'; payload: Reminder[] };

export type ReminderContextType = {
  state: ReminderState;
  dispatch: Dispatch<ReminderAction>;
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
    case 'FETCH_REMIDNERS':
      return {
        ...state,
        reminders: action.payload,
      };
    default:
      return state;
  }
};

export const ReminderContext = createContext<ReminderContextType>({
  state: initialState,
  dispatch: () => null,
});

export const ReminderProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reminderReducer, initialState);

  return (
    <ReminderContext.Provider value={{ state, dispatch }}>
      {children}
    </ReminderContext.Provider>
  );
};
