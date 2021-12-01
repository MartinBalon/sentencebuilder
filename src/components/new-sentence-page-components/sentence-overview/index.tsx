import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import { MainParagraph, Paragraph, Span } from './styled';
import CorrectSentenceIndicator from './correct-sentence-indicator';

const SentenceOverview = () => {
	const sentenceData = useSelector((state: RootState) => state.sentence);
	const who = sentenceData.who;
	const what = sentenceData.what;
	const when = sentenceData.when;
	const where = sentenceData.where;

	const wordWho = who.valid ? who.value : <Span>Who</Span>;
	const wordWhat = what.valid ? what.value : <Span>what</Span>;
	const wordWhen = when.valid ? when.value : <Span>when</Span>;
	const wordWhere = where.valid ? where.value : <Span>where</Span>;

	let success: boolean;
	if (who.valid && what.valid && when.valid && where.valid) {
		success = true;
	} else {
		success = false;
	}

	return (
		<section>
			<MainParagraph>Sentence:</MainParagraph>
			<Paragraph>
				{wordWho} {wordWhat} {wordWhere} {wordWhen}
				{when.valid ? '.' : <Span>.</Span>}
			</Paragraph>
			<CorrectSentenceIndicator success={success} />
		</section>
	);
};

export default SentenceOverview;
