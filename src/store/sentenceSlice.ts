import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewSentence } from '../common/types';

export type NewSentenceState = {
	who: NewSentence;
	what: NewSentence;
	where: NewSentence;
	when: NewSentence;
};

const initialState: NewSentenceState = {
	who: { value: '', touched: false, valid: false, errorMessage: '' },
	what: { value: '', touched: false, valid: false, errorMessage: '' },
	where: { value: '', touched: false, valid: false, errorMessage: '' },
	when: { value: '', touched: false, valid: false, errorMessage: '' },
};

export const sentenceSlice = createSlice({
	name: 'sentence',
	initialState,
	reducers: {
		updateWho: (state, action: PayloadAction<NewSentence>) => {
			state.who = action.payload;
		},
		updateWhat: (state, action: PayloadAction<NewSentence>) => {
			state.what = action.payload;
		},
		updateWhere: (state, action: PayloadAction<NewSentence>) => {
			state.where = action.payload;
		},
		updateWhen: (state, action: PayloadAction<NewSentence>) => {
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
