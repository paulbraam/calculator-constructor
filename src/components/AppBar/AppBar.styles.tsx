export const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 634px)': {
      justifyContent: 'center'
    }
  },
  switchWrapper: {
    padding: '2px',
    backgroundColor: '#e9eaeb',
    borderRadius: '6px',
    alignItems: 'center',
    margin: '15px 27px',
    width: '236px'
  },
  icon: {
    paddingRight: '6px',
    color: '#5d5fef !important'
  },
  activeIcon: {
    '& > path': {
      stroke: '#5d5fef'
    }
  },
  nonActiveIcon: {
    '& > path': {
      stroke: '#4d556'
    }
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  switch: {
    color: '#000000',
    minWidth: '0',
    height: '36px',
    border: '1px solid',
    borderRadius: '6px',
    textTransform: 'none',
    borderColor: '#e9eaeb !important'
  },
  switchActive: {
    backgroundColor: '#fff !important',
    borderColor: '#e2e3e5 !important'
  }
});
