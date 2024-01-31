import { Grid,Typography } from '@mui/material';

export const AuthLayout = ({children, title=''}) => {
    return (

    
    <Grid
        container // Contenedor de toda la página
        spacing={ 0 } // Espacio entre íconos
        direction= "column"
        alignItems="center"
        justifyContent="center"
        sx={{
            minHeight: "100vh", //Ocupa toda la pantalla
            backgroundColor: "primary.main", // Accedo al estilo que he creado
            padding: 4,
        }}
    >

        <Grid 
            item //La caja del centro
            className="box-shadow" // La caja tendra sombra
            xs={3} //Tamaño de la caja Otro: md ó xl
            sx={{
            width: { sm:450 },
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            }}
    >

            {/* Titulo */}
            <Typography 
            variant='h5'
            // mb = margin-button
            sx={{mb:1}}> 
                {title}
            </Typography> 

            {children}

        </Grid>
    </Grid>
    
    )
};
