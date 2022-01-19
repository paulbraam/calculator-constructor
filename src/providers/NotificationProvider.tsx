import { useState, createContext } from 'react';
import { AlertColor } from '@mui/material';
import { Notification } from '../components/Notification/Notification';

interface NotificationProviderProps {
  children: React.ReactNode;
}

interface INotificationContext {
  open: boolean;
  setOpen: (value: boolean) => void;
  message: string;
  setMessage: (value: string) => void;
  severity: AlertColor;
  setSeverity: (value: AlertColor) => void;
}

export const NotificationContext = createContext<INotificationContext>({
  open: false,
  setOpen: open => {},
  message: '',
  setMessage: message => {},
  severity: 'info',
  setSeverity: severity => {}
});

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor>('info');

  const context = {
    open,
    setOpen,
    message,
    setMessage,
    severity,
    setSeverity
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
      <Notification />
    </NotificationContext.Provider>
  );
};
