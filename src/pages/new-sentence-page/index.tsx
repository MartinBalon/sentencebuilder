import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { deleteSentence } from '../../store/sentenceSlice';
import { addSentence } from '../../store/allSentencesSlice';
import { Outlet } from 'react-router';
import { Main, Divider, Section, Footer } from './styled';
import Button from '../../components/button';
import BottomNavigation from '../../components/new-sentence-page-components/bottom-navigation';
import SentenceOverview from '../../components/new-sentence-page-components/sentence-overview';
import { SentenceState } from '../../store/sentenceSlice';
import randomStringGenerator from '../../utils/randomStringGenerator';

const NewSentence = () => {
	const sentenceData = useSelector((state: RootState) => state.sentence);
	const dispatch = useDispatch();

	let sentenceIsValid: boolean;
	if (
		sentenceData.who.valid &&
		sentenceData.what.valid &&
		sentenceData.where.valid &&
		sentenceData.when.valid
	) {
		sentenceIsValid = true;
	} else {
		sentenceIsValid = false;
	}

	let dataToBeDeleted: boolean;
	if (
		sentenceData.who.value ||
		sentenceData.what.value ||
		sentenceData.where.value ||
		sentenceData.when.value
	) {
		dataToBeDeleted = true;
	} else {
		dataToBeDeleted = false;
	}

	const createSentence = (data: SentenceState, valid: boolean) => {
		if (valid) {
			return `${data.who.value} ${data.what.value} ${data.where.value} ${data.when.value}.`;
		} else {
			return '';
		}
	};

	const onSubmitHandler = () => {
		dispatch(
			addSentence({
				id: randomStringGenerator(32),
				createdAt: Date.now(),
				sentence: createSentence(sentenceData, sentenceIsValid),
			})
		);
		dispatch(deleteSentence());
	};

	const onDeleteHandler = () => {
		dispatch(deleteSentence());
	};

	return (
		<>
			<Main>
				<Outlet />
				<Divider />
				<SentenceOverview />
				<Section>
					<Button
						type='delete'
						title='DELETE'
						disabled={!dataToBeDeleted}
						onClick={onDeleteHandler}
					/>
					<Button
						type='save'
						title='SAVE'
						disabled={!sentenceIsValid}
						onClick={onSubmitHandler}
					/>
				</Section>
			</Main>
			<Footer>
				<BottomNavigation />
			</Footer>
		</>
	);
};

export default NewSentence;
