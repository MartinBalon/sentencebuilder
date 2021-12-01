import { StyledLink, Container, Div } from './styled';
import { QuestionNavProps } from '../../../common/types';
import ArrowLeft from './arrow-left';

const PreviousQuestion = ({ link }: QuestionNavProps) => {
	return (
		<StyledLink to={link}>
			<Container>
				<ArrowLeft />
				<Div>
					Previous <br />
					question
				</Div>
			</Container>
		</StyledLink>
	);
};

export default PreviousQuestion;
