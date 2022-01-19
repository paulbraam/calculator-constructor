import React from 'react';
import { Container, Typography } from '@mui/material';
import { ReactComponent as DropHereIcon } from '../../assets/drop-zone.svg';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { useClasses } from '../../hooks/useClasses';
import { styles } from './DropZone.styles';

export const DropZone: React.FC = () => {
  const {
    handleDragEnterDropZone,
    handleDragLeaveDropZone,
    handleDropOntoDropZone,
    handleDragOverDropZone
  } = useDragAndDrop();
  const classes = useClasses(styles);
  return (
    <Container
      data-testid="drop-zone"
      onDragOver={handleDragOverDropZone}
      onDragEnter={handleDragEnterDropZone}
      onDragLeave={handleDragLeaveDropZone}
      onDrop={handleDropOntoDropZone}
      disableGutters
      className={classes.root}>
      <Container className={classes.content}>
        <DropHereIcon />
        <Typography
          color="primary"
          textAlign="center"
          variant="body1"
          className={classes.firstLine}>
          Перетащите сюда
        </Typography>
        <Typography textAlign="center" variant="body2" className={classes.secondLine}>
          любой элемент из левой панели
        </Typography>
      </Container>
    </Container>
  );
};
