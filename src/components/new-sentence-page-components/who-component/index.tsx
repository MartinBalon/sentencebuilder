import TextInput from '../../input';
import NextQuestion from '../next-question';
import { Section, LinksContainer, RightLink } from './styled';
import { ADD_SENTENCE_URL, WHAT_URL } from '../../../constants';

const WhoComponent = () => {
	return (
		<Section>
			<LinksContainer>
				<RightLink>
					<NextQuestion link={`${ADD_SENTENCE_URL}/${WHAT_URL}`} />
				</RightLink>
			</LinksContainer>
			<TextInput name='who' title='WHO' />
		</Section>
	);
};

export default WhoComponent;
