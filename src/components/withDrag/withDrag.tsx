import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { IDragItemProps, IBlockComponent } from '../../types';

export const withDrag = <P extends IDragItemProps>(
  Component: React.FunctionComponent<IBlockComponent>
) => {
  const DraggableItem = (props: P) => {
    const {
      isBeingDragged,
      handleDragStart,
      handleDragEnd,
      handleDragOver,
      handleDrop,
      handleDragEnter,
      handleDragLeave
    } = useDragAndDrop();
    const mode = useAppSelector(state => state.mode.value);
    const { id, draggable, layout } = props;
    const extendedProps = { isBeingDragged, ...props };
    const params = { id, layout };
    return (
      <div
        data-testid="with-drag"
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={e => handleDrop(e, params)}
        onDragStart={e => handleDragStart(e, params)}
        draggable={mode === 'Constructor' && draggable}>
        <Component {...extendedProps} />
      </div>
    );
  };
  return DraggableItem;
};
