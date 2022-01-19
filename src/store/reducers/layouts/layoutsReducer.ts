import { createAction, createReducer } from '@reduxjs/toolkit';
import { ILayoutsState, TBlockId, ISortBuilderBlocksParams } from '../../../types';
import { BLOCKS } from '../../../constants';

const initialState: ILayoutsState = {
  builder: {
    blocks: []
  },
  sidebar: {
    blocks: BLOCKS.map(id => ({ id, draggable: true }))
  }
};

export const sortBuilderBlocks = createAction<ISortBuilderBlocksParams>(
  'layouts/sortBuilderBlocks'
);
export const addBlockfromDropzone = createAction<TBlockId>('layouts/addBlockfromDropzone');

export const layoutsReducer = createReducer(initialState, builder => {
  builder.addCase(addBlockfromDropzone, (state, action) => {
    const id = action.payload;
    const draggable = id !== 'display';
    const newBlock = { id, draggable };

    state.builder.blocks.push(newBlock);
    state.sidebar.blocks.forEach(block => {
      if (block.id === id) block.draggable = false;
    });
  });
  builder.addCase(sortBuilderBlocks, (state, action) => {
    const { sourceId, destinationId, pole } = action.payload;
    const { blocks } = state.builder;

    const from = blocks.findIndex(block => block.id === sourceId);
    const to = blocks.findIndex(block => block.id === destinationId);
    const isMoveUp = from > to;
    const isPoleTop = pole === 'top';
    const indexOffsetUp = isPoleTop ? 0 : 1;
    const indexOffsetDown = isPoleTop ? -1 : 0;

    if (from < 0) {
      const isSourceDraggable = sourceId !== 'display';
      const newBlock = { id: sourceId, draggable: isSourceDraggable };
      const index = to + indexOffsetUp;

      blocks.splice(index, 0, newBlock);
      state.sidebar.blocks.forEach(block => {
        if (block.id === sourceId) block.draggable = false;
      });
    } else {
      const indexOffset = isMoveUp ? indexOffsetUp : indexOffsetDown;
      const index = to + indexOffset;
      const isSourceDraggable = blocks[from].draggable;

      if (isSourceDraggable) {
        const newBlock = blocks.splice(from, 1)[0];
        blocks.splice(index, 0, newBlock);
      }
    }
  });
});
