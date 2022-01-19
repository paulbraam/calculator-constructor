import { useContext } from 'react';
import { NotificationContext } from '../providers/NotificationProvider';

export const useNotification = () => {
  const { open, setOpen, message, setMessage, severity, setSeverity } =
    useContext(NotificationContext);

  function warning(message: string) {
    setOpen(true);
    setMessage(message ?? 'Warning');
    setSeverity('warning');
  }

  function error(message: string) {
    setOpen(true);
    setMessage(message ?? 'Error');
    setSeverity('error');
  }

  function info(message: string) {
    setOpen(true);
    setMessage(message ?? 'Info');
    setSeverity('info');
  }

  function success(message: string) {
    setOpen(true);
    setMessage(message ?? 'Success');
    setSeverity('success');
  }

  return {
    open,
    message,
    severity,
    setOpen,
    setMessage,
    setSeverity,
    warning,
    success,
    info,
    error
  };
};
