import { NewSentenceState } from '../store/sentenceSlice';

const createSentence = (data: NewSentenceState, valid: boolean): string => {
	if (valid) {
		return `${data.who.value} ${data.what.value} ${data.where.value} ${data.when.value}.`;
	} else {
		return '';
	}
};

export default createSentence;
