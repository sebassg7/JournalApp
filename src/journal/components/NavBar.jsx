import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';




export const NavBar = ({drawerWidth }) => {
  return (
    <AppBar
    position='fixed' //Siempre va a tener una posición fija
    sx={{
        width: {sm: `calc(100% - ${drawerWidth})`},
        ml: {sm: `${drawerWidth}`}
    }}
    >
        <Toolbar>
            <IconButton
            color='inherit' //Vuelve blanco las 3 rayitas
            edge='start' // cambia la ubicación del ícono de 3 rayitas
            sx={{
                mr:2,
                display: {sm:'none'}, // El ícono solo aparece en pantallas pequeñas
            }}
            > 
                <MenuOutlined/>
            </IconButton>

            <Grid 
            container
            direction='row'
            justifyContent='space-between' // Separa el contenido del Grid (título e ícono)
            alignItems='center' //Centra verticalmente el título JournalApp
            >
                {/* Titulo */}

                <Typography
                variant='h6' // Tamaño en HTML
                noWrap // Evita Wrap
                component='div'
                > 
                    JournalApp 
                </Typography> 

                {/* Icono de salida */}

                <IconButton
                color='error' //Color rojo
                >
                    <LogoutOutlined/> 
                </IconButton>
            </Grid>
        </Toolbar>

    </AppBar>
  )
};
