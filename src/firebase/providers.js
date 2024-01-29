import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );  
        const { displayName, email, photoURL, uid  } = result.user;

        return{
            ok: true,
            // User info if ok:true // Enviamos lo siguiente:
            displayName, 
            email, 
            photoURL, 
            uid
        }      
    } catch (error) {
        
        const errorCode = error.code; //Error código
        const errorMessage = error.message; //Error mensaje
        return{
            ok:false,
            errorMessage,
        }
    }
};

export const registerUserWithEmailPassword = async ( { email, password, displayName } ) => {

    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        await updateProfile(FirebaseAuth.currentUser,{displayName});

        //TODO: actualizar el display name en FireBase

        return {
            ok:true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error);
        return { 
            ok:false, 
            errorMessage: error.message,
        }
    }

};