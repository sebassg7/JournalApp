import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography,Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';



export const LoginPage = () => {
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
        Login
    </Typography> 

    {/* Formulario */}

    <form> 
      <Grid // Contenedor de form
        container> 

        <Grid //Item del form => contenido => 
          item xs={12} sx={{mt:2}}>
            <TextField
              label= "correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth //Toma todo el ancho posible
            />
        </Grid>

        <Grid //Item del form => contenido => 
          item xs={12} sx={{mt:2}}>
            <TextField
              label= "contraseña"
              type="passwrod"
              placeholder="contraseña"
              fullWidth //Toma todo el ancho posible
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
              variant='contained'
              fullWidth>Login</Button>
            </Grid>

            <Grid 
            item
            xs={ 12 }
            sm={ 6 }>
              <Button
              variant='contained'
              fullWidth>
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

  </Grid>

    </Grid>
  )
}
