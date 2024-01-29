import { useState } from 'react';
// import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography,Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';




const formData = {
  email: '',
  password: '',
  displayName: '',
};

const formValidations = {

  email:[ (value) => value.includes('@'), 'El correo debe de tener una @' ],
  password:[ (value) => value.length >= 6, 'El password debe de tener más de 6 letras' ],
  displayName:[ (value) => value.length >= 1, 'El nombre es obligatorio' ],

};

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setformSubmitted] = useState(false);

  const { 
          formState, displayName, email, password, onInputChange,  
          isFormValid, displayNameValid, emailValid, passwordValid 
        } = useForm(formData,formValidations);


  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);
    if ( !isFormValid ) return;
    dispatch(startCreatingUserWithEmailPassword(formState))
  };

  return (
  
    <AuthLayout title='Crear cuenta'>

      {/* <h1>FormValid { isFormValid ? 'Valido' : 'Incorrecto' }  </h1> */}

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
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
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
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
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
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
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
