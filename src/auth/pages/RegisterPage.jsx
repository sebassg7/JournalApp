// import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography,Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
  
    <AuthLayout title='Crear cuenta'>

      <form> 
        <Grid // Contenedor de form
          container> 

          <Grid //Item del form => contenido => 
            item xs={12} sx={{mt:2}}>
              <TextField
                label= "Nombre completo"
                type="text"
                placeholder="Escribe tu nombre"
                fullWidth //Toma todo el ancho posible
              />
          </Grid>

          <Grid //Item del form => contenido => 
            item xs={12} sx={{mt:2}}>
              <TextField
                label= "Contraseña"
                type="passwrod"
                placeholder="Contraseña"
                fullWidth //Toma todo el ancho posible
              />
          </Grid>

          <Grid
            container
            spacing={ 2 }
            sx={{ mb:2, mt:1 }}>
              <Grid 
              item
              xs={ 12 }>
                <Button
                variant='contained'
                fullWidth>Crear cuenta</Button>
              </Grid>
          </Grid>

          <Grid
          container
          direction='row'
          justifyContent='end'>

            <Typography 
            sx={{mr:1}}>
              ¿Ya tienes cuenta?
            </Typography>

            <Link 
              component={RouterLink} 
              color='inherit' 
              to='/auth/login'>
                Ingresar
            </Link>
          </Grid>
        </Grid>

      </form>

    </AuthLayout>

  )
};
