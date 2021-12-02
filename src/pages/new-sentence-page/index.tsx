import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { deleteSentence } from '../../store/sentenceSlice';
import { addSentence } from '../../store/allSentencesSlice';
import { Outlet, Navigate } from 'react-router';
import {
	Main,
	Divider,
	Section,
	Footer,
	ErrorMessage,
	SuccessMessage,
} from './styled';
import Button from '../../components/button';
import BottomNavigation from '../../components/new-sentence-page-components/bottom-navigation';
import SentenceOverview from '../../components/new-sentence-page-components/sentence-overview';
import randomStringGenerator from '../../utils/randomStringGenerator';
import createSentence from '../../utils/createSentence';
import LoadingSpinner from '../../components/loadingSpinner';
import { ADD_SENTENCE_URL, WHO_URL } from '../../constants';

const NewSentence = () => {
	const sentenceData = useSelector((state: RootState) => state.sentence);
	const dispatch = useDispatch();
	const [submiting, setSubmiting] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [redirectUser, setRedirectUser] = useState(false);

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

	// setting redirect to false - otherwise it's true after submit which creates endless loop
	useEffect(() => {
		setRedirectUser(false);
	});

	useEffect(() => {
		if (submiting) {
			const loadingAnimationTimer = setTimeout(() => {
				setSubmiting(false);
			}, 1000);
			return () => clearInterval(loadingAnimationTimer);
		}
	}, [submiting]);

	useEffect(() => {
		if (success || error) {
			const redirectTimer = setTimeout(() => {
				setRedirectUser(true);
				setError(false);
				setSuccess(false);
			}, 2500);
			return () => clearInterval(redirectTimer);
		}
	}, [success, error]);

	const onSubmitHandler = () => {
		setSubmiting(true);
		const createdSentence = createSentence(sentenceData, sentenceIsValid);

		if (createdSentence) {
			dispatch(
				addSentence({
					id: randomStringGenerator(32),
					createdAt: Date.now(),
					sentence: createdSentence,
				})
			);
			setSuccess(true);
			dispatch(deleteSentence());
		} else {
			setError(true);
		}
	};

	const onDeleteHandler = () => {
		dispatch(deleteSentence());
	};

	return (
		<>
			<Main>
				<Outlet />
				<Divider />
				{!submiting && !success && !error && (
					<>
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
					</>
				)}
				{submiting && <LoadingSpinner />}
				{error && !submiting && (
					<ErrorMessage>
						Something went wrong. Please try to create a sentence again.
					</ErrorMessage>
				)}
				{success && !submiting && (
					<SuccessMessage>
						Success! Your sentence have been created!
					</SuccessMessage>
				)}
				{redirectUser && <Navigate to={`${ADD_SENTENCE_URL}/${WHO_URL}`} />}
			</Main>
			<Footer>
				<BottomNavigation />
			</Footer>
		</>
	);
};

export default NewSentence;
