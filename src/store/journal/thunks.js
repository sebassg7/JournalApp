import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from './';
import { fileUpload, loadNotes } from '../../helpers';

export const starNewNote = () => {
    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );
        
        const { uid } = getState().auth;

        //uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ));
        const setDocResp = await setDoc( newDoc, newNote );
        console.log({ newDoc, setDocResp});

        newNote.id = newDoc.id;

        //dispatch que debemos hacer:

        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
        
        
    }
};

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        if( !uid ) throw new Error( 'El UID del usuario no esta establecido' );
        const notes = await loadNotes( uid );
        dispatch(setNotes(notes));
    }
};

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = {...note};
        delete noteToFireStore.id;
        
        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` );
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch( updateNote( note ) );
    }
};

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch(setSaving());

        // await fileUpload( files[0] );

        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) )
        };

        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
};

export const startDeletingNote = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await deleteDoc( docRef );
        console.log(note.id);

        dispatch( deleteNoteById( note.id ) );

    };
};



