import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState : {
        isSaving: true,
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
        addNewEmptyNote: ( state, action ) => {
            state.counter += 1
        },
        setActiveNote: ( state, action ) => {

        },
        setNotes: ( state, action  ) => {

        },
        setSaving: ( state ) => {

        },
        updateNote: ( state, action ) => {

        },
        deleteNoteById: ( state, action ) => {

        },
    },
});

//Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;