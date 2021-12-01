import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { updateWhen } from '../../../store/sentenceSlice';
import TextInput from '../../input';
import PreviousQuestion from '../previous-question';
import { LinksContainer, LeftLink } from './styled';
import { ADD_SENTENCE_URL, WHERE_URL } from '../../../constants';
import validateInput from '../../../utils/validateInput';

const WhenComponent = () => {
	const dispatch = useDispatch();
	const when = useSelector((state: RootState) => state.sentence.when);

	const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateWhen(validateInput(event.target.value)));
	};

	return (
		<section>
			<LinksContainer>
				<LeftLink>
					<PreviousQuestion link={`${ADD_SENTENCE_URL}/${WHERE_URL}`} />
				</LeftLink>
			</LinksContainer>
			<TextInput
				name='when'
				title='WHEN'
				data={when}
				onChange={onInputChangeHandler}
			/>
		</section>
	);
};

export default WhenComponent;
