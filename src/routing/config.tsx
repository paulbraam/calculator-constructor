import { CalculatorBuilder } from '../components/CalculatorBuilder/CalculatorBuilder';
import { MainLayout } from '../components/MainLayout/MainLayout';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/calculator-constructor',
        element: <CalculatorBuilder />
      }
    ]
  }
];
