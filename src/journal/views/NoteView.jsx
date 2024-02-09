import { useEffect, useMemo, useRef } from 'react';

import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Grid, Typography, Button, TextField, IconButton } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from '../components';
import { useForm } from '../../hooks/useForm';
import { useRedux } from '../../hooks';
import { setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal';

export const NoteView = () => {

    // const { active:note } = useSelector( state => state.journal );

    const { active:note, dispatch, messageSaved, isSaving } = useRedux('journal');
    const { body, title, date, onInputChange, formState } = useForm( note );
    
// console.log(note);

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    },[ date ]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch( setActiveNote( formState ) );
    }, [ formState ]);

    useEffect(() => {
        if( messageSaved != null ){
            Swal.fire( 'Nota actualizada', messageSaved, 'success' )
        }
    }, [ messageSaved ]);
    

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    };

    const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return;

        console.log('Subiendo archivos');

        dispatch( startUploadingFiles( target.files ) );
    };
    

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
            fontWeight='light'>{dateString}</Typography>
        </Grid>

        <input 
            type="file"
            multiple
            ref={ fileInputRef }
            onChange={ onFileInputChange } 
            style={{ display:'none' }}
        />

        <IconButton
            color='primary'
            disabled={ isSaving }
            onClick={ () => fileInputRef.current.click() }>
            <UploadOutlined/>
        </IconButton>

        <Grid
        item>
            <Button
            disabled={isSaving}
            onClick={onSaveNote}
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
            name='title'
            value={ title }
            onChange={ onInputChange }
            />
            <TextField 
            type="text" 
            variant="filled" 
            fullWidth 
            multiline
            placeholder="¿Qué sucedió en el día de hoy?"
            minRows='5'
            name='body'
            value={ body }
            onChange={ onInputChange }
            />
        <Grid
        container>

        </Grid>

        {/* Images Gallery */}
        <ImageGallery images={ note.imageUrls } />
        

    </Grid>
  )
}
