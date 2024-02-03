export const starNewNote = () => {
    return async( dispatch ) => {
        //uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        //dispatch que debemos hacer:
        //dispatch( newNote ) => Nueva nota cuando este grabada
        //dispatch( activarNote ) => Activamos la nota
    }
};