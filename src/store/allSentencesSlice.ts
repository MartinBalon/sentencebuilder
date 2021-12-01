import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SentenceType = {
	id: string;
	createdAt: number;
	sentence: string;
};

const initialState: SentenceType[] = [];

export const allSentencesSlice = createSlice({
	name: 'allSentences',
	initialState,
	reducers: {
		addSentence: (state, action: PayloadAction<SentenceType>) => {
			state.push(action.payload);
		},
		removeSentence: (state, action: PayloadAction<SentenceType>) => {
			state = state.filter((sentence) => sentence.id !== action.payload.id);
		},
	},
});

export const { addSentence, removeSentence } = allSentencesSlice.actions;

export default allSentencesSlice.reducer;
