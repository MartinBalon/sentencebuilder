import { MainParagraph, Paragraph } from './styled';
import CorrectSentenceIndicator from './correct-sentence-indicator';

const SentenceOverview = () => {
	return (
		<section>
			<MainParagraph>Sentence:</MainParagraph>
			<Paragraph>Mark is playin footbal at stadium tonight.</Paragraph>
			<CorrectSentenceIndicator success={true} />
		</section>
	);
};

export default SentenceOverview;
