import DetailLogo from './detail-logo';
import DeleteLogo from './delete-logo';
import { ListItem, Paragraph } from './styled';
import { SentenceProps } from '../../../common/types';

const Sentence = ({ sentenceData }: SentenceProps) => {
	return (
		<ListItem>
			<Paragraph>{sentenceData.sentence}</Paragraph>
			<DetailLogo />
			<DeleteLogo />
		</ListItem>
	);
};

export default Sentence;
