import { TurnedInNot } from '@mui/icons-material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { useMemo } from 'react';

export const SideBarItem = ({ id, title, body}) => {

    // const newTitle = useMemo(() =>)

    const newTitle = useMemo(() => {

        return title.length > 11
            ? title.substring( 0, 11 ) + '...'
            : title;
    },[ title ]);

  return (
    <ListItem 
        key={ id } 
        disablePadding>
        <ListItemButton>
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
