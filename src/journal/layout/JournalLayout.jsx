import { Box } from '@mui/material';
import React from 'react';
import { NavBar } from '../components/NavBar';


const drawerWidth = '240px'; // Barra Lateral que mantiene un tamaño

export const JournalLayout = ({children}) => {
  return (
    <Box // Actua como und div
    sx={{display: 'flex'}}>

        <NavBar drawerWidth={drawerWidth}></NavBar>

        {/* SideBar */}

        <Box
        component='main'
        sx={{flexGrow: 1, p: 1}}>

            {/* ToolBar */}
            {children}

        </Box>
    </Box>
  )
};
