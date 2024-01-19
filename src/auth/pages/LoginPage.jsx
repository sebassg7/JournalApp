import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography,Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';


export const LoginPage = () => {

  const { status } = useSelector(state => state.auth)

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'sbss@gmail.com',
    password: '123456'
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
  
    <AuthLayout title='Login'>

      <form
      onSubmit={onSubmit}> 
        <Grid // Contenedor de form
          container> 

          <Grid //Item del form => contenido => 
            item xs={12} sx={{mt:2}}>
              <TextField
                label= "Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth //Toma todo el ancho posible
                name='email'
                value={ email }
                onChange={ onInputChange }
              />
          </Grid>

          <Grid //Item del form => contenido => 
            item xs={12} sx={{mt:2}}>
              <TextField
                label= "Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth //Toma todo el ancho posible
                name= 'password'
                value={ password }
                onChange={ onInputChange }
              />
          </Grid>

          <Grid
            container
            spacing={ 2 }
            sx={{ mb:2, mt:1 }}>
              <Grid 
              item
              xs={ 12 }
              sm={ 6 }>
                <Button
                disabled={isAuthenticating}
                type='submit'
                variant='contained'
                fullWidth>Login</Button>
              </Grid>

              <Grid 
              item
              xs={ 12 }
              sm={ 6 }>
                <Button
                disabled={isAuthenticating}
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}>
                  <Google/> 
                  <Typography
                    sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>
          </Grid>

          <Grid
          container
          direction='row'
          justifyContent='end'>
            <Link 
              component={RouterLink} 
              color='inherit' 
              to='/auth/register'>
                Crear una cuenta
            </Link>
          </Grid>
        </Grid>

      </form>

    </AuthLayout>

  )
};
