import Sentence from '../sentence';
import { List } from './styled';
import { SentenceListProps } from '../../../common/types';

const SentencesList = ({ sentences }: SentenceListProps) => {
	return (
		<List>
			{sentences.map((sentence) => (
				<Sentence key={sentence.id} sentenceData={sentence} />
			))}
		</List>
	);
};

export default SentencesList;
