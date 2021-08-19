import { configureStore } from '@reduxjs/toolkit';

import bgSlice from './bg-slice';

const store = configureStore({
  reducer: { color: bgSlice.reducer },
});

export default store;
