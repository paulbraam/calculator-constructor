import React from 'react';
import { Stack } from '@mui/material';
import { ResultActionBlock } from '../ResultActionBlock/ResultActionBlock';
import { NumbersBlock } from '../NumbersBlock/NumbersBlock';
import { DisplayBlock } from '../DisplayBlock/DisplayBlock';
import { OperatorsBlock } from '../OperatorsBlock/OperatorsBlock';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IBlock, IBlocksComponents } from '../../types';
import { withDrag } from '../withDrag/withDrag';
import { DropZone } from '../DropZone/DropZone';
import { Placeholder } from '../Placeholder/Placeholder';
import { ILayoutsState } from '../../types';
import { useClasses } from '../../hooks/useClasses';
import { styles } from './CalculatorLayout.styles';
import { ILayoutProps } from '../../types';

export const CalculatorLayout: React.FC<ILayoutProps> = ({ layout }) => {
  const layouts = useAppSelector(state => state.layouts);
  const mode = useAppSelector(state => state.mode.value);
  const classes = useClasses(styles);
  const { blocks } = layouts[layout as keyof ILayoutsState];

  const components: IBlocksComponents = {
    display: DisplayBlock,
    operators: OperatorsBlock,
    numbers: NumbersBlock,
    result: ResultActionBlock
  };

  const isBuilder = layout === 'builder';
  const isRunning = mode === 'Runtime';

  if (isRunning && !isBuilder) {
    return null;
  }

  return (
    <Stack className={classes.root} data-testid="calculator-layout">
      {blocks.map((block: IBlock) => {
        const Component = withDrag(components[block.id]);
        return <Component key={block.id} layout={layout} {...block} />;
      })}
      {isBuilder && !blocks.length ? <DropZone /> : <Placeholder />}
    </Stack>
  );
};
