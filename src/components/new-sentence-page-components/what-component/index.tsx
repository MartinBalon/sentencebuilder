import TextInput from '../../input';
import NextQuestion from '../next-question';
import PreviousQuestion from '../previous-question';
import { LinksContainer, LeftLink, RightLink } from './styled';
import { ADD_SENTENCE_URL, WHO_URL, WHEN_URL } from '../../../constants';

const WhatComponent = () => {
	return (
		<section>
			<LinksContainer>
				<LeftLink>
					<PreviousQuestion link={`${ADD_SENTENCE_URL}/${WHO_URL}`} />
				</LeftLink>
				<RightLink>
					<NextQuestion link={`${ADD_SENTENCE_URL}/${WHEN_URL}`} />
				</RightLink>
			</LinksContainer>
			<TextInput name='what' title='WHAT' />
		</section>
	);
};

export default WhatComponent;
