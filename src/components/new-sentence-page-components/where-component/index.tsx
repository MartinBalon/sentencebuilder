import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { updateWhere } from '../../../store/sentenceSlice';
import PreviousQuestion from '../previous-question';
import TextInput from '../../input';
import { LinksContainer, LeftLink, RightLink } from './styled';
import { ADD_SENTENCE_URL, WHAT_URL, WHEN_URL } from '../../../constants';
import validateInput from '../../../utils/validateInput';
import NextQuestion from '../next-question';

const WhereComponent = () => {
	const dispatch = useDispatch();
	const where = useSelector((state: RootState) => state.sentence.where);

	const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateWhere(validateInput(event.target.value)));
	};

	return (
		<section>
			<LinksContainer>
				<LeftLink>
					<PreviousQuestion link={`${ADD_SENTENCE_URL}/${WHAT_URL}`} />
				</LeftLink>
				<RightLink>
					<NextQuestion link={`${ADD_SENTENCE_URL}/${WHEN_URL}`} />
				</RightLink>
			</LinksContainer>
			<TextInput
				name='where'
				title='WHERE'
				data={where}
				onChange={onInputChangeHandler}
			/>
		</section>
	);
};

export default WhereComponent;
