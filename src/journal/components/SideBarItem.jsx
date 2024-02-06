import { TurnedInNot } from '@mui/icons-material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        console.log('Estoy dando click');
        dispatch( setActiveNote( { title, body, id, date, imageUrls }) );
    };

    const newTitle = useMemo(() => {

        return title.length > 11
            ? title.substring( 0, 11 ) + '...'
            : title;
    },[ title ]);

  return (
    <ListItem 
        key={ id } 
        disablePadding>
        <ListItemButton onClick={onClickNote} >
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ newTitle }/>
                <ListItemText secondary={ body }/>
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
