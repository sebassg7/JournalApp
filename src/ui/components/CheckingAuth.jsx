import { Grid, CircularProgress } from '@mui/material';

export const CheckingAuth = () => {
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
        }}>

        <Grid 
            // item
            container
            direction='row'
            justifyContent='center'>
                <CircularProgress color='warning' />
        </Grid>

    </Grid>
    )
};
