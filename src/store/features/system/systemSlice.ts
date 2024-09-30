import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SystemState {
  offcanvas: {
    show: boolean
  }
}

// Define the initial state using that type
const initialState: SystemState = {
  offcanvas: {
    show: false
  }
}

export const systemSlice = createSlice({
  name: "system",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOffCanvas: (state, action: PayloadAction<any>) => {
      state.offcanvas = { ...state.offcanvas, ...action.payload}
    },
  },
});

export const {
  setOffCanvas
} = systemSlice.actions

export default systemSlice.reducer;
