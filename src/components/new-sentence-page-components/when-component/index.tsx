import TextInput from '../../input';
import NextQuestion from '../next-question';
import PreviousQuestion from '../previous-question';
import { LinksContainer, LeftLink, RightLink } from './styled';
import { ADD_SENTENCE_URL, WHAT_URL, WHERE_URL } from '../../../constants';

const WhenComponent = () => {
	return (
		<section>
			<LinksContainer>
				<LeftLink>
					<PreviousQuestion link={`${ADD_SENTENCE_URL}/${WHAT_URL}`} />
				</LeftLink>
				<RightLink>
					<NextQuestion link={`${ADD_SENTENCE_URL}/${WHERE_URL}`} />
				</RightLink>
			</LinksContainer>
			<TextInput name='when' title='WHEN' />
		</section>
	);
};

export default WhenComponent;
