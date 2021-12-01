import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { updateWhat } from '../../../store/sentenceSlice';
import TextInput from '../../input';
import NextQuestion from '../next-question';
import PreviousQuestion from '../previous-question';
import { LinksContainer, LeftLink, RightLink } from './styled';
import { ADD_SENTENCE_URL, WHO_URL, WHERE_URL } from '../../../constants';
import validateInput from '../../../utils/validateInput';

const WhatComponent = () => {
	const dispatch = useDispatch();
	const what = useSelector((state: RootState) => state.sentence.what);

	const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateWhat(validateInput(event.target.value)));
	};

	return (
		<section>
			<LinksContainer>
				<LeftLink>
					<PreviousQuestion link={`${ADD_SENTENCE_URL}/${WHO_URL}`} />
				</LeftLink>
				<RightLink>
					<NextQuestion link={`${ADD_SENTENCE_URL}/${WHERE_URL}`} />
				</RightLink>
			</LinksContainer>
			<TextInput
				name='what'
				title='WHAT'
				data={what}
				onChange={onInputChangeHandler}
			/>
		</section>
	);
};

export default WhatComponent;
