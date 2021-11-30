import DetailLogo from './detail-logo';
import DeleteLogo from './delete-logo';
import { Section, Paragraph } from './styled';

const Sentence = () => {
	return (
		<Section even={true}>
			<Paragraph even={true}>Mark is playing footbal.</Paragraph>
			<DetailLogo even={true} />
			<DeleteLogo />
		</Section>
	);
};

export default Sentence;
