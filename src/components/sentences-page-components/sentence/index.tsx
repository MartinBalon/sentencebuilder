import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeSentence } from '../../../store/allSentencesSlice';
import DetailLogo from './detail-logo';
import DeleteLogo from './delete-logo';
import {
	CloseButton,
	DateParagraph,
	ListItem,
	Paragraph,
	SentenceDetail,
	SentenceDetailWrapper,
	SentenceParagraph,
} from './styled';
import { SentenceProps } from '../../../common/types';
import createDateFromTimestamp from '../../../utils/createDateFromTimestamp';

const Sentence = ({ sentenceData }: SentenceProps) => {
	const dispatch = useDispatch();
	const [showDetail, setShowDetail] = useState(false);
	const date = createDateFromTimestamp(sentenceData.createdAt);

	const onDeleteSentenceHandler = () => {
		dispatch(removeSentence(sentenceData));
	};

	const onDetailSentenceHandler = () => {
		setShowDetail(true);
	};

	const onCloseDetailHandler = () => {
		setShowDetail(false);
	};

	return (
		<>
			<ListItem>
				<Paragraph>{sentenceData.sentence}</Paragraph>
				<DetailLogo onclick={onDetailSentenceHandler} />
				<DeleteLogo onclick={onDeleteSentenceHandler} />
			</ListItem>
			{showDetail && (
				<SentenceDetailWrapper>
					<SentenceDetail>
						<SentenceParagraph>{sentenceData.sentence}</SentenceParagraph>
						<DateParagraph>{date}</DateParagraph>
						<CloseButton onClick={onCloseDetailHandler}>CLOSE</CloseButton>
					</SentenceDetail>
				</SentenceDetailWrapper>
			)}
		</>
	);
};

export default Sentence;
