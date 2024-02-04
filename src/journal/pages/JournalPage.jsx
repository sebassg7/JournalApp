import { AddOutlined, MailOutline } from '@mui/icons-material';
import { Typography, IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView, NoteView } from '../views';
import { useDispatch } from 'react-redux';
import { starNewNote } from '../../store/journal/thunks';


export const JournalPage = () => {

  const dispatch = useDispatch();
  
  const onClickNewNote = () => {
    dispatch(starNewNote());
  };

  return (
    <JournalLayout>
      {/* <Typography> Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 Metallica en Colombia 2024 </Typography> */}
      <NothingSelectedView/>
      {/* <NoteView/> */}
      <IconButton
      onClick={onClickNewNote}
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        position:'fixed',
        ':hover':{ backgroundColor:'error.main', opacity: 0.5 },
        right: 50,
        bottom:50,
      }}>
        <AddOutlined sx={{ fontSize:30 }}/>
      </IconButton>
    </JournalLayout>
  )
};
