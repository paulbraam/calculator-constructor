import React, { useState } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { TPole, IDragParams } from '../types';
import { sortBuilderBlocks, addBlockfromDropzone } from '../store/reducers/layouts/layoutsReducer';

export const useDragAndDrop = () => {
  const dispatch = useAppDispatch();
  const [pole, setPole] = useState<TPole>('top');
  const [isBeingDragged, setIsBeingDragged] = useState<boolean>(false);

  const getPole = (event: React.DragEvent): TPole => {
    const target = event.target as HTMLDivElement;
    const clientRect = target.getBoundingClientRect();
    const clientY = event.clientY;
    const middleOfElement = clientRect.height / 2;
    const upperOffset = clientY - clientRect.top;
    return upperOffset < middleOfElement ? 'top' : 'bottom';
  };

  // general event handlers
  const handleDragStart = (event: React.DragEvent, params: IDragParams) => {
    event.dataTransfer.setData('text', JSON.stringify(params));
    setIsBeingDragged(true);
  };

  const handleDragOver: React.DragEventHandler = event => {
    event.preventDefault();
    const newPole = getPole(event);
    if (newPole === pole) return;
    const target = event.target as HTMLDivElement;
    target.classList.add(`droppable-${newPole}`);
    target.classList.remove(`droppable-${pole}`);
    setPole(newPole);
  };

  const handleDrop = (event: React.DragEvent, destination: IDragParams) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const source: IDragParams = JSON.parse(data);
    const target = event.target as HTMLDivElement;
    target.classList.remove(`droppable-${pole}`);
    if (destination.id !== source.id && destination.layout === 'builder')
      dispatch(sortBuilderBlocks({ sourceId: source.id, destinationId: destination.id, pole }));
  };

  const handleDragLeave: React.DragEventHandler = event => {
    const target = event.target as HTMLDivElement;
    target.classList.remove(`droppable-${pole}`);
  };

  const handleDragEnter: React.DragEventHandler = event => {
    const target = event.target as HTMLDivElement;
    target.classList.add(`droppable-${pole}`);
  };

  const handleDragEnd: React.DragEventHandler = event => {
    setIsBeingDragged(false);
  };

  // dropzone event handlers
  const handleDragEnterDropZone: React.DragEventHandler = event => {
    const target = event.target as HTMLDivElement;
    target.style.backgroundColor = '#f0f9ff';
  };

  const handleDragLeaveDropZone: React.DragEventHandler = event => {
    const target = event.target as HTMLDivElement;
    target.style.backgroundColor = '#fff';
  };

  const handleDropOntoDropZone: React.DragEventHandler = event => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const source: IDragParams = JSON.parse(data);
    dispatch(addBlockfromDropzone(source.id));
  };

  const handleDragOverDropZone: React.DragEventHandler = event => {
    event.preventDefault();
  };

  // placeholder event handlers
  const handleDragLeavePlaceholder: React.DragEventHandler = event => {
    const target = event.target as HTMLDivElement;
    target.classList.remove('droppable-top');
  };

  const handleDragEnterPlaceholder: React.DragEventHandler = event => {
    const target = event.target as HTMLDivElement;
    target.classList.add('droppable-top');
  };

  const handleDropOntoPlaceholder: React.DragEventHandler = event => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const source: IDragParams = JSON.parse(data);
    const target = event.target as HTMLDivElement;
    target.classList.remove('droppable-top');
    dispatch(addBlockfromDropzone(source.id));
  };

  const handleDragOverPlaceholder: React.DragEventHandler = event => {
    event.preventDefault();
  };

  return {
    isBeingDragged,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragLeave,
    handleDragEnter,
    handleDragEnd,
    handleDragEnterDropZone,
    handleDragLeaveDropZone,
    handleDropOntoDropZone,
    handleDragOverDropZone,
    handleDropOntoPlaceholder,
    handleDragLeavePlaceholder,
    handleDragEnterPlaceholder,
    handleDragOverPlaceholder
  };
};
