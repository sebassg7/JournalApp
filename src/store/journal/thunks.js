import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const starNewNote = () => {
    return async( dispatch, getState ) => {
        
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

        //dispatch que debemos hacer:
        //dispatch( newNote ) => Nueva nota cuando este grabada
        //dispatch( activarNote ) => Activamos la nota
    }
};