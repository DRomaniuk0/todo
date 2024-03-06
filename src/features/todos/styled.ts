import ListItem from "@mui/material/ListItem";
import {styled} from '@mui/material/styles';

export const TodoListWrapper = styled("div")(() => ({
    display: 'grid',
    justifyContent: 'center',
}));

export const ListHeadWrapper = styled("div")(() => ({
    display: 'flex',
    alignItems: 'center',
    width: '600px',
    justifyContent: 'space-around',
    gap: '15px'
}));

export const FiltersStatsContainer = styled("div")(() => ({
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    margin: '20px 0',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
}));

export const TodoListItem = styled(ListItem)(({theme}) => ({
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: '4px',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
}));
