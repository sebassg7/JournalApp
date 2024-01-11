import { Box, Toolbar } from '@mui/material';
import { NavBar,SideBar } from '../components';

const drawerWidth = '240px'; // Barra Lateral que mantiene un tamaño

export const JournalLayout = ({children}) => {
  return (
    <Box // Actua como und div
    sx={{display: 'flex'}}>

        <NavBar drawerWidth={drawerWidth}></NavBar>

        <SideBar drawerWidth={drawerWidth}></SideBar>

        <Box
        component='main'
        sx={{flexGrow: 1, p: 1}}>

            <Toolbar/>
            {children}

        </Box>
    </Box>
  )
};
