import { RESULT_PRECISION, MAX_DISPLAY_LENGTH } from '../constants';

const falseyResults = [-Infinity, Infinity, NaN];

export const formatInput = (value: string) => {
  const start = value.length - MAX_DISPLAY_LENGTH;
  const end = value.length;
  return value.substring(start, end);
};

export const setFontSize = (val: string | number) => {
  const length = String(val).length;
  switch (true) {
    case length > 14:
      return '16px';
    case length > 9:
      return '24px';
    default:
      return '36px';
  }
};

const trimResult = (value: number) => +value.toPrecision(RESULT_PRECISION);

export const formatResult = (value: number) => {
  return !falseyResults.includes(value) ? trimResult(value) : 'Не определено';
};
