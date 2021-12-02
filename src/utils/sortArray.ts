import { Sentence } from '../common/types';

const sortArray = (arrayToSort: Sentence[], sortBy: string): Sentence[] => {
	const sortedArray = [...arrayToSort];

	if (sortedArray.length > 1) {
		switch (sortBy) {
			case 'newest':
				sortedArray.sort((a, b) => b.createdAt - a.createdAt);
				break;
			case 'oldest':
				sortedArray.sort((a, b) => a.createdAt - b.createdAt);
				break;
			case 'longest':
				sortedArray.sort((a, b) => b.sentence.length - a.sentence.length);
				break;
			case 'shortest':
				sortedArray.sort((a, b) => a.sentence.length - b.sentence.length);
				break;
			default:
				return sortedArray;
		}
	}

	return sortedArray;
};

export default sortArray;
