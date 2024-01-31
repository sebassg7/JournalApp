import { Routes,Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { CheckingAuth } from '../ui';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { useCheckAuth } from '../hooks';



export const AppRouter = () => {

const status = useCheckAuth();

  if( status === 'checking' ) {
    return <CheckingAuth/>
  }

  return (
    <Routes>
        {
        ( status === 'authenticated' ) 
        /* Login y Registro */
        ?<Route path="/*" element={<JournalRoutes/>}/>
        /* JournalApp */
        :<Route path="/auth/*" element={<AuthRoutes/>}/>
        }

        <Route path='/*' element={<Navigate to='/auth/login'/>}/>

        {/* <Route path='/*' element={<LoginPage/>}/> */}
    </Routes>
  )
}
