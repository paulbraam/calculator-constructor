import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { styles } from './MainLayout.styles';
import { useClasses } from '../../hooks/useClasses';

export const MainLayout: React.FC = () => {
  const classes = useClasses(styles);
  return (
    <Container data-testid="main-layout" maxWidth={false} className={classes.root} disableGutters>
      <Outlet />
    </Container>
  );
};
