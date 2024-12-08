import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    currentData: [],
    isModalOpen: false,
    idEdit: null,
    pages: null,
    activePage: 1
};

const userData = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        },
        setActivePage: (state, action) => {
            state.activePage = action.payload;
            const startIndex = (action.payload - 1) * 10;
            const endIndex = action.payload * 10;

            const currentData = state.data.slice(startIndex, endIndex);
            state.currentData = currentData
        },
        setPagesCount: (state, action) => {
            state.pages = action.payload;
        },
        setCurrentData: (state, action) => {
            const currentData = state.data.slice(0, 10);
            state.currentData = currentData;
        },
        setNewTask: (state, action) => {
            const newData = [action.payload, ...state.data];
            state.data = newData;

            state.activePage = 1;

            const currentData = newData.slice(0, 10);
            state.currentData = currentData;

            const pages = Math.ceil(newData.length / 10);
            state.pages = pages;
        },
        setChangeStatus: (state, action) => {
            const { id, completed } = action.payload;

            state.data = state.data.map(item =>
                item.id == id ? { ...item, completed } : item
            );

            state.currentData = state.currentData.map(item =>
                item.id == id ? { ...item, completed } : item
            );
        },
        deleteItem: (state, action) => {
            const id = +action.payload;
            const newData = state.data.filter(item => item.id !== id);
            state.data = newData;

            const startIndex = (state.activePage - 1) * 10;
            const endIndex = state.activePage * 10;

            const currentData = newData.slice(startIndex, endIndex);
            state.currentData = currentData

            const pages = Math.ceil(newData.length / 10);
            state.pages = pages;
        },
        setIDEdit: (state, action) => {
            state.idEdit = action.payload;
        },
        setChangeTitleTask: (state, action) => {
            const newData = action.payload;

            state.data = state.data.map(item =>
                item.id === newData.id ? { ...newData } : item
            );

            state.currentData = state.currentData.map(item =>
                item.id === newData.id ? { ...newData } : item
            );
        },
    }
});

export const { setIsModalOpen, setData, setActivePage, setPagesCount, setCurrentData, setNewTask, setChangeStatus, deleteItem, setIDEdit, setChangeTitleTask } = userData.actions;
export default userData.reducer;
