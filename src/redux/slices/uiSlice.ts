import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  search: string;
  filterCategory: string;
}

const initialState: UIState = {
  search: '',
  filterCategory: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setFilterCategory(state, action: PayloadAction<string>) {
      state.filterCategory = action.payload;
    },
  },
});

export const { setSearch, setFilterCategory } = uiSlice.actions;
export default uiSlice.reducer;
