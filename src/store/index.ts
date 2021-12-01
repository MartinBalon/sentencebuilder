import { configureStore } from '@reduxjs/toolkit';
import sentenceReducer from './sentenceSlice';
import allSentencesReducer from './allSentencesSlice';

export const store = configureStore({
	reducer: {
		sentence: sentenceReducer,
		sentences: allSentencesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
