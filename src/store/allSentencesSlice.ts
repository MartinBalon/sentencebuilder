import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sentence } from '../common/types';

const initialState: Sentence[] = [];

export const allSentencesSlice = createSlice({
	name: 'allSentences',
	initialState,
	reducers: {
		addSentence: (state, action: PayloadAction<Sentence>) => {
			state.push(action.payload);
		},
		removeSentence: (state, action: PayloadAction<Sentence>) => {
			return state.filter((sentence) => sentence.id !== action.payload.id);
		},
	},
});

export const { addSentence, removeSentence } = allSentencesSlice.actions;

export default allSentencesSlice.reducer;
