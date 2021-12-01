import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { updateWho } from '../../../store/sentenceSlice';
import TextInput from '../../input';
import NextQuestion from '../next-question';
import { Section, LinksContainer, RightLink } from './styled';
import { ADD_SENTENCE_URL, WHAT_URL } from '../../../constants';
import validateInput from '../../../utils/validateInput';

const WhoComponent = () => {
	const dispatch = useDispatch();
	const who = useSelector((state: RootState) => state.sentence.who);

	const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateWho(validateInput(event.target.value)));
	};

	return (
		<Section>
			<LinksContainer>
				<RightLink>
					<NextQuestion link={`${ADD_SENTENCE_URL}/${WHAT_URL}`} />
				</RightLink>
			</LinksContainer>
			<TextInput
				name='who'
				title='WHO'
				data={who}
				onChange={onInputChangeHandler}
			/>
		</Section>
	);
};

export default WhoComponent;
