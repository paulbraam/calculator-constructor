import { TLayout, TBlockId, TMode, TCalculatorKey } from './types';

export const BLOCKS: readonly TBlockId[] = Object.freeze([
  'display',
  'operators',
  'numbers',
  'result'
]);

export const LAYOUTS: readonly TLayout[] = Object.freeze(['sidebar', 'builder']);

export const MODES: readonly TMode[] = Object.freeze(['Runtime', 'Constructor']);

export const NUMBER_KEYS: TCalculatorKey[] = [
  { '1': '1' },
  { '2': '2' },
  { '3': '3' },
  { '4': '4' },
  { '5': '5' },
  { '6': '6' },
  { '7': '7' },
  { '8': '8' },
  { '9': '9' },
  { '0': '0' },
  { ',': '.' }
];

export const OPERATOR_KEYS: TCalculatorKey[] = [
  { '/': '/' },
  { '\u00d7': '*' },
  { '-': '-' },
  { '+': '+' }
];

export const RESULT_PRECISION: number = 15;

export const MAX_DISPLAY_LENGTH: number = 20;
