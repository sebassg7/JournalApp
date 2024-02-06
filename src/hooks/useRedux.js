import { useDispatch, useSelector } from 'react-redux';

export const useRedux = ( value = '') => {
    const state = useSelector( state => state[value] );

    const dispatch = useDispatch();

    return{
        ...state,
        dispatch,
    }
};