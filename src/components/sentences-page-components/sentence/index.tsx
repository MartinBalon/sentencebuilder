import DetailLogo from './detail-logo';
import DeleteLogo from './delete-logo';
import { ListItem, Paragraph } from './styled';

const Sentence = () => {
	return (
		<ListItem even={true}>
			<Paragraph even={true}>Mark is playing footbal.</Paragraph>
			<DetailLogo even={true} />
			<DeleteLogo />
		</ListItem>
	);
};

export default Sentence;
