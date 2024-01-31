import { SaveOutlined } from '@mui/icons-material';
import { Grid, Typography, Button, TextField } from '@mui/material';
import { ImageGallery } from '../components';


export const NoteView = () => {
  return (
    <Grid
    className='animate__animated animate__fadeIn animate__faster'
    container
    direction='row'
    justifyContent='space-between'
    alignItems='center'
    sx={{
        mb:1
    }}>
        <Grid
        item>
            <Typography
            fontSize={39}
            fontWeight='light'>11 de Enero de 2024</Typography>
        </Grid>
        <Grid
        item>
            <Button
            color='primary'
            sx={{
                padding:2
            }}>
                    <SaveOutlined
                    sx={{
                    fontSize: 30,
                    mr:1
                    }}/>
                    Guardar
            </Button>
            
        </Grid>
            <TextField // Es una caja donde va texto
            type="text" //Para que se utiliza esa caja
            variant="filled" //Cuando se pasa el ratón por encima, se torna gris
            fullWidth //Ocupa todo el ancho posible
            placeholder="Ingrese un título"
            label="Título"
            sx={{
                border: 'none', // Se quita el borde a la caja
                mb:1
            }}
            />
            <TextField 
            type="text" 
            variant="filled" 
            fullWidth 
            multiline
            placeholder="¿Qué sucedió en el día de hoy?"
            minRows='5'
            />
        <Grid
        container>

        </Grid>

        {/* Images Gallery */}
        <ImageGallery/>
        

    </Grid>
  )
}
