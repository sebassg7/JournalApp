import { Grid, TextField, Typography } from '@mui/material';



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
      </Grid>
    </form>

  </Grid>

    </Grid>
  )
}
