import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState : {
        isSaving: false,
        messageSaved:'',
        notes:[],
        active:null,
        //Nota Activa:
        // active: {
        //     id:'ABCD',
        //     title:'',
        //     body:'',
        //     date:123456,
        //     imageUrls:[], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg,
        // },
    },
    reducers: {

        savingNewNote : ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = null;
        },
        setNotes: ( state, action  ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = null;
            
        },
        updateNote: ( state, action ) => {
            state.isSaving = false;
            state.notes = state.notes.map(note =>{

                
                if(action.payload.id === note.id) {
                    return action.payload
                }

                return note
            });

            state.messageSaved = `${ action.payload.title }, actualización exitosa`
        },

        setPhotosToActiveNote: ( state, action ) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },

        clearNotesLogout: ( state ) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },

        deleteNoteById: ( state, action ) => {

        },
    },
});

//Action creators (function) are generated for each case reducer function
export const { 
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteNoteById,
} = journalSlice.actions;