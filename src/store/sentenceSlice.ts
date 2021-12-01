import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SentenceType = {
	value: string;
	touched: boolean;
	valid: boolean;
	errorMessage: string;
};

export type SentenceState = {
	who: SentenceType;
	what: SentenceType;
	where: SentenceType;
	when: SentenceType;
};

const initialState: SentenceState = {
	who: { value: '', touched: false, valid: false, errorMessage: '' },
	what: { value: '', touched: false, valid: false, errorMessage: '' },
	where: { value: '', touched: false, valid: false, errorMessage: '' },
	when: { value: '', touched: false, valid: false, errorMessage: '' },
};

export const sentenceSlice = createSlice({
	name: 'sentence',
	initialState,
	reducers: {
		updateWho: (state, action: PayloadAction<SentenceType>) => {
			state.who = action.payload;
		},
		updateWhat: (state, action: PayloadAction<SentenceType>) => {
			state.what = action.payload;
		},
		updateWhere: (state, action: PayloadAction<SentenceType>) => {
			state.where = action.payload;
		},
		updateWhen: (state, action: PayloadAction<SentenceType>) => {
			state.when = action.payload;
		},
		deleteSentence: () => {
			return initialState;
		},
	},
});

export const {
	updateWho,
	updateWhat,
	updateWhere,
	updateWhen,
	deleteSentence,
} = sentenceSlice.actions;

export default sentenceSlice.reducer;
