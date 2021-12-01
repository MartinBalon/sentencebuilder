import PreviousQuestion from '../previous-question';
import TextInput from '../../input';
import { LinksContainer, LeftLink } from './styled';
import { ADD_SENTENCE_URL, WHEN_URL } from '../../../constants';

const WhereComponent = () => {
	return (
		<section>
			<LinksContainer>
				<LeftLink>
					<PreviousQuestion link={`${ADD_SENTENCE_URL}/${WHEN_URL}`} />
				</LeftLink>
			</LinksContainer>
			<TextInput name='where' title='WHERE' />
		</section>
	);
};

export default WhereComponent;
