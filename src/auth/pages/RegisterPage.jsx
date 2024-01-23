// import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography,Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';


const formData = {
  email: 'journal@gmail.com',
  password: '123456',
  displayName: 'Journal Aplication',
};

export const RegisterPage = () => {

  const { displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
  
    <AuthLayout title='Crear cuenta'>

      <form onSubmit={onSubmit} > 
        <Grid // Contenedor de form
          container> 

          <Grid //Item del form => contenido => 
            item xs={12} sx={{mt:2}}>
              <TextField
                label= "Nombre completo"
                type="text"
                placeholder="Escribe tu nombre"
                fullWidth //Toma todo el ancho posible
                name='displayName'
                value={displayName}
                onChange={onInputChange}
              />
          </Grid>

          <Grid //Item del form => contenido => 
            item xs={12} sx={{mt:2}}>
              <TextField
                label= "Correo"
                type="email"
                placeholder="journal@mail.com"
                fullWidth //Toma todo el ancho posible
                name='email'
                value={ email }
                onChange={onInputChange}
              />
          </Grid>

          <Grid //Item del form => contenido => 
            item xs={12} sx={{mt:2}}>
              <TextField
                label= "Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth //Toma todo el ancho posible
                name='password'
                value={ password }
                onChange={onInputChange}
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
                type='submit'
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
