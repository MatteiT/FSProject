import { createSlice } from '@reduxjs/toolkit';


export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal: '',
    isOpen: false,
  },
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    setisOpen : (state, action) => {
      state.isOpen = action.payload;
    }

  },
});

export const { setModal, setisOpen } = modalSlice.actions;

export const modalSelector = (state) => state.modal;

export default modalSlice.reducer;
