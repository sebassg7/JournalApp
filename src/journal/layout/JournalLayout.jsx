import { Box } from '@mui/material'
import React from 'react'

export const JournalLayout = ({children}) => {
  return (
    <Box // Actua como und div
    sx={{display: 'flex'}}>

        {/* NavBar */}

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
