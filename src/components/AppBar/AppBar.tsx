import { Button, Typography, Stack } from '@mui/material';
import { ReactComponent as CodeIcon } from '../../assets/code.svg';
import { ReactComponent as EyeIcon } from '../../assets/eye.svg';
import { styles } from './AppBar.styles';
import { useClasses } from '../../hooks/useClasses';
import { MODES } from '../../constants';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setMode } from '../../store/reducers/mode/modeReducer';
import { TMode } from '../../types';
import { useNotification } from '../../hooks/useNotification';
import { BLOCKS } from '../../constants';

export const AppBar: React.FC = () => {
  const classes = useClasses(styles);
  const activeMode = useAppSelector(state => state.mode.value);
  const { blocks } = useAppSelector(state => state.layouts.builder);
  const dispatch = useAppDispatch();
  const notification = useNotification();

  const switchMode = (mode: TMode) => {
    if (blocks.length !== BLOCKS.length) {
      notification.warning('Drag all of the blocks to the right');
      return;
    }
    dispatch(setMode(mode));
  };

  return (
    <div className={classes.root} data-testid="app-bar">
      <Stack direction="row" className={classes.switchWrapper}>
        {MODES.map(mode => {
          const switchClasses = [classes.switch];
          const Icon = mode === 'Runtime' ? EyeIcon : CodeIcon;
          const iconClasses = [classes.icon, classes.nonActiveIcon];
          if (activeMode === mode) {
            switchClasses.push(classes.switchActive);
            iconClasses.splice(1, 1, classes.activeIcon);
          }
          return (
            <Button
              key={mode}
              variant="outlined"
              color="secondary"
              className={switchClasses.join(' ')}
              onClick={() => switchMode(mode)}
              disableElevation
              fullWidth>
              <span className={classes.iconWrapper}>
                <Icon className={iconClasses.join(' ')} />
              </span>
              <Typography variant="body2">{mode}</Typography>
            </Button>
          );
        })}
      </Stack>
    </div>
  );
};
