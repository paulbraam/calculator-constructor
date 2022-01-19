import React from 'react';

export type TOperator = '+' | '-' | '*' | '/';

export type TCalculatorKey = { [key: string]: string };

export interface ICalculatorProps {
  input: string;
  result: number;
  operator: TOperator | undefined;
}

export interface IBlockWrapperProps {
  children: React.ReactNode;
  enabled: boolean;
}

export interface ILayoutProps {
  layout: TLayout;
}

export interface ICalculatorButtonProps {
  value: string | TOperator;
  name: string;
  type: 'operator' | 'digit';
}

export interface ISortBuilderBlocksParams {
  sourceId: TBlockId;
  destinationId: TBlockId;
  pole: 'top' | 'bottom';
}

export type TMode = 'Constructor' | 'Runtime';

export type TLayout = 'builder' | 'sidebar';

export interface IDragItemProps {
  id: TBlockId;
  draggable: boolean;
  layout: TLayout;
}

export type TBlockId = 'display' | 'operators' | 'numbers' | 'result';

export interface IBlock {
  id: TBlockId;
  draggable: boolean;
}

export interface IBlocks {
  display: IBlock;
  operators: IBlock;
  numbers: IBlock;
  result: IBlock;
}

export interface IBlocksComponents {
  display: React.FC<any>;
  operators: React.FC<any>;
  numbers: React.FC<any>;
  result: React.FC<any>;
}

export interface ILayoutsState {
  builder: {
    blocks: IBlock[];
  };
  sidebar: {
    blocks: IBlock[];
  };
}

export interface IBlockComponent {
  draggable: boolean;
  isBeingDragged: boolean;
  layout: TLayout;
}

export interface IDragParams {
  id: TBlockId;
  layout: TLayout;
}

export type TPole = 'top' | 'bottom';
