import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';


export const NothingSelectedView = () => {
  return (
    <Grid
    container // Contenedor de toda la página
    spacing={ 0 } // Espacio entre íconos
    direction= "column"
    alignItems="center"
    justifyContent="center"
    sx={{
        minHeight: "calc(100vh - 110px)", //Ocupa toda la pantalla
        backgroundColor: "primary.main", // Accedo al estilo que he creado
        borderRadius: 5,
    }}
    >
        <Grid 
        className='animate__animated animate__fadeIn animate__faster'
        item
        xs={12}>
            <StarOutline
            sx={{
                fontSize: 100,
                color: 'white'
            }}/>
        </Grid>

        <Grid 
        item
        xs={12}>
            <Typography
            variant='h5'
            color='white'> Selecciona o crea una nota </Typography>
        </Grid>
    </Grid>
  )
};

