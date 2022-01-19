import { Container, Grid } from '@mui/material';
import { CalculatorLayout } from '../CalculatorLayout/CalculatorLayout';
import { AppBar } from '../AppBar/AppBar';
import { LAYOUTS } from '../../constants';
import { TLayout } from '../../types';
import { useClasses } from '../../hooks/useClasses';
import { styles } from './CalculatorBuilder.styles';

export const CalculatorBuilder = () => {
  const classes = useClasses(styles);
  return (
    <Container className={classes.root} data-testid="calculator-builder">
      <Grid container>
        <Grid item xs={12} className={classes.appbar}>
          <AppBar />
        </Grid>
      </Grid>
      <Grid container className={classes.layouts}>
        {LAYOUTS.map((layout: TLayout) => (
          <Grid item key={layout} className={classes.layout}>
            <CalculatorLayout key={layout} layout={layout} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
