import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    // Este useEffect se activa siempre que haya cambios en los inputs (placeholders)
    
    useEffect(() => {
        createValidators();
    }, [formState])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    };

    const onResetForm = () => {
        setFormState( initialForm );
    };

    // La siguiente función internamente es tomar el formValidations
    // y crear un nuevo estado, para saber si los inputs (placeholders)
    // son validos o no.

    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations )) {
            const [ fnv, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fnv(formState[formField]) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );


    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
    };
};