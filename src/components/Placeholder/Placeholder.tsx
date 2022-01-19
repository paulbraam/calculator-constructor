import { useClasses } from '../../hooks/useClasses';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { styles } from './Placeholder.styles';

export const Placeholder = () => {
  const {
    handleDragEnterPlaceholder,
    handleDragLeavePlaceholder,
    handleDropOntoPlaceholder,
    handleDragOverPlaceholder
  } = useDragAndDrop();
  const classes = useClasses(styles);
  return (
    <div
      data-testid="placeholder-block"
      onDragOver={handleDragOverPlaceholder}
      onDragEnter={handleDragEnterPlaceholder}
      onDragLeave={handleDragLeavePlaceholder}
      onDrop={handleDropOntoPlaceholder}
      className={classes.root}
    />
  );
};
