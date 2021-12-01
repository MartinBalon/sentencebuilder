import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SentenceType = {
	value: string;
	touched: boolean;
	valid: boolean;
	errorMessage: string;
};

type SentenceState = {
	who: SentenceType;
	what: SentenceType;
	when: SentenceType;
	where: SentenceType;
};

const initialState: SentenceState = {
	who: { value: '', touched: false, valid: false, errorMessage: '' },
	what: { value: '', touched: false, valid: false, errorMessage: '' },
	when: { value: '', touched: false, valid: false, errorMessage: '' },
	where: { value: '', touched: false, valid: false, errorMessage: '' },
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
		updateWhen: (state, action: PayloadAction<SentenceType>) => {
			state.when = action.payload;
		},
		updateWhere: (state, action: PayloadAction<SentenceType>) => {
			state.where = action.payload;
		},
		deleteSentence: () => {
			return initialState;
		},
	},
});

export const {
	updateWho,
	updateWhat,
	updateWhen,
	updateWhere,
	deleteSentence,
} = sentenceSlice.actions;

export default sentenceSlice.reducer;
