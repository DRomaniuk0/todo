import MuiPaper from '@mui/material/Paper';
import {styled} from '@mui/material';

export const Root = styled(MuiPaper)(() => ({
    height: 'calc(100vh - 4rem)',
    overflow: 'auto',
    position: 'relative',
    maxWidth: '1440px',
    margin: '0 auto',
    padding : '0 2rem',
}));